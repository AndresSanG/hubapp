import React from 'react'

const UserInfo = (props) => {

    const
    {avatar,
    github,
    github_name,
    name,
    public_repos,
    followers,
    following}
    = props;
    return (
        <div>
            <img src={avatar} alt="Avatar"/>
            
        </div>
    )
}

export default UserInfo
