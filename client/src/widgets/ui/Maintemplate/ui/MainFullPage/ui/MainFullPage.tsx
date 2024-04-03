import { ReactNode } from 'react'
import cls from './MainFullPage.module.scss'
import { HeaderTemplate } from 'src/entities/ui/header/ui/Header'
import { NavbarTemplate } from 'src/entities/ui/aside/ui/NavbarTemplate'
import { Links } from '../consts/LinksData'

interface MainFullPageProps { children: ReactNode }

export const MainFullPage = ({ children }: MainFullPageProps) => {

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