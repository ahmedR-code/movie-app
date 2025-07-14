import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
export default function ItemDetails() {
    const {id,media_type}=useParams()
    const [Details,setDetails]=useState('')
    let getDetails =async()=>{
        let {data}=await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=52bbcddeda849047525b51d6f8a12361`)
        setDetails(data)
    }
    useEffect(()=>{
        getDetails()
    },[id,media_type])
  return (
    <>
    {Details?
    <div className='container my-5'>
      <div className="row ">
        <div className="col-md-4 ">
            <img className='w-100' src={`https://image.tmdb.org/t/p/w500${Details.poster_path}`} alt="" />
        </div>
        <div className="col-md-8 ">
                <div>

            <h2 className='mb-5'>{Details.title || Details.name}</h2>
            {Details.genres.map((genre,index)=>(
                <span className='badge bg-primary mx-1 fs-5 ' key={index}>{genre.name}</span>
            ))}
            <ul className='mx-5 list-unstyled fs-5 '>
                <li className='mt-5 d-flex gap-4 justify-content-center'><span className='fs-5'>Release Date:</span>{Details.release_date}</li>
                <hr/>
                <li className='mt-3 d-flex gap-4 justify-content-center'><span className='fs-5'>Vote Count:</span>{Details.vote_count}</li>
                <hr/>
                <li className='mt-3 d-flex gap-4 justify-content-center'><span className='fs-5'>Vote Average:</span>{Details.vote_average}</li>
                <hr/>
                <li className='mt-3 d-flex gap-4 justify-content-center'><span className='fs-5'>Popularity:</span>{Details.popularity}</li>
                <hr/>
                <li className='mt-3 d-flex gap-4 justify-content-center'><span className='fs-5'>Budget:</span>{Details.budget}</li>
                <hr/>

            </ul>
            <p className='mx-5 mt-5'>{Details.overview}</p>
            </div>
        </div>
      </div>
    </div>
    :
    <h1>Loading...</h1>
    }
    
    </>
  )
}
