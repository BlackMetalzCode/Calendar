import React, { Component } from 'react';
import Card from './components/Card'
import List from './components/List'
import InputForm from './components/InputForm'

const containerStyle = {
  textDecoration: 'none'
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      newItem : '',
      list: [{id:0, value:'Vacations', active: false}, {id:1, value:'Work', active: false}],
      }
    }

  setActiveState = (id) => {
    //get a copy of the state list
    let list = [...this.state.list]

    // this reuturns just the id of the clicked item
    let elementsIndex = this.state.list.findIndex(element => element.id == id )
    // this updates the list with the new value changed
    list[elementsIndex] = {...list[elementsIndex], active: !list[elementsIndex].active }
    this.setState({
      list: list
    })
  }

  deleteItem = (id) =>{
      //copy current list with ...
      let list = [ ...this.state.list ];

      //update the list
      this.setState({
          list : list.filter(item => item.id !== id)
      })
  }
  
  updateInput = (key, value) => {
    this.setState({[key]: value})
  }

  addItem = () => {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
      active: false,
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

  render(){
    return(
    <div className="App" style={containerStyle}>
    <div>
      <InputForm
      newItem={this.state.newItem}
      updateInput={this.updateInput}
      addItem={this.addItem}
      inputText={this.state.newItem}
      />
      <List
      list={this.state.list}
      deleteItem={this.deleteItem}
      onClick={this.setActiveState}
      />
    </div>
    
      <Card />
    </div>  

  );
};
};

export default App;
