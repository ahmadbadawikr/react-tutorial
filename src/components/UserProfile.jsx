import { UserFavoriteFoods } from "./UserFavoriteFoods";
import { UserUsername } from "./UserUsername";

export function UserProfile(props) {
    console.log(props)
    props.callMe()
    return (
    <div id="user-profile">
       <UserUsername username= "Bob" />
        <b>Age:</b> 
        <span>{props.age}</span>
        <UserFavoriteFoods/>
        <b>Logged In?</b>
        {String(props.isLoggedin)}
    </div>
    );
}