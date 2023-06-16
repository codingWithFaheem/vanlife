import React from 'react'
import { Link } from "react-router-dom" ;
import { useVanContext } from '../Context/AppContextProvider';

export const Home = () => {

  return (
<div className=" home">
  <div className=" home-container">
  <div className=' home-sec'>
            <h1>You got the <span className='span-1'>travel </span> <span> Plans</span>, we got the <span className='span-1'><br /> travel </span> <span>  Vans</span>.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="vans">Find your van</Link>
    </div>
    <img src="./images/van.png" alt="van"  className='home-img'/>

        </div>
        </div>
  )
}
