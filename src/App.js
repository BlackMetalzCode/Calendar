import React, { Component } from 'react';
import Card from './components/Card'
import List from './components/List'
import InputForm from './components/InputForm'

const containerStyle = {

}


class App extends Component {
  constructor(props){
    super(props);
    
  this.state = {
    newItem : '',
    list: [{id:1, value:'Vacations'}, {id:2, value:'Work'}],
    }
  }

  updateInput = (key, value) => {
    this.setState({[key]: value})
  }


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

  deleteItem = (id) =>{
    //copy current list with ...
    const list = [ ...this.state.list ];

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id)

    //update the list
    this.setState({
        list : updatedList
    })
}


  render(){
    return(
    <div className="App" style={containerStyle}>
    <div>
      <InputForm
      updateInput={this.updateInput}
      inputText = {this.state.newItem}
      addItem = {this.addItem}
      />
      <List
      list={this.state.list}
      deleteItem={this.deleteItem}
      />
    </div>
    
      <Card />
    </div>  

  );
}
}

export default App;
