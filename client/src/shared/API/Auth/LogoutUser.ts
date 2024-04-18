import { useAuth } from "src/shared/context/AuthProvider/useAuth"

export const LogoutUser = () => {
  const auth = useAuth()
  return (
    auth.user === undefined,
    auth.token === ''
  );
}