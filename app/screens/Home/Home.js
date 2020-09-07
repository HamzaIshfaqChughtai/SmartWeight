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
import ProgressCircle from 'react-native-progress-circle'
import SearchHeader from '../../components/SearchHeader/SearchHeader'
import Search from '../../components/SearchHeader/SearchHeader'

import { Colors } from '../../styles/colors';
import {
    Container,
    Picker,
    Content,
    Card,
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


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            food:true,
            guide:true,

        };
    }



    render() {

        return (
            <View style={styles.container}>
                    {this.renderheaderCard()}
                { this.state.food === true ?
                    <TouchableHighlight>
                        <View>
                            <Text style={styles.text_name}>Food Screen</Text>
                        </View>
                    </TouchableHighlight>
                    :
                    <Text style={styles.text_name}>Guide screen</Text>
                }
                    <ProgressCircle
                        percent={30}
                        radius={50}
                        borderWidth={5}
                        color="#3399FF"
                        shadowColor="#999"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 12 }}>Daily Remaining {'\n'}   16 {'\n'}   Portions</Text>
                    </ProgressCircle>

             </View>
        );
    }

    renderheaderCard = () => {
        return(
            <Card  style={styles.cardstyle}>
                <View>
                    <Text style={styles.text_welcome}>Welcome</Text>
                    <Text style={styles.text_name}>Younis,</Text>
                    <View style={styles.guidetab}>
                        <TouchableOpacity
                            style={{ backgroundColor: this.state.food === true ? Colors.Status : 'white',height:50,width:110,borderRadius:40}}
                            onPress={this.foodpress}><Text style={styles.textfood}> Food</Text></TouchableOpacity>
                        <TouchableOpacity
                            style={{ backgroundColor: this.state.food === false ? Colors.Status : 'white',height:50,width:120,borderRadius:40}}
                            onPress={this.guidepress}><Text style={styles.textGuide}>Guide</Text></TouchableOpacity>
                    </View>
                </View>
            </Card>
        )
    }
    foodpress=()=>{
        this.setState({food:true})
    }
    guidepress=()=>{
        this.setState({food:false})
    }
    foodTab = () => {
        return(
                <View>
                    <Text style={styles.text_welcome}>food tab</Text>
                </View>
        )
    }
    guideTab = () => {
        return(
            <View>
                <Text style={styles.text_welcome}>Guide tab</Text>
            </View>
        )
    }
};




