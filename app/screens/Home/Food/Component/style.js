
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { Colors } from '../../../../styles/colors';
import { fonts } from '../../../../styles/fonts';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {widthPercentageToDP, heightPercentageToDP} from '../../../../components/React Native Responsive Screen'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    iconbuttons: {
        width: windowWidth-30,
        height: 55,
        // marginLeft:16,
        marginTop:10,
        borderRadius: 20,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems:'center',
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#9DD6EB'
    },
    slide2: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    wrapper: {
        height: 270
    },
    common_field: {
        // alignSelf:'flex-end',
        flexDirection: 'column',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    collap_cardstyle: {
        width: windowWidth - 30,
        height: '85%',
        margin: 10,
        backgroundColor: Colors.white,
        marginLeft: 16,
        paddingRight: 10,
        borderRadius: 20,

    },
    buttonDesign: {
        marginBottom: 5,
        backgroundColor: Colors.Status,
        width: widthPercentageToDP(60),
        padding: 15,
        borderRadius: 30,
        alignSelf: 'center',
    },
    SecondImageGuide: {
        marginTop: windowHeight/10,
        width: 300,
        height: 200,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    button_farword: {
        borderWidth: 1,
        borderColor: Colors.Status,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        marginBottom:4,
        borderRadius: 50,
    },
    oops: {
        fontSize: 18,
        fontFamily: fonts['Gotham-Bold'],
        letterSpacing: 0.04,
        color: Colors.Status
    },
    error1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 215,
        fontSize: 12,
        fontFamily: fonts['Gotham-Light'],
        letterSpacing: 0.04,
        color: Colors.NewBackgroundColor,
        marginTop: 5
    },
    error: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 215,
        fontSize: 12,
        fontFamily: fonts['Gotham-Light'],
        letterSpacing: 0.04,
        color: Colors.NewBackgroundColor,
        marginTop: 20
    },
    ModalInner: {
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    Modalbox: {
        backgroundColor: Colors.white,
        height: 500,
        borderRadius: 20,
    },
    modalview: {
        elevation: 2,
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
    },
    PopupImage: {
        marginTop: 10,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    Popup_field: {
        // alignSelf:'flex-end',
        flexDirection: 'column',
        marginTop: 2,
        marginLeft: 10,
        marginRight: 10
    },
    Popup_text:{
        fontSize: 10,
        fontFamily: fonts['Gotham-Light'],
        letterSpacing: 0.04,
    },
    subfoodicon: {
        // marginTop: 30,
        width: 20,
        height: 20,
        justifyContent: 'center',
        marginTop:3,
        alignSelf: 'center'
    },
    secondfoodicon: {
        // marginTop: 30,
        width: 25,
        height: 25,
        justifyContent: 'center',
        marginTop:3,
        alignSelf: 'center'
    },

});

