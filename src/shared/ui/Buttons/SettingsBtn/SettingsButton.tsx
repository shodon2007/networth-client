import classNames from "src/shared/lib/classNames";

import cls from "./SettingsButton.module.scss";

interface SettingsButtonProps {
	border?: boolean;
}

export const SettingsButton = ({border}: SettingsButtonProps) => {
	return (
		<button
			className={classNames(cls.button, {[cls.button__border]: !!border}, [])}
		>
			<div className={cls.button__point} />
			<div className={cls.button__point} />
			<div className={cls.button__point} />
		</button>
	);
};
