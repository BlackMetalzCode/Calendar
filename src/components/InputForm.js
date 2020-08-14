import React, { Component } from 'react';
class InputForm extends Component {
  handleEnter = (e) => {
    if (e.key === 'Enter') {
      if (this.props.inputText) {
        this.props.addItem()
      }
    }
  }

  render() {
    const { newItem, updateInput, addItem } = this.props
    return (
      <div>
        <label>Nueva Categoria</label>
        <input
        type='text'
        value={newItem}
        onChange={e => updateInput("newItem", e.target.value)}  
        onKeyPress={this.handleEnter}
        >
        </input>
        <button disabled = {!newItem.length} onClick={() => addItem()}>Agregar</button>
      </div>
    );
  }
}

export default InputForm;