import React, { Component } from "react";

class StatusBar extends Component {
    constructor() {
        super();
        this.state = {
            currentIndex: 1,
            maxIndex: 10,
            prevDisabled: true,
            nextDisabled: false
        }
    }
    handleNextClick = () => {
        if (this.state.currentIndex < 10) {
            this.setState(
                { currentIndex: this.state.currentIndex + 1 },
                () => { this.setDisabled(); }
            );
        }
    }
    handlePrevClick = () => {
        if (this.state.currentIndex > 1) {
            this.setState(
                { currentIndex: this.state.currentIndex - 1 },
                () => { this.setDisabled(); }
            );
        }
    }
    setDisabled = () => {
        if (this.state.currentIndex === 1) {
            this.setState({
                prevDisabled: true
            })
        } else if (this.state.currentIndex === 10) {
            this.setState({
                nextDisabled: true
            })
        } else {
            this.setState({
                prevDisabled: false,
                nextDisabled: false
            })
        }
    }
    render() {
        const buttonPrev = <button id="prev" onClick={this.handlePrevClick} disabled={this.state.prevDisabled}>&larr;</button>;
        const buttonNext = <button id="next" onClick={this.handleNextClick} disabled={this.state.nextDisabled}>&rarr;</button>;
        return (
            <div id="status-bar">
                {buttonPrev}
                <strong>{this.state.currentIndex}</strong>/<span>{this.state.maxIndex}</span>
                {buttonNext}
            </div>
        )
    }
}

export default StatusBar;