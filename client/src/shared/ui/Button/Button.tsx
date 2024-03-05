import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
    
}

const Button: FC<ButtonProps> = ({children}) => {
    return <div className={cls.Button}>{children}</div>
}


export default Button;