import {UserRegType} from "src/shared/types/auth/registrationTypes";
import {useAuth} from "src/shared/context/AuthProvider/AuthProvider";

export const RegistrationUser = async (user: UserRegType) => {
	const auth = useAuth();

	const req = await fetch("/", {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(user),
	});

	const res = await req.json();
	if (!req.ok) return console.error(`Registration is failed - ${res.msgErr}`);

	return (auth.token = res.token), (auth.user = res.user);
};
