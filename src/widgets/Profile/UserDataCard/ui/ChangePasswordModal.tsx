import {t} from "i18next";
import {FC} from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import {userApi} from "src/entities";
import {ChangePasswordTypes, profileApi} from "src/entities/Profile";
import {getUser} from "src/entities/User";
import {setUserInfo} from "src/entities/User/services/userSlice";
import {useAppDispatch} from "src/shared/lib/store";
import {ResponseErrorType} from "src/shared/types/response/responseType";
import Block from "src/shared/ui/Block/Block";
import Divider from "src/shared/ui/Divider/Divider";
import Input, {InputSize} from "src/shared/ui/Input/Input";
import Modal from "src/shared/ui/Modal/Modal";
import {Title, TitleType} from "src/shared/ui/Title/Title";
import Button from "src/shared/ui/Button/Button";

import cls from "./UserCardStyle.module.scss";

interface ChangePasswordModalProps {
	close: () => void;
	isOpen: boolean;
}

const ChangePasswordModal: FC<ChangePasswordModalProps> = ({close, isOpen}) => {
	const {user} = useSelector(getUser);
	const [changePassword] = profileApi.useFetchChangePasswordMutation();
	const {refetch} = userApi.useFetchUserInfoQuery(user);
	const dispatch = useAppDispatch();
	const {control, handleSubmit} = useForm<ChangePasswordTypes>({
		defaultValues: {
			oldPassword: "",
			newPassword: "",
		},
	});

	if (!user) {
		return null;
	}

	const submit: SubmitHandler<ChangePasswordTypes> = (form) => {
		changePassword(form).then(async (res) => {
			if ("error" in res) {
				const apiError = res.error as ResponseErrorType;
				console.log(apiError);
				return toast.error(apiError.data.message, {
					autoClose: 2000,
				});
			}

			if (res.data.status === 200) {
				close();
				const {data} = await refetch();
				if (data) {
					dispatch(setUserInfo(data));
				}
				return toast.success(res.data.message, {
					autoClose: 2000,
				});
			} else {
				return toast.error(res.data.message, {
					autoClose: 2000,
				});
			}
		});
	};

	return (
		<Modal isOpen={isOpen} close={close}>
			<Block>
				<Title type={TitleType.small}>{t("profile.editPassword")}</Title>
				<Divider />
				<form onSubmit={handleSubmit(submit)} className={cls.inputs}>
					<Controller
						control={control}
						name="oldPassword"
						render={({field}) => {
							return (
								<Input
									fontSize={InputSize.small}
									placeholder={t("profile.oldPassword")}
									type="password"
									{...field}
									placeholderOutside
								/>
							);
						}}
					/>
					<Controller
						control={control}
						name="newPassword"
						render={({field}) => {
							return (
								<Input
									fontSize={InputSize.small}
									placeholder={t("profile.newPassword")}
									type="password"
									{...field}
									placeholderOutside
								/>
							);
						}}
					/>
					<Button type="submit">{t("profile.editButton")}</Button>
				</form>
			</Block>
		</Modal>
	);
};

export default ChangePasswordModal;
