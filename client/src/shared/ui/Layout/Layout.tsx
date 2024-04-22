import {Header} from "src/widgets/Header";
import {Sidebar} from "src/widgets/Sidebar";
import {Outlet} from "react-router-dom";

import cls from "./Layout.module.scss";
import CheckPermission from "src/app/hoc/CheckPermission";
import {ToastContainer} from "react-toastify";

export const Layout = () => {
	return (
		<>
			<div className={cls.GridLayout}>
				<header className={cls.header}>
					<Header />
				</header>
				<main className={cls.main}>
					<CheckPermission>
						<Outlet />
					</CheckPermission>
				</main>
				<aside className={cls.aside}>
					<Sidebar />
				</aside>
			</div>
			<ToastContainer />
		</>
	);
};
