import React from 'react'
import "./Banner.css"

function Banner() {
    function truncate (string,n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }
  return (
    <header className='banner' style={{
        backgroundsize:"cover",
        backgroundImage:`url('http://images6.fanpop.com/image/forum/220000/220276_1442818022945_full.png')`,
        backgroundPosition:"center center",
    }}>
    <div className="banner__contents">
        <h1 className='banner__title'>Movie Name</h1>
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>
        <h1 className="banner_description">
        {truncate(
            `This is a test description of our banner worldwide
        This is a test description of our banner worldwide
        This is a test description of our banner worldwide
        This is a test description of our banner worldwide
        This is a test description of our banner worldwide`,
        130)
        } 
        </h1>
    </div>
    <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner