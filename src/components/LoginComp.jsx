import React from 'react';
import '../stylesheets/LoginComp.css';
import ProfileIcon from '../media/profileIcon.png';


const LoginComp = () => {
    return (
        <section>
            <img className="profile-icon" src={ ProfileIcon } alt="profilepic"/>
            <input className='loginInput' placeholder='Usuario' type="text" />
            <input className='loginInput' placeholder='Contraseña' type="text" />
            <button className="login-button" type='submit'>LogIn</button>
        </section>
    )
}

export default LoginComp;