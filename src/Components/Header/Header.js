import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';

 export default (props) => {
     return (
         <nav className="navbar">
             <Link className="nav-link" to="/reactive-social-app/">Github search</Link>
             <div className="login-block">
                 {props.isAuth ? <Link className="nav-link" to="/reactive-social-app/profile">{props.login}</Link>
                     : <div className="nav-link" onClick={props.setAuth}>Login</div>}
             </div>
         </nav>
     )
}