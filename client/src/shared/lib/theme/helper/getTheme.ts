import { RootState } from "../../Redux/config/storeConfig/store";

export const getTheme = (state: RootState) => {
  return state.theme.theme
}