import {Header} from "src/widgets/Header";
import {Sidebar} from "src/widgets/Sidebar";
import {Outlet} from "react-router-dom";

import cls from "./Layout.module.scss";

export const Layout = () => {
	console.log("layout");
	return (
		<>
			<div className={cls.GridLayout}>
				<header className={cls.header}>
					<Header />
				</header>
				<main className={cls.main}>
					<Outlet />
				</main>
				<aside className={cls.aside}>
					<Sidebar />
				</aside>
			</div>
		</>
	);
};
