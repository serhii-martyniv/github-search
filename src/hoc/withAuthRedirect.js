import React from "react";
import {Redirect} from "react-router-dom";

export const withAuthRedirect = (Component) => {
    if (!Component.props.isAuth) {
        return <Redirect to='/login'/>
    }

    return Component
}