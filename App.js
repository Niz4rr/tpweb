import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Button, StyleSheet } from 'react-native';

import TP4App from './tp4/App';
import TP5App from './tp5/App';
import TP6App from './tp6/App';
import TP7App from './tp7/App';

export default function App() {
  const [selected, setSelected] = useState(null);

  if (!selected) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.menu}>
          <Text style={styles.title}>Sélecteur de TP</Text>
          <View style={styles.btn}>
            <Button title="TP4 — Navigation (Stack/Tab)" onPress={() => setSelected('TP4')} />
          </View>
          <View style={styles.btn}>
            <Button title="TP5 — Auth + Drawer" onPress={() => setSelected('TP5')} />
          </View>
          <View style={styles.btn}>
            <Button title="TP6 — Redux / Zustand" onPress={() => setSelected('TP6')} />
          </View>
          <View style={styles.btn}>
            <Button title="TP7 — API / Offline" onPress={() => setSelected('TP7')} />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Button title="← Menu" onPress={() => setSelected(null)} />
        <Text style={styles.headerTitle}>{selected}</Text>
        <View style={{ width: 64 }} />
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
  btn: { marginVertical: 8 },
  header: { height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, borderBottomWidth: 1, borderColor: '#eee' },
  headerTitle: { fontSize: 18 },
  container: { flex: 1 },
});
