import {FC, ReactNode} from "react";
import cls from "./Modal.module.scss";
import classNames from "src/shared/lib/classNames";

interface ModalProps {
	children: ReactNode;
	isOpen: boolean;
	close: () => void;
}

const Modal: FC<ModalProps> = ({children, isOpen, close}) => {
	return (
		<div
			onClick={close}
			className={classNames(cls.modal, {[cls.open]: isOpen})}
		>
			<div className={cls.body} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Modal;
