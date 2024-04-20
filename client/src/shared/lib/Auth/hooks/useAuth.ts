import { AuthData } from "src/shared/types/AuthTypes/AuthType";
import { getAuth } from "../helper/getAuth";
import { UseDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../Redux/model";
import { RootState } from "../../Redux/config/storeConfig/store";



export const useAuth = (): AuthData => {
  
  const { user, token } = getAuth()

  
  return {
    user,
    token
  }
}
