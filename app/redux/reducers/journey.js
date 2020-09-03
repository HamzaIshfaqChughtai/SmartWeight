import * as types from '../actionTypes';
import { buildFailureTestResult } from '@jest/test-result';

const initialState = {
    loading: false,
    errorMessage: '',
    occassion: null,
    date: null,
    message: '',
    image: [],
    name: '',
    circleImage: '',
    receiverId: '',
    receiverType: '',
    envelopeType: '',
    journeys: [],
    journeysCopy: [],
    journeysFiltered: false,
    drafts: [],
    scheduled: [],
    delivered: [],
    journeyCreated: false,
    video: '',
    audiourl: [],
    addedComment: false,
    comments: [],
    liked: false,
    likes: '',
    circleType: '',
    singleJourney: '',
    singleJourneyFetched: false,
    recievedChecked: false,
    scheduledChecked: false,
    deliveredChecked: false,
    allChecked: false,
    circleSelected: {},
    contactSelected: {},
    unique_token: '',
    singleJourneyFetched: false,
    selected_circle: false,
    selected_contact: false,
    circleId: '',
    isDraft: false,
    openedJourney: [],
    incomingJourney: [],
    outgoingJourney: [],
    allJourney: [],
    DateModel: '',
    TimeModel: '',
    selectedGallery: [],
    time: '',
    cardSelectionTime: '',
    messageOpenTime: '',
    addingMediaTime: '',
    setMessageTypingTime: '',
    featured: [],
    ocassions: [],
    holidays: [],
    general: [],
    specificCards: [],
    allCards: [],
    dates: {},
    journey_id: "",
    limitFrom: 0,
    limitTo: 20,
    incomingRefresh: false,
    openedRefresh: false,
    openedLoading: false
};

