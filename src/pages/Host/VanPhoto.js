import React from 'react'
import { useOutletContext } from "react-router-dom";

export const VanPhoto = () => {
    const [van] = useOutletContext()
    
  return (
    <div>
        <img src = {van.imgUrl} alt='van' />
    </div>
  )
}
