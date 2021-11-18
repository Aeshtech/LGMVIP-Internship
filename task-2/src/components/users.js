import React from 'react'
import UserItem from './userItem';

const Users = ({userData}) => {
    return (
        <div className="grid-container">
            {userData.map((user) =><UserItem key={ user.id}  user={user} />)}
        </div>
    )
}

export default Users;