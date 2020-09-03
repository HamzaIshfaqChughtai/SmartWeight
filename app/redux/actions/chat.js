import * as types from '../actionTypes';
import { BASE_URL } from '../../enviroments';
import axios from 'axios';
import { CometChat } from '@cometchat-pro/react-native-chat';
import firebase from 'react-native-firebase';
import { Platform } from 'react-native';
import { convertTimeStamp } from '../../utls/timeConversion';
import request from '../../utls/apiHelper';
import { Toast } from 'native-base';
let conversationsRequest = new CometChat.ConversationsRequestBuilder().setLimit(30);
firebase.analytics().setAnalyticsCollectionEnabled(true);

export const getScheduledMessagesById = (receiverId) => {
    return async (dispatch, store) => {
        dispatch({ type: types.LOADING_CHAT });

        try {
            let result = await request({
                url: BASE_URL + 'comet_chat/listScheduledMessagesById',
                method: 'POST',
                data: {
                    id: store().signUp.user.id,
                    receiver_id: receiverId
                }
            }, store().signUp.user.token);

            if (result.success) {
                dispatch({ type: types.FETCH_SCHEDULED_MESSAGES_BY_ID, scheduledMessages: result.messages });
            }
            else {
                dispatch({ type: types.FETCH_SCHEDULED_MESSAGES_BY_ID, scheduledMessages: [] });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteScheduledMessagesById = (messageId) => {
    return async (dispatch, store) => {
        try {
            await request({
                url: BASE_URL + 'comet_chat/deleteScheduledMessageById',
                method: 'POST',
                data: {
                    id: store().signUp.user.id,
                    message_id: messageId
                }
            }, store().signUp.user.token);

            let messages = store().chat.scheduledMessages.filter(mess => mess.id != messageId)
            dispatch({ type: types.FETCH_SCHEDULED_MESSAGES_BY_ID, scheduledMessages: messages });
        } catch (error) {
            console.log(error);
        }
    };
};

export const sendEditedMessage = (receiverId, messageId, senderId, receiverType, type, text, receiverDate, media) => {
    return async (dispatch, store) => {
        try {
            let formData = new FormData();
            formData.append('id', store().signUp.user.id);
            formData.append('message_id', messageId);
            formData.append('type', type);
            formData.append('sender_id', senderId)
            formData.append('receiver_type', receiverType);
            formData.append("text", text);
            formData.append("receiver_date", receiverDate);
            formData.append('actual_date', receiverDate);
            formData.append("media", media);

            let config = {
                headers: {
                    'Content-Type': "multipart/form-data",
                    'Accept': "application/json",
                    'Authorization': 'Bearer ' + store().signUp.user.token
                },
            };

            let res = await axios.post(BASE_URL + 'comet_chat/sendEditedMessage', formData, config);

            if (res.data.success) {
                dispatch(getScheduledMessagesById(receiverId));
            }

        } catch (error) {
            console.log(error);
        }
    };
};

export const setGroupMediaAttachingTime = () => {
    return (dispatch, store) => {
        if (store().chat.setGroupMediaAttachingTime === '') {
            dispatch({ type: 'setGroupMediaAttachingTime', payload: new Date().getTime() });
        }
    }
};

export const resetGroupMediaAttachingTime = () => {
    return (dispatch, store) => {
        if (store().chat.setGroupMediaAttachingTime !== '') {
            dispatch({ type: 'resetGroupMediaAttachingTime' });
        }
    }
};

export const getGroupMediaAttachingTime = () => {
    return (dispatch, store) => {
        if (store().chat.setGroupMediaAttachingTime !== '') {
            let time = store().chat.setGroupMediaAttachingTime;
            let t = new Date().getTime();
            let diff = t - time;
            diff = convertTimeStamp(diff);
            firebase.analytics().logEvent('Media_Attaching_Time_In_Group', {
                timestamp: diff,
                userEmail: store().signUp.user.email,
                userTimeZone: store().signUp.user.timeZone,
                deviceType: Platform.OS
            });
            dispatch({ type: 'resetGroupMediaAttachingTime' });
        }
    }
}

export const setGroupMessageTypingTime = () => {
    return (dispatch, store) => {
        if (store().chat.setGroupMessageTypingTime === '') {
            dispatch({ type: 'setGroupMessageTypingTime', payload: new Date().getTime() });
        }
    }
};

export const resetGroupMessageTypingTime = () => {
    return (dispatch, store) => {
        if (store().chat.setGroupMessageTypingTime !== '') {
            dispatch({ type: 'resetGroupMessageTypingTime' });
        }
    }
};

export const getGroupMessageTypingTime = () => {
    return (dispatch, store) => {
        if (store().chat.setGroupMessageTypingTime !== '') {
            let time = store().chat.setGroupMessageTypingTime;
            let t = new Date().getTime();
            let diff = t - time;
            diff = convertTimeStamp(diff);
            firebase.analytics().logEvent('Message_Typing_Time_In_Group', {
                timestamp: diff,
                userEmail: store().signUp.user.email,
                userTimeZone: store().signUp.user.timeZone,
                deviceType: Platform.OS
            });
            dispatch({ type: 'resetGroupMessageTypingTime' });
        }
    }
};

export const setMessageTypingTime = () => {
    return (dispatch, store) => {
        if (store().chat.setMessageTypingTime === '') {
            dispatch({ type: 'setMessageTypingTime', payload: new Date().getTime() });
        }
    }
};

export const resetMessageTypingTime = () => {
    return (dispatch, store) => {
        if (store().chat.setMessageTypingTime !== '') {
            dispatch({ type: 'resetMessageTypingTime' });
        }
    }
};

export const getMessageTypingTime = () => {
    return (dispatch, store) => {
        if (store().chat.setMessageTypingTime !== '') {
            let time = store().chat.setMessageTypingTime;
            let t = new Date().getTime();
            let diff = t - time;
            diff = convertTimeStamp(diff);
            firebase.analytics().logEvent('Message_Typing_Time_In_Chat', {
                timestamp: diff,
                userEmail: store().signUp.user.email,
                userTimeZone: store().signUp.user.timeZone,
                deviceType: Platform.OS
            });
            dispatch({ type: 'resetMessageTypingTime' });
        }
    }
};

export const setMediaAttachingTime = () => {
    return (dispatch, store) => {
        if (store().chat.setMediaAttachingTime === '') {
            dispatch({ type: 'setMediaAttachingTime', payload: new Date().getTime() });
        }
    }
};

export const resetMediaAttachingTime = () => {
    return (dispatch, store) => {
        if (store().chat.setMediaAttachingTime !== '') {
            dispatch({ type: 'resetMediaAttachingTime' })
        }
    }
};

export const getMediaAttachingTime = () => {
    return (dispatch, store) => {
        if (store().chat.setMediaAttachingTime !== '') {
            let time = store().chat.setMediaAttachingTime;
            let t = new Date().getTime();
            let diff = t - time;
            diff = convertTimeStamp(diff);
            firebase.analytics().logEvent('Media_Attaching_Time_In_Chat', {
                timestamp: diff,
                userEmail: store().signUp.user.email,
                userTimeZone: store().signUp.user.timeZone,
                deviceType: Platform.OS
            });
            dispatch({ type: 'resetMediaAttachingTime' });
        }
    }
};

export const openMessage = (item) => {
    return (dispatch, store) => {
        let convo = store().chat.conversations

        convo.map(conv => {
            if (conv.conversationWith.uid == item.uid) {
                conv.unreadMessageCount = 0
            }
        })
        dispatch({ type: types.SET_CONVERSATIONS, conversations: convo })
    }
}


export const openMessageGroup = (item) => {
    return async (dispatch, store) => {
        let convo = store().chat.conversations

        convo.map(conv => {
            if (conv.conversationWith.guid == item.guid) {
                conv.unreadMessageCount = 0
            }
        })
        dispatch({ type: types.SET_CONVERSATIONS, conversations: convo })
    }
}

export const getCometChatUsers = (users) => {
    return (dispatch, store) => {
        let a = store().contacts.invitedContacts.filter(data => data.appUser && data.status != "invited")
        let b = users
        let filteredList = b.filter((item) => a.find(contact => contact.numbers.some(number => number.id == item.uid)))
        dispatch({ type: types.COMET_CHAT_USERS_FETCHED, users: filteredList, actualUsers: filteredList })
    }
}

export const getCometChatGroups = (groups) => {
    // console.log("Fetching Groups: ", groups)
    return (dispatch, store) => {
        // let a = store().contacts.contact.filter(data => data.appUser)
        // let b = users
        // let filteredList = b.filter((item) => a.find(contact => contact.numbers.some(number => number.id == item.uid)))

        dispatch({ type: types.COMET_CHAT_GROUPS_FETCHED, groups: groups })
    }
}

export const addUserListner = () => {
    return (dispatch, store) => {

        let listenerID = "CONTACT_USER_LISTNER";

        CometChat.addUserListener(
            listenerID,
            new CometChat.UserListener({
                onUserOnline: onlineUser => {
                    /* when someuser/friend comes online, user will be received here */
                    console.log("On User Online:", { onlineUser });
                    let users = store().chat.users
                    users.map(user => {
                        if (user.uid == onlineUser.uid) {
                            user.status = "online"
                        }
                    })
                    dispatch({ type: types.SET_COMET_CHAT_USER, users: users })
                },
                onUserOffline: offlineUser => {
                    /* when someuser/friend went offline, user will be received here */
                    console.log("On User Offline:", { offlineUser });
                    let users = store().chat.users
                    users.map(user => {
                        if (user.uid == offlineUser.uid) {
                            user.status = "offline"
                        }

                    })
                    dispatch({ type: types.SET_COMET_CHAT_USER, users: users })
                }
            })
        );
    }
}

export const scheduleMessage = (receiver_id, receiverName, text, receiverType, date, messageType, media) => {
    return (dispatch, store) => {
        let formData = new FormData();
        formData.append('id', store().signUp.user.id);
        formData.append('receiver_id', receiver_id);
        formData.append('receiver_name', receiverName)
        formData.append("category", "message");
        formData.append("type", messageType);
        formData.append("receiverType", receiverType);
        formData.append("text", text);
        formData.append("receiver_date", date);
        formData.append('actual_date', date);
        formData.append("media", media);

        let config = {
            headers: {
                'Content-Type': "multipart/form-data",
                'Accept': "application/json",
                'Authorization': 'Bearer ' + store().signUp.user.token
            },
        };

        try {
            axios.post(BASE_URL + 'comet_chat/scheduledMessage', formData, config)
                .then(response => {
                    if (response.data.success) {
                        console.log('Message sent');
                        Toast.show({
                            text: 'Message scheduled successfully.',
                            duration: 4000
                        })
                    }
                })
                .catch(error => {
                    console.log('Network Error', error);
                })
        } catch (err) {
            console.log(err);
        }
    }
}

export const sendMessage = (receiver_id, text, type, note, media) => {
    console.log('receiver_id', receiver_id);
    console.log('text', text);
    console.log('type', type);
    // console.log('media', media);
    // console.log('note', note);

    let textMessage = new CometChat.TextMessage(JSON.stringify(receiver_id), text.trim(), type);
    // let metadata = {
    //     reply: true,
    //     dataType: media ? media.type : 'text',
    //     replyData: media ? media.uri : note.trim()
    // };
    // textMessage.setMetadata(metadata);

    return (dispatch, store) => {

        CometChat.sendMessage(textMessage).then(
            message => {
                console.log('cometchat send message', message);
            },
            error => {
                console.log("Message sending failed with error:", error);
            }
        );
    };
}

export const addNotification = (id) => {
    return async (dispatch, store) => {
        try {
            let config = {
                headers: { Authorization: 'Bearer ' + store().signUp.user.token },
            };
            let response = await axios.post(BASE_URL + 'comet_chat/addNotificationChat',
                {
                    id: store().signUp.user.id,
                    receiver_id: id
                },
                config,
            )
        } catch (error) {
            console.log(error);
        }

    }
}

export const addNotificationGroup = (guid) => {
    return async (dispatch, store) => {
        try {
            let config = {
                headers: { Authorization: 'Bearer ' + store().signUp.user.token },
            };
            let response = await axios.post(BASE_URL + 'comet_chat/addNotificationChatGroup',
                {
                    id: store().signUp.user.id,
                    group_id: guid
                },
                config,
            )
        } catch (error) {
            console.log(error);
        }

    }
}

export const updateNotification = (guid) => {
    return async (dispatch, store) => {
        try {
            let response = await request({
                url: 'comet_chat/updateNotification',
                method: "POST",
                data: {
                    id: store().signUp.user.id
                }
            }, store().signUp.user.token)

            if (response.success) {
                let user = store().signUp.user
                user.new_notification_chat = 0
                dispatch({ type: types.USER_FETCHED, user: user })
            }
        } catch (error) {
            console.log(error);
        }

    }
}


export const fetchUser = () => {
    return async (dispatch) => {
        var limit = 100;
        var usersRequest = new CometChat.UsersRequestBuilder().setLimit(limit).build();
        usersRequest.fetchNext().then(
            userList => {
                let userWithCount = userList.map(data => {
                    let item = data
                    item.unreadCount = 0
                    return item
                })
                if (userWithCount.length > 0) {
                    CometChat.getUnreadMessageCountForAllUsers().then(array => {
                        var unread = Object.keys(array);
                        if (unread.length > 0) {
                            unread.map(uid => {
                                var index = userWithCount.findIndex(user => user.uid == uid);
                                if (index != -1) {
                                    userWithCount[index].unreadCount = array[uid];
                                }
                            });
                        }

                        setTimeout(() =>
                            dispatch(getCometChatUsers(userWithCount.sort((a, b) => b.unreadCount - a.unreadCount)))
                            , 1000)
                    })
                }
            },
            error => {
                console.log("User list fetching failed with error:", error);
            }
        );
    }
}
export const getConversations = (refresh = true) => async (dispatch, store) => {
    dispatch({ type: 'loading' })
    try {
        let previousConvo = store().chat.conversations
        let response = await conversationsRequest.build().fetchNext();
        let fullConvoList = [...previousConvo, ...response]

        let length = response.length
        if (length == 0) {
            dispatch({ type: types.SET_SHOW_MORE })

        } else {
            dispatch({ type: types.SET_CONVERSATIONS, conversations: response })
            dispatch({ type: types.SET_SHOW_MORE })
            // if (refresh) {

            // } else {
            //     dispatch({ type: types.SET_CONVERSATIONS, conversations: fullConvoList })
            // }
        }

    } catch (error) {
        console.log(error);
    }
}


export const fetchGroups = () => {
    return async (dispatch, store) => {
        try {
            let { invitedContacts } = store().contacts

            let circles = await store().circle.circles.map(data => {
                return {
                    guid: JSON.stringify(data.circleId),
                    name: data.circleName
                }
            })

            let user = await invitedContacts.filter(user => user.registered && user.status == "accepted").map(user => {
                return {
                    uid: JSON.stringify(user.id),
                    name: user.name,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    status: "",
                    avatar: user.image
                }
            })

            let groupsUsers = user.concat(circles)

            dispatch({ type: types.FETCHED_INVITED_CONTACTS, contacts: invitedContacts, user: groupsUsers });
        } catch (error) {
            console.log("fetchGroups", error);
        }
    }
}

export const sendGroupNotification = (guid, text, senderName) => {
    return async (dispatch, store) => {
        try {
            let config = {
                headers: { Authorization: 'Bearer ' + store().signUp.user.token },
            };
            let response = await axios.post(BASE_URL + 'comet_chat/sendGroupNotification',
                {
                    id: store().signUp.user.id,
                    guid,
                    text,
                    senderName
                },
                config,
            )

            console.log(response);

        } catch (error) {
            console.log(error);
        }

    }
}

export const sendOneToOneNotification = (uid, text, senderName) => {
    return async (dispatch, store) => {
        try {
            let config = {
                headers: { Authorization: 'Bearer ' + store().signUp.user.token },
            };
            let response = await axios.post(BASE_URL + 'comet_chat/sendOneToOneNotification',
                {
                    id: store().signUp.user.id,
                    uid,
                    text,
                    senderName
                },
                config,
            )

            console.log(response);

        } catch (error) {
            console.log(error);
        }

    }
}

export const setReceiverTime = () => {
    return {
        type: types.SET_RECEIVER_TIME,
        time: new Date()
    }
}