import {UserType} from "./user";
import {userApi} from "./user/services/userService";
import userSlice, {setUser} from "./user/services/userSlice";

export type {UserType};
export {userApi, userSlice, setUser};
