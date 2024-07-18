// import { UserProfile } from "./components/UserProfile"

import { UserDetails } from "./components/UserDetails"

export default function App() {
  const mockUsers = [
    {
      id:1,
      username:"Aegon",
      email: "aegon@kingslanding.com"
    },
    {
      id:2,
      username:"Maegor",
      email: "maegor@kingslanding.com"
    },
    {
      id:3,
      username:"Aenys",
      email: "aenys@kingslanding.com"
    },
    {
      id:4,
      username:"Jaehaerys",
      email: "jaehaerys@kingslanding.com"
    }
  ]

  return (
    <div>
      {mockUsers.map(
        (user) => {
          return <UserDetails key={user.id} user={user}/>
        }
      )}
    </div>)
}






