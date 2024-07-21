// import { UserProfile } from "./components/UserProfile"
// import { UserDetails } from "./components/UserDetails"
// import { LoginForm } from "./components/LoginForm"
// import { RegisterForm } from "./components/RegisterForm"
// import { UserDetails } from "./components/UserDetails";

import { useState, useEffect } from "react";

export default function App() {
 const [counter, setCounter] = useState(0);
 const [sync, setSync] = useState(false);
 
 useEffect(()=> {
  console.log("rendering...")
  document.title = "React Tutorial"+ counter
 }, [sync])
 return (
  <div>
    <div>
      You clicked the button {counter} times
    </div>
    <button onClick={()=> setCounter((count)=> count+1)}>Click Me</button>
    <button onClick={()=> setSync((current)=> !current)}>Sync</button>
  </div>
 )
}

// const [username, setUsername] = useState("")
//   const [email, setEmail] = useState("")
//   const [users, setUsers] = useState([
//     {
//           id:1,
//           username:"Aegon",
//           email: "aegon@kingslanding.com"
//         },
//         {
//           id:2,
//           username:"Maegor",
//           email: "maegor@kingslanding.com"
//         },
//         {
//           id:3,
//           username:"Aenys",
//           email: "aenys@kingslanding.com"
//         },
//         {
//           id:4,
//           username:"Jaehaerys",
//           email: "jaehaerys@kingslanding.com"
//         }
//   ]);


  // return (
  // <div>
  //   <form onSubmit={(e)=> {
  //     e.preventDefault()
  //     console.log(username, email)
  //   }}>
  //     <div>
  //       <label htmlFor="username"> Username</label>
  //       <input name="username" id="username" value={username} onChange={(e)=> {
  //         setUsername(e.target.value)
  //       }}/>
  //     </div>
  //     <div>
  //       <label htmlFor="email"> Email</label>
  //       <input name="email" id="email" value={email} onChange={(e)=> {
  //         setEmail(e.target.value)
  //       }}/>
  //     </div>
  //     <button>Add User</button>
  //   </form>
  //   <br />
  //   {users.map(
  //     (user) => 
  //       <UserDetails 
  //         key={user.id} 
  //         user={user} 
  //         setUsers={setUsers}/>
  //   )}
    
  // </div>)

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





