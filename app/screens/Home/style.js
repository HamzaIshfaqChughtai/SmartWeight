
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { Colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { widthPercentageToDP, heightPercentageToDP } from '../../components/React Native Responsive Screen'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const styles = StyleSheet.create({
    container: {
       flex:1,
        alignItems:'center',
    },
    cardstyle:{
        // width:windowWidth,
        width: '97%',
        height:windowHeight/2,
         margin:10,
        paddingLeft:11,
        paddingRight:10,
        borderBottomStartRadius:40,
        borderBottomEndRadius:40,

    },
    text_welcome: {
        fontSize: 30,
        marginTop:15,
        marginLeft:10,
    },
    text_name: {
        fontSize: 30,
        marginTop:5,
        marginLeft:10,
    },
    guidetab:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20,
        alignItems:'center',
    },
    textfood:{
        marginRight:15,
        fontSize: 27,
        color:Colors.otherChatBubbleColor,
        paddingTop:5,
        textAlign: "center",
    },
    textGuide:{

        fontSize: 27,
        color:Colors.otherChatBubbleColor,
        textAlign: "center",
        paddingTop:5,
    }

});

