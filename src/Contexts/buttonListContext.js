import React from 'react';
import { createContext, useState } from 'react';

export const buttonListContext = createContext();

const presetButtons = [{index: 0, text: 'He llegado', color: 'verde', contacts:'Pepe', emoji: '👍', message:'He llegado a casa.', disabled:false }, {index: 1, text: 'Ayuda', color: 'amarillo', contacts:'Maria', emoji: '🙋‍♂️', message:'Necesito que me ayudes, por favor.', disabled: false }, {index: 2, text: 'Emergencia', color: 'rojo', contacts:'Jose', emoji: '🚨', message:'Estoy en situación de emergencia.', disabled: false }];


export const ButtonListProvider = ( {children} ) =>{

    const [buttonsList, setbuttonsList] = useState(presetButtons);

    return(
    <buttonListContext.Provider value={{ buttonsList, setbuttonsList }}>
        { children }
    </buttonListContext.Provider>
    )
}


