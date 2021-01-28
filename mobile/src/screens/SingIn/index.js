import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';

import logo from '../../assets/logo.png';
import { useAuth } from '../../hooks/authContext';
import { styles } from './style';

const { height } = Dimensions.get('window');
export const SingIn = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const handleSecureTextEntry = useCallback(() => {
    setSecureTextEntry(!secureTextEntry);
  }, [secureTextEntry]);

  const handleSignIn = useCallback(async () => {
    setIsSubmiting(true);

    const parsedData = {
      email: formik.values.email.trim(),
      password: formik.values.password.trim(),
    };
    const res = await signIn(parsedData);

    if (res.status !== 200) {
      setIsSubmiting(false);

      return Alert.alert('Atençao', 'Email e/ou senha incorretos.');
    }
  }, [formik.values]);

  return (
    <ScrollView>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.headerImg} resizeMode="contain" source={logo} />
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={
            Platform.OS === 'ios' ? -(height * 0.25) : -height
          }
        >
          <View style={styles.footer}>
            <View style={styles.inputContent}>
              <View style={styles.inputContainer}>
                <TextInput
                  autoCapitalize="none"
                  keyboardAppearance="dark"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  placeholder="Login"
                  style={styles.textInput}
                  name="email"
                  onChangeText={formik.handleChange('email')}
                  value={formik.values.email}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  secureTextEntry={secureTextEntry}
                  keyboardAppearance="dark"
                  placeholder="Senha"
                  textContentType="password"
                  keyboardType="default"
                  style={styles.textInput}
                  name="password"
                  onChangeText={formik.handleChange('password')}
                  value={formik.values.password}
                />
                <TouchableOpacity onPress={handleSecureTextEntry}>
                  <Feather
                    name={secureTextEntry ? 'eye-off' : 'eye'}
                    size={20}
                    color="#666"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              {isSubmiting === true ? (
                <TouchableOpacity
                  style={styles.signInButton}
                  onPress={handleSignIn}
                >
                  <ActivityIndicator size="small" color="#fff" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.signInButton}
                  onPress={handleSignIn}
                >
                  <Text style={styles.textSignButton}>Login</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={styles.containerButtonRow}
                onPress={() => navigation.navigate('SignUp')}
              >
                <Text style={styles.textSignUpButton}>Cadastrar-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};
