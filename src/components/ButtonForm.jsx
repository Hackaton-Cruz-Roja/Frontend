import React, {useState, useContext, useEffect} from 'react'
import '../stylesheets/ButtonForm.css';
import {contactContext} from '../Contexts/contactContext';
import {buttonListContext} from '../Contexts/buttonListContext';


function ButtonForm({index, text, setButtonText, emoji, setButtonEmoji, contacts, color, setButtonColor, message, toggleEdit, setToggleEdit, buttonToAdd, newButton, setNewButton}) {

  const [contactOptions, setContactOptions] = useState([]);
  const [updatedButton, setUpdatedButton] = useState({index:index, text:text, color:color, contacts:contacts, emoji:emoji, message:message, disabled:false});
  const {contactList}  = useContext(contactContext);
  const {buttonsList}  = useContext(buttonListContext);

  let buttonInList = -1;

  useEffect(() => {
    setContactOptions(contactList.map((contact)=>{
      return(<option key={contact.id} className='option' value={contact.name}>{contact.name}</option>)
     }))
  }, [contactList]);

  function updateButton(key, value) {
    switch (key){
      case 'text':
        setButtonText(value);
        setUpdatedButton({...updatedButton, text : value});
        break;
      case 'color':
        setButtonColor(value);
        setUpdatedButton({...updatedButton, color : value});
        break;
      case 'emoji':
        setButtonEmoji(value);
        setUpdatedButton({...updatedButton, emoji : value});
        break;
      case 'message':
        setUpdatedButton({...updatedButton, message : value});
        break;
      case 'contacts':
        setUpdatedButton({...updatedButton, contacts : value});
        break;
      // case 'sendLoc':
      //   setUpdatedButton({...updatedButton, sendLoc : value});
      //   break;
      // case 'sendInfo':
      //   setUpdatedButton({...updatedButton, sendInfo : value});
      //   break;
      default:
        console.log('');
    }
  }

  function sendButton(event) {
    event.preventDefault();
    if (buttonToAdd){
      setNewButton(!newButton);
      buttonsList.push(updatedButton);
      return
    };
    buttonInList = buttonsList.findIndex((button)=>button.index === index );
    buttonsList[buttonInList] = Object.assign(buttonsList[buttonInList], updatedButton);
    setToggleEdit(!toggleEdit);
  }
 
  return (
    <div className='edit-form-container' >
        <form className='edit-form'>
          <div className='section-container'>
            <label className='label' htmlFor='texto'>Texto</label>
            <input type='text' className='input' id='texto' defaultValue={text} onChange={(e)=>updateButton('text', e.target.value)}/><br />
          </div>
          <div className='section-container'>
            <label  className='label' htmlFor='color'>Color</label>
            <select className='select' id='color' name="color" defaultValue={color} onChange={(e)=>updateButton('color', e.target.value)}>
                <option className='select-red' value="rojo">rojo</option>
                <option className='select-yellow' value="amarillo">amarillo</option>
                <option className='select-green' value="verde">verde</option>
                <option  className='select-blue'value="azul">azul</option>
            </select>
          </div>
          <div className='section-container'>
            <label className='label' htmlFor='emoji'>Emoji</label>
            <select className='select' id='emoji' name="emoji" defaultValue={emoji} onChange={(e)=>updateButton('emoji', e.target.value)}>
              <option value="👍">👍</option>
              <option value="👌">👌</option>
              <option value="✋">✋</option>
              <option value="🙋‍♀️">🙋‍♀️</option>
              <option value="🙋‍♂️">🙋‍♂️</option>
              <option value="🚨">🚨</option>
              <option value="🏠">🏠</option>
              <option value="🏥">🏥</option>
              <option value="📞">📞</option>
            </select><br />
          </div>
          <div className='section-container'>
            <label className='label' htmlFor='mensaje'>Mensaje</label>
            <textarea className='input' id='mensaje'  rows="3" cols="25" defaultValue={message} onChange={(e)=>updateButton('message', e.target.value)} /><br />
          </div>
          <div className='section-container'>
            <label className='label' htmlFor='destinatarios'>Destinatario</label>
            <select className='select-contact' id='destinatarios' name="destinatarions" onChange={(e)=>updateButton('contacts', e.target.value)} >
              {contactOptions}
            </select><br />
          </div>
          <div className='checkbox-container'>
            <input type="checkbox" id='sendLoc' defaultChecked onChange={(e)=>updateButton('sendLoc', e.target.value)}/>
            <label className='label' htmlFor='sendLoc'>Adjuntar localización</label>
          </div>
          <div className='checkbox-container'>
            <input type="checkbox" id='sendInfo' defaultChecked onChange={(e)=>updateButton('sendInfo', e.target.value)}/>
            <label className='label' htmlFor='sendInfo'>Adjuntar datos de interés</label>
          </div>
          <button className='form-button' onClick={sendButton}>Aplicar cambios</button>
      </form>
  </div>
  )
}

export default ButtonForm;