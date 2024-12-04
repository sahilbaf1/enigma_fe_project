import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const API_URL = 'http://157.245.154.12:8080/api/v1/'

export const authUser = createAsyncThunk(
    "authUser",
    async (data) => {
        try {
            const response = await axios.post('/api/v1/auth/login',
                data,
                {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
        } catch (error) {
            throw Error('Failed to create new user');
        }

    }
)

export const userDetail = createSlice({
    name: "auth",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
        .addCase(authUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(authUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
        })
    }
})

export default userDetail.reducer;