import React from 'react'
import Item from '../Item/Item'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'    
export default function TVshow() {
    const [tvShows,setTVShows]=useState([])
    let getTV =async()=>{
        let {data}=await axios.get("https://api.themoviedb.org/3/trending/tv/week?api_key=52bbcddeda849047525b51d6f8a12361")
        setTVShows(data.results)
    }
    useEffect(()=>{
        getTV()
    },[])
  return (
    <div className=' mx-auto my-3 container'>
    <div className="row">
           
        {
                tvShows.map((tvShow,index)=>(
                <Item data={tvShow} key={index}/>
            ))
        }</div>
         
    </div>
  )
}
