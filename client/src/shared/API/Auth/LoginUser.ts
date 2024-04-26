<<<<<<< HEAD:client/src/shared/lib/Auth/LoginUser.ts
import {useAuth} from "src/shared/context/AuthProvider/AuthProvider";
import {UserLogData} from "src/shared/types/auth/loginTypes";

export const LoginUser = async (user: UserLogData) => {
	const auth = useAuth();

	const req = await fetch("/api", {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(user),
	});

	const res = await req.json();
	if (!req.ok) return console.error(`Login is failed - ${res.msgErr}`);

	return (auth.token = res.token), (auth.user = res.data);
};
=======
import { UserLogData } from "src/shared/types/UserTypes/UserLogType";
import { UserType } from "src/shared/types/UserTypes/userType";

export const LoginUser = async (user: UserLogData): Promise<void | {user: UserType, token: string}> => {


  const req = await fetch('/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })

  // * Overthing typisation in this code

  const res = await req.json()
  if (!req.ok) return console.error(`Login is failed - ${res.msgErr}`);

  return {
    user: res.recievedUser,
    token: res.recievedToken,
  }
}
>>>>>>> 29a9f31aa60bc7666e5c63b6708740f05ec3009d:client/src/shared/API/Auth/LoginUser.ts
