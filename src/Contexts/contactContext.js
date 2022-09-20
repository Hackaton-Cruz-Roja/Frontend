import React from 'react';
import { createContext, useState } from 'react';

export const contactContext = createContext();

const presetContacts = [{id:0, name: 'Pepe', phone: 655555555, }, {id:1, name: 'Maria', phone: 655555556, }, {id:2, name: 'José', phone: 655555557, }, {id:3, name: 'Andrés', phone: 655555558, }];


export const ContactProvider = ( {children} ) =>{

    const [contactList, setContactList] = useState(presetContacts);

    return(
    <contactContext.Provider value={{ contactList, setContactList }}>
        { children }
    </contactContext.Provider>
    )
}
