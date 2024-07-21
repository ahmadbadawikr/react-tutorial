// import { UserProfile } from "./components/UserProfile"
// import { UserDetails } from "./components/UserDetails"
// import { LoginForm } from "./components/LoginForm"
// import { RegisterForm } from "./components/RegisterForm"

import { useState } from "react";
import { UserDetails } from "./components/UserDetails";

export default function App() {
  const [users, setUsers] = useState([
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
  ]);


  return <div>
    {users.map(
      (user) => 
    <UserDetails key={user.id} user={user} setUsers={setUsers}/>
    )}
  </div>
}
    // <div>
    //   <RegisterForm></RegisterForm>
    // </div>

  // const USER_STATUS = "ACCOUNT DISABLED";

  // switch(USER_STATUS) {
  //   case "NOT VERIFIED":
  //     return (
  //       <div>
  //         <span>
  //           You are not verified. Please verify your Email or Mobile Number.
  //         </span>
  //       </div>
  //     );
  //   case "VERIFIED":
  //     return(
  //       <div>
  //         <span>
  //           You are verified. Click here to access the dashboard.
  //         </span>
  //       </div>
  //     );
  //   case "ACCOUNT DISABLED":
  //     return(
  //       <div>
  //         <span>
  //           Your account is disabled.
  //         </span>
  //       </div>
  //     )

  // }

  // const mockUsers = [
  //   {
  //     id:1,
  //     username:"Aegon",
  //     email: "aegon@kingslanding.com"
  //   },
  //   {
  //     id:2,
  //     username:"Maegor",
  //     email: "maegor@kingslanding.com"
  //   },
  //   {
  //     id:3,
  //     username:"Aenys",
  //     email: "aenys@kingslanding.com"
  //   },
  //   {
  //     id:4,
  //     username:"Jaehaerys",
  //     email: "jaehaerys@kingslanding.com"
  //   }
  // ]

  // return (
  //   <div>
  //     {mockUsers.map(
  //       (user) => {
  //         return <UserDetails key={user.id} user={user}/>
  //       }
  //     )}
  //   </div>)





