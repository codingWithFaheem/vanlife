import React from 'react'
import { useVanContext } from '../../Context/AppContextProvider'
import { Link } from 'react-router-dom'

export const HostVan = () => { 
    const {vanData} = useVanContext()
    const hostVansEls = vanData.map(van => (
        <Link
            to={`/host/vans/${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imgUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))
  return (
    <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vanData.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
  )
}
