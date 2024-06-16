import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    app_title: "",
    app_loading: false,
    message: {
        message: "N/A",
        status: "info" || "error" || "success",
        logs: []
    }
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
        },
        updateMessage(state, action) {
            const currentMessage = state.message;
            state.message.logs.push(currentMessage);
            state.message.message = action.payload.message;
            state.message.status = action.payload.status
        }
    }
});

export const {
    updateAppTitle,
    pageOnLoading,
    pageCancelLoading,
    updateMessage
} = appSlice.actions;

export default appSlice.reducer;




