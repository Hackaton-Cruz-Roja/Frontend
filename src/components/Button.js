import React, {useEffect} from 'react'
const data = '';
const data ='';

useEffect(() => {
    const response = await fetch('https://hackathon-final.herokuapp.com/configuration/create')
        .then(response => response.json())
        .then(data=> text = data);
}, []);

function Button(text){
    return(
        <div className="button">{text}</div>
    );
}

export default Button;