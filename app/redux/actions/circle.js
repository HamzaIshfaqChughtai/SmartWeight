import * as types from '../actionTypes';
import { BASE_URL } from '../../enviroments';
import axios from 'axios';
import request from '../../utls/apiHelper';
import { Toast } from 'native-base';

export const createCircle = (circleName, contacts) => {
  return async (dispatch, store) => {
    dispatch({ type: types.LOADING_CIRCLE })

    try {
      const response = await request({
        url: 'circle/createCircle',
        method: 'POST',
        data: {
          id: store().signUp.user.id,
          adminName: store().signUp.user.firstName + ' ' + store().signUp.user.lastName,
          circleName: circleName,
          contacts: contacts,
          adminPhone: store().signUp.user.phone,
        },
      }, store().signUp.user.token);

      if (response.success) {
        dispatch({
          type: types.CIRCLE_CREATED,
          circleId: response.circleId,
        });
        dispatch(getCircles())
      } else {
        console.log(response);
        dispatch({ type: types.ERROR_CIRCLE, errorMessage: response.message })
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: types.ERROR_CIRCLE, errorMessage: error })
    }
  };
};

export const closeContacts = () => {
  // alert("dddd")
  return dispatch => {
    dispatch({ type: types.CLOSE_CONTACT });
  };
};

export const recievedJourney = () => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_JOURNEY })

    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'circle/get_circle_received_journeys',
        {
          id: store().signUp.user.id,
          circle_id: store().circle.circle.cId
        },
        config,
      )
      .then(response => {

        console.log(response.data);
        if (response.data.success) {
          // alert(response.data.circleId);
          getCircles()
          dispatch({ type: types.DELIVERED_FETCHED, delivered: response.data.received_journeys })
        } else {
          console.log(response);
          dispatch({ type: types.ERROR_JOURNEY, errorMessage: response.data.message })
        }
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: types.ERROR_JOURNEY, errorMessage: error })
      });
  };
};

export const circleDeliveredJourney = () => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_JOURNEY })

    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'circle/get_circle_delivered_journeys',
        {
          id: store().signUp.user.id,
          circle_id: store().circle.circle.cId
        },
        config,
      )
      .then(response => {
        console.log(response.data);
        if (response.data.success) {
          // alert(response.data.circleId);
          dispatch({ type: types.DELIVERED_FETCHED, delivered: response.data.delivered_journeys })
        } else {
          console.log(response);
          dispatch({ type: types.ERROR_JOURNEY, errorMessage: response.data.message })
        }
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: types.ERROR_JOURNEY, errorMessage: error })
      });
  };
};

export const getCircleSchedules = () => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_JOURNEY })

    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };

    axios.post(BASE_URL + "circle/get_circle_scheduled_journeys", {
      id: store().signUp.user.id,
      circle_id: store().circle.circle.cId
    }, config).then(response => {
      console.log("Scheduled: ", response.data)
      if (response.data.success) {
        dispatch({ type: types.SCHEDULED_FETCHED, scheduled: response.data.scheduled_journeys })
      } else {
        dispatch({ type: types.ERROR_JOURNEY, errorMessage: response.data.message })
      }
    }).catch(error => {
      dispatch({ type: types.ERROR_JOURNEY, errorMessage: error })
    })
  }
}

export const getCircleDrafts = () => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_JOURNEY })

    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };

    axios.post(BASE_URL + "circle/get_circle_darft_journeys", {
      id: store().signUp.user.id,
      circle_id: store().circle.circle.cId
    }, config).then(response => {
      console.log("Journey: ", response.data)
      if (response.data.success) {
        dispatch({ type: types.DRAFTS_FETCHED, drafts: response.data.draft_journeys })
      } else {
        dispatch({ type: types.ERROR_JOURNEY, errorMessage: response.data.message })
      }
    }).catch(error => {
      dispatch({ type: types.ERROR_JOURNEY, errorMessage: error })
    })
  }
}

