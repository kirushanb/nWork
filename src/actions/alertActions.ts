import { RESET_ALERT, SET_ALERT } from "../config/actionTypes"

export const setAlertAction = (msg:any) => {
    return {
        type:SET_ALERT,
        msg
    }

}

export const resetAlertAction = () => {
    return {
        type:RESET_ALERT
    }

}