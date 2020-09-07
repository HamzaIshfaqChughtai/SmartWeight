/**
 * Created by HP on 9/5/2020.
 */
import React from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Card, CardItem, Text, Icon,} from 'native-base';

const {width,height}=Dimensions.get('window')
const FoodFlatList=({dataSource,onPressed,ind}) =>
{
    return(
        // <View style={styles.MainContainer}>
        <FlatList
            data={dataSource}
            style={{width:width}}
            renderItem={({ item }) => (
                <View style={{ flex: 1, flexDirection: 'column', margin: 3 }}>
                    <TouchableOpacity onPress={()=>onPressed(item)}>
                        <Card>
                            <CardItem>
                                <Icon active name="logo-googleplus" />
                                <Text>Google Plus</Text>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                </View>
            )}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index}
        />
        //</View>
    )
}
const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        marginTop:5,
        backgroundColor:'white',
        width:width
    },

    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        borderRadius:10,

        borderColor:'gray',
        borderWidth:0.3,


    },
});
export default FoodFlatList
