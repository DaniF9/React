import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const HomePage = () => {

const {user} = useContext( UserContext);

  return (
    <>
    {/* Con el ? hacemos que se tenga una condicion si el usuario existe no haga nada */}
    <h1>Home Page <small>{user?.name}</small></h1> 
    <hr />

    <pre>

      {JSON.stringify(user,null,3)}
    </pre>


      
    </>
  )
}


