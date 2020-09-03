import * as types from '../actionTypes';
import { BASE_URL } from '../../enviroments';
import axios from 'axios';
import firebase from 'react-native-firebase';
import { Platform } from 'react-native';
import { convertTimeStamp } from '../../utls/timeConversion';
import request from '../../utls/apiHelper';
firebase.analytics().setAnalyticsCollectionEnabled(true)

export const setMessageTypingTime = () => {
    return (dispatch, store) => {
        if (store().journey.setMessageTypingTime === '') {
            dispatch({ type: 'setMessageTypingTime', payload: new Date().getTime() });
        }
    }
};

export const resetMessageTypingTime = () => {
    return (dispatch, store) => {
        if (store().journey.setMessageTypingTime !== '') {
            dispatch({ type: 'resetMessageTypingTime' });
        }
    }
};

export const getMessageTypingTime = () => {
    return (dispatch, store) => {
        if (store().journey.setMessageTypingTime !== '') {
            let time = store().journey.setMessageTypingTime;
            let t = new Date().getTime();
            let diff = t - time;
            diff = convertTimeStamp(diff);
            firebase.analytics().logEvent('Time_Taken_To_Type_Message', {
                timestamp: diff,
                userEmail: store().signUp.user.email,
                userTimeZone: store().signUp.user.timeZone,
                deviceType: Platform.OS
            });
            dispatch({ type: 'resetMessageTypingTime' });
        }
    }
};

export const currentTime = () => {
    return (dispatch, store) => {
        if (store().journey.time === '') {
            dispatch({ type: 'time', payload: new Date().getTime() });
        }
    }
};

export const resetCurrentTime = () => {
    return (dispatch, store) => {
        if (store().journey.time !== '') {
            dispatch({ type: 'resetCurrentTime' })
        }
    }
};

export const cardSelectionTime = () => {
    return (dispatch, store) => {
        if (store().journey.cardSelectionTime === '') {
            dispatch({ type: 'cardTime', payload: new Date().getTime() })
        }
    }
};

export const resetCardSelectionTime = () => {
    return (dispatch) => {
        dispatch({ type: 'resetCardSelectionTime' })
    }
};

export const messageOpenTime = () => {
    return (dispatch, store) => {
        if (store().journey.messageOpenTime === '') {
            dispatch({ type: 'messageOpenTime', payload: new Date().getTime() })
        }
    }
};

export const resetMessageOpenTime = () => {
    return (dispatch, store) => {
        if (store().journey.messageOpenTime !== '') {
            dispatch({ type: 'resetMessageOpenTime' })
        }
    }
};

export const addingMediaTime = () => {
    return (dispatch, store) => {
        if (store().journey.addingMediaTime === '') {
            dispatch({ type: 'addingMediaTime', payload: new Date().getTime() })
        }
    }
};

export const setMediaTime = () => {
    return (dispatch, store) => {
        if (store().journey.addingMediaTime !== '') {
            let time = store().journey.addingMediaTime;
            let t = new Date().getTime();
            let diff = t - time;
            diff = convertTimeStamp(diff);
            firebase.analytics().logEvent('Time_Taken_To_Add_Media', {
                timestamp: diff,
                userEmail: store().signUp.user.email,
                userTimeZone: store().signUp.user.timeZone,
                deviceType: Platform.OS
            });
            dispatch({ type: 'resetMediaTime' });
        }
    }
};

export const resetMediaTime = () => {
    return (dispatch, store) => {
        if (store().journey.addingMediaTime !== '') {
            dispatch({ type: 'resetMediaTime' });
        }
    }
};

export const selectCircle = (circle, id) => {
    return (dispatch) => {
        if (typeof circle.circleName != 'undefined') {
            dispatch({
                type: types.SELECT_CIRCLE,
                name: circle.circleName ? circle.circleName : circle.firstName + " " + circle.lastName, image: circle.userImages ? circle.userImages : circle.profileImage, recieverId: id, receiverType: circle.circle_type == 'one-one' ? 'individual' : 'circle', circleType: circle.circle_type
            })
        }
        else {
            dispatch({ type: types.SELECT_CIRCLE, name: circle.name, image: circle.image, recieverId: id, receiverType: 'individual', circleType: 'one-one' })
        }
    }
}


