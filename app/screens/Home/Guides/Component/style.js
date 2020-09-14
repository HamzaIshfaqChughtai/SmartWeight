
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { Colors } from '../../../../styles/colors';
import { fonts } from '../../../../styles/fonts';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const styles = StyleSheet.create({

    //guide one style

    cardstyleinneritem: {
        flex: 1,
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: Colors.white
    },
    TextStyleOne: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 12,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        lineHeight: 25,
        color: Colors.NewBackgroundColor
    },
    TextStyleTwo: {
        marginTop: 25,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        lineHeight: 25,
        color: Colors.NewBackgroundColor

    },
    TextStylePoints: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 12,

        marginLeft: 15,
        marginRight: 15,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        lineHeight: 25,
        color: Colors.white,
        textAlign: 'center'

    },
    TextStylePointsend: {
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 10,

        marginLeft: 15,
        marginRight: 15,
        fontFamily: fonts['Gotham-Light'],
        letterSpacing: 0.04,
        lineHeight: 25,
        color: Colors.white
    },
    GuideFirstPic: {
        marginTop: 10,
        width: 200,
        height: 100,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    SecondImageGuide: {
        marginTop: 10,
        width: 300,
        height: 200,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    guidedarkPic: {
        marginTop: 30,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignSelf: 'center'
    },





    wrapper: {
        height: 300
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
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },






    //guide two


    guideTwo1: {
        marginTop: 30,
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignSelf: 'center'
    },




    //four



    promo_mainview: {
        flexDirection: 'row', justifyContent: 'space-between'
    },

    promo_column: {
        marginLeft: '10%'
    },
    dark_text: {
        color: Colors.otherChatBubbleColor, fontSize: 15
    },
    portiontext: {
        color: Colors.Status,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    daily_promo_mainview: {
        flexDirection: 'row',
        marginTop: '15%'
    },
    DailyPromotionText: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        color: Colors.NewBackgroundColor,
    },
    DailyPromotionpoint: {
        fontSize: 14,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        color: Colors.lightgray,
    },
    SecondDootedLine: {
        borderStyle: 'dotted',
        height: 40,
        marginLeft: '7%',
        borderColor: Colors.Motivationcolor,
        borderLeftWidth: 5
    },
    portiontext: {
        color: Colors.Status,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    Pointscircle: {
        fontSize: 12,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        textAlign: 'center',
        color: Colors.NewBackgroundColor
    },
    DotedLine: {
        borderStyle: 'dotted',
        height: 40,
        marginLeft: '7%',
        borderColor: Colors.Status,
        borderLeftWidth: 5
    },


    //five

    guidefive: {
        marginTop: 10,
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignSelf: 'center'
    },

    guideEight: {
        marginTop: 10,
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignSelf: 'center'
    },
});

