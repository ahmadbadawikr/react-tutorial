import { useContext } from "react"
import { PostContentButtons } from "./PostContentButtons"
import { UserContext } from "../contexts/UserContext"
export function PostContent({data}){
    const userContextData = useContext(UserContext)
    return (
        <div>
            <span>Post Content</span>
            <PostContentButtons data={data}></PostContentButtons>
            {userContextData.email}
        </div>
    )
}