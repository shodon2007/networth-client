import {FC} from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import {useGetUser} from "src/entities/user";
import Block from "src/shared/ui/Block/Block";
import Button from "src/shared/ui/Button/Button";
import Divider from "src/shared/ui/Divider/Divider";
import Input, {InputSize} from "src/shared/ui/Input/Input";
import Modal from "src/shared/ui/Modal/Modal";
import {Title, TitleType} from "src/shared/ui/Title/Title";

import {useUpdateUserInfo} from "src/entities/user/hooks/useUpdateUserInfo";
import {UserInfoTypes} from "src/shared/types/user/userInfoTypes";
import cls from "./UserCardStyle.module.scss";

interface EditUserModalProps {
	close: () => void;
	isOpen: boolean;
}

const EditUserModal: FC<EditUserModalProps> = ({close, isOpen}) => {
	const {data: userData} = useGetUser();
	const updateUserInfo = useUpdateUserInfo(close).mutate;
	const {t} = useTranslation();
	const {control, handleSubmit} = useForm<Partial<UserInfoTypes>>({
		defaultValues: {
			name: userData?.name,
			surname: userData?.surname,
		},
	});

	const submit: SubmitHandler<Partial<UserInfoTypes>> = (form) => {
		updateUserInfo(form);
	};

	return (
		<Modal isOpen={isOpen} close={close}>
			<Block>
				<Title type={TitleType.small}>{t("profile.editProfile")}</Title>
				<Divider />
				<form onSubmit={handleSubmit(submit)} className={cls.inputs}>
					<Controller
						control={control}
						name="name"
						render={({field}) => {
							return (
								<Input
									placeholder={t("profile.editName")}
									fontSize={InputSize.small}
									{...field}
									placeholderOutside
								/>
							);
						}}
					/>
					<Controller
						control={control}
						name="surname"
						render={({field}) => {
							return (
								<Input
									placeholder={t("profile.editSurname")}
									fontSize={InputSize.small}
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

export default EditUserModal;
