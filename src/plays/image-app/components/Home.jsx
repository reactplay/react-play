import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <h2>Welcome to Image App</h2>
    <strong>Memories bring back memories</strong>
    <p>With image app you can store your favourite pictures with no fear of losing them</p>
    <Link to ="/signup">Get Started</Link>
    <Link to ="/login">Login</Link>
    </>
  )
}

export default Home