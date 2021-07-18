import * as types from '../config/actionTypes'

export const loadTasksAction = () => {

    return {
        type:types.LOAD_TASK
    }
}

export const taskLoadedAction = (tasks:any) => {
    return {
        type:types.TASK_LOADED,
        tasks
    }
}

/**
 * 
 * @param {title, description} data 
 */
export const addTaskAction = (data:any) => {
    return {
        type:types.ADD_TASK,
        data
    }
}


export const taskAddedAction = (task:any) => {
    return {
        type:types.TASK_ADDED,
        task
    }
}