export const selectVideo = (video) => {
    return (dispatch) => {
        dispatch({ type: types.SELECT_VIDEO, video: video })
    }
}

export const audiourl = (url) => {
    return (dispatch) => {
        dispatch({ type: types.AUDIO_URL, url: url })
    }
}

export const selectImage = (image, selected) => {
    return (dispatch) => {
        dispatch({ type: types.SELECT_IMAGE, image: image, selected: selected })
    }
}

export const selectMessage = (message) => {
    return (dispatch) => {
        dispatch({ type: types.SELECT_MESSAGE, message: message })
    }
}

export const selectDateAndOccassion = (date) => {
    return (dispatch, store) => {
        dispatch({ type: types.SELECT_DATE_AND_OCCASSION, date: date, occassion: store().journey.occassion })
    }
}

export const selectOccasion = (occassion) => {
    return (dispatch, store) => {
        dispatch({ type: types.SELECT_DATE_AND_OCCASSION, date: store().journey.date, occassion: occassion })
    }
}


export const selectType = (type) => {
    return (dispatch) => {
        dispatch({ type: types.SELECT_ENVELOPE_TYPE, envelopeType: type })
    }
}

export const clearJourney = () => {
    return (dispatch) => {
        dispatch({ type: types.RESET_JOURNEY_MESSAGE })
    }
}

export const filterJourney = (journeys) => {
    return dispatch => {
        dispatch({ type: types.JOURNEY_FILTERED, journeys: journeys })
    }
}

export const getJourney = () => {
    return (dispatch, store) => {
        dispatch({ type: types.LOADING_JOURNEY })

        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios.post(BASE_URL + "journey/get_user_journey", {
            id: store().signUp.user.id
        }, config).then(response => {
            console.log("Journey: ", response.data)
            if (response.data.success) {
                dispatch({ type: types.JOURNEY_FETCHED, journeys: response.data.journeys })
            } else {
                dispatch({ type: types.ERROR_JOURNEY, errorMessage: response.data.message })
            }
        }).catch(error => {
            dispatch({ type: types.ERROR_JOURNEY, errorMessage: error })
        })
    }
}

export const getDrafts = () => {
    return async (dispatch, store) => {
        dispatch({ type: types.LOADING_JOURNEY })
        try {

            const response = await request({
                url: 'journey/get_draft_journey',
                method: 'POST',
                data: { id: store().signUp.user.id },
            }, store().signUp.user.token);

            if (response.success) {
                dispatch({ type: types.DRAFTS_FETCHED, drafts: response.drafts })
            } else {
                dispatch({ type: types.ERROR_JOURNEY, errorMessage: response.message })
            }


        } catch (error) {
            console.log(error);
            dispatch({ type: types.ERROR_JOURNEY, errorMessage: error })
        }
    }
}


