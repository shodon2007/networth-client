import { AlbumSectionCard } from 'src/widgets/ui/Profile/ui/AlbumSectionCard/ui/AlbumSectionCard'
import cls from './ProfilePage.module.scss'
import { UserDataCard } from 'src/widgets/ui/Profile'
import { CreatePostCard } from 'src/widgets/ui/Profile/ui/CreatePostCard/ui/CreatePostCard'
import { FriendsListCard } from 'src/widgets/ui/Profile/ui/FriendsListCard/ui/FriendsListCard'
import { ChannelsListCard } from 'src/widgets/ui/Profile/ui/ChannelsListCard/ui/ChannelsListCard'
import { SpecializedCard } from 'src/widgets/ui/Profile/ui/SpecializedCard/ui/SpecializedCard'

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