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
export class GuideSix extends Component {
    render() {
        return (
            <View style={styles.cardstyleinneritem}>
                <View style={{
                    marginTop: 35
                }}>
                    <Text style={[styles.TextStyleOne, { marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>Eating out guide:</Text>





                    <Text style={[styles.TextStyleOne, { marginTop: 25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>What to do when going or planning to go out ?</Text>






                    <Text style={[styles.TextStyleOne, { marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>Save your points for going out but do not go out too hungry!  eat an apple before you head out and get an approved drink as well.</Text>







                    <Text style={[styles.TextStyleOne, { marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>Remember to eat more vegetables and protein. Follow the Smart Plate Method or The Smart Portions wherever you are. </Text>







                    <Text style={[styles.TextStyleOne, { marginTop: 25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>Step 1: eat fruit before going out and drink free drinks</Text>



                    <Text style={[styles.TextStyleOne, { marginTop: 25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>Step 2: drink water or free drink before food arrive</Text>




                    <Text style={[styles.TextStyleOne, { marginTop: 25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>Step 3: skip the appetite and order foods using regular size plate (use your hand to estimate)</Text>



                    <Text style={[styles.TextStyleOne, { marginTop: 25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>Step 4: make sure to fill half of the plate vegetables or salads and portion the rest</Text>




                    <Text style={[styles.TextStyleOne, { marginTop: 25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>
                        Step 5: use approved complements: spices, ketchup, mustard, vinegar  and Avoid the oils and dressings

                    </Text>




                    <Text style={[styles.TextStyleOne, { marginTop: 25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>Free and Approved Food Guide
                    We love free foods! These are foods that when hungry but trying to lose weight, you can safely use.</Text>




                    <Text style={[styles.TextStyleOne, { marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>Use the hand 🖐 to estimate your plate size. Eat less energy by using smaller plates . </Text>


                    <Text style={[styles.TextStyleOne, { marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>
                        Studies show that people feel fuller when eating from smaller plates, so let your hand guide you how big or small a plate is .

                    </Text>




                    <View style={{ height: 50 }}></View>


                </View>
            </View >
        )
    }
}

export default GuideSix
