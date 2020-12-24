import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productDataReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    productData: productDataReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

const cartStorage = localStorage.getItem(('cartItems'))
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const initialState = {
    cart: { cartItems: cartStorage }
}

const middleware = [thunk]

const store =  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store