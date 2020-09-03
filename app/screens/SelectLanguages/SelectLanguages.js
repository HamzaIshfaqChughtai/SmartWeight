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

                    <Text
                        onPress={() => this.props.navigation.navigate('Tabs')}
                        style={styles.SelectLanguage}>Please Select Language</Text>

                </Content>


            </Container >
        );
    }
};




