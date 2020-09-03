import * as types from '../actionTypes';

const initialState = {
    users: [],
    actualUsers: [],
    groups: [],
    setMediaAttachingTime: '',
    setMessageTypingTime: '',
    setGroupMessageTypingTime: '',
    setGroupMediaAttachingTime: '',
    conversations: [],
    loading: false,
    showMore: true,
    scheduledMessages: []
};

const chat = (state = initialState, action) => {
    switch (action.type) {
        case 'noConversations':
            return { ...state, loading: false }
        case 'loading':
            return { ...state, loading: true }
        case 'setGroupMediaAttachingTime':
            return { ...state, setGroupMediaAttachingTime: action.payload };

        case 'resetGroupMediaAttachingTime':
            return { ...state, setGroupMediaAttachingTime: '' };

        case 'setGroupMessageTypingTime':
            return { ...state, setGroupMessageTypingTime: action.payload };

        case 'resetGroupMessageTypingTime':
            return { ...state, setGroupMessageTypingTime: '' };

        case 'setMessageTypingTime':
            return { ...state, setMessageTypingTime: action.payload };

        case 'resetMessageTypingTime':
            return { ...state, setMessageTypingTime: '' };

        case 'setMediaAttachingTime':
            return { ...state, setMediaAttachingTime: action.payload };

        case 'resetMediaAttachingTime':
            return { ...state, setMediaAttachingTime: '' };

        case types.COMET_CHAT_USERS_FETCHED:
            return {
                ...state,
                users: action.users,
                actualUsers: action.actualUsers
            }

        case types.LOADING_CHAT:
            return {
                ...state,
                loading: true
            };
        
        case types.FETCH_SCHEDULED_MESSAGES_BY_ID:
            return {
                ...state,
                loading: false,
                scheduledMessages: action.scheduledMessages
            };

        case types.COMET_CHAT_GROUPS_FETCHED:
            return {
                ...state,
                groups: action.groups
            }

        case types.SET_COMET_CHAT_USER:
            return {
                ...state,
                users: action.users
            }

        case types.SET_COMET_CHAT_USER_GROUP:
            return {
                ...state,
                groups: action.groups
            }
        case types.SET_CONVERSATIONS:


            return {
                ...state,
                conversations: action.conversations,
                loading: false
            }
        case types.SET_SHOW_MORE:
            return {
                ...state,
                showMore: false,

            }
        case types.USER_LOGGED_OUT: {
            return {
                ...state,
                users: [],
                actualUsers: [],
                groups: [],
                setMediaAttachingTime: '',
                setMessageTypingTime: '',
                setGroupMessageTypingTime: '',
                setGroupMediaAttachingTime: '',
                conversations: [],
                loading: false
            }
        }


        default:
            return state;
    }

}

export default chat