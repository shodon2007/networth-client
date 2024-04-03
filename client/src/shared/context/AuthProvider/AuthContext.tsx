import { createContext } from "react";
import { AuthContextData } from "src/shared/types/contextTypes/AuthContextType";

export const AuthContext = createContext<AuthContextData >({} as AuthContextData);