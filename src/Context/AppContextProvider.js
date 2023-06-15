import React from 'react'
import { createContext , useContext , useState , useEffect } from 'react'
import {collection , getDocs } from "firebase/firestore/lite"
import { db } from '../config/firebase'

const AppContext = createContext()
export  const useVanContext = () => {
      return useContext(AppContext)
  }
export const AppContextProvider = ({children}) => {
    const [vanData ,setVanData ] = useState([])
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
 
  return (
    <AppContext.Provider value={{
        vanData
    }}>
        {children}
    </AppContext.Provider>
  
  )
}
