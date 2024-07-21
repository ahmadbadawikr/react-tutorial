import Proptypes from "prop-types";
import { useState } from "react";

export function UserDetails({user, setUsers}) {
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    console.log(isEditing)
    return (
        <div>
            <div>
                <button onClick={()=> {
                    setIsEditing((currentState) => !currentState)
                }}
                >Edit
                </button>
                <button onClick={()=>{
                    setUsers((currentUsersState)=> currentUsersState.filter(
                        (currentUser)=> currentUser.id !== user.id
                        ));
                }}>Delete</button>
                {isEditing && (
                    <button 
                    onClick={()=> {
                        setUsers((currentUsersState)=>{
                            return currentUsersState.map(
                                (currentUser)=> currentUser.id === user.id 
                                ? ({ ...currentUser, username, email}) 
                                : currentUser
                            )
                        });
                        setIsEditing(false)
                    }}>
                        Save
                    </button>)}
            </div>
            <div>
                <b>Username: </b>
                {isEditing ? <input 
                name="username" 
                id="username" 
                value={username}
                onChange={(e)=> {
                    setUsername(e.target.value);
                }}/> 
                : 
                <span>
                    {user.username}
                </span> }
                <br />
                <b>Email: </b> 
                {isEditing ? 
                <input 
                name="email" 
                id="email"
                value={email}
                onChange={(e)=> {
                    setEmail(e.target.value);
                }}/> 
                : 
                <span>
                    {user.email}
                </span> }
                <br />
                <b>ID: </b> <span> {user.id} </span>
            </div>
            
        </div>
    )
}

UserDetails.Proptypes = {
    user: Proptypes.shape({
        id: Proptypes.number.isRequired,
        username: Proptypes.string.isRequired,
        email: Proptypes.string.isRequired
    }).isRequired,
    setUsers: Proptypes.func.isRequired,
}