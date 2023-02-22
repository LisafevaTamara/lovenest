import * as React from 'react';
import {
  Text,
  SafeAreaView,
  ImageBackground,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GlobalStyles} from '../assets/styles/GlobalStyles';
import Props from '../NavigationProps';

const HomePage = function ({navigation}: Props) {
  const bgImage = require('../assets/images/backgrounds/main.png');

  const toPractics = () => {
    navigation.navigate('Main', {screen: 'PracticCategoriesList'});
  };
  const toDialog = () => {};
  const toMusic = () => {};

  let username = 'USERNAME';

  return (
    <SafeAreaView style={GlobalStyles.globalContainer}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={GlobalStyles.mainBackground}>
        <View style={styles.body}>
          <Text style={styles.title}>Добрый день, {username}</Text>

          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuBtn} onPress={toDialog}>
              <LinearGradient
                style={styles.menuBtnBackground}
                colors={['#DBB3CE', '#6D65A0']}
                start={{x: 0.0, y: 0}}
                end={{x: 1.0, y: 0}}
                locations={[0.18, 0.89]}>
                <Text style={styles.menuBtnText}>Диалог</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuBtn} onPress={toPractics}>
              <LinearGradient
                style={styles.menuBtnBackground}
                colors={['#DBB3CE', '#6D65A0']}
                start={{x: 0.0, y: 0}}
                end={{x: 1.0, y: 0}}
                locations={[0.18, 0.89]}>
                <Text style={styles.menuBtnText}>Практика</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuBtn} onPress={toMusic}>
              <LinearGradient
                style={styles.menuBtnBackground}
                colors={['#DBB3CE', '#6D65A0']}
                start={{x: 0.0, y: 0}}
                end={{x: 1.0, y: 0}}
                locations={[0.18, 0.89]}>
                <Text style={styles.menuBtnText}>Музыка</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 36,
    lineHeight: 44,
    color: '#000000',
    marginBottom: 70,
  },
  menu: {
    flex: 1,
    gap: 50,
    alignItems: 'center',
    marginBottom: 130,
  },
  menuBtn: {
    width: '100%',
  },
  menuBtnBackground: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 15,
    borderRadius: 10,
  },
  menuBtnText: {
    fontWeight: '600',
    fontSize: 24,
    color: 'black',
  },
});

export default HomePage;
