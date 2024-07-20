import {FC} from "react";
import watchIcon from "src/shared/assets/EyeIcon.svg";
import {SettingsButton} from "src/shared/ui/Buttons/SettingsBtn/SettingsButton";

import {InteractiveBtnList} from "../consts/InteractiveBtnsList";

import cls from "./Post.module.scss";

interface PostEntityProps {}

export const PostEntity: FC<PostEntityProps> = () => {
	// Decide where this state should be placed (entity or widget folder)
	// Or create it like a fetchComments in 'features folder' and
	// Realize it as callback function hence return false/true boolean
	// const [isComment, setIsComment] = useState(false);

	return (
		<article className={cls.article}>
			<header className={cls.header}>
				<div className={cls.headerMain}>
					<img src="" alt="avatar" className={cls.headerUserAvatar} />
					<h1 className={cls.headerUserName}>ZXC Baron</h1>
					<span className={cls.headerArticleData}>
						<h5 className={cls.headerArticleDate}>today</h5>
						<p className={cls.headerArticleWatcher}>
							{/* {console.log(watchIcon)} */}
							<img src={watchIcon} alt="eye" className={cls.headerWatchIcon} />0
						</p>
					</span>
				</div>
				<span className={cls.headerMore}>
					{" "}
					{/* //TODO add the 'more' menu */}
					<SettingsButton />
				</span>
			</header>
			<main className={cls.main}>
				<h1 className={cls.mainTitle}>Great Alkil kill the bulling shit</h1>
				<p className={cls.mainContent}>
					“ For every morning have other ideas. Never get some bitch for break
					to rest. Man you better check your last checkpoint if you’ll be
					thinking about to give up. Better forgot about my name ”. An ‘Alkil’
					provided us such wonderful lines and enforce these fucking school boys
					to shut the fucking up. “ “ For every morning have other ideas. Never
					get some bitch for break to rest. Man you better check your last
					checkpoint if you’ll be thinking about to give up. Better forgot about
					my name ”. An ‘Alkil’ provided us such wonderful lines and enforce
					these fucking school boys to shut the fucking up. “ “ For every
					morning have other ideas. Never get some bitch for break to rest. Man
					you better check your last checkpoint if you’ll be thinking about to
					give up. Better forgot about my name ”. An ‘Alkil’ provided us such
					wonderful lines and enforce these fucking school boys to shut the
					fucking up. “ “ For every morning have other ideas. Never get some
					bitch for break to rest. Man you better check your last checkpoint if
					you’ll be thinking about to give up. Better forgot about my name ”. An
					‘Alkil’ provided us such wonderful lines and enforce these fucking
					school boys to shut the fucking up. “ “ For every morning have other
					ideas. Never get some bitch for break to rest. Man you better check
					your last checkpoint if you’ll be thinking about to give up. Better
					forgot about my name ”. An ‘Alkil’ provided us such wonderful lines
					and enforce these fucking school boys to shut the fucking up. “ “ For
					every morning have other ideas. Never get some bitch for break to
					rest. Man you better check your last checkpoint if you’ll be thinking
					about to give up. Better forgot about my name ”. An ‘Alkil’ provided
					us such wonderful lines and enforce these fucking school boys to shut
					the fucking up. “ “ For every morning have other ideas. Never get some
					bitch for break to rest. Man you better check your last checkpoint if
					you’ll be thinking about to give up. Better forgot about my name ”. An
					‘Alkil’ provided us such wonderful lines and enforce these fucking
					school boys to shut the fucking up. “
				</p>
			</main>
			<footer className={cls.footer}>
				<header className={cls.footerInteractive}>
					{InteractiveBtnList.map((item, index) => {
						item.icon === "Comments" && (
							<button
								className={cls.footerInteractiveBtn}
								onClick={() => console.log("hello")}
								key={index}
							>
								<h2>{item.icon}</h2>
								<p>{item.counter}</p>
							</button>
						);
						return (
							<button className={cls.footerInteractiveBtn} key={index}>
								<h2>{item.icon}</h2>
								<p>{item.counter}</p>
							</button>
						);
					})}
				</header>
				<section className={cls.comments}>Comments</section>
			</footer>
		</article>
	);
};
