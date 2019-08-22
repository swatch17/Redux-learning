import {createStore,applyMiddleware,compose} from 'redux' //引入createStore方法
import thunk from 'redux-thunk'
import reducer from './reducer'

// 创建一个增强函数
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(thunk))

//创建数据库存储仓库
const store = createStore(
    reducer,
   enhancer
    )
console.log(require('redux'))
export default store