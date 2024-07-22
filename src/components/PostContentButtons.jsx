import { UserContext } from "../contexts/UserContext"
import { useContext } from "react"

export function PostContentButtons(){
    const {id, setUserData} = useContext(UserContext)
    return (
        <div>
            <span>Post Button</span>
            {id}
            <br />
            <button onClick={()=> {
                setUserData((currentState)=> ({...currentState, name: 'Updated Display Name'}) )
            }}>Click Me</button>
        </div>
    )
}