import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { Colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { widthPercentageToDP, heightPercentageToDP } from '../../components/React Native Responsive Screen'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },

    SelectLanguage: {
        color: Colors.white,
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 16,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        lineHeight: 28
    },
    Content: {
        padding: 15,

    },
    buttonDesign: {
        marginBottom: 5,
        marginTop: 30,
        backgroundColor: Colors.white,
        width: widthPercentageToDP(70),
        padding: 15,
        borderRadius: 10,
        alignSelf: 'center',
    },

});

