import {FC, useCallback, useRef, useState} from "react";
import {useDropzone} from "react-dropzone";
import {useTranslation} from "react-i18next";
import SelectFileIcon from "src/shared/assets/SelectFileIcon.svg";
import {useChangeAvatar} from "src/entities/user/hooks/useChangeAvatar";
import Button, {ThemeButton} from "src/shared/ui/Button/Button";
import Modal from "src/shared/ui/Modal/Modal";

import cls from "./ChangeAvatar.module.scss";

interface EditUserModalProps {
	close: () => void;
}

const ChangeAvatarModal: FC<EditUserModalProps> = ({close}) => {
	const [file, setFile] = useState<File | null>(null);
	const imgRef = useRef<HTMLImageElement>(null);
	const {t} = useTranslation();
	const changeAvatarFn = useChangeAvatar(close).mutate;

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

	const submit = () => {
		const formData = new FormData();
		if (file) {
			formData.append("file", file);
		}
		changeAvatarFn(formData);
	};

	return (
		<Modal isOpen={true} close={close}>
			<div {...getRootProps()} className={cls.body}>
				<input {...getInputProps()} />
				<div>
					<img src={SelectFileIcon} ref={imgRef} className={cls.img} />
				</div>
				{isDragActive ? (
					<p>{t("profile.updatePhotoOnFile")}</p>
				) : (
					<p>{t("profile.updatePhotoText")}</p>
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
						theme={ThemeButton.SUBMIT}
					>
						{t("profile.editButton")}
					</Button>
				) : null}
				<Button
					onClick={(e) => {
						e.stopPropagation();
						close();
					}}
				>
					{t("profile.cancelButton")}
				</Button>
			</div>
		</Modal>
	);
};

export default ChangeAvatarModal;
