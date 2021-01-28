import React from 'react';

import { View, ActivityIndicator } from 'react-native';

import { RootStackScreen } from './RootScreen.routes';
import { HomeStackNavigator } from './HomeStackNavigator.routes';
import { useAuth } from '../hooks/authContext';

export const Routes = () => {
  const { data, isLoading, validate } = useAuth();
  console.log(validate);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }
  return validate ? <HomeStackNavigator /> : <RootStackScreen />;
};
