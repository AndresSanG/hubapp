import React from 'react'

const UserForm = ({handleUser,handleSerchUser}) => {
    return (
        <form onSubmit={(e)=>handleSerchUser(e)}>
            <input 
            type="text" 
            placeholder="Buscar Usuario" 
            onChange={({target})=>handleUser(target)}/>
            <input type="submit" value="Encontrar"/>
        </form>
        
    )
}

export default UserForm
