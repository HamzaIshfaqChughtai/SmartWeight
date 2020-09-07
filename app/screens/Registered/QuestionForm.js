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

export default class QuestionForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

            active: 1


        }
    }



    render() {

        return (
            <Container style={{ backgroundColor: Colors.white, height: '100%' }}>

                <Content
                    style={{ marginLeft: 15, marginRight: 15, marginTop: 30 }}
                    showsVerticalScrollIndicator={false}>

                    <View style={styles.QuestionViewShadow}>

                        <View style={styles.InnerPortion}>

                            <Text style={styles.questiontxt}>How often do you eat fruitsor vegetables?</Text>

                            <TouchableOpacity
                                style={[styles.questioncardview, {
                                    borderWidth: this.state.active === 1 ? 0 : 1,
                                    backgroundColor:
                                        this.state.active === 1 ? Colors.Motivationcolor : Colors.white,
                                }]}
                                onPress={() => this.setState({ active: 1 })}>

                                <Text
                                    style={[styles.QuestionInnerText, {
                                        color: this.state.active === 1 ? Colors.white : Colors.NewBackgroundColor,
                                    }]}>most days
                                        </Text>

                            </TouchableOpacity>




                            <TouchableOpacity
                                style={[styles.questioncardview, {
                                    borderWidth: this.state.active === 2 ? 0 : 1,
                                    backgroundColor:
                                        this.state.active === 2 ? Colors.Motivationcolor : Colors.white,
                                }]}
                                onPress={() => this.setState({ active: 2 })}>

                                <Text
                                    style={[styles.QuestionInnerText, {
                                        color: this.state.active === 2 ? Colors.white : Colors.NewBackgroundColor,
                                    }]}>some days
                                        </Text>

                            </TouchableOpacity>





                            <TouchableOpacity
                                style={[styles.questioncardview, {
                                    borderWidth: this.state.active === 3 ? 0 : 1,
                                    backgroundColor:
                                        this.state.active === 3 ? Colors.Motivationcolor : Colors.white,
                                }]}
                                onPress={() => this.setState({ active: 3 })}>

                                <Text
                                    style={[styles.QuestionInnerText, {
                                        color: this.state.active === 3 ? Colors.white : Colors.NewBackgroundColor,
                                    }]}>Weight loss
                                        </Text>

                            </TouchableOpacity>





                            <TouchableOpacity
                                style={[styles.questioncardview, {
                                    borderWidth: this.state.active === 4 ? 0 : 1,
                                    backgroundColor:
                                        this.state.active === 4 ? Colors.Motivationcolor : Colors.white,
                                }]}
                                onPress={() => this.setState({ active: 4 })}>

                                <Text
                                    style={[styles.QuestionInnerText, {
                                        color: this.state.active === 4 ? Colors.white : Colors.NewBackgroundColor,
                                    }]}>never
                                        </Text>

                            </TouchableOpacity>


                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Letstalkfoodsecond')}
                                style={[styles.buttonDesign, { marginTop: '15%', marginBottom: '25%' }]}>
                                <Text style={[globalStyles.header6, { color: Colors.white }]}>Next</Text>
                            </TouchableOpacity>


                        </View>
                    </View>

                    <View style={{
                        marginBottom: 5,
                        marginTop: 30
                    }}>
                        <Image
                            style={styles.questionarybottompic}
                            source={require('../../images/questionbottompic.png')} />
                    </View>
                </Content>


            </Container >
        );
    }
};




