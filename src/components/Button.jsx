import '../stylesheets/Button.css'

function Button({text, contacts, isEnabled, color}){
    
// TODO: onClick funcion that sends message to contacts.
//       add isEnabled and color

    return(
        <div
        className="button"
        onClick={onClick}>
            {text}
        </div>
    );
}

export default Button;