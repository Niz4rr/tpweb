import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { loadTodos, addTodoOffline, updateTodoOffline, deleteTodoOffline } from '../services/database';
import { ThemeContext } from '../context/ThemeContext';

export default function TodoListOfflineScreen() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [editingId, setEditingId] = useState(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const refreshTodos = () => {
    setTodos(loadTodos());
  };

  const handleAddOrUpdate = () => {
    if (!title.trim()) return;
    if (editingId) {
      updateTodoOffline(editingId, title);
      setEditingId(null);
    } else {
      addTodoOffline(title);
    }
    setTitle('');
    refreshTodos();
  };

  const handleDelete = (id) => {
    deleteTodoOffline(id);
    refreshTodos();
  };

  useEffect(() => {
    refreshTodos();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Button title={`Passer en mode ${theme === 'light' ? 'dark' : 'light'}`} onPress={toggleTheme} />
      <View style={{ padding: 10 }}>
        <TextInput
          placeholder="Tâche offline"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        <Button title={editingId ? '✏️ Mettre à jour' : '➕ Ajouter hors ligne'} onPress={handleAddOrUpdate} />
      </View>

      {todos.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>Aucune tâche disponible hors ligne</Text>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text>{item.title}</Text>
              <View style={styles.rowButtons}>
                <Button
                  title="✏️"
                  onPress={() => {
                    setTitle(item.title);
                    setEditingId(item.id);
                  }}
                />
                <TouchableOpacity style={styles.deleteBtn} onPress={() => handleDelete(item.id)}>
                  <Text style={{ color: 'white' }}>🗑️</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', padding: 10 },
  rowButtons: { flexDirection: 'row', alignItems: 'center' },
  deleteBtn: { backgroundColor: 'red', padding: 6, marginLeft: 8, borderRadius: 4 },
});
