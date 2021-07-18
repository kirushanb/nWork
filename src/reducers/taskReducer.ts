import {TASK_ADDED, TASK_LOADED} from '../config/actionTypes'

const initialState:any = []

export const taskReducer = (state = initialState, action:any) => {
    switch(action.type){
        case TASK_LOADED:
            return action.tasks
        case TASK_ADDED:
            return action.data
        default:
            return state
    }

}