import React, { Component } from 'react';
import Header from './Components/header'

class App extends Component {
  state = {
    likes: 0,
  };

addHandler = () => {
  this.setState({
    likes: this.state.likes + 1
  });
  console.log('addHandler was clicked');
};

removeHandler = () => {
  if(!this.state.likes > 0) {  //the if statement prevents to count below 0
    return
  }
  this.setState({likes: this.state.likes - 1});
  console.log('removeHandler was clicked');
};

resetHandler = () => {
  this.setState({ likes: 0});
  console.log('resetHandler was clicked');
};

  render() {
    return (
      <div>
        <h1>Total likes: {this.state.likes}</h1>
        <button onClick={this.addHandler}>Add one</button>
        <button onClick={this.removeHandler}>Remove one</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}


export default App;
