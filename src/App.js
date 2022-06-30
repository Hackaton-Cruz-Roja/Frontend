import './App.css';
import RoutesConfig from './routes/RoutesConfig.js';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <RoutesConfig/>
    </div>
  );
}

export default App;
