import React,{ useState, useEffect, useContext } from 'react';
import '../stylesheets/ContactRegister.css';
import {contactContext} from '../Contexts/contactContext';
import  PlusIcon from '../media/plusIcon.png'

function ContactRegister(){

    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [editButtonMessage, setEditButtonMessage] = useState("Editar");
    const [newContact, setNewContact] = useState(false);
    const [customContacts, setCustomContacts] = useState([]);

    const {contactList, setContactList} = useContext(contactContext);


    useEffect(() => {
        setCustomContacts(contactList.map((contact)=>{
            return(
            <div key={contact.id} className="contacts">
    
                <input type="text" id="input-contactId" name="Id" placeholder={contact.id} disabled ></input>
                <input type="text" id="input-name" name="name" placeholder={contact.name} onChange={(e) => setName(contact.id, e.target.value)} disabled={isDisabled} ></input>
                <input type="text" id="input-phone" name="phone" placeholder={contact.phone} onChange={(e) => setPhone(contact.id, e.target.value)} disabled={isDisabled} ></input>
            </div>
            )}
        ))
    }, [isDisabled]);

    function editContact() {
        setIsDisabled(!isDisabled);
        if (!isDisabled) {
            setEditButtonMessage("Editar");
        } else {
            setEditButtonMessage("Aceptar cambios");
        }
    }

    function addContact(){
        contactList.push({id: contactList.length, name: name, phone: phone });
        setCustomContacts(contactList.map((contact)=>{
            return(
            <div key={contact.id} className="contacts">
    
                <input type="text" id="input-contactId" name="Id" placeholder={contact.id} disabled ></input>
                <input type="text" id="input-name" name="name" placeholder={contact.name} onChange={(e) => setName(contact.id, e.target.value)} disabled={isDisabled} ></input>
                <input type="text" id="input-phone" name="phone" placeholder={contact.phone} onChange={(e) => setPhone(contact.id, e.target.value)} disabled={isDisabled} ></input>
            </div>
            )}
        ))
        // postContactList();
        setNewContact(!newContact);
    }
    
    // const postContactList = () => {
    //     let res = fetch("https://hackathon-final.herokuapp.com/contact/create", {
    //         method: "POST",
    //         body: JSON.stringify({
    //          id: id,
    //          phone: phone,
    //          fullName: fullName,
    //         }),
    //     });
    // }
    
    return(
        <div className='main-container'>
            <h1>Mis Contactos</h1>
            <div>
                {customContacts}
                <div className="editContactButton" onClick={editContact}>{editButtonMessage}</div>
            </div>

                <img className= "addIcon"
                    src= { PlusIcon }
                    alt="plus Icon"
                    title="Añadir contacto"
                    onClick={()=>setNewContact(!newContact)}
                    />
                {newContact &&
                    <form className="contact">
                        <div className="input-container">
                            <input type="text" id="name" name="name" placeholder="Nombre" onChange={(e) => setName(e.target.value)}></input>
                            <input type="text" id="phone" name="phone" placeholder="teléfono" onChange={(e) => setPhone(e.target.value)}></input>
                        </div>
                        <div className="editContactButton" onClick={addContact}>Añadir contacto</div>
                    </form>
                }
        </div>
    );
}

export default ContactRegister;