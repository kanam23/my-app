import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';
import List from './List';
import HelloWorld from './HelloWorld';
import Counter from './Counter';

/*
 This list of produce that is passed into the FilteredList component.
 Notice that it is a list of JavaScript objects where {key: value}.
*/
const produce = [
  { name: "Apple", type: "Fruit" },
  { name: "Pineapple", type: "Fruit" },
  { name: "Banana", type: "Fruit" },
  { name: "Pear", type: "Fruit" },
  { name: "Strawberry", type: "Fruit" },
  { name: "Orange", type: "Fruit" },
  { name: "Lettuce", type: "Vegetable" },
  { name: "Cucumber", type: "Vegetable" },
  { name: "Eggplant", type: "Vegetable" },
  { name: "Squash", type: "Vegetable" },
  { name: "Bell pepper", type: "Vegetable" },
  { name: "Onion", type: "Vegetable" },
];

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HelloWorld name={'Khairul Anam'}/>
        <Counter/>
        <FilteredList items={produce} /> {/* Pass the items to FilteredList */}
      </div>
    );
  }
}

export default App;