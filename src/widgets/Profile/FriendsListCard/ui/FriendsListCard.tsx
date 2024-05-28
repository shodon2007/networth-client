import cls from "./FriendsListCard.module.scss";
// import Button from "src/shared/ui/Button/Button";
import FriendsIcon from "src/shared/assets/FriendsIcon.svg";
// import {useAppSelector} from "src/shared/lib/Redux/model";

interface FriendsListCardProps {}

export const FriendsListCard = ({}: FriendsListCardProps) => {
	// const {user} = useAppSelector((state) => state.auth);

	return (
		<section className={cls.FriendsSection}>
			<div className={cls.FriendsList}>
				<span className={cls.FriendsList__Up}>
					<img src={FriendsIcon} alt="Icon" />
					{/* <h1>Channels: {user.channelList.length}</h1> */}
				</span>
				{/* {user.friendsList.length > 4 && (
					<div className={cls.FriendsList__UpBtn}>
						<Button>All</Button>
					</div>
				)} */}
			</div>
			<ul className={cls.FriendsList}>
				{/* {user.friendsList.map((item, index) => {
					return (
						index < 4 && (
							<li key={index} className={cls.FriendsList__item}>
								{item.avatar ? (
									<img src={item.avatar} alt="" />
								) : (
									<div className={cls.WhiteCircle} />
								)}
								<p>{item.name}</p>
							</li>
						)
					);
				})} */}
			</ul>
		</section>
	);
};
