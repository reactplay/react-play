import './styles.css';
import {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
function ImageApp(props) {

  return (
    <>
    <BrowserRouter>
       <App />
    </BrowserRouter>
    </>
  );
}

export default ImageApp;