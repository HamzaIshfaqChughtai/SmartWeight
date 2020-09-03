import * as types from '../actionTypes';
import { BASE_URL } from '../../enviroments';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import request from '../../utls/apiHelper';

export const getNotifications = () => {
  return async (dispatch, store) => {

    let date = new Date().getDate().length > 1 ? new Date().getDate() : 0 + "" + new Date().getDate()
    let month = (new Date().getMonth() + 1).length > 1 ? (new Date().getMonth() + 1) : 0 + "" + (new Date().getMonth() + 1)
    let year = new Date().getFullYear()

    try {
      let user = await AsyncStorage.getItem('USER')
      let userParsed = await JSON.parse(user);

      const response = await request({
        url: 'notifications/getUserNotifications',
        method: 'POST',
        data: {
          id: userParsed.id,
          phone: userParsed.phone,
          date: year + "-" + month + "-" + date
        },
      }, store().signUp.user.token);

      console.log(response);
      dispatch({
        type: types.NOTIFICATION_FETCHED,
        notifications: response.notifications,
      });
    } catch (error) {
      console.log(error)
    }
  };
};

export const loadingNotifications = () => {
  return async dispatch => {
    dispatch({ type: types.LOADING_NOTIFICATION })
  }

}

export const specifyNotifications = cId => {
  return (dispatch, store) => {
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'notifications/getSpecificNotificationData',
        {
          id: store().signUp.user.id,
          phone: store().signUp.user.phone,
          cId: cId,
        },
        config,
      )
      .then(response => {
        if (response.data.success) {
          dispatch({
            type: types.NOTIFICATION_SPECIFIED,
            notifications: response.data.notifications,
          });
        } else {
          console.log(response);
          // alert(response.data.message);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const deleteNotifications = id => {
  return async (dispatch, store) => {
    try {
      const response = await request({
        url: 'notifications/deleteNotification',
        method: 'POST',
        data: {
          id: store().signUp.user.id,
          notificationId: id,
        },
      }, store().signUp.user.token);
      if (response.success) {
        dispatch({
          type: types.NOTIFICATION_REMOVED,
          notifications: store().notification.notifications.filter(item => item.notification_id != id),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateNotifications = () => {
  return async (dispatch, store) => {
    try {
      await request({
        url: 'notifications/updateNotification',
        method: 'POST',
        data: { id: store().signUp.user.id },
      }, store().signUp.user.token);

      let user = store().signUp.user
      user.new_notification = 0
      dispatch({ type: types.USER_FETCHED, user: user })

    } catch (error) {
      console.log(error);
    }
  };
};


export const updateNotificationById = (id) => {
  return async (dispatch, store) => {
    try {
      await request({
        url: 'notifications/updateNotificationById',
        method: 'POST',
        data: { id: store().signUp.user.id, notificationId: id },
      }, store().signUp.user.token);

      let index = store().notification.notifications.findIndex(notification => notification.notification_id == id)
      let notifications = store().notification.notifications
      notifications[index].notification_status = "old"
      dispatch({ type: types.NOTIFICATION_UPDATED, notifications: notifications })

    } catch (error) {
      console.log("updateNotificationById_Error", error.message);
    }
  };
};

export const updateUserNotificationIcon = () => {
  return async (dispatch, store) => {
    let user = store().signUp.user
    user.new_notification = 1
    dispatch({ type: types.USER_FETCHED, user: user })
  };
}

export const updateUserNotificationMessageIcon = () => {
  return async (dispatch, store) => {
    let user = store().signUp.user
    user.new_notification_chat = 1
    dispatch({ type: types.USER_FETCHED, user: user })
  };
}

export const updateNotificationCount = () => {
  return async (dispatch, store) => {
    try {
      const response = await request({
        url: 'notifications/updateNotificationCount',
        method: 'POST',
        data: {
          id: store().signUp.user.id,
        },
      }, "");

      console.log(response);

    } catch (error) {
      console.log(error)
    }
  }
}
