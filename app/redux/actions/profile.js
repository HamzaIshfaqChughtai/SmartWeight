import * as types from '../actionTypes';
import { BASE_URL } from '../../enviroments';
import axios from 'axios';
import firebase from 'react-native-firebase';
import { Platform, Alert } from 'react-native';
import { convertTimeStamp } from '../../utls/timeConversion'
import request from '../../utls/apiHelper';
firebase.analytics().setAnalyticsCollectionEnabled(true);

export const setTimeInContacts = () => {
  return (dispatch, store) => {
    if (store().profile.setTimeInContacts === '') {
      dispatch({ type: 'setTimeInContacts', payload: new Date().getTime() })
    }
  }
};

export const resetTimeInContacts = () => {
  return (dispatch, store) => {
    if (store().profile.setTimeInContacts !== '') {
      dispatch({ type: 'resetTimeInContacts' })
    }
  }
};

export const getTimeInContacts = () => {
  return (dispatch, store) => {
    if (store().profile.setTimeInContacts !== '') {
      let time = store().profile.setTimeInContacts;
      let t = new Date().getTime();
      let diff = t - time;
      diff = convertTimeStamp(diff);
      firebase.analytics().logEvent('Time_Spent_In_Contacts', {
        timestamp: diff,
        userEmail: store().signUp.user.email,
        userTimeZone: store().signUp.user.timeZone,
        deviceType: Platform.OS
      })
      dispatch({ type: 'resetTimeInContacts' })
    }
  }
};

export const setGalleryTime = () => {
  return (dispatch, store) => {
    if (store().profile.setGalleryTime === '') {
      dispatch({ type: 'setGalleryTime', payload: new Date().getTime() })
    }
  }
};

export const getTimeInGallery = () => {
  return (dispatch, store) => {
    if (store().profile.setGalleryTime !== '') {
      let time = store().profile.setGalleryTime;
      let t = new Date().getTime();
      let diff = t - time;
      diff = convertTimeStamp(diff);
      firebase.analytics().logEvent('Time_Spent_In_Gallery', {
        timestamp: diff,
        userEmail: store().signUp.user.email,
        userTimeZone: store().signUp.user.timeZone,
        deviceType: Platform.OS
      })
      dispatch({ type: 'resetTimeInGallery' })
    }
  }
}

export const resetTimeInGallery = () => {
  return (dispatch, store) => {
    if (store().profile.setGalleryTime !== '') {
      dispatch({ type: 'resetTimeInGallery' })
    }
  }
}

export const updateProfile = (
  bio,
  dob,
  mailingAddress,
  cardNo,
  firstName,
  lastName, StreetONE,
  StreetTWO,
  State,
  City,
  Country,
  Apartment,
  Zipcode,
  cardExpiry,
  cvc,
  cardExpiryMonth
) => {
  return (dispatch, store) => {

    fetch(BASE_URL + 'profile/updateProfile', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + store().signUp.user.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bio: bio,
        dob: dob,
        mailingAddress: mailingAddress,
        cardNo: cardNo,
        id: store().signUp.user.id,
        firstName: firstName,
        lastName: lastName,
        streetOne: StreetONE,
        streetTwo: StreetTWO,
        state: State,
        city: City,
        country: Country,
        plot: Apartment,
        zipcode: Zipcode,
        cardExpiry: cardExpiry,
        cvc: cvc,
        cardExpiryMonth: cardExpiryMonth,
      })

    }).then((response) => {
      console.log("response : ", response);
      return response.json()
    })
      .then(responseJson => {
        console.log("response ", responseJson);

        if (responseJson.success) {
          dispatch({ type: types.PROFILE_UPDATED, user: responseJson.user });
          firebase.analytics().logEvent('Name_Edited', {
            userId: store().signUp.user.id,
            userEmail: store().signUp.user.email,
            userTimeZone: store().signUp.user.timeZone,
            deviceType: Platform.OS
          });
        } else {
          console.log(responseJson);
          dispatch({ type: types.ERROR_PROFILE, message: responseJson.message });
        }
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: types.ERROR_PROFILE, message: error });
      }).done();
  };

};

