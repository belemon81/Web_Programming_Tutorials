import React, { Component } from "react";
import './StatusBar.css';

class StatusBar extends Component {
    constructor(props) {
        super(props); 
    }
    
    
    render() {
        const buttonPrev = <button id="prev" onClick={this.props.handlePrevClick} disabled={this.props.currentIndex === 0}>&larr;</button>;
        const buttonNext = <button id="next" onClick={this.props.handleNextClick} disabled={this.props.currentIndex === this.props.maxIndex}>&rarr;</button>;
        return (
            <div id="status-bar">
                {buttonPrev}
                <strong>{this.props.currentIndex+1}</strong>/<span>{this.props.maxIndex+1}</span>
                {buttonNext}
            </div>
        )
    }
}

export default StatusBar;