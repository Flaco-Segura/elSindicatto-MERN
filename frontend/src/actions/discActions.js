import axios from 'axios'
import { 
    DISC_LIST_REQUEST,
    DISC_LIST_SUCCESS,
    DISC_LIST_FAIL
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
            payload: error.response && error.response.data.messages
                ? error.response.data.message
                : error.message
        })
    }
}
