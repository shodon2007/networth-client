import { MainFullPage } from "../../MainFullPage"
import { Outlet } from "react-router-dom"

interface MainLayoutProps { }

export const MainLayout = ({ }: MainLayoutProps) => {

  return (
    <MainFullPage>
      <Outlet />
    </MainFullPage>
  )
}