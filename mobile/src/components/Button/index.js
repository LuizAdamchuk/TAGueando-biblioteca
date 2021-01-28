import React from 'react';

import { Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Colors from '../../constants/Colors';

export const Button = ({ variant, label, onPress }) => {
  const backgroundColor =
    variant === 'primary'
      ? Colors.primary
      : variant === 'transparent'
      ? 'transparent'
      : variant === 'white'
      ? Colors.white
      : variant === 'secondary' && Colors.secondary;
  const color =
    variant === 'primary'
      ? Colors.white
      : variant === 'transparent'
      ? Colors.grayText
      : variant === 'white'
      ? Colors.grayText
      : variant === 'secondary' && Colors.white;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    height: 48,
    width: 288,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    textAlign: 'center',
  },
});
