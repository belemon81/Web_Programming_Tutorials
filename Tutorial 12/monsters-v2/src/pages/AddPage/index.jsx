import { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function AddPage(props) {
    const navigate = useNavigate();
    return <AddPageContent navigate={navigate} {...props} />;
} 

class AddPageContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            email: '',
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        });
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        this.props.addMonster(this.state);
        this.props.navigate('/');
    }

    render() {
        return <>
            <h1>Add Page</h1>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="id">ID</label>
                    <input type="number" id="id" name="id" value={this.state.id} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name='name' value={this.state.name} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name='email' value={this.state.email} onChange={this.handleChange} />
                </div>

                <input type="submit" value="Save" />
            </form>
        </>;
    }
}