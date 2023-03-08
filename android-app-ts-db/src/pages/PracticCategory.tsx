import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  FlatList,
} from 'react-native';
import AirBalloonIcon from '../assets/images/practic-icons/air-balloon-icon';
import AppleIcon from '../assets/images/practic-icons/apple-icon';
import StarIcon from '../assets/images/practic-icons/star-icon';
import {GlobalStyles} from '../assets/styles/GlobalStyles';
import PracticCard, {PracticCardProps} from '../components/PracticCard';
import SelectCategory from '../components/SelecteCategory';

export default function PractList() {
  const bgImage = require('../assets/images/backgrounds/main.png');

  const dataList: Array<PracticCardProps> = [
    {name: 'Полет на воздушном шаре', time: '4 мин', image: AirBalloonIcon},
    {name: 'Яблоневый сад', time: '4 мин', image: AppleIcon},
    {name: 'Полёт к звёздам', time: '4 мин', image: StarIcon},

    {name: 'Полет на воздушном шаре', time: '4 мин', image: AirBalloonIcon},
    {name: 'Яблоневый сад', time: '4 мин', image: AppleIcon},
    {name: 'Полёт к звёздам', time: '4 мин', image: StarIcon},

    {name: 'Полет на воздушном шаре', time: '4 мин', image: AirBalloonIcon},
    {name: 'Яблоневый сад', time: '4 мин', image: AppleIcon},
    {name: 'Полёт к звёздам', time: '4 мин', image: StarIcon},
  ];

  return (
    <SafeAreaView style={GlobalStyles.globalContainer}>
      <ImageBackground source={bgImage} style={GlobalStyles.mainBackground}>
        <SelectCategory
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onSwitch={category => undefined}
        />
        <FlatList
          contentContainerStyle={styles.scrollPracticList}
          data={dataList}
          renderItem={item => <PracticCard {...item.item} />}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollPracticList: {
    display: 'flex',
    gap: 24,
    paddingBottom: 20,
  },
});
