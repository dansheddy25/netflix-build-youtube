import React from 'react'
import { useRef } from 'react';
import { auth, registerWithEmailAndPassword, logInWithEmailAndPassword } from '../firebase';
import './signupScreen.css'

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) =>{
    e.preventDefault();

    registerWithEmailAndPassword( emailRef.current.value,
      passwordRef.current.value).then(console.log('USER CREATED')).catch(err=>console.log(err))
  };

  const signin = (e) => {
    e.preventDefault();

    logInWithEmailAndPassword(
       emailRef.current.value,
       passwordRef.current.value
    ).then(console.log('USER Signnedin')).catch(err=>console.log(err))
  };


  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passwordRef} type="password" placeholder='Password'/>
        <button type='submit' onClick={signin}>Sign In</button>

        <h4>
          <span className='signupScreen__gray'>Are you new to netflix? </span>
          <span className='signupScreen__link' onClick={register}>sign up here</span> 
         </h4>
      </form>
    </div>
  )
}

export default SignupScreen
