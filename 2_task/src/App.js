import React, { Component } from 'react';
import Animal from './Components/AnimalComponent/animal';
import "./App.css"


class App extends Component {
  //state should always be on top / first thing to declare and never after "render"
  state = {
    animals: [
      {name:"Fox", img: "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1284&q=80"},

      {name:"Rabbit", img:"https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1584&q=80"},

      {name:"Wolf", img:"https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80"},
    ],
  }; 


  render() {
    return (
    <div className="cards">
      <Animal 
      name={this.state.animals[0].name} 
      img={this.state.animals[0].img} 
      />

      <Animal 
      name={this.state.animals[1].name} 
      img={this.state.animals[1].img} 
      />

      <Animal 
      name={this.state.animals[2].name} 
      img={this.state.animals[2].img} 
      />

    </div>
    );
  }
}

export default App;