export const getSchedules = () => {
    return (dispatch, store) => {
        dispatch({ type: types.LOADING_JOURNEY })

        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios.post(BASE_URL + "journey/get_scheduled_journey", {
            id: store().signUp.user.id
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

export const getDelivered = () => {
    return (dispatch, store) => {
        dispatch({ type: types.LOADING_JOURNEY })

        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios.post(BASE_URL + "journey/get_delivered_journey", {
            id: store().signUp.user.id
        }, config).then(response => {
            console.log("Scheduled: ", response.data)
            if (response.data.success) {
                dispatch({ type: types.DELIVERED_FETCHED, delivered: response.data.delivered_journeys })
            } else {
                dispatch({ type: types.ERROR_JOURNEY, errorMessage: response.data.message })
            }
        }).catch(error => {
            dispatch({ type: types.ERROR_JOURNEY, errorMessage: error })
        })
    }
}

export const openJourney = (journey_id, receiver_id, unique_token) => {
    return async (dispatch, store) => {

        let { incomingJourney } = store().journey

        try {

            let filteredJourney = incomingJourney.filter(journey => journey.unique_token != unique_token)

            let response = await request({
                url: "journey/update_journey_opened_status",
                method: "POST",
                data: {
                    id: store().signUp.user.id,
                    journey_id,
                    receiver_id,
                    unique_token
                }
            }, store().signUp.user.token)

            if (response.success) {
                dispatch({ type: types.INCOMING_JOURNEY_FILTERED, journey: filteredJourney })
                dispatch(getOpenJourney())
            } else {
                dispatch({ type: types.ERROR_JOURNEY, errorMessage: response.data.message })
            }
        } catch (error) {
            console.log(error);
            dispatch({ type: types.ERROR_JOURNEY, errorMessage: error })
        }
    }
}

export const createJourney = (status) => {
    return async (dispatch, store) => {
        // dispatch({ type: types.LOADING_JOURNEY })

        let formData = new FormData()
        let images = []
        let metadata = ""
        store().journey.image.map((item) => {
            formData.append('images', item)
            images.push(item);
        })

        if (store().journey.audiourl) {
            store().journey.audiourl.map((item) => {
                formData.append('images', item)
                images.push(item.image);
            })
        }

        if (store().flourist.flower != '') {
            formData.append('flower_code', store().flourist.flower.CODE)
            formData.append('flower_price', store().flourist.flower.PRICE)
            formData.append('flower_image', store().flourist.flower.LARGE)
            formData.append('flower_name', store().flourist.flower.NAME)
            formData.append('flower_total', store().flourist.total)
            formData.append('receiver_phone', store().flourist.receiver.phone)
            formData.append('address_1', store().flourist.receiver.streetOne)
            formData.append('address_2', store().flourist.receiver.streetTwo)
            formData.append('zipCode', store().flourist.receiver.zipCode)
            formData.append('city', store().flourist.receiver.city)
            formData.append('state', store().flourist.receiver.state)
            formData.append('country', store().flourist.receiver.country)
            formData.append('email', store().flourist.receiver.email)
            formData.append('ip', store().signUp.user.ipAddress)
            formData.append('quantity', store().flourist.quantity)
        }


        formData.append('receiver_id', store().journey.receiverId)
        formData.append('name', store().signUp.user.firstName + " " + store().signUp.user.lastName)
        formData.append('sender_id', store().signUp.user.id)
        formData.append('type', store().journey.receiverType)
        formData.append('delivery_date', store().journey.date)
        formData.append('ocassion_holiday', store().journey.envelopeType)
        formData.append('envelope_image_path', store().journey.occassion)
        formData.append('note', store().journey.message)
        formData.append('journey_status', status)
        formData.append('receiver_name', store().journey.name)
        formData.append('images', store().journey.video)
        formData.append('circle_type', store().journey.circleType)
        formData.append('sender_timezone', store().signUp.user.timeZone)
        // console.log("formData: ", formData)
        const type = store().journey.receiverType


        let config = {
            headers: {
                'Authorization': 'Bearer ' + store().signUp.user.token,
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
            }
        };

        axios
            .post(
                BASE_URL + 'journey/journey_creation', formData, config,
            )
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    let time = store().journey.time;
                    let t = new Date().getTime();
                    let diff = t - time;
                    diff = convertTimeStamp(diff);
                    firebase.analytics().logEvent('Message_Created', {
                        userId: store().signUp.user.id,
                        userEmail: store().signUp.user.email,
                        userTimeZone: store().signUp.user.timeZone,
                        card: store().journey.envelopeType.split('/')[0],
                        cardType: store().journey.envelopeType.split('/')[1],
                        typeofJourney: type,
                        isMediaAttached: images.length > 0 ? 'true' : 'false',
                        deviceType: Platform.OS,
                        timeTaken: diff
                    })
                    dispatch({
                        type: types.JOURNEY_CREATED
                    });
                    setTimeout(() => {
                        dispatch(getOutgoingJourney())
                    }, 1000);
                } else {
                    console.log(response.data)
                    dispatch({
                        type: types.ERROR_JOURNEY,
                        message: response.data.message,
                    });
                }
            })
            .catch(error => {
                console.log(error)
                dispatch({ type: types.ERROR_JOURNEY, message: error });
            });
    };
};


export const resetJourneyCreation = () => {
    return dispatch => {
        dispatch({ type: types.RESET_JOURNEY_CREATED })
    }
}

export const resetJourneyComment = () => {
    return dispatch => {
        dispatch({ type: types.RESET_JOURNEY_COMMENT })
    }
}

export const resetCurrentJourney = () => {
    return (dispatch) => {
        dispatch({ type: types.RESET_CURRENT_JOURNEY })
    }
}

export const selectUniqueToken = (unique_token, cId, journey_id) => {
    return dispatch => {
        dispatch({ type: types.SELECT_TOKEN, unique_token: unique_token, circleId: cId, journey_id })
    }
}

export const getJourneyData = (id) => {
    return (dispatch, store) => {

        dispatch({ type: types.LOADING_JOURNEY })
        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios
            .post(
                BASE_URL + 'journey/get_journey', {
                id: store().signUp.user.id,
                journey_id: id,
            }, config,
            )
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    dispatch({ type: types.SINGLE_JOURNEY_FETCHED, journey: response.data.journey })
                    dispatch(openJourney(id, store().signUp.user.id, response.data.journey.unique_token))
                } else {
                    dispatch({
                        type: types.ERROR_JOURNEY,
                        message: response.data.message,
                    });
                    // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
                }
            })
            .catch(error => {
                dispatch({ type: types.ERROR_JOURNEY, message: error });
                // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
            });
    }
}

