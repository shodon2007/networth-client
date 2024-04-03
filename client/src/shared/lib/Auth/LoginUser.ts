import { useAuth } from "src/shared/context/AuthProvider/AuthProvider";
import { UserLogData } from "src/shared/types/UserTypes/UserLogType";

export const LoginUser = async (user: UserLogData) => {

  const auth = useAuth()

  const req = await fetch('/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
  
  const res = await req.json()
  if (!req.ok) return console.error(`Login is failed - ${res.msgErr}`);

  return (
    auth.token = res.token,
    auth.user = res.data
  )
}