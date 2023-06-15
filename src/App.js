import './App.css';
import {Routes ,Route} from 'react-router-dom' ;
import {  Home ,About,Van, VanDetails,Dashboard,Income,Review } from './pages';
import { Layout } from './comoponent';
import { HostLayout } from './comoponent/HostLayout';

function App() {
  return (
    <div className="App">
        <Routes>
      <Route path='/' element = {<Layout />}>
           <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='van'>
              <Route index element={<Van />} />
              <Route path={`:id`} element={<VanDetails /> } />
          </Route>
          <Route path='host' te  element ={<HostLayout />}>
          <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Review />} />

          </Route>
        </Route>

        </Routes>
    </div>
  );
}

export default App;