export const resetJourneyData = () => {
    return dispatch => {
        dispatch({ type: types.RESET_SINGLE_JOURNEY })
    }
}

export const updateJourney = (status) => {
    return async (dispatch, store) => {

        let formData = new FormData()
        let images = []
        let metadata = ""
        store().journey.image.map((item) => {
            console.log(item);

            if (item.uri.startsWith('http')) {
                formData.append("imageType", item.type.includes("image") ? 'image' : 'video')
                formData.append('imageUrl', item.uri.replace("-xs", "-original"))
            } else {
                formData.append('images', item)
            }
            images.push(item);
        })

        formData.append('circle_id', store().journey.receiverId)
        formData.append('receiver_id', store().journey.receiverId)
        formData.append('name', store().signUp.user.firstName + " " + store().signUp.user.lastName)
        formData.append('sender_id', store().signUp.user.id)
        formData.append('type', store().journey.receiverType)
        formData.append('delivery_date', store().journey.date)
        formData.append('ocassion_holiday', store().journey.envelopeType)
        formData.append('envelope_image_path', store().journey.occassion)
        formData.append('note', store().journey.message)
        formData.append('journey_status', status)
        formData.append('receiver_name', store().journey.name)
        formData.append('journey_id', store().journey.journey_id)

        store().journey.audiourl.map((item) => {
            console.log("Audio URL", item)
            if (item.uri.startsWith('http')) {
                formData.append('imageUrl', item.uri)
                formData.append('imageType', 'audio')
            } else {
                formData.append('images', item)
            }
            images.push(item);
        })
        formData.append('circle_type', store().journey.circleType)
        formData.append('unique_token', store().journey.unique_token)
        console.log("formData: ", formData)

        try {
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + store().signUp.user.token,
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                }
            };

            let response = await axios.post(BASE_URL + 'journey/update_journey', formData, config)

            if (response.data.success) {
                console.log("Success", response)
                dispatch({
                    type: types.JOURNEY_CREATED
                });
                setTimeout(() => {
                    dispatch(getOutgoingJourney())
                }, 1000);
            } else {
                alert(response.data.message)
                dispatch({
                    type: types.ERROR_JOURNEY,
                    message: response.data.message,
                });
            }
        } catch (error) {
            console.log("updatejourney", error);
        }
    };
};

