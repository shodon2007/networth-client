
import { useAppDispatch } from "src/shared/lib/Redux/model"

import { logout } from "src/shared/lib/Auth/helper/AuthSlice"

// TODO: Create the zeroing of user and token in the auth state

export const LogoutUser = () => {
  const dispatch = useAppDispatch()
  return dispatch(logout());
}