import { takeEvery, call, put, all } from 'redux-saga/effects'

import * as types from '../config/actionTypes'
import * as services from '../services/TaskService'
import * as actions from '../actions/taskActions'
import * as alerts from '../actions/alertActions'
import { MessageBarType } from '@fluentui/react'
import {Tasks} from "../config/dataTypes";


//Worker Saga
function* loadTasks(){
    try{


        const tasks: Tasks = yield call(services.getTask)
        console.log(tasks)
        yield put(actions.taskLoadedAction(tasks))
        yield put(alerts.setAlertAction({
            type:MessageBarType.success,
            text:"Task Loaded"
        }))
    }catch(e){
        yield put(alerts.setAlertAction({
            type:MessageBarType.error,
            text:"Task Not Loaded"
        }))
    }

  
}

//Watcher Saga

function* watchLoadTasks(){
    yield takeEvery(types.LOAD_TASK, loadTasks)
}




export function* taskSaga() {
    yield all([
        watchLoadTasks()
    ])
}