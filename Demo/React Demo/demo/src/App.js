import React from 'react';
import Monster from './Monster';

// function App() {
//   return (<div className="App"><h1>Hello World!</h1></div>)
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = { new: "New" };
  }
  changeState = () => {
    this.setState({ new: "Novel" });
  }

  render() {
    const button = <button onClick={this.changeState}>Change state</button>;
    return (
      <div className="App">
        <h1>Hello {this.state.new} {this.props.color} World!</h1>
        { button }
        <h2 style = {{backgroundColor: "lightblue"}}>Light blue color</h2>
      </div>
    )
  }
}

class Store extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Store!</h1>
        <App />
        <Monster />
      </div>
    )
  }
}

// export default App;
export { App, Store }