import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconss from 'react-native-vector-icons/MaterialIcons';


// import ActionSecondHeader from '../../../components/ActionSecondHeader';
import { styles } from './style';
import { Colors } from '../../styles/colors';
// import Slider from '@react-native-community/slider';
import {
    Content,
    Container,
    Item,
    Input,
    Picker,
} from 'native-base'
import { globalStyles } from '../../styles/globalStyles';
import Slider from 'react-native-slider';
import Modal from 'react-native-modal';
import CustomFooter from '../../../app/components/CustomFooter/CustomFooter';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const ResturentProfile = ({ navigation }) => {


    const [sliderValue, setSliderValue] = useState(0)
    const [selfcontrol, setSelfcontrol] = useState(false)
    const [status, setStatus] = useState(false)
    const [value, setValue] = useState('Home')
    const [Profile, setPrfile] = useState([
        {
            id: 1,
            image: require('../../images/BloodPressure.png'),
            Name: "Aliya",
            gender: "Vegetarian",
            km: 5,
            sliderValue: 0,
            selfcontrol: false
        },
        {
            id: 2,
            image: require('../../images/Asthma.png'),
            Name: "Sundas",
            gender: "Vegetarian",
            km: 14,
            sliderValue: 0,
            selfcontrol: false


        },
        {
            id: 3,
            image: require('../../images/Asthma.png'),
            Name: "waliya",
            gender: "Vegetarian",
            km: 12,
            sliderValue: 0,
            selfcontrol: false


        },
        {
            id: 4,
            image: require('../../images/Asthma.png'),
            Name: "Mukhtar",
            gender: "Vegetarian",
            km: 18,
            sliderValue: 0,
            selfcontrol: false


        },
        {
            id: 5,
            image: require('../../images/Asthma.png'),
            Name: "Maham",
            gender: "Vegetarian",
            km: 10,
            sliderValue: 0,
            selfcontrol: false

        },

    ]);

    selectvalue = (id) => {

        //multi select code

        let authUsers = Profile
        for (let item of authUsers) {
            if (item.id == id) {
                item.selfcontrol = (item.selfcontrol == null) ? true : !item.selfcontrol;
                break;
            }
        }
        setPrfile([...authUsers])


        //single select code

        // const data = Profile;
        // data.forEach((elem) => {
        //     elem.selfcontrol = false;
        //     if (elem.id === id) {
        //         elem.selfcontrol = true;
        //     }
        // })
        // setPrfile([...data])

    }

    return (
        <Container style={{ backgroundColor: Colors.BGNEW }}>

            <Content
                showsVerticalScrollIndicator={false}>



                <Image
                    style={styles.resturentImage}
                    source={require('../../images/res.jpg')} />

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ position: "absolute", top: 10, left: 4 }}>
                    <Iconss name="keyboard-arrow-left" style={{ fontSize: 40, color: Colors.white }} />
                </TouchableOpacity>

                <View style={styles.ResturnetNameType}>

                    <View>
                        <Text style={styles.ResturentName}>Resturant Lahore</Text>
                        <Text style={styles.ProfileResturentType}>Vegetrain</Text>
                    </View>

                    <Icon name="map-marker" style={{ fontSize: 28 }} />

                </View>


                <View style={{
                    marginLeft: 12,
                    marginRight: 12
                }}>

                    <Text style={styles.Suggested}>Result</Text>

                    <View style={styles.ViewHead} />

                    <View style={styles.Point}>
                        <Text style={styles.Suggested}>Name</Text>
                        <Text style={styles.Suggested}>Points</Text>
                    </View>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={Profile}
                        // keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 30 }}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity  onPress={() => {
                                    console.log("hello")
                                    selectvalue(item.id)
                                    navigation.navigate('ResturentProfile')
                                }}>
                                <View
                                    key={index}
                                    style={styles.ProfileresList}>

                                    <View style={styles.ImageUpperView}>

                                        <View style={styles.ImageView}>

                                            <View style={{
                                                height: 18,
                                                width: 18,
                                                borderWidth: 1,
                                                borderRadius: 40,
                                                backgroundColor: item.selfcontrol === true ? Colors.Status : Colors.white,
                                            }} />

                                            <View style={{ marginLeft: 20 }}>
                                                <Text style={styles.ResturentName}>
                                                    {item.Name}
                                                </Text>

                                                <Text style={styles.ResturentType}>
                                                    {item.gender}
                                                </Text>
                                            </View>
                                        </View>

                                        <View style={styles.borderline} />

                                        <Text style={styles.ResturentKm}>{item.km}</Text>

                                    </View>

                                    <View style={styles.SliderView}>


                                        <Slider
                                            minimumValue={0}
                                            step={30}
                                            thumbStyle={styles.SliderStyle}
                                            style={{ width: 140 }}
                                            maximumValue={100}
                                            minimumTrackTintColor={Colors.Status}
                                            maximumTrackTintColor='#d3d3d3'
                                            thumbTintColor={Colors.Status}
                                            value={item.sliderValue}
                                            onValueChange={(sliderValue) => setSliderValue(sliderValue)} />

                                        {sliderValue == "30" && <Image
                                            resizeMode={'contain'}
                                            style={{ height: 30, width: 30 }}
                                            source={require('../../images/semifill.png')} />
                                        }

                                        {sliderValue == '60' && <Image
                                            resizeMode={'contain'}
                                            style={{ height: 30, width: 30 }}
                                            source={require('../../images/halffill.png')} />
                                        }

                                        {sliderValue == '100' && <View style={{
                                            backgroundColor: Colors.Status,
                                            height: 30,
                                            width: 30,
                                            borderRadius: 40,
                                        }}>
                                        </View>}
                                    </View>

                                </View>
                                </TouchableOpacity>
                            );
                        }}
                        enableEmptySections={true}
                        keyExtractor={(item, index) => index.toString()}
                    />


                    <TouchableOpacity
                        onPress={() => setStatus(true)}
                        style={styles.buttonDesign}>
                        <Text style={[globalStyles.header6, {
                            color: Colors.white,
                        }]}>Track</Text>
                    </TouchableOpacity>
                </View>


            </Content>
            <CustomFooter
                navigation={navigation}
                tab2={Colors.gold}
            />
            <Modal
                isVisible={status}
                style={styles.modalview}
                onBackButtonPress={() => setStatus(false)}
                onBackdropPress={() => setStatus(false)}
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
                            onPress={() => setStatus(false)}
                            style={[styles.buttonDesign, { marginTop: 30, width: 180, borderRadius: 40 }]}>
                            <Text style={[globalStyles.header6, { color: Colors.white, }]}>Close</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </Modal>

        </Container>
    );
};

export default ResturentProfile;
