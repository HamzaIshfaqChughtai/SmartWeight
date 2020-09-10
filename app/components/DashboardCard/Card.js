/**
 * Created by HP on 9/9/2020.
 */
import React from 'react'
import {StyleSheet,Text,TouchableOpacity,View,Dimensions} from 'react-native'
const {width,height}=Dimensions.get('window')
const Card=({icon,iconstyle,number,title,onPress,cardstyle,textStyle,numberstyle}) =>
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={[cardstyle,styles.Cardstyle]}>
                <Text style={[iconstyle,]}>{icon} </Text>
                <Text style= {[textStyle,styles.Text]} > {title}</Text>
                <Text style={[numberstyle,styles.number]}>{number}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    Cardstyle:{

        alignItems: 'center',
        justifyContent: 'center',
        width: width/2.4,
        height:height/4.5,
        borderRadius: 20,
        // borderWidth: 0.5,
        borderColor: 'black',
        shadowColor: "#000",
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        // elevation: 6,
        padding: 15
    },
    Text: {
        fontSize: 17,
        fontWeight:'bold',
        marginTop:10
        // textTransform: 'uppercase'
    },
    number:
        {
            fontSize:15,
            marginTop:7,
        },
    styleicon:{

        fontSize:20
    }
})
export default Card
