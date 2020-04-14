import { combineReducers } from 'redux'
import authRedicer from './auth/reducer'
import postReducer from './posts/reducer'


const appReducer = combineReducers({
    authRedicer,
    postReducer

})

export default appReducer