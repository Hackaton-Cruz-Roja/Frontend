import React, {useEffect} from 'react'
import '../stylesheets/ContactRegister.css'

function ButtonConfig(){

    const contacts=[];

    useEffect(() => {
    const response = await fetch('https://hackathon-final.herokuapp.com/configuration/create%27')
        .then( response => response.json())
        .then(data=> contacts = data);
}, []);

    const [type, setType] = useState("");
    const [message, setMessage] = useState("");
    const [contact, setContact] = useState("");
    
    const handleSubmit = event => {
        event.preventDefault();
        let res = await fetch("", {
            'Authorization': token,
            method: "POST",
            body: JSON.stringify({
        type: type,
        message: message,
        contact: contact,
        }),
        });
    }

    return(
        <div>
            <form>
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