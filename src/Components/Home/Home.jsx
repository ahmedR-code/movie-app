import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Item from '../Item/Item'

export default function Home() {
    const [movies,setMovies]=useState([])
    const [tvShows,setTVShows]=useState([])
    let getTrending =async()=>{
        let {data}=await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=52bbcddeda849047525b51d6f8a12361")
        setMovies(data.results)
    }
    let getTV =async()=>{
        let {data}=await axios.get("https://api.themoviedb.org/3/trending/tv/week?api_key=52bbcddeda849047525b51d6f8a12361")
        setTVShows(data.results)
    }
    useEffect(()=>{
        getTrending()
    },[])
    useEffect(()=>{
        getTV()
    },[])
  return (
    <>
{movies.length>0 && tvShows.length>0 ?
    <>
    <div className=' mx-auto my-3 container'>

        <div className="row">
         <div className="col-md-4 ">
            <div className="brdr w-25 "></div>
            <h2 className='text-start px-5 py-3'>Trending<br/>Movies to <br/>watch now</h2>
            <p className='pM text-start px-5 py-2 '>Most watched movies by days</p>
            <div className="brdr w-100"></div>
         </div>
    {
            movies.map((movie,index)=>(
            <Item data={movie} key={index}/>
        ))
    }
        </div>

        <div className="row mt-5">
         <div className="col-md-4 ">
            <div className="brdr w-25 "></div>
            <h2 className='text-start px-5 py-3'>Trending<br/>TV Shows to <br/>watch now</h2>
            <p className='pM text-start px-5 py-2 '>Most watched TV Shows by days</p>
            <div className="brdr w-100"></div>
         </div>
    {
            tvShows.map((movie,index)=>(
            <Item data={movie} key={index}/>
        ))
    }
     </div>
    </div>
   
</> :<h1>Loading...</h1>}
</>)
}