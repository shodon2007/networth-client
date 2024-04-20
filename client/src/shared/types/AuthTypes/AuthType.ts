import { UserLogData } from "../UserTypes/UserLogType";
import { UserRegType } from "../UserTypes/UserRegType";
import { UserType } from "../UserTypes/userType";

export interface AuthData { 
  user: UserType;
  login: (user: UserLogData) => Promise<UserType| void>;
  logout: () => void;
  auth: (user: UserRegType) => Promise<UserType | void>;
  token: string;
}