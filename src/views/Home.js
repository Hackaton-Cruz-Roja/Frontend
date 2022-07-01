import React, {useEffect} from 'react'
import Button from '../components/Button.js';

function Home(){

useEffect(() => {

//Download custom buttons from API REST (with FETCH)
    const customButtonsData = await fetch ('https://hackathon-final.herokuapp.com/configuration/create%27')
        .then(buttonResponse => buttonResponse.json())
        .then(buttonData => console.log(buttonData));
}, []);

    return(
        <div className="main-container" >
            <Button text="Estoy bien" contacts="" isEnabled={true} />
            <Button text="Necesito ayuda" contacts="" isEnabled={true} />
            <Button text="Emergencia 112" contacts="" isEnabled={true} />

            {/* {customButtons} */}
        </div>
    );
}

export default Home;