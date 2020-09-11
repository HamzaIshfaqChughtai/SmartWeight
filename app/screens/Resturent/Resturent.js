import React, { useEffect } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import ActionSecondHeader from '../../../components/ActionSecondHeader';
import { styles } from './style';
import { Colors } from '../../styles/colors';

import {
    Content,
    Container,
    Item,
    Input,
    Picker,
} from 'native-base'
// import Loader from '../../../components/Loader';

const Resturent = ({ navigation }) => {
    const [ShowSuggested, setShowSuggested] = React.useState(false);
    const [search, setSearch] = React.useState("")
    const [Papular, setPapular] = React.useState("")
    const [searchEmpty, setSearchEmpty] = React.useState(true)
    const [searchedContacts, setSearchedContacts] = React.useState([])

    const [Profile, setPrfile] = React.useState([
        {
            image: require('../../images/BloodPressure.png'),
            Name: "Aliya",
            gender: "Vegetarian",
            km: 5
        },
        {
            image: require('../../images/Asthma.png'),
            Name: "Sundas",
            gender: "Vegetarian",
            km: 14

        },
        {
            image: require('../../images/Asthma.png'),
            Name: "waliya",
            gender: "Vegetarian",
            km: 12

        },
        {
            image: require('../../images/Asthma.png'),
            Name: "Mukhtar",
            gender: "Vegetarian",
            km: 18

        },
        {
            image: require('../../images/Asthma.png'),
            Name: "Maham",
            gender: "Vegetarian",
            km: 10

        },

    ]);

    const SearchFilterFunction = (text) => {
        let newContacts = []
        if (Profile.length > 0) {
            newContacts = Profile.filter(item => item.Name.toLowerCase().includes(text.toLowerCase()),
            );
            setSearchedContacts(newContacts)
        }
        if (text == '') {
            setSearchEmpty(true)
            setSearchedContacts(Profile)
            setSearch("")
        } else {
            setSearch(text)
        }

    };





    return (
        <Container style={{ backgroundColor: Colors.BGNEW }}>

            <TouchableOpacity
                onPress={() => navigation.navigate('Search')}
                style={styles.SearchItem}>
                <Text style={styles.SearchText}>Search</Text>
            </TouchableOpacity>

            <Content
                style={styles.content}
                showsVerticalScrollIndicator={false}>

                <Text style={styles.Suggested}>Suggested</Text>

                <View style={styles.ViewHead} />

                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={ShowSuggested == true ? Profile : Profile.slice(0, 2)}
                        // keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 30 }}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('ResturentProfile')}
                                    key={index}
                                    style={styles.ProfileList}>

                                    <View style={styles.ImageUpperView}>

                                        <View style={styles.ImageView}>
                                            <Image
                                                style={styles.ClientProfileImage}
                                                source={require('../../images/profileimage.png')} />

                                            <View style={{ marginLeft: 20 }}>
                                                <Text style={styles.ResturentName}>
                                                    {item.Name}
                                                </Text>

                                                <Text style={styles.ResturentType}>
                                                    {item.gender}
                                                </Text>
                                            </View>
                                        </View>


                                        <Text style={styles.ResturentKm}>{item.km} km</Text>

                                    </View>

                                </TouchableOpacity>
                            );
                        }}
                        enableEmptySections={true}
                        keyExtractor={(item, index) => index.toString()}
                    />

                    <TouchableOpacity
                        onPress={() => setShowSuggested(true)}
                        style={{
                            justifyContent: 'center',
                            alignSelf: 'center'
                        }}>
                        <Text>View More</Text>
                    </TouchableOpacity>
                </View>















                <Text style={styles.Suggested}>Papular</Text>

                <View style={[styles.ViewHead, { width: 80 }]} />

                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={Papular == true ? Profile : Profile.slice(0, 2)}
                        // keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 30 }}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('ResturentProfile')}
                                    key={index}
                                    style={styles.ProfileList}>

                                    <View style={styles.ImageUpperView}>

                                        <View style={styles.ImageView}>
                                            <Image
                                                style={styles.ClientProfileImage}
                                                source={require('../../images/profileimage.png')} />

                                            <View style={{ marginLeft: 20 }}>
                                                <Text style={styles.ResturentName}>
                                                    {item.Name}
                                                </Text>

                                                <Text style={styles.ResturentType}>
                                                    {item.gender}
                                                </Text>
                                            </View>
                                        </View>


                                        <Text style={styles.ResturentKm}>{item.km} km</Text>

                                    </View>

                                </TouchableOpacity>
                            );
                        }}
                        enableEmptySections={true}
                        keyExtractor={(item, index) => index.toString()}
                    />

                    <TouchableOpacity
                        onPress={() => setPapular(true)}
                        style={{
                            justifyContent: 'center',
                            alignSelf: 'center'
                        }}>
                        <Text>View More</Text>
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>
    );
};

export default Resturent;
