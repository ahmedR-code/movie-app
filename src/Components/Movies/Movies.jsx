import React from 'react'
import Item from '../Item/Item'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'    
export default function Movies() {
    const [movies,setMovies]=useState([])
    let getTrending =async()=>{
        let {data}=await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=52bbcddeda849047525b51d6f8a12361")
        setMovies(data.results)
    }
    useEffect(()=>{
        getTrending()
    },[])
  return (
    <div className=' mx-auto my-3 container'>
    <div className="row">
           
        {
                movies.map((movie,index)=>(
                <Item data={movie} key={index}/>
            ))
        }</div>
         
    </div>
  )
}
