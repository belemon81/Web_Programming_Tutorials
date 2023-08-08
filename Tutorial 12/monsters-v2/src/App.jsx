import { Component } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import AddPage from './pages/AddPage';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import UpdatePage from './pages/UpdatePage';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            monsters: [],
        };
    }

    addMonster = (monster) => {
        this.state.monsters.unshift(monster);
        // this.setState({
        //     monsters: [
        //         monster, 
        //         ...this.state.monsters
        //     ]
        // });
    }

    render() {
        return <div className='main'>
            <nav>
                <NavLink to="/">All monsters</NavLink> | 
                <NavLink to="/add">New monster</NavLink>
            </nav>

            <Routes>
                <Route path='/' element={<HomePage monsters={this.state.monsters} />} />
                <Route path='/add' element={<AddPage addMonster={this.addMonster} />} />
                <Route path='/:id' element={<DetailsPage />} />
                <Route path='/:id/update' element={<UpdatePage />} />
            </Routes>
        </div>;
    }

    async componentDidMount() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        this.setState({
            monsters: users
        });
    }
}