import {FC} from "react";
import {PostEntity} from "../..";

import cls from "./Feed.module.scss";

interface FeedWidgetProps {}

export const FeedWidget: FC<FeedWidgetProps> = () => {
	return (
		<section className={cls.feedWidget} data-testid="feed-widget">
			<PostEntity />
		</section>
	);
};
