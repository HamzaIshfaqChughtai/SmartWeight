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
export class GuideOne extends Component {
    render() {
        return (
            <View style={styles.cardstyleinneritem}>
                <View style={{
                    marginTop: 35
                }}>
                    <Text style={styles.TextStyleOne}>We are going to teach you to eat more for{"\n"}
                        {' '}{' '}{' '}{' '}{' '}{' '}{' '}less and lose weight the easy way!</Text>


                    <Text style={styles.TextStyleTwo}> Your Daily SmartPortions Points budget is </Text>

                    <Image
                        style={styles.GuideFirstPic}
                        source={require('../../../../images/GuideONE.png')}
                    />



                    <Text style={styles.TextStyleOne}>These SPP are personalized to you based {"\n"}
                        {' '}{' '}on your age, height, gender weight and{"\n"}
                        {' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}physicality
                    </Text>





                    <Text style={styles.TextStyleTwo}> What are Smart Portions Points </Text>




                    <Text style={[styles.TextStyleTwo, { color: Colors.lightgray }]}>
                        SmartPortions Points guide you toward {"\n"}a
                        healthier pattern of eating. Energy and{"\n"}
                        satiety(fullness) are the baseline for its{"\n"}
                        {' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}design.
                    </Text>



                    <Image
                        resizeMode={'contain'}
                        style={styles.SecondImageGuide}
                        source={require('../../../../images/GuideoneB.png')}
                    />


                    <Text style={styles.TextStyleTwo}>You will get a daily meal plan ideas </Text>




                    <View style={{
                        flex: 1,
                        marginTop: 10,
                        borderRadius: 20,
                        backgroundColor: Colors.Status
                    }}>


                        <Image
                            resizeMode={'contain'}
                            style={styles.guidedarkPic}
                            source={require('../../../../images/darkduide1.png')}
                        />


                        <Text style={[styles.TextStylePoints, { marginTop: 15 }]}>1 Portion Protein (Meat) = 1/4 the Plate </Text>

                        <Text style={styles.TextStylePoints}>Burger, Meat, Chicken, Tuna, Fish </Text>

                        <Text style={styles.TextStylePoints}>1 Portion Protein (Dairy/egg)</Text>

                        <Text style={styles.TextStylePoints}>1 Slice Cheese </Text>

                        <Text style={styles.TextStylePoints}>Small Cup Yogurt </Text>

                        <Text style={styles.TextStylePoints}>2 Table Spoons Cheese</Text>

                        <Text style={styles.TextStylePoints}>2 Figures Cheese</Text>

                        <Text style={styles.TextStylePoints}>1 Egg</Text>





                        <Image
                            resizeMode={'contain'}
                            style={styles.guidedarkPic}
                            source={require('../../../../images/darkduide2.png')}
                        />


                        <Text style={[styles.TextStylePoints, { marginTop: 15 }]}>11 Portion Of Main Carbs =1 Small Cup| 1/4the Plate </Text>
                        <Text style={styles.TextStylePoints}>Rice , Pasta, Legumes, Oats, Cereal, Potato, Frize </Text>




                        <Image
                            resizeMode={'contain'}
                            style={styles.guidedarkPic}
                            source={require('../../../../images/darkduide1.png')}
                        />


                        <Text style={[styles.TextStylePoints, { marginTop: 15 }]}>1 Portion Of Bread & Chips =1 Slice Toast | 1 Small Bag</Text>
                        <Text style={styles.TextStylePoints}>Bread, Slice Bread, Buns, Potato Chips</Text>





                        <Image
                            resizeMode={'contain'}
                            style={styles.guidedarkPic}
                            source={require('../../../../images/darkduide2.png')}
                        />


                        <Text style={[styles.TextStylePoints, { marginTop: 15 }]}>1 Portion Of Drinks Size Of Standing Fist = 1 Small Cup | 120 Calories Avoid Calories Drinks And Juices, Drinks With Sugar</Text>




                        <Image
                            resizeMode={'contain'}
                            style={styles.guidedarkPic}
                            source={require('../../../../images/darkduide3.png')}
                        />


                        <Text style={[styles.TextStylePoints, { marginTop: 15 }]}>1 1 Portion Of Sweet/chocolate = 2 Spoons | Calories 100 </Text>



                        <Image
                            resizeMode={'contain'}
                            style={styles.guidedarkPic}
                            source={require('../../../../images/darkduide2.png')}
                        />


                        <Text style={[styles.TextStylePoints, { marginTop: 15 }]}>1 Portion Of Fruit = 1 Small Cup</Text>
                        <Text style={styles.TextStylePoints}>  All Fruits Except (Dry Fruit, Avacado, Dates, Bananas)</Text>




                        <Text style={[styles.TextStylePointsend, { marginTop: 15, marginBottom: 40 }]}>Avoid:  Oil, Sauces, Dates Dry Fruit,  Avocado, All Juices Fresh And Not Fresh ,  Soda Drinks ,  Ice Cream And Sweets Free (Approved) Vegetables,  Calories Free Sauces, Calorie Free Drinks And Approved Supplements, Lattee Calories Free Popcorn, Coffee And Tea Without Sugar Or Cream, Cappuccino (Limit)</Text>


                    </View>



                    <Text style={[styles.TextStylePoints, { marginTop: 15, color: Colors.NewBackgroundColor, marginLeft: 20, marginRight: 20 }]}>
                        Things That Can Help You: drink water or
                        calories free or approved drinks before
                        meals to become fuller faster . Eat apples
                        or fruit 15 minutes before meals as well to control your appetite better
                    </Text>










                    <View style={{
                        flex: 1,
                        marginTop: 60,
                        padding: 20,
                        backgroundColor: Colors.Status
                    }}>

                        <Text style={[styles.TextStylePoints, { marginTop: 15, marginLeft: 30, marginRight: 30 }]}>Avoid</Text>



                        <Text style={styles.TextStylePoints}>oils, and olive oil , use calorie free spray </Text>

                        <Text style={styles.TextStylePoints}>and air-fry sauces with high energy such</Text>

                        <Text style={styles.TextStylePoints}>as olive oil and mayonnaise and oily and</Text>

                        <Text style={styles.TextStylePoints}> creamy sauces use the</Text>




                        <Text style={[styles.TextStylePoints, { marginTop: 15, marginLeft: 30, marginRight: 30 }]}>Approved</Text>

                        <Text style={styles.TextStylePoints}> vinegar, low fat Italian, lemon </Text>

                        <Text style={styles.TextStylePoints}>  Ketchup, mustard and spices are ok </Text>

                    </View>







                    <Swiper
                        showsPagination={false}
                        style={styles.wrapper}
                        showsButtons={true}>
                        <View style={styles.slide1}>
                            <Image
                                resizeMode={'contain'}
                                style={styles.SecondImageGuide}
                                source={require('../../../../images/swiperFirstGUIDE.png')} />
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>And simple</Text>
                        </View>
                        <View style={styles.slide1}>
                            <Image
                                resizeMode={'contain'}
                                style={styles.SecondImageGuide}
                                source={require('../../../../images/swiperFirstGUIDE.png')} />
                        </View>
                    </Swiper>




                    <Text style={[styles.TextStyleTwo, { marginTop: 15, marginLeft: 30, marginRight: 30, backgroundColor: '' }]}>So here you go , keep your portions </Text>

                    <Text style={styles.TextStyleOne}> organized with your meals to keep your </Text>


                    <Text style={styles.TextStyleOne}> points low and keep going to reach your </Text>
                    <Text style={styles.TextStyleOne}> points low and keep going to reach your </Text>

                    <Text style={styles.TextStyleOne}> goals </Text>



                    <View style={{ height: 50 }}></View>


                </View>
            </View>
        )
    }
}

export default GuideOne
