import React from 'react'
import "./Banner.css"
import axios from "./axios"; 
import requests from "./Requests"
import { useEffect } from 'react';
import { useState } from 'react';

const base_url = "https://image.tmdb.org/t/p/original";
function Banner({fetchUrl}) {
    const [movie, setMovie] = useState([]);
    // useEffect(() => {
	// 	const fetchData = async () => {
	// 		await axios.get(fetchUrl)
	// 		.then(response => setMovies(response.data.results[Math.floor(Math.random() * response.data.results.length)]))
	// 	}
	// 	fetchData();
	// },[])
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log(request);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            );
            return request;
        }
        fetchData();
    }, [])
    

    console.log(movie);

    function truncate (string,n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }
    const headerStyle = {
        backgroundSize: "cover",
        backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.
        backdrop_path})`,
        backgroundPosition:"center center",
    }
  return (
   <header className='banner' 
        style={headerStyle}>
            <div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name||movie?.original_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<p className="banner__description">
					{truncate(movie.overview,150)}
				</p>
			</div>
			
		</header>
  )
}

export default Banner