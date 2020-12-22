import {
    PRODUCT_DATA_REQUEST,
    PRODUCT_DATA_SUCCESS,
    PRODUCT_DATA_FAIL
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