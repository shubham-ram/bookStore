const { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } = require("../action/type");

const cartReducer = (initialState=[], action)=>{

    switch (action.type) {
        case ADD_TO_CART:
            return [...initialState, action.payload];

        case REMOVE_FROM_CART:
            return initialState.filter((state)=> state.isbn !== action.payload);

        case INCREMENT_QUANTITY: 
            return initialState.map((book)=>{
                if(book.isbn === action.payload){
                    return { ...book, quantity: book.quantity + 1 }
                }
                return book
            });

        case DECREMENT_QUANTITY:
            return initialState.map((book)=>{
                if(book.isbn === action.payload && book.quantity > 1){
                    return { ...book, quantity: book.quantity - 1 }
                }
                return book
            });
        default:
            return initialState;
    }
}

export default cartReducer