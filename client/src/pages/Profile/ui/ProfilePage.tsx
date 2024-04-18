import { AlbumSectionCard } from 'src/widgets/ui/Profile/ui/AlbumSectionCard/AlbumSectionCard'
import cls from './ProfilePage.module.scss'
import { UserDataCard } from 'src/widgets/ui/Profile'
import { CreatePostCard } from 'src/widgets/ui/Profile/ui/CreatePostCard/CreatePostCard'
import { FriendsListCard } from 'src/widgets/ui/Profile/ui/FriendsListCard/FriendsListCard'
import { ChannelsListCard } from 'src/widgets/ui/Profile/ui/ChannelsListCard/ChannelsListCard'
import { SpecializedCard } from 'src/widgets/ui/Profile/ui/SpecializedCard/SpecializedCard'

export const ProfilePage = () => {

  return (
    <div className={cls.Profile}>
      <UserDataCard />
      <FriendsListCard />
      <AlbumSectionCard />
      <ChannelsListCard />
      <CreatePostCard />
      <SpecializedCard />
    </div>
  )
}