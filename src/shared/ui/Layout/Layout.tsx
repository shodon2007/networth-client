import {Outlet} from "react-router-dom";
import {Suspense} from "react";
import {Header} from "src/widgets/Header";
import {Sidebar} from "src/widgets/Sidebar";

import cls from "./Layout.module.scss";

export const Layout = () => {
	return (
		<>
			<div className={cls.layout} data-testid="layout">
				<header className={cls.header}>
					<Header />
				</header>
				<div className={cls.mainBg}>
					<main className={cls.main}>
						<Suspense fallback={<div>офигеть загрузка</div>}>
							<Outlet />
						</Suspense>
					</main>
				</div>
				<div className={cls.asideWrapper}>
					<Sidebar />
				</div>
			</div>
		</>
	);
};
