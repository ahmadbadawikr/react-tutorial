import { UserProfile } from "./components/UserProfile"

export default function App() {

  const callMe = () => {
    console.log("hello")
  }
  return (
    <>
      <h1>Root Component</h1>
      <UserProfile 
      username= "Bob"
      age={20} 
      isLoggedin={true} 
      favoriteFoods={[
        {
          id:"sushi", 
          name:"sushi"
        }, 
        {
          id: "pizza", 
          name: "Pizza"
        }
      ]}
      callMe={callMe}/>
    </>
  )
}






