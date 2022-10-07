import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import UserAccount from './components/UserAccount';


const App = () => {
  return (
    <>
    <Routes>
        <Route index path ="/" element= {<Home />}/>
        <Route path ="/login" element= {<Login />}/>
        <Route path ="/signup" element= {<SignUp />}/>
        <Route path = "/user" element = {<UserAccount />} />
    </Routes>
    </>
  )
}

export default App