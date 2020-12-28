import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productDataReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'

const reducer = combineReducers({
    productData: productDataReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer
})

const cartStorage = localStorage.getItem(('cartItems'))
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const userStorage = localStorage.getItem(('userInfo'))  
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const shippingAddressStorage = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {}

const initialState = {
    cart: { 
        cartItems: cartStorage,
        shippingAddress: shippingAddressStorage 
    },
    userLogin: { userInfo: userStorage }

}

const middleware = [thunk]

const store =  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)



export default store