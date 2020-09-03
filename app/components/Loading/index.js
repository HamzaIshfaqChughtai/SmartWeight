import React, { useState } from 'react';
import {
  Image,
  TouchableOpacity,
  Platform,
  View,
  ActivityIndicator,
} from 'react-native';
import { Colors } from '../../styles/colors';

export default function (props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.transparent ? "transparent" : 'rgba(0,0,0,0.8)',
        width: '100%'
      }}>
      <ActivityIndicator size="large" color={Colors.gold} />
    </View>
  );
}
