import { useAppSelector } from "../selector/useAppSelector";

export const useUser = () => {
	const user = useAppSelector(state => state.user);
	return user;
};