
import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore/lite'
import { useParams } from 'react-router-dom'
import { db } from '../../config/firebase'
export const HostVanDetails = () => {
    const [van ,setVan] = useState(null)
    const params = useParams()
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
        <div className="host-van-detail">
            <img src={van.imgUrl} />
            <div className="host-van-detail-info-text">
                <i
                    className={`van-type van-type-${van.type}`}
                >
                    {van.type}
                </i>
                <h3>{van.name}</h3>
                <h4>${van.price}/day</h4>
            </div>
        </div>
    </div>
</section>
  )
}
