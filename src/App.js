import './App.css';
import React from 'react';
import { Component } from 'react';

class App extends Component {
  
	constructor(props) {
		super(props);

		this.state = {
			monsters: [],
      searchField: ''
		};
	}

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
  }
	render() {
		return (
			<div className='App'>
        <h1>Monsters Rolodex</h1>
				{this.state.monsters.map((monster) => (
					<h1>{monster.name}</h1>
				))}
			</div>
		);
	}
}

export default App;
