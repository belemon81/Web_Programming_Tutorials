import React, { Component } from "react"; 
import './styles.css';

export default class FlashCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showingWord: true
        };
    }

    handleClick = () => {
        this.setState({
            showingWord: !this.state.showingWord
        });
    };

    render() {
        const card = this.props.card;

        return <div className="flashcard-box" onClick={this.handleClick}>
            {
                this.state.showingWord ?
                <div className="flashcard word">{card.word}</div> :
                <div className="flashcard definition">{card.definition}</div>
            }
        </div>;
    }
}