import React from 'react';
import './Nav.css';
import { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate ();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    } 
    
    useEffect(() => {
        window.addEventListener("scroll",
        transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar)
    }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
       <img
       onClick={()=> navigate('/')}
        className='nav__logo'
        src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="" 
        />
        <img
        onClick={() => navigate('/profile')} 
        className='nav__avatar'
        src="https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/8e65207aca8751179e10e03c_rw_600.png?h=506076a9f26fdf62293000f07c8c3c78"
        alt="" />
      </div>
   
    </div>
  )
}

export default Nav