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
export class GuideTwo extends Component {
    render() {
        return (
            <View style={styles.cardstyleinneritem}>
                <View style={{
                    marginTop: 35
                }}>
                    <Text style={[styles.TextStyleOne, { marginLeft: 20, marginRight: 20, textAlign: 'center' }]}>Learning a lifestyle that fits your goals of ideal weight requires that you never stop eating the right way! There is no diet here, its how you eat for the weight you want, its that simple.  The rule, is to stay full with lowest possible energy (calories)  while navigating all food choices.  To do that , we developed the Smart Portion Plate.  Follow the following distribution of foods on a plate and use a plate size that fits you.</Text>



                    <Text style={styles.TextStyleTwo}>  Step 1 : plate size should be about your hand size </Text>

                    <Image
                        resizeMode={'contain'}
                        style={styles.guideTwo1}
                        source={require('../../../../images/guidetwo1.png')}
                    />


                    <Text style={styles.TextStyleTwo}>  Step 2: Half of your plate should be salad or vegetables all kids are ok, just don’t use oils or caloric-dressing (use free dressing)</Text>



                    <Image
                        resizeMode={'contain'}
                        style={styles.guideTwo1}
                        source={require('../../../../images/guidetwo2.png')}
                    />


                    <Text style={styles.TextStyleTwo}> Step 3: choose one carb portion only or skip it if you want</Text>




                    <Image
                        resizeMode={'contain'}
                        style={styles.guideTwo1}
                        source={require('../../../../images/guidetwo3.png')}
                    />


                    <Text style={styles.TextStyleTwo}>   Step 4: Choose your 1 portion protein (if you skip the carb, have 2 proteins if you want)</Text>


                    <Image
                        resizeMode={'contain'}
                        style={styles.guideTwo1}
                        source={require('../../../../images/guidetwo4.png')}
                    />


                    <Text style={styles.TextStyleTwo}>
                        Here you go, its that simple!</Text>


                    <View style={{ height: 50 }}></View>


                </View>
            </View>
        )
    }
}

export default GuideTwo
