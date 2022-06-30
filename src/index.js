import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Map from './components/Map';
//import reportWebVitals from './reportWebVitals';
//import RegisterComp from './components/RegisterComp'
//import LoginComp from './components/LoginComp'


//const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Map />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
