import { UserRegType } from "src/shared/types/UserTypes/UserRegType";

import { UserType } from "src/shared/types/UserTypes/userType";

export const RegistrationUser = async (user: UserRegType): Promise<void | UserType> => {

  const req = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })

  const res = await req.json()
  if (!req.ok) return console.error(`Registration is failed - ${res.msgErr}`);

  return res as UserType
}