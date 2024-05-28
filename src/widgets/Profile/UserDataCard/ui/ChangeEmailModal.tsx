import {FC, useState} from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {getUser} from "src/entities/User";
import cls from "./UserCardStyle.module.scss";
import Block from "src/shared/ui/Block/Block";
import Divider from "src/shared/ui/Divider/Divider";
import Input, {InputSize} from "src/shared/ui/Input/Input";
import Modal from "src/shared/ui/Modal/Modal";
import {Title, TitleType} from "src/shared/ui/Title/Title";
import Button from "src/shared/ui/Button/Button";
import {ChangePasswordTypes, profileApi} from "src/entities/Profile";
import {toast} from "react-toastify";
import {userApi} from "src/entities";
import {useAppDispatch} from "src/shared/lib/store";
import {setUserInfo} from "src/entities/User/services/userSlice";
import {ResponseErrorType} from "src/shared/types/response/responseType";
import {ApiError} from "src/shared/types/error/errorTypes";

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
				const errorApi = res.error as ApiError;
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
				const errorApi = res.error as ApiError;
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
				<Title type={TitleType.small}>Изменить почту</Title>
				<Divider />
				<form className={cls.inputs} onSubmit={(e) => e.preventDefault()}>
					<span>
						Ваша текущаю почта{" "}
						<span style={{fontWeight: "bold"}}>{user.email}</span>
					</span>
					<span>
						Внимание, если много раз будете тыкать sendCode, то вам пизда от
						админов т.к. мы в спам попадем
					</span>
					<div style={{display: "flex", gap: "10px"}}>
						<Input
							fontSize={InputSize.small}
							placeholder="Enter new Email"
							style={{flex: "0 1 auto"}}
							value={newEmail}
							onChange={(e) => setNewEmail(e.target.value)}
						/>
						<Button onClick={sendCode}>Send code</Button>
					</div>
					<Input
						fontSize={InputSize.small}
						placeholder="Enter code"
						value={code}
						onChange={(e) => setCode(e.target.value)}
					/>
					<Button onClick={changeEmail}>Изменить</Button>
				</form>
			</Block>
		</Modal>
	);
};

export default ChangeEmailModal;
