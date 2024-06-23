import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    app_title: "",
    app_loading: false,
}

const appSlice = createSlice({
    name: "appSlice",
    initialState,

    reducers: {
        updateAppTitle(state, action) {
            state.app_title = action.payload;
        },
        // open when page loading (call API, etc...)
        pageOnLoading(state, action) {
            state.app_loading = true;
        },
        pageCancelLoading(state, action) {
            state.app_loading = false;
        }
    }
});

export const {
    updateAppTitle,
    pageOnLoading,
    pageCancelLoading,
} = appSlice.actions;

export default appSlice.reducer;




