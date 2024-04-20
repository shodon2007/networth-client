import { useAuth } from "src/shared/context/AuthProvider/useAuth"
import { useAppDispatch, useAppSelector } from "src/shared/lib/Redux/model"
import { UserType } from "src/shared/types/UserTypes/userType"

// TODO: Create the zeroing of user and token in the auth state

export const LogoutUser = () => {
  const { user, token } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  return (
    dispatch()
  );
}