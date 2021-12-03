import React from 'react'
import { Link } from 'react-router-dom';

const UserInfo = (props) => {

    const
    {avatar,
    public_repos,
    followers,
    github_name,
    following}
    = props;
    return (
        <div>
            <div>
            <img src={avatar} alt="Avatar"/>
                <h4>{github_name}</h4>
            </div>
            <div>
                <h4>REPOS:{public_repos}</h4>       
                <h4>
                <Link to={`/followers/${github_name}`}>
                FLLWRS:{followers}
                </Link>
                </h4>
                <h4>FLLWING:{following}</h4>
            </div>
        </div>
    )
}

export default UserInfo
