import React ,{Component} from 'react';
import  'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import store from './store'

/* const data = [
  'one','two','three'
]
 */
class TodoList extends Component{
  constructor(props){
    super(props)
    this.state =  store.getState()
    store.subscribe(this.storeChange) //订阅Redux的状态
  }

  changeInputValue=(e)=>{
    console.log(e.target.value)
    // 创建Action
    const action = {
      type:'changeInput',
      value:e.target.value
    }
    store.dispatch(action)
  }

  storeChange=()=> {
    this.setState(store.getState())
  }

  // 增加
  clickBtn=(e)=>{
      const action = {type:'addItem'}
      store.dispatch(action)
      e.target.value = ''
  }

  // 删除
  deleteItem(index){
    const action = {
      type:'deleteItem',
      index
    }
    store.dispatch(action)
  }

  render(){
    const {inputValue} = this.state
    return (
      <div>
        <div>
          <Input  
          placeholder={inputValue} 
          onChange = {this.changeInputValue}
          style={{width:250,margin:10}}
          value = {this.state.inputValue}
           />
          <Button 
          type="primary"
          onClick = {this.clickBtn}
          >增加</Button>
        </div>
        <div style={{margin:10,width:300}}>
          <List 
            dataSource = {this.state.list}
            renderItem = {(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item> )}
          />
        </div>
      </div>
    )
  }
}

export default TodoList;
