import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import colors from '../styles/colors';
import userImg from '../assets/gabriel.png';
import fonts from '../styles/fonts';
import { color } from 'react-native-reanimated';


export function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(user || '');
    }

    loadStorageUserName();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá, </Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Image
        style={styles.image}
        source={userImg}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingVertical: 20,
    marginTop: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  }

});