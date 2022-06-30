// import React, {useEffect} from 'react'
import '../stylesheets/Button.css'

// useEffect(() => {
//     const response = await fetch('https://hackathon-final.herokuapp.com/configuration/create%27)
//         .then(response => response.json())
//         .then(data=> text = data);
// }, []);

function Button({text, onClick}){
    return(
        <div
        className="button"
        onClick={onClick}>
            {text}
        </div>
    );
}

export default Button;