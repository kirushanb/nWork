import { RESET_ALERT, SET_ALERT } from '../config/actionTypes'

const initialState={
    type:null,
    text:""
}

export const alertReducer = (state = initialState, action:any) => {
    switch(action.type){
        case SET_ALERT:
            return action.msg
        case RESET_ALERT:
            return initialState
        
        default:
            return state
    }
}






