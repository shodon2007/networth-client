import {useAppSelector} from "src/shared/lib/store";
import {getUser} from "../services/selectors";

export const useUser = () => {
	return useAppSelector(getUser);
};
