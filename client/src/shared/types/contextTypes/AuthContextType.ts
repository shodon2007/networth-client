import { UserLogData } from "../UserTypes/UserLogType";
import { UserRegType } from "../UserTypes/UserRegType";
import { UserType } from "../UserTypes/userType";

export interface AuthContextData { 
  user: UserType;
  login: (user: UserLogData) => Promise<void>;
  logout: () => void;
  auth: (user: UserRegType) => Promise<void>;
  token: string;
}