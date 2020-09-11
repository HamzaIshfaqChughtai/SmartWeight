
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { Colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { widthPercentageToDP, heightPercentageToDP } from '../../components/React Native Responsive Screen'
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
        height: windowHeight / 2,
        borderRadius: 20,
        backgroundColor: Colors.white

    },
    collap_cardstyle: {
        // width:windowWidth,
        width: '89%',
        height: windowHeight / 2.1,
        margin: 10,
        marginLeft: '4%',
        paddingRight: 10,
        borderRadius: 20,
        elevation: 2,
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 1,

    },
    WelcomeView: {
        marginLeft: 20,
        marginTop: 20
    },
    text_welcome: {
        fontSize: 18,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        color: Colors.NewBackgroundColor
    },
    text_name: {
        fontSize: 18,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        color: Colors.NewBackgroundColor
    },
    guidetab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginLeft: 60,
        marginRight: 60
    },

    textfood: {
        fontSize: 14,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        color: Colors.lightgray,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    textGuide: {
        fontSize: 14,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        color: Colors.lightgray,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    Foodclivk: {
        height: 40,
        width: 90,
        borderRadius: 40,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    DotedLine: {
        borderStyle: 'dotted',
        height: 40,
        marginLeft: '7%',
        borderColor: Colors.Status,
        borderLeftWidth: 5
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
    homebuttons: {
        // height:40,width:90,borderRadius:40,

        // width:windowWidth,
        width: windowWidth - 30,
        height: windowHeight / 11,
        margin: 10,
        paddingLeft: 11,
        paddingRight: 10,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        borderWidth: 0.1,
        borderColor: 'black',

        // elevation: 0.1,
    },
    buttonDesign: {
        marginBottom: 5,
        backgroundColor: Colors.Status,
        width: widthPercentageToDP(60),
        padding: 15,
        borderRadius: 30,
        alignSelf: 'center',
    },
    iconbuttons: {
        // height:40,width:90,borderRadius:40,

        width: '89%',
        //width: windowWidth-30,
        height: windowHeight / 10.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '3.5%',
        marginRight: '2%',
        paddingRight: 10,
        borderRadius: 25,
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
    QuestionInnerText: {
        fontSize: 18,
        letterSpacing: 0.04,
        textAlign: 'center',
        fontFamily: fonts['Gotham-Medium'],
        marginTop: '6%',
        marginLeft: 15,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    common_field: {
        // alignSelf:'flex-end',
        flexDirection: 'column',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    common_text: {
        alignSelf: 'center'
    },
    button_farword: {
        borderWidth: 1,
        borderColor: Colors.Status,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    LoginButtonStyle: {
        backgroundColor: 'white',
    },
    SignupButtonSytle: {
        backgroundColor: 'white'
    },
    TextColorStyle: {
        color: 'white'
    },
    signupTextColorStyle: {
        color: 'white'
    },
    customcard: {
        backgroundColor: Colors.Status,
        marginLeft: windowWidth / 20
    },

});

