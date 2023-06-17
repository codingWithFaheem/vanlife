import React, { useEffect, useState } from 'react'
import { Link , useSearchParams } from 'react-router-dom'
import {db} from '../../config/firebase';
import { useVanContext } from '../../Context/AppContextProvider';
export const Van = () => {
const {vanData} = useVanContext()
  const [searchParams , setSearchParams] = useSearchParams()
  const typeFikter = searchParams.get("type")
  const displayVans = typeFikter ? vanData.filter(van => van.type ===typeFikter) : vanData

  const vanElements = displayVans.map(van => (
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
          <div className="van-list-filter-buttons">
          <button onClick={() => setSearchParams("?type=simple")}
            className={`van-type simple ${typeFikter == "simplet" ? "selected" :""}`}
            >
                simple
            </button>
            <button onClick={() => setSearchParams("?type=rugged")}
            className={`van-type rugged ${typeFikter == "ruggedt" ? "selected" :""}`}
            >
                rugged
            </button>
            <button onClick={() => setSearchParams("?type=luxury")}
          className={`van-type luxury ${typeFikter == "luxuryt" ? "selected" :""}`}
            >
                Luxury
            </button>
              { typeFikter &&
                <button onClick={() => setSearchParams("")}
            className='van-type '
            >
                Clear
            </button>}
            
          </div>
          <div className="van-list">
            {vanElements}
          </div>
    </div>
  )
}
