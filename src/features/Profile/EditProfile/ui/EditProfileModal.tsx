import {FC} from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import {useUser} from "src/entities/user";
import Block from "src/shared/ui/Block/Block";
import Button from "src/shared/ui/Button/Button";
import Divider from "src/shared/ui/Divider/Divider";
import Input, {InputSize} from "src/shared/ui/Input/Input";
import Modal from "src/shared/ui/Modal/Modal";
import {Title, TitleType} from "src/shared/ui/Title/Title";

import {useUpdateUserInfo} from "src/entities/user/hooks/useUpdateUserInfo";
import {UserInfoTypes} from "src/shared/types/user/userInfoTypes";

import cls from "./EditProfileModal.module.scss";

interface EditUserModalProps {
	close: () => void;
}

const EditProfileModal: FC<EditUserModalProps> = ({close}) => {
	const {data: userData} = useUser();

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
		<div data-testid="editUserModal">
			<Modal isOpen={true} close={close}>
				<Block>
					<Title type={TitleType.SMALL}>{t("profile.editProfile")}</Title>
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
						<div className={cls.modalButtomButtons}>
							<Button type="submit">{t("profile.editButton")}</Button>
							<Button
								onClick={() => close()}
								data-testid="profile-cancel-button"
							>
								{t("profile.cancelButton")}
							</Button>
						</div>
					</form>
				</Block>
			</Modal>
		</div>
	);
};

export default EditProfileModal;
