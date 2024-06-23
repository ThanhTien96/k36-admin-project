import { combineReducers } from "redux";
import { alertSlice, appSlice, authSlice } from "./app";



const rootReducer = combineReducers({
    app: appSlice,
    auth: authSlice,
    alert: alertSlice,
})

export default rootReducer;