const journey = (state = initialState, action) => {
    switch (action.type) {
        case 'setMessageTypingTime':
            return { ...state, setMessageTypingTime: action.payload };

        case 'resetMessageTypingTime':
            return { ...state, setMessageTypingTime: '' };

        case 'time':
            return { ...state, time: action.payload };

        case 'resetCurrentTime':
            return { ...state, time: '' };

        case 'cardTime':
            return { ...state, cardSelectionTime: action.payload };

        case 'resetCardSelectionTime':
            return { ...state, cardSelectionTime: '' };

        case 'messageOpenTime':
            return { ...state, messageOpenTime: action.payload };

        case 'resetMessageOpenTime':
            return { ...state, messageOpenTime: '' };

        case 'addingMediaTime':
            return { ...state, addingMediaTime: action.payload };

        case 'resetMediaTime':
            return { ...state, addingMediaTime: '' };

        case types.LOADING_JOURNEY:
            return {
                ...state,
                loading: true,
            };
        case types.INCOMING_REFRESH:
            return {
                ...state,
                incomingRefresh: true,
            };

        case types.ERROR_JOURNEY: {
            return {
                ...state,
                loading: false,
                errorMessage: action.message,
            };
        }

        case types.RESET_ERROR_JOURNEY: {
            return {
                ...state,
                errorMessage: '',
            };
        }

        case types.SELECT_CIRCLE: {
            return {
                ...state,
                name: action.name,
                circleImage: action.image,
                receiverId: action.recieverId,
                receiverType: action.receiverType,
                circleType: action.circleType
            }
        }



        case types.SELECT_IMAGE: {
            return {
                ...state,
                image: action.image,
                selectedGallery: action.selected,
            }
        }

        case types.SELECT_VIDEO: {
            return {
                ...state,
                video: action.video
            }
        }

        case types.AUDIO_URL: {
            return {
                ...state,
                audiourl: action.url,
            }
        }

        case types.SELECT_MESSAGE: {
            return {
                ...state,
                message: action.message
            }
        }

        case types.SELECT_DATE_AND_OCCASSION: {
            return {
                ...state,
                date: action.date,
                occassion: action.occassion
            }
        }

        case types.SELECT_ENVELOPE_TYPE: {
            return {
                ...state,
                envelopeType: action.envelopeType
            }
        }

        case types.JOURNEY_FETCHED: {
            return {
                ...state,
                journeys: action.journeys,
                journeysCopy: action.journeys,
                loading: false,
                journeysFiltered: false
            }
        }

        case types.DRAFTS_FETCHED: {
            return {
                ...state,
                drafts: action.drafts,
                loading: false
            }
        }

        case types.DELIVERED_FETCHED: {
            return {
                ...state,
                delivered: action.delivered,
                loading: false
            }
        }

        case types.SCHEDULED_FETCHED: {
            return {
                ...state,
                scheduled: action.scheduled,
                loading: false
            }
        }

        case types.RESET_JOURNEY_MESSAGE: {
            return {
                ...state,
                loading: false,
                errorMessage: '',
                occassion: null,
                date: null,
                message: '',
                image: [],
                name: '',
                circleImage: '',
                receiverId: '',
                receiverType: '',
                circleType: '',
                video: '',
                audiourl: [],
                unique_token: '',
                circleId: '',
                isDraft: false,
                selectedGallery: [],
            }
        }

        case types.JOURNEY_OPENED: {
            return {
                ...state,
                incomingJourney: action.journeys
            }
        }

        case types.JOURNEY_CREATED: {
            return {
                ...state,
                journeyCreated: true,
                loading: false,
                cardSelectionTime: ''
            }
        }

        case types.RESET_JOURNEY_CREATED: {
            return {
                ...state,
                journeyCreated: false,
                image: [],
                video: ""
            }
        }

        case types.JOURNEY_COMMENTED: {
            return {
                ...state,
                addedComment: true
            }
        }

        case types.RESET_JOURNEY_COMMENT: {
            return {
                ...state,
                addedComment: false
            }
        }

        case types.COMMENTS_FETCHED: {
            return {
                ...state,
                comments: action.comments
            }
        }

        case types.LIKES_FETCHED: {
            return {
                ...state,
                liked: action.liked,
                likes: action.likes
            }
        }

        case types.RESET_CURRENT_JOURNEY: {
            return {
                ...state,
                comments: [],
                liked: false
            }
        }

        case types.SINGLE_JOURNEY_FETCHED: {
            return {
                ...state,
                singleJourney: action.journey,
                singleJourneyFetched: true,
                loading: false
            }
        }

        case types.RESET_SINGLE_JOURNEY: {
            return {
                ...state,
                singleJourneyFetched: false
            }
        }

        case types.JOURNEY_FILTERED: {
            return {
                ...state,
                journeysCopy: action.journeys,
                journeysFiltered: true
            }
        }

        case types.RECEIVED_CHECKED: {
            return {
                ...state,
                recievedChecked: action.RecievedChecked,
                allChecked: false
            }
        }

        case types.DELIVERED_CHECKED: {
            return {
                ...state,
                deliveredChecked: action.DeliveredChecked,
                allChecked: false
            }
        }
        case types.SCHEDULED_CHECKED: {
            return {
                ...state,
                scheduledChecked: action.ScheduledChecked,
                allChecked: false
            }
        }
        case types.ALL_CHECKED: {
            return {
                ...state,
                scheduledChecked: action.ScheduledChecked,
                deliveredChecked: action.DeliveredChecked,
                recievedChecked: action.RecievedChecked,
                allChecked: action.AllChecked,
            }
        }
        case types.SET_SELECTED_CIRCLE: {
            return {
                ...state,
                circleSelected: action.circle,
                contactSelected: action.contact,
                selected_circle: action.selected_circle,
                selected_contact: action.selected_contact
            }
        }
        case types.SELECT_TOKEN: {
            return {
                ...state,
                unique_token: action.unique_token,
                circleId: action.circleId,
                journey_id: action.journey_id
            }
        }

        case types.IS_DRAFT: {
            return {
                ...state,
                isDraft: true
            }
        }

        case types.RESET_TOKEN: {
            return {
                ...state,
                unique_token: ''
            }
        }

        case types.OPEN_JOURNEY_FETCHED: {
            return {
                ...state,
                openedJourney: action.journey,
                allJourney: action.allJourney,
                limit: action.limit,
                loading: false,
                openedRefresh: false,
                openedLoading: false
            }
        }

        case types.OPEN_JOURNEY_LOADING: {
            return {
                ...state,
                openedLoading: true
            }
        }

        case types.OPEN_JOURNEY_REFRESHING: {
            return {
                ...state,
                openedRefresh: true
            }
        }

        case types.INCOMING_JOURNEY_FETCHED: {
            return {
                ...state,
                incomingJourney: action.journey,
                limitFrom: action.limitFrom,
                limitTo: action.limitTo,
                loading: false,
                incomingRefresh: false
            }
        }
        case types.INCOMING_JOURNEY_FETCHED_MORE: {
            let newData = state.incomingJourney.concat(action.journey)
            return {
                ...state,
                incomingJourney: newData,
                limitFrom: action.limitFrom,
                limitTo: action.limitTo,
                loading: false,
                incomingRefresh: false
            }
        }
        case types.INCOMING_JOURNEY_FILTERED: {
            return {
                ...state,
                incomingJourney: action.journey,
            }
        }

        case types.OUTGOING_JOURNEY_FETCHED: {
            return {
                ...state,
                outgoingJourney: action.journey,
                loading: false
            }
        }

        case types.RESET_JOURNEY_MESSAGE_Date: {
            return {
                ...state,
                date: null,
                message: '',
            }
        }


        case types.FETCH_CARDS: {
            return {
                ...state,
                loading: false,
                featured: action.featured,
                holidays: action.holidays,
                ocassions: action.ocassions,
                general: action.general,
                allCards: action.allCards,
                dates: action.dates
            }
        }

        case types.FETCH_SPECIFIC_CARDS: {
            return {
                ...state,
                loading: false,
                specificCards: action.list
            }
        }

        case types.FETCH_CARDS_ERROR:
            return {
                ...state,
                loading: false,
                errorMessage: action.message
            }
        case types.USER_LOGGED_OUT: {
            return {
                ...state,
                loading: false,
                errorMessage: '',
                occassion: null,
                date: null,
                message: '',
                image: [],
                name: '',
                circleImage: '',
                receiverId: '',
                receiverType: '',
                envelopeType: '',
                journeys: [],
                journeysCopy: [],
                journeysFiltered: false,
                drafts: [],
                scheduled: [],
                delivered: [],
                journeyCreated: false,
                video: '',
                audiourl: [],
                addedComment: false,
                comments: [],
                liked: false,
                likes: '',
                circleType: '',
                singleJourney: '',
                singleJourneyFetched: false,
                recievedChecked: false,
                scheduledChecked: false,
                deliveredChecked: false,
                allChecked: false,
                circleSelected: {},
                contactSelected: {},
                unique_token: '',
                singleJourneyFetched: false,
                selected_circle: false,
                selected_contact: false,
                circleId: '',
                isDraft: false,
                openedJourney: [],
                incomingJourney: [],
                outgoingJourney: [],
                allJourney: [],
                DateModel: '',
                TimeModel: '',
                selectedGallery: [],
                time: '',
                cardSelectionTime: '',
                messageOpenTime: '',
                addingMediaTime: '',
                setMessageTypingTime: '',
                featured: [],
                ocassions: [],
                holidays: [],
                general: [],
                specificCards: [],
                allCards: [],
                dates: {}
            }
        }

        default:
            return state;
    }
};

export default journey;
