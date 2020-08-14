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
      list: [{id:1, value:'Vacations'}, {id:2, value:'Work'}],
      }
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
      list={this.state.list}
      newItem={this.state.newItem}
      />
      <List
      list={this.state.list}
      deleteItem={this.deleteItem}
      />
    </div>
    
      <Card />
    </div>  

  );
};
};

export default App;