export const deleteImage = () => {
  return async (dispatch, store) => {
    try {
      let response = request({
        url: 'profile/deleteProfileImage',
        method: "POST",
        data: { id: store().signUp.user.id }
      }, store().signUp.user.token)

      if (response.success) {
        dispatch({ type: types.DELETE_PROFILE_IMAGE, user: response.user });
      } else {
        dispatch({ type: types.ERROR_PROFILE, message: response.message });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateImage = (image) => {
  return async (dispatch, store) => {

    let formData = new FormData();
    formData.append('image', image);
    formData.append('id', store().signUp.user.id)


    let config = {
      headers: {
        'Content-Type': "multipart/form-data",
        'Accept': "application/json",
        'Authorization': 'Bearer ' + store().signUp.user.token
      },
    };

    try {
      let response = await axios.post(BASE_URL + 'profile/updateImage', formData, config)
      if (response.data.success) {
        dispatch({ type: types.PROFILE_UPDATED, user: response.data.user });
        firebase.analytics().logEvent('Profile_Picture_Changed', {
          userId: store().signUp.user.id,
          userEmail: store().signUp.user.email,
          userTimeZone: store().signUp.user.timeZone,
          deviceType: Platform.OS
        })
      }
    } catch (error) {
      console.log(responseJson);
      dispatch({ type: types.ERROR_PROFILE, message: response.data.message });
    }
  }
};


export const coverupdateImage = (image) => {
  return async (dispatch, store) => {

    let formData = new FormData();
    formData.append('image', image);
    formData.append('id', store().signUp.user.id)

    let config = {
      headers: {
        'Content-Type': "multipart/form-data",
        'Accept': "application/json",
        'Authorization': 'Bearer ' + store().signUp.user.token
      },
    };

    try {
      let response = await axios.post(BASE_URL + 'profile/addCoverPhoto', formData, config)
      if (response.data.success) {
        dispatch({ type: types.PROFILE_UPDATED, user: response.data.user });

      }
    } catch (error) {
      console.log(responseJson);
      dispatch({ type: types.ERROR_PROFILE, message: response.data.message });
    }
  }
};


export const coverdeleteImage = () => {
  return async (dispatch, store) => {
    try {
      let response = request({
        url: 'profile/deleteCoverPhoto',
        method: "POST",
        data: { id: store().signUp.user.id }
      }, store().signUp.user.token)

      if (response.success) {
        dispatch({ type: types.DELETE_PROFILE_IMAGE, user: response.user });
      } else {
        dispatch({ type: types.ERROR_PROFILE, message: response.message });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
      }
    } catch (error) {
      console.log(error)
    }
  }
}



export const updatePhone = (newPhone) => {
  return async (dispatch, store) => {
    dispatch({ type: types.LOADING_PROFILE });

    fetch(BASE_URL + 'profile/changeNumber', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        'Authorization': 'Bearer ' + store().signUp.user.token
      },
      body: JSON.stringify({
        id: store().signUp.user.id,
        phone: store().signUp.user.phone,
        newPhone: newPhone,
      })
    }).then((response) => {
      console.log("response : ", response);
      return response.json()
    })
      .then((responseJson) => {
        console.log(responseJson)

        if (responseJson.success) {
          dispatch({ type: types.PHONE_UPDATE_CODE_SENT, phone: newPhone });
          firebase.analytics().logEvent('Number_Edited', {
            userId: store().signUp.user.id,
            userEmail: store().signUp.user.email,
            userTimeZone: store().signUp.user.timeZone,
            deviceType: Platform.OS
          });
        } else {
          dispatch({ type: types.ERROR_PROFILE, message: responseJson.message });
          setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
        }
      }).catch(error => {
        console.log(error)
        dispatch({ type: types.ERROR_PROFILE, message: error.response });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
        alert("network", error)
      }).done();

    // console.log(config, store().signUp.user.id, store().signUp.user.phone, newPhone)
    // axios
    //   .post(
    //     BASE_URL + 'profile/changeNumber',
    //     {
    //       id: store().signUp.user.id,
    //       phone: store().signUp.user.phone,
    //       newPhone: newPhone,
    //     },
    //     config,
    //   )
    //   .then(response => {
    //     console.log(response.data);

    //     if (response.data.success) {
    //       dispatch({ type: types.PHONE_UPDATE_CODE_SENT, phone: newPhone });
    //     } else {

    //       dispatch({ type: types.ERROR_PROFILE, message: response.data.message });
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     dispatch({ type: types.ERROR_PROFILE, message: error.response });
    //     alert("network", error)
    //   });
  };
};

export const verifyNewPhone = (code) => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_PROFILE });

    fetch(BASE_URL + 'profile/verifyNewPhone', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        'Authorization': 'Bearer ' + store().signUp.user.token
      },
      body: JSON.stringify({
        id: store().signUp.user.id,
        phone: store().profile.phone,
        code: code,
      })
    }).then((response) => {
      console.log("response : ", response);
      return response.json()
    })
      .then((responseJson) => {
        console.log(responseJson)

        if (responseJson.success) {
          dispatch({ type: types.PHONE_UPDATED, phone: store().profile.phone });
        } else {
          dispatch({ type: types.ERROR_PROFILE, message: responseJson.message });
          setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
        }
      }).catch(error => {
        console.log(error)
        dispatch({ type: types.ERROR_PROFILE, message: error.response });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
        // alert("network", error)
      }).done();

  };
};


