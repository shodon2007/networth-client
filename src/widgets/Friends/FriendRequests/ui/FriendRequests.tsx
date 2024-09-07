import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react";
import {useTranslation} from "react-i18next";
import Block from "src/shared/ui/Block/Block";
import Button from "src/shared/ui/Button/Button";
import cls from "./FriendRequests.module.scss";
import GetFriendRequestList from "./GetFriendRequestList";
import SendFriendRequestList from "./SendFriendRequestList";
const FriendRequests = () => {
	const {t} = useTranslation();

	return (
		<div
			className={cls.friendRequestPageWrapper}
			data-testid="friends-requests-page"
		>
			<Block className={cls.friendRequestPage}>
				<TabGroup className={cls.tabs}>
					<TabList className={cls.tabButtons}>
						<Tab className={cls.tabItem}>
							{({selected}) => {
								return (
									<Button
										theme={selected ? "active" : ""}
										className={cls.tabButton}
									>
										{t("friends.friendRequestPageReceived")}
									</Button>
								);
							}}
						</Tab>
						<Tab className={cls.tabItem}>
							{({selected}) => {
								return (
									<Button
										theme={selected ? "active" : ""}
										className={cls.tabButton}
										data-testid="friend-requests-sends-tab"
									>
										{t("friends.friendRequestPageSended")}
									</Button>
								);
							}}
						</Tab>
					</TabList>
					<TabPanels className={cls.tabPanels}>
						<TabPanel className={cls.tabPanel}>
							<GetFriendRequestList />
						</TabPanel>
						<TabPanel className={cls.tabPanel}>
							<SendFriendRequestList />
						</TabPanel>
					</TabPanels>
				</TabGroup>
			</Block>
		</div>
	);
};

export default FriendRequests;
