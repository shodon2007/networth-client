import {useAppSelector} from "src/shared/lib/store";
import cls from "./UserCardStyle.module.scss";
import {getUser} from "src/entities/User";
import DetailIcon from "src/shared/assets/DetailIcon.svg";
import Mailicon from "src/shared/assets/MailIcon.svg";
import Button, {ThemeButton} from "src/shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import Block from "src/shared/ui/Block/Block";

import EditUserModal from "./EditUserModal";
import {useState} from "react";
import ChangeAvatarModal from "./ChangeAvatarModal";
import ChangePasswordModal from "./ChangePasswordModal";
import ChangeEmailModal from "./ChangeEmailModal";
// import { useAppSelector } from 'src/shared/lib/Redux/model'
// import { MBtn } from "src/shared/ui/Buttons/LevelsBtn/mBtn/MBtn"

export const UserDataCard = () => {
	const {user, isAuth} = useAppSelector(getUser);
	const [editModalOpen, setEditModalOpen] = useState(false);
	const [changeAvatarModalOpen, setChangeAvatarModalOpen] = useState(false);
	const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
	const [changeEmailModalOpen, setChangeEmailModalOpen] = useState(false);
	const {t} = useTranslation();

	if (!user || !isAuth) {
		return <div>Пожалуйста Зарегестрируйтесь</div>;
	}

	// TODO: create a capability change user's data

	return (
		// Add displaying user's data
		<Block className={cls.UserCard}>
			<div className={cls.UserCard__info}>
				<div className={cls.avatar}>
					<img src={user.avatar} alt="Avatar" className={cls.avatar__img} />
					<div className={cls.avatar__menu}>
						<Button onClick={() => setChangeAvatarModalOpen(true)}>
							Обновить фотографию
						</Button>
					</div>
				</div>

				<ul className={cls.UserCard__userInfo}>
					<li className={cls.UserCard__name}>
						{`${user.name} ${user.surname}`}
					</li>
					<li className={cls.UserCard__detail}>
						<img src={Mailicon} />
						{user?.email}
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
					Изменить профиль
				</Button>
				<Button
					theme={ThemeButton.SMALL}
					onClick={() => setChangePasswordModalOpen(true)}
				>
					Изменить Пароль
				</Button>
				<Button
					theme={ThemeButton.SMALL}
					onClick={() => setChangeEmailModalOpen(true)}
				>
					Изменить Почту
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
