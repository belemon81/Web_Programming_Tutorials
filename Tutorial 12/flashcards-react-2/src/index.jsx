import React from "react"; 
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>, 
//     document.querySelector('#root'));

const root = createRoot(document.querySelector('#root'));
root.render(
    <BrowserRouter>
         <App />
    </BrowserRouter>, 
)