export const sendCodeToPhone = () => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_PROFILE });

    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'profile/sendCode',
        {
          id: store().signUp.user.id,
          phone: store().signUp.user.phone,
        },
        config,
      )
      .then(response => {
        console.log(response.data);

        if (response.data.success) {
          dispatch({ type: types.RESET_CODE_SENT });
        } else {
          dispatch({ type: types.ERROR_PROFILE, message: response.data.message });
          setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
        }
      })
      .catch(error => {
        dispatch({ type: types.ERROR_PROFILE, message: error });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
      });
  };
};

export const sendCodeToEmail = () => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_PROFILE });

    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'profile/sendCodeEmail',
        {
          id: store().signUp.user.id,
          email: store().signUp.user.email,
        },
        config,
      )
      .then(response => {
        console.log(response.data);

        if (response.data.success) {
          dispatch({ type: types.RESET_CODE_SENT });
        } else {
          dispatch({ type: types.ERROR_PROFILE, message: response.data.message });
          setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
        }
      })
      .catch(error => {
        dispatch({ type: types.ERROR_PROFILE, message: error });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
      });
  };
};

export const resetUpdatePhone = () => {
  return (dispatch) => {
    dispatch({ type: types.RESET_PHONE_UPDATE_CODE })
  }
}

export const resetProfileError = () => {
  return (dispatch) => {
    dispatch({ type: types.RESET_ERROR_PROFILE })
  }
}

export const resetPhoneUpdated = () => {
  return (dispatch) => {
    dispatch({ type: types.RESET_PHONE_UPDATED })
  }
}

export const updateFcmToken = (fcmToken) => {
  return async (dispatch, store) => {
    try {
      const response = await request({
        url: 'profile/updateFcmtoken',
        method: 'POST',
        data: { id: store().signUp.user.id, fcmToken: fcmToken, },
      }, store().signUp.user.token);
    } catch (error) {
      console.log("updateFcmToken", error);
    }
  };
}

export const updateTimeZone = (timeZone) => {
  return async (dispatch, store) => {
    try {
      const response = await request({
        url: 'profile/updateTimeZone',
        method: 'POST',
        data: { id: store().signUp.user.id, timeZone: timeZone },
      }, store().signUp.user.token);
    } catch (error) {
      console.log("updateTimeZone error", error);
    }
  };
}

export const updateDob = (dob) => {
  return async (dispatch, store) => {

    try {
      let response = await request({
        url: 'profile/updateUserDob',
        method: "POST",
        data: {
          dob: dob,
          id: store().signUp.user.id
        }
      }, store().signUp.user.token)

      if (response.success) {
        dispatch({ type: types.PROFILE_UPDATED, user: response.user });
        firebase.analytics().logEvent('Dob_Edited', {
          userId: store().signUp.user.id,
          userEmail: store().signUp.user.email,
          userTimeZone: store().signUp.user.timeZone,
          deviceType: Platform.OS
        });
      } else {
        console.log(response);
        dispatch({ type: types.ERROR_PROFILE, message: response.message });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: types.ERROR_PROFILE, message: response.message });
    }
  };
};

export const updateNotifiation = (pushNotification) => async (dispatch, store) => {
  try {
    let response = await request({
      url: 'profile/updateNotification',
      method: 'POST',
      data: {
        id: store().signUp.user.id,
        pushNotification: pushNotification ? 1 : 0
      }
    }, store().signUp.user.token)

    if (response.success) {
      let user = {
        ...store().signUp.user,
        all_notifications: pushNotification ? 1 : 0,
        one_to_one_invite: pushNotification ? 1 : 0,
        circle_group_invite: pushNotification ? 1 : 0,
        new_card_received: pushNotification ? 1 : 0,
        chat_message: pushNotification ? 1 : 0
      }

      dispatch({ type: types.PROFILE_UPDATED, user: user })
    } else {
      Alert.alert("Error", response.message)
    }
  } catch (error) {
    Alert.alert("Error", error.message)
  }
}

export const updateSubNotifiation = (one_to_one_invite, circle_group_invite, new_card_received, chat_message) => async (dispatch, store) => {
  try {
    let response = await request({
      url: 'profile/updateSubNotification',
      method: 'POST',
      data: {
        id: store().signUp.user.id,
        one_to_one_invite: one_to_one_invite ? 1 : 0,
        circle_group_invite: circle_group_invite ? 1 : 0,
        new_card_received: new_card_received ? 1 : 0,
        chat_message: chat_message ? 1 : 0
      }
    }, store().signUp.user.token)

    if (response.success) {
      let user = {
        ...store().signUp.user,
        one_to_one_invite: one_to_one_invite ? 1 : 0,
        circle_group_invite: circle_group_invite ? 1 : 0,
        new_card_received: new_card_received ? 1 : 0,
        chat_message: chat_message ? 1 : 0
      }

      dispatch({ type: types.PROFILE_UPDATED, user: user })
    } else {
      Alert.alert("Error", response.message)
    }
  } catch (error) {
    Alert.alert("Error", error.message)
  }
}