import { UserRegType } from "src/shared/types/UserTypes/UserRegType";
import { ChannelType } from "../ChannelTypes/ChannelType";

export interface UserType extends UserRegType{

    // TODO: create friends list type and gives it like the type
    friendsList: UserType[], 

    musicList: string[],
    videoList: string[],
    channelList: ChannelType[],

    // TODO: Create type for albums and gives it like the type
    
  
    // TODO: create settings type and gives it like the type
    settingsList: string[], 
}