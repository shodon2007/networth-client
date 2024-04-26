import {useSelector} from "react-redux";
import { RootState } from "../../config/storeConfig/store";

export const useAppSelector = useSelector.withTypes<RootState>();
