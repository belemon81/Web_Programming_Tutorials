import { Component } from 'react';
import './styles.css';
import CardList from '../../components/CardList';
import SearchBox from '../../components/SearchBox';

export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
        };
    }

    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        });
    }

    render() {
        const filteredMonsters = this.props.monsters.filter(monster => 
            monster.name.toLowerCase().includes(this.state.keyword.toLocaleLowerCase())
        );

        return <>
            <h1>Monsters</h1>
            <SearchBox value={this.state.keyword} onChange={this.handleChange} />
            <CardList monsters={filteredMonsters} />
        </>; 
    }

    async componentDidMount() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        this.setState({
            monsters: users
        });
    }
}