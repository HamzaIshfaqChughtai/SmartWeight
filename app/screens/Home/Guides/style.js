
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { Colors } from '../../../styles/colors';
import { fonts } from '../../../styles/fonts';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },

    cardstyle: {
        flex: 1,
        margin: 10,
        borderRadius: 20,
        backgroundColor: Colors.white

    },
    MediaView: {
        height: 65,
        width: '100%',
        backgroundColor: Colors.white,
        borderRadius: 20,
        justifyContent: 'center',
        alignContent: 'center'
    },
    MediaViewSecond: {
        height: 65,
        marginTop: 20,
        width: '100%',
        backgroundColor: Colors.white,
        borderRadius: 20,
        justifyContent: 'center',
        alignContent: 'center'
    },
    GuideType: {
        marginLeft: '10%',
        fontSize: 16,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        color: Colors.Status
    },
    GuideTypeName: {
        marginLeft: 10,
        fontSize: 16,
        fontFamily: fonts['Gotham-Light'],
        letterSpacing: 0.04,
        color: Colors.NewBackgroundColor
    }

});

