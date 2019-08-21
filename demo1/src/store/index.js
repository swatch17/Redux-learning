import {createStore} from 'redux' //引入createStore方法
import reducer from './reducer'

const enhancers =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//创建数据库存储仓库
const store = createStore(
    reducer,
    enhancers 
    )

export default store