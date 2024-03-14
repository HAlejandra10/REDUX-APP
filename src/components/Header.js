import React from 'react'
import { useSelector } from "react-redux";

const Header = () => {
    "the userSelector receive the global state and from state coming from userSlice file where is the state.user meaning we want justly the state user. The 'user' is the name put where is userSlice file to"

    "(state): coming from index file, it's the Provider component wrapping the app to give the '(state)'"
    const user = useSelector((state) => state.user)

  return (
    <header>
        <h1>REDUX TOOLKIT EXAMPLE</h1>
        <ul>
            {/* el user.  viene del estado global */}
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Username: {user.username}</li>
        </ul>
    </header>
  )
}

export default Header