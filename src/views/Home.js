import React, {useEffect, useState} from 'react'
import Button from '../components/Button.js';

function Home(){

    //Download custom buttons from API REST (with FETCH)
    //Download contacts, so the first one can be associated with the pre-set buttons.
   
    // TODO: complete buttons fetch, add contacts fetch, add contact data to pre-set buttons
    //       map the buttons fetch response to generate customButons nodes to be rendered.
    
        useEffect(() => {
        
        fetch ('https://hackathon-final.herokuapp.com/configuration/create%27')
            .then(async response => {
                const data = await response.json();
                
                //check for error response
                if (!response.ok) {
                    //get error message from body or default to response status
                    const error = (data && data.message)
                    return Promise.reject(error);
                }
                
                setPostID(data.id);
            })
            .catch(error => {
                setErrorMessage(error);
                console.error('There was an error!', error);
            });
        }, []);


    return(
        <div className="main-container" >
            <Button text="Estoy bien" contacts={data.contact[0]} isEnabled={true} color='green' />
            <Button text="Necesito ayuda" contacts={data.contact[0]} isEnabled={true} color='orange' />
            <Button text="Emergencia 112" contacts={data.contact[0]} isEnabled={true} color='red' />

            {/* {customButtons} */}
        </div>
    );
}

export default Home;