(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2mql":function(e,t,r){"use strict";var n=r("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function l(e){return n.isMemo(e)?i:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var s=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(m){var o=d(r);o&&o!==m&&e(t,o,n)}var i=u(r);f&&(i=i.concat(f(r)));for(var c=l(t),y=l(r),h=0;h<i.length;++h){var v=i[h];if(!(a[v]||n&&n[v]||y&&y[v]||c&&c[v])){var b=p(r,v);try{s(t,v,b)}catch(g){}}}}return t}},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("Bl7J");function i(){return o.a.createElement("footer",{id:"footer"},o.a.createElement("span",{class:"copyright"},"© AppSeed, Design: ",o.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP"),". Chop wood, carry water."))}var c=r("obyI"),l=r.n(c);function s(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=r("dI71"),d=r("TOwV"),m=r("2mql"),y=r.n(m);function h(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var v=o.a.createContext();var b={initialChunks:{}};var g=function(e){return e};function w(e){var t=e.defaultResolveComponent,r=void 0===t?g:t,n=e.render,a=e.onLoad;function i(e,t){void 0===t&&(t={});var i=function(e){return"function"==typeof e?{requireAsync:e}:e}(e),c={};function l(e){return t.cacheKey?t.cacheKey(e):i.resolve?i.resolve(e):null}function m(e,n,o){var a=t.resolveComponent?t.resolveComponent(e,n):r(e);if(t.resolveComponent&&!Object(d.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return y()(o,a,{preload:!0}),a}var g,w=function(e){function r(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:l(r)},n.promise=null,h(!r.__chunkExtractor||i.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(i.requireAsync(r).catch((function(){})),n.loadSync(),r.__chunkExtractor.addChunk(i.chunkName(r))),f(n)):(!1!==t.ssr&&(i.isReady&&i.isReady(r)||i.chunkName&&b.initialChunks[i.chunkName(r)])&&n.loadSync(),n)}Object(p.a)(r,e),r.getDerivedStateFromProps=function(e,t){var r=l(e);return u({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var o=r.prototype;return o.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},o.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},o.componentWillUnmount=function(){this.mounted=!1},o.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},o.triggerOnLoad=function(){var e=this;a&&setTimeout((function(){a(e.state.result,e.props)}))},o.loadSync=function(){if(this.state.loading)try{var e=m(i.requireSync(this.props),this.props,E);this.state.result=e,this.state.loading=!1}catch(t){this.state.error=t}},o.getCacheKey=function(){return l(this.props)||JSON.stringify(this.props)},o.getCache=function(){return c[this.getCacheKey()]},o.setCache=function(e){c[this.getCacheKey()]=e},o.loadAsync=function(){var e=this;if(!this.promise){var r=this.props,n=(r.__chunkExtractor,r.forwardedRef,s(r,["__chunkExtractor","forwardedRef"]));this.promise=i.requireAsync(n).then((function(r){var n=m(r,e.props,E);t.suspense&&e.setCache(n),e.safeSetState({result:m(r,e.props,E),loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){e.safeSetState({error:t,loading:!1})}))}return this.promise},o.render=function(){var e=this.props,r=e.forwardedRef,o=e.fallback,a=(e.__chunkExtractor,s(e,["forwardedRef","fallback","__chunkExtractor"])),i=this.state,c=i.error,l=i.loading,f=i.result;if(t.suspense){var p=this.getCache();if(!p)throw this.loadAsync();return n({loading:!1,fallback:null,result:p,options:t,props:u({},a,{ref:r})})}if(c)throw c;var d=o||t.fallback||null;return l?d:n({loading:l,fallback:d,result:f,options:t,props:u({},a,{ref:r})})},r}(o.a.Component),S=(g=w,function(e){return o.a.createElement(v.Consumer,null,(function(t){return o.a.createElement(g,Object.assign({__chunkExtractor:t},e))}))}),E=o.a.forwardRef((function(e,t){return o.a.createElement(S,Object.assign({forwardedRef:t},e))}));return E.preload=function(e){i.requireAsync(e)},E.load=function(e){return i.requireAsync(e)},E}return{loadable:i,lazy:function(e,t){return i(e,u({},t,{suspense:!0}))}}}var S=w({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return o.a.createElement(t,r)}}),E=S.loadable,k=S.lazy,C=w({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.loading,n=e.props;return!r&&n.children?n.children(t):null}}),$=C.loadable,O=C.lazy;var x=E;x.lib=$,k.lib=O;var R=x;function _(){P(l.a.cities),P(l.a.work);var e=R((function(){return r.e(9).then(r.bind(null,"3IRD"))}));return o.a.createElement("header",{id:"header"},o.a.createElement("h1",null,o.a.createElement("span",{role:"img"},"👋")," My name is ",l.a.authorName," and"),o.a.createElement(e,null),o.a.createElement("nav",null,o.a.createElement("ul",null,l.a.socialLinks.map((function(e){var t=e.icon,r=e.name,n=e.url;return o.a.createElement("li",null,o.a.createElement("a",{href:n,class:"icon "+t},o.a.createElement("span",{class:"label"},r)))})))))}function P(e){return e.map((function(t,r){return r===e.length-1?o.a.createElement("span",null," ",t):o.a.createElement("s",null," ",t)}))}t.default=function(){return o.a.createElement(a.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"bg"}),o.a.createElement("div",{id:"overlay"}),o.a.createElement("div",{id:"main"},o.a.createElement(_,null),o.a.createElement(i,null))))}},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},obyI:function(e,t){e.exports={siteTitle:"Amateur",manifestName:"Identity",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",authorName:"George",heading:"Amateur",cities:["Kyiv🇺🇦","Berlin🇩🇪","London🇬🇧","Reykjavik🇮🇸","Edinburgh🏴󠁧󠁢󠁳󠁣󠁴󠁿"],work:["SoundCloud","Twitter"],socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/folone"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/YukiFartlek"},{icon:"fa-linkedin",name:"LinkedIn",url:"https://www.linkedin.com/in/yukifartlek"},{icon:"fa-envelope-o",name:"Email",url:"mailto:(λx.folonexlambda-calcul.us)@"}]}},qT12:function(e,t,r){"use strict";var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,w=n?Symbol.for("react.responder"):60118,S=n?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case i:case l:case c:case m:return e;default:switch(e=e&&e.$$typeof){case u:case d:case v:case h:case s:return e;default:return t}}case a:return t}}}function k(e){return E(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=s,t.Element=o,t.ForwardRef=d,t.Fragment=i,t.Lazy=v,t.Memo=h,t.Portal=a,t.Profiler=l,t.StrictMode=c,t.Suspense=m,t.isAsyncMode=function(e){return k(e)||E(e)===f},t.isConcurrentMode=k,t.isContextConsumer=function(e){return E(e)===u},t.isContextProvider=function(e){return E(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return E(e)===d},t.isFragment=function(e){return E(e)===i},t.isLazy=function(e){return E(e)===v},t.isMemo=function(e){return E(e)===h},t.isPortal=function(e){return E(e)===a},t.isProfiler=function(e){return E(e)===l},t.isStrictMode=function(e){return E(e)===c},t.isSuspense=function(e){return E(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===l||e===c||e===m||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===h||e.$$typeof===s||e.$$typeof===u||e.$$typeof===d||e.$$typeof===g||e.$$typeof===w||e.$$typeof===S||e.$$typeof===b)},t.typeOf=E}}]);
//# sourceMappingURL=component---src-pages-index-js-c9de55828b7e1b84fcff.js.map