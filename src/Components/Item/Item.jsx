import React from 'react'
import { Link } from 'react-router-dom'
export default function Item({data}) {
    let {title,poster_path,vote_average,overview,id,media_type}=data
  return (
    <div className="col-md-2">
        <div>
            <div className="item position-relative overflow-hidden">
                
      <img className='w-100' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />  

    
      <Link to={`/details/${id}/${media_type}`}>
            <div className="overlay d-flex align-items-center justify-content-center">
        <p>{overview.split(' ').slice(0,10).join(' ')}</p>
           </div>
           </Link>
           <span className="vote p-2">{vote_average.toFixed(1)}</span>
             </div>
             <div>
             <h6 className='my-3'>{title}</h6>
             </div>
         </div>
    </div>
  )
}
