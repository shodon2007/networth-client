import { UserRegType } from "src/shared/types/UserTypes/UserRegType";

import { UserType } from "src/shared/types/UserTypes/userType";

export const RegistrationUser = async (user: UserRegType): Promise<void | {user: UserType, token: string}> => {

  const req = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })

  // * Overthing typisation in this code

  const res = await req.json()
  if (!req.ok) throw new Error(`Registration is failed - ${res.msgErr}`);


  return {
    user: res.user as UserType,
    token: res.token as string,
  }
}