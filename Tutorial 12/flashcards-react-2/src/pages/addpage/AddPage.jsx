import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import Menu from "../../components/Menu";
import { useNavigate } from "react-router-dom";

class AddPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: "",
            definition: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();  
        const DATA = { 
            word: this.state.word,
            definition: this.state.definition
        }   
        console.log(DATA);
        fetch("http://localhost:3000/array", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(DATA) 
        }).then(this.handleRedirect);
    }

    handleRedirect = (res) => {  
        if (res.status === 201) { //201
            this.props.navigate('/home');
        }
    };

    render() { 
        return <div>
            <Menu />
            {/* <Link to={'/'}> « Back </Link>  */}
            <h1>New FlashCard</h1>

            <form onSubmit={this.handleSubmit} method="POST">
                <table>
                    <tbody>
                    <tr>
                        <td>Word</td>
                        <td><input type="text" name="word" id="word" onChange={this.handleChange} ></input></td>
                    </tr>
                    <tr>
                        <td> Definition</td>
                        <td><input type="text" name="definition" id="definition" onChange={this.handleChange} ></input></td>
                    </tr>
                    <tr align="right">
                        <td></td>
                        <td><input type="submit" name="submit" id="submit" value="Add"></input></td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    }
}

function AddPageWithNavigate(props) {
    let navigate = useNavigate();
    return <AddPage {...props} navigate={navigate} />
}

export default AddPageWithNavigate;