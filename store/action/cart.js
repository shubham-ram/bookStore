import { ADD_TO_CART,DECREMENT_QUANTITY,INCREMENT_QUANTITY,REMOVE_FROM_CART } from "./type";

export const addToCart = (payload)=>{
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const removeFromCart = (payload)=>{
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}

export const incrementQuantity = (payload)=>{
    return {
        type : INCREMENT_QUANTITY,
        payload
    }
}

export const decrementQuantity = (payload)=>{
    return {
        type : DECREMENT_QUANTITY,
        payload
    }
}