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
import {fonts} from '../../styles/fonts'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Swiper from 'react-native-swiper'
import Slider from 'react-native-slider';
import GuidesHome from '../Home/Guides/GuidesHome'
import BreakFast from '../../screens/Home/Food/Component/BreakFast';
 import Dinner from '../../screens/Home/Food/Component/Dinner';
 import Lunch from '../../screens/Home/Food/Component/Lunch';
 import Snacks from '../../screens/Home/Food/Component/Snacks';
import Modal from 'react-native-modal';
import GuideOne from '../../screens/Home/Guides/Component/GuideOne'

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
            active: 1,
            sliderValue:30,
            status:false,
            foodstatus:false,
            breakfast:false,
            lunch:false,
            dinner:false,
            snacks:false,

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
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    breakfast: !this.state.breakfast,
                                    lunch: false,
                                    snacks: false,
                                    dinner: false,
                                })}
                                activeOpacity={0.7}
                                style={[styles.MediaView, {
                                    backgroundColor: this.state.breakfast == true ? Colors.Status : Colors.white
                                }]}>
                                <View style={{ flexDirection: 'row' }}>

                                    <Text style={[styles.subfoodType, {
                                        color: this.state.breakfast == true ? Colors.white : Colors.black
                                    }]}>Breakast</Text>
                                    {
                                        this.state.breakfast==true ?
                                        <Image
                                            resizeMode={'contain'}
                                            style={styles.subfoodicon}
                                            source={require('../../images/breakfast.png')}
                                        />:
                                            ( <Image
                                                resizeMode={'contain'}
                                                style={styles.subfoodicon}
                                                source={require('../../images/breakfast.png')}
                                            />)
                                    }

                                </View>

                            </TouchableOpacity>
                            {this.state.breakfast && <BreakFast/>}


                            <TouchableOpacity
                                onPress={() => this.setState({
                                    lunch: !this.state.lunch,
                                    breakfast: false,
                                    snacks: false,
                                    dinner: false,
                                })}
                                activeOpacity={0.7}
                                style={[styles.MediaView, {
                                    backgroundColor: this.state.lunch == true ? Colors.Status : Colors.white
                                }]}>
                                <View style={{ flexDirection: 'row' }}>

                                    <Text style={[styles.subfoodType, {
                                        color: this.state.lunch == true ? Colors.white : Colors.black
                                    }]}>Lunch</Text>
                                    {
                                        this.state.lunch==true ?
                                            <Image
                                                resizeMode={'contain'}
                                                style={styles.subfoodicon}
                                                source={require('../../images/lunch.png')}
                                            />:
                                            ( <Image
                                                resizeMode={'contain'}
                                                style={styles.subfoodicon}
                                                source={require('../../images/lunch.png')}
                                            />)
                                    }

                                </View>

                            </TouchableOpacity>
                            {this.state.lunch && <Lunch/>}



                            <TouchableOpacity
                                onPress={() => this.setState({
                                    dinner: !this.state.dinner,
                                    breakfast: false,
                                    snacks: false,
                                    lunch: false,
                                })}
                                activeOpacity={0.7}
                                style={[styles.MediaView, {
                                    backgroundColor: this.state.dinner == true ? Colors.Status : Colors.white
                                }]}>
                                <View style={{ flexDirection: 'row' }}>

                                    <Text style={[styles.subfoodType, {
                                        color: this.state.dinner == true ? Colors.white : Colors.black
                                    }]}>Dinner</Text>
                                    {
                                        this.state.dinner==true ?
                                            <Image
                                                resizeMode={'contain'}
                                                style={styles.subfoodicon}
                                                source={require('../../images/dinner.png')}
                                            />:
                                            ( <Image
                                                resizeMode={'contain'}
                                                style={styles.subfoodicon}
                                                source={require('../../images/dinner.png')}
                                            />)
                                    }

                                </View>

                            </TouchableOpacity>
                            {this.state.dinner && <Dinner/>}




                            <TouchableOpacity
                                onPress={() => this.setState({
                                    snacks: !this.state.snacks,
                                    breakfast: false,
                                    lunch: false,
                                    dinner: false,
                                })}
                                activeOpacity={0.7}
                                style={[styles.MediaView, {
                                    backgroundColor: this.state.snacks == true ? Colors.Status : Colors.white
                                }]}>
                                <View style={{ flexDirection: 'row' }}>

                                    <Text style={[styles.subfoodType, {
                                        color: this.state.snacks == true ? Colors.white : Colors.black
                                    }]}>Snacks</Text>
                                    {
                                        this.state.snacks==true ?
                                            <Image
                                                resizeMode={'contain'}
                                                style={styles.subfoodicon}
                                                source={require('../../images/snacks.png')}
                                            />:
                                            ( <Image
                                                resizeMode={'contain'}
                                                style={styles.subfoodicon}
                                                source={require('../../images/snacks.png')}
                                            />)
                                    }

                                </View>

                            </TouchableOpacity>
                            {this.state.snacks && <Snacks/>}

                            {this.BaverageTab()}
                            {this.renderActivityTracker()}
                            {this.renderFreeSupplement()}

                            <Modal
                                isVisible={this.state.status}
                                style={styles.modalview}
                                onBackButtonPress={() => this.setState({status:false})}
                                onBackdropPress={() =>  this.setState({status:false})}
                                useNativeDriver={true}
                                hardwareAccelerated={true}
                                hideModalContentWhileAnimating={true}
                            >
                                <View style={styles.Modalbox}>
                                    <View style={styles.ModalInner}>

                                        <Text style={styles.oops}>Ooops!!</Text>
                                        <Text style={styles.error}>
                                            Your Points exceeding your spending linits,how will you achieve your desired goal like this?</Text>

                                        <TouchableOpacity
                                            onPress={() => this.setState({status:false})}
                                            style={[styles.buttonDesign, { marginTop: 30, width: 180, borderRadius: 40 }]}>
                                            <Text style={[globalStyles.header6, { color: Colors.white, }]}>Close</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>

                            </Modal>


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
                        percent={60}
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



    BaverageTab = () => {
        return (
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    marginRight: '6%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <CustomCard
                        cardstyle={styles.customcard}
                        textStyle={styles.TextColorStyle}
                        title="Track Baverage"
                        slider={ <Text style={{  width: 28, height: 28,}}></Text>}
                        icon={require('../../images/baverage.png')}
                        number="8 Glasses"
                        numberstyle={styles.TextColorStyle}>
                    </CustomCard>

                    <CustomCard
                        cardstyle={styles.customcard}
                        textStyle={styles.TextColorStyle}
                        title="Track Weight"
                        slider={ <Slider
                            minimumValue={0}
                            step={30}
                            thumbStyle={styles.SliderStyle}
                            style={{ width: 100 }}
                            maximumValue={100}
                            minimumTrackTintColor={Colors.Red}
                            maximumTrackTintColor='#d3d3d3'
                            thumbTintColor={Colors.Status}
                            value={this.state.sliderValue}
                            onValueChange={(sliderValue) => this.setState({sliderValue:sliderValue})} />}
                        icon={require('../../images/weight.png')}
                        number="180 Ibs"
                        numberstyle={styles.TextColorStyle}>
                    </CustomCard>

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
    renderActivityTracker = () => {
        return (
            <View style={[styles.MediaView, {backgroundColor: this.state.food === false ? Colors.Status : 'white', }]}>
                <TouchableOpacity onPress={()=> this.setState({status:true})}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text
                            style={[styles.QuestionInnerText, {
                                color: this.state.active === 2 ? Colors.white : Colors.NewBackgroundColor,
                            }]}>Activity Tracker
                        </Text>
                        <Image
                            resizeMode={'contain'}
                            style={styles.subfoodicon}
                            source={require('../../images/activity.png')}/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    renderFreeSupplement = () => {
        return (
            <View style={[styles.SupplementView, { marginBottom:10}]}>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text
                            style={styles.SupplementText}>Get Free Supplement Assessment
                        </Text>
                        <Image
                            resizeMode={'contain'}
                            style={styles.suplementicon}
                            source={require('../../images/suplement.png')}/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
};




