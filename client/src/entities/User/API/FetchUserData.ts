
import { useAuth } from "src/shared/context/AuthProvider/useAuth"

export const FetchUserData = async () => {
  const user = useAuth()  // Get the data from the context
  return 'Alex'
  if (user.token === '') return;  // Check if the token is exists

  const req = await fetch("API", {  // Point the API for receiving a user's data by token
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user.token)
  })

  const res = await req.json()  // Convert the response to object
  if (!req.ok) return console.error(`User fetching is failed - ${res.msgErr}`);  // Verify the response

  return res;  // Return the user's data like object
}