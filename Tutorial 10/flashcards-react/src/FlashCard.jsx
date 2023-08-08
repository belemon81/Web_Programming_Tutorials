import React, { Component } from 'react'; 

class FlashCard extends Component{
    constructor() {
        super();
        this.state = {
            showingWord: true
        };
    }

    handleClick = (prevState) => { 
        this.setState({
            showingWord : !this.state.showingWord
        })
    }

    render() { 
        let side = <div className="flashcard word">word</div>
        if (!this.state.showingWord) {
            side = <div className="flashcard definition">definition</div>;
        } 
        return (
            <div className="flashcard-box" onClick={this.handleClick}>
                { side }
            </div>
        )
    }
}

export default FlashCard;