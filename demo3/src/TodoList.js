import React, { Component } from 'react';
import TodoListUI from './TodoListUI'

class TodoList extends Component{
  constructor(props){
    super(props)
      this.state={
        inputValue:'',
        list:[]
      }
  }

  changeInputValue=(e)=>{
  this.setState({inputValue:e.target.value})
  }

  clickBtn=()=>{

  }

  deleteItem=()=>{

  }

  render(){
    return (
      <TodoListUI 
      inputValue = {this.state.inputValue}
      list = {this.state.list}
      changeInputValue={this.changeInputValue}
      clickBtn = {this.clickBtn}
      deleteItem={this.deleteItem}
      />
    )
  }
}

export default TodoList