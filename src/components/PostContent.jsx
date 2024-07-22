import { useContext } from "react"
import { PostContentButtons } from "./PostContentButtons"
import { UserContext } from "../contexts/UserContext"
export function PostContent(){
    const userContextData = useContext(UserContext)
    return (
        <div>
            <span>Post Content</span>
            <PostContentButtons ></PostContentButtons>
            {userContextData.email}
        </div>
    )
}