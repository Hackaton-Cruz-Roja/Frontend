import React from 'react'
import '../stylesheets/RegisterComp.css'
import ProfileIcon from '../media/profileIcon.png';

const RegisterComp = () => {
  return (
    <section>
        <img className="profile-icon" src={ ProfileIcon } alt="profilepic"/>

        <input className='registerInput' placeholder='DNI/NIE' type="text" />
        <input className='registerInput' placeholder='Name' type="text" />
        <input className='registerInput' placeholder='Surname' type="text" />
        <input className='registerInput' placeholder='Password' type="text" />
        <input className='registerInput' placeholder='Email' type="text" />
        <input className='registerInput' placeholder='Phone number' type="text" />
        <input className='registerInput' placeholder='Observations' type="text" />
        <button type='submit'>Register</button>
    </section>
  )
}

export default RegisterComp;