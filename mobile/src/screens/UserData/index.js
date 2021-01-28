import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text } from 'react-native';

import { useAuth } from '../../hooks/authContext';

import { styles } from './style';
import { api } from '../../services/api';
import { TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '../../components/Button';

export const UserData = () => {
  const { data: userData, signOut } = useAuth();

  const [emailInput, setEmailInput] = useState('');
  const [booksData, setBooksData] = useState('');

  const handleSignOut = useCallback(() => {
    signOut();
  }, []);

  useFocusEffect(
    useCallback(() => {
      console.log(userData.id);
      api
        .get(`/users/books/${userData.id}`)

        .then(response => setBooksData(response.data.books));
    }, []),
  );
  return (
    <ScrollView>
      <SafeAreaView />

      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput
              value={emailInput}
              onChangeText={setEmailInput}
              style={styles.input}
              placeholder={userData.user}
            />
            <View style={styles.bookListContainer}>
              {booksData ? (
                booksData.map((item, key) => (
                  <Text style={styles.bookListText} key={item.title}>
                    {item.title}
                  </Text>
                ))
              ) : (
                <Text></Text>
              )}
            </View>
          </View>
        </View>

        <Button variant="transparent" label="Sair" onPress={handleSignOut} />
      </View>
    </ScrollView>
  );
};
