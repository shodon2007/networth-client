import { PostEntity } from '../../'
import cls from './Feed.module.scss'

interface FeedEntityProps { }

export const FeedEntity = ({ }: FeedEntityProps) => {
  
  return (
    <section className={cls.FeedSection}>
      <PostEntity />
    </section>
  )
}