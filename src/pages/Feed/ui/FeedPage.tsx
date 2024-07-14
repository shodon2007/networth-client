import { WSBtn } from "src/entities/messenger/ui/WSBtn";
import {FeedWidget} from "src/widgets/ui/Feed/ui/FeedWidget";

const FeedPage = () => {
	return (
		<div data-testid="home-page">
			<FeedWidget />
		</div>
	);
};

export default FeedPage;
