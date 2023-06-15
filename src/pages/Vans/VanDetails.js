import { doc, getDoc } from 'firebase/firestore/lite'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../config/firebase'

export const VanDetails = () => {
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
}, [])
 
    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail" key={van.id}>
                    <img src={van.imgUrl} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
  )
}
