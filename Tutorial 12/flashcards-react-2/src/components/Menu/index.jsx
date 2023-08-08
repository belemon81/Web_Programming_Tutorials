import React, { Component } from "react"; 
import './styles.css';
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {
    constructor(props) {
        super(props); 
    } 

    render() { 
        return <div id="menu">
            <NavLink to={"/home"}>Home Page</NavLink>
            <NavLink to={"/add"}>New FlashCard</NavLink>
        </div>;
    }
}