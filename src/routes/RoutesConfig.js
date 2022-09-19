import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';
import PersonalButton from '../views/PersonalButton';
import ContactRegister from '../views/ContactRegister';
import NavBar from '../components/NavBar';



function RoutesConfig(){
    return(

    <Router>
              <NavBar/>
        <Link to="/"></Link>
        <Link to="/home"></Link>
        <Link to="/login"></Link>
        <Link to="/register"></Link>
        <Link to="/personalButton"></Link>
        <Link to="/contactRegister"></Link>


        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/home" element={ <Home/> } />
            <Route path="/login" element={ <Login/> } />
            <Route path="/register" element={ <Register/> } />
            <Route path="/personalButton" element={ <PersonalButton/> } />
            <Route path="/contactRegister" element={ <ContactRegister/> } />

        </Routes>

    </Router>

    );
}

export default RoutesConfig