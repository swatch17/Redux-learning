import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST,GET_MY_LIST} from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = () =>({
    type:ADD_ITEM
})

export const deleteItemAction = (index) =>({
    type:DELETE_ITEM,
    index
})

export const getListAction = (list)=>({
    type:GET_LIST,
    list
})

export const getMyListAction = () =>({
    type:GET_MY_LIST
})

export const getTodoList = () =>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5d5e0616075d693a6e7c4d44/me/getList').then(res=>{
            if(res.status===200){
              const{ list }= res.data.data
            const action = getListAction(list)
            dispatch(action)
            }
          }
        )
    }
}