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
export class GuideFive extends Component {
    render() {
        return (
            <View style={styles.cardstyleinneritem}>
                <View style={{
                    marginTop: 35
                }}>
                    <Text style={[styles.TextStyleOne, { marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>Vegetables and Salad:
                    All vegetables and salads are safe to consume. Make sure to eat more of them if you are hungry (use only approved dressings see below)
                    Flavor and fiber drinks:
                    Avoid calorie drinks such as juices, fresh juices, and regular soda. However, feel free to use the flavoring for water, fiber and flavor drinks , and diet soda or soda water.</Text>


                    <Image
                        resizeMode={'contain'}
                        style={styles.guidefive}
                        source={require('../../../../images/guidefivea.png')}
                    />


                    <Image
                        resizeMode={'contain'}
                        style={styles.guidefive}
                        source={require('../../../../images/guidefiveb.png')}
                    />


                    <Image
                        resizeMode={'contain'}
                        style={styles.guidefive}
                        source={require('../../../../images/guidefivec.png')}
                    />



                    <Text style={[styles.TextStyleOne, { marginTop: 25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>Oil and dressings – alternative:
                    Oil and dressings break your weightless, they are very dangerous when trying to lose weight.
                    Try instead vinegar, apple cite vinegar, mustard, calorie-free dressings, and oil-free sprays</Text>




                    <Image
                        resizeMode={'contain'}
                        style={styles.guidefive}
                        source={require('../../../../images/guidefived.png')}
                    />


                    <Image
                        resizeMode={'contain'}
                        style={styles.guidefive}
                        source={require('../../../../images/guidefivee.png')}
                    />



                    <Image
                        resizeMode={'contain'}
                        style={styles.guidefive}
                        source={require('../../../../images/guidefivef.png')}
                    />


                    <Image
                        resizeMode={'contain'}
                        style={styles.guidefive}
                        source={require('../../../../images/guidefiveg.png')}
                    />


                    <Image
                        resizeMode={'contain'}
                        style={styles.guidefive}
                        source={require('../../../../images/guidefiveh.png')}
                    />



                    <Text style={[styles.TextStyleOne, { marginTop: 25, marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>Sugar alternative: Sweet! You can use any sugar-substitute you want with drinks and foods</Text>



                    <Image
                        resizeMode={'contain'}
                        style={styles.guidefive}
                        source={require('../../../../images/guidefivei.png')}
                    />


                    <Image
                        resizeMode={'contain'}
                        style={styles.guidefive}
                        source={require('../../../../images/guidefivej.png')}
                    />



                    <View style={{ height: 50 }}></View>


                </View>
            </View>
        )
    }
}

export default GuideFive
