import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';
import ContactsView from '../views/ContactsView';
import PersonalButton from '../views/PersonalButton';
import ContactRegister from '../views/ContactRegister';


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