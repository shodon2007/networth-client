import {UserType} from "./User";
import {userApi} from "./User/services/userService";
import userSlice, { setUser } from "./User/services/userSlice";

export type {UserType};
export {
    userApi,
    userSlice,
    setUser
};
