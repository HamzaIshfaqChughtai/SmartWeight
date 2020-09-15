/**
 * Created by HP on 9/15/2020.
 */
import React, { Component } from 'react'
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    FlatList,
} from 'react-native'

import { styles } from './style';
import { globalStyles } from '../../../../styles/globalStyles';
import { Colors } from '../../../../styles/colors';
import { fonts } from '../../../../styles/fonts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Modal from 'react-native-modal';
import {
    Content,
    Container,
    Item,
    Input,
    List,
    ListItem,
    Left,
    Right,
    Picker,
} from 'native-base'
import ProgressCircle from 'react-native-progress-circle'

import Swiper from 'react-native-swiper'

const data1 = [
    {
        id:1,
        title: "Water",
        img:require('../../../../images/waterhome.png')
    },
    {
        id:2,
        title: "apple",
        img:require('../../../../images/applehome.png')
    },
    {
        id:3,
        title: "bana",
        img:require('../../../../images/bananahome.png')
    },
    {
        id:4,
        title: "banana",
        img:require('../../../../images/orangehome.png')
    },
    {
        id:5,
        title: "apple",
        img:require('../../../../images/applehome.png')
    },
    {
        id:6,
        title: "bana",
        img:require('../../../../images/bananahome.png')
    },
    {
        id:7,
        title: "banana",
        img:require('../../../../images/orangehome.png')
    },
]
const data2 = [
    {

        title: " 1 Portion Apple ",
        img:require('../../../../images/applehome.png')
    },
    {
        title: " 2 Portion Egg ",
        img:require('../../../../images/egg.png')
    },
    {
        title: "Cereal",
        img:require('../../../../images/cereal.png')
    },
]
export class Dinner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodstatus:false,

        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.iconbuttons, { backgroundColor: 'white', }]}>
                    <FlatList
                        horizontal
                        nestedScrollEnabled
                        showsHorizontalScrollIndicator={false}
                        data={data1}
                        style={{ marginLeft: 20, marginRight: 25 }}
                        renderItem={({ item: rowData }) => {
                            return (
                                <View style={styles.common_field}>
                                    <TouchableOpacity
                                        style={styles.button_farword}
                                        onPress={this.openHomeScreen}
                                    >
                                        <Image
                                            resizeMode={'contain'}
                                            style={styles.subfoodicon}
                                            source={rowData.img}/>


                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

                <View style={styles.collap_cardstyle}>
                    <View>
                    <Swiper
                        showsPagination={false}
                        style={styles.wrapper}
                        showsButtons={true}>
                        <View style={styles.slide1}>
                            <Image
                                resizeMode={'contain'}
                                style={styles.SecondImageGuide}

                                source={require('../../../../images/swiperFirstGUIDE.png')} />
                        </View>
                        <View style={styles.slide1}>
                            <Image
                                resizeMode={'contain'}
                                style={styles.SecondImageGuide}
                                source={require('../../../../images/homesecond.png')} />
                        </View>
                        <View style={styles.slide1}>
                            <Image
                                resizeMode={'contain'}
                                style={styles.SecondImageGuide}
                                source={require('../../../../images/swiperFirstGUIDE.png')} />
                        </View>
                    </Swiper>
                    </View>
                    <View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled
                        data={data2}
                        style={{ marginLeft: 10, marginRight: 10 }}
                        renderItem={({ item: rowData }) => {
                            return (
                                <View style={styles.common_field}>
                                    <List>
                                        <ListItem selected>
                                            <Left>
                                                <Text>{rowData.title}</Text>
                                            </Left>
                                            <Right>
                                                <Image
                                                    resizeMode={'contain'}
                                                    style={styles.secondfoodicon}
                                                    source={rowData.img}/>
                                            </Right>
                                        </ListItem>
                                    </List>
                                </View>
                            );
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    </View>
                    <TouchableOpacity onPress={()=> this.setState({foodstatus:true})}
                        style={[styles.buttonDesign, { marginTop: 5, marginBottom: 20 }]}>
                        <Text style={[globalStyles.header6, { color: Colors.white }]}>Track</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    isVisible={this.state.foodstatus}
                    style={styles.modalview}
                    onBackButtonPress={() => this.setState({foodstatus:false})}
                    onBackdropPress={() =>  this.setState({foodstatus:false})}
                    useNativeDriver={true}
                    hardwareAccelerated={true}
                    hideModalContentWhileAnimating={true}
                >
                    <View style={styles.Modalbox}>
                        <View style={styles.ModalInner}>

                            <Text style={styles.oops}>Brown Rice</Text>
                            <Image
                                resizeMode={'contain'}
                                style={styles.PopupImage}
                                source={require('../../../../images/brownrice.png')} />
                            <Text style={styles.error}>
                                Calorie and Nutrition Value for 100g of Long Grain Brown Rice</Text>
                            <View>
                                <Text style={styles.error1}></Text>
                                <View style={styles.Popup_field}>
                                    <List>
                                        <ListItem selected>
                                            <Left>
                                                <Text style={styles.Popup_text}>Calories</Text>
                                            </Left>
                                            <Right>
                                                <Text style={styles.Popup_text}>365</Text>
                                            </Right>
                                        </ListItem>
                                        <ListItem selected>
                                            <Left>
                                                <Text style={styles.Popup_text}>Protein</Text>
                                            </Left>
                                            <Right>
                                                <Text style={styles.Popup_text}>7.6</Text>
                                            </Right>
                                        </ListItem>
                                        <ListItem selected>
                                            <Left>
                                                <Text style={styles.Popup_text}>Fat</Text>
                                            </Left>
                                            <Right>
                                                <Text style={styles.Popup_text}>76.8</Text>
                                            </Right>
                                        </ListItem>
                                        <ListItem selected>
                                            <Left>
                                                <Text style={styles.Popup_text}>Fibre</Text>
                                            </Left>
                                            <Right>
                                                <Text style={styles.Popup_text}>2.1</Text>
                                            </Right>
                                        </ListItem>
                                    </List>
                                </View>

                            </View>


                            <TouchableOpacity
                                onPress={() => this.setState({foodstatus:false})}
                                style={[styles.buttonDesign, { marginTop: 30, width: 180, borderRadius: 40 }]}>
                                <Text style={[globalStyles.header6, { color: Colors.white, }]}>Close</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </Modal>
            </View>
        )
    }
}

export default Dinner
