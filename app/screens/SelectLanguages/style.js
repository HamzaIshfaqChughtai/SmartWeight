import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { Colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';


export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },

    SelectLanguage: {
        color: Colors.darktext,
        fontSize: 14,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        lineHeight: 28
    },
    Content: {
        padding: 15
    },

});

