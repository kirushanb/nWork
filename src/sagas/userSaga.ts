import { takeEvery, call, put, all } from 'redux-saga/effects'

import * as types from '../config/actionTypes'
import * as services from '../services/UserService'
import * as actions from '../actions/UserActions'
import * as alerts from '../actions/alertActions'
import { MessageBarType } from '@fluentui/react'
import {  UserType } from '../config/dataTypes'
import history from '../history'


//Worker Saga
function* logout(){
    try{
       
        yield call(services.logout)
        console.log("logout saga")
        yield put(actions.userLoggedOut())
        
        yield put(alerts.setAlertAction({
            type:MessageBarType.success,
            text:"User Loggedout"
        }))

        history.push("/")
    }catch(e){
        yield put(alerts.setAlertAction({
            type:MessageBarType.error,
            text:e.msg
        }))
    }

  
}

//Worker Saga
function* login({creds}:any){
    try{
        const user:UserType = yield call(services.login,creds)
       
        yield put(actions.userLoggedIn(user))
        
        yield put(alerts.setAlertAction({
            type:MessageBarType.success,
            text:"User Loggedin"
        }))

        history.push("/")
    }catch(e){
        yield put(alerts.setAlertAction({
            type:MessageBarType.error,
            text:e.msg
        }))
    }

  
}

//Watcher Saga

function* watchloginUser(){
    yield takeEvery(types.LOGIN_USER, login)
}


//Watcher Saga

function* watchLogoutUser(){
    yield takeEvery(types.LOGOUT_USER, logout)
}



export function* userSaga() {
    yield all([
        watchloginUser(),
        watchLogoutUser()
    ])
}