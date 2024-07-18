import propTypes from "prop-types";
import { UserFavoriteFoods } from "./UserFavoriteFoods";
import { UserUsername } from "./UserUsername";

export function UserProfile(props) {
    console.log(props)
    props.callMe();
    return (
    <>
       <UserUsername username= {props.username} />
        <b>Age:</b> 
        <span>{props.age}</span>
        <UserFavoriteFoods/>
        <b>Logged In?</b>
        {String(props.isLoggedin)}
    </>
    );
}

UserProfile.propTypes = {
    username: propTypes.string.isRequired,
    age: propTypes.number.isRequired,
    callMe: propTypes.func.isRequired,
    isLoggedin: propTypes.bool,
    favoriteFoods: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            name: propTypes.string.isRequired
        })
    )

}