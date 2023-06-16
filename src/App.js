import './App.css';
import {Routes ,Route} from 'react-router-dom' ;
import {  Home ,About,Van, VanDetails,Dashboard,Income, HostVan,Review, HostVanDetails, VanInfo, VanPricing, VanPhoto } from './pages';
import { Layout } from './comoponent';
import { HostLayout } from './comoponent/HostLayout';
import { AppContextProvider } from './Context/AppContextProvider';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Routes>
          <Route path='/' element = {<Layout />}>
           <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans'>
            <Route index element={<Van />} />
             <Route path=':id' element={<VanDetails /> } />
          </Route>
          <Route path='host' te  element ={<HostLayout />}>
          <Route index element={<Dashboard />} />
             <Route path='income' element={<Income />} />
             <Route path='vans' element={<HostVan/>} />
              <Route path='reviews' element={<Review />} />
             <Route path='vans/:id' element={<HostVanDetails/>}>
                <Route index element = {<VanInfo  />} />
                <Route path='priceing' element = {<VanPricing />} />
                <Route path='photos' element = {<VanPhoto /> } />

             </Route>

          </Route>
        </Route>
        </Routes>
      </AppContextProvider>
    </div>
  );
}

export default App;
