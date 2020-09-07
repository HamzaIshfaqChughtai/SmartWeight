
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
import { fonts } from '../../styles/fonts';

import { Colors } from '../../styles/colors';
import {
    Container,
    Picker,
    Content,
} from 'native-base';
import Modal from "react-native-modal";

export default class HealthStatus extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            Breastfeding: false,
            diabetes: false,
            BloodPressure: false,
            Hypertension: false,
            Pregnant: false,
            Asthma: false

        }
    }



    render() {

        return (
            <Container style={{ backgroundColor: Colors.white, height: '100%' }}>

                <Content showsVerticalScrollIndicator={false}>

                    <View style={styles.CardCover}>

                        <View style={styles.MotivationViewShadow}>

                            <Text style={styles.CreateProfileColor}>Health Status</Text>


                            <View style={[styles.First2card, { marginTop: 40 }]}>

                                <TouchableOpacity
                                    style={[styles.cardview, {
                                        backgroundColor:
                                            this.state.Breastfeding === true ? Colors.Status : Colors.white,
                                    }]}
                                    onPress={() => this.setState({ Breastfeding: !this.state.Breastfeding })}>

                                    <View style={styles.InnerView}>

                                        <Image
                                            style={[styles.InnerImage, {
                                                tintColor: this.state.Breastfeding === true ? Colors.white : Colors.Status,
                                            }]}
                                            resizeMode={'contain'}
                                            source={require('../../images/breastfeding.png')} />
                                        <Text
                                            style={[styles.InnerText, {
                                                color: this.state.Breastfeding === true ? Colors.white : Colors.NewBackgroundColor,
                                            }]}>Breastfeeding </Text>

                                    </View>

                                </TouchableOpacity>






                                <TouchableOpacity
                                    style={[styles.cardview, {
                                        backgroundColor:
                                            this.state.diabetes === true ? Colors.Status : Colors.white,
                                    }]}
                                    onPress={() => this.setState({ diabetes: !this.state.diabetes })}>

                                    <View style={styles.InnerView}>

                                        <Image
                                            style={[styles.InnerImage, {
                                                tintColor: this.state.diabetes === true ? Colors.white : Colors.Status,
                                            }]}
                                            resizeMode={'contain'}
                                            source={require('../../images/diabetes.png')} />
                                        <Text
                                            style={[styles.InnerText, {
                                                color: this.state.diabetes === true ? Colors.white : Colors.NewBackgroundColor,
                                            }]}>Breastfeeding</Text>

                                    </View>
                                </TouchableOpacity>

                            </View>









                            <View style={styles.First2card}>

                                <TouchableOpacity
                                    style={[styles.cardview, {
                                        backgroundColor:
                                            this.state.BloodPressure === true ? Colors.Status : Colors.white,
                                    }]}
                                    onPress={() => this.setState({ BloodPressure: !this.state.BloodPressure })}>

                                    <View style={styles.InnerView}>

                                        <Image
                                            style={[styles.InnerImage, {
                                                tintColor: this.state.BloodPressure === true ? Colors.white : Colors.Status,
                                            }]}
                                            resizeMode={'contain'}
                                            source={require('../../images/BloodPressure.png')} />
                                        <Text
                                            style={[styles.InnerText, {
                                                color: this.state.BloodPressure === true ? Colors.white : Colors.NewBackgroundColor,
                                            }]}>Blood Pressure</Text>

                                    </View>

                                </TouchableOpacity>






                                <TouchableOpacity
                                    style={[styles.cardview, {
                                        backgroundColor:
                                            this.state.Hypertension === true ? Colors.Status : Colors.white,
                                    }]}
                                    onPress={() => this.setState({ Hypertension: !this.state.Hypertension })}>

                                    <View style={styles.InnerView}>

                                        <Image
                                            style={[styles.InnerImage, {
                                                tintColor: this.state.Hypertension === true ? Colors.white : Colors.Status,
                                            }]}
                                            resizeMode={'contain'}
                                            source={require('../../images/Hypertension.png')} />
                                        <Text
                                            style={[styles.InnerText, {
                                                color: this.state.Hypertension === true ? Colors.white : Colors.NewBackgroundColor,
                                            }]}>Hypertension</Text>

                                    </View>
                                </TouchableOpacity>

                            </View>












                            <View style={styles.First2card}>

                                <TouchableOpacity
                                    style={[styles.cardview, {
                                        backgroundColor:
                                            this.state.Pregnant === true ? Colors.Status : Colors.white,
                                    }]}
                                    onPress={() => this.setState({ Pregnant: !this.state.Pregnant })}>

                                    <View style={styles.InnerView}>

                                        <Image
                                            style={[styles.InnerImage, {
                                                tintColor: this.state.Pregnant === true ? Colors.white : Colors.Status,
                                            }]}
                                            resizeMode={'contain'}
                                            source={require('../../images/Pregnant.png')} />
                                        <Text
                                            style={[styles.InnerText, {
                                                color: this.state.Pregnant === true ? Colors.white : Colors.NewBackgroundColor,
                                            }]}>Pregnant</Text>

                                    </View>

                                </TouchableOpacity>






                                <TouchableOpacity
                                    style={[styles.cardview, {
                                        backgroundColor:
                                            this.state.Asthma === true ? Colors.Status : Colors.white,
                                    }]}
                                    onPress={() => this.setState({ Asthma: !this.state.Asthma })}>

                                    <View style={styles.InnerView}>

                                        <Image
                                            style={[styles.InnerImage, {
                                                tintColor: this.state.Asthma === true ? Colors.white : Colors.Status,
                                            }]}
                                            resizeMode={'contain'}
                                            source={require('../../images/Asthma.png')} />
                                        <Text
                                            style={[styles.InnerText, {
                                                color: this.state.Asthma === true ? Colors.white : Colors.NewBackgroundColor,
                                            }]}>Asthma</Text>

                                    </View>
                                </TouchableOpacity>

                            </View>

                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('MotivationJoinUs')}
                                style={[styles.buttonDesign, { marginTop: 30, marginBottom: 30 }]}>
                                <Text style={[globalStyles.header6, { color: Colors.white }]}>Next</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </Content>

            </Container >
        );
    }
};




