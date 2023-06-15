import React from 'react'
import { Link } from "react-router-dom" ;
import { useVanContext } from '../Context/AppContextProvider';

export const Home = () => {

  return (
<div className="border home-container">
  <div className=' home-sec'>
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="vans">Find your van</Link>
    </div>
    <img src="./images/van.png" alt="van"  className='home-img'/>

        </div>
  )
}
