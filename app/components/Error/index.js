import React, { useState } from 'react';
import {
  Image,
  TouchableOpacity,
  Platform,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import { Button, Thumbnail } from 'native-base';
import { Colors } from '../../styles/colors';
import { globalStyles } from '../../styles/globalStyles';

export default function (props) {
  return (
    <View
      style={{
        paddingHorizontal: 30,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.gold,
      }}>
      <Text style={[globalStyles.header2, { marginTop: 75 }]}>{props.title}</Text>
      <Thumbnail
        small
        source={require('../../images/CircleIt_40.png')}
        style={{ alignSelf: 'center', marginVertical: 30 }}
      />
      <Text
        style={[
          globalStyles.errorAlertText,
          { textAlign: 'center', marginTop: 50 },
        ]}>
        {props.message}
      </Text>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          padding: 20,
          backgroundColor: 'transparent',
          alignSelf: 'center',
        }}>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => props.buttonAction()}
          style={{
            marginBottom: 5,
            width: "100%",
            padding: 15,
            borderRadius: 24,
            marginTop: 15,
            alignSelf: 'center',
            backgroundColor: Colors.white,
          }}>

          <Text style={[globalStyles.header6, { color: Colors.black, alignSelf: 'center', textAlign: 'center', letterSpacing: 0.04, paddingTop: Platform.OS == "android" ? 0 : 3 }]}>OK</Text>
        </TouchableOpacity>



      </View>
    </View>
  );
}
