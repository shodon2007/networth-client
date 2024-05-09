import { PostEntity } from '../..'
import cls from './Feed.module.scss'

interface FeedWidgetProps { }

export const FeedWidget = ({ }: FeedWidgetProps) => {
  
  return (
    <section className={cls.FeedSection}>
      <PostEntity />
    </section>
  )
}