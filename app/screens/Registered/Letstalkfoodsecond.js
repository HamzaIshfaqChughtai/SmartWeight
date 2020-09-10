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
import { widthPercentageToDP, heightPercentageToDP } from '../../components/React Native Responsive Screen'

import { Colors } from '../../styles/colors';
import {
    Container,
    Picker,
    Content,
} from 'native-base';
import Modal from "react-native-modal";
import { fonts } from '../../styles/fonts';

export default class Letstalkfoodsecond extends React.Component {

    render() {

        return (
            <ImageBackground
                style={{ height: '100%' }}
                source={require('../../images/lettalkfoodbg.png')}>

                <Content showsVerticalScrollIndicator={false}>
                    <Image
                        style={{ height: 300, width: widthPercentageToDP(100) }}
                        source={require('../../images/letstalkfoodpic.png')} />

                    <View
                        style={{
                            height: heightPercentageToDP(34),
                            width: widthPercentageToDP(100),
                            backgroundColor: Colors.Status
                        }}>

                        <Text style={styles.letstalkkheading}>We wanna know you more</Text>

                        <Text style={[styles.letstalkksubheading, { marginTop: 15 }]}>These questions will help us</Text>
                        <Text style={styles.letstalkksubheading}>support you better.</Text>



                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Tabs')}
                            style={[styles.buttonDesign, { marginTop: '6%', backgroundColor: Colors.white }]}>
                            <Text style={[globalStyles.header6, { color: Colors.Status, fontFamily: fonts['Gotham-Bold'] }]}>I'm in</Text>
                        </TouchableOpacity>

                    </View>

                </Content>

            </ImageBackground>


        );
    }
};




