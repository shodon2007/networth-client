import cls from "./SettingsButton.module.scss";
import classNames from "src/shared/lib/classNames";

interface SettingsButtonProps {
	border?: boolean;
}

export const SettingsButton = ({border}: SettingsButtonProps) => {
	return (
		<button
			className={classNames(cls.Button, {[cls.Button__border]: !!border}, [])}
		>
			<div className={cls.Button__point} />
			<div className={cls.Button__point} />
			<div className={cls.Button__point} />
		</button>
	);
};
