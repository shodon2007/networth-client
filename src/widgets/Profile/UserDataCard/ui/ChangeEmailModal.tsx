import {t} from "i18next";
import {FC, useState} from "react";
import {useUser} from "src/entities/user";
import Block from "src/shared/ui/Block/Block";
import Button from "src/shared/ui/Button/Button";
import Divider from "src/shared/ui/Divider/Divider";
import Input, {InputSize} from "src/shared/ui/Input/Input";
import Modal from "src/shared/ui/Modal/Modal";
import {Title, TitleType} from "src/shared/ui/Title/Title";

import {
	useChangeEmail,
	useSendCode,
} from "src/entities/user/hooks/useChangeEmail";

import cls from "./UserCardStyle.module.scss";

interface ChangeEmailModalProps {
	close: () => void;
}

const ChangeEmailModal: FC<ChangeEmailModalProps> = ({close}) => {
	const {data: userData} = useUser();
	const [newEmail, setNewEmail] = useState("");
	const [code, setCode] = useState("");
	const changeEmailFn = useChangeEmail(onSuccess).mutate;
	const sendCodeFn = useSendCode().mutate;

	console.log("перерисовка emailа");

	if (!userData) {
		return null;
	}

	const sendCode = () => {
		sendCodeFn({
			email: newEmail,
		});
	};

	function onSuccess() {
		close();
		setNewEmail("");
		setCode("");
	}

	const changeEmail = () => {
		changeEmailFn({
			code: code,
			email: newEmail,
		});
	};

	return (
		<Modal isOpen={true} close={close}>
			<Block>
				<Title type={TitleType.SMALL}>{t("profile.editEmail")}</Title>
				<Divider />
				<form className={cls.inputs} onSubmit={(e) => e.preventDefault()}>
					<span>
						{t("profile.editEmailPrevText")}
						<span style={{fontWeight: "bold"}}>{userData.email}</span>
					</span>
					<div style={{display: "flex", gap: "10px"}}>
						<Input
							fontSize={InputSize.small}
							placeholder={t("profile.newEmailInput")}
							style={{flex: "0 1 auto"}}
							value={newEmail}
							onChange={(e) => setNewEmail(e.target.value)}
						/>
						<Button onClick={sendCode}>{t("profile.sendCode")}</Button>
					</div>
					<Input
						fontSize={InputSize.small}
						placeholder={t("profile.codeInput")}
						value={code}
						onChange={(e) => setCode(e.target.value)}
					/>
					<Button onClick={changeEmail}>{t("profile.editButton")}</Button>
				</form>
			</Block>
		</Modal>
	);
};

export default ChangeEmailModal;
