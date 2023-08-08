import React from "react";
import Card from "../Card/Card";
import './CardList.css';
export default function CardList(props) {
    return <div className="card-list">
        { /* {cards} */}
        {
            // *** USING map() ***
            props.monsters.map((monster,index) => <Card monster={monster} index={index} key={monster.email} />)
            // {   
            //     <div className='card-container' key={monster.email}>
            //         <img src='' alt='' />
            //         <h2>{monster.name}</h2>
            //         <p>{monster.email}</p>
            //     </div>;
            // })
        }
    </div>
}  