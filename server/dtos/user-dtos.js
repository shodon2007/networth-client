module.exports = class UserDto {
    email;
    id;
    isActivated = false;
    name;
    avatar;
    password
    phoneNumber;
    musicAlbums;
    musicList;
    videoList;
    videoAlbums;
    photoList;
    friendsList;
    settingsList;

    constructor(
        id = this.id,
        name = this.name,
        email = this.email,
        avatar = this.avatar,
        password = this.password,
        phoneNumber = this.phoneNumber,
        musicList = this.musicList,
        videoList = this.videoList, 
        photoList = this.photoList,
        musicAlbums = this.musicAlbums,
        videoAlbums = this.videoAlbums,
        friendsList = this.friendsList,
        settingsList = this.settingsList,
    ) { }
}
