import {useUserData} from "src/shared/lib/store/hooks/useUserData";
import {SearchBar} from "src/shared/ui/searchbar/SearchBar";
import {ChatCard} from "src/shared/ui/sectionsBlocks/Messanger/chatCard";
import cls from "./ChatList.module.scss";
import {ChatListItems} from "./consts/ChatListItems";

interface ChatListProps {}

export const ChatList = ({}: ChatListProps) => {
	const user = useUserData();

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
					<ChatCard nikcname={_.nickname} icon={_.icon} href={_.href} />
				)
				}
			</ul>
		</section>
	);
};
