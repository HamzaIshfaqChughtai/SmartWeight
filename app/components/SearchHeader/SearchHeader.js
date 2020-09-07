/**
 * Created by HP on 9/5/2020.
 */
import React from 'react'
import { AppRegistry, StyleSheet, TextInput, View } from 'react-native';
const SearchHeader=({value,onChangeText}) =>{
    return(
<View style={styles.MainContainer}>
        <TextInput
            placeholder="Search"
            placeholderStyle={{ fontFamily: "AnotherFont", borderColor: 'red' }}
            returnKeyType="search"
            value={value}
            onChangeText={onChangeText}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}/>
</View>
    )
}
const styles=StyleSheet.create({
    MainContainer :{

// Setting up View inside content in Vertically center.
//         justifyContent: 'center',
        flex:1,
        margin: 10

    },

    TextInputStyleClass:{

        height: 50,
        borderWidth: 2,
        borderRadius: 20 ,
        borderColor:'#FFFFFF',
        fontWeight:'bold',
        backgroundColor : "#FFFFFF",
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,

    }
})

export default SearchHeader
