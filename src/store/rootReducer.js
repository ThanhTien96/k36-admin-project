import { combineReducers } from "redux";
import { alertSlice, appSlice, authSlice } from "./app";
import userSlice from "./app/userSlice";



const rootReducer = combineReducers({
    app: appSlice,
    auth: authSlice,
    alert: alertSlice,
    user: userSlice,
})

export default rootReducer;