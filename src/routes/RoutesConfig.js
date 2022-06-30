import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../Views/Home';
import Login from '../Views/Login';
import Register from '../Views/Register';
import ContactsView from '../Views/ContactsView';
import PersonalButton from '../Views/PersonalButton';
import ContactRegister from '../Views/ContactRegister';


function RoutesConfig(){
    return(

    <Router>

        <Link to="/"></Link>
        <Link to="/home"></Link>
        <Link to="/contactsView"></Link>
        <Link to="/login"></Link>
        <Link to="/register"></Link>
        <Link to="/personalButton"></Link>
        <Link to="/contactRegister"></Link>


        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/home" element={ <Home/> } />
            <Route path="/login" element={ <Login/> } />
            <Route path="/register" element={ <Register/> } />
            <Route path="/contactsView" element={ <ContactsView/> } />
            <Route path="/personalButton" element={ <PersonalButton/> } />
            <Route path="/contactRegister" element={ <ContactRegister/> } />

        </Routes>

    </Router>

    );
}

export default RoutesConfig