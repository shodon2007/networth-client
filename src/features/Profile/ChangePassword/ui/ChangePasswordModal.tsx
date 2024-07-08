import {t} from "i18next";
import {FC, useEffect} from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {ChangePasswordTypes} from "src/entities/user/model/profileTypes";
import Block from "src/shared/ui/Block/Block";
import Divider from "src/shared/ui/Divider/Divider";
import Input, {InputSize} from "src/shared/ui/Input/Input";
import Modal from "src/shared/ui/Modal/Modal";
import {Title, TitleType} from "src/shared/ui/Title/Title";
import Button from "src/shared/ui/Button/Button";
import {useChangePassword} from "src/entities/user/hooks/useChangePassword";

import cls from "./ChangePasswordModal.module.scss";

interface ChangePasswordModalProps {
	close: () => void;
}

const ChangePasswordModal: FC<ChangePasswordModalProps> = ({close}) => {
	const changePasswordFn = useChangePassword(onChangeSuccess).mutate;
	const {control, handleSubmit, reset} = useForm<ChangePasswordTypes>({
		defaultValues: {
			oldPassword: "",
			newPassword: "",
		},
	});

	useEffect(() => {
		return () => {
			reset();
		};
	}, []);

	const submit: SubmitHandler<ChangePasswordTypes> = (form) => {
		changePasswordFn(form);
	};

	function onChangeSuccess() {
		close();
		reset();
	}

	return (
		<div data-testid="changePasswordModal">
			<Modal isOpen={true} close={close}>
				<Block>
					<Title type={TitleType.SMALL}>{t("profile.editPassword")}</Title>
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
						<div className={cls.modalBottomButtons}>
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

export default ChangePasswordModal;
