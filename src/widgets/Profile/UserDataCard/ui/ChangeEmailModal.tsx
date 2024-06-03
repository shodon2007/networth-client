import {t} from "i18next";
import {AxiosResponse} from "axios";
import {FC, useState} from "react";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import {userApi} from "src/entities";
import {profileApi} from "src/entities/Profile";
import {getUser} from "src/entities/User";
import {setUserInfo} from "src/entities/User/services/userSlice";
import {ErrorResponseType} from "src/shared/types/response/responseType";
import {useAppDispatch} from "src/shared/lib/store";
import Block from "src/shared/ui/Block/Block";
import Button from "src/shared/ui/Button/Button";
import Divider from "src/shared/ui/Divider/Divider";
import Input, {InputSize} from "src/shared/ui/Input/Input";
import Modal from "src/shared/ui/Modal/Modal";
import {Title, TitleType} from "src/shared/ui/Title/Title";

import cls from "./UserCardStyle.module.scss";

interface ChangeEmailModalProps {
	close: () => void;
	isOpen: boolean;
}

const ChangeEmailModal: FC<ChangeEmailModalProps> = ({close, isOpen}) => {
	const {user} = useSelector(getUser);
	const [sendCodeToServer] = profileApi.useFetchSendCodeMutation();
	const [changeEmailInServer] = profileApi.useFetchChangeEmailMutation();
	const {refetch} = userApi.useFetchUserInfoQuery(user);
	const dispatch = useAppDispatch();
	const [newEmail, setNewEmail] = useState("");
	const [code, setCode] = useState("");
	if (!user) {
		return null;
	}

	const sendCode = () => {
		sendCodeToServer({
			email: newEmail,
		}).then((res) => {
			if ("error" in res) {
				const errorApi = res.error as AxiosResponse<ErrorResponseType>;
				return toast.error(errorApi.data.message ?? "Ошибка");
			}
			toast.success(res.data.message);
		});
	};

	const changeEmail = () => {
		changeEmailInServer({
			code,
			email: newEmail,
		}).then(async (res) => {
			if ("error" in res) {
				const errorApi = res.error as AxiosResponse<ErrorResponseType>;
				return toast.error(errorApi.data.message ?? "Ошибка");
			}
			toast.success(res.data.message);
			const {data} = await refetch();
			if (data) {
				dispatch(setUserInfo(data));
			}
			close();
		});
	};

	return (
		<Modal isOpen={isOpen} close={close}>
			<Block>
				<Title type={TitleType.small}>{t("profile.editEmail")}</Title>
				<Divider />
				<form className={cls.inputs} onSubmit={(e) => e.preventDefault()}>
					<span>
						{t("profile.editEmailPrevText")}
						<span style={{fontWeight: "bold"}}>{user.email}</span>
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
