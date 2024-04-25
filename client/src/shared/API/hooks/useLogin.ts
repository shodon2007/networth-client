import { useDispatch } from "react-redux";
import { login } from "src/shared/lib/Auth/helper/AuthSlice";
import { useAppDispatch } from "src/shared/lib/Redux/model";
import { UserLogData } from "src/shared/types/UserTypes/UserLogType";

// It's need in refining.
// export function useLogin(user: UserLogData) {
//   return useDispatch(login())
// }