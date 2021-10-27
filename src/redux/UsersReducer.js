import {
    checkIfFollows,
    followUser,
    getUserFollowers,
    getUserFollowing,
    getUsers,
    searchUser,
    unfollowUser
} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_USER_FOLLOWERS = 'SET_USER_FOLLOWERS';
const SET_USER_FOLLOWINGS = 'SET_USER_FOLLOWINGS';

let initialStorage = {
    users: [],
    // pagination
    pageSize: 10,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (storage = initialStorage, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...storage,
                users: storage.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...storage,
                users: storage.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USER_FOLLOWERS:
            return {
                ...storage,
                users: storage.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followers: action.followers}
                    }
                    return u
                })
            }
        case SET_USER_FOLLOWINGS:
            return {
                ...storage,
                users: storage.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, following: action.following}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...storage, users: action.users}
        case SET_CURRENT_PAGE:
            return {...storage, currentPage: action.page}
        case SET_TOTAL_USERS_COUNT:
            return {...storage, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...storage, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...storage, followingInProgress: action.followingInProgress
                    ? [...storage.followingInProgress, action.userId]
                    : storage.followingInProgress.filter(id => id!==action.userId)
            }
        default:
            return storage;
    }

};

export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const setUserFollowersActionCreator = (userId, followers) => ({type: SET_USER_FOLLOWERS, userId: userId, followers: followers})
export const setUserFollowingsActionCreator = (userId, following) => ({type: SET_USER_FOLLOWINGS, userId: userId, following: following})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})
export const setCurrentPageActionCreator = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetchingActionCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgressActionCreator = (followingInProgress, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId})

export const getUsersThunkCreator = (currentPage, pageSize) => {
   return (dispatch) => {
       dispatch(toggleIsFetchingActionCreator(true))
       getUsers(currentPage, pageSize).then((data) => {
           dispatch(setUsersActionCreator(data))
           console.log(data)
           data.forEach((item) => {
               // Get User Followers and set to the state
               dispatch(getUserFollowersThunkCreator(item.login, item.id))
               // Get User Followings and set to the state
               dispatch(getUserFollowingThunkCreator(item.login, item.id))

               dispatch(toggleIsFetchingActionCreator(false))
               // Check if user follows current authorized user
               checkIfFollows(item.login).then((data) => {
                   if (data.ok) {
                       dispatch(followActionCreator(item.id))
                   }
                   else {
                       dispatch(unfollowActionCreator(item.id))
                   }
               })
           })
       })
    }
}

export const getUserFollowersThunkCreator = (login, id) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true))
        getUserFollowers(login).then(data => {
            if (data) {
                dispatch(setUserFollowersActionCreator(id, data.length))
            }
            dispatch(toggleIsFetchingActionCreator(false))
        })
    }
}

export const searchUserThunkCreator = (username) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true))
        if (username) {
            searchUser(username).then((data) => {
                if(data) {
                    dispatch(toggleIsFetchingActionCreator(false))
                    dispatch(setUsersActionCreator(data))
                }
            })
        }
        else {
            dispatch(getUsersThunkCreator())
        }

    }
}

export const getUserFollowingThunkCreator = (login, id) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true))
        getUserFollowing(login).then(data => {
            if (data) {
                dispatch(setUserFollowingsActionCreator(id, data.length))
            }
            dispatch(toggleIsFetchingActionCreator(false))
        })
    }
}

export const followUserThunkCreator = (login, id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressActionCreator(true, id))
        followUser(login).then(data => {
            if (data.ok) {
                dispatch(followActionCreator(id))
            }
            dispatch(toggleFollowingProgressActionCreator(false, id))
        })
    }
}

export const unfollowUserThunkCreator = (login, id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressActionCreator(true, id))
        unfollowUser(login).then(data => {
            if (data.ok) {
                dispatch(unfollowActionCreator(id))
            }
            dispatch(toggleFollowingProgressActionCreator(false, id))
        })
    }
}

export default usersReducer;