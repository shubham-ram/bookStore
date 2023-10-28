const { ADD_TO_CART, REMOVE_FROM_CART } = require("../action/type");

const cartReducer = (initialState=[], action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            return [...initialState, action.payload];
        case REMOVE_FROM_CART:
            return initialState.filter((state)=> state.isbn !== action.payload)
        default:
            return initialState;
    }
}

export default cartReducer