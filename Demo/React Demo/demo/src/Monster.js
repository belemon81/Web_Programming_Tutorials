import React from "react";
import CardList from "./Components/CardList/CardList";
import './Monster.css';

export default class Monster extends React.Component {
    constructor() {
        super();
        this.state = {
            monsters: [
                // {
                //     name: 'Esther',
                //     email: 'esther@gmail.com'
                // },
                // {
                //     name: 'Belemon',
                //     email: 'belemon@gmail.com'
                // }
            ]
        }
    }
    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json(); 
        this.setState({ monsters: users });
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => this.setState({monsters : users }))
    // }

    render() {
        // const cards = [];
        // for (const monster of this.state.monsters) {
        //     const card = <div className='card-container' key={monster.email}>
        //             <img src='' alt='' />
        //             <h2>{monster.name}</h2>
        //             <p>{monster.email}</p> 
        //         </div>;
        //     cards.push(card);
        // }

        return (<div className = "main">
            <h1>Monster</h1>
            <input type="search" className="search" />
            <CardList monsters={this.state.monsters} />

            {/* <div className="card-list">
                {
                    // *** USING map() ***
                    this.state.monsters.map(monster => {
                        return <div className='card-container' key={monster.email}>
                            <img src='' alt='' />
                            <h2>{monster.name}</h2>
                            <p>{monster.email}</p>
                        </div>;
                    })
                }
                
                {cards}
            </div> */}
        </div>
        )
    }
}