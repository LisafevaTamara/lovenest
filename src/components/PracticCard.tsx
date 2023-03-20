import React, {ComponentType} from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';

export type PracticCardProps = {
  time: string;
  name: string;
  image: ComponentType;
};

export default function PracticCard(props: PracticCardProps) {
  const bell = require('../assets/images/icons/bell.png');

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.topbar}>
        <TouchableOpacity style={styles.toNotifiy}>
          <Image source={bell} style={styles.toNotifiyImg} />
        </TouchableOpacity>
        <Text style={styles.time}>{props.time}</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.name}>{props.name}</Text>
        <props.image />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAD0F7',
    borderRadius: 10,
    overflow: 'hidden',
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  toNotifiy: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  toNotifiyImg: {
    width: 25,
    height: 25,
  },
  time: {
    fontSize: 12,
    textTransform: 'uppercase',
    paddingHorizontal: 15,
    paddingVertical: 6,
    backgroundColor: 'black',
    color: 'white',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 0,
  },
  name: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    flexBasis: '70%',
    marginTop: 'auto',
  },
});
