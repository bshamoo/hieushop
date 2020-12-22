import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD } from'../constants/cartConstants'

export const addToCart = (id, qty, sz) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)
    
    if(sz === 'small') {
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                sizeInStock: data.sizeInStock.small,
                key: data._id + data.sizeInStock.small,
                qty,
                sz
            }
        })
    }
    else if(sz === 'medium') {
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                sizeInStock: data.sizeInStock.medium,
                key: data._id + data.sizeInStock.medium,
                qty,
                sz
            }
        })
    }
    if(sz === 'large') {
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                sizeInStock: data.sizeInStock.large,
                key: data._id + data.sizeInStock.large,
                qty,
                sz
            }
        })
    }

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id, sz) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
        sz
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })

    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data,
    })

    localStorage.setItem('paymentMethod', JSON.stringify(data))
}