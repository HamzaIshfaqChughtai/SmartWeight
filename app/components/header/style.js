import React from 'react';

import { StyleSheet } from 'react-native';
import { fonts } from '../../styles/fonts';
import { Colors } from '../../styles/colors';
export const styles = StyleSheet.create({
  headerleftimage: {
    width: 28,
    height: 28,

  },
  BadgeIcon: {
    backgroundColor: Colors.gold,
    height: 11,
    width: 11,
    position: 'absolute',
    left: 21,
    top: 12,
    borderRadius: 60,
    borderColor: Colors.backgroundColor,
    borderWidth: 2
  },
  headerTitleStyle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 5,
    fontFamily: fonts["Rocky-Bold"]
  },
  headerButtonIcon: {
    fontSize: 26,
    color: Colors.gold,

  },
  image0ne: {
    width: 20,
    height: 20,
  },
  imageinbox: {
    margin: 10,
    width: 30,
    height: 30,
  },
  imagetwo: {
    margin: 10,
    width: 20,
    height: 20,
  },
  imagethree: {
    marginRight: 12,
    width: 20,
    height: 20,
  },
});
