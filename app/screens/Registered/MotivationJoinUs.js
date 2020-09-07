import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ActivityIndicator,
    TextInput
} from 'react-native';
import { styles } from './style';
import { globalStyles } from '../../styles/globalStyles';
import DatePicker from 'react-native-datepicker';
import { RadioButton, } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../styles/colors';
import {
    Container,
    Picker,
    Content,
} from 'native-base';
import Modal from "react-native-modal";

export default class MotivationJoinUs extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

            DateFromisVisible: false,
            weightloss: "",
            health: '',
            improve: '',
            fitness: '',
            selfcontrol: '',

        }
    }



    render() {

        return (
            <Container style={{ backgroundColor: Colors.BGNEW, }}>

                <Content
                    style={{ margin: 20 }}
                    showsVerticalScrollIndicator={false}>

                    {/* <View style={styles.CardCover}> */}

                    {/* <View style={styles.MotivationViewShadow}> */}


                    <View style={styles.MotivationQuestionCover}>
                        <Text style={styles.MotivationQuestiontext}>Motivation to join us</Text>
                    </View>


                    <View style={styles.InnerPortion}>

                        <TouchableOpacity
                            style={[styles.MotivationAnser, {
                                backgroundColor:
                                    this.state.weightloss === true ? Colors.Motivationcolor : Colors.white,
                            }]}
                            onPress={() => this.setState({ weightloss: !this.state.weightloss })}>

                            <View style={styles.MotivationInnerView}>
                                <Text
                                    style={[styles.MotivationInnerText, {
                                        color: this.state.weightloss === true ? Colors.white : Colors.NewBackgroundColor,
                                    }]}>Weight loss </Text>

                                <Icon
                                    name={'check'}
                                    style={styles.IconCheck}
                                />

                            </View>

                        </TouchableOpacity>




                        <TouchableOpacity
                            style={[styles.MotivationAnser, {
                                backgroundColor:
                                    this.state.health === true ? Colors.Motivationcolor : Colors.white,
                                marginTop: 20
                            }]}
                            onPress={() => this.setState({ health: !this.state.health })}>

                            <View style={styles.MotivationInnerView}>
                                <Text
                                    style={[styles.MotivationInnerText, {
                                        color: this.state.health === true ? Colors.white : Colors.NewBackgroundColor,
                                    }]}>Health </Text>

                                <Icon
                                    name={'check'}
                                    style={styles.IconCheck}
                                />

                            </View>

                        </TouchableOpacity>






                        <TouchableOpacity
                            style={[styles.MotivationAnser, {
                                backgroundColor:
                                    this.state.improve === true ? Colors.Motivationcolor : Colors.white,
                                marginTop: 20
                            }]}
                            onPress={() => this.setState({ improve: !this.state.improve })}>

                            <View style={styles.MotivationInnerView}>
                                <Text
                                    style={[styles.MotivationInnerText, {
                                        color: this.state.improve === true ? Colors.white : Colors.NewBackgroundColor,
                                    }]}>Improving lifestyle </Text>

                                <Icon
                                    name={'check'}
                                    style={styles.IconCheck}
                                />

                            </View>

                        </TouchableOpacity>






                        <TouchableOpacity
                            style={[styles.MotivationAnser, {
                                backgroundColor:
                                    this.state.fitness === true ? Colors.Motivationcolor : Colors.white,
                                marginTop: 20
                            }]}
                            onPress={() => this.setState({ fitness: !this.state.fitness })}>

                            <View style={styles.MotivationInnerView}>
                                <Text
                                    style={[styles.MotivationInnerText, {
                                        color: this.state.fitness === true ? Colors.white : Colors.NewBackgroundColor,
                                    }]}>Fitnesss </Text>

                                <Icon
                                    name={'check'}
                                    style={styles.IconCheck}
                                />

                            </View>

                        </TouchableOpacity>



                        <TouchableOpacity
                            style={[styles.MotivationAnser, {
                                backgroundColor:
                                    this.state.selfcontrol === true ? Colors.Motivationcolor : Colors.white,
                                marginTop: 20
                            }]}
                            onPress={() => this.setState({ selfcontrol: !this.state.selfcontrol })}>

                            <View style={styles.MotivationInnerView}>
                                <Text
                                    style={[styles.MotivationInnerText, {
                                        color: this.state.selfcontrol === true ? Colors.white : Colors.NewBackgroundColor,
                                    }]}>Self control </Text>

                                <Icon
                                    name={'check'}
                                    style={styles.IconCheck}
                                />

                            </View>

                        </TouchableOpacity>



                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Letstalkfood')}
                            style={[styles.buttonDesign, { marginTop: 30, marginBottom: 30 }]}>
                            <Text style={[globalStyles.header6, { color: Colors.white }]}>Next</Text>
                        </TouchableOpacity>


                        {/* </View> */}
                        {/* </View> */}
                    </View>

                </Content>

            </Container >
        );
    }
};




