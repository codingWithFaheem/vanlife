
import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore/lite'
import { useParams } from 'react-router-dom'
import { db } from '../../config/firebase'
import {Link , NavLink , Outlet } from 'react-router-dom'

export const HostVanDetails = () => {
    const [van ,setVan] = useState(null)
    const params = useParams()
    const activeStyles = {
        textDecoration: "underline",
        color: "#161616"
    }
    const getVan = async() => {
        const docRef =   doc(db,"van",params.id)
    
      try{
            const singleVanData = await getDoc(docRef)
             setVan({
                ...singleVanData.data(),
                id : singleVanData.id 
            })
           
    
      }
      catch(Err){
        console.error(Err)
      }
    
    }
    useEffect(() => {
        getVan()
    }, []);
    if(!van){
        return <h1>Loading...</h1>
    }
    
  return (
    <section>
    <div className="host-van-detail-layout-container">
       
        <img className='host-van-detail-image' src={van.imgUrl} />
        <div>
       <div className="host-van-detail">
            <div className="host-van-detail-info-text">
                <i
                    className={`van-type van-type-${van.type}`}
                >
                    {van.type}
                </i>
                <h3>{van.name}</h3>
            </div>
        </div>
        
          <nav className='host-van-detail-nav'>
        
                <NavLink to='details'
                 style={({isActive}) => isActive ? activeStyles : null}
                >
                  Details
                </NavLink>
                <NavLink to='pricing'
                 style={({isActive}) => isActive ? activeStyles : null}
                >
                  Pricing
                  </NavLink>
                  <NavLink to='photos'
                   style={({isActive}) => isActive ? activeStyles : null}
                  >
                      Photos
                  </NavLink>
                  </nav>
                  </div>
    <Outlet context={[van]}/>

    </div>
</section>
  )
}
