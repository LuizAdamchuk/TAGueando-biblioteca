import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Camera } from '../screens/Camera';
import { MainTabScreen } from '../routes/MainTabScreen.routes';

const HomeStack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="TabBar" headerMode="none">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Camera} />
      <HomeStack.Screen name="TabBar" component={MainTabScreen} />
    </HomeStack.Navigator>
  );
};
