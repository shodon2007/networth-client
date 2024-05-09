import { useAuth } from "src/shared/context/AuthProvider/AuthProvider"

export const LogoutUser = () => {
  const auth = useAuth()
  return (
    auth.user === undefined,
    auth.token === ''
  );
}