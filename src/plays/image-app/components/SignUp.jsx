import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
     <main>
        <img src='' alt='brand-logo'/>
        <h4>Create a  ImageApp Account</h4>
        <label htmlFor='username'>Username</label>
        <input type="text" placeholder="Enter a username"/>
        <label htmlFor='email'>Email</label>
        <input type='email' placeholder='Enter a valid' ></input>
        <label htmlFor='password'>password</label>
        <input type='password' placeholder='Enter a new password'></input>
        <Link to= "/Login">Create your Account</Link>
        <p>Already have an account <Link to="/login">Login</Link></p>
        </main>
    </>
  )
}

export default SignUp