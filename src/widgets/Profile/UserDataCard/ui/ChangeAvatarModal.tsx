import {FC, useCallback, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {getUser} from "src/entities/User";
import cls from "./ChangeAvatar.module.scss";
import Modal from "src/shared/ui/Modal/Modal";
import SelectFileIcon from "src/shared/assets/SelectFileIcon.svg";
import {profileApi} from "src/entities/Profile";
import {toast} from "react-toastify";
import {userApi} from "src/entities";
import {useAppDispatch} from "src/shared/lib/store";
import {setUserInfo} from "src/entities/User/services/userSlice";
import Button, {ThemeButton} from "src/shared/ui/Button/Button";
import {useDropzone} from "react-dropzone";

interface EditUserModalProps {
	close: () => void;
	isOpen: boolean;
}

const ChangeAvatarModal: FC<EditUserModalProps> = ({close, isOpen}) => {
	const {user} = useSelector(getUser);
	const [changeAvatar] = profileApi.useFetchUploadAvatarMutation();

	const {refetch} = userApi.useFetchUserInfoQuery(user);
	const [file, setFile] = useState<File | null>(null);
	const imgRef = useRef<HTMLImageElement>(null);

	const onDrop = useCallback((files: File[]) => {
		setFile(files[0]);
		if (imgRef && imgRef.current) {
			imgRef.current.src = URL.createObjectURL(files[0]);
		}
	}, []);

	const {getRootProps, getInputProps, isDragActive} = useDropzone({
		onDrop,
		accept: {
			"image/*": [],
		},
	});

	const dispatch = useAppDispatch();

	if (!user) {
		return null;
	}

	const submit = () => {
		const formData = new FormData();
		if (file) {
			formData.append("file", file);
		}
		changeAvatar(formData).then(async (res) => {
			if ("error" in res) {
				return toast.error("Не удалось изменить фото профиля");
			}
			if ("data" in res && res.data.status === 200) {
				toast.success(res.data.message);
				const {data} = await refetch();
				if (data) {
					dispatch(setUserInfo(data));
				}
			}
		});
	};

	return (
		<Modal isOpen={isOpen} close={close}>
			<div {...getRootProps()} className={cls.body}>
				<input {...getInputProps()} />
				<div>
					<img src={SelectFileIcon} ref={imgRef} className={cls.img} />
				</div>
				{isDragActive ? (
					<p>Drop the files here ...</p>
				) : (
					<p>Drag and drop some files here, or click to select files</p>
				)}
				{file ? (
					<Button
						onClick={(e) => {
							e.stopPropagation();
							if (file) {
								submit();
							}
							close();
						}}
						theme={ThemeButton.SUBMIT_BUTTON}
					>
						Change avatar
					</Button>
				) : null}
				<Button
					onClick={(e) => {
						e.stopPropagation();
						close();
					}}
				>
					Cancel
				</Button>
			</div>
		</Modal>
	);
};

export default ChangeAvatarModal;
