import { PostEntity } from '../../'
import cls from './Feed.module.scss'

interface FeedEntityProps { }

export const FeedEntity = ({ }: FeedEntityProps) => {
  
  return (
    <>
      <PostEntity />
      <h2>Hello</h2>
    </>
  )
}