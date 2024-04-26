import { useAppSelector } from "../../Redux/model";

export const getAuth = () => useAppSelector(staet => staet.auth)