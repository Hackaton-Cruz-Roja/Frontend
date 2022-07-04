import '../stylesheets/Button.css'

function Button({text, contacts, color}){
    
// TODO: onClick function that sends message to contacts according to text, contacts, and geolocalization or not.
//       Add color to button according to color prop.

    return(
        <div
        className="button"
        onClick={onClick}>
            {text}
        </div>
    );
}

export default Button;