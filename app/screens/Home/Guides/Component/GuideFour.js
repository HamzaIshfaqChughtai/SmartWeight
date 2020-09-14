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
export class GuideFour extends Component {
    render() {
        return (
            <View style={styles.cardstyleinneritem}>
                <View style={{
                    marginTop: 35
                }}>
                    <Text style={[styles.TextStyleOne, { marginLeft: 20, marginRight: 20, textAlign: 'center' }]}>What are Smart Portions Points
                    Smart Portions Points guide you toward a healthier pattern of eating. Energy and satiety (fullness) are the baseline for its design. Smart Portion Points are the points that cost you for each food group.
                    These SPP are personalized to you based on your age, height, gender weight and physicality.</Text>




                    <Image
                        resizeMode={'contain'}
                        style={[styles.guideTwo1, { marginTop: -50 }]}
                        source={require('../../../../images/guidefour.png')}
                    />


                    <Text style={[styles.TextStyleTwo, { marginTop: -50 }]}>Some foods impact your weight more than other and therefore cost you more points per portion.
                    The portion is the amount typically used. If you use more portions, you use more points its that simple.
                    For example
                    Vegetables costs you zero points
                    1 portion fruit costs you 1 point
                    1 portion of carb costs you 3 points</Text>



                    <Image
                        resizeMode={'contain'}
                        style={[styles.guideTwo1, { marginTop: -50 }]}
                        source={require('../../../../images/guidefourb.png')}
                    />


                    <Text style={[styles.TextStyleTwo, { marginTop: -50 }]}>The smart Portion Point meter is a simple way to track the overall consumption of your points. If you use more portions, you use more points and this will make your weight loss harder.
                    We will help you track them easily without worries, just keep these points as low as possible during your journey.</Text>








                    <View style={styles.promo_mainview}>
                        <View>

                            <View style={styles.daily_promo_mainview}>
                                <View style={styles.DotedLine} />
                                <View>
                                    <View style={styles.promo_column}>
                                        <Text style={styles.DailyPromotionText}>Daily Portions</Text>
                                        <Text style={styles.DailyPromotionpoint}>16 Portions</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.daily_promo_mainview}>
                                <View style={styles.SecondDootedLine} />
                                <View>
                                    <View style={styles.promo_column}>
                                        <Text style={styles.DailyPromotionText}>Weekly Portions</Text>
                                        <Text style={styles.DailyPromotionpoint}>32 Portions</Text>
                                    </View>
                                </View>
                            </View>
                        </View>




                        <View style={{ marginTop: 20, marginEnd: '6%' }}>
                            <ProgressCircle
                                percent={75}
                                radius={62}
                                borderWidth={5}
                                color={Colors.Status}
                                shadowColor="#999"
                                bgColor="#fff"
                            >
                                <Text style={styles.Pointscircle}>Daily Remaining</Text>
                                <Text style={styles.portiontext}>16</Text>
                                <Text style={styles.portiontext}>Portions</Text>
                            </ProgressCircle>
                        </View>
                    </View>
                    <View style={{ height: 50 }}></View>


                </View>
            </View>
        )
    }
}

export default GuideFour
