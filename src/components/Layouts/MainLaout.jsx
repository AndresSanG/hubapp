import React from 'react'
//COMPONENTS
import Header from '../Header/Header'

const MainLaout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}

export default MainLaout
