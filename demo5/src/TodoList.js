import React, { Component } from 'react';
import {Input,Button, Divider} from 'antd'
import  'antd/dist/antd.css'
import store from './store'
import {connect} from 'react-redux'

const stateToProps = (state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}

const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            let action = {
                type:'change_input',
                value:e.target.value
            }
           dispatch(action)
        },
        clickButton(){
           let action = {type:'add_item'}
           dispatch(action)
        }
    }
}

const TodoList = props =>{
    let {inputValue,inputChange,clickButton,list } = props;
    
    return(
        <div>
            <div>
                <Input style={{width:180}} value={inputValue} onChange={inputChange} />
                <Button onClick={clickButton}>提交</Button>
            </div>
            <ul>
                {
                    list.map((v,i)=>(<li key={i}>{v}</li>))
                }
            </ul>
        </div>
    )
}

// class   TodoList extends Component{
//     constructor(props){
//         super(props)
//         this.state = store.getState()
//     }

//     render(){
//         let {inputValue,inputChange,clickButton,list} = this.props
//         return (
//             <div>
//                 <div>
//                     <Input 
//                     style={{width:180,margin:10}} 
//                     value={inputValue}
//                     onChange={inputChange}
//                     />
//                     <Button onClick={clickButton}>提交</Button>
//                 </div>
//                 <ul>
//                   {
//                      list.map((v,i)=>{
//                           return (<li key={i}>{v}</li>)
//                       })
//                   }
//                 </ul>
//             </div>
//         )
//     }
// }

export default  connect(stateToProps,dispatchToProps)(TodoList)