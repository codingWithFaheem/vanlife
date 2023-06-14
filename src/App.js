import './App.css';
import {Routes ,Route} from 'react-router-dom' ;
import { About, Home, Van, VanDetails } from './pages';
import { NavBar } from './comoponent';
function App() {
  return (
    <div className="App">
          <NavBar />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/van' element={<Van />} />
          <Route path={`/van/:id`} element={<VanDetails /> } />

        </Routes>
    </div>
  );
}

export default App;
