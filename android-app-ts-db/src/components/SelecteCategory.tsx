import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import BreathIcon from '../assets/images/categories/BreathIcon';
import MeditationIcon from '../assets/images/categories/MeditationIcon';
import {Categories} from '../enums/Categories';

type SelectCategoryProps = {
  onSwitch: (category: Categories) => undefined;
};

export default function SelectCategory(props: SelectCategoryProps) {
  const [currentCategory, setCurrentCategory] = useState(Categories.Meditation);

  useEffect(() => {
    props.onSwitch(currentCategory);
  });

  return (
    <View style={styles.categoresList}>
      <TouchableOpacity
        style={[
          styles.category,
          currentCategory === Categories.Meditation
            ? styles.category_active
            : {},
        ]}
        onPress={() => setCurrentCategory(Categories.Meditation)}>
        <Text style={styles.categoryTitle}>Медитация</Text>

        <MeditationIcon style={styles.categoryIcon} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.category,
          currentCategory === Categories.Breath ? styles.category_active : {},
        ]}
        onPress={() => setCurrentCategory(Categories.Breath)}>
        <Text style={styles.categoryTitle}>Дыхание</Text>

        <BreathIcon style={styles.categoryIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  categoresList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 130,
  },
  category: {
    flex: 0,
    flexBasis: '50%',
    alignItems: 'center',
    backgroundColor: '#A756A5',
    paddingTop: 15,
    paddingBottom: 35,
    borderRadius: 10,
    gap: 6,
  },
  category_active: {
    gap: 12,
    backgroundColor: '#EAD0F7',
    transform: [{scale: 1.4}, {translateX: 25}, {translateY: 50}],
    zIndex: 10,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  categoryIcon: {},
  scrollView: {
    marginLeft: 24,
    marginRight: 26,
    marginTop: 12,
  },
});
