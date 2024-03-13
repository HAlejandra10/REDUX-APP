import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

    const user= useSelector((state) => state.user)

  return (
    <div>
        <header>
            <h1>REDUX TOOLKIT EXAMPLE</h1>
            <ul>
                <li>Name: {user.name}</li>
                <li>Username: {user.username} </li>
                <li>Email: {user.email}</li>
                <li>Number: {user.number}</li>
            </ul>
        </header>
    </div>
  )
}

export default Header