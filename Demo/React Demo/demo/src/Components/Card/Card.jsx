import React from "react"; 
import './Card.css';

export default function Card(props) { 
    const link = "https://robohash.org/"+props.monster.id+"?set=set2&size=180x180";
    // const link = "https://robohash.org/"+props.index+"?set=set2&size=180x180";
    // return <div className='card' key={props.monster.email}>
    return <div className='card'>
        <img src={link} alt="" />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>; 
}