import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './style.css'; 
import App from './App';  

// ReactDOM.render(<App />, document.querySelector('#main'));  

const root = createRoot(document.querySelector('#main'));
root.render(<App />);  

