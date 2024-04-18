import {useSelector} from "react-redux";
import {RootState} from "src/app/providers/storeProvider";

export const useAppSelector = useSelector.withTypes<RootState>();
