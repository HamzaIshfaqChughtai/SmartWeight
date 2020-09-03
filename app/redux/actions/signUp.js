import * as types from '../actionTypes';
import { BASE_URL } from '../../enviroments';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import firebase from 'react-native-firebase';
import { Platform, Alert, Linking } from 'react-native';
import request from '../../utls/apiHelper';
import { CometChat } from '@cometchat-pro/react-native-chat';
import RNExitApp from 'react-native-exit-app';
const Myversion = 2.0
const GOOGLE_PACKAGE_NAME = 'com.circleit';
const APPLE_STORE_ID = 'id1329263554';
firebase.analytics().setAnalyticsCollectionEnabled(true);

export const registerUser = (
  ipAddress,
  macAddress,
  password,
  deviceType,
  timeZone,
) => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_SIGN_UP });
    let user = {
      ipAddress: ipAddress,
      macAddress: macAddress,
      countryCode: store().signUp.countryCode,
      email: store().signUp.email,
      password: password,
      phone: store().signUp.phone,
      deviceType: deviceType,
      timeZone: timeZone,
    };
    axios
      .post(BASE_URL + 'registration/createUserWithEmailAndPassword', user)
      .then(response => {
        if (response.data.success) {
          user.id = response.data.id
          user.token = response.data.token
          dispatch({ type: types.USER_REGISTERED, user: user });
          AsyncStorage.setItem('LOGGED_IN', 'true');
          AsyncStorage.setItem('USER', JSON.stringify(user));
          firebase.analytics().logEvent('User_Signup', {
            userId: response.data.id,
            userEmail: store().signUp.email,
            userTimeZone: timeZone,
            deviceType: Platform.OS,
            timestamp: moment(new Date().getTime()).format('Do-MMM-YY | HH:mm:ss')

          })
        } else {
          dispatch({ type: types.ERROR_SIGN_UP, message: response.data.message });
          setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
        }
      })
      .catch(error => {
        dispatch({ type: types.ERROR_SIGN_UP, message: error.message });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
      });
  };
};

export const verifyUser = code => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_SIGN_UP });
    axios
      .post(BASE_URL + 'registration/verifyCode', {
        phone: store().signUp.user.phone,
        code: code,
      })
      .then(response => {
        if (response.data.success) {
          dispatch({ type: types.USER_VERIFIED, user: response.data.userData });
          AsyncStorage.setItem('LOGGED_IN', 'true');
          AsyncStorage.setItem('USER', JSON.stringify(response.data.userData));
        } else {
          dispatch({ type: types.ERROR_SIGN_UP, message: response.data.message });
          setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
        }
        // dispatch({type: types.USER_REGISTRATION_ERROR })
      })
      .catch(error => {
        dispatch({ type: types.ERROR_SIGN_UP, message: error });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
      });
  };
};

export const userLogin = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: types.LOADING_SIGN_UP });
    try {
      const response = await request({
        url: 'registration/signin',
        method: 'POST',
        data: {
          email: email,
          password: password,
        },
      });
      if (response.success) {
        firebase.analytics().logEvent('User_Signin', {
          userId: response.user.id,
          userEmail: response.user.email,
          userTimeZone: response.user.timeZone,
          deviceType: Platform.OS,
          timestamp: moment(new Date().getTime()).format('Do-MMM-YY | HH:mm:ss')
        });
        AsyncStorage.setItem('LOGGED_IN', 'true').then(() => {
          dispatch({ type: types.USER_LOGGED_IN, user: response.user });
          AsyncStorage.setItem('USER', JSON.stringify(response.user));
        });
      } else {
        dispatch({ type: types.ERROR_SIGN_UP, message: response.message });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
      }
    } catch (error) {
      dispatch({ type: types.ERROR_SIGN_UP, message: error.message });
      setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
    }
  };
};

export const getUser = user => {
  return async (dispatch) => {
    try {
      const response = await request({
        url: 'profile/getUser',
        method: 'POST',
        data: { id: user.id },
      }, user.token);

      dispatch({ type: types.USER_FETCHED, user: response.user });
    } catch (error) {
      console.log("getUserError", error);
    }
  };
};

