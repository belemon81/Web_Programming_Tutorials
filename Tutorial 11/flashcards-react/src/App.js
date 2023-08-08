import React, { Component } from 'react';
import FlashCard from './components/FlashCard/FlashCard';
import StatusBar from './components/StatusBar/StatusBar';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      cards: [
        // {
        //   word: "hello",
        //   definition: "xin chào"
        // },
        // {
        //   word: "hope",
        //   definition: "hi vọng"
        // },
        // {
        //   word: "you",
        //   definition: "người"
        // },
        // {
        //   word: "feel",
        //   definition: "cảm thấy"
        // },
        // {
        //   word: "happy",
        //   definition: "vui vẻ"
        // },
      ]
    }
  }
  async componentDidMount() {
    const response = await fetch('api.json');  
    const json = await response.json();  
    this.setState({ cards: json.array });
  }
  handleNextClick = () => {
    if (this.state.currentIndex < this.state.cards.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }
  }
  handlePrevClick = () => {
    if (this.state.currentIndex > 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    }
  }
  render() {    
    if (this.state.cards.length!==0) {
    return (
      <>
        <div id="flashcard-container">
          <FlashCard 
          word={this.state.cards[this.state.currentIndex].word} definition={this.state.cards[this.state.currentIndex].definition}
          />
        </div>
        <StatusBar maxIndex={this.state.cards.length - 1} currentIndex={this.state.currentIndex} handleNextClick={this.handleNextClick} handlePrevClick={this.handlePrevClick} />
      </>
    );
    }
  }
} 
