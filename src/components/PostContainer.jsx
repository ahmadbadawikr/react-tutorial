import { useContext, useState } from "react"
import { PostContent } from "./PostContent"
import { UserContext } from "../contexts/UserContext"

export function PostContainer(){
    const userContextData= useContext(UserContext)
    
    return (
        <div>
            <span>Post Container</span>
            <div>{userContextData.name}</div>
            <div>{userContextData.id}</div>
            <div>{userContextData.email}</div>
            <div>{userContextData.username}</div>
            <PostContent/>
        </div>
    )
}