export const isDraft = () => {
    return (dispatch) => {
        dispatch({ type: types.IS_DRAFT })
    }
}


export const deleteJourney = () => {
    return (dispatch, store) => {

        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios
            .post(
                BASE_URL + 'journey/delete_journey', {
                id: store().signUp.user.id,
                unique_token: store().journey.unique_token,
            }, config,
            )
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    dispatch(getOutgoingJourney())
                    // dispatch({ type: types.LIKES_FETCHED, liked: response.data.liked, likes: response.data.likes })
                } else {
                    dispatch({
                        type: types.ERROR_JOURNEY,
                        message: response.data.message,
                    });
                    // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
                }
            })
            .catch(error => {
                dispatch({ type: types.ERROR_JOURNEY, message: error });
                // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
            });
    }
}

export const getOpenJourney = (refresh = false) => async (dispatch, store) => {
    if (!refresh) {
        dispatch({ type: types.OPEN_JOURNEY_LOADING })
    } else {
        dispatch({ type: types.OPEN_JOURNEY_REFRESHING })
    }

    let system_date_time = new Date().toLocaleString("en-us", { timeZone: store().signUp.user.timeZone }).split(",")
    let date_time = system_date_time[0].split("/")

    let date = JSON.stringify(new Date().getDate()).length > 1 ? new Date().getDate() : 0 + "" + new Date().getDate()
    let month = (new Date().getMonth() + 1).length > 1 ? (new Date().getMonth() + 1) : 0 + "" + (new Date().getMonth() + 1)
    let year = new Date().getFullYear()
    try {
        let allJourney = []
        const response = await request({
            url: 'journey/get_user_journey_opened',
            method: 'POST',
            data: {
                id: store().signUp.user.id,
                unique_token: store().journey.unique_token,
                date: year + "-" + month + "-" + date
            },
        }, store().signUp.user.token);

        if (response.success) {
            response.timeline.map(item => {
                allJourney.push(...item.data)
            })

            let aJ = allJourney.sort((a, b) => new Date(b.journey_date) - new Date(a.journey_date));

            setTimeout(() => {
                dispatch({ type: types.OPEN_JOURNEY_FETCHED, journey: response.timeline, allJourney: aJ })
            }, 0);
        }

    } catch (error) {
        console.log("getOpenJourney", error)
        dispatch({ type: types.ERROR_JOURNEY, message: error });
    }
}

export const getIncomingJourney = (refresh = false) => async (dispatch, store) => {
    if (refresh) {
        dispatch({ type: types.INCOMING_REFRESH })
    } else {
        dispatch({ type: types.LOADING_JOURNEY })
    }

    let date = JSON.stringify(new Date().getDate()).length > 1 ? new Date().getDate() : 0 + "" + new Date().getDate()
    let month = (new Date().getMonth() + 1).length > 1 ? (new Date().getMonth() + 1) : 0 + "" + (new Date().getMonth() + 1)
    let year = new Date().getFullYear()
    try {
        const response = await request({
            url: 'journey/get_user_journey_incoming',
            method: 'POST',
            data: {
                id: store().signUp.user.id,
                unique_token: store().journey.unique_token,
                date: year + "-" + month + "-" + date,
                limitFrom: 0,
                limitTo: 20
            },
        }, store().signUp.user.token);

        setTimeout(() => {
            dispatch({ type: types.INCOMING_JOURNEY_FETCHED, journey: response.data, limitFrom: 20, limitTo: 20 })
        }, 0);
    } catch (error) {
        console.log(error)
        dispatch({ type: types.ERROR_JOURNEY, message: error });
    }
}

