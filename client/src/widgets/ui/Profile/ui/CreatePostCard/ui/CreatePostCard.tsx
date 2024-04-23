import { MInput } from 'src/shared/ui/inputs/levelsInputs/mInput/MInput'
import cls from './CreatePostCard.module.scss'
import { LBtn } from 'src/shared/ui/Buttons/LevelsBtn/lBtn/LBtn'
import { SBtn } from 'src/shared/ui/Buttons/LevelsBtn/sBtn/SBtn'
import { MBtn } from 'src/shared/ui/Buttons/LevelsBtn/mBtn/MBtn'
import { PostModifies } from '../../PostModifies/ui/PostModifies'


interface CreatePostCardProps { }

export const CreatePostCard = ({ }: CreatePostCardProps) => {

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={cls.CreatePostForm}
    >
      <MInput>Add a content</MInput>
      <PostModifies />
      <LBtn primary={true}>Public</LBtn>
    </form>
  )
}