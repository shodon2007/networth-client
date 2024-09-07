import cls from "MessengerInput.module.scss";

interface MessengerInputProps {
	text: string;
}

export const MessengerInput = ({text}: MessengerInputProps) => {
	return <input placeholder={text} className={cls.input}></input>;
};
