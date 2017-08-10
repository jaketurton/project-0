import React from 'react';
import Header from './Header.jsx'
import Player from './Player.jsx'

export default class Scoreboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" />

        <div className="players">
          <Player name="Jake Turton" score="31" />
          <Player name="Sharron Walker" score="0" />
        </div>
        
      </div>
    );
  }
}