export const acceptInvitation = (status, cId) => {
  return (dispatch, store) => {
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'circle/acceptCircleInvitation',
        {
          id: store().signUp.user.id,
          phone: store().signUp.user.phone,
          status: status,
          cId: cId
        },
        config,
      )
      .then(response => {
        if (response.data.success) {
          dispatch({ type: types.CIRCLE_CREATED });
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

export const acceptInvitationOneToOne = (status, cId) => {
  console.log(cId)
  return (dispatch, store) => {
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'circle/acceptOnetoOneCircleInvitation',
        {
          id: store().signUp.user.id,
          phone: store().signUp.user.phone,
          status: status,
          cId: cId
        },
        config,
      )
      .then(response => {
        if (response.data.success) {
          console.log("RESPONSE : ", response.data)
          // dispatch({ type: types.CIRCLE_CREATED });
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

export const updateImage = (image) => {
  return (dispatch, store) => {


    let formData = new FormData();
    formData.append('image', image);
    formData.append('id', store().signUp.user.id)
    formData.append("cId", store().circle.circle.cId)


    let config = {
      headers: {
        'Content-Type': "multipart/form-data",
        'Accept': "application/json",
        'Authorization': 'Bearer ' + store().signUp.user.token
      },
    };

    axios.post(BASE_URL + 'circle/updateCircleImage', formData, config).then((response) => {

      if (response.data.success) {
        console.log('value change', image.uri)

        let circle = {
          cId: store().circle.circle.cId,
          circleName: store().circle.circle.circleName,
          circleImage: image.uri,
          adminId: store().circle.circle.adminId
        }
        let updatedCircles = []
        store().circle.circles.map((item, index) => {
          if (item.circleId == circle.cId) {
            updatedCircles.push(circle)
          }
          else {
            updatedCircles.push(item)
          }
        })
        dispatch({ type: types.CIRCLE_UPDATED, circle: circle, circles: updatedCircles })
      } else {
        console.log(responseJson);
        dispatch({ type: types.ERROR_CIRCLE, message: response.data.message });
      }



    }).catch(error => {
      console.log(error);
      dispatch({ type: types.ERROR_CIRCLE, message: error });
    });
  }
};



export const getCircles = () => {
  return async (dispatch, store) => {
    try {
      const response = await request({
        url: 'circle/getUserCircles',
        method: 'POST',
        data: { id: store().signUp.user.id, phone: store().signUp.user.phone, },
      }, store().signUp.user.token);

      if (response.success) {
        console.log('Circle Response');
        dispatch({
          type: types.CIRCLES_FETCHED,
          circles: response.userCircles,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCircleData = cId => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_CIRCLE })

    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'circle/getCircleData',
        {
          id: store().signUp.user.id,
          cId: cId,
        },
        config,
      )
      .then(response => {
        if (response.data.success) {
          dispatch({
            type: types.CIRCLE_DATA_FETCHED,
            circle: response.data.circleData,
          });
        }
      })
      .catch(error => {
        console.log('getCircleData', error);
      });
  };
};

export const getCircleMembers = (cId) => {
  return async (dispatch, store) => {

    try {
      let response = await request({
        url: 'circle/getCircleMembers',
        method: 'POST',
        data: {
          id: store().signUp.user.id,
          cId: cId,
        }
      }, store().signUp.user.token)

      if (response.success) {
        dispatch({
          type: types.CIRCLE_MEMBERS_FETCHED,
          members: response.users,
        });
      } else {
        dispatch({
          type: types.CIRCLE_MEMBERS_FETCHED,
          members: [],
        });
      }

    } catch (error) {
      console.log(error);
      dispatch({
        type: types.CIRCLE_MEMBERS_FETCHED,
        members: [],
      });
    }
  };
};

export const addCircleMembers = (contacts, circleName) => {
  return (dispatch, store) => {

    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'circle/addCircleMembers',
        {
          id: store().signUp.user.id,
          cId: store().circle.circle.cId,
          contacts: contacts,
          adminName:
            store().signUp.user.firstName + ' ' + store().signUp.user.lastName,
          circleName: circleName,
          // adminPhone: store().signUp.user.phone,
        },
        config,
      )
      .then(response => {
        if (response.data.success) {

          dispatch({
            type: types.CIRCLE_MEMBERS_ADDED,
          });
          dispatch(getCircleMembers(store().circle.circle.cId))
        } else {
          console.log(response);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const resetCircleCreated = () => {
  return dispatch => {
    dispatch({ type: types.RESET_ACTION_CIRCLE_CREATED });
  };
};

export const clearCircleData = () => {
  return dispatch => {
    dispatch({ type: types.CLEAR_CIRCLE_DATA });
  };
};

export const clearCircleMember = () => {
  return dispatch => {
    dispatch({ type: types.CLEAR_CIRCLE_MEMBER });
  };
};

export const resetMemberAdded = () => {
  return dispatch => {
    dispatch({ type: types.RESET_CIRCLE_MEMBER_ADDED });
  };
};

export const UpdateCircleData = (circleName) => {
  return async (dispatch, store) => {
    try {
      const response = await request({
        url: 'circle/updateCircle',
        method: 'POST',
        data: {
          id: store().signUp.user.id,
          cId: store().circle.circle.cId,
          circleName: circleName,
        }
      }, store().signUp.user.token)
      if (response.success) {
        let index = store().circle.circles.findIndex(item => item.circleId == store().circle.circle.cId)
        let updatedCircle = store().circle.circles[index]
        updatedCircle.circleName = circleName

        dispatch({ type: types.CIRCLE_UPDATED, circle: updatedCircle, })
      }
    } catch (error) {
      Toast.show({
        text: error.message,
        type: 'danger'
      })
      console.log(error);
    }
  };
};

export const deleteCircleMembers = contact => {
  return (dispatch, store) => {
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };

    axios
      .post(
        BASE_URL + 'circle/deleteCircleUser',
        {
          id: store().signUp.user.id,
          cId: store().circle.circle.cId,
          uId: contact.uId
        },
        config,
      )
      .then(response => {
        if (response.data.success) {
          let members = store().circle.members.filter((item) => item.uId != contact.uId)

          dispatch({
            type: types.CIRCLE_MEMBERS_FETCHED,
            members: members,
          });

          Toast.show({
            text: 'Member Deleted',
            duration: 4000,
            type: 'danger'
          })

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

export const deleteCircle = (cId) => {
  return (dispatch, store) => {
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };

    axios
      .post(
        BASE_URL + 'circle/deleteCircle',
        {
          id: store().signUp.user.id,
          circleId: cId,
        },
        config,
      )
      .then(response => {
        if (response.data.success) {
          console.log(response);
          dispatch(getCircles())

        } else {
          console.log(response);
          alert(response.data.message);
        }
      })
      .catch(error => {
        console.log('deleteCircle', error.message);
      });
  };
};




export const MakeGroupAdminCircle = (uId, cId, ) => {
  return (dispatch, store) => {
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };

    axios
      .post(
        BASE_URL + 'circle/delegate',
        {
          id: store().signUp.user.id,
          userId: uId,
          circleId: store().circle.circle.cId,
        },
        config,
      )
      .then(response => {
        if (response.data.success) {
          dispatch({
            type: types.CIRCLE_MEMBERS_ADDED,
          });
          dispatch(getCircleMembers(store().circle.circle.cId))

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









export const resetCircleError = () => {
  return dispatch => {
    dispatch({ type: types.RESET_ERROR_CIRCLE })
  }
}
