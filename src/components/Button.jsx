import '../stylesheets/Button.css'

function Button({text, contacts, isEnabled}){
    
// TODO: onClick funcion that sends message.

    return(
        <div
        className="button"
        onClick={onClick}>
            {text}
        </div>
    );
}

export default Button;