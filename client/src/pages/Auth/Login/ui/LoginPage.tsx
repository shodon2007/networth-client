import { FC } from "react";
import LoginWidget from "src/widgets/ui/auth/ui/LoginWidget";


const LoginPage: FC = () => {

	// It's incorrect to write any other code in page folder
	// exclude the widgets in our proejct that is wrong
	return (
		<LoginWidget />
	);
};

export default LoginPage;
