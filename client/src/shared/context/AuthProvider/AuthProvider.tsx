import { ReactNode, useEffect, useContext } from "react"
import { AuthContext } from "./AuthContext";
import { AuthSubmit } from "src/features/Auth";
import { LoginSubmit } from "src/features/Auth";

interface AuthProviderProps { children: ReactNode }

export const AuthProvider = ({ children }: AuthProviderProps) => {
  
  useEffect(() => {

  })

  return (
    <AuthContext.Provider value={}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => { 
  return useContext(AuthContext);
}