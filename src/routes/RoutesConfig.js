import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../Views/Home';
import Login from '../Views/Login';
import Register from '../Views/Register';
import ContactsView from '../Views/ContactsView';
import PersonalButton from '../Views/PersonalButton';


function RoutesConfig(){
    return(

    <Router>

        <Link to="/"></Link>
        <Link to="/home">Home</Link>
        <Link to="/contactsView">ContactsView</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/personalButton">PersonalButton</Link>


        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/home" element={ <Home/> } />
            <Route path="/login" element={ <Login/> } />
            <Route path="/register" element={ <Register/> } />
            <Route path="/contactsView" element={ <ContactsView/> } />
            <Route path="/contactsView" element={ <PersonalButton/> } />

        </Routes>

    </Router>

    );
}

export default RoutesConfig