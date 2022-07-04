import '../stylesheets/NavBar.css';
import {CgMenuBoxed} from 'react-icons/cg';
import 'bootstrap/dist/css/bootstrap.css';
import React,{useState} from 'react';


function NavBar(){

            const [dropdown, setDropdown] = useState(false);
    
            const openCloseDropdown = () => {
                setDropdown(!dropdown);
                // TODO: add or remove className 'visible' to dropdown-menu
            }

    return(

        <div className='navbar-container'>
            <div className='menu' onClick= {openCloseDropdown} >{CgMenuBoxed}</div>
            <div className='dropdown-menu'>
                    <div className="dropdown-menu-option">
                        <h3> Home </h3>
                    </div>
                    <div className="dropdown-menu-option">
                        <h3> Editar botones </h3>
                    </div>
                    <div className="dropdown-menu-option">
                        <h3> Editar contactos </h3>
                    </div>
            </div>

            <a href="Login">
                <img className="profileIcon" src={require('../media/profileIcon.png')} alt="profileIcon" />
            </a>
        </div>
    );
}

export default NavBar;