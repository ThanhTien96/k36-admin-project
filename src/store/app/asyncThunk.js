import { createAsyncThunk } from "@reduxjs/toolkit";
import UserRequester from "../../service/userRequester";


export const thunkFetchListUser = createAsyncThunk(
    "thunkFetchListUser",
    async (_, thunkApi) => {
        try{
            const res = await UserRequester.listUser();

            if(res.status === 200) {
                return res.data;
            }
        } catch(err) {
            return err
        }
    }
);


