import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import TP4App from './tp4/App';
import TP5App from './tp5/App';
import TP6App from './tp6/App';
import TP7App from './tp7/App';

const TP_ITEMS = [
  { key: 'TP4', title: 'TP4 — Navigation', icon: 'layers' },
  { key: 'TP5', title: 'TP5 — Auth + Drawer', icon: 'person' },
  { key: 'TP6', title: 'TP6 — Redux / Zustand', icon: 'git-branch' },
  { key: 'TP7', title: 'TP7 — API / Offline', icon: 'cloud-download' },
];

export default function App() {
  const [selected, setSelected] = useState(null);

  if (!selected) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.menu}>
          <Text style={styles.title}>Sélecteur de TP</Text>
          {TP_ITEMS.map((item) => (
            <TouchableOpacity key={item.key} style={styles.row} onPress={() => setSelected(item.key)}>
              <View style={styles.iconBox}>
                <Ionicons name={item.icon} size={24} color="#007AFF" />
              </View>
              <Text style={styles.rowText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setSelected(null)}>
          <Ionicons name="arrow-back" size={22} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{selected}</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.container}>
        {selected === 'TP4' && <TP4App />}
        {selected === 'TP5' && <TP5App />}
        {selected === 'TP6' && <TP6App />}
        {selected === 'TP7' && <TP7App />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  menu: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, textAlign: 'center', marginBottom: 20 },
  row: { flexDirection: 'row', alignItems: 'center', padding: 12, marginVertical: 6, borderRadius: 8, backgroundColor: '#f6f8fb' },
  iconBox: { width: 36, alignItems: 'center' },
  rowText: { fontSize: 16, marginLeft: 12 },
  header: { height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, borderBottomWidth: 1, borderColor: '#eee' },
  headerTitle: { fontSize: 18 },
  container: { flex: 1 },
});
