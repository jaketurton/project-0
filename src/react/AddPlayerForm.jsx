import React from 'react';

export default class AddPlayerForm extends React.Component {
  constructor() {
    super();
    
    this.state = {
      name: "",
    };

   this.onNameChange = this.onNameChange.bind(this);
   this.onSubmit = this.onSubmit.bind(this);
  }

  onNameChange(e) {
    this.setState({name: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({name: ""});
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