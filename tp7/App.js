import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import TodoListFetchScreen from './screens/TodoListFetchScreen';
import TodoListOfflineScreen from './screens/TodoListOfflineScreen';
import { initDB } from './services/database';

// Toggle this flag to switch between FETCH demo and OFFLINE demo.
const OFFLINE_MODE = false; // set true to run offline demo

function MainApp() {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
      {OFFLINE_MODE ? <TodoListOfflineScreen /> : <TodoListFetchScreen />}
    </View>
  );
}

export default function App() {
  const [dbReady, setDbReady] = useState(!OFFLINE_MODE);

  useEffect(() => {
    if (OFFLINE_MODE) {
      const prepareDb = async () => {
        await initDB();
        setDbReady(true);
      };
      prepareDb();
    }
  }, []);

  if (!dbReady) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40 },
  light: { backgroundColor: '#ffffff' },
  dark: { backgroundColor: '#121212' },
});
