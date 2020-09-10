
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
        marginBottom: 20,
        elevation: 2,
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
    },

    buttonDesign: {
        marginBottom: 5,
        backgroundColor: Colors.Status,
        width: widthPercentageToDP(80),
        padding: 15,
        borderRadius: 10,
        alignSelf: 'center',
    },
    CreateProfileColor: {
        color: Colors.Status,
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 24,
        marginTop: 20,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        lineHeight: 28
    },
    HeadText: {
        color: Colors.NewBackgroundColor,
        fontSize: 14,
        marginTop: 20,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        lineHeight: 28,
        marginBottom: 8
    },
    radioButtonsView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        justifyContent: 'space-between'
    },
    email: {
        // flex: 1,
        borderRadius: 10,
        borderColor: Colors.Status,
        borderWidth: 1,
        height: 50,
        width: 85
        // borderColor: 'transparent',
    },
    singleRadioButtonView: {
        // flexDirection: 'row',
        alignItems: 'center',
        // paddingHorizontal: 20,
    },
    radioText: {
        color: Colors.NewBackgroundColor
    },
    checkBoxView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    checkBoxText: {
        color: Colors.ColorSkyBlueDark
    },
    lbsone: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 8,
        marginRight: 30
    },
    lbstwo: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 8,
    },




    //health status
    cardview: {
        width: '47%',
        height: 135,
        elevation: 2,
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        borderRadius: 10,
    },
    InnerView: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 30,
    },
    InnerImage: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: 40,
        width: 40,
    },
    InnerText: {
        fontSize: 14,
        marginTop: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        letterSpacing: 0.04,
        fontFamily: fonts['Gotham-Bold'],
    },
    First2card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },



    //Motivation to join us


    MotivationQuestionCover: {
        height: 100,
        borderRadius: 20,
        backgroundColor: Colors.white,
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    MotivationQuestiontext: {
        color: Colors.Status,
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 24,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
    },
    InnerPortion: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40
    },
    MotivationAnser: {
        width: '100%',
        borderColor: Colors.Status,
        height: 50,
        elevation: 2,
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        borderRadius: 20,
    },


















    CardCover: {
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 15,
        marginRight: 15,
    },
    MotivationViewShadow: {
        // marginTop: 30,
        height: '100%',
        borderRadius: 20,
        // marginBottom: 20,
        elevation: 2,
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
    },

    Motivationcardview: {
        width: '100%',
        borderColor: Colors.Status,
        height: 50,
        elevation: 2,
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        borderRadius: 10,
    },
    MotivationInnerView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignContent: 'center',
    },
    MotivationInnerText: {
        fontSize: 16,
        letterSpacing: 0.04,
        fontFamily: fonts['Gotham-Medium'],
        marginTop: 15,
        marginLeft: 15
    },
    IconCheck: {
        color: Colors.white,
        fontSize: 18,
        marginRight: 15,
        marginTop: 15,

    },
    InnerPortion: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40
    },



    //letstalkfood

    letstalkkheading: {
        fontSize: 18,
        letterSpacing: 0.04,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 30,
        color: Colors.white,
        fontFamily: fonts['Gotham-Bold'],
    },
    letstalkksubheading: {
        fontSize: 14,
        letterSpacing: 0.04,
        justifyContent: 'center',
        alignSelf: 'center',
        color: Colors.white,
        fontFamily: fonts['Gotham-Light'],
    },


    //question

    // QuestionInnerView: {
    //     justifyContent: 'center',
    //     alignContent: 'center',
    // },
    QuestionViewShadow: {
        // marginTop: 30,
        height: '60%',
        borderRadius: 20,
        // marginBottom: 20,
        elevation: 2,
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
    },
    QuestionInnerText: {
        fontSize: 16,
        letterSpacing: 0.04,
        fontFamily: fonts['Gotham-Medium'],
        marginTop: 15,
        marginLeft: 15,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    questioncardview: {
        width: '100%',
        borderColor: Colors.Status,
        height: 50,
        marginTop: 15,
        elevation: 2,
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        borderRadius: 10,
    },
    questiontxt: {
        fontSize: 18,
        letterSpacing: 0.04,
        fontFamily: fonts['Gotham-Bold'],
        marginLeft: 5,
        marginBottom: 15,
        justifyContent: 'center',
        alignSelf: 'center',

    },
    questionarybottompic: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: 260,
        width: 260,
    },

    //after question
    afterquestionCardCover: {
        marginBottom: 100,
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
    },

    afterquestion: {
        color: Colors.Status,
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 24,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        lineHeight: 28
    },
});

