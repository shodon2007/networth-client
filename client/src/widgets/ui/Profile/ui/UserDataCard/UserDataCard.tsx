import { useState } from "react"
import { User } from "src/entities"
import cls from './style.module.scss'

interface UserDataCardProps { }

export const UserDataCard = ({ }: UserDataCardProps) => {
  
  const [user, setUser] = useState<User | undefined>(undefined)

  // TODO: create fetch user function and create 'useEffect' fetching data from each re-render
  // * Landing the card from the Figma

  return (
    // Add displaying user's data
    <section className={cls.UserCard}> 
      
    </section>
  )
}