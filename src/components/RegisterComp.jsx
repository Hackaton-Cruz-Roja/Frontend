import React,{useState} from 'react'
import '../stylesheets/RegisterComp.css'
import ProfileIcon from '../media/profileIcon.png';

const RegisterComp = () => {
  const [phone, setPhone] = useState("");
    const [fullName, setFullName] = useState("");
    const [photo, setPhoto] = useState("");
    
    const handleSubmit = event => {
        event.preventDefault();
        let res = fetch("https://hackathon-final.herokuapp.com/contact/create", {
            method: "POST",
            body: JSON.stringify({
        phone: phone,
        fullName: fullName,
        photo: photo,
        }),
        });
    }
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