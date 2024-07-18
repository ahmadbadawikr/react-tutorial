import PropTypes from "prop-types";
import { UserFavoriteFoods } from "./UserFavoriteFoods";
import { UserUsername } from "./UserUsername";

export function UserProfile(props) {
    console.log(props)
    props.callMe();
    return (
    <div id="user-profile">
       <UserUsername username= {props.username} />
        <b>Age:</b> 
        <span>{props.age}</span>
        <UserFavoriteFoods/>
        <b>Logged In?</b>
        {String(props.isLoggedin)}
    </div>
    );
}

UserProfile.PropTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    callMe: PropTypes.func.isRequired,
    isLoggedin: PropTypes.bool,
    favoriteFoods: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    )

}