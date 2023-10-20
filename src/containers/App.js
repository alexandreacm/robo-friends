import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots'
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });    
    }
    
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        });  

        if (this.state.robots.length === 0) {
            return (
                <p className='loading'>Loading...</p>
            )
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                      <CardList data={filteredRobots} />
                    </Scroll>
                </div>
            )
        }
       
    }

}

export default App;