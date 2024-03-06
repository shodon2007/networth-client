import {FC} from "react";
import Button from "src/shared/ui/Button/Button";

import cls from './mainPage.module.scss';

const MainPage: FC = () => {
	return <div className={cls.mainPage}>
		<Button>hello d</Button>
	</div>;
};

export default MainPage;
