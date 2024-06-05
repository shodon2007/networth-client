import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useUser} from "src/entities/user";
import DetailIcon from "src/shared/assets/DetailIcon.svg";
import Mailicon from "src/shared/assets/MailIcon.svg";
import Block from "src/shared/ui/Block/Block";
import Button, {ThemeButton} from "src/shared/ui/Button/Button";

import ChangeAvatarModal from "./ChangeAvatarModal";
import ChangeEmailModal from "./ChangeEmailModal";
import ChangePasswordModal from "./ChangePasswordModal";
import EditUserModal from "./EditUserModal";
import cls from "./UserCardStyle.module.scss";

export const UserDataCard = () => {
	const {data: userData, isAuth} = useUser();
	const [editModalOpen, setEditModalOpen] = useState(false);
	const [changeAvatarModalOpen, setChangeAvatarModalOpen] = useState(false);
	const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
	const [changeEmailModalOpen, setChangeEmailModalOpen] = useState(false);
	const {t} = useTranslation();

	if (!userData || !isAuth) {
		return <div>Пожалуйста Зарегестрируйтесь</div>;
	}

	return (
		<Block className={cls.UserCard}>
			<div className={cls.UserCard__info}>
				<div className={cls.avatar}>
					<img src={userData.avatar} alt="Avatar" className={cls.avatar__img} />
					<div className={cls.avatar__menu}>
						<Button onClick={() => setChangeAvatarModalOpen(true)}>
							{t("profile.updateAvatar")}
						</Button>
					</div>
				</div>

				<ul className={cls.UserCard__userInfo}>
					<li className={cls.UserCard__name}>
						{`${userData.name} ${userData.surname}`}
					</li>
					<li className={cls.UserCard__detail}>
						<img src={Mailicon} />
						{userData?.email}
					</li>
					<li className={cls.UserCard__detail}>
						<img src={DetailIcon} alt="" />
						<h4>Detils</h4>
					</li>
				</ul>
			</div>
			<div className={cls.UserCard__buttons}>
				<Button
					theme={ThemeButton.SMALL}
					onClick={() => setEditModalOpen(true)}
				>
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
			</div>
			<EditUserModal
				isOpen={editModalOpen}
				close={() => setEditModalOpen(false)}
			/>
			<ChangeAvatarModal
				isOpen={changeAvatarModalOpen}
				close={() => setChangeAvatarModalOpen(false)}
			/>
			<ChangePasswordModal
				isOpen={changePasswordModalOpen}
				close={() => setChangePasswordModalOpen(false)}
			/>
			<ChangeEmailModal
				isOpen={changeEmailModalOpen}
				close={() => setChangeEmailModalOpen(false)}
			/>
		</Block>
	);
};
