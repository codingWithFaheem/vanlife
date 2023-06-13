import './App.css';
import {Routes ,Route} from 'react-router-dom' ;
import { About, Home } from './pages';
function App() {
  return (
    <div className="App">
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
