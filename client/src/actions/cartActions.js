import axios from 'axios'
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM
} from '../variables/cartVariables'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/server/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            productId: data._id,
            nameProduct: data.nameProduct,
            image: data.image,
            price: data.price,
            stock: data.stock,
            isDiskon: data.isDiskon,
            qty
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}