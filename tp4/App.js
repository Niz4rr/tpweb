import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import AppBar from '../screens/AppBar';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: '#007AFF' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Mes Détails Personnalisés' }} />
    </Stack.Navigator>
  );
}

export default function TP4App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <AppBar />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarActiveTintColor: 'blue',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: { backgroundColor: '#f0f0f0' },
              tabBarLabelStyle: { fontSize: 14 },
              tabBarIcon: ({ color, size }) => {
                let iconName = 'ellipse';
                if (route.name === 'Maison') iconName = 'home';
                if (route.name === 'Paramètres') iconName = 'settings';
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
          >
            <Tab.Screen name="Maison" component={HomeStack} />
            <Tab.Screen name="Paramètres" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
});
