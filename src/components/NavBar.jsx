import '../stylesheets/NavBar.css';
import {CgMenuBoxed} from 'react-icons/cg';
import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';



function NavBar(){

    const [message, setMessage] = useState('');
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        if (window.localStorage.getItem('token') === null) { 
            setMessage('Es necesario acceder con sus datos. =>');
        }
    }, []);

    return(

        <div className='navbar-container'>
            <div className='dd-container'>
                <div className='dd-header'  onClick={()=>setDropdown(!dropdown)}>
                    <div className='dd-header-title' title="Menu">{CgMenuBoxed()}</div>
                </div>
                <div className={`dd-list ${dropdown? 'enabled' : 'disabled'}`} >
                    <Link to={'/'} >
                        <div className='dd-list-item'onClick={()=>setDropdown(!dropdown)}>Inicio</div>
                    </Link>
                    <Link to={'/personalButton'}>
                        <div className='dd-list-item'onClick={()=>setDropdown(!dropdown)}>Mis Botones</div>
                    </Link>
                    <Link to={'/contactRegister'}>
                        <div className='dd-list-item'onClick={()=>setDropdown(!dropdown)}>Mis Contactos</div>
                    </Link>
                </div>
            </div>
            <div className="message">{message}</div>
            <Link to="Login">
                <img className="profileIcon" title="Login" src={require('../media/profileIcon.png')} alt="profileIcon" />
            </Link>
        </div>
    );
}

export default NavBar;