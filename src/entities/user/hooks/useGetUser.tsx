import {useAppSelector} from "src/shared/lib/store";
import {getUser} from "../services/selectors";

export const useGetUser = () => {
	return useAppSelector(getUser);
};
