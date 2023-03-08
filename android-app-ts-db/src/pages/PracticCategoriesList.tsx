import React from 'react';
import {
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import BreathIcon from '../assets/images/categories/BreathIcon';
import MeditationIcon from '../assets/images/categories/MeditationIcon';
import {GlobalStyles} from '../assets/styles/GlobalStyles';
import Props from '../NavigationProps';

export default function ({navigation}: Props) {
  const loadprlist = () => {
    navigation.navigate('Main', {screen: 'PracticCategory'});
  };

  const bgImage = require('../assets/images/backgrounds/main.png');

  return (
    <SafeAreaView style={GlobalStyles.globalContainer}>
      <ImageBackground source={bgImage} style={GlobalStyles.mainBackground}>
        <View style={styles.container}>
          <Text style={styles.title}>Выберите{'\n'}практику</Text>

          <View style={styles.buttons}>
            <View style={styles.categoryFrame}>
              <TouchableOpacity style={styles.category} onPress={loadprlist}>
                <BreathIcon />
              </TouchableOpacity>
              <Text style={styles.categoryName}>Дыхание</Text>
            </View>

            <View style={styles.categoryFrame}>
              <TouchableOpacity
                style={styles.category_med}
                onPress={loadprlist}>
                <MeditationIcon />
              </TouchableOpacity>
              <Text style={styles.categoryName}>Медитация</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 44,
    marginBottom: 150,
    color: '#000000',
  },
  buttons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 43,
  },
  categoryFrame: {
    alignItems: 'center',
  },
  category: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 112,
    height: 112,
    borderRadius: 20,
    backgroundColor: '#EAD0F7',
  },
  category_med: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 112,
    height: 112,
    borderRadius: 20,
    backgroundColor: '#A756A5',
  },
  categoryName: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
});
