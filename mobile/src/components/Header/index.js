import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { View, Text, StyleSheet, Dimensions } from 'react-native';

export const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <BorderlessButton onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} />
      </BorderlessButton>
      <View></View>
      <View></View>
    </View>
  );
};
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    width: width * 0.92,
    height: height * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
