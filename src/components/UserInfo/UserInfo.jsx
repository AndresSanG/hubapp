import React from 'react'

const UserInfo = (props) => {

    const
    {avatar,
    name,
    public_repos,
    followers,
    following}
    = props;
    return (
        <div>
            <img src={avatar} alt="Avatar"/>
            <div>
                <h4>{name}</h4>
                <h4>REPOS:{public_repos}</h4>
                <h4>FLLWRS:{followers}</h4>
                <h4>FLLWING:{following}</h4>
            </div>
        </div>
    )
}

export default UserInfo
