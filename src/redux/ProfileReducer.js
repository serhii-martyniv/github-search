import {getUser} from "../api/api";
import {toggleIsFetchingActionCreator} from "./UsersReducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialStorage = {
    profile: null
};

const profileReducer = (storage = initialStorage, action) => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                "id": storage.posts.length + 1,
                "text": action.text,
                "likes": 0,
            };
            return { ...storage, posts: [...storage.posts, newPost] };
        case SET_USER_PROFILE:
            return {...storage, profile: action.profile}
        default:
            return storage;
    }

};

export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        text: text
    }
};

export const setUserProfileActionCreator = (profile) => ({type: SET_USER_PROFILE, profile})

export const setProfileThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true))
        getUser(userId).then((data) => {
            dispatch(toggleIsFetchingActionCreator(false))
            dispatch(setUserProfileActionCreator(data))
        })
    }
}

export default profileReducer;