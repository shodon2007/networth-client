import { useState } from "react"
import cls from './AlbumSectionCard.module.scss'
import { useAuth } from "src/shared/context/AuthProvider/useAuth"
import { MBtn } from "src/shared/ui/Buttons/LevelsBtn"
import { ButtonsList } from "./consts/ButtonsList"
import { RadioMBtn } from "src/shared/ui/Buttons/Radio/mBtn/RadioMBtn"

interface AlbumSectionCardProps { }

export const AlbumSectionCard = ({ }: AlbumSectionCardProps) => {
  const user = useAuth()

  const [topic, setTopic] = useState<number>(0)

  return (
    <section className={cls.AlbumSection}>
      <nav className={cls.AlbumSection__nav}>
        {ButtonsList.map((item, index) => {
          return (
            <RadioMBtn
              key={index}
              type='radio'
              // primary={false}
              value={index}
              checked={topic === index}
              onClick={() => setTopic(index)}
              placeholder={item.title}
            >
              {/* {item.title} */}
            </RadioMBtn>
          )
        })}
        <MBtn primary={false}
          type="button"
          value={0}
          checked={topic}
          onClick={() => setTopic(0)}
        >ws</MBtn>
      </nav>
      <div className={cls.AlbumSection__content}>

      </div>
    </section>
  )
}