interface LoginProps {
    email: string;
    password: string;
}


type loginFn = ({email, password}: LoginProps) => void;


const loginSubmit: loginFn = ({email, password}) => {
	console.log(email, password);

	return {
		refreshToken: "dsfkjsdkfjkl",
		email: "fsdfsdf",
		status: 200,
	};
};

export default loginSubmit;