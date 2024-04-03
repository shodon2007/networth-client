import { ReactNode } from 'react'
import cls from './MainFullPage.module.scss'

import { HeaderTemplate, NavbarTemplate } from 'src/widgets'
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
        <NavbarTemplate />
      </aside>
    </div>
  )
}