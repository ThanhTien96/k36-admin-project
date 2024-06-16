import { combineReducers } from "redux";
import { appSlice, authSlice } from "./app";



const rootReducer = combineReducers({
    app: appSlice,
    auth: authSlice,
})

export default rootReducer;