import { useState } from 'react'
import { InteractiveBtn, InteractiveBtnList } from '../consts/InteractiveBtnsList'
import cls from './Post.module.scss'
import watchIcon from 'src/shared/assets/EyeIcon.svg'
import { SettingsButton } from 'src/shared/ui/Buttons/SettingsBtn/SettingsButton'

interface PostEntityProps { }

export const PostEntity = ({ }: PostEntityProps) => {

  // Decide where this state should be placed (entity or widget folder)
  // Or create it like a fetchComments in 'features folder' and 
  // Realize it as callback function hence return false/true boolean
  const [isComment, setIsComment] = useState(false)

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
         <SettingsButton />
        </span>
      </header>
      <main className={cls.Main}>
        <h1 className={cls.Main__title}>Great Alkil kill the bulling shit</h1>
        <p className={cls.Main__content}>
          “ For every morning have other ideas. Never get some bitch for break to rest.
          Man you better check your last checkpoint if you’ll be thinking about to give up.
          Better forgot about my name ”. An ‘Alkil’ provided us such wonderful lines and enforce
          these fucking school boys to shut the fucking up. “
        </p>
      </main>
      <footer className={cls.Footer}>
        <header className={cls.Footer__interactive}>
          {InteractiveBtnList.map((item, index) => {
            item.icon === 'Comments' && <button className={cls.Footer__interactiveBtn} onClick={() => console.log('hello')} key={index}>
              <h2>{item.icon}</h2>
              <p>{item.counter}</p>
            </button>
            return <button className={cls.Footer__interactiveBtn} key={index}>
              <h2>{item.icon}</h2>
              <p>{item.counter}</p>
            </button>
          })}
        </header>
        <section className={cls.Comments}>
          Comments
        </section>
      </footer>
    </article>
  )
}