module.exports = class UserDto {
    email;
    id;
    isActivated;

    constructor(user) {
        this.email = user.email;
        this.id = user.id;
        this.isActivated = user.isActivated;
    }
}