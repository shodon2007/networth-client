import {Outlet} from "react-router-dom";
import {Header} from "src/widgets/Header";
import {Sidebar} from "src/widgets/Sidebar";

import cls from "./Layout.module.scss";

export const Layout = () => {
	return (
		<>
			<div className={cls.gridLayout} data-testid="layout">
				<header className={cls.header}>
					<Header />
				</header>
				<div className={cls.mainBg}>
					<main className={cls.main}>
						<Outlet />
					</main>
				</div>
				<aside className={cls.aside}>
					<Sidebar />
				</aside>
			</div>
		</>
	);
};
