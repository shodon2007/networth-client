import {createContext} from "react";
import {AuthContextData} from "src/shared/types/context/AuthContextType";

export const AuthContext = createContext<AuthContextData>(
	{} as AuthContextData,
);
