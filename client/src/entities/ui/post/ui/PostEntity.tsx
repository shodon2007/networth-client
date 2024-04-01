import { InteractiveBtn } from '../consts/InteractiveBtnsList'
import cls from './Post.module.scss'
import watchIcon from 'src/shared/assets/EyeIcon.svg'

interface PostEntityProps { InteractiveBtns: InteractiveBtn[] }

// TODO: Solve the question with props and how to create the interactive btns

export const PostEntity = ({  }: PostEntityProps) => {

  return (
    <article className={cls.Article}>
      <header className={cls.Header}>
        <div className={cls.Header__main}>
          <img src="" alt="avatar" className={cls.Header__userAvatar} />
          <h1 className={cls.Header__userName}>ZXC Baron</h1>
          <span className={cls.Header__articleData}>
            <h5 className={cls.Header__articleDate}>today</h5>
            <p className={cls.Header__ArticleWatcher}>
              <img src={watchIcon} alt="eye" className={cls.Header__watchIcon} />
              0
            </p>
          </span>
        </div>
        <span className={cls.Header__more}>  {/* //TODO add the 'more' menu */}
          <button className={cls.Header__moreBtn}>
            <div className={cls.Header__moreDot} />
            <div className={cls.Header__moreDot} />
            <div className={cls.Header__moreDot} />
          </button>
        </span>
      </header>
      <main className={cls.Main}>
        <h1 className={cls.Main__title}>Great Alkil kill the bulling shit</h1>
        <p className={cls.Main__content}>
          “ For every morning have other ideas. Never get some bitch for break to rest.
          Man you better check your last checkpoint if you’ll be thinking about to give up.
          Better forgot about my name ”. An ‘Alkil’ provided us such wonderful lines and enforce
          these fucking school boys to shut the fucking up.
        </p>
      </main>
      <footer className={cls.Footer}>
        <header className={cls.Footer__interactive}> {/* // * add interactive btns list from the const  /}
          <button className={cls.Footer__interactiveBtn}>

          </button>
          {/* //TODO: Create the space for comments */}
        </header>
      </footer>
    </article>
  )
}