export const getIncomingJourneyOnEndReached = () => async (dispatch, store) => {
    let date = JSON.stringify(new Date().getDate()).length > 1 ? new Date().getDate() : 0 + "" + new Date().getDate()
    let month = (new Date().getMonth() + 1).length > 1 ? (new Date().getMonth() + 1) : 0 + "" + (new Date().getMonth() + 1)
    let year = new Date().getFullYear()

    const { limitTo } = store().journey
    try {
        const response = await request({
            url: 'journey/get_user_journey_incoming',
            method: 'POST',
            data: {
                id: store().signUp.user.id,
                unique_token: store().journey.unique_token,
                date: year + "-" + month + "-" + date,
                limitFrom: limitTo + 1,
                limitTo: limitTo + 10,
                loadMore: true
            },
        }, store().signUp.user.token);

        if (response.success && response.data.length > 0) {
            setTimeout(() => {
                dispatch({ type: types.INCOMING_JOURNEY_FETCHED_MORE, journey: response.data, limitTo: limitTo + 10, limitFrom: limitTo + 1 })
            }, 0);
        }

    } catch (error) {
        console.log(error)
        dispatch({ type: types.ERROR_JOURNEY, message: error });
    }
}


export const getOutgoingJourney = () => async (dispatch, store) => {
    dispatch({ type: types.LOADING_JOURNEY })

    let system_date_time = new Date().toLocaleString("en-us", { timeZone: store().signUp.user.timeZone }).split(",")
    let date_time = system_date_time[0].split("/")

    let date = JSON.stringify(new Date().getDate()).length > 1 ? new Date().getDate() : 0 + "" + new Date().getDate()
    let month = (new Date().getMonth() + 1).length > 1 ? (new Date().getMonth() + 1) : 0 + "" + (new Date().getMonth() + 1)
    let year = new Date().getFullYear()

    try {
        const response = await request({
            url: 'journey/get_user_journey_outgoing',
            method: 'POST',
            data: {
                id: store().signUp.user.id,
                unique_token: store().journey.unique_token,
                date: year + "-" + month + "-" + date
            },
        }, store().signUp.user.token);

        let journey = []

        journey.push({
            length: response[0].length,
            label: "TODAY",
            data: response[0].today
        })

        setTimeout(() => {
            dispatch({ type: types.OUTGOING_JOURNEY_FETCHED, journey: journey })
        }, 0);
    } catch (error) {
        console.log("getOutgoingJourney", error)
        dispatch({ type: types.ERROR_JOURNEY, message: error });
    }
}

export const clearJourneyMessageDate = () => {
    return (dispatch) => {
        dispatch({ type: types.RESET_JOURNEY_MESSAGE_Date })
    }
}

export const getCards = () => async (dispatch, store) => {
    dispatch({ type: types.LOADING_JOURNEY })
    try {
        const response = await request({
            url: 'cards/getCards',
            method: 'POST',
            data: { id: store().signUp.user.id },
        }, store().signUp.user.token);

        const { featured, ocassions, holidays, general, allCards, dates } = response

        dispatch({
            type: types.FETCH_CARDS,
            featured,
            ocassions,
            holidays,
            general,
            allCards,
            dates
        })
    } catch (error) {
        console.log(error)
        dispatch({ type: types.FETCH_CARDS_ERROR, message: error });
    }
}

export const getSpecificCardsList = (sub_category) => async (dispatch, store) => {
    dispatch({ type: types.LOADING_JOURNEY })
    try {
        const response = await request({
            url: 'cards/getSpecificCardList',
            method: 'POST',
            data: { id: store().signUp.user.id, sub_category },
        }, store().signUp.user.token);

        const { list } = response

        dispatch({
            type: types.FETCH_SPECIFIC_CARDS,
            list
        })
    } catch (error) {
        console.log(error)
        dispatch({ type: types.FETCH_CARDS_ERROR, message: error });
    }
}