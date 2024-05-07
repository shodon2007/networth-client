import { ReactSVGElement } from "react"
import { Link, useHref } from "react-router-dom"


interface ChatCardProps { title: string, icon: ReactSVGElement, href: string }

export const ChatCard = ({ title, icon, href }: ChatCardProps) => {
  
  return (
    <Link to={href}>
      <header>
        {icon}
      </header>
      <main>
        
      </main>
    </Link>
  )
}