import React from 'react';
import Preloader from "../Common/Preloader/Preloader";
import {UserCard} from "../UserCard/UserCard";

export default (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className="container content">
            <div className="cards">
                <UserCard profile={props.profile} currentLoggedId={props.currentLoggedId}/>
            </div>
        </div>
    )
}