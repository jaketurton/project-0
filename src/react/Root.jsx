import React from 'react';
import Header from './Header.jsx'
import Player from './Player.jsx'

export default class Scoreboard extends React.Component {
  constructor() {
    super();

    this.state = {players: [
        {
            name: "Jake Turton",
            score: 69,
            key: 1,
        },
        {
            name: "Sharron Walker",
            score: 0,
            key: 2,
        },
        {
            name: "Jay Bee",
            score: 2,
            key: 3,
        },
    ]};
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" />

        <div className="players">
          {this.state.players.map(function(player) {
            return <Player name={player.name} score={player.score} key={player.key} />
          })}
        </div>
        
      </div>
    );
  }
}