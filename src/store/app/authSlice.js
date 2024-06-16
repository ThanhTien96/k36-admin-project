import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    profile: null,
    isAuth: false,
    role: ""
};


const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {}
});

export default authSlice.reducer;

