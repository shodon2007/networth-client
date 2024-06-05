import {useAppSelector} from "src/shared/lib/store";
import {getUserData} from "../services/selectors";

export const useUserData = () => {
	return useAppSelector(getUserData);
};
