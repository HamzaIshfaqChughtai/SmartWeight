import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Colors } from '../../../styles/colors'
import { fonts } from '../../../styles/fonts';
import { styles } from './style';
import GuideOne from './Component/GuideOne'
import GuideTwo from './Component/GuideTwo'
import GuideThree from './Component/GuideThree';

import {
    Content,
    Container,
    Item,
    Input,
    Picker,
} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
import GuideFour from './Component/GuideFour';
import GuideFive from './Component/GuideFive';
import GuideSix from './Component/GuideSix';
import GuideSeven from './Component/GuideSeven';
import GuideEight from './Component/GuideEight';
export class GuidesHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Guideone: false,
            GuideTwo: false,
            GuideThree: false,
            GuideFour: false,
            GuideFive: false,
            GuideSix: false,
            GuideSeve: false,
            GuideEight: false


        };
    }


    render() {
        return (
            <ScrollView style={{ backgroundColor: Colors.BGNEW, margin: 10 }}>

                <View
                    showsVerticalScrollIndicator={false}>


                    <TouchableOpacity
                        onPress={() => this.setState({
                            Guideone: !this.state.Guideone,
                            GuideTwo: false,
                            GuideThree: false,
                            GuideFour: false,
                            GuideFive: false,
                            GuideSix: false,
                            GuideEight: false
                        })}
                        activeOpacity={0.7}
                        style={[styles.MediaView, {
                            backgroundColor: this.state.Guideone == true ? Colors.Status : Colors.white
                        }]}>

                        <View style={{ flexDirection: 'row' }}>

                            <Text style={[styles.GuideType, {
                                color: this.state.Guideone == true ? Colors.Red : Colors.Status
                            }]}>Guide 1</Text>

                            <Text style={[styles.GuideTypeName, {
                                color: this.state.Guideone == true ? Colors.white : Colors.NewBackgroundColor,
                                fontFamily: this.state.Guideone == true ? fonts['Gotham-Bold'] : fonts['Gotham-Light']
                            }]}>Smart Portions</Text>

                        </View>

                    </TouchableOpacity>

                    {this.state.Guideone && <GuideOne />}













                    <TouchableOpacity
                        onPress={() => this.setState({
                            GuideTwo: !this.state.GuideTwo,
                            Guideone: false,
                            GuideThree: false,
                            GuideFour: false,
                            GuideFive: false,
                            GuideSix: false,
                            GuideEight: false
                        })}
                        activeOpacity={0.7}
                        style={[styles.MediaViewSecond, {
                            backgroundColor: this.state.GuideTwo == true ? Colors.Status : Colors.white
                        }]}>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.GuideType, {
                                color: this.state.GuideTwo == true ? Colors.Red : Colors.Status
                            }]}>Guide 2</Text>
                            <Text style={[styles.GuideTypeName, {
                                color: this.state.GuideTwo == true ? Colors.white : Colors.NewBackgroundColor,
                                fontFamily: this.state.GuideTwo == true ? fonts['Gotham-Bold'] : fonts['Gotham-Light']
                            }]}>Smart plate Method</Text>
                        </View>

                    </TouchableOpacity>


                    {this.state.GuideTwo && <GuideTwo />}















                    <TouchableOpacity
                        onPress={() => this.setState({
                            GuideThree: !this.state.GuideThree,
                            Guideone: false,
                            GuideTwo: false,
                            GuideFour: false,
                            GuideFive: false,
                            GuideSix: false,
                            GuideEight: false
                        })}
                        activeOpacity={0.7}
                        style={[styles.MediaViewSecond, {
                            backgroundColor: this.state.GuideThree == true ? Colors.Status : Colors.white
                        }]}>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.GuideType, {
                                color: this.state.GuideThree == true ? Colors.Red : Colors.Status
                            }]}>Guide 3</Text>
                            <Text style={[styles.GuideTypeName, {
                                color: this.state.GuideThree == true ? Colors.white : Colors.NewBackgroundColor,
                                fontFamily: this.state.GuideThree == true ? fonts['Gotham-Bold'] : fonts['Gotham-Light']
                            }]}>Smart Portions</Text>
                        </View>

                    </TouchableOpacity>



                    {this.state.GuideThree && <GuideThree />}















                    <TouchableOpacity
                        onPress={() => this.setState({
                            GuideFour: !this.state.GuideFour,
                            Guideone: false,
                            GuideTwo: false,
                            GuideThree: false,
                            GuideFive: false,
                            GuideSix: false,
                            GuideEight: false
                        })}
                        activeOpacity={0.7}
                        style={[styles.MediaViewSecond, {
                            backgroundColor: this.state.GuideFour == true ? Colors.Status : Colors.white
                        }]}>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.GuideType, {
                                color: this.state.GuideFour == true ? Colors.Red : Colors.Status
                            }]}>Guide 4</Text>
                            <Text style={[styles.GuideTypeName, {
                                color: this.state.GuideFour == true ? Colors.white : Colors.NewBackgroundColor,
                                fontFamily: this.state.GuideFour == true ? fonts['Gotham-Bold'] : fonts['Gotham-Light']
                            }]}>Smart Portion Points</Text>
                        </View>

                    </TouchableOpacity>



                    {this.state.GuideFour && <GuideFour />}

















                    <TouchableOpacity
                        onPress={() => this.setState({
                            GuideFive: !this.state.GuideFive,
                            Guideone: false,
                            GuideTwo: false,
                            GuideFour: false,
                            GuideThree: false,
                            GuideSix: false,
                            GuideEight: false
                        })}
                        activeOpacity={0.7}
                        style={[styles.MediaViewSecond, {
                            backgroundColor: this.state.GuideFive == true ? Colors.Status : Colors.white
                        }]}>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.GuideType, {
                                color: this.state.GuideFive == true ? Colors.Red : Colors.Status
                            }]}>Guide 5</Text>
                            <Text style={[styles.GuideTypeName, {
                                color: this.state.GuideFive == true ? Colors.white : Colors.NewBackgroundColor,
                                fontFamily: this.state.GuideFive == true ? fonts['Gotham-Bold'] : fonts['Gotham-Light']
                            }]}>Free Foods and Alternative</Text>
                        </View>

                    </TouchableOpacity>





                    {this.state.GuideFive && <GuideFive />}













                    <TouchableOpacity
                        onPress={() => this.setState({
                            GuideSix: !this.state.GuideSix,
                            Guideone: false,
                            GuideTwo: false,
                            GuideFour: false,
                            GuideThree: false,
                            GuideFive: false,
                            GuideEight: false

                        })}
                        style={[styles.MediaViewSecond, {
                            backgroundColor: this.state.GuideSix == true ? Colors.Status : Colors.white
                        }]}
                        activeOpacity={0.7}>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.GuideType, {
                                color: this.state.GuideSix == true ? Colors.Red : Colors.Status
                            }]}>Guide 6</Text>
                            <Text style={[styles.GuideTypeName, {
                                color: this.state.GuideSix == true ? Colors.white : Colors.NewBackgroundColor,
                                fontFamily: this.state.GuideSix == true ? fonts['Gotham-Bold'] : fonts['Gotham-Light']
                            }]}>Eating Out</Text>
                        </View>

                    </TouchableOpacity>




                    {this.state.GuideSix && <GuideSix />}















                    <TouchableOpacity
                        onPress={() => this.setState({
                            GuideSeve: !this.state.GuideSeve,
                            Guideone: false,
                            GuideTwo: false,
                            GuideFour: false,
                            GuideThree: false,
                            GuideFive: false,
                            GuideSix: false,
                            GuideEight: false


                        })}
                        style={[styles.MediaViewSecond, {
                            backgroundColor: this.state.GuideSeve == true ? Colors.Status : Colors.white
                        }]}
                        activeOpacity={0.7} >

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.GuideType, {
                                color: this.state.GuideSeve == true ? Colors.Red : Colors.Status
                            }]}>Guide 7</Text>
                            <Text style={[styles.GuideTypeName, {
                                color: this.state.GuideSeve == true ? Colors.white : Colors.NewBackgroundColor,
                                fontFamily: this.state.GuideSeve == true ? fonts['Gotham-Bold'] : fonts['Gotham-Light']
                            }]}>Weight loss - Energy</Text>
                        </View>

                    </TouchableOpacity>



                    {this.state.GuideSeve && <GuideSeven />}











                    <TouchableOpacity
                        onPress={() => this.setState({
                            GuideEight: !this.state.GuideEight,
                            Guideone: false,
                            GuideTwo: false,
                            GuideFour: false,
                            GuideThree: false,
                            GuideFive: false,
                            GuideSix: false,
                            GuideSeven: false


                        })}
                        activeOpacity={0.7}
                        style={[styles.MediaViewSecond, {
                            backgroundColor: this.state.GuideEight == true ? Colors.Status : Colors.white
                        }]}>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.GuideType, {
                                color: this.state.GuideEight == true ? Colors.Red : Colors.Status
                            }]}>Guide 8</Text>
                            <Text style={[styles.GuideTypeName, {
                                color: this.state.GuideEight == true ? Colors.white : Colors.NewBackgroundColor,
                                fontFamily: this.state.GuideEight == true ? fonts['Gotham-Bold'] : fonts['Gotham-Light']
                            }]}>Weight loss - Fullness</Text>
                        </View>

                    </TouchableOpacity>


                    {this.state.GuideEight && <GuideEight />}


                </View>
            </ScrollView>
        )
    }
}

export default GuidesHome
