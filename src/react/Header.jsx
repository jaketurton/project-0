import React from 'react';
import Stats from './Stats.jsx'
import Stopwatch from './Stopwatch.jsx'

export default function Header(props) {
  return (
    <div className="header">
      <Stats players={props.players} />
      <h1>{props.title}</h1>
      <Stopwatch />
    </div>
  );
}