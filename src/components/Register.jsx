import React from 'react'
import '../stylesheets/Register.css'

const Register = () => {
  return (
    <section>
        <input className='registerInput' placeholder='DNI/NIE' type="text" />
        <input className='registerInput' placeholder='Name' type="text" />
        <input className='registerInput' placeholder='Surname' type="text" />
        <input className='registerInput' placeholder='Password' type="text" />
        <input className='registerInput' placeholder='Email' type="text" />
        <input className='registerInput' placeholder='Phone number' type="text" />
        <input className='registerInput' placeholder='Observations' type="text" />
        <button>Register</button>
    </section>
  )
}

export default Register

// "identificator"    "name"    "surname"    "password"    "mail"    "phone"    "observations"