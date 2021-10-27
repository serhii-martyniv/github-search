import "./users.scss";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {SearchBar} from "../SearchBar/SearchBar";
import {Icon, Card, Image} from "semantic-ui-react";
import {UserCard} from "../UserCard/UserCard";

export default (props) => {

    // pagination
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log(props.users)

    return (
        <div>
            <SearchBar searchUser={props.searchUser}/>
            {/*pagination*/}
            {/*<div>*/}
            {/*    {pages.map(p =>*/}
            {/*        <span className={props.currentPage === p ? styles.selectedPage : '' } key={p} onClick={() => props.onPageChanged(p)}>*/}
            {/*            -{p}-*/}
            {/*        </span>*/}
            {/*    )}*/}
            {/*</div>*/}
            {!Array.isArray(props.users) && true ?

                <div className="cards" >
                    <UserCard profile={props.users} {...props}/>
                </div>
                :
                props.users.map(u =>
                    <div className="cards" key={u.id}>
                        <UserCard profile={u} {...props}/>
                    </div>
                )
            }
        </div>
    )
}