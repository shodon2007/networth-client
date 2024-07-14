import { FC } from "react";
import {SearchBar} from "src/shared/ui/searchbar/SearchBar";
import { ChatCard } from "src/entities/messenger";
import cls from './chatList.module.scss'
import { ChatListItems } from "./consts/chatListItems";

interface ChatListProps {}

export const ChatList: FC<ChatListProps> = () => {

	return (
		<section className={cls.ChatList}>
			<SearchBar>find a chat . . .</SearchBar>
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
