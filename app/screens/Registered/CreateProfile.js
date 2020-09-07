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

import { Colors } from '../../styles/colors';
import {
    Container,
    Picker,
    Content,
} from 'native-base';
import Modal from "react-native-modal";

export default class CreateProfile extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

            DateFromisVisible: false,
            Dob: "",
            gender: '',
            Feet: '',
            Inches: '',
            InputHeight: '',
            Weightone: '',
            Weighttwo: '',

        }
    }



    render() {

        return (
            <Container style={{ backgroundColor: Colors.white, height: '100%' }}>

                <Content showsVerticalScrollIndicator={false}>

                    <View style={styles.CardCover}>

                        <View style={styles.MotivationViewShadow}>

                            <Text style={styles.CreateProfileColor}>Create Your Profile</Text>
                            <View style={{ marginLeft: 20, marginRight: 20, }}>

                                <Text style={styles.HeadText}>BirthDay</Text>
                                <DatePicker
                                    style={{ width: '100%', }}
                                    date={this.state.Dob} //initial date from state
                                    mode="date" //The enum of date, datetime and time
                                    placeholder="mm/dd/yyyy"
                                    format="DD-MM-YYYY"
                                    minDate="01-01-2016"
                                    maxDate="01-01-2019"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            width: 0,
                                            height: 0,
                                        },
                                        dateInput: {
                                            textAlign: 'center',
                                            height: 45,
                                            borderColor: Colors.Status,
                                            borderRadius: 10,
                                            justifyContent: 'flex-start',
                                            alignItems: 'flex-start',
                                            paddingTop: 9,
                                            paddingLeft: 6
                                        },
                                        dateText: {
                                            textAlign: 'left',
                                            fontSize: 18,
                                            color: '#000'
                                        }
                                    }}
                                    onDateChange={(date) => { this.setState({ Dob: date }) }}
                                />



                                <Text style={styles.HeadText}>Sex</Text>

                                <RadioButton.Group
                                    style={{ marginTop: 5 }}
                                    onValueChange={(value) => this.setState({ gender: value })}
                                    value={this.state.gender}>
                                    <View style={styles.radioButtonsView}>
                                        <View style={styles.singleRadioButtonView}>

                                            <Text style={styles.radioText}>Male</Text>

                                            <RadioButton
                                                value={'Male'}
                                                color={Colors.ColorSkyBlueDark}
                                                uncheckedColor={Colors.Status}
                                            />
                                        </View>
                                        <View style={[styles.singleRadioButtonView, { marginLeft: 20 }]}>

                                            <Text style={styles.radioText}>Female</Text>

                                            <RadioButton
                                                value={'Female'}
                                                color={Colors.ColorSkyBlueDark}
                                                uncheckedColor={Colors.Status}
                                            />
                                        </View>
                                        <View style={[styles.singleRadioButtonView, { marginRight: 15 }]}>

                                            <Text style={styles.radioText}>Rather Not Say</Text>

                                            <RadioButton
                                                value={'Rather Not Say'}
                                                color={Colors.ColorSkyBlueDark}
                                                uncheckedColor={Colors.Status}
                                            />
                                        </View>
                                    </View>
                                </RadioButton.Group>



                                <Text style={styles.HeadText}>Height</Text>

                                <View style={{ flexDirection: 'row', marginTop: 5 }}>

                                    <TextInput
                                        autoCapitalize="none"
                                        keyboardType='numeric'
                                        style={[styles.email, globalStyles.text1, { paddingLeft: 15, }]}
                                        returnKeyType="next"
                                        onValueChange={(value) => this.setState({ Feet: value })}
                                        selectionColor={Colors.white}
                                        value={this.state.Feet}
                                    />
                                    <Text style={{ justifyContent: 'center', alignSelf: 'center', marginLeft: 8, marginRight: 20 }} >Feet</Text>

                                    <TextInput
                                        keyboardType='numeric'
                                        autoCapitalize="none"
                                        style={[styles.email, globalStyles.text1, { paddingLeft: 15, }]}
                                        returnKeyType="next"
                                        onValueChange={(value) => this.setState({ Inches: value })}
                                        selectionColor={Colors.white}
                                        value={this.state.Inches}
                                    />
                                    <Text style={{ justifyContent: 'center', alignSelf: 'center', marginLeft: 8, }} >Inches</Text>

                                </View>




                                <Text style={styles.HeadText}>Weight</Text>

                                <View style={{ flexDirection: 'row', marginTop: 5 }}>

                                    <TextInput
                                        autoCapitalize="none"
                                        keyboardType='numeric'
                                        style={[styles.email, globalStyles.text1, { paddingLeft: 15, }]}
                                        returnKeyType="next"
                                        onValueChange={(value) => this.setState({ Weightone: value })}
                                        selectionColor={Colors.white}
                                        value={this.state.Weightone}
                                    />
                                    <Text style={styles.lbsone} >lbs</Text>

                                    <TextInput
                                        keyboardType='numeric'
                                        autoCapitalize="none"
                                        style={[styles.email, globalStyles.text1, { paddingLeft: 15, }]}
                                        returnKeyType="next"
                                        onValueChange={(value) => this.setState({ Weighttwo: value })}
                                        selectionColor={Colors.white}
                                        value={this.state.Weighttwo}
                                    />
                                    <Text style={styles.lbstwo} >lbs</Text>

                                </View>


                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('HealthStatus')}
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




