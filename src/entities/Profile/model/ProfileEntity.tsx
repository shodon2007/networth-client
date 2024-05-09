import { User } from "src/entities/User";


export class Profile extends User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public avatar: string,
    public password: string,
    public phoneNumber: string,
    public musicList: string[],
    public videoList: string[],
    public photoList: string[],
    public musicAlbums: string[], 
    public videoAlbums: string[],
    public albums: string[],
    public friendsList: string[],
    public settingsList: string[],
  ) {
    super(
      id = id,
      name = name,
      email = email,
      avatar = avatar,
      password = password,
      phoneNumber = phoneNumber,
      musicList = musicList,
      videoList = videoList,
      photoList = photoList,
      musicAlbums = musicAlbums,
      videoAlbums = videoAlbums,
      albums = albums,
      friendsList = friendsList,
      settingsList = settingsList,
    )
  } 
  Great() {  // Example method, can be deleted whenever 
    return console.log(this.id, 'Hello')
  }

  
}