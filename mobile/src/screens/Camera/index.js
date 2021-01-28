import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import { useAuth } from '../../hooks/authContext';
import { styles } from './style';
import { getDataFromGoogleBooksApi } from '../../services/googleBookApi';

export const Camera = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const { data: userData } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data: isbnNumber }) => {
    setScanned(true);
    console.log('tipo do codigo');
    console.log(type);
    if (Platform.OS === 'ios') {
      if (type !== 'org.gs1.EAN-13') {
        alert(`Código ISBN não reconhecido, desculpe!`);
        return;
      }
      getDataFromGoogleBooksApi(isbnNumber, userData.id);
    }
    if (Platform.OS === 'android') {
      if (type !== 32) {
        alert(`Código ISBN não reconhecido, desculpe!`);
        return;
      }
      getDataFromGoogleBooksApi(isbnNumber, userData.id);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {!scanned && (
        <View style={styles.middle}>
          <Feather name="crop" size={32} color="#fff" />
        </View>
      )}
      {scanned && (
        <>
          <Button
            title={'Escanear novamente'}
            onPress={() => setScanned(false)}
          />
          <TouchableOpacity
            style={styles.buttonOrange}
            onPress={() => navigation.navigate('UserData')}
          >
            <Text style={styles.buttonText}>Ver sua lista</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
