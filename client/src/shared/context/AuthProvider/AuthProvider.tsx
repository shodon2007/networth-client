import {ReactNode, useEffect, useContext, useState} from "react";
import {AuthContext} from "./AuthContext";
import {RegistrationUser} from "src/shared/lib/Auth/Registration";
import {AuthContextData} from "src/shared/types/context/AuthContextType";
import {LoginUser} from "src/shared/lib/Auth/LoginUser";
import {UserRegType} from "src/shared/types/auth/registrationTypes";
import {LogoutUser} from "src/shared/lib/Auth/LogoutUser";

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
	const [user, setUser] = useState<UserRegType | undefined>(undefined);

	useEffect(() => {});

	const provideValues: AuthContextData = {
		user,
		auth: RegistrationUser,
		login: LoginUser,
		logout: LogoutUser,
		token: "",
	};

	return (
		<AuthContext.Provider value={provideValues}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
