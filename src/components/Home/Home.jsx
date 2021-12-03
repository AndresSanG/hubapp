import React,{useState} from 'react'
//COMPONENTS
import UserForm from '../Form/UserForm'
import Header from '../Header/Header'
import Loading from '../Loading'
import UserInfo from '../UserInfo/UserInfo'
import NotFound from '../NotFound'

const Home = () => {
//STATE
    const [user, setUser] = useState("")
    const [userInfo,setUserInfo] = useState(null)
    const [loading, setLoading] = useState(false)
    const [err,setErr] = useState(false)
//FUNCIONES
    const handleUser = ({value}) => {
        setUser(value)
    }
    const handleSerchUser =async (e) =>{
        // e.innerText(``);
        e.preventDefault();
        setLoading(true)
        setUser("")
        try {
            const API =`https://api.github.com/users/${user}`
            const response = await fetch(API)
            const result = await response.json()
            setUserInfo(result)
            console.log(result);
        }catch (error){
            setErr(true)
            console.log(err);
        }
        setLoading(false)

    }


    return (
        <div>
            <Header/>
            <UserForm 
            handleUser={handleUser}
            handleSerchUser={handleSerchUser}/>
            {userInfo && userInfo.message !== "Not Found" ? 
            (<UserInfo
            avatar={userInfo?.avatar_url}
            github={userInfo?.html_url}
            github_name={userInfo?.login}
            name={userInfo?.name}
            public_repos={userInfo?.public_repos}
            followers={userInfo?.followers}
            following={userInfo?.following}/>) : <NotFound/>}
            {loading && <Loading/>}
        </div>
    )
}

export default Home
