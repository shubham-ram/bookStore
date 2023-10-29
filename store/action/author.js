import { ADD_AUTHOR } from "./type"

export const addAuthor = (payload)=>{
    return {
        type: ADD_AUTHOR,
        payload
    }
}