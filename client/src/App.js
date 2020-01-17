import React, {Component} from 'react';
import axios from 'axios';
import PlayerList from './components/PlayerList';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          data: res.data,
        })
      })
  }

  render() {
    return (
      <div className='App'>
        {this.state.data.map((player, i) => {
          return <PlayerList key={i} player={player} />
        })}
      </div>
    );
  }
}