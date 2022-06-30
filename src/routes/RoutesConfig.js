import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';
import ContactsView from '../views/ContactsView';
import PersonalButton from '../views/PersonalButton';


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