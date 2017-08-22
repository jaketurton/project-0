import React from 'react';
import Counter from './Counter.jsx';

export default function Player(props) {

  return (
    <div className="player">
        <div className="player-name">
            <a className="remove-player" onClick={props.onRemove}></a>
            {props.name}
        </div>

        <div className="player-score">
            <Counter score={props.score} onChange={props.onScoreChange} />
        </div>
    </div>
  );
}