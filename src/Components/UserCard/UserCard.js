import React from "react"
import {Card, Icon, Image} from "semantic-ui-react";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

export const UserCard = (props) => {
   return (
       <Card>
           <Image src={props.profile.avatar_url ? props.profile.avatar_url : userPhoto} wrapped ui={false} />
           {props.isAuth && <div>
               {props.profile.followed ?
                   <button onClick={() => props.unfollow(props.profile.login, props.profile.id)} disabled={props.followingInProgress.some(id => id===props.profile.id)}>
                       Unfollow
                   </button>
                   :
                   <button onClick={() => props.follow(props.profile.login, props.profile.id)} disabled={props.followingInProgress.some(id => id===props.profile.id)}>
                       Follow
                   </button>
               }
           </div>}
           <Card.Content>
               <Card.Header>
                   {props.currentLoggedId !== props.profile.id ?
                       <NavLink className="header" to={`/reactive-social-app/profile/${props.profile.id}`}>
                           {props.profile.login}
                       </NavLink>
                       :
                       <div className="header">
                           {props.profile.login}
                       </div>
                   }
               </Card.Header>
               <Card.Meta>
                   <span className='date'>Joined in 2015</span>
               </Card.Meta>
               <Card.Description>
                   {props.profile.bio}
               </Card.Description>
           </Card.Content>
           <Card.Content extra>
               <Icon name='user' />
               {`${props.profile.followers} followers`}
           </Card.Content>
           <Card.Content extra>
               <Icon name='user' />
               {`${props.profile.following} following`}
           </Card.Content>
       </Card>
   )
}