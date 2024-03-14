import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
//se necesita la accion:
import { changeEmail } from '../redux/userSlice';


const Email = () => {

  const dispatch = useDispatch();
  const email= useSelector((state) => state.user.email);

  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.target.value));
  }


  return (
    <input 
    type="email"  
    value={email} 
    placeholder='Email' 
    onChange={handleEmailChange}/>

  )
}

export default Email

