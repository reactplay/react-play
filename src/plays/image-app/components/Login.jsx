import React from 'react'
import {useState} from 'react';
import { Link } from 'react-router-dom';
import "../styles.css"

const Login = () => {
    const [isLogin, setIsLogin] = useState(false)
    return (
        <>
        <main>
        <img src='' alt='brand-logo'/>
        <h4>Login to ImageApp with your email and password</h4>
        <label htmlFor='email'>Email</label>
        <input type='email' placeholder='Enter your Email'></input>
        <label htmlFor='password'>password</label>
        <input type='password' placeholder='Enter your password'></input>
        <Link to="/user">Login</Link>
        <p>If you dont have an account <Link to="/signup">signup</Link></p>
        </main>
        </>
    )
  } 
export default Login;