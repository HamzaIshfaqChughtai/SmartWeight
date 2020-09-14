import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { styles } from './style';

import { Colors } from '../../../../styles/colors';
import { fonts } from '../../../../styles/fonts';
import {
    Content,
    Container,
    Item,
    Input,
    Picker,
} from 'native-base'
import Swiper from 'react-native-swiper'
export class GuideThree extends Component {
    render() {
        return (
            <View style={styles.cardstyleinneritem}>
                <View style={{
                    marginTop: 35
                }}>
                    <Text style={[styles.TextStyleOne, { marginLeft: 20, marginRight: 20, textAlign: 'center' }]}>Portion Size is an important way to learn an lifestyle and easy way to determine the aproperitee amount  (portion) of foods you should eat so you don’t have to diet every again! To be flexible and eat anywhere, anytime!
                    We developed your visual guide so its with you all the time, using your own perception of your hand!</Text>




                    <Image
                        resizeMode={'contain'}
                        style={styles.guideTwo1}
                        source={require('../../../../images/guidethree.png')}
                    />


                    <Text style={styles.TextStyleTwo}>That’s it! Combine your Smart Plate Method with Smart Portions and you will never have a problem with food and Enjoy living the good life
                    (note: we will use the same ones we use in the App tray)</Text>


                    <View style={{ height: 50 }}></View>


                </View>
            </View>
        )
    }
}

export default GuideThree
