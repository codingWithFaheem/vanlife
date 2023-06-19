import React, { useEffect, useState } from 'react'
import {Link , useSearchParams } from 'react-router-dom'
import {db} from '../../config/firebase';
import { useVanContext } from '../../Context/AppContextProvider';
export const Van = () => {
const {vanData} = useVanContext()
  const [searchParams , setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")
  const displayVans = typeFilter ? vanData.filter(van => van.type ===typeFilter) : vanData
  const vanElements = displayVans.map((van) => (
        <div key={van.id} className="van-tile">
         <Link to={`/vans/${van.id}`} >
              <img src={van.imgUrl} alt="van"/>
        <div className="van-info">
            <h3>{van.name}</h3>
             <p>${van.price}<span>/day</span></p>
           </ div>
           </Link>

        </div>
  ))
  
  return (
    <div className="van-list-container">
          <h1>Explore our van options</h1>
          <div className="van-list-filter-buttons">
          <button onClick={() => setSearchParams("?type=simple")}
            className={`van-type simple ${typeFilter == "simplet" ? "selected" :""}`}
            >
                simple
            </button>
            <button onClick={() => setSearchParams("?type=rugged")}
            className={`van-type rugged ${typeFilter == "ruggedt" ? "selected" :""}`}
            >
                rugged
            </button>
            <button onClick={() => setSearchParams("?type=luxury")}
          className={`van-type luxury ${typeFilter == "luxuryt" ? "selected" :""}`}
            >
                Luxury
            </button>
              { typeFilter &&
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
