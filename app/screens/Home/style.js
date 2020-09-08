
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
        backgroundColor:'white',
        alignItems:'center',
    },
    cardstyle:{
        // width:windowWidth,
        width: '97%',
        height:windowHeight/2,
         margin:10,
        paddingLeft:11,
        paddingRight:10,
        borderRadius:20,
        elevation: 2,
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 1,

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
        fontSize: 20,
        color:Colors.otherChatBubbleColor,
        paddingTop:5,
        textAlign: "center",
    },
    textGuide:{

        fontSize: 20,
        color:Colors.otherChatBubbleColor,
        textAlign: "center",
        paddingTop:5,
    },
    promo_mainview:{
        flexDirection:'row',justifyContent:'space-between'
    },
    daily_promo_mainview:{
        flexDirection:'row',marginTop:'15%'
    },
    promo_column:{
       marginLeft:'10%'
    },
    dark_text:{
        color:Colors.otherChatBubbleColor,fontSize:15
    },
    portiontext:{
        color:Colors.Status,
        fontSize:17,
        fontWeight:'bold',
        textAlign:'center'

    }


});

