import {ChatList} from "src/widgets/Messanger";
import cls from './messengerPage.module.scss'

export default function MessengerPage() {
	return (
		<div data-testid="messanger-page" className={cls.container}>
			<ChatList />
		</div>
	);
}