import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { styles } from './style';
import { Colors } from '../../styles/colors';

import {
    Content,
    Container,
    Item,
    Input,
    Picker,
} from 'native-base'

const Search = ({ navigation }) => {

    const [search, setSearch] = React.useState("")
    const [searchedContacts, setSearchedContacts] = React.useState([])
    const [focus, setFocus] = useState(true);

    const [searchEmpty, setSearchEmpty] = React.useState(true)

    const [Profile, setPrfile] = React.useState([
        {
            image: require('../../images/BloodPressure.png'),
            Name: "Aliya",
            gender: "Female",
            price: 5
        },
        {
            image: require('../../images/Asthma.png'),
            Name: "Sundas",
            gender: "Female",
            price: 14

        },
        {
            image: require('../../images/Asthma.png'),
            Name: "waliya",
            gender: "Female",
            price: 12

        },
        {
            image: require('../../images/Asthma.png'),
            Name: "Mukhtar",
            gender: "Female",
            price: 18

        },
        {
            image: require('../../images/Asthma.png'),
            Name: "Maham",
            gender: "Female",
            price: 10

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
        <Container style={{ backgroundColor: Colors.BGNEW, }}>

            <View style={styles.container}>
                <Item style={styles.SearchItem}>
                    <Input
                        autoFocus={true}
                        onChangeText={text => SearchFilterFunction(text)}
                        value={search}
                        style={{ borderRadius: 10, marginLeft: 5 }}
                        placeholder="Search"
                        returnKeyType="go" />
                </Item>
            </View>


            <Content
                style={styles.content}
                showsVerticalScrollIndicator={false}>

                <Text style={styles.Suggested}>Result</Text>

                <View style={styles.ViewHead} />

                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={search != "" ? searchedContacts : Profile}

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
                        style={{ marginTop: 10 }}
                        keyExtractor={(item, index) => index.toString()}
                    />

                </View>

            </Content>
        </Container>
    );
};

export default Search;
