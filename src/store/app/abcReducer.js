import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    app_title: "",
    app_loading: false,
    message: {
        message: "N/A",
        status: "error" || "success" || "info",
        previousMessage: []
    }
}

const abcSlice = createSlice({
    name: "abcSlice",
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
            delete currentMessage.previousMessage;
            state.message.previousMessage.push(currentMessage);
            state.message = {...state.message, message: action.payload, status: action.status}
        }
    }
});

export const {
    updateAppTitle,
    pageOnLoading,
    pageCancelLoading,
    updateMessage
} = abcSlice.actions;

export default abcSlice.reducer;




