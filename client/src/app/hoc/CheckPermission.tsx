import { FC, ReactNode } from "react";

interface CheckPermissionProps {
    children: ReactNode;
}

const CheckPermission: FC<CheckPermissionProps> = ({children}) => {
    return children;
}

export default CheckPermission;