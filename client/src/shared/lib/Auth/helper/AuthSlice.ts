import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "src/shared/API/Auth/LoginUser";
import { AuthData } from "src/shared/types/AuthTypes/AuthType";
import { UserLogData } from "src/shared/types/UserTypes/UserLogType";
import { UserType } from "src/shared/types/UserTypes/userType";
import { UserRegType } from "src/shared/types/UserTypes/UserRegType";




// ! Tested part of code, after realized back-end, it will be deleted.

import { RegistrationUser } from "src/shared/API/Auth/Registration";
// import { AuthData } from "src/shared/types/AuthTypes/AuthType";
// import { LoginUser } from "src/shared/API/Auth/LoginUser";
import { LogoutUser } from "src/shared/API/Auth/LogoutUser";
import { useState } from "react";
// import { UserType } from "src/shared/types/UserTypes/userType";
import { Roles } from 'src/shared/types/ChannelTypes/ChannelType'
import { UserData } from "./testUser";

// // --------------------------------------------------------------

// const initialState: AuthData = UserData;

const AuthSlice = createSlice({
  name: 'auth',
  initialState: UserData,
  reducers: {
    login: (state, action: { payload: UserLogData }) => {
      const req = LoginUser(action.payload)
      state.user = req as unknown as UserType
    },
    logout: (state) => {
      state.user = {} as UserType
      state.token = ''
    },
    registration: (state, aciton: { payload: UserRegType }) => {
      const req: Promise<void | { user: UserType, token: string }> = RegistrationUser(aciton.payload)
      // ! This is need in something, it seems like this is shit's code :)
      if ('user' in req && 'token' in req) {
        state.user = req.user as UserType
        state.token = req.token as string
      }
    }
  }
})

export const { login, logout, registration } = AuthSlice.actions

export default AuthSlice.reducer
