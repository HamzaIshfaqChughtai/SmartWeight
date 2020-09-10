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
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


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
            food:true,
            guide:true,
            active: 1

        };
    }
componentDidMount(){
    console.disableYellowBox = true;
}


    render() {

        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.renderheaderCard()}
                { this.state.food === true ?
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
            marginLeft:'7%',
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
            marginLeft:'7%',
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
                       <Text style={{ fontSize: 14 }}>Daily Remaining</Text>
                       <Text style={styles.portiontext}>16</Text>
                       <Text style={styles.portiontext}>Portions</Text>
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
                    {/*<Text style={styles.homebuttons}>food tab</Text>*/}
                    {this.renderBreakFast()}
                    {this.renderLunch()}
                    {this.renderDinner()}
                    {this.renderSnacks()}
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,marginRight:'10%', alignItems: 'center',justifyContent: 'center',}}>
                        <CustomCard cardstyle={styles.customcard} textStyle={styles.TextColorStyle}  title="Track Baverage" icon={<FontAwesome5 name={'glass-martini'} size={20} color="#FFA500" />} number="8 Glasses" numberstyle={styles.TextColorStyle}></CustomCard>
                        <CustomCard  cardstyle={styles.customcard} textStyle={styles.TextColorStyle}  title="Track Weight" icon={<FontAwesome5 name={'glass-martini'} size={20} color="#FFA500" />} number="180 Ibs" numberstyle={styles.TextColorStyle}></CustomCard>

                    </View>

                    {this.renderActivityTracker()}
                </View>
        )
    }
    guideTab = () => {
        return(
            <View>
                {this.renderBreakFast()}
            </View>
        )
    }
    renderBreakFast = () => {
        return(
            <Collapse>
                <CollapseHeader onPress={()=>this.setState({food:false})} style={[styles.homebuttons,{ backgroundColor: this.state.food === false ? Colors.Status : 'white',}]}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Text
                            style={[styles.QuestionInnerText, {
                                color: this.state.active === 2 ? Colors.white : Colors.NewBackgroundColor,
                            }]}>Breakast
                        </Text>
                        <Text
                            style={styles.QuestionInnerText}><FontAwesome5 name={'glass-martini'} size={20} color="#FFA500" /></Text>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View>
                        <Card style={[styles.iconbuttons,{ backgroundColor:'white',}]}>
                            <FlatList
                                horizontal
                                nestedScrollEnabled
                                showsHorizontalScrollIndicator={false}
                                data={data1}
                                style={{marginLeft:10,marginRight:10}}
                                renderItem={({ item: rowData }) => {
                                    return (
                                        <View   style={styles.common_field}>
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
                    <Card  style={styles.collap_cardstyle}>
                        <Text style={styles.text_name}>Slider Area</Text>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            nestedScrollEnabled
                            data={data2}
                            style={{marginLeft:10,marginRight:10}}
                            renderItem={({ item: rowData }) => {
                                return (
                                    <View   style={styles.common_field}>
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
        return(
            <Collapse>
                <CollapseHeader onPress={()=>this.setState({food:false})} style={[styles.homebuttons,{ backgroundColor: this.state.food === false ? Colors.Status : 'white',}]}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
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
                        <Card style={[styles.iconbuttons,{ backgroundColor:'white',}]}>
                            <FlatList
                                horizontal
                                nestedScrollEnabled
                                showsHorizontalScrollIndicator={false}
                                data={data1}
                                style={{marginLeft:10,marginRight:10}}
                                renderItem={({ item: rowData }) => {
                                    return (
                                        <View   style={styles.common_field}>
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
                    <Card  style={styles.collap_cardstyle}>
                        <Text style={styles.text_name}>Slider Area</Text>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            nestedScrollEnabled
                            data={data2}
                            style={{marginLeft:10,marginRight:10}}
                            renderItem={({ item: rowData }) => {
                                return (
                                    <View   style={styles.common_field}>
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
        return(
            <Collapse>
                <CollapseHeader onPress={()=>this.setState({food:false})} style={[styles.homebuttons,{ backgroundColor: this.state.food === false ? Colors.Status : 'white',}]}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
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
                        <Card style={[styles.iconbuttons,{ backgroundColor:'white',}]}>
                            <FlatList
                                horizontal
                                nestedScrollEnabled
                                showsHorizontalScrollIndicator={false}
                                data={data1}
                                style={{marginLeft:10,marginRight:10}}
                                renderItem={({ item: rowData }) => {
                                    return (
                                        <View   style={styles.common_field}>
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
                    <Card  style={styles.collap_cardstyle}>
                        <Text style={styles.text_name}>Slider Area</Text>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            nestedScrollEnabled
                            data={data2}
                            style={{marginLeft:10,marginRight:10}}
                            renderItem={({ item: rowData }) => {
                                return (
                                    <View   style={styles.common_field}>
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
        return(
            <Collapse>
                <CollapseHeader onPress={()=>this.setState({food:false})} style={[styles.homebuttons,{ backgroundColor: this.state.food === false ? Colors.Status : 'white',}]}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
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
                        <Card style={[styles.iconbuttons,{ backgroundColor:'white',}]}>
                            <FlatList
                                horizontal
                                nestedScrollEnabled
                                showsHorizontalScrollIndicator={false}
                                data={data1}
                                style={{marginLeft:10,marginRight:10}}
                                renderItem={({ item: rowData }) => {
                                    return (
                                        <View   style={styles.common_field}>
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
                    <Card  style={styles.collap_cardstyle}>
                        <Text style={styles.text_name}>Slider Area</Text>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            nestedScrollEnabled
                            data={data2}
                            style={{marginLeft:10,marginRight:10}}
                            renderItem={({ item: rowData }) => {
                                return (
                                    <View   style={styles.common_field}>
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
        return(
                <View style={[styles.homebuttons,{ backgroundColor: this.state.food === false ? Colors.Status : 'white',}]}>
                    <TouchableOpacity>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
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




