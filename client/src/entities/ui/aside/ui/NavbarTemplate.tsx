import { useState } from 'react';
import cls from './NavbarTemplate.module.scss'

export interface LinksData {
  title: string;
  icon: string;
}

interface NavbarTemplateProps { links: LinksData[] }

export const NavbarTemplate = ({ links }: NavbarTemplateProps) => {
  const [NavHover, setNavHover] = useState(false)

  return (
    <aside className={NavHover ? cls.asideActive : cls.aside} onMouseEnter={() => setNavHover(true)} onMouseLeave={() => setNavHover(false)}>
      <div className={cls.AsideStroke} >
        <div className={cls.asideContent}>
          <header className={cls.Aside__header}>

          </header>
          <nav className={cls.Aside__nav}>
            <ul className={cls.navLinks}>
              {NavHover
                ? links.map((item: LinksData, index) => {
                  return index ? null : <li className={cls.navLink}>
                    <svg width="36" height="36">
                      <defs>
                        <linearGradient id={item.title} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stop-color="var(--main-gradient)" />
                          <stop offset="100%" stop-color="transparent" />
                        </linearGradient>
                      </defs>
                      <use xlinkHref={'#' + item.icon} x="0" y="0" width="100%" height="100%" />
                      <rect x="0" y="0" width="100%" height="100%" stroke={'url(#' + item.title  + ')'} stroke-width="1" fill="none" />
                    </svg>
                    <h3 className={cls.navLink__title}>{item.title}</h3>
                  </li>;
                })
                : <h1>Empty</h1>}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  )
}