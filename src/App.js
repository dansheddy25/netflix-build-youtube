import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser, login } from './app/features/userSlice';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      userAuth => {
        if (userAuth) {
        //logged in
        // console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else{
        //logged out 
        dispatch(logout)
      }
    })

    return unsubscribe;
  }, [])

  return (
    <div className="app">
    <Router>
    {!user ? (
      <LoginScreen />
    ) : (
      <Routes>
        <Route path="/" 
          element = {<HomeScreen />} > 
        </Route>
        <Route path="/profile" 
          element = {<ProfileScreen />} > 
        </Route>
      </Routes>
    )

    }
      
    </Router>
    </div>
  );
}

export default App;
