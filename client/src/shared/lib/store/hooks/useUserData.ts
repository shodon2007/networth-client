import { useAppSelector } from "../selector/useAppSelector"


export const useUserData = () => {
  const user = useAppSelector(state => state.user.user)
  return user

}