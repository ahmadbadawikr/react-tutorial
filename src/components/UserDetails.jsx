import Proptypes from "prop-types";

export function UserDetails({user}) {
    return (
        <div key={user.id}>
            <b>Username: </b><span>{user.username}</span>
            <br />
            <b>Email: </b> <span>{user.email}</span>
            <br />
            <b>ID: </b> <span> {user.id} </span>
        </div>
    )
}

UserDetails.Proptypes = {
    user: Proptypes.shape({
        id: Proptypes.number.isRequired,
        username: Proptypes.string.isRequired,
        email: Proptypes.string.isRequired
    })
}