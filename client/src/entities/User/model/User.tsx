import { UserType } from "../types/UserType";

export class User implements UserType { 
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
  ) {}
}