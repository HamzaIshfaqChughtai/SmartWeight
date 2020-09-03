import * as types from '../actionTypes';
import { BASE_URL } from '../../enviroments';
import axios from 'axios';
import request from '../../utls/apiHelper';

export const getContacts = contacts => {
  return async (dispatch, store) => {
    try {
      const response = await request({
        url: 'contacts/getContacts',
        method: 'POST',
        data: {
          id: store().signUp.user.id,
          contacts: contacts
        },
      }, store().signUp.user.token);

      if (response.success) {
        dispatch({
          type: types.CONTACTS_FETCHED,
          contacts: response.contacts,
        });
      } else {
        dispatch({
          type: types.ERROR_CONTACTS,
          message: response.message,
        });
      }
    } catch (error) {
      dispatch({ type: types.ERROR_CONTACTS, message: error });
    }
  };
};

export const inviteContacts = contacts => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_CONTACTS });
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token }
    };
    axios
      .post(
        BASE_URL + 'contacts/sendInvite',
        {
          id: store().signUp.user.id,
          fullName: store().signUp.user.firstName + ' ' + store().signUp.user.lastName,
          contacts: contacts,
        },
        config,
      )
      .then(response => {
        if (response.data.success) {

          dispatch({ type: types.CONTACTS_INVITED });

          setTimeout(() => {
            dispatch(resetContactInvited())
          }, 1000);
        } else {
          dispatch({
            type: types.ERROR_CONTACTS,
            message: response.data.message,
          });
        }
      })
      .catch(error => {
        dispatch({ type: types.ERROR_CONTACTS, message: error });
      });
  };
};



export const deleteUser = (invitedByData, invitedToData) => {
  return async (dispatch, store) => {
    try {
      const response = await request({
        url: 'contacts/deleteContact',
        method: 'POST',
        data: {
          id: store().signUp.user.id,
          invitedBy: invitedByData,
          invitedTo: invitedToData
        },
      }, store().signUp.user.token);

      if (response.success) {
        dispatch(getInvitedContacts())
      }
    } catch (error) {
      dispatch({ type: types.ERROR_CONTACTS, message: error });
    }
  };
};


export const resetContactInvited = () => {
  return dispatch => {
    dispatch({ type: types.RESET_ACTION_CONTACT_INVITED });
  };
};

export const resetContactAlert = () => {
  return dispatch => {
    dispatch({ type: types.RESET_ERROR_CONTACTS });
  };
};

export const getInvitedContacts = () => {
  return async (dispatch, store) => {
    try {
      const response = await request({
        url: 'contacts/getInvitedContacts',
        method: 'POST',
        data: {
          id: store().signUp.user.id
        },
      }, store().signUp.user.token);

      let user = await response.contacts.filter(user => user.registered && user.status == "accepted").map(user => {
        return {
          uid: JSON.stringify(user.id),
          name: user.name,
          firstName: user.firstName,
          lastName: user.lastName,
          status: "",
          avatar: user.image
        }
      })

      dispatch({ type: types.FETCHED_INVITED_CONTACTS, contacts: response.contacts, user: user });

    } catch (error) {
      console.log(error);
    }
  };
};

export const addRecents = (clickedTo, type) => {
  return async (dispatch, store) => {
    try {
      const response = await request({
        url: 'contacts/addRecents',
        method: 'POST',
        data: {
          id: store().signUp.user.id,
          clickedTo, type
        },
      }, store().signUp.user.token);

      if (response.success) {
        dispatch(getRecents(type))
      }

    } catch (error) {
      console.log(error);
    }
  };
};

export const getRecents = (type) => {
  return async (dispatch, store) => {
    try {
      const response = await request({
        url: 'contacts/getRecents',
        method: 'POST',
        data: {
          id: store().signUp.user.id,
          type
        },
      }, store().signUp.user.token);

      if (type == "user") {

        let recents = []
        recents = await store().contacts.invitedContacts.filter(invitedUser => response.recents.some(user => user.id == invitedUser.id));

        recents.sort(function (a, b) {
          return response.recents.findIndex((item) => item.id == a.id) - response.recents.findIndex((item) => item.id == b.id);
        });

        dispatch({
          type: types.FETCHED_RECENT_CONTACTS,
          recentContacts: recents
        })

      } else {
        dispatch({
          type: types.FETCHED_RECENT_CIRCLES,
          recentCircles: response.recents
        })
      }


    } catch (error) {
      console.log(error);
    }
  };
};
