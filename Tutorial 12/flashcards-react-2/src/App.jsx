import React, { Component } from "react"; 
import './App.css'; 
import { Route, Routes } from 'react-router-dom';
import HomePageWithNavigate from "./pages/homepage/HomePage";
import AddPageWithNavigate from "./pages/addpage/AddPage";

class App extends Component {
    constructor() {
        super(); 
    } 
    render() {
        return <div className="App">
            <Routes>
                <Route exact path="/home" element={<HomePageWithNavigate/>}/>
                <Route exact path="/add" element={<AddPageWithNavigate/>}/>
            </Routes>
        </div>
    }
}

export default App;