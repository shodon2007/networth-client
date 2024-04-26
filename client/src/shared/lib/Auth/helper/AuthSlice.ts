import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "src/shared/API/Auth/LoginUser";
import { UserLogData } from "src/shared/types/UserTypes/UserLogType";
import { UserType } from "src/shared/types/UserTypes/userType";
import { UserRegType } from "src/shared/types/UserTypes/UserRegType";
import { RegistrationUser } from "src/shared/API/Auth/Registration";
import { UserData } from "./testUser";



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
