import {FC, FormEventHandler, ReactNode} from "react";

interface FormProps { 
  children: ReactNode,
  onSubmit: FormEventHandler<HTMLFormElement>
}
const AuthForm: FC<FormProps> = ({children, onSubmit, ...rest}) => {
  
	return (
		<form onSubmit={onSubmit} {...rest}>
			{children}
		</form>
	);
};

export default AuthForm;