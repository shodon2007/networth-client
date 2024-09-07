import {memo, useState} from "react";
import {useTranslation} from "react-i18next";
import DetailIcon from "src/shared/assets/DetailIcon.svg";
import Mailicon from "src/shared/assets/MailIcon.svg";
import Block from "src/shared/ui/Block/Block";
import Button, {ThemeButton} from "src/shared/ui/Button/Button";

import {useUserData} from "src/entities/user/hooks/useUserData";
import {ChangeEmailModal} from "src/features/Profile/ChangeEmail/";
import {ChangeAvatarModal} from "src/features/Profile/ChangeAvatar/";
import {ChangePasswordModal} from "src/features/Profile/ChangePassword/";
import {EditProfileModal} from "src/features/Profile/EditProfile/";

import {useUser} from "src/entities/user";
import getAvatarUrl from "src/shared/lib/getAvatar/getAvatar";
import cls from "./UserCardStyle.module.scss";

export const UserDataCard = memo(() => {
	const {isUserDataLoading} = useUser();
	const userData = useUserData();

	if (isUserDataLoading) {
		return <div>Загрузка профиля...</div>;
	}

	if (!userData) {
		return <div>Пожалуйста Зарегестрируйтесь</div>;
	}

	return (
		<div data-testid="user-data-card">
			<Block className={cls.userCard}>
				<div className={cls.userCardInfo}>
					<Avatar />

					<ul className={cls.userCardUserInfo}>
						<li className={cls.userCardName} data-testid="profile-fullname">
							{`${userData.name} ${userData.surname}`}
						</li>
						<li className={cls.userCardDetail} data-testid="profile-email">
							<img src={Mailicon} />
							{userData?.email}
						</li>
						<li className={cls.userCardDetail}>
							<img src={DetailIcon} alt="" />
							<h4>Detils</h4>
						</li>
					</ul>
				</div>
				<ModalButtons />
			</Block>
		</div>
	);
});

const Avatar = memo(() => {
	const userData = useUserData();
	const {t} = useTranslation();
	const [changeAvatarModalOpen, setChangeAvatarModalOpen] = useState(false);

	return (
		<div className={cls.avatar}>
			<img
				src={getAvatarUrl(userData.avatar)}
				alt="Avatar"
				className={cls.avatarImg}
			/>
			<div className={cls.avatarMenu}>
				<Button onClick={() => setChangeAvatarModalOpen(true)}>
					{t("profile.updateAvatar")}
				</Button>
			</div>
			{changeAvatarModalOpen ? (
				<ChangeAvatarModal close={() => setChangeAvatarModalOpen(false)} />
			) : null}
		</div>
	);
});

const ModalButtons = memo(() => {
	const [editModalOpen, setEditModalOpen] = useState(false);
	const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
	const [changeEmailModalOpen, setChangeEmailModalOpen] = useState(false);

	const {t} = useTranslation();

	return (
		<div className={cls.userCardButtons}>
			<Button
				data-testid="editProfileButton"
				theme={ThemeButton.SMALL}
				onClick={() => setEditModalOpen(true)}
			>
				{t("profile.editProfile")}
			</Button>
			<Button
				theme={ThemeButton.SMALL}
				data-testid="changePasswordButton"
				onClick={() => setChangePasswordModalOpen(true)}
			>
				{t("profile.editPassword")}
			</Button>
			<Button
				data-testid="changeEmailButton"
				theme={ThemeButton.SMALL}
				onClick={() => setChangeEmailModalOpen(true)}
			>
				{t("profile.editEmail")}
			</Button>
			{editModalOpen ? (
				<EditProfileModal close={() => setEditModalOpen(false)} />
			) : null}
			{changePasswordModalOpen ? (
				<ChangePasswordModal close={() => setChangePasswordModalOpen(false)} />
			) : null}
			{changeEmailModalOpen ? (
				<ChangeEmailModal close={() => setChangeEmailModalOpen(false)} />
			) : null}
		</div>
	);
});
