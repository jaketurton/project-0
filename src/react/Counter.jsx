import React from 'react';

export default class Counter extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            score: '0',
        };
    };

    incrementScore(e) {
        console.log('incrementScore', e);
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> {this.state.score} </div>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
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