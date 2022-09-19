import './App.css';
import RoutesConfig from './routes/RoutesConfig';
import {ButtonListProvider} from './Contexts/buttonListContext';
import {ContactProvider} from './Contexts/contactContext';


function App() {
  return (
<ButtonListProvider>
  <ContactProvider>
        <div className="App">
          <RoutesConfig/>
        </div>
  </ContactProvider>
</ButtonListProvider>
  );
}

export default App;
