import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react';

import { api } from '../services/api';
import { EMAIL_KEY, TOKEN_KEY, USER_ID } from '../constants/Keys';
import AsyncStorage from '@react-native-community/async-storage';
import { clockRunning } from 'react-native-reanimated';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    async function loadStoragedDate() {
      setIsLoading(true);

      const [token, user, id] = await AsyncStorage.multiGet([
        TOKEN_KEY,
        EMAIL_KEY,
        USER_ID,
      ]);
      console.log(JSON.parse(user[1]));

      if (token[1] !== null && user[1] !== null) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;
        setData({ token: token[1], user: JSON.parse(user[1]), id: id[1] });
        setValidate(true);
        setIsLoading(false);

        return;
      }
      // setData({});
      setIsLoading(false);
      setValidate(false);
    }
    loadStoragedDate();
  }, []);

  const signIn = useCallback(async data => {
    try {
      const response = await api.post('users/login', data);

      const { token, email, id } = response.data;
      api.defaults.headers.authorization = `Bearer ${token}`;
      await AsyncStorage.multiSet([
        [TOKEN_KEY, token],
        [EMAIL_KEY, JSON.stringify(email)],
        [USER_ID, String(id)],
      ]),
        (api.defaults.headers.authorization = `Bearer ${token}`);
      console.log(id);
      setData({ token, user: email, id: id });
      setValidate(true);
      setIsLoading(false);
      return;
    } catch (error) {
      return error;
    }
  }, []);

  const signUp = useCallback(async user => {
    try {
      const res = await api.post('users/', user);
      return res;
    } catch (error) {
      return error;
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([TOKEN_KEY, EMAIL_KEY]);

    setValidate(false);

    return setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{ data, isLoading, validate, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used with an AuthProvider');
  }
  return context;
}
