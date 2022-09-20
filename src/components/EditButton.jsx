import React,{useEffect, useState, useContext} from 'react';
import '../stylesheets/EditButton.css';
import {buttonListContext} from '../Contexts/buttonListContext';
import ButtonForm from './ButtonForm';


function EditButton({index, text, setButtonText, emoji, setButtonEmoji, contacts, color, setButtonColor, message, edit, enableInList, setEnableInList, disabled, buttonToAdd, newButton, setNewButton}) {

  const[editing, setEditable] = useState('');
  const[toggleEdit, setToggleEdit] = useState(false);
  const[toggleForm, setToggleForm] =  useState('');
  const [setButtonIndex] = useState(index);
  const [mostrar, setMostrar] = useState('Ocultar');
  const [hideIcon, setHideIcon] = useState('visibility_off');
  const {buttonsList} = useContext(buttonListContext);

  useEffect(() => {
    if(edit===true){
      setEditable('edit')} else{setEditable('');
    }
    if(toggleEdit===true){setToggleForm('expand')} else{setToggleForm('')}
  }, [edit, toggleEdit])

  useEffect(() => {
    if (disabled){
      setMostrar('Oculto-Mostrar');
    } else {
        setMostrar('Visible-Ocultar');
    }
    if (disabled){
      setHideIcon('visibility');
    } else {
    setHideIcon('visibility_off');
    }
  }, [disabled])

  function toggleEditForm(){
    setToggleEdit(!toggleEdit);
  }

  function toggleDisabled(){
    setButtonIndex(buttonsList.findIndex((obj => obj.text === text)));
    setEnableInList(!enableInList);
    buttonsList[index].disabled = !buttonsList[index].disabled

    if (mostrar === 'Visible-Ocultar'){
      setMostrar('Oculto-Mostrar');
      setEnableInList('');
    } else {
        setMostrar('Visible-Ocultar');
        setEnableInList('disabled');
    }
    if (hideIcon === 'visibility_off'){
      setHideIcon('visibility');
      setEnableInList('disabled');
    } else {
    setHideIcon('visibility_off');
    setEnableInList('');
    }
  }
  
  return (
    <div className={`editContainer ${editing}`}>
      <div className="edit" onClick={toggleEditForm}>Editar 
        <div className={`material-symbols-outlined ${toggleForm}`} >expand_more</div>
      </div>
      <div className={`hide ${buttonToAdd}`} onClick={toggleDisabled}>
        <div className="hide-text">{mostrar}</div>
        <div className="material-symbols-outlined">{hideIcon}</div>
      </div>
        { toggleEdit && < ButtonForm
          index={index}
          text={text}
          setButtonText={setButtonText}
          emoji={emoji}
          setButtonEmoji={setButtonEmoji}
          contacts={contacts}
          color={color}
          setButtonColor={setButtonColor}
          message={message}
          toggleEdit={toggleEdit}
          setToggleEdit={setToggleEdit}
          buttonToAdd = {buttonToAdd}
          newButton = {newButton}
          setNewButton={setNewButton}
          /> }
    </div>
  )
}

export default EditButton;