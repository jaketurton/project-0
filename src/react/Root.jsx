import React from 'react';
import Header from './Header.jsx'
import Player from './Player.jsx'
import AddPlayerForm from './AddPlayerForm.jsx'

export default class Scoreboard extends React.Component {
  constructor() {
    super();
    
    // create the initial state
    this.state = {
      title: "Scoreboard",

      players: [
        {
            name: "Jake Turton",
            score: 69,
            id: 1,
        },
        {
            name: "Sharron Walker",
            score: 0,
            id: 2,
        },
        {
            name: "Jay Bee",
            score: 2,
            id: 3,  
        },
      ],

      nextId: 4,
    };

    // give these functions a 'this' reference to Scoreboard class
    this.onScoreChange = this.onScoreChange.bind(this);
    this.onPlayerAdd = this.onPlayerAdd.bind(this);
    this.onRemovePlayer = this.onRemovePlayer.bind(this);
  }

  onScoreChange(index, delta) {
    console.log('onScoreChange', index, delta);
    this.state.players[index].score += delta;
    this.setState(this.state);
  }

  onPlayerAdd(name) {
    console.log("Player added:", name);
    this.state.players.push({
      name: name,
      score: 0,
      id: this.nextId,
    })
    this.setState(this.state);
    nextId += 1;
  }

  onRemovePlayer(index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);
    console.log('remove:', index);
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title={this.state.title} players={this.state.players} />

        <div className="players">
          {this.state.players.map(function(player, index) {
            return <Player
              onScoreChange={function(delta) {this.onScoreChange(index, delta)}.bind(this)}
              onRemove={function() {this.onRemovePlayer(index)}.bind(this)}
              name={player.name} 
              score={player.score} 
              key={player.id} />
          }.bind(this))}
        </div>

        <AddPlayerForm onAdd={this.onPlayerAdd} />
        
      </div>
    );
  }
}
