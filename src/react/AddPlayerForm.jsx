import React from 'react';

export default class AddPlayerForm extends React.Component {
  constructor() {
    super();
    
    this.state = {
      name: "",
    };
  }

  onNameChange(e) {
    console.log('onNameChange', e.target.value)
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render(){
    return (
      <div className="add-player-form">
          <form onSubmit={this.onSubmit}>
              <input type="text" value={this.state.name} onChange={this.onNameChange} />
              <input type="submit" value="Add Player" />
          </form>
      </div>
    );
  }
}