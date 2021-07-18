import React from "react";
import { Route , Redirect } from "react-router-dom";
import {connect} from "react-redux";

const UserRoute = (props:any) => {
    // if(props.user){
        return <Route  {...props}/>
    // }else{
    //     return <Redirect to='/login'  />
    // }

}

export default connect(({user}:any)=>({user}))(UserRoute)