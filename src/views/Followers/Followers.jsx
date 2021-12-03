import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import UserInfo from '../../components/UserInfo/UserInfo'

const Followers = () => {
    //HOOKS
    const {user} = useParams()
    const [followers, setFollowers] = useState(null)
    
    useEffect(() => {
        const handleUserFollowers = async () => {
            const response = await fetch(`https://api.github.com/users/${user}/followers`)
            const result = await response.json()
            setFollowers(result)
            console.log(result);
        }
        handleUserFollowers()
    }, [user])


    return (
        <div>
            <h3>Esta es de los followers</h3>
        {
            followers?.map(userf => (
                <UserInfo
                key={userf.id}
                avatar={userf.avatar_url}
                github_name={userf.login}
                github={userf.html_url}/> 
            ))
        }

        </div>
    )
}

export default Followers
