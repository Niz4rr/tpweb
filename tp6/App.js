import React, { useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider, { AuthContext } from '../tp5/context/AuthContext';
import AppDrawer from './navigation/AppDrawer';
import LoginScreen from '../tp5/screens/LoginScreen';
import { Provider } from 'react-redux';
import { store } from './store/store';

function RootNavigator() {
  const { user } = useContext(AuthContext);
  return user ? <AppDrawer /> : <LoginScreen />;
}

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </AuthProvider>
    </Provider>
  );
}
