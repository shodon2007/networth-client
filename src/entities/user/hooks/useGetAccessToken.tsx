import {useAppSelector} from "src/shared/lib/store";
import {getAccessToken} from "../services/selectors";

export const useUserAccessToken = () => {
	return useAppSelector(getAccessToken);
};
