import React,{useState} from 'react'
//COMPONENTS
import UserForm from '../Form/UserForm'
import UserInfo from '../UserInfo/UserInfo'

const Home = () => {
//STATE
    const [user, setUser] = useState("")
    const [userInfo,setUserInfo] = useState(null)
//FUNCIONES
    const handleUser = ({value}) => {
        setUser(value)
    }
    const handleSerchUser =async (e) =>{
        e.preventDefault();
        const API =`https://api.github.com/users/${user}`
        const response = await fetch(API)
        const result = await response.json()
        setUserInfo(result)
        console.log(result);

    }


    return (
        <div>
            <UserForm 
            handleUser={handleUser}
            handleSerchUser={handleSerchUser}/>
            {userInfo && 
            <UserInfo
             avatar={userInfo?.avatar_url}
            github={userInfo?.html_url}
            github_name={userInfo?.login}
            name={userInfo?.name}
            public_repos={userInfo?.public_repos}
            followers={userInfo?.followers}
            following={userInfo?.following}/>}
        </div>
    )
}

export default Home
