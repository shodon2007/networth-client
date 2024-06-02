import {FC, ReactNode} from "react";
import classNames from "src/shared/lib/classNames";

import cls from "./Modal.module.scss";

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
