import { createContext } from "react";

type User = {
  name: string;
  email: string;
  password: string;
  doublePassword: string;
  phoneNumber: string;
}

type LogUser = { email: string; password: string }

interface AuthContextData { 
  user: User;
  login: (user: LogUser) => Promise<void>;
  logout: () => void;
  auth: (user: User) => Promise<void>;
  token: string;
}

export const AuthContext = createContext<AuthContextData >({} as AuthContextData);