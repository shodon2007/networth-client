import { ReactNode } from 'react'
import cls from './MainFullPage.module.scss'
import { HeaderTemplate } from 'src/entities/ui/header/ui/Header'
import { NavbarTemplate } from 'src/entities/ui/aside/ui/NavbarTemplate'
import { LinksData } from 'src/entities/ui/aside/ui/NavbarTemplate'
import ProfileIcvon from "src/shared/assets/ProfileIcon.svg"


interface MainFullPageProps { children: ReactNode }

export const MainFullPage = ({ children }: MainFullPageProps) => {
  // TODO: move the @LinksData to consts folder
  const Links: LinksData[] = [
    {
      title: "My profile",
      icon: ProfileIcvon,
    }
  ]

  return (
    <div className={cls.GridLayout} >
      <header className={cls.header}>
        <HeaderTemplate />
      </header>
      <main className={cls.main}>
        {children}
      </main>
      <aside className={cls.aside} >
        <NavbarTemplate links={Links} />
      </aside>
    </div>
  )
}