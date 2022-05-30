import React from 'react'
import "./Banner.css"
import axios from "./axios"; 
import requests from "./Requests"
import { useEffect } from 'react';
import { useState } from 'react';

const base_url = "https://image.tmdb.org/t/p/original";
function Banner({fetchUrl}) {
    const [movie, setMovies] = useState([]);
    useEffect(() => {
		const fetchData = async () => {
			await axios.get(fetchUrl)
			.then(response => setMovies(response.data.results[Math.floor(Math.random() * response.data.results.length)]))
		}
		fetchData();
	},[])
    // useEffect(() => {
    //     async function fetchData(){
    //         const request = await axios.get(requests.fetchNetflixOriginals);
    //         setMovie(
    //             request.data.results[
    //                 Math.floor(Math.random() * requests.data.results.length -1)
    //             ]
    //         );
    //         return request;
    //     }
    //     fetchData();
    // }, [])
    

    console.log(movie);

    function truncate (string,n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }
  return (
   <header className='header' style={{backgroundImage:`url(${base_url + movie.backdrop_path})`}}>
			<div className="header_left">
				<h1 className="title">
					{movie.original_name}
				</h1>
				<div>
					<button className="btn">Play</button>
					<button className="btn">My List</button>
				</div>
				<p className="description">
					{truncate(movie.overview,150)}
				</p>
			</div>
			
		</header>
  )
}

export default Banner