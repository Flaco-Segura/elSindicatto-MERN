import axios from 'axios'
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
    DISC_CREATE_SUCCESS,
    DISC_UPDATE_FAIL,
    DISC_UPDATE_REQUEST,
    DISC_UPDATE_SUCCESS,
    DISC_CREATE_REVIEW_FAIL,
    DISC_CREATE_REVIEW_REQUEST,
    DISC_CREATE_REVIEW_SUCCESS
} from '../constants/discConstants'

export const listDisc = (keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: DISC_LIST_REQUEST })

        const { data } = await axios.get(`/api/discs?keyword=${keyword}`)

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

export const deleteDisc = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: DISC_DELETE_REQUEST })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.delete(`/api/discs/${id}`, config)

        dispatch({
            type: DISC_DELETE_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: DISC_DELETE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const createDisc = () => async (dispatch, getState) => {
    try {
        dispatch({ type: DISC_CREATE_REQUEST })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post('/api/discs', {}, config)

        dispatch({
            type: DISC_CREATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DISC_CREATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const updateDisc = (disc) => async (dispatch, getState) => {
    try {
        dispatch({ type: DISC_UPDATE_REQUEST })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(`/api/discs/${disc._id}`, disc, config)

        dispatch({
            type: DISC_UPDATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DISC_UPDATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const createDiscReview = (discId, review) => async (dispatch, getState) => {
    try {
        dispatch({ type: DISC_CREATE_REVIEW_REQUEST })

        const { userLogin: { userInfo } } = getState()
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.post(`/api/discs/${discId}/reviews`, review, config)

        dispatch({
            type: DISC_CREATE_REVIEW_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: DISC_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}
