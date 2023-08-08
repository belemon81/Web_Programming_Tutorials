import React, { Component } from 'react'; 
import FlashCard from './FlashCard';
import StatusBar from './StatusBar';

class App extends Component{
  render(){
    return (
      <>
        <div id="flashcard-container">
          <FlashCard />
        </div>
        <StatusBar />
      </>
    );
    }
}

export default App;
