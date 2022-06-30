import React from 'react'
import Button from '../components/Button.js';

function Home(){
    return(
        <div>
            <Button text="Estoy bien"/>
            <Button text="Necesito ayuda"/>
            <Button text="Emergencia 112"/>
        </div>
    );
}

export default Home;