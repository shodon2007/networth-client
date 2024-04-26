import { AuthData } from "src/shared/types/AuthTypes/AuthType";
import { Roles } from "src/shared/types/ChannelTypes/ChannelType";
import { UserType } from "src/shared/types/UserTypes/userType";
import { login, logout, registration } from "./AuthSlice";

export const UserData = (): AuthData => {
  const user: UserType = {
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
    ]
  }

  const provideValues: AuthData = {
    user,
    token: ''
  }

  return provideValues;
}