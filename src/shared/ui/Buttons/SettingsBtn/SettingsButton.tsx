import classNames from "src/shared/lib/classNames";

import cls from "./SettingsButton.module.scss";

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
