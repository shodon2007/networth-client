import { Header } from 'src/widgets/header'


import cls from './Layout.module.scss'
import { Sidebar } from 'src/widgets/sidebar'
import { Outlet } from 'react-router-dom'


export const Layout = () => {  
  return (
    <div className={cls.GridLayout} >
        <Header />
      <main className={cls.main}>
        <Outlet />
      </main>
      <Sidebar />
    </div>
  )
}