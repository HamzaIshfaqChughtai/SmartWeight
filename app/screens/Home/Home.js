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
                            <Text style={styles.text_name}>Food Screen Content</Text>
                        </View>
                    </TouchableHighlight>
                    :
                    <Text style={styles.text_name}>Guide screen Content</Text>
                }
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
                            style={{ backgroundColor: this.state.food === true ? Colors.Status : 'white',height:40,width:90,borderRadius:40}}
                            onPress={this.foodpress}><Text style={styles.textfood}> Food</Text></TouchableOpacity>
                        <TouchableOpacity
                            style={{ backgroundColor: this.state.food === false ? Colors.Status : 'white',height:40,width:90,borderRadius:40}}
                            onPress={this.guidepress}><Text style={styles.textGuide}>Guide</Text></TouchableOpacity>
                    </View>
                    {this.renderDailypromoCard()}
                </View>
            </Card>
        )
    }
    renderDailypromoCard = () => {
        return(
           <View style={styles.promo_mainview}>
<View>
    <View style={styles.daily_promo_mainview}>
        <View style={{
            borderStyle: 'dotted',
            height:40,
            marginLeft:'5%',
           borderColor:Colors.Status,
            borderLeftWidth:5
        }}/>

        <View>
            <View style={styles.promo_column}>
            <Text style={{fontSize:16,}}>Daily Portions</Text>
                <Text style={styles.dark_text}>16 Portions</Text>
            </View>
        </View>
    </View>
    <View style={styles.daily_promo_mainview}>
        <View style={{
            borderStyle: 'dotted',
            height:40,
            marginLeft:'5%',
            borderColor:Colors.Motivationcolor,
            borderLeftWidth:5
        }}/>

        <View>
            <View style={styles.promo_column}>
                <Text style={{fontSize:16,}}>Weekly Portions</Text>
                <Text style={styles.dark_text}>32 Portions</Text>
            </View>
        </View>
    </View>
</View>
               <View style={{marginTop:'4%',marginEnd:'10%'}}>
                   <ProgressCircle
                       percent={50}
                       radius={65}
                       borderWidth={5}
                       color={Colors.Status}
                       shadowColor="#999"
                       bgColor="#fff"
                   >
                       <Text style={{ fontSize: 14 }}>Daily Remaining {'\n'}         <Text style={styles.portiontext}>16</Text> {'\n'}   <Text style={styles.portiontext}>Portions</Text></Text>
                   </ProgressCircle>
               </View>
           </View>
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




