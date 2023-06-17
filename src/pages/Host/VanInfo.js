import React from 'react'
import { useOutletContext } from "react-router-dom";

export const VanInfo = () => {
    const [van] = useOutletContext()
  return (
    <div>
        <p>
            {van.description}
        </p>
    </div>
  )
}
