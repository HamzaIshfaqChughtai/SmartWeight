/**
 * Created by HP on 9/11/2020.
 */
import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView, ActivityIndicator, Alert, ImageBackground } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../styles/colors';
import HomeStack from '../../navigation/HomeStack';
const CustomFooter=({navigation,homestyle,tab1,tab2,tab3,tab4})=>{
    const [homeColor,sethomeColor]=useState(Colors.divider);
    const [resturantColor,setresturantColor]=useState(tab2);
    const [notifiColor,setnotifiColor]=useState(Colors.divider);
    const [profileColor,setprofileColor]=useState(Colors.divider);
    return(
        <View style={styles.footermain}>
            <View style={styles.footeralign}>
                <TouchableOpacity style={styles.footericon}
                                  onPress={() =>{setprofileColor(Colors.divider)||setnotifiColor(Colors.divider)|| setresturantColor(Colors.divider) || sethomeColor(Colors.gold) || navigation.navigate('HomeTab')}}
                >
                  <Text><SimpleLineIcons name={'home'} size={24} color={homeColor}/></Text>
                    <Text style={{fontSize:10,color:homeColor}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footericon}
                                  onPress={() => setprofileColor(Colors.divider)||setnotifiColor(Colors.divider)|| sethomeColor(Colors.divider) || setresturantColor(Colors.gold) || navigation.navigate('Resturent')}
                >
                    <Text><FontAwesome5 name={'concierge-bell'} size={24} color={resturantColor}/></Text>
                    <Text style={{fontSize:10,color:resturantColor}}>Resturent</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footericon}
                                  onPress={() =>setprofileColor(Colors.divider)|| sethomeColor(Colors.divider) || setresturantColor(Colors.divider) || setnotifiColor(Colors.gold)|| navigation.navigate('NotificationsTab')}
                >
                    <Text><AntDesign name={'bells'} size={24} color={notifiColor}/></Text>
                    <Text style={{fontSize:10,color:notifiColor}}>Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footericon}
                                  onPress={() => sethomeColor(Colors.divider) || setresturantColor(Colors.divider) || setnotifiColor(Colors.divider)|| setprofileColor(Colors.gold)|| navigation.navigate('ProfileTab')}

                >
                    <Text><AntDesign name={'user'} size={24} color={profileColor}/></Text>
                    <Text style={{fontSize:10,color:profileColor}}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}
const styles=StyleSheet.create({
    footermain: {
        // flex: 1,
        height:60,
        borderRadius:3,
        borderColor:Colors.divider,
        backgroundColor: Colors.white
    },
    footeralign: {
        flex: 2,
        backgroundColor:  Colors.white,
        marginTop:'2%',
        flexDirection: 'row'
    },
    footericon: {
        flex: 1,
        backgroundColor:  Colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default CustomFooter