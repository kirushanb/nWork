import {USER_LOGGEDIN, USER_LOGGEDOUT} from '../config/actionTypes'
import { UserType } from '../config/dataTypes'

const initialState=null

 export const userReducer = (state = initialState, action:{type:any,user:UserType}) => {
   
     switch (action.type) {

        case USER_LOGGEDIN:
             return action.user

        case USER_LOGGEDOUT:
            return initialState

        default:
            return state
     }

}



