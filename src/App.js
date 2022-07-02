import './App.css';
import './Style.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Weatherforecast from './Weatherpage/Weatherforecast';
function App() {

  return (

    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Weatherforecast/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
