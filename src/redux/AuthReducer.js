import {getAuth} from "../api/api";
import {toggleFollowingProgressActionCreator, toggleIsFetchingActionCreator} from "./UsersReducer";

const SET_USER_DATA = 'SET_USER_DATA';

let initialStorage = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialStorage, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }

};

export const setUserDataActionCreator = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export const setAuthThunkCreator = () => {
    return (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true))
        getAuth().then((data) => {
            let {id, login, email} = data
            if (id) {
                dispatch(setUserDataActionCreator(id, email, login))
                dispatch(toggleIsFetchingActionCreator(false))
            }
        })
    }
}

export default authReducer;