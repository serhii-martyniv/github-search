import React, {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../Common/Preloader/Preloader";
import {
    followUserThunkCreator, getUsersThunkCreator, searchUserThunkCreator,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    toggleFollowingProgressActionCreator,
    unfollowUserThunkCreator
} from "../../redux/UsersReducer";
import UsersList from "./UsersList";

export default () => {
    const users = useSelector(state => state.users.users)
    const isFetching = useSelector(state => state.users.isFetching)
    const followingInProgress = useSelector(state => state.users.followingInProgress)
    const pageSize = useSelector(state => state.users.pageSize)
    const totalUsersCount = useSelector(state => state.users.totalUsersCount)
    const currentPage = useSelector(state => state.users.currentPage)
    const isAuth = useSelector(state => state.auth.isAuth)

    const dispatch = useDispatch()

    const follow = (login, userId) => dispatch(followUserThunkCreator(login, userId))
    const getUsers = (currentPage, pageSize) => dispatch(getUsersThunkCreator(currentPage, pageSize))
    const searchUser = (username) => dispatch(searchUserThunkCreator(username))
    const unfollow = (login, userId) => dispatch(unfollowUserThunkCreator(login, userId))
    const setCurrentPage = (page) => dispatch(setCurrentPageActionCreator(page))
    const toggleFollowingInProgress = (followingInProgress, userId) => dispatch(toggleFollowingProgressActionCreator(followingInProgress, userId))

    useEffect(() => {
        getUsers(currentPage, pageSize)
    }, [])


    // pagination
    const onPageChanged = (p) => {
        setCurrentPage(p)
        getUsers(p, pageSize)
    }

    return (
        <>
            {isFetching ? <Preloader/> : null}
            <UsersList
                users={users}
                followingInProgress={followingInProgress}
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}
                currentPage={currentPage}
                isAuth={isAuth}
                follow={follow}
                unfollow={unfollow}
                onPageChanged={onPageChanged}
                toggleFollowingInProgress={toggleFollowingInProgress}
                searchUser={searchUser}
            />
        </>
    )
}