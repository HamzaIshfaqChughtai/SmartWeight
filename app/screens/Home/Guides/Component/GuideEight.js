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
import ProgressCircle from 'react-native-progress-circle'

import Swiper from 'react-native-swiper'
export class GuideEight extends Component {
    render() {
        return (
            <View style={styles.cardstyleinneritem}>
                <View style={{
                    marginTop: 35
                }}>
                    <Text style={[styles.TextStyleOne, { marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>Weightloss: Fullness Perspective </Text>





                    <Text style={[styles.TextStyleOne, { marginTop: 25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>The key to successful weight oss is to be as normal as possible without exceeding the needed daily energy (calories) . The problem, you need to be fuller most of the time so to avoid your body hormones increasing your appetite and reducing your metabolic fat burning.
                    How can you do that?</Text>






                    <Text style={[styles.TextStyleOne, { marginTop: 25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>Its simple, eat foods that provide fullness for least amount of energy.
                    Use the vegtables and salads without added oils, nuts or other caloric - options to increase fullness and reduce appeite. This will keep the stomach signiling the brain correctly "harmony" and stimulate weight loss.</Text>







                    <Image
                        resizeMode={'contain'}
                        style={styles.guidefive}
                        source={require('../../../../images/guideeight.png')}
                    />





                    <Text style={[styles.TextStyleOne, { marginTop: -25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>Some other zero foods are useful, including
                    Fibers, flavor drinks with no calories, water, soda water, and all the Food Alternatives</Text>



                    <View style={{ height: 50 }}></View>


                </View>
            </View >
        )
    }
}

export default GuideEight
