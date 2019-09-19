import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

constructor() {
  super();
  // every time state gets changed render() is recalled. So using the onclick there below fires -> fires the state change -> fires the render()
  this.state= {
   monsters: [],
   searchField: ''
  };

  this.handleChange = this.handleChange.bind(this);


}
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ monsters: users }, () => console.log(this.state)));
  // if we want to do anything with our state we have to use a callback function like this above
}

 handleChange = (e) => {
   this.setState({ searchField: e.target.value}, () => console.log(this.state));
 }

 render() {
   const { monsters , searchField } = this.state;
   const filteredMonsters= monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
   return (

<div className="App">
  {/* <input type='search' placeholder='search contacts' onChange={e => this.setState({ searchField: e.target.value }, () => console.log(this.state))}></input> */}
  <SearchBox placeholder='search monsters' handleChange={this.handleChange}></SearchBox>
  {/* if we want to do anything with our state we have to use a callback function like this above */}
  <CardList monsters={filteredMonsters}>{
    
  }</CardList>
  
</div>

   )
 }
  
  
}

export default App;
