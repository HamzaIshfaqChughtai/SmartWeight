
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { Colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { widthPercentageToDP, heightPercentageToDP } from '../../components/React Native Responsive Screen'


export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    ViewShadow: {
        marginTop: 30,
        height: '95%',
        borderRadius: 20,
        marginBottom: 30,
        elevation: 2,
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
    },
    or: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
        color: Colors.Draft,
        fontFamily: fonts['Gotham-Light']

    },
    AppImage: {
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 15
    },
    email: {
        // flex: 1,
        borderRadius: 10,
        borderColor: Colors.Status,
        borderWidth: 1,
        height: 50,
        // borderColor: 'transparent',
    },
    password: {
        // flex: 1,
        borderRadius: 10,
        borderColor: Colors.Status,
        borderWidth: 1,
        height: 50,
    },
    forgotPass: {
        color: Colors.NewBackgroundColor,
        alignSelf: 'flex-end',
        fontSize: 12,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        lineHeight: 28,
        marginTop: 10
    },
    buttonDesign: {
        marginBottom: 5,
        backgroundColor: Colors.Status,
        width: widthPercentageToDP(75),
        padding: 15,
        borderRadius: 10,
        alignSelf: 'center',
    },

});

