import { FC } from "react";
import {SearchBar} from "src/shared/ui/searchbar/SearchBar";
import {ChatCard} from "src/shared/ui/sectionsBlocks/Messanger/chatCard";

import cls from "./ChatList.module.scss";
import {ChatListItems} from "./consts/ChatListItems";
import { WSBtn } from "src/entities/messenger/ui/WSBtn";

interface ChatListProps {}

export const ChatList: FC<ChatListProps> = () => {

	return (
		<section className={cls.ChatList}>
			<SearchBar>find a chat . . .</SearchBar>
			{/* 
        // ToDo: 1. Think up how to retrieve users from the db  
        // ToDo: 2. Think up how to handle blcoked users
        // ToDo: 3. Think up how to display the users
      */}
			<ul className={cls.ChatList__chats}>
				{
					ChatListItems.map(_ => 
						<ChatCard key={_.nickname} nikcname={_.nickname} icon={_.icon} href={_.href} />
					)
				}
			</ul>
		</section>
	);
};
