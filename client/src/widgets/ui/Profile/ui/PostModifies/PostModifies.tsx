import { MenuBtn } from 'src/shared/ui/Buttons/menuBtn/MenuBtn'
import cls from './PostModifies.module.scss'
import { PostModifiesIconsList } from './consts/ModifiesIcons'

interface PostModifiesProps { }

export const PostModifies = ({ }: PostModifiesProps) => {

  return (
    <div className={cls.Container}>
      <ul className={cls.visibilityList}>
        <select className={cls.visibilityList__people}>
          <option value="Public">For all ?</option>
          <option value="Privat">Only for friends ?</option>
        </select>
        <li
          className={cls.visibilityList__time}
        >
          <h6>Time:</h6>
          <input
            type='date'
            className={cls.visibilityList__time2}
          />
        </li>
      </ul>
      <ul className={cls.interactivityList}>
        <ul className={cls.interactivityList__items}>
          {PostModifiesIconsList.map((item, index) => {  // Go through each element and display them
            return <li
              key={index}
              className={cls.interactivityList__item}
            >
              <button>
                <img src={item.icon} alt="icon" />
              </button>
            </li>
          })}
        </ul>
        <li className={cls.interactivityList__specBtn}>
          <MenuBtn border={true} />
        </li>
      </ul>
    </div>
  )
}