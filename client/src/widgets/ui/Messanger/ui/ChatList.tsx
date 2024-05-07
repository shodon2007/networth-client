import { useUserData } from "src/shared/lib/store/hooks/useUserData"
import { SearchBar } from "src/shared/ui/searchbar/SearchBar"


interface ChatListProps { }

export const ChatList = ({ }: ChatListProps) => {
  
  const user = useUserData()

  return (
    <>
      <SearchBar>Find a chat . . .</SearchBar>
      {/* 
        // ToDo: 1. Think up how to retrieve users from the db  
        // ToDo: 2. Think up how to handle blcoked users
        // ToDo: 3. Think up how to display the users
      */}
      <ul>
        {/* {} */}
        
      </ul>
    </>
  )
}