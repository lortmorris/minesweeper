(this.webpackJsonpbuscaminas=this.webpackJsonpbuscaminas||[]).push([[0],{133:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),u=n(66);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(u.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},14:function(e,t,n){"use strict";var a={setLevel:function(e){return{type:"GAME_SET_LEVEL",payload:{level:e}}},setBoard:function(e){return{type:"GAME_SET_BOARD",payload:{board:e}}},clickCell:function(e,t){return{type:"GAME_USER_CLICKED",payload:{x:e,y:t}}},showCell:function(e,t){return{type:"GAME_SHOW_CELL",payload:{x:e,y:t}}},getNextGame:function(){return{type:"GAME_GET_NEXT_GAME"}},setDifficulty:function(e){return{type:"GAME_SET_DIFFICULTY",payload:{difficulty:parseInt(e,10)}}},setValue:function(e,t,n){return{type:"GAME_SET_CELL_VALUE",payload:{value:n,x:e,y:t}}},endGame:function(){return{type:"GAME_SET_ENDGAME"}},setGamePoints:function(e,t){return{type:"GAME_SET_POINTS",payload:{completed:e,rest:t}}}};t.a={Game:a}},46:function(e,t,n){"use strict";var a=n(23),r=n(82),c=n(76),o=n.n(c),u={scores:[{name:"John",scoring:100},{name:"Jack",scoring:92},{name:"Wilson",scoring:87},{name:"Rambo",scoring:57},{name:"Smith",scoring:49}]},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return t.type,e},s=n(81),i=n(28);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={scoring:0,level:1,difficulty:1,board:[],timer:0,status:"new",points:{completed:0,rest:0}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GAME_SHOW_CELL":return e.x===t.payload.x&&e.y===t.payload.y?p({},e,{show:!0}):e;case"GAME_SET_CELL_VALUE":return e.x===t.payload.x&&e.y===t.payload.y?p({},e,{value:t.payload.value}):e;default:return e}},E={Users:l,Game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GAME_SET_ENDGAME":return p({},e,{status:"end"});case"GAME_SHOW_CELL":case"GAME_SET_CELL_VALUE":return p({},e,{board:e.board.map((function(e){return e.map((function(e){return d(e,t)}))}))});case"GAME_SET_BOARD":return p({},e,{board:Object(s.a)(t.payload.board),status:"new",points:{completed:0,rest:0}});case"GAME_SET_POINTS":return p({},e,{points:p({},t.payload)});case"GAME_SET_DIFFICULTY":return p({},e,{difficulty:t.payload.difficulty});default:return e}}},b=n(10),h=n.n(b),y=n(9),O=n(77),v=n(31),j=n.n(v);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={ENDPOINT_URL:"https://somedomain.com"}.ENDPOINT_URL,_=function(){var e=Object(O.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=t.token||"")&&(j.a.defaults.headers.common.Authorization=r),j.a.defaults.headers.common.Accept="application/json",t.headers&&Object.keys(t.headers).forEach((function(e){return j.a.defaults.headers.common[e]=t.headers[e],!0})),n={method:t.method.toLowerCase(),url:t.path,baseURL:w},t.query&&Object.keys(t.query).length>0&&(n.params=g({},t.query)),t.data&&Object.keys(t.data).length>0&&(n.data=g({},t.data)),e.prev=5,e.next=8,j.a.request(n);case 8:return a=e.sent,e.abrupt("return",Promise.resolve(a));case 12:return e.prev=12,e.t0=e.catch(5),e.abrupt("return",Promise.reject(e.t0));case 15:case"end":return e.stop()}var r}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}(),G=n(14),k=h.a.mark(C),A=h.a.mark(L),P=h.a.mark(M),S=h.a.mark(D),T=function(e){return Math.round(Math.random()*e)};function C(){var e,t,n,a,r,c,o;return h.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Object(y.e)();case 2:for(e=u.sent,t=e.Game.board,n=[],a=0,r=0,c=0;c<t.length;c+=1)for(o=0;o<t.length;o+=1)t[c][o].value>-1&&n.push(t[c][o]);return n.forEach((function(e){e.show?a+=1:r+=1})),u.next=11,Object(y.d)(G.a.Game.setGamePoints(a,r));case 11:return u.abrupt("return",{completed:a,rest:r});case 12:case"end":return u.stop()}}),k)}function L(e,t){var n,a,r,c;return h.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(y.e)();case 2:return n=o.sent,a=n.Game.board,r=0,c=[],a[t-1]&&a[t-1][e-1]&&c.push({x:t-1,y:e-1}),a[t]&&a[t][e-1]&&c.push({x:t,y:e-1}),a[t+1]&&a[t+1][e-1]&&c.push({x:t+1,y:e-1}),a[t-1]&&a[t-1][e]&&c.push({x:t-1,y:e}),a[t+1]&&a[t+1][e]&&c.push({x:t+1,y:e}),a[t-1]&&a[t-1][e+1]&&c.push({x:t-1,y:e+1}),a[t]&&a[t][e+1]&&c.push({x:t,y:e+1}),a[t+1]&&a[t+1][e+1]&&c.push({x:t+1,y:e+1}),c.forEach((function(e){-1===a[e.x][e.y].value&&(r+=1)})),o.abrupt("return",r);case 16:case"end":return o.stop()}}),A)}function M(e){var t,n,a,r,c,o,u,l,s;return h.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(y.e)();case 2:if(t=i.sent,n=e.payload,a=n.x,r=n.y,c=t.Game.board,-1!==c[r][a].value){i.next=25;break}return i.next=9,Object(y.d)(G.a.Game.showCell(a,r));case 9:o=[],c.forEach((function(e){e.forEach((function(e){-1===e.value&&!1===e.show&&o.push(e)}))})),o=o.sort((function(){return.5-Math.random()})),u=0;case 13:if(!(u<o.length)){i.next=22;break}return l=o[u],i.next=17,Object(y.c)(Math.round(100*Math.random()));case 17:return i.next=19,Object(y.d)(G.a.Game.showCell(l.x,l.y));case 19:u+=1,i.next=13;break;case 22:return i.next=24,Object(y.d)(G.a.Game.endGame());case 24:return i.abrupt("return",!0);case 25:return i.next=27,L(a,r);case 27:return s=i.sent,i.next=30,Object(y.d)(G.a.Game.setValue(a,r,s));case 30:return i.next=32,Object(y.d)(G.a.Game.showCell(a,r));case 32:return i.next=34,C();case 34:return i.abrupt("return",!1);case 35:case"end":return i.stop()}}),P)}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e*t<=n)throw new Error("invalid bombs");for(var a=[],r=[],c=0;c<e;c+=1){for(var o=[],u=0;u<t;u+=1)o.push({value:0,show:!1,key:"key-".concat(u,"-").concat(c),x:u,y:c}),r.push({y:c,x:u});o.key=c,a.push(o)}for(var l=0;l<n;l+=1){var s=T(r.length-1);a[r[s].y][r[s].x].value=-1,r.splice(s,1)}for(var i=0;i<e;i+=1)for(var m=0;m<t;m+=1)a[i][m].value>-1&&L(a,i);return a}function D(){var e,t,n;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(y.e)();case 2:return e=a.sent,t=e.Game.difficulty,n=N(5*t,5*t,.2*(5*t*t*5)),a.next=8,Object(y.d)(G.a.Game.setBoard(n));case 8:case"end":return a.stop()}}),S)}var I=D,U=h.a.mark(V),H=h.a.mark(q),R=h.a.mark(W);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V(e){var t,n,a;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(y.e)((function(e){return e.Users.token}));case 3:return t=r.sent,r.next=6,Object(y.d)({type:"FETCH_INIT"});case 6:return n=F({token:t,method:e.options.method||"get",path:e.options.path||"/",query:e.query,data:e.data},e.payload),r.next=9,Object(y.b)(_,n);case 9:if(a=r.sent,!e.dispatchAction){r.next=13;break}return r.next=13,Object(y.d)({type:e.dispatchAction,payload:a});case 13:return r.next=15,Object(y.d)({type:"FETCH_REQUEST_END"});case 15:r.next=20;break;case 17:r.prev=17,r.t0=r.catch(0),console.info(r.t0);case 20:case"end":return r.stop()}}),U,null,[[0,17]])}function q(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(y.a)([I()]);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("Error initialState: ",e.t0);case 8:case"end":return e.stop()}}),H,null,[[0,5]])}function W(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(y.g)("INIT_APP_STATE",q);case 3:return e.next=5,Object(y.f)("GAME_USER_CLICKED",M);case 5:return e.next=7,Object(y.f)("GAME_GET_NEXT_GAME",I);case 7:return e.next=9,Object(y.f)(["UNIVERSAL_FETCH"],V);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("mySaga Error: ",e.t0);case 14:case"end":return e.stop()}}),R,null,[[0,11]])}var J=W,z=Object(a.c)(E),K=Object(r.a)(),X=Object(a.e)(z,Object(a.a)(K,o.a));K.run(J);t.a=X},66:function(e,t,n){"use strict";(function(e){var a=n(80),r=n(0),c=n.n(r),o=n(12),u=n(42),l=n(78),s=(n(93),n(94),n(79)),i=n(46);t.a=Object(l.hot)(e)((function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],l=t[1];return i.a.dispatch({type:"INIT_APP_STATE"}),window.addEventListener("load",(function(){setTimeout((function(){l(!1)}),500)})),c.a.createElement(o.a,{store:i.a},c.a.createElement(u.a,{basename:"/"},n&&c.a.createElement("div",{className:"load".concat(n?"":" loaded")},c.a.createElement("div",{className:"load__icon-wrap"},c.a.createElement("svg",{className:"load__icon"},c.a.createElement("path",{fill:"#4ce1b6",d:"M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"})))),!n&&c.a.createElement(s.a,null)))}))}).call(this,n(48)(e))},79:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(24),o=n(68),u=n(69),l=n(83),s=n(70),i=n(84),m=n(12),p=n(4),f=n.n(p),d=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=f()({wrapper:!0}),t=this.props.children;return r.a.createElement("div",null,r.a.createElement("div",{className:e},t))}}]),t}(a.PureComponent),E=Object(m.b)((function(e){return{theme:e.theme,customizer:e.customizer}}))(d),b=n(136),h=n(137),y=n(135),O=n(72),v=n(139),j=n(14),x=function(){var e=Object(m.d)((function(e){return 5*e.Game.points.completed})),t=Object(m.d)((function(e){return e.Game.timer})),n=Object(m.c)();return r.a.createElement("header",{className:"gameHeader"},r.a.createElement(y.a,null,r.a.createElement(O.a,null,r.a.createElement(v.a,null,r.a.createElement(v.a.Group,{controlId:"gameHeaderForm.Difficulty"},r.a.createElement(v.a.Label,null,"Difficulty"),r.a.createElement(v.a.Control,{as:"select",onChange:function(e){return t=e.target.value,n(j.a.Game.setDifficulty(t)),void n(j.a.Game.getNextGame());var t}},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"))))),r.a.createElement(O.a,null,r.a.createElement(y.a,null,"Scoring: ".concat(e))),r.a.createElement(O.a,null,r.a.createElement(y.a,null,"Timer: ".concat(t)))))},g=n(138),w=n(140),_=function(e){var t=e.handleClick,n=Object(m.d)((function(e){return e.Users.scores}));return r.a.createElement(O.a,null,r.a.createElement(y.a,null,r.a.createElement(g.a,null,n.map((function(e){return r.a.createElement(g.a.Item,{key:"user-".concat(e.name)},"".concat(e.name,": ").concat(e.scoring))})))),r.a.createElement(y.a,null,r.a.createElement(w.a,{onClick:t},"New Game")))},G=function(e){var t=e.children,n=Object(m.d)((function(e){return e.Game.status})),a=Object(m.c)(),c=function(){return a(j.a.Game.getNextGame())};return r.a.createElement(b.a,null,r.a.createElement(x,null),t,r.a.createElement(h.a,{show:"end"===n,onHide:function(){return c()},dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title"},r.a.createElement(h.a.Header,{closeButton:!0},r.a.createElement(h.a.Title,{id:"example-custom-modal-styling-title"},"Scores")),r.a.createElement(h.a.Body,null,r.a.createElement(_,{handleClick:c}))))},k=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404"))},A=n(8),P=n.n(A),S=(P.a.number,P.a.bool,function(e){var t=e.onClickHandle,n=e.data,a=e.gameStatus,c=n.value,o=n.show,u=n.x,l=n.y;return o?r.a.createElement("span",{className:"game-cell fill"},"".concat(-1===c?"*":c)):"end"===a?r.a.createElement("span",{className:"game-cell"}):r.a.createElement(w.a,{className:"game-cell",onClick:function(){return t(u,l)}})}),T=0,C=function(){var e=Object(m.d)((function(e){return e.Game.board})),t=Object(m.d)((function(e){return e.Game.status})),n=Object(m.c)(),a=function(e,t){return n(j.a.Game.clickCell(e,t))};return r.a.createElement(O.a,null,r.a.createElement(y.a,null,e.map((function(e){return r.a.createElement(O.a,{key:"col-".concat(T+=1)},e.map((function(e){return r.a.createElement(y.a,{key:e.key},r.a.createElement(S,{data:e,onClickHandle:a,gameStatus:t}))})))}))))},L=function(){return r.a.createElement(C,null)},M=function(){return r.a.createElement("div",null,r.a.createElement(G,null,r.a.createElement(c.a,{exact:!0,path:"/",component:L})))};t.a=function(){return r.a.createElement(E,null,r.a.createElement("main",null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:M}),r.a.createElement(c.a,{path:"/404",component:k}))))}},85:function(e,t,n){e.exports=n(133)},94:function(e,t,n){}},[[85,1,2]]]);
//# sourceMappingURL=main.ee038529.chunk.js.map