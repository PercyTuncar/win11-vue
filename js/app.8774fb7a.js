(function(e){function t(t){for(var r,o,c=t[0],u=t[1],l=t[2],s=0,d=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-93781930":"27cfe34f"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-93781930":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-93781930":"f88aae0a"}[e]+".css",i=u.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var l=a[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],s=l.getAttribute("data-href");if(s===r||s===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),n(a)},f.href=i;var g=document.getElementsByTagName("head")[0];g.appendChild(f)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/win11-vue/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,i,a){var c=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])("div",{class:Object(r["m"])(["screen h-full",{dark:a.darkMode,"night-light":a.nightLight}])},[Object(r["g"])(c)],2)}var i={name:"App",computed:{darkMode:function(){return this.$store.state.darkMode},nightLight:function(){return this.$store.state.nightLight}}};n("edc5");i.render=o;var a=i,c=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),u=[{path:"/",name:"Home",component:function(){return n.e("chunk-93781930").then(n.bind(null,"bb51"))}}],l=Object(c["a"])({history:Object(c["b"])("/win11-vue/"),routes:u}),s=l,d=n("5502"),f=Object(d["a"])({state:{darkMode:!!localStorage.getItem("darkMode")&&"true"===localStorage.getItem("darkMode"),nightLight:!1,startMenuOpen:!1,NotificationCenterOpen:!1},mutations:{toggleStartMenu:function(e){e.startMenuOpen=!e.startMenuOpen},toggleNotificationCenter:function(e){e.NotificationCenterOpen=!e.NotificationCenterOpen},toggleDarkMode:function(e){e.darkMode=!e.darkMode,localStorage.setItem("darkMode",e.darkMode)},toggleNightLight:function(e){e.nightLight=!e.nightLight}},actions:{toggleStartMenu:function(e){e.commit("toggleStartMenu")},toggleNotificationCenter:function(e){e.commit("toggleNotificationCenter")},toggleDarkMode:function(e){e.commit("toggleDarkMode")},toggleNightLight:function(e){e.commit("toggleNightLight")}},modules:{}});n("ba8c");Object(r["c"])(a).use(f).use(s).mount("#app")},ba8c:function(e,t,n){},c042:function(e,t,n){},edc5:function(e,t,n){"use strict";n("c042")}});
//# sourceMappingURL=app.8774fb7a.js.map