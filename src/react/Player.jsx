import React from 'react';
import Counter from './Counter.jsx';

export default function Player(props) {

  return (
    <div className="player">
        <div className="player-name">
            {props.name}
        </div>

        <div className="player-score">
            <Counter />
        </div>
    </div>
  );
}