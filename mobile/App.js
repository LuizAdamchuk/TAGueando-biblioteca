import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppContextProvider } from './src/hooks/index';
import { Routes } from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <AppContextProvider>
        <Routes />
      </AppContextProvider>
    </NavigationContainer>
  );
}
