(this["webpackJsonpgithub-search"]=this["webpackJsonpgithub-search"]||[]).push([[0],{115:function(e,t,n){e.exports=n.p+"static/media/user.5172ccf5.png"},134:function(e,t,n){e.exports=n.p+"static/media/loader.edbc3cc0.svg"},136:function(e,t,n){e.exports={search:"searchBar_search__3s1Lo"}},151:function(e,t,n){e.exports=n(170)},157:function(e,t,n){},163:function(e,t,n){},166:function(e,t,n){},168:function(e,t,n){},170:function(e,t,n){"use strict";n.r(t);var r=n(54),a=n(101),c=n(12),u=n(13),o=n.n(u),s=n(35),i=n(0),l=n.n(i),f={Authorization:"token  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"};function p(){return(p=Object(s.a)(o.a.mark((function e(t){var n,r,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:10,e.next=3,fetch("https://api.github.com/users?per_page=".concat(n));case 3:return r=e.sent,e.abrupt("return",r.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/user/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/user",{method:"GET",headers:f});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/user/following/".concat(t),{method:"PUT",headers:f});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/user/following/".concat(t),{method:"DELETE",headers:f});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/user/following/".concat(t),{method:"GET",headers:f});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t,"/followers"));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t,"/following"));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w={users:[],pageSize:10,totalUsersCount:100,currentPage:1,isFetching:!1,followingInProgress:[]},j=function(e){return{type:"FOLLOW",userId:e}},I=function(e){return{type:"UNFOLLOW",userId:e}},S=function(e){return{type:"SET_USERS",users:e}},_=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},y=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",followingInProgress:e,userId:t}},L=function(e,t){return function(n){n(_(!0)),function(e){return p.apply(this,arguments)}(e,t).then((function(e){n(S(e)),console.log(e),e.forEach((function(e){n(T(e.login,e.id)),n(U(e.login,e.id)),n(_(!1)),function(e){return E.apply(this,arguments)}(e.login).then((function(t){t.ok?n(j(e.id)):n(I(e.id))}))}))}))}},T=function(e,t){return function(n){n(_(!0)),function(e){return b.apply(this,arguments)}(e).then((function(e){var r,a;e&&n((r=t,a=e.length,{type:"SET_USER_FOLLOWERS",userId:r,followers:a})),n(_(!1))}))}},x=function(e){return function(t){t(_(!0)),e?function(e){return v.apply(this,arguments)}(e).then((function(e){e&&(t(_(!1)),t(S(e)))})):t(L())}},U=function(e,t){return function(n){n(_(!0)),function(e){return O.apply(this,arguments)}(e).then((function(e){var r,a;e&&n((r=t,a=e.length,{type:"SET_USER_FOLLOWINGS",userId:r,following:a})),n(_(!1))}))}},N=function(e,t){return function(n){n(y(!0,t)),function(e){return m.apply(this,arguments)}(e).then((function(e){e.ok&&n(j(t)),n(y(!1,t))}))}},k=function(e,t){return function(n){n(y(!0,t)),function(e){return g.apply(this,arguments)}(e).then((function(e){e.ok&&n(I(t)),n(y(!1,t))}))}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(c.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(c.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(c.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(c.a)({},e,{followed:!1}):e}))});case"SET_USER_FOLLOWERS":return Object(c.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(c.a)({},e,{followers:t.followers}):e}))});case"SET_USER_FOLLOWINGS":return Object(c.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(c.a)({},e,{following:t.following}):e}))});case"SET_USERS":return Object(c.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(c.a)({},e,{currentPage:t.page});case"SET_TOTAL_USERS_COUNT":return Object(c.a)({},e,{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return Object(c.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(c.a)({},e,{followingInProgress:t.followingInProgress?[].concat(Object(a.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},G={profile:null},P=function(e){return function(t){t(_(!0)),function(e){return h.apply(this,arguments)}(e).then((function(e){t(_(!1)),t({type:"SET_USER_PROFILE",profile:e})}))}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:e.posts.length+1,text:t.text,likes:0};return Object(c.a)({},e,{posts:[].concat(Object(a.a)(e.posts),[n])});case"SET_USER_PROFILE":return Object(c.a)({},e,{profile:t.profile});default:return e}},R={userId:null,email:null,login:null,isAuth:!1},C=function(){return function(e){e(_(!0)),function(){return d.apply(this,arguments)}().then((function(t){var n=t.id,r=t.login,a=t.email;n&&(e(function(e,t,n){return{type:"SET_USER_DATA",data:{userId:e,email:t,login:n}}}(n,a,r)),e(_(!1)))}))}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(c.a)({},e,{},t.data,{isAuth:!0});default:return e}},B=n(131),D=Object(r.c)({profile:A,users:F,auth:W}),z=Object(r.d)(D,Object(r.a)(B.a));window.store=z;var H=z,J=n(36),M=n.n(J),Y=n(27),q=(n(157),function(e){return l.a.createElement("nav",{className:"navbar"},l.a.createElement(Y.b,{className:"nav-link",to:"/reactive-social-app/"},"Github search"),l.a.createElement("div",{className:"login-block"},e.isAuth?l.a.createElement(Y.b,{className:"nav-link",to:"/reactive-social-app/profile"},e.login):l.a.createElement("div",{className:"nav-link",onClick:e.setAuth},"Login")))}),V=n(16),K=function(){var e=Object(V.b)(),t=Object(V.c)((function(e){return e.auth.isAuth})),n=Object(V.c)((function(e){return e.auth.login}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(q,{isAuth:t,login:n,setAuth:function(){return e(C())}}))},Q=n(50),X=n(134),Z=n.n(X),$=(n(163),function(){return l.a.createElement("div",{className:"loader"},l.a.createElement("img",{src:Z.a,alt:"loading"}))}),ee=n(183),te=n(137),ne=n(78),re=n(115),ae=n.n(re),ce=function(e){return l.a.createElement(ee.a,null,l.a.createElement(te.a,{src:e.profile.avatar_url?e.profile.avatar_url:ae.a,wrapped:!0,ui:!1}),e.isAuth&&l.a.createElement("div",null,e.profile.followed?l.a.createElement("button",{onClick:function(){return e.unfollow(e.profile.login,e.profile.id)},disabled:e.followingInProgress.some((function(t){return t===e.profile.id}))},"Unfollow"):l.a.createElement("button",{onClick:function(){return e.follow(e.profile.login,e.profile.id)},disabled:e.followingInProgress.some((function(t){return t===e.profile.id}))},"Follow")),l.a.createElement(ee.a.Content,null,l.a.createElement(ee.a.Header,null,e.currentLoggedId!==e.profile.id?l.a.createElement(Y.c,{className:"header",to:"/reactive-social-app/profile/".concat(e.profile.id)},e.profile.login):l.a.createElement("div",{className:"header"},e.profile.login)),l.a.createElement(ee.a.Meta,null,l.a.createElement("span",{className:"date"},"Joined in 2015")),l.a.createElement(ee.a.Description,null,e.profile.bio)),l.a.createElement(ee.a.Content,{extra:!0},l.a.createElement(ne.a,{name:"user"}),"".concat(e.profile.followers," followers")),l.a.createElement(ee.a.Content,{extra:!0},l.a.createElement(ne.a,{name:"user"}),"".concat(e.profile.following," following")))},ue=function(e){return e.profile?l.a.createElement("div",{className:"container content"},l.a.createElement("div",{className:"cards"},l.a.createElement(ce,{profile:e.profile,currentLoggedId:e.currentLoggedId}))):l.a.createElement($,null)},oe=function(){var e=Object(V.c)((function(e){return e})),t=Object(V.b)(),n=Object(Q.f)().params.userId;return!n&&e.auth.isAuth&&(n=e.auth.userId),Object(i.useEffect)((function(){n&&t(P(n))}),[n]),l.a.createElement(ue,{profile:e.profile.profile,isAuth:e.auth.isAuth,currentLoggedId:e.auth.userId})},se=(n(166),n(138)),ie=n(136),le=n.n(ie),fe=n(182),pe=function(e){var t=Object(i.useState)(""),n=Object(se.a)(t,2),r=n[0],a=n[1];return l.a.createElement("div",{className:le.a.search},l.a.createElement(fe.a,null,l.a.createElement(fe.a.Group,null,l.a.createElement(fe.a.Input,{placeholder:"Github user",name:"github-user",value:r,onChange:function(e){a(e.target.value)}}),l.a.createElement(fe.a.Button,{content:"Search",onClick:function(){e.searchUser(r)}}))))},he=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],r=1;r<=t;r++)n.push(r);return console.log(e.users),l.a.createElement("div",null,l.a.createElement(pe,{searchUser:e.searchUser}),Array.isArray(e.users)?e.users.map((function(t){return l.a.createElement("div",{className:"cards",key:t.id},l.a.createElement(ce,Object.assign({profile:t},e)))})):l.a.createElement("div",{className:"cards"},l.a.createElement(ce,Object.assign({profile:e.users},e))))},de=function(){var e=Object(V.c)((function(e){return e.users.users})),t=Object(V.c)((function(e){return e.users.isFetching})),n=Object(V.c)((function(e){return e.users.followingInProgress})),r=Object(V.c)((function(e){return e.users.pageSize})),a=Object(V.c)((function(e){return e.users.totalUsersCount})),c=Object(V.c)((function(e){return e.users.currentPage})),u=Object(V.c)((function(e){return e.auth.isAuth})),o=Object(V.b)(),s=function(e,t){return o(L(e,t))};Object(i.useEffect)((function(){s(c,r)}),[]);return l.a.createElement(l.a.Fragment,null,t?l.a.createElement($,null):null,l.a.createElement(he,{users:e,followingInProgress:n,pageSize:r,totalUsersCount:a,currentPage:c,isAuth:u,follow:function(e,t){return o(N(e,t))},unfollow:function(e,t){return o(k(e,t))},onPageChanged:function(e){o(function(e){return{type:"SET_CURRENT_PAGE",page:e}}(e)),s(e,r)},toggleFollowingInProgress:function(e,t){return o(y(e,t))},searchUser:function(e){return o(x(e))}}))};var me=function(){return l.a.createElement("div",{className:""},l.a.createElement(K,null),l.a.createElement(Q.b,{path:"/reactive-social-app/profile/:userId?",render:function(){return l.a.createElement(oe,null)}}),l.a.createElement(Q.b,{exact:!0,path:"/reactive-social-app/",render:function(){return l.a.createElement(de,null)}}))};n(167),n(168),n(169);M.a.render(l.a.createElement(Y.a,null,l.a.createElement(V.a,{store:H},l.a.createElement(me,null))),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.1d96e68b.chunk.js.map