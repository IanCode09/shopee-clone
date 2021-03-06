import axios from 'axios'
import {
    PRODUCT_DATA_REQUEST, 
    PRODUCT_DATA_SUCCESS,
    PRODUCT_DATA_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from '../variables/productVariables'

export const dataProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DATA_REQUEST })

        const { data } =  await axios.get('/server/products')

        dispatch({ 
            type: PRODUCT_DATA_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DATA_FAIL,
            payload: 
                error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
        })
    }
}

export const dataProductsDetails = (id)  => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/server/products/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: 
                error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
        })
    }
}