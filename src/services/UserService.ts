/**
 * 
 * @param cred {username,password}  
 */

import { LoginState, UserType } from "../config/dataTypes"

export const login = (creds:LoginState) => {

    return new Promise((resolve,reject)=>{
        const {username, password}=creds
        if(username==="admin" && password==="admin"){
            const user:UserType = {
                username,
                token:"123abcd1234"
            }
            localStorage.setItem("user",JSON.stringify(user))
            resolve(user)
            
        }else{
            reject({
                msg:"Invalid Credentials!"
            })
        }
    })
}

export const logout = () => {
    localStorage.removeItem("user")
}

export const checkUser = () => {
    let user=localStorage.getItem('user')
    // return JSON.parse(localStorage.getItem('user')|| '{}')
    if (typeof user === 'string') {
        return JSON.parse(user);
      }
}