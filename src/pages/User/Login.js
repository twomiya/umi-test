import React from 'react';
import{Button} from 'antd';
import {connect} from 'dva';
import { dispatch } from 'rxjs/internal/observable/pairs';
const Login =(props)=> {
    return (
        <div>
            <h1>Login</h1>
            <p>{props.user.number}</p>
            <Button onClick={()=>{props.dispatch({type:'user/add'})}}>add</Button>
            <Button onClick={()=>{props.dispatch({type:'user/min'})}}>min</Button>
            <Button onClick={()=>{props.dispatch({type:'user/name'})}}>get user</Button>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
}

export default  connect(mapStateToProps)(Login);
