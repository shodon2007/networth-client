import ChannelIcon from "src/shared/assets/ChannleIcon.svg";
import cls from "./ChannelsLsitCard.module.scss";
// import Button from "src/shared/ui/Button/Button";
// import {useAppSelector} from "src/shared/lib/store";

interface ChannelsListCardProps {}

export const ChannelsListCard = ({}: ChannelsListCardProps) => {
	// const {user} = useAppSelector((state) => state.user);

	return (
		<section className={cls.ChanelSection}>
			<div className={cls.ChanelsList}>
				<span className={cls.ChanelsList__Up}>
					<img src={ChannelIcon} alt="Icon" />
					{/* <h1>Channels: {user?.channelList.length}</h1> */}
				</span>
				{/* {user.channelList.length > 4 && (
					<div className={cls.ChanelsList__UpBtn}>
						<Button>All</Button>
					</div>
				)} */}
			</div>
			<ul className={cls.ChanelsList}>
				{/* {user.channelList.map((item, index) => {
					return (
						index < 4 && (
							<li key={index} className={cls.ChanelsList__item}>
								{item.avatar ? (
									<img src={item.avatar} alt="" />
								) : (
									<div className={cls.WhiteCircle} />
								)}
								<p>{item.title}</p>
							</li>
						)
					);
				})} */}
			</ul>
		</section>
	);
};
