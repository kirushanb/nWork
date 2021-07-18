import { PrimaryButton } from '@fluentui/react';
import React, { useState } from 'react'
import { LoginState } from '../../config/dataTypes';
import {loginUserAction} from '../../actions/UserActions'
import { connect } from 'react-redux';
import Alert from '../../shared/Alert/Alert';



const Login: React.FC = (props: any) => {
   
    const [loginState,setLoginState]=useState<LoginState>({
        username:"",
        password:""
      });

      const loginhandle = (e:any) => {
        e.preventDefault();
        // props.login(loginState); 
        // login(loginState).then(user=>{
        //     console.log(user)
        //     props.history.push("/")
        // }).catch(err=>{
        //     console.log(err)
        // })
        props.login(loginState)
      }

      const onchange = (event:any)=>{
        setLoginState({
            ...loginState,
            [event.target.name]: event.target.value
          });
      }

    return (
        <div>

              Sign In Works

        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        // tasks: state.user
    }   
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        login: (creds: LoginState) => {
            dispatch(loginUserAction(creds))
        }
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(Login) 
