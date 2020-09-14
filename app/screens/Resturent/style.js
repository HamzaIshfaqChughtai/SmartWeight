
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { Colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { widthPercentageToDP, heightPercentageToDP } from '../../components/React Native Responsive Screen'


export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    SearchItem: {
        height: 50,
        padding: 15,
        marginTop: 15,
        marginLeft: 12,
        marginRight: 12,
        borderRadius: 10,
        backgroundColor: Colors.white,

    },
    SearchText: {
        fontSize: 14,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        color: Colors.NewBackgroundColor
    },
    content: {
        marginLeft: 12,
        marginRight: 12
    },
    SearchIcon: {
        fontSize: 22,
        marginLeft: 10
    },
    container2: {
        paddingTop: 20,
        paddingHorizontal: 10
    },
    ProfileList: {
        marginTop: 20,
        padding: 10,
        height: 80,
        borderRadius: 10,
        backgroundColor: Colors.white,
        alignContent: 'center',
        justifyContent: 'center'
    },
    ProfileresList: {
        marginTop: 10,
        padding: 10,
        height: 110,
        borderRadius: 10,
        backgroundColor: Colors.white,
        alignContent: 'center',
        justifyContent: 'center'
    },
    ClientProfileImage: {
        width: 52,
        height: 52,
        borderRadius: 40
    },
    ResturentName: {
        fontSize: 12,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        color: Colors.NewBackgroundColor
    },
    ResturentType: {
        fontSize: 12,
        fontFamily: fonts['Gotham-Light'],
        letterSpacing: 0.04,
        color: Colors.lightgray,
        lineHeight: 30
    },
    ProfileResturentType: {
        fontSize: 12,
        fontFamily: fonts['Gotham-Light'],
        letterSpacing: 0.04,
        color: Colors.lightgray,
        lineHeight: 30
    },
    ResturentKm: {
        fontSize: 12,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        color: Colors.Status,
        lineHeight: 30
    },
    thumb: {
        width: 50,
        height: 80,
        backgroundColor: Colors.Status,
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,

    },
    buttonDesign: {
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: Colors.Status,
        width: widthPercentageToDP(70),
        padding: 15,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 30
    },
    track: {
        height: 80,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    },
    Suggested: {
        fontSize: 16,
        fontFamily: fonts['Gotham-Bold'],
        letterSpacing: 0.04,
        marginTop: 20,
        color: Colors.NewBackgroundColor
    },
    ViewMore: {
        fontSize: 12,
        padding: 8,
        borderWidth: 1,
        borderRadius: 20,
        fontFamily: fonts['Gotham-Medium'],
        letterSpacing: 0.04,
        color: Colors.NewBackgroundColor
    },
    ViewHead: {
        borderBottomColor: Colors.Status,
        width: 120,
        marginTop: 8,
        borderBottomWidth: 1
    },
    ImageView: {
        flexDirection: "row",
        alignItems: 'center'
    },
    ImageUpperView: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    oops: {
        fontSize: 18,
        fontFamily: fonts['Gotham-Bold'],
        letterSpacing: 0.04,
        color: Colors.Status
    },
    error: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 215,
        fontSize: 16,
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
        height: 300,
        borderRadius: 20,
    },
    modalview: {
        elevation: 2,
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
    },
    resturentImage: {
        height: 240,
        width: '100%'
    },
    ResturnetNameType: {
        backgroundColor: Colors.white,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    Point: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15
    },
    borderline: {
        width: '50%',
        borderWidth: 0.5,
        borderRadius: 40
    },
    SliderView: {
        flexDirection: 'row',
        marginLeft: 40,
        justifyContent: 'space-between'
    },
    SliderStyle: {
        width: 28,
        height: 28,
        borderRadius: 30 / 2,
        backgroundColor: Colors.smokeWhite,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.35,
    }
});