function openStore() {
  if (Platform.OS != 'ios') {
    Linking.openURL(`market://details?id=${GOOGLE_PACKAGE_NAME}`).then(data => {
      RNExitApp.exitApp();
    })
  } else {
    Linking.openURL(`itms-apps://itunes.apple.com/us/app/circleit/${APPLE_STORE_ID}`).then(data => {
      RNExitApp.exitApp();
    })
  }
}

export const checkVerion = version => {
  return async (dispatch) => {
    try {
      const response = await request({
        url: 'checkVerion',
        method: 'GET',
      }, "");

      if (response.sussess) {
        if (response.version > Myversion) {
          Alert.alert("CircleIt Update", "A new version is available. Press ok to update.", [
            {
              text: "OK", onPress: () => {
                openStore();
              }
            }
          ], { cancelable: false })
        }
      }

    } catch (error) {
      console.log(error);
    }
  };
};


export const getUserByPhone = phone => {
  return dispatch => {
    axios
      .post(BASE_URL + 'profile/getUser', {
        phone: phone,
      })
      .then(response => {
        console.log(response.data);
        if (response.data.success) {
          dispatch({ type: types.USER_FETCHED_BY_PHONE, phone: phone });
        } else {
          console.log(response);
          alert(response.data.message);
        }
      })
      .catch(error => {
        alert(error);
        console.log(error);
      });
  };
};

export const getUserByEmail = email => {
  return dispatch => {
    dispatch({ type: types.LOADING_SIGN_UP });
    axios
      .post(BASE_URL + 'profile/getUser', {
        email: email,
      })
      .then(response => {
        if (response.data.success) {
          dispatch({
            type: types.USER_FETCHED_BY_EMAIL,
            user: response.data.user,
          });
        } else {
          dispatch({ type: types.ERROR_SIGN_UP, message: response.data.message });
          setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
        }
      })
      .catch(error => {
        dispatch({ type: types.ERROR_SIGN_UP, message: error });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
      });
  };
};

export const resetPassword = password => {
  return async (dispatch, store) => {
    dispatch({ type: types.LOADING_SIGN_UP });
    try {
      let response = request({
        url: 'forgotPassword/changePassword',
        method: "POST",
        data: {
          id: store().signUp.user.id,
          phone: store().signUp.user.phone,
          password: password,
        }
      }, "")
      if (response.success) {
        dispatch({ type: types.USER_PASSWORD_RESET });
        firebase.analytics().logEvent('Password_Changed', {
          userEmail: store().signUp.user.email,
          userTimeZone: store().signUp.user.timeZone,
          deviceType: Platform.OS
        })
      } else {
        dispatch({ type: types.ERROR_SIGN_UP, message: response.message });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
      }
    } catch (error) {
      dispatch({ type: types.ERROR_SIGN_UP, message: response.data.message });
      setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
    }
  };
};

export const resetCode = code => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_SIGN_UP });
    axios
      .post(BASE_URL + 'registration/verifyCode', {
        phone: store().signUp.user.phone,
        code: code,
      })
      .then(response => {
        if (response.data.success) {
          dispatch({
            type: types.RESET_CODE_VERIFIED,
            user: response.data.userData,
          });
        } else {
          dispatch({ type: types.ERROR_SIGN_UP, message: response.data.message });
          setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
        }
      })
      .catch(error => {
        dispatch({ type: types.ERROR_SIGN_UP, message: error });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
      });
  };
};

export const logout = () => {
  return async (dispatch, store) => {
    try {
      dispatch({ type: types.LOADING_SIGN_UP });
      let response = await request({
        url: 'registration/removeFcmToken',
        method: 'POST',
        data: {
          id: store().signUp.user.id
        },
      }, "")

      if (response.success) {
        AsyncStorage.clear()
        CometChat.logout().then(done => {
          setTimeout(() => {
            dispatch({ type: types.USER_LOGGED_OUT });
          }, 500);
        });
      }
    } catch (error) {
      console.log(error);
      alert(error)
    }
  };
};

export const resetPasswordReset = () => {
  return dispatch => {
    dispatch({ type: types.RESET_ACTION_PASSWORD_RESET });
  };
};
export const resetuserRegistered = () => {
  return dispatch => {
    dispatch({ type: types.RESET_USEREGISTERED });
  };
};

export const selectProfileImage = (image) => {
  return dispatch => {
    dispatch({ type: types.SELECT_PROFILE_IMAGE, image: image })
  }
}

