import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "src/shared/API/Auth/LoginUser";
import { AuthData } from "src/shared/types/AuthTypes/AuthType";
import { UserLogData } from "src/shared/types/UserTypes/UserLogType";
import { UserType } from "src/shared/types/UserTypes/userType";





// ! Tested part of code, after realized back-end, it will be deleted.

import { RegistrationUser } from "src/shared/API/Auth/Registration";
// import { AuthData } from "src/shared/types/AuthTypes/AuthType";
// import { LoginUser } from "src/shared/API/Auth/LoginUser";
import { LogoutUser } from "src/shared/API/Auth/LogoutUser";
import { useState } from "react";
// import { UserType } from "src/shared/types/UserTypes/userType";
import { Roles } from 'src/shared/types/ChannelTypes/ChannelType'

export const UserData = (): AuthData => {
  const [user, setUser] = useState<UserType>({
    id: 1231,
    name: 'asd',
    email: 'dasad',
    password: '',
    friendsList: [],
    musicList: ['sdfgsdfg', 'sdf'],
    videoList: ['sdf', 'sfddfsf'],
    avatar: '',
    settingsList: ['fgfg', 'fg'],
    phoneNumber: 3434,
    channelList: [
      {
        title: 'Hellowin',
        participants: [
          {
            id: '123',
            role: Roles.Admin,
          }
        ],
        id: "asdasd"
      }
    ],

  })

  const provideValues: AuthData = {
    user,
    auth: RegistrationUser,
    login: LoginUser,
    logout: LogoutUser,
    token: ''
  }

  return provideValues;
}
// // --------------------------------------------------------------

// const initialState: AuthData = UserData;

const AuthSlice = createSlice({
  name: 'auth',
  initialState: UserData,
  reducers: {
    login: (state, action: {payload: UserLogData}) => {
      const req = LoginUser(action.payload)
      state.user = req as unknown as UserType
    }
  }
})

export const { login } = AuthSlice.actions

export default AuthSlice.reducer
