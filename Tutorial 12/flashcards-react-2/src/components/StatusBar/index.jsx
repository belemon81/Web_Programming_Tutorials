import React from "react"; 
import './styles.css';

export default function StatusBar(props) {
    const {currentIndex, maxIndex, handlePrevClick, handleNextClick} = props;

    return <div id="status-bar">
        <button 
            id="next" 
            onClick={handlePrevClick}
            disabled={currentIndex === 1}
            >&larr;</button>
        <strong>{currentIndex}</strong>/<span>{maxIndex}</span>
        <button 
            id="next" 
            onClick={handleNextClick}
            disabled={currentIndex === maxIndex}
            >&rarr;</button>
    </div>;
}