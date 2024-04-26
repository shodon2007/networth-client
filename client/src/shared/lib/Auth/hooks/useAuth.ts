import { AuthData } from "src/shared/types/AuthTypes/AuthType";
import { getAuth } from "../helper/getAuth";

export const useAuth = (): AuthData => {

  const auth = getAuth() 

  return auth
}
