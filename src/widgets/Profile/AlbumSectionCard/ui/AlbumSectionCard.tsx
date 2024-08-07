import {NavLink} from "react-router-dom";
import {FC} from "react";

import {ButtonsList} from "../consts/ButtonsList";

import cls from "./AlbumSectionCard.module.scss";

interface AlbumSectionCardProps {}

export const AlbumSectionCard: FC<AlbumSectionCardProps> = () => {
	// const user = useAppSelector(state => state.auth)

	// const [topic, setTopic] = useState<number>(0)

	return (
		<section className={cls.albumSection}>
			<nav className={cls.albumSection__nav}>
				{ButtonsList.map((item, index) => {
					return (
						<NavLink key={index} to={item.href}>
							{item.title}
						</NavLink>
					);
				})}
			</nav>
			<div className={cls.albumSection__content}></div>
		</section>
	);
};
