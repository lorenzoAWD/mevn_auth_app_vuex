(function(e){function t(t){for(var n,o,i=t[0],u=t[1],c=t[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a={app:0},s=[];function i(e){return u.p+"js/"+({about:"about",login:"login",profile:"profile",register:"register"}[e]||e)+"."+{about:"949f9d67",login:"4d545a8f",profile:"5860e207",register:"53363e82"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={login:1,register:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about",login:"login",profile:"profile",register:"register"}[e]||e)+"."+{about:"31d6cfe0",login:"05b29b75",profile:"31d6cfe0",register:"05b29b75"}[e]+".css",a=u.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===a))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){c=p[i],l=c.getAttribute("data-href");if(l===n||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[e],f.parentNode.removeChild(f),r(s)},f.href=a;var g=document.getElementsByTagName("head")[0];g.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var f=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},3060:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Navbar"),r("div",{staticClass:"container"},[r("div",{staticClass:"container__wrapper"},[e.error?r("Errors",{attrs:{msg:e.error}}):e._e(),r("router-view")],1)])],1)},a=[],s=r("5530"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[r("div",{staticClass:"container-fluid"},[e._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav me-auto mb-2 mb-lg-0"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v("MEVN App")])],1)]),r("ul",{staticClass:"navbar-nav mb-2 mb-lg-0"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[e._v("About")])],1),e.isLoggedIn?e._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[e._v("Login")])],1),e.isLoggedIn?e._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[e._v("Register")])],1),e.isLoggedIn?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/profile"}},[e._v("Profile")])],1):e._e(),e.isLoggedIn?r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",on:{click:function(t){return t.preventDefault(),e.logoutUser.apply(null,arguments)}}},[e._v("Logout")])]):e._e()])])])])])},u=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],c=r("2f62"),l={computed:Object(s["a"])({},Object(c["c"])(["isLoggedIn"])),methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["logout"])),{},{logoutUser:function(){this.logout();
//!Non so perchè, ma il redirect verso la Login Page lo fa dal file Auth.js (forse perchè essendo globale, magari il logout può essere eventualmente implementato anche in altri componenti, non solo la Navbar)
}})},p=l,f=r("2877"),g=Object(f["a"])(p,i,u,!1,null,null,null),d=g.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"error-banner"},[r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" "+e._s(e.error)+" ")])])},v=[],b={props:["msg"],data:function(){return{boolError:!1}},computed:Object(s["a"])({},Object(c["c"])(["error"]))},h=b,_=(r("824f"),Object(f["a"])(h,m,v,!1,null,null,null)),k=_.exports,y={components:{Navbar:d,Errors:k},computed:Object(s["a"])({},Object(c["c"])(["error"]))},C=y,w=(r("5c0b"),Object(f["a"])(C,o,a,!1,null,null,null)),O=w.exports,j=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Homepage")])])}],S={name:"Home",components:{}},L=S,A=Object(f["a"])(L,E,x,!1,null,null,null),q=A.exports,I=r("1da1"),P=(r("96cf"),r("bc3a")),T=r.n(P),$={token:localStorage.getItem("token")||"",user:{},status:"",error:null},N={isLoggedIn:function(e){return!!e.token},user:function(e){return e.user},authState:function(e){return e.status},error:function(e){return e.error}},R={login:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function r(){var n,o,a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,n("login_request"),r.next=5,T.a.post("/api/users/login",t);case 5:return o=r.sent,o.data.success&&(a=o.data.token,s=o.data.user,localStorage.setItem("token",a),T.a.defaults.headers.common["Authorization"]=a,n("login_success",{token:a,user:s})),r.abrupt("return",o);case 10:r.prev=10,r.t0=r["catch"](1),n("login_error",r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()},register:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,n("register_request"),r.next=5,T.a.post("/api/users/register",t);case 5:return o=r.sent,(void 0!==o.data.success||o.data.success)&&n("register_success"),r.abrupt("return",o);case 10:r.prev=10,r.t0=r["catch"](1),n("register_error",r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()},getProfile:function(e){return Object(I["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,r("profile_request"),t.next=4,T.a.get("/api/users/profile");case 4:return n=t.sent,r("user_profile",n.data.user),t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))()},logout:function(e){var t=e.commit;localStorage.removeItem("token"),t("logout_success"),delete T.a.defaults.headers.common["Authorization"],G.push("/login")}},M={login_request:function(e){e.status="loading",e.error=null},login_success:function(e,t){var r=t.token,n=t.user;e.token=r,e.user=n,e.status="success",e.error=null},login_error:function(e,t){e.error=t.response.data.msg},register_request:function(e){e.status="loading",e.error=null},register_success:function(e){e.status="success",e.error=null},register_error:function(e,t){e.error=t.response.data.msg},profile_request:function(e){e.status="loading"},user_profile:function(e,t){e.user=t,console.log(e.user)},logout_success:function(e){e.token="",e.user="",e.status="",e.error=null}},H={state:$,getters:N,actions:R,mutations:M};n["a"].use(c["a"]);var z=new c["a"].Store({state:{},mutations:{},actions:{},modules:{Auth:H}});n["a"].use(j["a"]);var B=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return r.e("login").then(r.bind(null,"a55b"))},meta:{requiresGuest:!0}},{path:"/register",name:"Register",component:function(){return r.e("register").then(r.bind(null,"73cf"))},meta:{requiresGuest:!0}},{path:"/profile",name:"Profile",component:function(){return r.e("profile").then(r.bind(null,"c66d"))},meta:{requiresAuth:!0}}],D=new j["a"]({mode:"history",base:"/",routes:B});D.beforeEach((function(e,t,r){
//!Impedisco agli utenti non loggati di entrare nella pagina Profile
e.matched.some((function(e){return e.meta.requiresAuth}))?z.getters.isLoggedIn?r():r("/login"):e.matched.some((function(e){return e.meta.requiresGuest}))&&z.getters.isLoggedIn?r("/profile"):r()}));var G=D;n["a"].config.productionTip=!1,n["a"].prototype.$http=T.a;var U=localStorage.getItem("token");U&&(n["a"].prototype.$http.defaults.headers.common["Authorization"]=U),new n["a"]({router:G,store:z,render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"824f":function(e,t,r){"use strict";r("3060")},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.04e93fde.js.map