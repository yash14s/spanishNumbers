/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

import Sound from 'react-native-sound';
const soundList = [
  require('./one.wav'),
  require('./two.wav'),
  require('./three.wav'),
  require('./four.wav'),
  require('./five.wav'),
  require('./six.wav'),
  require('./seven.wav'),
  require('./eight.wav'),
  require('./nine.wav'),
  require('./ten.wav'),
];

const App = () => {
  const playSound = (sound) => {
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log('SOUND ERROR');
      }
    });
    setTimeout(() => {
      soundVar.play();
      console.log('playing');
    }, 500);
    soundVar.release();
  };
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require('./logo.png')} />
      <View style={styles.gridContainer}>
        {soundList.map((sound) => (
          <TouchableOpacity
            key={sound}
            style={styles.box}
            onPress={() => {
              playSound(sound);
            }}>
            <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(23,210,150)',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 20,
  },
  gridContainer: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 30,
    color: 'rgb(240,40,80)',
  },
  box: {
    height: 100,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
    backgroundColor: 'rgb(20,70,120)',
    borderRadius: 10,
    shadowColor: 'rgb(45,45,45)',
    elevation: 10,
  },
});
