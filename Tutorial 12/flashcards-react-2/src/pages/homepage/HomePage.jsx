import React, { Component } from "react";
import FlashCard from '../../components/FlashCard';
import './HomePage.css';
import StatusBar from "../../components/StatusBar";
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import Menu from "../../components/Menu";

class HomePage extends Component {
    constructor() {
        super();

        this.state = {
            cards: [
                // {
                //     word: "hello",
                //     definition: "xin chào"
                //   },
                //   {
                //     word: "hope",
                //     definition: "hi vọng"
                //   },
                //   {
                //     word: "you",
                //     definition: "người"
                //   },
                //   {
                //     word: "feel",
                //     definition: "cảm thấy"
                //   },
                //   {
                //     word: "happy",
                //     definition: "vui vẻ"
                //   }
            ],
            currentIndex: 0
        };
    }

    async componentDidMount() { 
            const response = await fetch("http://localhost:3000/array");
            const json = await response.json();
            this.setState({ cards: json }); 
    }

    handlePrevClick = () => {
        this.setState({
            currentIndex: this.state.currentIndex - 1
        });
    };

    handleNextClick = () => {
        this.setState({
            currentIndex: this.state.currentIndex + 1
        });
    };

    render() {
        const card = this.state.cards[this.state.currentIndex];
        if (this.state.cards.length !== 0) {
            return <div id="main">
                <Menu />
                {/* <Link to={'/'}>Home Page</Link>
            <Link to={'/add'}>Add Page</Link> */}
                <div id="flashcard-container">
                    <FlashCard card={card} />
                </div>

                <StatusBar
                    currentIndex={this.state.currentIndex + 1}
                    maxIndex={this.state.cards.length}
                    handlePrevClick={this.handlePrevClick}
                    handleNextClick={this.handleNextClick}
                />
            </div>;
        } else {
            return <div id="main">
                <Menu />
            </div>
        }
    }
}

function HomePageWithNavigate(props) {
    let navigate = useNavigate();
    return <HomePage {...props} navigate={navigate} />
}

export default HomePageWithNavigate; 