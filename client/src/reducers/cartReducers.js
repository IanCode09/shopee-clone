import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_ADD_ADDRESS
} from '../variables/cartVariables'

export const cartReducer = (state = { cartItems: [], shippingAddres: {} }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload

            const existItem = state.cartItems.find((i) => i.productId === item.productId)

            if(existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((i) => 
                        i.productId === existItem.productId ? item : i
                    )
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((i) => i.productId !== action.payload)
            }
        
        case CART_ADD_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            }

        default:
            return state
    }
}