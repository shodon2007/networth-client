import {useDispatch} from "react-redux";
import { AppDispatch } from "../../config/storeConfig/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
