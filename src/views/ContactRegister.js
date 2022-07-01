import React,{ useState} from 'react';
import '../stylesheets/ContactRegister.css'

//In this view, user can edit a button changing text or adding/removing contacts to send the message.
function ContactRegister({button}){

    //TODO: import prop: selected button.
    //      Function editButton: makes a change in the selected button (text or contacts) via HTTP request.

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
                <button className="addbutton" type="submit" onClick={handleSubmit}>Añadir contacto</button>
            </form>
        </div>
    );
}

export default ContactRegister;