/**
 * Created by HP on 9/11/2020.
 */
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView, ActivityIndicator, Alert, ImageBackground } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../styles/colors';
const CustomFooter=({navigation,homestyle})=>{
    return(
        <View style={styles.footermain}>
            <View style={styles.footeralign}>
                <TouchableOpacity style={styles.footericon}
                                  onPress={() =>navigation.navigate('Tabs')}
                >
                  <Text><SimpleLineIcons name={'home'} size={24} color={Colors.divider}/></Text>
                    <Text style={{fontSize:10,color:Colors.divider}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footericon}
                                  onPress={() =>navigation.navigate('Resturent')}
                >
                    <Text><FontAwesome5 name={'concierge-bell'} size={24} color={Colors.divider}/></Text>
                    <Text style={{fontSize:10,color:Colors.divider}}>Resturent</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footericon}
                                  onPress={() => navigation.navigate('NotificationsTab')}
                >
                    <Text><AntDesign name={'bells'} size={24} color={Colors.divider}/></Text>
                    <Text style={{fontSize:10,color:Colors.divider}}>Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footericon}
                                  onPress={() => navigation.navigate('ProfileTab')}

                >
                    <Text><AntDesign name={'user'} size={24} color={Colors.divider}/></Text>
                    <Text style={{fontSize:10,color:Colors.divider}}>Profile</Text>
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