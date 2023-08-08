import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import { App, Store } from './App';
import Monster from './Monster';
// import App from './App';
// import Store from './Store';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// ); 

// ReactDOM.render(<h1>Hello!</h1>, document.querySelector('#root'));
// ReactDOM.render(<App color = "Green"/>, document.querySelector('#root'));
// ReactDOM.render(<Store />, document.querySelector('#root'));
ReactDOM.render(<Monster />, document.querySelector('#root'));
