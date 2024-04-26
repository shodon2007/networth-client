import { UserLogData } from "../UserTypes/UserLogType";
import { UserRegType } from "../UserTypes/UserRegType";
import { UserType } from "../UserTypes/userType";

export interface AuthData {
  user: UserType;
  // login: (user: UserLogData) => Promise<{ user: UserType, token: string } | void>;
  // logout: () => void;
  // auth: (user: UserRegType) => Promise<{ user: UserType, token: string } | void>;
  token: string;
}