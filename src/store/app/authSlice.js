import { createSlice } from "@reduxjs/toolkit";

export const AUTH_STATE = {
    auth: "AUTH",
    unAuth: "UN_AUTH"
}

const initialState = {
    profile: null,
    isAuth: AUTH_STATE.unAuth,
    role: ""
};


const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setAuthRole(state, action) {
            state.role = action.payload;
        },
        setAuthProfile(state, action) {
            state.isAuth = AUTH_STATE.auth;
            state.role = action.payload.role;
            state.profile = action.payload;
        }
    }
});

export const {
    setAuthRole,
    setAuthProfile
} = authSlice.actions;

export default authSlice.reducer;