export const verifyPhoneNumber = (phone, countryCode, email) => {
  console.log("Country Code ", countryCode)

  return dispatch => {
    dispatch({ type: types.LOADING_SIGN_UP });

    axios
      .post(BASE_URL + 'registration/verifyPhoneNumber', {
        phone: phone,
        email: email
      })
      .then(response => {
        console.log(response.data);
        if (response.data.success) {
          dispatch({ type: types.PHONE_VERIFIED, code: response.data.code, phone: phone, countryCode: countryCode, email: email });
        } else {
          dispatch({ type: types.ERROR_SIGN_UP, message: response.data.message })
          setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
        }
      })
      .catch(error => {
        dispatch({ type: types.ERROR_SIGN_UP, message: error.message })
        setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
      });
  };
};


export const verifyPhone = (phone, countryCode, email) => {
  console.log("Country Code ", countryCode)

  return dispatch => {
    dispatch({ type: types.LOADING_SIGN_UP });

    axios
      .post(BASE_URL + 'registration/verifyPhoneNumber', {
        phone: phone,
        email: ""
      })
      .then(response => {
        console.log(response.data);
        if (response.data.success) {
          dispatch({ type: types.PHONE_VERIFIED, code: response.data.code, phone: phone, countryCode: countryCode, email: email });
        } else {
          dispatch({ type: types.ERROR_SIGN_UP, message: response.data.message })
          setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
        }
      })
      .catch(error => {
        dispatch({ type: types.ERROR_SIGN_UP, message: error.message })
        setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
      });
  };
};

export const verifyEmail = (phone, countryCode, email) => {
  console.log("Country Code ", countryCode)

  return dispatch => {
    dispatch({ type: types.LOADING_SIGN_UP });

    axios
      .post(BASE_URL + 'registration/verifyPhoneNumber', {
        phone: "",
        email: email
      })
      .then(response => {
        console.log(response.data);
        if (response.data.success) {
          dispatch({ type: types.PHONE_VERIFIED, code: response.data.code, phone: phone, countryCode: countryCode, email: email });
        } else {
          dispatch({ type: types.ERROR_SIGN_UP, message: response.data.message })
          setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
        }
      })
      .catch(error => {
        dispatch({ type: types.ERROR_SIGN_UP, message: error.message })
        setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
      });
  };
};

export const resetCodeSent = () => {
  return dispatch => {
    dispatch({ type: types.RESET_CODE_SENT })
  }
}

export const addUserInfo = (firstName, lastName, birthDay, gender, cb) => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_SIGN_UP });
    let config = {
      headers: {
        'Content-Type': "multipart/form-data",
        'Accept': "application/json",
        Authorization: 'Bearer ' + store().signUp.user.token
      },
    };

    let user = store().signUp.user
    user.firstName = firstName
    user.lastName = lastName
    user.dob = birthDay
    user.gender = gender
    user.profileImage = store().signUp.profileImage.uri

    let formatedDate = moment(new Date()).format("YYYY-MM-DD HH:mm:00")

    let formData = new FormData()

    formData.append("id", store().signUp.user.id)
    formData.append("firstName", firstName)
    formData.append("lastName", lastName)
    formData.append("dob", birthDay)
    formData.append("gender", gender)
    formData.append("date_time", formatedDate)
    formData.append("image", store().signUp.profileImage)

    axios
      .post(
        BASE_URL + 'registration/addUserInfo',
        formData,
        config,
      )
      .then(response => {
        if (response.data.success) {
          AsyncStorage.setItem('LOGGED_IN', 'true');
          AsyncStorage.setItem('USER', JSON.stringify(user));
          cb()
          dispatch({ type: types.USER_UPDATED, user: user, phone: store().signUp.phone });
        } else {
          // alert(response.data.message);
        }
      })
      .catch(error => {
        alert(error);
      });
  };
};

export const resetUserUpdate = () => {
  return dispatch => {
    dispatch({ type: types.RESET_USER_UPDATE })
  }
}

export const selectContacts = (contacts) => {
  return dispatch => {
    dispatch({ type: types.SELECT_SIGNUP_CONTACT, contacts: contacts })
  }
}

export const setError = (message) => async (dispatch) => {
  dispatch({ type: types.ERROR_SIGN_UP, message: message })
  setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
}
