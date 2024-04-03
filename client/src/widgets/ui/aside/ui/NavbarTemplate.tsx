import { ChangeEvent, FC, useState } from 'react';
import cls from './NavbarTemplate.module.scss'
import { Links } from '../consts/LinksData';

export interface LinksData {
  title: string;
  icon: string;
}

interface NavbarTemplateProps { }

export const NavbarTemplate: FC<NavbarTemplateProps> = ({ }) => {
  const [isHover, setIsHover] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0)

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(+e.target.value);
  }

  return (
    <aside className={cls.AsideStroke}>
      <div className={isHover ? cls.asideActive : cls.aside} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <section className={cls.asideContent}>
          <header className={cls.asideHeader}>
            {
              isHover  // Check if the aside is hovering
                ?
                <>
                  <img src="" alt="avatar" className={cls.asideHeader__avatar} />
                  <h1 className={cls.asideHeader__title}>ZXC Baron</h1>
                </>
                :
                <img src="" alt="avatar" className={cls.asideHeader__avatar} /> // TODO: add avatr from the auth context to here
            }
          </header>
          <nav className={cls.asideNav}>
            <ul className={isHover ? cls.navLinks : cls.navLinksActive}>
              {isHover  // Check if the aside is hovering
                ? Links.map((item: LinksData, index) => {  // Create a new link from the massive
                  return <li className={cls.navLink} key={index}>
                    <img src={item.icon} className={cls.navLink__icon} />
                    <label className={cls.navLink__label}>
                      <input
                        type='radio'
                        value={index}
                        className={cls.navLink__radio}
                        key={index}
                        checked={selectedValue === index}
                        placeholder={item.title}
                        onChange={handleCheck}
                      />
                      <span className={selectedValue === index ? cls.navLink__titleActive : cls.navLink__title}>{item.title}</span>
                    </label>
                  </li>;
                })
                :
                Links.map((item, index) => {
                  return <li className={cls.navLink} key={index}><img src={item.icon} className={cls.navLink__icon} key={index} /></li>
                })
              }
            </ul>
          </nav>
        </section>
      </div>
    </aside >
  )
}