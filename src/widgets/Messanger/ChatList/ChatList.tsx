import {FC} from "react";
import {ChatCard} from "src/entities/messenger";
import {SearchChat} from "src/features/Messanger/SearchChat";

import cls from "./ChatList.module.scss";
import {ChatListItems} from "./consts/ChatListItems";

interface ChatListProps {}

export const ChatList: FC<ChatListProps> = () => {
	return (
		<section className={cls.chatList}>
			<SearchChat />
			{/* <SearchBar>find a chat . . .</SearchBar> */}
			{/* 
        // ToDo: 1. Think up how to retrieve users from the db  
        // ToDo: 2. Think up how to handle blcoked users
        // ToDo: 3. Think up how to display the users
      */}
			<ul className={cls.chatList__chats}>
				{ChatListItems.map((_) => (
					<ChatCard
						key={_.nickname}
						nikcname={_.nickname}
						icon={_.icon}
						href={_.href}
					/>
				))}
			</ul>
		</section>
	);
};
