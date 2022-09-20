import React, {useState, useEffect} from 'react'
import '../stylesheets/Button.css';
import EditButton from './EditButton'

function Button({index, text, emoji, contacts, color, message, edit=false, disabled, buttonToAdd, newButton, setNewButton }){
    
    const[editableButton, setEditableButton] = useState('');
    const [enableInList, setEnableInList] = useState();
    const [buttonColor, setButtonColor] = useState(color);
    const [buttonText, setButtonText] = useState(text);
    const [buttonEmoji, setButtonEmoji] = useState(emoji);
    
    useEffect(() => {
        if (edit){setEditableButton('editable')} else {setEditableButton('')};
    }, [edit]);
    
    useEffect(() => {
        if (disabled){
            setEnableInList('disabled')} else { setEnableInList('') };
    }, [disabled]);

    function onClickHandle(){
        if (!edit){
            alert('Debe acceder con sus datos para enviar mensajes.');
            // TODO: send message
        }
    }

    return(
        <div className={`button-container ${enableInList} ${editableButton}`}>
            <div
                className={`button ${buttonColor} ${enableInList} ${editableButton}`}
                onClick={onClickHandle}>
                {buttonText}
            </div>
            <div className='button-extras'>
                <div className={`emoji ${editableButton}`}
                    onClick={onClickHandle}>
                    {buttonEmoji}
                </div>
                <EditButton
                    index={index}
                    text={text}
                    setButtonText={setButtonText}
                    emoji={emoji}
                    setButtonEmoji={setButtonEmoji}
                    contacts={contacts}
                    color={color}
                    setButtonColor={setButtonColor}
                    message={message}
                    edit={edit}
                    enable={enableInList}
                    setEnableInList={setEnableInList}
                    disabled={disabled}
                    buttonToAdd={buttonToAdd}
                    newButton={newButton}
                    setNewButton={setNewButton}
                />
            </div>
        </div>
    );
}

export default Button;