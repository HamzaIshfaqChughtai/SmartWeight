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
export class GuideSeven extends Component {
    render() {
        return (
            <View style={styles.cardstyleinneritem}>
                <View style={{
                    marginTop: 35
                }}>
                    <Text style={[styles.TextStyleOne, { marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>WeightLoss : energy perspective </Text>





                    <Text style={[styles.TextStyleOne, { marginTop: 25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>Human are designed and made to survive difficult situations, so, the original human is designed for an environment of scares resources and foods. This is good Biology because we don’t need too much to live!</Text>






                    <Text style={[styles.TextStyleOne, { marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>When we gain weight, we basically gain extra energy and we store energy as FAT. This is what we store for emergencies</Text>







                    <Text style={[styles.TextStyleOne, { marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>However, in todays industrialized and modern world, food is available everywhere and therefore energy is abundance.!</Text>







                    <Text style={[styles.TextStyleOne, { marginTop: 25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>The old human used to work so hard to eat, and days can go by without enough food!
                    today, we don’t have to work hard for food, and yet, the food  (energy) is always too much!</Text>



                    <Text style={[styles.TextStyleOne, { marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>We need little energy every day to live, but the available is too much</Text>




                    <Text style={[styles.TextStyleOne, { marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>(show illustration of actual need vs. available)</Text>



                    <Text style={[styles.TextStyleOne, { marginTop: 25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>This is problematic, because our brains are designed to contact the stomach and senses, and translate our feelings to increase appetite and desires more foods in particularly foods that are very energy rich such as oils, fried, carbs and sugary food.  This is especially  true when the stomach is empty or the food we eat is quickly  digested!</Text>




                    <Text style={[styles.TextStyleOne, { marginTop: 25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>
                        When foods are energy rich, and easy to digest, the brain is encouraged to make us want to eat more and burn less stored fat because we live in abundance!! To interrupt this cycle, we need to eat foods that provide so little energy but bulk us (make us full quickly).

                    </Text>




                    <Text style={[styles.TextStyleOne, { marginTop: 25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>Be  Smart about it. We need the stomach to send the right signal suggesting that  food is there and abundant which will  make our  brains happy leading to less appetite  while keeping metabolism high</Text>




                    <Text style={[styles.TextStyleOne, { marginTop: 25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>The key to successful weight loss is to be as normal as possible without exceeding the needed daily energy. How can you do that?</Text>


                    <Text style={[styles.TextStyleOne, { marginTop: 25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>
                        Its simple, eat foods that provide fullness for less energy, and that takes more to time and work to digest.
                        Foods that do that comes first , are vegetables, fiber  and fiber drink without calories, some fruits such as apples and oranges, low fat  proteins and dairy .  Less carbs, and high fat meat and dairy, and avoid as possible oils, full fat, and simple carbs .

                    </Text>



                    <Text style={[styles.TextStyleOne, { marginTop: 25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>
                        Avoid oils as possible, reduce carbs to a normal portion per meal, and always have vegetables . Never leave protein off the Smart Plate.
                        Follow the Smart Portion System for an easy way to lose and control weight

                    </Text>




                    <View style={{ height: 50 }}></View>


                </View>
            </View >
        )
    }
}

export default GuideSeven
