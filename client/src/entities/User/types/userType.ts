export interface UserType {
  id: string,
  name: string,
  email: string,
  password: string,
  phoneNumber: string,
  avatar?: string,

  // TODO: create friends list type and gives it like the type
  friendsList: string[], 

  musicList: string[],
  videoList: string[],
  
  // TODO: Create type for albums and gives it like the type
  musicAlbums: string[], 
  videoAlbums: string[],

  // TODO: create settings type and gives it like the type
  settingsList: string[], 
}