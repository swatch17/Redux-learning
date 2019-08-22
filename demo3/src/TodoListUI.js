import React from 'react';
import {Input,List,Button} from 'antd'
import 'antd/dist/antd.css'

// 无状态组建

const TodoListUi = (props) =>{
  console.log(props)
  return(
    <div style={{margin:10}}>
      <div>
        <Input 
        style={{width:250,marginRight:10}}
        onChange={props.changeInputValue}
        value={props.inputValue}
        />
        <Button
          type="primary"
          onClick={props.clickBtn}
        >
          增加
        </Button>
      </div>
      <div style={{margin:10,width:300}}>
      <List 
        bordered
        dataSource={props.list}
        renderItem={
          (item,index)=>(
            <List.Item onClick={()=>{props.deleteItem(index)}}>
              {item}
            </List.Item>
          )
        }
      />
      </div>
    </div>
  )
}

/* class TodoListUi extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    return (
      <div style={{margin:10}}>
        <div>
          <Input 
            placeholder={this.state.inputValue}
            style={{width:250,marginRight:10}}
            onChange = {this.changeInputValue}
            value={this.state.inputValue}
          />
          <Button
          type="primary"
          onClick={this.props.clickBtn}
          >
            增加
          </Button>
        </div>
        <div style={{margin:10,width:300}}>
        <List 
          bordered
          dataSource={this.props.list}
          renderItem={
            (item,index)=>(
            <List.Item onClick={(index)=>{this.props.deleteItem(index)}}>
            {item}
            </List.Item>)}
        />
        </div>
      </div>
    )
  }
} */

export default TodoListUi