import React, {useEffect, useState} from 'react'
import Button from '../components/Button.js';

function Home(){
   
    // TODO:check for token in local storage. If there's not, redirect to login view.
    //      fetch for custom buttons from API, using token from local storage. If empty, redirect to PersonalButton view.
    //      map the response to generate customButtons nodes to be rendered.

            //Download custom buttons from API REST (with FETCH)
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
        //     <Button text="Estoy bien" contacts={data.contact[0]} isEnabled={true} color='green' />
        //     <Button text="Necesito ayuda" contacts={data.contact[0]} isEnabled={true} color='orange' />
        //     <Button text="Emergencia 112" contacts={data.contact[0]} isEnabled={true} color='red' />

            {/* {customButtons} */}
        </div>
    );
}

export default Home;