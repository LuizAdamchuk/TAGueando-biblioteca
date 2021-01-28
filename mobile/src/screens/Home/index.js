import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title="Acessar Camera para ler ISBN"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
