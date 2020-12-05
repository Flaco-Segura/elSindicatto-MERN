import axios from 'axios'
import { 
    DISC_LIST_REQUEST,
    DISC_LIST_SUCCESS,
    DISC_LIST_FAIL,
    DISC_DETAILS_REQUEST,
    DISC_DETAILS_SUCCESS,
    DISC_DETAILS_FAIL
} from '../constants/discConstants'

export const listDisc = () => async (dispatch) => {
    try {
        dispatch({ type: DISC_LIST_REQUEST })

        const { data } = await axios.get('/api/discs')

        dispatch({
            type: DISC_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DISC_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const listDiscDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: DISC_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/discs/${id}`)

        dispatch({
            type: DISC_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DISC_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}
