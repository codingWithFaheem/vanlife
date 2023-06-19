import React from 'react'
import {Link} from "react-router-dom"
import { useVanContext } from '../../Context/AppContextProvider'
import { BsStarFill } from "react-icons/bs"
export const Dashboard = () => {
  const {vanData} = useVanContext()
  const hostVansEls = vanData.map((van) => (
    <div className="host-van-single" key={van.id}>
        <img src={van.imgUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
        </div>
        <Link to={`vans/${van.id}`}>View</Link>
    </div>
  ))
  return (
    <div className='host-dash'>
            <section className="host-dashboard-earnings">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to="income">Details</Link>
            </section>
            <section className="host-dashboard-reviews">
                <h2>Review score</h2>
                <BsStarFill className="star" />
                <p>
                    <span>5.0</span>/5
                </p>
                <Link to="reviews">Details</Link>
            </section>
            <section className="host-dashboard-vans">
                <div className="top">
                    <h2>Your listed vans</h2>
                    <Link to="vans">View all</Link>
                </div>
               
                   <div className="host-vans-list">
                   <section>{hostVansEls}</section>
               </div> 

               </section>
             </div>
  )
}
