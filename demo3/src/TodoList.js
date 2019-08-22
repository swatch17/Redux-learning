import React, { Component } from 'react';
import TodoListUI from './TodoListUI'
import store from './store'
import {changeInputAction,addItemAction,deleteItemAction,getListAction} from './store/actionCreators'
import axios from 'axios'

class TodoList extends Component{
  constructor(props){
    super(props)
    this.state = store.getState()
    store.subscribe(this.storeChange) //订阅Redux的状态
  }

  componentDidMount(){
    axios.get('https://www.easy-mock.com/mock/5d5e0616075d693a6e7c4d44/me/getList').then(res=>{
        if(res.status===200){
          const{ list }= res.data.data
          const action = getListAction(list)
          store.dispatch(action)
        }
      }
    )
  }

  changeInputValue=(e)=>{
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

storeChange=()=>{
  this.setState(store.getState())
}

  clickBtn=()=>{
    const action = addItemAction()
    store.dispatch(action)
  }

  deleteItem=(index)=>{
    const action = deleteItemAction(index)
    store.dispatch(action)
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