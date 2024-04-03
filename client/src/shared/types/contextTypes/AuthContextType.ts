import { UserLogData } from "../UserTypes/UserLogType";
import { UserRegType } from "../UserTypes/UserRegType";

export interface AuthContextData { 
  user?: UserRegType;
  login: (user: UserLogData) => Promise<void>;
  logout: () => void;
  auth: (user: UserRegType) => Promise<void>;
  token: string;
}