import {
    PRODUCT_DATA_REQUEST, 
    PRODUCT_DATA_SUCCESS,
    PRODUCT_DATA_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from '../variables/productVariables'

export const productDataReducer = (state = { products: [] }, action) => {
    switch(action.type) {
        case PRODUCT_DATA_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_DATA_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_DATA_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}