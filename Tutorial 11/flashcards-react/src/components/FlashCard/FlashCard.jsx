import React, { Component } from 'react';
import './FlashCard.css';

export default class FlashCard extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            showingWord: true, 
        };
    }

    handleClick = () => { 
        this.setState({
            showingWord : !this.state.showingWord
        })
    }

    render() {  
        let side = <div className="flashcard word">{this.props.word}</div>
        if (!this.state.showingWord) {
            side = <div className="flashcard definition">{this.props.definition}</div>;
        } 
        return (
            <div className="flashcard-box" onClick={this.handleClick}>
                { side }
            </div>
        )
    }
} 