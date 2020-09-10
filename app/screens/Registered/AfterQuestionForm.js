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

export default class AfterQuestionForm extends React.Component {


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
            <Container style={{ backgroundColor: Colors.white, }}>

                <Content showsVerticalScrollIndicator={false}>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                        <Icon
                            name="arrow-back"
                            style={{ color: '#C4C4C4' }}
                            style={styles.IconSize} />

                        <Text>1  step of 4</Text>

                        <Icon
                            name="arrow-forword"
                            style={{ color: '#C4C4C4' }}
                            style={styles.IconSize} />
                    </View>

                    <View style={styles.afterquestionCardCover}>

                        <View style={styles.MotivationViewShadow}>

                            <Text style={styles.afterquestion}>We want to send you tips meal ideas. Are you most interested in...</Text>

                            <View style={styles.InnerPortion}>

                                <TouchableOpacity
                                    style={[styles.Motivationcardview, {
                                        borderWidth: this.state.weightloss === true ? 0 : 1,
                                        backgroundColor:
                                            this.state.weightloss === true ? Colors.Motivationcolor : Colors.white,
                                    }]}
                                    onPress={() => this.setState({ weightloss: !this.state.weightloss })}>

                                    <View style={styles.MotivationInnerView}>
                                        <Text
                                            style={[styles.MotivationInnerText, {
                                                color: this.state.weightloss === true ? Colors.white : Colors.NewBackgroundColor,
                                            }]}>Home cooked</Text>

                                    </View>

                                </TouchableOpacity>




                                <TouchableOpacity
                                    style={[styles.Motivationcardview, {
                                        borderWidth: this.state.health === true ? 0 : 1,
                                        backgroundColor:
                                            this.state.health === true ? Colors.Motivationcolor : Colors.white,
                                        marginTop: 20
                                    }]}
                                    onPress={() => this.setState({ health: !this.state.health })}>

                                    <View style={styles.MotivationInnerView}>
                                        <Text
                                            style={[styles.MotivationInnerText, {
                                                color: this.state.health === true ? Colors.white : Colors.NewBackgroundColor,
                                            }]}>Ready-made(frozen/pre-cooked)</Text>

                                    </View>

                                </TouchableOpacity>






                                <TouchableOpacity
                                    style={[styles.Motivationcardview, {
                                        borderWidth: this.state.improve === true ? 0 : 1,
                                        backgroundColor:
                                            this.state.improve === true ? Colors.Motivationcolor : Colors.white,
                                        marginTop: 20
                                    }]}
                                    onPress={() => this.setState({ improve: !this.state.improve })}>

                                    <View style={styles.MotivationInnerView}>
                                        <Text
                                            style={[styles.MotivationInnerText, {
                                                color: this.state.improve === true ? Colors.white : Colors.NewBackgroundColor,
                                            }]}>Fast food/restuarants</Text>

                                    </View>

                                </TouchableOpacity>




                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Letstalkfood')}
                                    style={[styles.buttonDesign, { marginTop: 30, marginBottom: 30 }]}>
                                    <Text style={[globalStyles.header6, { color: Colors.white }]}>Next</Text>
                                </TouchableOpacity>


                            </View>
                        </View>
                    </View>

                </Content>

            </Container >
        );
    }
};




