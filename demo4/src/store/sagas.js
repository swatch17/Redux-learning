import {takeEvery, put} from 'redux-saga/effects'
import {GET_MY_LIST} from './actionTypes'
import {getListAction} from './actionCreators'
import axios from 'axios'

function* mySaga(){
    // 等待捕获action
    yield takeEvery(GET_MY_LIST,getList)
}

function* getList(){
    // console.log('get success!')
    // axios.get('https://www.easy-mock.com/mock/5d5e0616075d693a6e7c4d44/me/getList').then(res=>{
    //     const {list}= res.data.data
    //     const action = getListAction(list)
    //     put(action)
    //     console.log(list)
    // })

    const res = yield axios.get('https://www.easy-mock.com/mock/5d5e0616075d693a6e7c4d44/me/getList')
    const {list}= res.data.data
    const action = getListAction(list)
    yield put(action)
}                               

export default mySaga;