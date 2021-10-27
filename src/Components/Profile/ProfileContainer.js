import React, {useEffect} from 'react';
import {setProfileThunkCreator} from "../../redux/ProfileReducer";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import { useRouteMatch } from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export default () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    let userId  = useRouteMatch().params.userId
    if (!userId && state.auth.isAuth) {
        userId = state.auth.userId;
    }

    useEffect(() => {
        if (userId) {
            dispatch(setProfileThunkCreator(userId))
        }
    }, [userId])

    // HOC
    // return compose(withAuthRedirect)(<Profile addPost={addPost} posts={state.profile.posts} profile={state.profile.profile} isAuth={state.auth.isAuth}/>)

    return <Profile profile={state.profile.profile} isAuth={state.auth.isAuth} currentLoggedId={state.auth.userId}/>
}