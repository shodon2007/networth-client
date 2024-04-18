import { RegistrationUser } from "src/shared/API/Auth/Registration";
import { AuthContextData } from "src/shared/types/contextTypes/AuthContextType";
import { LoginUser } from "src/shared/API/Auth/LoginUser";
import { LogoutUser } from "src/shared/API/Auth/LogoutUser";
import { useState } from "react";
import { UserType } from "src/shared/types/UserTypes/userType";
import { Roles } from 'src/shared/types/ChannelTypes/ChannelType'

interface AuthProviderProps { }

export const UserData = ({ }: AuthProviderProps) => {
  const [user, setUser] = useState<UserType>({
    id: 1231,
    name: 'asd',
    email: 'dasad',
    password: '',
    friendsList: ['sdfgsdfg', 'sd', 'fdfgff', '12312'],
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

  const provideValues: AuthContextData = {
    user,
    auth: RegistrationUser,
    login: LoginUser,
    logout: LogoutUser,
    token: ''
  }

  return provideValues;
}

