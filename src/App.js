import React from 'react';
import HeaderContainer from './Components/Header/HeaderContainer';
import {Route} from "react-router-dom";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import UsersContainer from "./Components/Users/UsersContainer";

function App() {
    return (
        <div className="">
            <HeaderContainer/>
            {/* ? - means that userId is optional in route */}
            <Route path="/reactive-social-app/profile/:userId?" render={() => (
                <ProfileContainer />
            )}/>
            <Route exact path="/reactive-social-app/" render={() => <UsersContainer />}/>
        </div>
    );
}

export default App;
