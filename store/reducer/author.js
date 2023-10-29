import { ADD_AUTHOR } from "../action/type";

const authorReducer = ( initialState={}, action )=>{
    switch (action.type) {
        case ADD_AUTHOR:
            return { ...initialState, ...action.payload };

        default:
            return initialState
    }
}

export default authorReducer