import { combineReducers } from "redux"
import fetchReducer from "./fetchReducer"


export const allReducers = ()=>{


    return combineReducers({
        responce:fetchReducer,
    });

}