import { createContext } from "react";
import { AuthContextData } from "src/shared/types/contextTypes/AuthContextType";


// Create the context as the @AuthContext type
export const AuthContext = createContext<AuthContextData >({} as AuthContextData);  