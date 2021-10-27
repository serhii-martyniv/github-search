import React from 'react'
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {setAuthThunkCreator} from "../../redux/AuthReducer";

export default () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)
    const login = useSelector(state => state.auth.login)
    const setAuth = () => dispatch(setAuthThunkCreator())

    return (
        <>
            <Header isAuth={isAuth} login={login} setAuth={setAuth}/>
        </>
    )
}