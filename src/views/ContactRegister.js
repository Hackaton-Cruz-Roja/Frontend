import React from 'react';
import '../stylesheets/ContactRegister.css'




function ContactRegister(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    
    const handleSubmit = event => {
        event.preventDefault();
        let res = await fetch("", {
            method: "POST",
            body: JSON.stringify({
        name: name,
        email: email,
        mobile: mobile,
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