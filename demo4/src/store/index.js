import {createStore,applyMiddleware,compose} from 'redux' //引入createStore方法
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import mySagas from './sagas'

// 创建sage中间件
const sagaMiddleware = createSagaMiddleware()
// 创建一个增强函数
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))


//创建数据库存储仓库
const store = createStore(
    reducer,
   enhancer
    )

sagaMiddleware.run(mySagas)


// console.log(require('redux-sage'))
export default store