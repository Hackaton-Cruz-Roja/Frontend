import React, {useState, useEffect, useContext}  from 'react';
import Button from '../components/Button';
import {buttonListContext} from '../Contexts/buttonListContext';
import '../stylesheets/PersonalButtons.css'; 
import  PlusIcon from '../media/plusIcon.png'


function PersonalButton(){
    //      TODO: function to send changes in buttons or new ones to the backend (POST)

    const [newButton, setNewButton] = useState(false);
    const [customButtons, setCustomButtons] = useState([]);

    const {buttonsList} = useContext(buttonListContext);


    useEffect(() => {
        setCustomButtons( buttonsList.map((button)=>{
          return(
              < Button
                  index={button.index}
                  key={button.text}
                  text={button.text}
                  emoji={button.emoji}
                  color= {button.color}
                  contacts={button.contacts}
                  message={button.message}
                  edit={true}
                  disabled={button.disabled}
                  buttonToAdd = {false} />
          )
          })
      );
    
    }, [buttonsList]);
    
        
    return(
        <div className='main-container'>
            <div className="buttons">
                <h1>Mis Botones</h1>
                {customButtons}
                <img className= "addIcon"
                    src= { PlusIcon }
                    alt="plus Icon"
                    title="Añadir botón"
                    onClick={()=>setNewButton(!newButton)}
                />
                {newButton &&
                    < Button 
                        index={buttonsList.length}
                        key='nuevo' text='Nuevo botón'
                        emoji='🙋‍♂️' color= 'amarillo'
                        contacts=''
                        message=''
                        edit={true}
                        disabled={false}
                        buttonToAdd={true}
                        newButton={newButton}
                        setNewButton={setNewButton}
                    />
                }
            </div>
        </div>
    );
}

export default PersonalButton;