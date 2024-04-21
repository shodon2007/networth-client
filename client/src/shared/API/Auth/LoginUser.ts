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