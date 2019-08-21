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

  clickBtn=()=>{
      const action = {type:'addItem'}
      store.dispatch(action)
  }

  render(){
    console.log(this.state,this.state.inputValue)
    return (
      <div>
        <div>
          <Input  
          placeholder={this.state.inputValue} 
          onChange = {this.changeInputValue}
          style={{width:250,margin:10}}
           />
          <Button 
          type="primary"
          onClick = {this.clickBtn}
          >增加</Button>
        </div>
        <div style={{margin:10,width:300}}>
          <List 
            dataSource = {this.state.list}
            renderItem = {item=>(<List.Item >{item}</List.Item> )}
          />
        </div>
      </div>
    )
  }
}

export default TodoList;
