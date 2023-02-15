(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(11),c=n.n(a),s=n(5),i=n(2),r=n(4),l=n.n(r),o=n(1),d=(n(18),n(19),n(20),n(3)),u=n.n(d),j=n(0),m=function(e){var t=e.posts,n=e.handleSelectedPost,a=e.selectedPost;return Object(j.jsxs)("div",{"data-cy":"PostsList",children:[Object(j.jsx)("p",{className:"title",children:"Posts:"}),Object(j.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"has-background-link-light",children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){var t=e.id,c=e.title,s=(null===a||void 0===a?void 0:a.id)===t;return Object(j.jsxs)("tr",{"data-cy":"Post",children:[Object(j.jsx)("td",{"data-cy":"PostId",children:t}),Object(j.jsx)("td",{"data-cy":"PostTitle",children:c}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{id:"".concat(t),type:"button","data-cy":"PostButton",className:u()("button is-link",{"is-light":!s}),onClick:n,children:s?"Close":"Open"})})]},t)}))})]})]})},b=n(9),h=n(7),O=n(12),v="https://mate.academy/students-api";function x(e){return new Promise((function(t){setTimeout(t,e)}))}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:t};return n&&(a.body=JSON.stringify(n),a.headers={"Content-Type":"application/json; charset=UTF-8"}),x(300).then((function(){return fetch(v+e,a)})).then((function(e){return e.json()}))}var p=function(e){return f(e)},N=function(e,t){return f(e,"POST",t)},y=function(e){return f(e,"DELETE")},g=function(e){return y("//comments/".concat(e))},w=(n(22),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),C=function(e){var t=e.handleChange,n=e.commentData,a=e.isRequired,c=e.errorName,s=e.handleSubmit,i=e.handleClear,r=e.isPostingComment,l=n.name,o=n.email,d=n.body,m=null===c||void 0===c?void 0:c.find((function(e){return"name"===e})),b=null===c||void 0===c?void 0:c.find((function(e){return"email"===e})),h=null===c||void 0===c?void 0:c.find((function(e){return"body"===e}));return Object(j.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:s,children:[Object(j.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(j.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:u()("input",{"is-danger":a&&m}),value:l,onChange:t}),Object(j.jsx)("span",{className:"icon is-small is-left",children:Object(j.jsx)("i",{className:"fas fa-user"})}),a&&m&&Object(j.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(j.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),a&&m&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(j.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(j.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:u()("input",{"is-danger":a&&b}),value:o,onChange:t}),Object(j.jsx)("span",{className:"icon is-small is-left",children:Object(j.jsx)("i",{className:"fas fa-envelope"})}),a&&b&&Object(j.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(j.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),a&&b&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(j.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:u()("textarea",{"is-danger":a&&h}),value:d,onChange:t})}),a&&h&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(j.jsxs)("div",{className:"field is-grouped",children:[Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"submit",className:u()("button is-link",{"is-loading":r}),children:"Add"})}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:i,children:"Clear"})})]})]})},k=function(e){var t=e.selectedPost,n=e.isAddingComment,a=e.setIsAddingComment,c={name:"",email:"",body:""},r=Object(o.useState)(!1),d=Object(i.a)(r,2),u=d[0],m=d[1],v=Object(o.useState)(!1),x=Object(i.a)(v,2),f=x[0],y=x[1],k=Object(o.useState)(null),S=Object(i.a)(k,2),E=S[0],P=S[1],T=Object(o.useState)(c),I=Object(i.a)(T,2),A=I[0],F=I[1],L=Object(o.useState)(!1),D=Object(i.a)(L,2),U=D[0],B=D[1],M=Object(o.useMemo)((function(){var e;return null===(e=Object.entries(A).filter((function(e){return 0===e[1].length})))||void 0===e?void 0:e.map((function(e){return e[0]}))}),[A,U]),q=Object(o.useState)(!1),_=Object(i.a)(q,2),J=_[0],R=_[1],W=function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,a=t.id,p("//comments?postId=".concat(a));case 4:n=e.sent,P(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),y(!0);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}var a}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){t&&W(t)}),[t]);var G=function(){var e=Object(s.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R(!0),e.prev=1,!t){e.next=7;break}return e.next=5,a=A,c=t.id,N("/comments",{postId:c,name:a.name,email:a.email,body:a.body});case 5:n=e.sent,P(E&&[].concat(Object(O.a)(E),[n]));case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),new Error("error");case 12:return e.prev=12,R(!1),e.finish(12);case 15:case"end":return e.stop()}var a,c}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new Error("error");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),z=function(e){var t=e.currentTarget.id,n=null===E||void 0===E?void 0:E.findIndex((function(e){return e.id===+t})),a=null===E||void 0===E?void 0:E.filter((function(e,t){return n!==t}));P(a),Y(+t)};return Object(j.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(j.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(j.jsxs)("div",{className:"block",children:[Object(j.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(null===t||void 0===t?void 0:t.id,": ").concat(null===t||void 0===t?void 0:t.title)}),Object(j.jsx)("p",{"data-cy":"PostBody",children:null===t||void 0===t?void 0:t.body})]}),Object(j.jsxs)("div",{className:"block",children:[u&&Object(j.jsx)(w,{}),f&&Object(j.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),0===(null===E||void 0===E?void 0:E.length)&&Object(j.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),Object(j.jsx)("p",{className:"title is-4",children:"Comments:"}),null===E||void 0===E?void 0:E.map((function(e){var t=e.id,n=e.name,a=e.email,c=e.body;return Object(j.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(j.jsxs)("div",{className:"message-header",children:[Object(j.jsx)("a",{href:"mailto:".concat(a),"data-cy":"CommentAuthor",children:n}),Object(j.jsx)("button",{id:"".concat(t),"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:z,children:"delete button"})]}),Object(j.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:c})]},t)})),!n&&!u&&!f&&Object(j.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){a(!0)},children:"Write a comment"})]}),n&&Object(j.jsx)(C,{handleChange:function(e){var t=e.target,n=t.name,a=t.value;F(Object(h.a)(Object(h.a)({},A),{},Object(b.a)({},n,a)))},commentData:A,errorName:M,isRequired:U,handleSubmit:function(e){e.preventDefault(),B(!0),0===M.length&&(G(),B(!1),F(Object(h.a)(Object(h.a)({},A),{},{body:""})))},handleClear:function(){F(c),B(!1)},isPostingComment:J})]})})},S=function(e){var t=e.users,n=e.handleSelectUser,a=e.selectedUser,c=e.toggle,s=e.isOpen;return Object(j.jsxs)("div",{"data-cy":"UserSelector",className:u()("dropdown",{"is-active":s}),children:[Object(j.jsx)("div",{className:"dropdown-trigger",children:Object(j.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:c,children:[Object(j.jsx)("span",{children:a?a.name:"Choose a user"}),Object(j.jsx)("span",{className:"icon is-small",children:Object(j.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(j.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(j.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(j.jsx)("a",{href:"#user-".concat(e.id),className:u()("dropdown-item",{"is-active":e.id===(null===a||void 0===a?void 0:a.id)}),onClick:function(){n(e),c()},children:e.name},e.id)}))})})]})},E=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(o.useState)(null),r=Object(i.a)(c,2),d=r[0],b=r[1],h=Object(o.useState)(!1),O=Object(i.a)(h,2),v=O[0],x=O[1],f=Object(o.useState)(null),N=Object(i.a)(f,2),y=N[0],g=N[1],C=Object(o.useState)(!1),E=Object(i.a)(C,2),P=E[0],T=E[1],I=Object(o.useState)(null),A=Object(i.a)(I,2),F=A[0],L=A[1],D=Object(o.useState)(!1),U=Object(i.a)(D,2),B=U[0],M=U[1],q=Object(o.useState)(!1),_=Object(i.a)(q,2),J=_[0],R=_[1],W=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("/users");case 3:t=e.sent,a(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("".concat(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),G=function(){R(!J)};Object(o.useEffect)((function(){return J&&document.addEventListener("click",G),function(){document.removeEventListener("click",G)}}),[J]);var Y=function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(null),T(!0),e.prev=2,e.next=5,a=t.id,p("/posts?userId=".concat(a));case 5:n=e.sent,g(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),x(!0);case 12:return e.prev=12,T(!1),e.finish(12);case 15:case"end":return e.stop()}var a}),e,null,[[2,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){W()}),[]);return Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"tile is-ancestor",children:[Object(j.jsx)("div",{className:"tile is-parent",children:Object(j.jsxs)("div",{className:"tile is-child box is-success",children:[Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(S,{users:n,handleSelectUser:function(e){g(null),x(!1),b(e),Y(e)},selectedUser:d,toggle:G,isOpen:J})}),Object(j.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!d&&Object(j.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),P&&Object(j.jsx)(w,{}),v&&Object(j.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),0===(null===y||void 0===y?void 0:y.length)&&!v&&!P&&Object(j.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),y&&y.length>0&&Object(j.jsx)(m,{posts:y,handleSelectedPost:function(e){M(!1);var t=e.currentTarget.id,n=null===y||void 0===y?void 0:y.find((function(e){return e.id===+t}));n&&L(n),n===F&&L(null)},selectedPost:F})]})]})}),Object(j.jsx)("div",{"data-cy":"Sidebar",className:u()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":F}),children:Object(j.jsx)("div",{className:"tile is-child box is-success ",children:F&&Object(j.jsx)(k,{selectedPost:F,isAddingComment:B,setIsAddingComment:M})})})]})})})};c.a.render(Object(j.jsx)(E,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.2cf7b615.chunk.js.map