import { combineReducers } from 'redux'
import { alertReducer } from './alertReducer'
import { taskReducer } from './taskReducer'
import { userReducer } from './userReducer'


export default combineReducers({
    tasks: taskReducer,
    alert: alertReducer,
    user: userReducer

})

