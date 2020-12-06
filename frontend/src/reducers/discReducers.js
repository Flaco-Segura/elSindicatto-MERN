import { 
    DISC_LIST_REQUEST,
    DISC_LIST_SUCCESS,
    DISC_LIST_FAIL,
    DISC_DETAILS_REQUEST,
    DISC_DETAILS_SUCCESS,
    DISC_DETAILS_FAIL,
    DISC_DELETE_FAIL,
    DISC_DELETE_REQUEST,
    DISC_DELETE_SUCCESS,
    DISC_CREATE_FAIL,
    DISC_CREATE_REQUEST,
    DISC_CREATE_RESET,
    DISC_CREATE_SUCCESS,
    DISC_UPDATE_FAIL,
    DISC_UPDATE_REQUEST,
    DISC_UPDATE_RESET,
    DISC_UPDATE_SUCCESS
} from '../constants/discConstants'

export const discListReducer = (state = { discs: [] }, action) => {
    switch(action.type) {
        case DISC_LIST_REQUEST:
            return { loading: true, discs: [] }
        case DISC_LIST_SUCCESS:
            return { loading: false, discs: action.payload }
        case DISC_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const discDetailsReducer = (state = { disc: { reviews: [] } }, action) => {
    switch(action.type) {
        case DISC_DETAILS_REQUEST:
            return { loading: true, ...state }
        case DISC_DETAILS_SUCCESS:
            return { loading: false, disc: action.payload }
        case DISC_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const discDeleteReducer = (state = {}, action) => {
    switch(action.type) {
        case DISC_DELETE_REQUEST:
            return { loading: true }
        case DISC_DELETE_SUCCESS:
            return { loading: false, success: true }
        case DISC_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const discCreateReducer = (state = {}, action) => {
    switch(action.type) {
        case DISC_CREATE_REQUEST:
            return { loading: true }
        case DISC_CREATE_SUCCESS:
            return { loading: false, success: true, disc: action.payload }
        case DISC_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case DISC_CREATE_RESET:
            return {}
        default:
            return state
    }
}

export const discUpdateReducer = (state = { disc: {} }, action) => {
    switch(action.type) {
        case DISC_UPDATE_REQUEST:
            return { loading: true }
        case DISC_UPDATE_SUCCESS:
            return { loading: false, success: true, disc: action.payload }
        case DISC_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case DISC_UPDATE_RESET:
            return { disc: {} }
        default:
            return state
    }
}
