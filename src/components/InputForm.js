import React, { Component } from 'react';

class InputForm extends Component {

  addItem = () => {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy current list with ...
    const list = [ ...this.state.list ];

    //add new item to the list
    list.push(newItem);

   // update the state with the new list and clear newItem
    this.setState({
      list,
      newItem : ""
    })
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') {
      if (this.props.inputText) {
        this.addItem()
      }
    }
  }

  updateInput = (key, value) => {
    this.setState({[key]: value})
  }


  render() {
    const { list, newItem } = this.props
    return (
      <div>
        <label>Nueva Categoria</label>
        <input
        type='text'
        value={newItem}
        onChange={e => this.updateInput("newItem", e.target.value)}  
        onKeyPress={this.handleEnter}
        >
        </input>
        <button disabled = {!newItem.length} onClick={() => this.addItem()}>Agregar</button>
      </div>
    );
  }
}

export default InputForm;