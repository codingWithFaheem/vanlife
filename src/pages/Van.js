import React, { useEffect, useState } from 'react'
import {db} from '../config/firebase';
import {collection , getDocs } from "firebase/firestore/lite"
export const Van = () => {
const [vanData , setVanData] = useState([])
const vanLifeRef = collection(db,"van")
const getVanData = async() => {
  try{
    const vanSnapShot = await getDocs(vanLifeRef) 
    const dataArray = vanSnapShot.docs.map((doc) => ({
        ...doc.data() ,
        id:doc.id
      })
      )
      setVanData( dataArray)
    }
  catch(err){
    console.error(err)
  }
}
  useEffect(()=> {
    getVanData()
  },[])
  const vanElements = vanData.map(van => (
    <div key={van.id} className="van-tile">
    <img src={van.imgUrl} alt="van"/>
        <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
        </div>
             <i className={`van-type ${van.type} selected`}>{van.type}</i>
  </div>
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
