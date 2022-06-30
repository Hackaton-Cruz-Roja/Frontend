import React, {useState} from 'react';
import '../stylesheets/ContactRegister.css'

function ContactRegister(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    
    const handleSubmit = event => {
        event.preventDefault();
        fetch("https://hackathon-final.herokuapp.com/contact/create", {
            method: "POST",
            body: JSON.stringify({
        phone: phone,
        fullname: fullname,
        photo: null,
        }),
        });
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" name="name" placeholder="Nombre" onChange={(e) => setName(e.target.value)}></input>
                <input type="text" id="mobile" name="mobile" placeholder="Teléfono" onChange={(e) => setEmail(e.target.value)}></input>
                <input type="email" id="email" name="email" placeholder="Email" onChange={(e) => setMobile(e.target.value)}></input>
                <label for="asignacion">Botón a asignar</label>
                <select name="asignacion" id="asignacion">
                    <option value="green">Botón OK</option>
                    <option value="yellow">Botón Ayuda</option>
                    <option value="red">Botón Emergencia</option>
                </select>
                <button className="addbutton" type="submit">Añadir contacto</button>
            </form>
        </div>
    );
}

export default ContactRegister;