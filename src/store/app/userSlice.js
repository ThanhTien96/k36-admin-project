import { createSlice } from "@reduxjs/toolkit"
import { thunkFetchListUser } from "./asyncThunk";

const initialState = {
    listUser: [],
    loading: false
}


const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(thunkFetchListUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(thunkFetchListUser.fulfilled, (state, action) => {
            state.listUser = action.payload
            state.loading = false
        });
        builder.addCase(thunkFetchListUser.rejected, (state, action) => {
            state.loading = false
        });

    }
});

export default userSlice.reducer;
