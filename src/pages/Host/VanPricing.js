import React from 'react'
import { useOutletContext } from "react-router-dom";

export const VanPricing = () => {
    const [van] = useOutletContext()

  return (
    <h3>{van.price}/day</h3>
  )
}
