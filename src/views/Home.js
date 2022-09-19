import React, {useEffect, useState, useContext} from 'react'
import Button from '../components/Button.jsx';
import '../stylesheets/Home.css';
import {buttonListContext} from '../Contexts/buttonListContext';

let customButtons = [];

function Home(){
   
    const {buttonsList} = useContext(buttonListContext);
    const [parsedToken, setParsedToken] = useState('');

    // Download custom buttons list from API REST.
    useEffect(() => {

        if (window.localStorage.getItem('token') != null) { 

        setParsedToken(JSON.parse(window.localStorage.getItem('token')));


        const urlButtons = 'https://hackathon-final.herokuapp.com/configuration/create%27'
        fetch (urlButtons+parsedToken)
            .then( response => response.json())
            // .then( data => setButtonsList(data))
            .catch(error => {
                console.error('There was an error!', error);
            });
        }

    }, [buttonsList, parsedToken]);

    customButtons= buttonsList.map((button)=>{
        return(
        < Button
            index={button.index}
            key={button.text}
            text={button.text}
            emoji={button.emoji}
            color= {button.color}
            contacts={button.contacts}
            message={button.message}
            edit={false}
            disabled={button.disabled}
        />
        )
    })

    return(
        <div className="main-container" >
            <div className="buttons">
                {customButtons}
                <div className="specialbutton">
                    📞112
                </div>
            </div>
        </div>
    );
}

export default Home;