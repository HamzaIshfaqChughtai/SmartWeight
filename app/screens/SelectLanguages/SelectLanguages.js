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
} from 'react-native';
import { styles } from './style';
import { globalStyles } from '../../styles/globalStyles';

import { Colors } from '../../styles/colors';
import {
    Container,
    Picker,
    Content,
    Form,
    Item,
    CheckBox,
    Input,
    Thumbnail,
    Label,
    Footer,
    Button,
    FooterTab,
} from 'native-base';

export default class SelectLanguages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {

        return (
            <Container style={{ backgroundColor: '#8625B5' }}>

                <Content style={styles.Content}>

                    <View style={{ marginTop: '50%' }}>
                        <Text style={styles.SelectLanguage}>Please Select Language</Text>


                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Login')}
                            style={styles.buttonDesign}>
                            <Text style={globalStyles.header6}>ENGLISH</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.buttonDesign}
                            onPress={() => { }}>
                            <Text style={globalStyles.header6}>عربى</Text>
                        </TouchableOpacity>

                    </View>

                </Content>


            </Container >
        );
    }
};




