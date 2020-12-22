import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
        
            const existItem = state.cartItems.find(x => x.product === item.product && x.sz === item.sz)
            
            if(item.sizeInStock > 0) {

                if(existItem) {
                    return {
                        ...state,
                        cartItems: state.cartItems.map(x => x.product === existItem.product && x.sz === existItem.sz ? item : x)
                    }
                } else {
                    return {
                        ...state,
                        cartItems: [...state.cartItems, item]
                    }
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems]
                }
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload || x.sz !== action.sz)
            }
        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            }
        default:
            return state
    }
}