import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoListReduxScreen from '../screens/TodoListReduxScreen';
import TodoDetailsReduxScreen from '../screens/TodoDetailsReduxScreen';
import TodoListZustandScreen from '../screens/TodoListZustandScreen';
import TodoDetailsZustandScreen from '../screens/TodoDetailsZustandScreen';

const Stack = createNativeStackNavigator();
export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListeRedux" component={TodoListReduxScreen} options={{ title: 'Liste (Redux)' }} />
      <Stack.Screen name="DétailsRedux" component={TodoDetailsReduxScreen} options={{ title: 'Détails' }} />
      <Stack.Screen name="ListeZustand" component={TodoListZustandScreen} options={{ title: 'Liste (Zustand)' }} />
      <Stack.Screen name="DétailsZustand" component={TodoDetailsZustandScreen} options={{ title: 'Détails' }} />
    </Stack.Navigator>
  );
}
