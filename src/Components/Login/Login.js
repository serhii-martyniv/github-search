import React from 'react'
import {Field, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";
import {setAuthThunkCreator} from "../../redux/AuthReducer";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name="login" placeholder="login" component="input"/></div>
            <div><Field name="password" placeholder="password" component="input"/></div>
            <div><Field name="rememberMe" type="checkbox" component="input"/>Remember me</div>
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm =  reduxForm({
    form: 'login'
})(LoginForm)

const Login = () => {
    const dispatch = useDispatch()
    const onSubmit = (formData) => {
        dispatch(setAuthThunkCreator(formData.login, formData.password))
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login