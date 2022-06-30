import React, { useState } from 'react';
import '../stylesheets/LoginComp.css';
import ProfileIcon from '../media/profileIcon.png';

const LoginComp = () => {

    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        console.log(JSON.parse(jsonPayload));
        return JSON.parse(jsonPayload);
    };

    const [identificator, setIdentificator] = useState("")
    const [password, setPassword] = useState("")


    async function signIn() {
        let item = {identificator, password}
        console.warn(item);

        let result = await fetch("https://hackathon-final.herokuapp.com/authenticate", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        }

    })

    result = await result.json()
    
    console.log(result)
    
    let token = parseJwt(result.token)
    console.log(token);
    
    if(result.token) {
        window.location.href='Home'
    }


    }

    return (
        <section>
            <img className="profile-icon" src={ ProfileIcon } alt="profilepic"/>
            <input value={identificator} onChange={(e) => setIdentificator(e.target.value)} className='loginInput' placeholder='Usuario' type="text" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} className='loginInput' placeholder='Contraseña' type="password" />
            <button onClick={signIn} className="login-button" type='submit'>LogIn</button>
            
        </section>
    )
}

export default LoginComp;