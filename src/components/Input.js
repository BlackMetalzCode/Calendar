import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div>
        <input
        type='text'
        value={this.props.value}
        onChange={e => this.props.updateInput("newItem", e.target.value)}  
        onKeyPress={this.props.handleEnter}
        >
        </input>
      </div>
    );
  }
}

export default Input;