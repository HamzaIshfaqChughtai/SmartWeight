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
const ResturentProfile = ({ navigation }) => {


    const [sliderValue, setSliderValue] = useState(0)
    const [selfcontrol, setSelfcontrol] = useState(false)
    const [status, setStatus] = useState(false)
    const [Profile, setPrfile] = React.useState([
        {
            image: require('../../images/BloodPressure.png'),
            Name: "Aliya",
            gender: "Vegetarian",
            km: 5,
            sliderValue: 0,
            selfcontrol: false
        },
        {
            image: require('../../images/Asthma.png'),
            Name: "Sundas",
            gender: "Vegetarian",
            km: 14,
            sliderValue: 0,
            selfcontrol: false


        },
        {
            image: require('../../images/Asthma.png'),
            Name: "waliya",
            gender: "Vegetarian",
            km: 12,
            sliderValue: 0,
            selfcontrol: false


        },
        {
            image: require('../../images/Asthma.png'),
            Name: "Mukhtar",
            gender: "Vegetarian",
            km: 18,
            sliderValue: 0,
            selfcontrol: false


        },
        {
            image: require('../../images/Asthma.png'),
            Name: "Maham",
            gender: "Vegetarian",
            km: 10,
            sliderValue: 0,
            selfcontrol: false

        },

    ]);



    return (
        <Container style={{ backgroundColor: Colors.BGNEW }}>

            <Content
                showsVerticalScrollIndicator={false}>



                <Image
                    style={styles.resturentImage}
                    source={require('../../images/res.jpg')} />

                <View style={{ position: "absolute", top: 10, left: 4 }}>
                    <Iconss name="keyboard-arrow-left" style={{ fontSize: 40, color: Colors.white }} />
                </View>

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
                                <TouchableOpacity
                                    onPress={() => {
                                        setSelfcontrol(!selfcontrol)
                                        navigation.navigate('ResturentProfile')
                                    }}
                                    key={index}
                                    style={styles.ProfileList}>

                                    <View style={styles.ImageUpperView}>

                                        <View style={styles.ImageView}>

                                            <View style={{
                                                height: 18,
                                                width: 18,
                                                borderWidth: 1,
                                                borderRadius: 40,
                                                backgroundColor: selfcontrol === true ? Colors.Status : Colors.white,
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
                                            thumbStyle={styles.SliderStyle}
                                            style={{ width: 140 }}
                                            maximumValue={100}
                                            minimumTrackTintColor={Colors.Status}
                                            maximumTrackTintColor='#d3d3d3'
                                            thumbTintColor={Colors.Status}
                                            value={item.sliderValue}
                                            onValueChange={(sliderValue) => setSliderValue(sliderValue)} />

                                        <Image
                                            resizeMode={'contain'}
                                            style={{ height: 30, width: 30 }}
                                            source={require('../../images/Asthma.png')} />
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
