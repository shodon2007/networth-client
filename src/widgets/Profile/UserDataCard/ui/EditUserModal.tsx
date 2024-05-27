import {FC} from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {UserType, getUser} from "src/entities/User";
import cls from "./UserCardStyle.module.scss";
import Block from "src/shared/ui/Block/Block";
import Divider from "src/shared/ui/Divider/Divider";
import Input, {InputSize} from "src/shared/ui/Input/Input";
import Modal from "src/shared/ui/Modal/Modal";
import {Title, TitleType} from "src/shared/ui/Title/Title";
import Button from "src/shared/ui/Button/Button";
import {profileApi} from "src/entities/Profile";
import {toast} from "react-toastify";
import {userApi} from "src/entities";
import {useAppDispatch} from "src/shared/lib/store";
import {setUserInfo} from "src/entities/User/services/userSlice";

interface EditUserModalProps {
	close: () => void;
	isOpen: boolean;
}

const EditUserModal: FC<EditUserModalProps> = ({close, isOpen}) => {
	const {user} = useSelector(getUser);
	const [changeUserData] = profileApi.useFetchChangeUserMutation();
	const {refetch} = userApi.useFetchUserInfoQuery(user);
	const dispatch = useAppDispatch();
	const {control, handleSubmit} = useForm<UserType>({
		defaultValues: {
			name: user?.name,
			surname: user?.surname,
		},
	});

	if (!user) {
		return null;
	}

	const submit: SubmitHandler<UserType> = (form) => {
		changeUserData({...form, id: user.id}).then(async (res) => {
			if ("error" in res) {
				return toast.error("Неизвестная ошибка", {
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
				<Title type={TitleType.small}>Изменить профиль</Title>
				<Divider />
				<form onSubmit={handleSubmit(submit)} className={cls.inputs}>
					<Controller
						control={control}
						name="name"
						render={({field}) => {
							return (
								<Input
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
									fontSize={InputSize.small}
									{...field}
									placeholderOutside
								/>
							);
						}}
					/>
					<Button type="submit">Изменить</Button>
				</form>
			</Block>
		</Modal>
	);
};

export default EditUserModal;
