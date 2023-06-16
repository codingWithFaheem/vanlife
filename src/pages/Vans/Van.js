import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {db} from '../../config/firebase';
import { useVanContext } from '../../Context/AppContextProvider';
export const Van = () => {
const {vanData} = useVanContext()
  const vanElements = vanData.map(van => (
    <Link to={`/vans/${van.id}`}>
        <div key={van.id} className="van-tile">
            <img src={van.imgUrl} alt="van"/>
        <div className="van-info">
            <h3>{van.name}</h3>
             <p>${van.price}<span>/day</span></p>
           </ div>
             <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
  </Link>
  ))
    
  
  return (
    <div className="van-list-container">
          <h1>Explore our van options</h1>
          <div className="van-list">
            {vanElements}
          </div>
    </div>
  )
}
