import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import { UserData } from '../screens/UserData';
import { Home } from '../screens/Home';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: FontAwesome5,
    name: 'home',
  },

  UserData: {
    lib: FontAwesome5,
    name: 'user-alt',
  },
};

export const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Camera') {
            return (
              <CameraButtonTab
                focused={focused}
                onPress={() => navigation.navigate('Pay')}
              />
            );
          }
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: Colors.primary,
          borderTopColor: 'rgba(255,255,255,0.2)',
          height: 60,
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#8583fc',
      }}
    >
      <Tab.Screen name="Home" options={{ title: '' }} component={Home} />
      <Tab.Screen
        name="UserData"
        options={{ title: '' }}
        component={UserData}
      />
    </Tab.Navigator>
  );
};
