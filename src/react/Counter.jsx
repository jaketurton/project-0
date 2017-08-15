import React from 'react';

export default class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            score: 0,
        };

        this.incrementScore = this.incrementScore.bind(this);
        this.decrementScore = this.decrementScore.bind(this);
    };

    incrementScore(e) {
        this.setState({
            score: (this.state.score + 1),
        })
    }

    decrementScore(e) {
        this.setState({
            score: (this.state.score - 1),
        })
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
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