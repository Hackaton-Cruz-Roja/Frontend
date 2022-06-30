import React from 'react';
import '../stylesheets/ContactRegister.css'


function ContactRegister(){


    return(
        <div className="customcontainer">
            <div className="burguer">
                <div className="burguerline"></div>
                <div className="burguerline"></div>
                <div className="burguerline"></div>
            </div>
            <form>
                <input type="text" id="nombre" name="nombre" placeholder="Nombre"></input>
                <input type="text" id="telefono" name="telefono" placeholder="Teléfono"></input>
                <label for="asignacion">Botón a asignar</label>
                <select name="asignacion" id="asignacion">
                    <option value="green">Botón OK</option>
                    <option value="yellow">Botón Ayuda</option>
                    <option value="red">Botón Emergencia</option>
                </select>
                <div className="addbutton">Añadir contacto</div>
            </form>
        </div>
    );
}

export default ContactRegister;