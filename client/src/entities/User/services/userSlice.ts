import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthResponse } from "../model/Auth";

//@ts-ignore
const initialState: AuthResponse = JSON.parse(localStorage.getItem('user') ?? null) ?? {
    accessToken: null,
    refreshToken: null,
    isAuth: false,
}

const userSlice = createSlice({
    initialState,
    name: 'userStore',
    reducers: {
        setUser(state, action: PayloadAction<AuthResponse>){
            localStorage.setItem('user', JSON.stringify({...action.payload, isAuth: true}));
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.user = action.payload.user;
            state.isAuth = true;
        } 
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;