import {useDispatch} from "react-redux";
import {AppDispatch} from "src/app/providers/storeProvider";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
