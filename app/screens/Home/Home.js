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
    FlatList,
    ActivityIndicator,
} from 'react-native';
import { styles } from './style';
import ProgressCircle from 'react-native-progress-circle'
import CustomCard from '../../components/DashboardCard/Card'
import { globalStyles } from '../../styles/globalStyles';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Swiper from 'react-native-swiper'
import GuidesHome from '../Home/Guides/GuidesHome'

import { Colors } from '../../styles/colors';
import {
    Container,
    Picker,
    Content,
    Card,
    Form,
    Item,
    List,
    ListItem,
    Left,
    Right,
    Icon,
    CheckBox,
    Input,
    Thumbnail,
    Label,
    Footer,
    Button,
    FooterTab,
} from 'native-base';
const data1 = [
    {

        title: "Water",
    },
    {
        title: "apple",
    },
    {
        title: "bana",
    },
    {
        title: "banana",
    },
    {
        title: "banan",
    },
    {
        title: "anana",
    },
    {
        title: "baana",
    },
]
const data2 = [
    {

        title: " 1 Portion Apple ",
    },
    {
        title: " 2 Portion Egg ",
    },
    {
        title: "Cereal",
    },
]

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            food: true,
            guide: true,
            active: 1

        };
    }
    componentDidMount() {
        console.disableYellowBox = true;
    }


    render() {

        return (
            <View style={{ backgroundColor: Colors.BGNEW }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.renderheaderCard()}
                    {this.state.food === true ?
                        <View>
                            {this.foodTab()}
                        </View>
                        :
                        <View>
                            {this.guideTab()}
                        </View>
                    }
                </ScrollView>
            </View>
        );
    }





    // food tab


    renderheaderCard = () => {
        return (
            <View style={styles.cardstyle}>

                <View style={{ marginBottom: 20 }}>

                    <View style={styles.WelcomeView}>
                        <Text style={styles.text_welcome}>Welcome</Text>
                        <Text style={styles.text_name}>Younis,</Text>
                    </View>

                    <View style={styles.guidetab}>

                        <TouchableOpacity style={[styles.Foodclivk, {
                            backgroundColor: this.state.food === true ? Colors.Status : 'white',
                        }]}
                            onPress={this.foodpress}>
                            <Text style={[styles.textfood, {
                                color: this.state.food === true ? Colors.white : Colors.lightgray,
                            }]}> Food</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.Foodclivk, {
                                backgroundColor: this.state.food === false ? Colors.Status : 'white',
                            }]}
                            onPress={this.guidepress}>
                            <Text style={[styles.textGuide, {
                                color: this.state.food === false ? Colors.white : Colors.lightgray,


                            }]}>Guide</Text>
                        </TouchableOpacity>

                    </View>

                    {this.state.food === true && <View>
                        {this.renderDailypromoCard()}

                    </View>}


                </View>
            </View>
        )
    }







    renderDailypromoCard = () => {
        return (
            <View style={styles.promo_mainview}>
                <View>

                    <View style={styles.daily_promo_mainview}>
                        <View style={styles.DotedLine} />
                        <View>
                            <View style={styles.promo_column}>
                                <Text style={styles.DailyPromotionText}>Daily Portions</Text>
                                <Text style={styles.DailyPromotionpoint}>16 Portions</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.daily_promo_mainview}>
                        <View style={styles.SecondDootedLine} />
                        <View>
                            <View style={styles.promo_column}>
                                <Text style={styles.DailyPromotionText}>Weekly Portions</Text>
                                <Text style={styles.DailyPromotionpoint}>32 Portions</Text>
                            </View>
                        </View>
                    </View>
                </View>




                <View style={{ marginTop: 20, marginEnd: '6%' }}>
                    <ProgressCircle
                        percent={75}
                        radius={62}
                        borderWidth={5}
                        color={Colors.Status}
                        shadowColor="#999"
                        bgColor="#fff"
                    >
                        <Text style={styles.Pointscircle}>Daily Remaining</Text>
                        <Text style={styles.portiontext}>16</Text>
                        <Text style={styles.portiontext}>Portions</Text>
                    </ProgressCircle>
                </View>
            </View>
        )
    }



    foodpress = () => {
        this.setState({ food: true })
    }
    guidepress = () => {
        this.setState({ food: false })
    }



    foodTab = () => {
        return (
            <View>
                {/*<Text style={styles.homebuttons}>food tab</Text>*/}
                {this.renderBreakFast()}
                {this.renderLunch()}
                {this.renderDinner()}
                {this.renderSnacks()}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    marginRight: '10%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <CustomCard
                        cardstyle={styles.customcard}
                        textStyle={styles.TextColorStyle}
                        title="Track Baverage"
                        icon={<FontAwesome5
                            name={'glass-martini'}
                            size={20} color="#FFA500" />}
                        number="8 Glasses"
                        numberstyle={styles.TextColorStyle}>
                    </CustomCard>

                    <CustomCard
                        cardstyle={styles.customcard}
                        textStyle={styles.TextColorStyle}
                        title="Track Weight"
                        icon={<FontAwesome5
                            name={'glass-martini'}
                            size={20}
                            color="#FFA500" />}
                        number="180 Ibs"
                        numberstyle={styles.TextColorStyle}>
                    </CustomCard>

                </View>

                {this.renderActivityTracker()}
            </View>
        )
    }










    guideTab = () => {
        return (
            <View style={{ backgroundColor: Colors.BGNEW }}>
                <GuidesHome />
            </View>
        )
    }

























    renderBreakFast = () => {
        return (
            <Collapse>
                <CollapseHeader
                    onPress={() => this.setState({ food: false })}
                    style={[styles.homebuttons, { backgroundColor: this.state.food === false ? Colors.Status : 'white', }]}>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text
                            style={[styles.QuestionInnerText, {
                                color: this.state.active === 2 ? Colors.white : Colors.NewBackgroundColor,
                            }]}>Breakast
                        </Text>

                        <Text
                            style={styles.QuestionInnerText}>
                            <FontAwesome5 name={'glass-martini'} size={20} color="#FFA500" />
                        </Text>

                    </View>
                </CollapseHeader>



                <CollapseBody>
                    <View>
                        <Card style={[styles.iconbuttons, { backgroundColor: 'white', }]}>
                            <FlatList
                                horizontal
                                nestedScrollEnabled
                                showsHorizontalScrollIndicator={false}
                                data={data1}
                                style={{ marginLeft: 10, marginRight: 10 }}
                                renderItem={({ item: rowData }) => {
                                    return (
                                        <View style={styles.common_field}>
                                            <TouchableOpacity
                                                style={styles.button_farword}
                                                onPress={this.openHomeScreen}
                                            >
                                                <FontAwesome5 name={'glass-martini'} size={20} color="#FFA500" />
                                            </TouchableOpacity>
                                        </View>
                                    );
                                }}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </Card>
                    </View>
                    <Card style={styles.collap_cardstyle}>
                        <Swiper
                            showsPagination={false}
                            style={styles.wrapper}
                            showsButtons={true}>
                            <View style={styles.slide1}>
                                <Image
                                    resizeMode={'contain'}
                                    style={styles.SecondImageGuide}
                                    source={require('../../images/swiperFirstGUIDE.png')} />
                            </View>
                            <View style={styles.slide3}>
                                <Text style={styles.text}>And simple</Text>
                            </View>
                            <View style={styles.slide1}>
                                <Image
                                    resizeMode={'contain'}
                                    style={styles.SecondImageGuide}
                                    source={require('../../images/swiperFirstGUIDE.png')} />
                            </View>
                        </Swiper>
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
                                                    <FontAwesome5 name={'glass-martini'} size={20} color="#FFA500" />
                                                </Right>
                                            </ListItem>
                                        </List>
                                    </View>
                                );
                            }}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <TouchableOpacity
                            style={[styles.buttonDesign, { marginTop: 5, marginBottom: 20 }]}>
                            <Text style={[globalStyles.header6, { color: Colors.white }]}>Track</Text>
                        </TouchableOpacity>
                    </Card>
                </CollapseBody>
            </Collapse>
        )
    }















    renderLunch = () => {
        return (
            <Collapse>
                <CollapseHeader
                    onPress={() => this.setState({ food: false })}
                    style={[styles.homebuttons, { backgroundColor: this.state.food === false ? Colors.Status : Colors.white, }]}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text
                            style={[styles.QuestionInnerText, {
                                color: this.state.active === 2 ? Colors.white : Colors.NewBackgroundColor,
                            }]}>Lunch
                        </Text>
                        <Text
                            style={styles.QuestionInnerText}><FontAwesome5 name={'glass-martini'} size={20} color="#FFA500" /></Text>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View>
                        <Card style={[styles.iconbuttons, { backgroundColor: 'white', }]}>
                            <FlatList
                                horizontal
                                nestedScrollEnabled
                                showsHorizontalScrollIndicator={false}
                                data={data1}
                                style={{ marginLeft: 10, marginRight: 10 }}
                                renderItem={({ item: rowData }) => {
                                    return (
                                        <View style={styles.common_field}>
                                            <TouchableOpacity
                                                style={styles.button_farword}
                                                onPress={this.openHomeScreen}
                                            >
                                                <FontAwesome5 name={'glass-martini'} size={20} color="#FFA500" />
                                            </TouchableOpacity>
                                        </View>
                                    );
                                }}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </Card>
                    </View>
                    <Card style={styles.collap_cardstyle}>
                        <Swiper
                            showsPagination={false}
                            style={styles.wrapper}
                            showsButtons={true}>
                            <View style={styles.slide1}>
                                <Image
                                    resizeMode={'contain'}
                                    style={styles.SecondImageGuide}
                                    source={require('../../images/swiperFirstGUIDE.png')} />
                            </View>
                            <View style={styles.slide3}>
                                <Text style={styles.text}>And simple</Text>
                            </View>
                            <View style={styles.slide1}>
                                <Image
                                    resizeMode={'contain'}
                                    style={styles.SecondImageGuide}
                                    source={require('../../images/swiperFirstGUIDE.png')} />
                            </View>
                        </Swiper>
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
                                                    <FontAwesome5 name={'glass-martini'} size={20} color="#FFA500" />
                                                </Right>
                                            </ListItem>
                                        </List>
                                    </View>
                                );
                            }}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <TouchableOpacity
                            style={[styles.buttonDesign, { marginTop: 5, marginBottom: 20 }]}>
                            <Text style={[globalStyles.header6, { color: Colors.white }]}>Track</Text>
                        </TouchableOpacity>
                    </Card>
                </CollapseBody>
            </Collapse>
        )
    }
    renderDinner = () => {
        return (
            <Collapse>
                <CollapseHeader onPress={() => this.setState({ food: false })} style={[styles.homebuttons, { backgroundColor: this.state.food === false ? Colors.Status : 'white', }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text
                            style={[styles.QuestionInnerText, {
                                color: this.state.active === 2 ? Colors.white : Colors.NewBackgroundColor,
                            }]}>Dinner
                        </Text>
                        <Text
                            style={styles.QuestionInnerText}><FontAwesome5 name={'glass-martini'} size={20} color="#FFA500" /></Text>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View>
                        <Card style={[styles.iconbuttons, { backgroundColor: 'white', }]}>
                            <FlatList
                                horizontal
                                nestedScrollEnabled
                                showsHorizontalScrollIndicator={false}
                                data={data1}
                                style={{ marginLeft: 10, marginRight: 10 }}
                                renderItem={({ item: rowData }) => {
                                    return (
                                        <View style={styles.common_field}>
                                            <TouchableOpacity
                                                style={styles.button_farword}
                                                onPress={this.openHomeScreen}
                                            >
                                                <FontAwesome5 name={'glass-martini'} size={20} color="#FFA500" />
                                            </TouchableOpacity>
                                        </View>
                                    );
                                }}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </Card>
                    </View>
                    <Card style={styles.collap_cardstyle}>
                        <Swiper
                            showsPagination={false}
                            style={styles.wrapper}
                            showsButtons={true}>
                            <View style={styles.slide1}>
                                <Image
                                    resizeMode={'contain'}
                                    style={styles.SecondImageGuide}
                                    source={require('../../images/swiperFirstGUIDE.png')} />
                            </View>
                            <View style={styles.slide3}>
                                <Text style={styles.text}>And simple</Text>
                            </View>
                            <View style={styles.slide1}>
                                <Image
                                    resizeMode={'contain'}
                                    style={styles.SecondImageGuide}
                                    source={require('../../images/swiperFirstGUIDE.png')} />
                            </View>
                        </Swiper>
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
                                                    <FontAwesome5 name={'glass-martini'} size={20} color="#FFA500" />
                                                </Right>
                                            </ListItem>
                                        </List>
                                    </View>
                                );
                            }}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <TouchableOpacity
                            style={[styles.buttonDesign, { marginTop: 5, marginBottom: 20 }]}>
                            <Text style={[globalStyles.header6, { color: Colors.white }]}>Track</Text>
                        </TouchableOpacity>
                    </Card>
                </CollapseBody>
            </Collapse>
        )
    }
    renderSnacks = () => {
        return (
            <Collapse>
                <CollapseHeader onPress={() => this.setState({ food: false })} style={[styles.homebuttons, { backgroundColor: this.state.food === false ? Colors.Status : 'white', }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text
                            style={[styles.QuestionInnerText, {
                                color: this.state.active === 2 ? Colors.white : Colors.NewBackgroundColor,
                            }]}>Snacks
                        </Text>
                        <Text
                            style={styles.QuestionInnerText}><FontAwesome5 name={'glass-martini'} size={20} color="#FFA500" /></Text>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View>
                        <Card style={[styles.iconbuttons, { backgroundColor: 'white', }]}>
                            <FlatList
                                horizontal
                                nestedScrollEnabled
                                showsHorizontalScrollIndicator={false}
                                data={data1}
                                style={{ marginLeft: 10, marginRight: 10 }}
                                renderItem={({ item: rowData }) => {
                                    return (
                                        <View style={styles.common_field}>
                                            <TouchableOpacity
                                                style={styles.button_farword}
                                                onPress={this.openHomeScreen}
                                            >
                                                <FontAwesome5 name={'glass-martini'} size={20} color="#FFA500" />
                                            </TouchableOpacity>
                                        </View>
                                    );
                                }}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </Card>
                    </View>
                    <Card style={styles.collap_cardstyle}>
                        <Swiper
                            showsPagination={false}
                            style={styles.wrapper}
                            showsButtons={true}>
                            <View style={styles.slide1}>
                                <Image
                                    resizeMode={'contain'}
                                    style={styles.SecondImageGuide}
                                    source={require('../../images/swiperFirstGUIDE.png')} />
                            </View>
                            <View style={styles.slide3}>
                                <Text style={styles.text}>And simple</Text>
                            </View>
                            <View style={styles.slide1}>
                                <Image
                                    resizeMode={'contain'}
                                    style={styles.SecondImageGuide}
                                    source={require('../../images/swiperFirstGUIDE.png')} />
                            </View>
                        </Swiper>
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
                                                    <FontAwesome5 name={'glass-martini'} size={20} color="#FFA500" />
                                                </Right>
                                            </ListItem>
                                        </List>
                                    </View>
                                );
                            }}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <TouchableOpacity
                            style={[styles.buttonDesign, { marginTop: 5, marginBottom: 20 }]}>
                            <Text style={[globalStyles.header6, { color: Colors.white }]}>Track</Text>
                        </TouchableOpacity>
                    </Card>
                </CollapseBody>
            </Collapse>
        )
    }
    renderActivityTracker = () => {
        return (
            <View style={[styles.homebuttons, { backgroundColor: this.state.food === false ? Colors.Status : 'white', }]}>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text
                            style={[styles.QuestionInnerText, {
                                color: this.state.active === 2 ? Colors.white : Colors.NewBackgroundColor,
                            }]}>Activity Tracker
                        </Text>
                        <Text
                            style={styles.QuestionInnerText}><FontAwesome5 name={'glass-martini'} size={20} color="#FFA500" /></Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
};




