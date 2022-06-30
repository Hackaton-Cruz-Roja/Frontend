import React from 'react';
import '../stylesheets/ContactsView.css'
import  PlusIcon from '../media/plusIcon.png'

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />


function ContactsView(){
    return(
        <div className="container">
            <h1 className="title">Mis contactos de confianza</h1>
            <img className= "addIcon"
            src= { PlusIcon }
            alt="plus Icon"/>
        </div>
    );
}

export default ContactsView;