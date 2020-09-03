import React from 'react';
import { StyleSheet, View, Text, Platform, TouchableOpacity } from 'react-native';
import { fonts } from '../../styles/fonts';
import { Colors } from '../../styles/colors';
import { Title, Button, Left, Right, Body } from "native-base";
import Icon from 'react-native-vector-icons/MaterialIcons';


class ActionSecondHeader extends React.Component {

    render() {
        return (
            <View style={styles.HeaderSecond}>
                <Left style={{ flex: 2.5, }}>
                    <Button
                        transparent
                        iconLeft
                        onPress={() => {
                            goBack(this.props);
                        }}
                    >
                        <Icon
                            name="arrow-back"
                            style={{ color: '#C4C4C4' }}
                            style={styles.IconSize} />


                    </Button>
                </Left>

                <Body style={{ flex: 5, justifyContent: 'center', }}>
                    <Text style={[styles.newMessage, { textAlign: "center" }]}>{this.props.title ? this.props.title.toUpperCase() : " ".toUpperCase()}</Text>
                </Body>

                <Right style={styles.HeaderThird}>
                    {this.props.actionName && <TouchableOpacity
                        onPress={this.props.onPress}
                        style={{ padding: 10 }}
                    >
                        <Text style={styles.Back}>{`${this.props.actionName}`.toUpperCase()}</Text>
                    </TouchableOpacity>}
                </Right>

            </View >
        );
    }
}

const styles = StyleSheet.create({

    Container: {
        height: 50
    },
    newMessage: {
        fontFamily: fonts['Gotham-Medium'],
        fontSize: 14,
        letterSpacing: 0.04,
        color: Colors.gold,
    },
    SaveDraft: {
        fontFamily: fonts['Gotham-Book'],
        fontSize: 12,
        color: Colors.Draft
    },
    IconSize: {
        fontSize: 26,
        color: Colors.NewBackgroundColor,
    },
    Back: {
        fontFamily: fonts['Gotham-Bold'],
        marginLeft: 7,
        color: Colors.NewBackgroundColor,
        fontSize: 14,
    },
    HeaderSecond: {
        marginLeft: 10,
        backgroundColor: Colors.item,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: "center",
        minHeight: 50,
        width: "100%"
    },
    HeaderFirst: {
        flex: 1
    },
    HeaderThird: {
        flex: 2.5,
        justifyContent: "center",
        alignItems: "center",
    },


})

export default ActionSecondHeader;