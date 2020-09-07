
import React, { useEffect, useState, useRef } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    Keyboard,
    ActivityIndicator,
    findNodeHandle,
    Alert
} from 'react-native';
// import { styles } from './style';
import { styles } from './style';
import Icon from 'react-native-vector-icons/FontAwesome';


import {
    Container,
    Picker,
    Content,
    Form,
    Item,
    CheckBox,
    Input,
    Thumbnail,
    Label,
    Footer,
    Button,
    FooterTab,
} from 'native-base';

import { Colors } from '../../styles/colors';
import { globalStyles } from '../../styles/globalStyles';
// export default class Login extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {

//         };
//     }



//     render() {

export default function Login(props) {
    const [showFooter, setshowFooter] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emailNull, setEmailNull] = useState(true);
    const [passwordError, setPasswordError] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);


    // useEffect(() => {

    //     const keyboardDidShowListener = Keyboard.addListener(
    //         'keyboardDidShow',
    //         _keyboardDidShow.bind(this),
    //     );
    //     const keyboardDidHideListener = Keyboard.addListener(
    //         'keyboardDidHide',
    //         _keyboardDidHide.bind(this),
    //     );
    //     return () => {
    //         keyboardDidShowListener.remove();
    //         keyboardDidHideListener.remove();
    //     };
    // }, []);

    // function _keyboardDidShow() {
    //     setshowFooter(false);
    // }

    // function _keyboardDidHide() {
    //     setshowFooter(true);
    // }

    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return true;
        }
        return false;
    }

    function onChangeEmail(email) {
        let trimmedEmail = email.replace(" ", "")
        if (ValidateEmail(trimmedEmail)) {
            setEmail(trimmedEmail);
            setEmailError(false);
            setEmailNull(false);
        } else {
            setEmail(trimmedEmail);
            setEmailError(true);
            setEmailNull(true);
        }
    }

    function onChangePassword(password) {
        if (password.length >= 6) {
            setPassword(password);
            setPasswordError(false);
        } else {
            setPasswordError(true);
            setPassword('');
        }
    }



    // function focusTextInput(node) {
    //     try {
    //         TextInputState.focusTextInput(findNodeHandle(node));
    //     } catch (e) {
    //         Alert("Couldn't focus text input: ", e.message);
    //     }
    // }

    // const passwordRef = useRef(null)

    const disabled = !email || !password;


    return (
        <Container style={{ backgroundColor: Colors.white, height: '100%' }}>

            <Content >


                <View style={{ margin: 20, marginBottom: 80 }}>
                    <View
                        style={styles.ViewShadow}>

                        <Image
                            resizeMode={'contain'}
                            style={styles.AppImage}
                            source={require('../../images/AppIcon.png')} />






                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 50 }}>


                            <Item
                                error={emailError}
                                rounded
                                style={styles.email}>
                                <Input
                                    placeholder="EMAIL"
                                    autoCapitalize="none"
                                    style={[globalStyles.text1, { paddingLeft: 15, }]}
                                    returnKeyType="next"
                                    // onSubmitEditing={() => focusTextInput(passwordRef.current)}
                                    onChangeText={text => onChangeEmail(text)}
                                    selectionColor={Colors.white}
                                    value={email}
                                />
                            </Item>
                            {emailError && (
                                <Text style={{ color: 'red', fontSize: 10, marginLeft: 10, marginTop: 5 }} note>Invalid email address. Please re-enter it.</Text>
                            )}

                            {/* error={passwordError} */}
                            <Item rounded
                                style={[styles.password, { marginTop: 10 }]}>
                                <Input
                                    autoCapitalize="none"
                                    placeholder="PASSWORD"
                                    style={[globalStyles.text1, { paddingLeft: 15, lineHeight: 13 }]}
                                    onChangeText={text => onChangePassword(text)}
                                    secureTextEntry={secureTextEntry}
                                    // ref={passwordRef}
                                    returnKeyType="go"
                                    selectionColor={Colors.white}
                                />

                                <Icon
                                    name={!secureTextEntry ? 'eye' : 'eye-slash'}
                                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                                    style={{ color: !secureTextEntry ? Colors.gold : Colors.grey, fontSize: 18, marginRight: 15 }}
                                />

                            </Item>


                            <Text style={styles.forgotPass}>Forgot Password</Text>

                        </View>


                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('CreateProfile')}
                            style={[styles.buttonDesign, { marginTop: '20%' }]}>
                            <Text style={[globalStyles.header6, { color: Colors.white }]}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('CreateProfile')}
                            style={styles.buttonDesign}>
                            <Text style={[globalStyles.header6, { color: Colors.white }]}>Register</Text>
                        </TouchableOpacity>







                        <Text style={styles.or}>or</Text>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            marginTop: 20
                        }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('CreateProfile')} >
                                <Image
                                    resizeMode={'contain'}
                                    style={{ height: 60, width: 60 }}
                                    source={require('../../images/fb.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('CreateProfile')} >
                                <Image
                                    resizeMode={'contain'}
                                    style={{ height: 60, width: 60 }}
                                    source={require('../../images/google.png')} />
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>

            </Content>


        </Container >
    );
}
