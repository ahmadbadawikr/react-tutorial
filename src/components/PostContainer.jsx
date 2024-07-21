import { useContext, useState } from "react"
import { PostContent } from "./PostContent"
import { UserContext } from "../contexts/UserContext"

export function PostContainer(){
    const [data, setData] = useState("hello world")
    const userContextData= useContext(UserContext)
    
    return (
        <div>
            <span>Post Container</span>
            <PostContent data={data}/>
            <div>{userContextData.displayName}</div>
        </div>
    )
}