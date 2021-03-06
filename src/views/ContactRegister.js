import React,{ useState} from 'react';
import '../stylesheets/ContactRegister.css'


function ContactRegister(){

    const [phone, setPhone] = useState("");
    const [fullName, setFullName] = useState("");
    
    const handleSubmit = event => {
        event.preventDefault();
        let res = fetch("https://hackathon-final.herokuapp.com/contact/create", {
            method: "POST",
            body: JSON.stringify({
        phone: phone,
        fullName: fullName,
        }),
        });
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="phone" name="phone" placeholder="telefono" onChange={(e) => setPhone(e.target.value)}></input>
                <input type="text" id="fullName" name="fullName" placeholder="Nombre completo" onChange={(e) => setFullName(e.target.value)}></input>
                <select name="asignacion" id="asignacion">
                    <option value="green">He llegado</option>
                    <option value="yellow">Necesito Ayuda</option>
                    <option value="red">Llamar 112</option>
                </select>
                <button className="addbutton" type="submit">Añadir contacto</button>
            </form>
        </div>
    );
}

export default ContactRegister;