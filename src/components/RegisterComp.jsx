import React,  {useState} from 'react'
import '../stylesheets/RegisterComp.css'
import ProfileIcon from '../media/profileIcon.png';

const RegisterComp = () => {
  
  const [identificator, setIdentificator] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [password, setPassword] = useState("")
  const [mail, setMail] = useState("")
  const [phone, setPhone] = useState("")
  const [observations, setObservations] = useState("")

  async function signUp() {
    let item = {identificator, name, surname, password, mail, phone, observations}
    console.warn(item);

    let result = await fetch("https://hackathon-final.herokuapp.com/register", {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }

  })

  result = await result.json()
    console.log("result", result)
  }

  return (
    <section>
        <img className="profile-icon" src={ ProfileIcon } alt="profilepic"/>

        <input value={identificator} onChange={(e) => setIdentificator(e.target.value)} className='registerInput' placeholder='DNI/NIE' type="text" />
        <input value={name} onChange={(e) => setName(e.target.value)} className='registerInput' placeholder='Name' type="text" />
        <input value={surname} onChange={(e) => setSurname(e.target.value)} className='registerInput' placeholder='Surname' type="text" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} className='registerInput' placeholder='Password' type="password" />
        <input value={mail} onChange={(e) => setMail(e.target.value)} className='registerInput' placeholder='Email' type="text" />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} className='registerInput' placeholder='Phone number' type="text" />
        <input value={observations} onChange={(e) => setObservations(e.target.value)} className='registerInput' placeholder='Observations' type="text" />
        <button onClick={signUp} type='submit'>Register</button>
    </section>
  )
}

export default RegisterComp;