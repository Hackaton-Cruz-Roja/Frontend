import React, {useEffect} from 'react'
import '../stylesheets/Button.css'



function Button({text, onClick}){
    
// useEffect(() => {
//     const response = await fetch('https://hackathon-final.herokuapp.com/configuration/create')
//         .then(response => response.json())
//         .then(data=> text = data);
// }, []);

    return(
        <div
        className="button"
        onClick={onClick}>
            {text}
        </div>
    );
}

export default Button;