import { 
    DISC_LIST_REQUEST,
    DISC_LIST_SUCCESS,
    DISC_LIST_FAIL 
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
