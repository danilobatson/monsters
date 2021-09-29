import './App.css';
import React from 'react';
import { Component } from 'react';
import CardList from './components/card-list/card-list';
import Search from './components/search/search';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			monsters: [],
			searchField: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}
	render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
		return (
			<div className='App'>
				<h1>Monsters Rolodex</h1>
        <Search
        placeholder='Search Monsters'
        onChange={(e) => this.setState({ searchField: e.target.value })}
        />
				<CardList monsters={filteredMonsters}></CardList>
			</div>
		);
	}
}

export default App;
