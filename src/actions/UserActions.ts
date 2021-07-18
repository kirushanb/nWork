import * as types from '../config/actionTypes'
import { LoginState, UserType } from '../config/dataTypes'

export const loginUserAction = (creds:LoginState) => {
    return {
        type:types.LOGIN_USER,
        creds
    }
}

export const userLoggedIn = (user:UserType) => {

    return {
        type: types.USER_LOGGEDIN,
        user:user
    }
}

export const logoutUserAction = () => {

    return {
        type: types.LOGOUT_USER
        
    }
}

export const userLoggedOut = () => {

    return {
        type:types.USER_LOGGEDOUT,
        
    }
}