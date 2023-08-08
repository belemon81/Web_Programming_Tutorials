import { Component } from 'react';
import './App.css';
import CardList from './components/CardList'

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            // monsters: [
            //     {
            //         name: "CamNH",
            //         email: "camnh@hanu.edu.vn"
            //     },
            //     {
            //         name: "CongNV",
            //         email: "congnv@hanu.edu.vn"
            //     },
            // ],
        };
    }

    render() {
        return <div className='main'>
            <h1>Monsters</h1>
            <input type="search" className='search' />

            <CardList monsters = {this.state.monsters} />
        </div>;
    }

    async componentDidMount() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        this.setState({
            monsters: users
        })
    }
}

export default App;