import {lazy} from "react";
const MessengerPageAsync = lazy(async () => import("./MessengerPage"));
export default MessengerPageAsync;
