import {memo, useState} from "react";
import DetailIcon from "src/shared/assets/DetailIcon.svg";
import Mailicon from "src/shared/assets/MailIcon.svg";
import Block from "src/shared/ui/Block/Block";
import Button, {ThemeButton} from "src/shared/ui/Button/Button";

import {useUserData} from "src/entities/user/hooks/useUserData";
import ChangeAvatarModal from "./ChangeAvatarModal";
import ChangeEmailModal from "./ChangeEmailModal";
import ChangePasswordModal from "./ChangePasswordModal";
import EditUserModal from "./EditUserModal";
import cls from "./UserCardStyle.module.scss";
import {useUser} from "src/entities/user";
import {useTranslation} from "react-i18next";

export const UserDataCard = memo(() => {
	const {isUserDataLoading} = useUser();
	const userData = useUserData();

	if (isUserDataLoading) {
		return <div>Загрузка профиля...</div>;
	}

	if (!userData) {
		return <div>Пожалуйста Зарегестрируйтесь</div>;
	}
	console.log("жесткий ререндер");

	return (
		<Block className={cls.userCard}>
			<div className={cls.userCardInfo}>
				<Avatar />

				<ul className={cls.userCardUserInfo}>
					<li className={cls.userCardName}>
						{`${userData.name} ${userData.surname}`}
					</li>
					<li className={cls.userCardDetail}>
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
	);
});

const Avatar = memo(() => {
	const userData = useUserData();
	const {t} = useTranslation();
	const [changeAvatarModalOpen, setChangeAvatarModalOpen] = useState(false);

	console.log("avatarMenu rerender");

	return (
		<div className={cls.avatar}>
			<img src={userData.avatar} alt="Avatar" className={cls.avatarImg} />
			<div className={cls.avatarMenu}>
				<Button onClick={() => setChangeAvatarModalOpen(true)}>
					{t("profile.updateAvatar")}
				</Button>
			</div>
			<ChangeAvatarModal
				isOpen={changeAvatarModalOpen}
				close={() => setChangeAvatarModalOpen(false)}
			/>
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
			<Button theme={ThemeButton.SMALL} onClick={() => setEditModalOpen(true)}>
				{t("profile.editProfile")}
			</Button>
			<Button
				theme={ThemeButton.SMALL}
				onClick={() => setChangePasswordModalOpen(true)}
			>
				{t("profile.editPassword")}
			</Button>
			<Button
				theme={ThemeButton.SMALL}
				onClick={() => setChangeEmailModalOpen(true)}
			>
				{t("profile.editEmail")}
			</Button>
			{editModalOpen ? (
				<EditUserModal close={() => setEditModalOpen(false)} />
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
