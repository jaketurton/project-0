import React from 'react';

export default class Counter extends React.Component {
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> {this.props.score} </div>
                <button className="counter-action increment"> + </button>
            </div>
        )
    }
};

// Functional component (sans-state)

// export default function Counter(props) {

//   return (
//     <div className="counter">
//         <button className="counter-action decrement"> - </button>
//         <div className="counter-score"> {props.score} </div>
//         <button className="counter-action increment"> + </button>
//     </div>
//   );
// }