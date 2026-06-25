var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=le(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ue(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function de(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var w=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},T={map:ue,forEach:function(e,t,n){ue(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ue(e,function(){t++}),t},toArray:function(e){return ue(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=T,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:de}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,w)}catch(e){w(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.7`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,ie());else{var t=n(l);t!==null&&se(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():ee=!1}}}var ie;if(typeof y==`function`)ie=function(){y(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=re,ie=function(){oe.postMessage(null)}}else ie=function(){_(re,0)};function se(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,se(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ie()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.7`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.memo_cache_sentinel`),se=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var le=Symbol.for(`react.client.reference`);function ue(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||``,e=e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ue(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var de=Array.isArray,w=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},pe=[],me=-1;function he(e){return{current:e}}function E(e){0>me||(e.current=pe[me],pe[me]=null,me--)}function D(e,t){me++,pe[me]=e.current,e.current=t}var ge=he(null),_e=he(null),ve=he(null),ye=he(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}E(ge),D(ge,e)}function xe(){E(ge),E(_e),E(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=Hd(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(E(ge),E(_e)),ye.current===e&&(E(ye),Qf._currentValue=fe)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Be=t.unstable_NormalPriority,Ve=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ue=t.log,We=t.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var Je=Math.clz32?Math.clz32:Ze,Ye=Math.log,Xe=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(Ye(e)/Xe|0)|0}var Qe=256,$e=262144,et=4194304;function tt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=tt(n))):i=tt(o):i=tt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=tt(n))):i=tt(o)):i=tt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function rt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function it(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var e=et;return et<<=1,!(et&62914560)&&(et=4194304),e}function ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function st(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ct(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&lt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function lt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function dt(e,t){var n=t&-t;return n=n&42?1:ft(n),(n&(e.suspendedLanes|t))===0?n:0}function ft(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mt(){var e=T.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ht(e,t){var n=T.p;try{return T.p=e,t()}finally{T.p=n}}var gt=Math.random().toString(36).slice(2),_t=`__reactFiber$`+gt,vt=`__reactProps$`+gt,yt=`__reactContainer$`+gt,bt=`__reactEvents$`+gt,xt=`__reactListeners$`+gt,St=`__reactHandles$`+gt,Ct=`__reactResources$`+gt,wt=`__reactMarker$`+gt;function Tt(e){delete e[_t],delete e[vt],delete e[bt],delete e[xt],delete e[St]}function Et(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[_t])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Dt(e){if(e=e[_t]||e[yt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ot(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function kt(e){var t=e[Ct];return t||(t=e[Ct]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function O(e){e[wt]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return je.call(It,e)?!0:je.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Kt(e){if(e=e||(typeof document<`u`?document:void 0),e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,Vt(n)):Zt(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r=r??i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function Zt(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(de(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??(n=``),t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&rn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&rn(e,a,t[a])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=Dt(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[vt]||null;if(!i)throw Error(s(90));Yt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(bu(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[vt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var yn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function On(){return!1}function kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:On,this.isPropagationStopped=On,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=kn(An),Mn=h({},An,{view:0,detail:0}),Nn=kn(Mn),Pn,Fn,In,Ln=h({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==In&&(In&&e.type===`mousemove`?(Pn=e.screenX-In.screenX,Fn=e.screenY-In.screenY):Fn=Pn=0,In=e),Pn)},movementY:function(e){return`movementY`in e?e.movementY:Fn}}),Rn=kn(Ln),zn=kn(h({},Ln,{dataTransfer:0})),Bn=kn(h({},Mn,{relatedTarget:0})),Vn=kn(h({},An,{animationName:0,elapsedTime:0,pseudoElement:0})),Hn=kn(h({},An,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Un=kn(h({},An,{data:0})),Wn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Gn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Kn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kn[e])?!!t[e]:!1}function Jn(){return qn}var Yn=kn(h({},Mn,{key:function(e){if(e.key){var t=Wn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Gn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Xn=kn(h({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Zn=kn(h({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn})),Qn=kn(h({},An,{propertyName:0,elapsedTime:0,pseudoElement:0})),$n=kn(h({},Ln,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),er=kn(h({},An,{newState:0,oldState:0})),tr=[9,13,27,32],nr=yn&&`CompositionEvent`in window,rr=null;yn&&`documentMode`in document&&(rr=document.documentMode);var ir=yn&&`TextEvent`in window&&!rr,ar=yn&&(!nr||rr&&8<rr&&11>=rr),or=` `,sr=!1;function cr(e,t){switch(e){case`keyup`:return tr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function lr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ur=!1;function dr(e,t){switch(e){case`compositionend`:return lr(t);case`keypress`:return t.which===32?(sr=!0,or):null;case`textInput`:return e=t.data,e===or&&sr?null:e;default:return null}}function fr(e,t){if(ur)return e===`compositionend`||!nr&&cr(e,t)?(e=Tn(),wn=Cn=Sn=null,ur=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ar&&t.locale!==`ko`?null:t.data;default:return null}}var pr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!pr[e.type]:t===`textarea`}function hr(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Ed(t,`onChange`),0<t.length&&(n=new jn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var gr=null,_r=null;function vr(e){yd(e,0)}function yr(e){if(Gt(Ot(e)))return e}function br(e,t){if(e===`change`)return t}var xr=!1;if(yn){var Sr;if(yn){var Cr=`oninput`in document;if(!Cr){var wr=document.createElement(`div`);wr.setAttribute(`oninput`,`return;`),Cr=typeof wr.oninput==`function`}Sr=Cr}else Sr=!1;xr=Sr&&(!document.documentMode||9<document.documentMode)}function Tr(){gr&&(gr.detachEvent(`onpropertychange`,Er),_r=gr=null)}function Er(e){if(e.propertyName===`value`&&yr(_r)){var t=[];hr(t,_r,e,fn(e)),_n(vr,t)}}function Dr(e,t,n){e===`focusin`?(Tr(),gr=t,_r=n,gr.attachEvent(`onpropertychange`,Er)):e===`focusout`&&Tr()}function Or(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return yr(_r)}function kr(e,t){if(e===`click`)return yr(t)}function Ar(e,t){if(e===`input`||e===`change`)return yr(t)}function jr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Mr=typeof Object.is==`function`?Object.is:jr;function Nr(e,t){if(Mr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!Mr(e[i],t[i]))return!1}return!0}function Pr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fr(e,t){var n=Pr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Pr(n)}}function Ir(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ir(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function Rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var zr=yn&&`documentMode`in document&&11>=document.documentMode,Br=null,Vr=null,Hr=null,Ur=!1;function Wr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ur||Br==null||Br!==Kt(r)||(r=Br,`selectionStart`in r&&Rr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&Nr(Hr,r)||(Hr=r,r=Ed(Vr,`onSelect`),0<r.length&&(t=new jn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Br)))}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Kr={animationend:Gr(`Animation`,`AnimationEnd`),animationiteration:Gr(`Animation`,`AnimationIteration`),animationstart:Gr(`Animation`,`AnimationStart`),transitionrun:Gr(`Transition`,`TransitionRun`),transitionstart:Gr(`Transition`,`TransitionStart`),transitioncancel:Gr(`Transition`,`TransitionCancel`),transitionend:Gr(`Transition`,`TransitionEnd`)},qr={},Jr={};yn&&(Jr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),`TransitionEvent`in window||delete Kr.transitionend.transition);function Yr(e){if(qr[e])return qr[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jr)return qr[e]=t[n];return e}var Xr=Yr(`animationend`),Zr=Yr(`animationiteration`),Qr=Yr(`animationstart`),$r=Yr(`transitionrun`),ei=Yr(`transitionstart`),ti=Yr(`transitioncancel`),ni=Yr(`transitionend`),ri=new Map,ii=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ii.push(`scrollEnd`);function ai(e,t){ri.set(e,t),Mt(t,[e])}var oi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},si=[],ci=0,li=0;function ui(){for(var e=ci,t=li=ci=0;t<e;){var n=si[t];si[t++]=null;var r=si[t];si[t++]=null;var i=si[t];si[t++]=null;var a=si[t];if(si[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&mi(n,i,a)}}function di(e,t,n,r){si[ci++]=e,si[ci++]=t,si[ci++]=n,si[ci++]=r,li|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function fi(e,t,n,r){return di(e,t,n,r),hi(e)}function pi(e,t){return di(e,null,null,t),hi(e)}function mi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function hi(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gi={};function _i(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(e,t,n,r){return new _i(e,t,n,r)}function yi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bi(e,t){var n=e.alternate;return n===null?(n=vi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function xi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Si(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)yi(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=vi(31,n,t,i),e.elementType=ae,e.lanes=a,e;case y:return Ci(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=vi(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case te:return e=vi(13,n,t,i),e.elementType=te,e.lanes=a,e;case ne:return e=vi(19,n,t,i),e.elementType=ne,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:o=10;break a;case ee:o=9;break a;case C:o=11;break a;case re:o=14;break a;case ie:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=vi(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Ci(e,t,n,r){return e=vi(7,e,r,t),e.lanes=n,e}function wi(e,t,n){return e=vi(6,e,null,t),e.lanes=n,e}function Ti(e){var t=vi(18,null,null,0);return t.stateNode=e,t}function Ei(e,t,n){return t=vi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Di=new WeakMap;function Oi(e,t){if(typeof e==`object`&&e){var n=Di.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},Di.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var ki=[],Ai=0,ji=null,Mi=0,Ni=[],Pi=0,Fi=null,Ii=1,Li=``;function Ri(e,t){ki[Ai++]=Mi,ki[Ai++]=ji,ji=e,Mi=t}function zi(e,t,n){Ni[Pi++]=Ii,Ni[Pi++]=Li,Ni[Pi++]=Fi,Fi=e;var r=Ii;e=Li;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ii=1<<32-Je(t)+i|n<<i|r,Li=a+e}else Ii=1<<a|n<<i|r,Li=e}function Bi(e){e.return!==null&&(Ri(e,1),zi(e,1,0))}function Vi(e){for(;e===ji;)ji=ki[--Ai],ki[Ai]=null,Mi=ki[--Ai],ki[Ai]=null;for(;e===Fi;)Fi=Ni[--Pi],Ni[Pi]=null,Li=Ni[--Pi],Ni[Pi]=null,Ii=Ni[--Pi],Ni[Pi]=null}function Hi(e,t){Ni[Pi++]=Ii,Ni[Pi++]=Li,Ni[Pi++]=Fi,Ii=t.id,Li=t.overflow,Fi=e}var Ui=null,k=null,A=!1,Wi=null,Gi=!1,Ki=Error(s(519));function qi(e){throw $i(Oi(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ki}function Ji(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[_t]=e,t[vt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||qi(e,!0)}function Yi(e){for(Ui=e.return;Ui;)switch(Ui.tag){case 5:case 31:case 13:Gi=!1;return;case 27:case 3:Gi=!0;return;default:Ui=Ui.return}}function Xi(e){if(e!==Ui)return!1;if(!A)return Yi(e),A=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&k&&qi(e),Yi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));k=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));k=uf(e)}else t===27?(t=k,Zd(e.type)?(e=lf,lf=null,k=e):k=t):k=Ui?cf(e.stateNode.nextSibling):null;return!0}function Zi(){k=Ui=null,A=!1}function Qi(){var e=Wi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Wi=null),e}function $i(e){Wi===null?Wi=[e]:Wi.push(e)}var ea=he(null),ta=null,na=null;function ra(e,t,n){D(ea,t._currentValue),t._currentValue=n}function ia(e){e._currentValue=ea.current,E(ea)}function aa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function oa(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),aa(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),aa(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function sa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;Mr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===ye.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&oa(t,e,n,r),t.flags|=262144}function ca(e){for(e=e.firstContext;e!==null;){if(!Mr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function la(e){ta=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function j(e){return da(ta,e)}function ua(e,t){return ta===null&&la(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},na===null){if(e===null)throw Error(s(308));na=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else na=na.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=dd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=w.S;w.S=function(e,t){tu=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=he(null);function Ea(){var e=Ta.current;return e===null?G.pooledCache:e}function Da(e,t){t===null?D(Ta,Ta.current):D(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(s(460)),Aa=Error(s(474)),ja=Error(s(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(s(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(s(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=bi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=wi(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===ie&&Fa(a)===t.type)?(t=i(t,n.props),Ha(t,n),t.return=e,t):(t=Si(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ei(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Ci(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=wi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=Si(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Ei(t,e.mode,n),t.return=e,t;case ie:return t=Fa(t),f(e,t,n)}if(de(t)||ce(t))return t=Ci(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===S)return f(e,ua(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ie:return n=Fa(n),p(e,t,n,r)}if(de(n)||ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===S)return p(e,t,ua(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:return r=Fa(r),m(e,t,n,r,i)}if(de(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===S)return m(e,t,n,ua(t,r),i);Ua(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),A&&Ri(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return A&&Ri(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),A&&Ri(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),A&&Ri(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return A&&Ri(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),A&&Ri(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ie&&Fa(l)===r.type){n(e,r.sibling),c=i(r,a.props),Ha(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=Ci(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=Si(a.type,a.key,a.props,null,e.mode,c),Ha(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ei(a,e.mode,c),c.return=e,e=c}return o(e);case ie:return a=Fa(a),b(e,r,a,c)}if(de(a))return h(e,r,a,c);if(ce(a)){if(l=ce(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Va(a),c);if(a.$$typeof===S)return b(e,r,ua(e,a),c);Ua(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=wi(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=vi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=hi(e),mi(e,null,n),t}return di(e,r,t,n),hi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eo=!1;function to(){if(eo){var e=ba;if(e!==null)throw e}}function no(e,t,n,r){eo=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ya&&(eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ro(n[e],t)}var ao=he(null),oo=he(0);function so(e,t){e=Gl,D(oo,e),D(ao,t),Gl=e|t.baseLanes}function co(){D(oo,Gl),D(ao,ao.current)}function lo(){Gl=oo.current,E(ao),E(oo)}var uo=he(null),fo=null;function po(e){var t=e.alternate;D(N,N.current&1),D(uo,e),fo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(fo=e)}function mo(e){D(N,N.current),D(uo,e),fo===null&&(fo=e)}function ho(e){e.tag===22?(D(N,N.current),D(uo,e),fo===null&&(fo=e)):go(e)}function go(){D(N,N.current),D(uo,uo.current)}function _o(e){E(uo),fo===e&&(fo=null),E(N)}var N=he(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=0,P=null,F=null,I=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function L(){throw Error(s(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mr(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,a){return yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Ws:Gs,So=!1,a=n(r,i),So=!1,xo&&(a=Ao(t,n,r,i)),ko(e),a}function ko(e){w.H=Us;var t=F!==null&&F.next!==null;if(yo=0,I=F=P=null,bo=!1,wo=0,To=null,t)throw Error(s(300));e===null||z||(e=e.dependencies,e!==null&&ca(e)&&(z=!0))}function Ao(e,t,n,r){P=e;var i=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=i)throw Error(s(301));if(i+=1,I=F=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}w.H=Ks,a=t(n,r)}while(xo);return a}function jo(){var e=w.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function Mo(){var e=Co!==0;return Co=0,e}function No(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Po(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}yo=0,I=F=P=null,xo=!1,wo=Co=0,To=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function R(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(s(467)):Error(s(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Pa(To,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===S)return j(e)}throw Error(s(438,String(e)))}function zo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??(t={data:[],index:0}),n===null&&(n=Io(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(R(),F,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(yo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((yo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,P.lanes|=p,Kl|=p;f=u.action,So&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,P.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!Mr(a,e.memoizedState)&&(z=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=R(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Mr(a,t.memoizedState)||(z=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Wo(e,t,n){var r=P,i=R(),a=A;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Mr((F||i).memoizedState,n);if(o&&(i.memoizedState=n,z=!0),i=i.queue,hs(qo.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||I!==null&&I.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,i,n,t),null),G===null)throw Error(s(349));a||yo&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Io(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mr(e,n)}catch{return!0}}function Yo(e){var t=pi(e,2);t!==null&&hu(t,e,2)}function Xo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),So){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,F,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,i){if(Bs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};w.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,$o(t,a)):(a.next=n.next,t.pending=n.next=a)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=w.T,o={};w.T=o;try{var s=n(i,r),c=w.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),w.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(A){var n=G.formState;if(n!==null){a:{var r=P;if(A){if(k){b:{for(var i=k,a=Gi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){k=cf(i.nextSibling),r=i.data===`F!`;break a}}qi(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,P,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,P,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(R(),F,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===ka?ja:e}else r=t;t=R();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=R(),n=F;if(n!==null)return ss(t,n,e);R(),t=t.memoizedState,n=R();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Io(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return R().memoizedState}function fs(e,t,n,r){var i=Fo();P.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=R();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Do(r,F.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(P.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Io(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=R().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Do(t,r[1]))return r[0];if(r=e(),So){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||yo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),P.lanes|=e,Kl|=e,n)}function Es(e,t,n,r){return Mr(n,t)?n:ao.current===null?!(yo&42)||yo&1073741824&&!(q&261930)?(z=!0,e.memoizedState=n):(e=mu(),P.lanes|=e,Kl|=e,t):(e=Ts(e,n,r),Mr(e,t)||(z=!0),e)}function Ds(e,t,n,r,i){var a=T.p;T.p=a!==0&&8>a?a:8;var o=w.T,s={};w.T=s,zs(e,!1,t,n);try{var c=i(),l=w.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,Ca(c,r),pu(e)):Rs(e,t,r,pu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{T.p=a,o!==null&&s.types!==null&&(o.types=s.types),w.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=As(e).queue;Ds(e,i,t,fe,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},pu())}function Ms(){return j(Qf)}function Ns(){return R().memoizedState}function Ps(){return R().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Xa(n);var r=Za(t,e,n);r!==null&&(hu(r,t,n),Qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=fi(e,t,n,r),n!==null&&(hu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,pu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Mr(s,o))return di(e,t,i,0),G===null&&ui(),!1}catch{}if(n=fi(e,t,i,r),n!==null)return hu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(s(479))}else t=fi(e,n,r,2),t!==null&&hu(t,e,2)}function Bs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Vs(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}var Us={readContext:j,use:Ro,useCallback:L,useContext:L,useEffect:L,useImperativeHandle:L,useLayoutEffect:L,useInsertionEffect:L,useMemo:L,useReducer:L,useRef:L,useState:L,useDebugValue:L,useDeferredValue:L,useTransition:L,useSyncExternalStore:L,useId:L,useHostTransitionStatus:L,useFormState:L,useActionState:L,useOptimistic:L,useMemoCache:L,useCacheRefresh:L};Us.useEffectEvent=L;var Ws={readContext:j,use:Ro,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:j,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(So){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(So){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Fo(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,P,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,i=Fo();if(A){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),G===null)throw Error(s(349));q&127||Go(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ms(qo.bind(null,r,a,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),n},useId:function(){var e=Fo(),t=G.identifierPrefix;if(A){var n=Li,r=Ii;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Fo().memoizedState=Fs.bind(null,P)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:j,use:Ro,useCallback:Cs,useContext:j,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(R(),F.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(R(),F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:j,use:Ro,useCallback:Cs,useContext:j,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=R();return F===null?Ts(n,e,t):Es(n,F.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=R();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Xa(n);r.tag=2,t!=null&&(r.callback=t),t=Za(e,r,n),t!==null&&(hu(t,e,n),Qa(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){oi(e)}function $s(e){console.error(e)}function ec(e){oi(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=Xa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=Xa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&sa(t,n,i,!0),n=uo.current,n!==null){switch(n.tag){case 31:case 13:return fo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(A)return t=uo.current,t===null?(r!==Ki&&(t=Error(s(423),{cause:r}),$i(Oi(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Oi(r,n),i=rc(e.stateNode,r,i),$a(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Ki&&(e=Error(s(422),{cause:r}),$i(Oi(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Oi(a,n),Zl===null?Zl=[a]:Zl.push(a),Y!==4&&(Y=2),t===null)return!0;r=Oi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=rc(n.stateNode,r,e),$a(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(iu===null||!iu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=ic(i),ac(i,e,n,r),$a(n,i),!1}n=n.return}while(n!==null);return!1}var sc=Error(s(461)),z=!1;function cc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return la(t),r=Oo(e,t,n,o,a,i),s=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(A&&s&&Bi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!yi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=Si(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Nr:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=bi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Nr(a,r)&&e.ref===t.ref)if(z=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(z=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?co():so(t,a),ho(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),co(),go(t)):(Da(t,a.cachePool),so(t,a),go(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),co(),ho(t),e!==null&&sa(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ga(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,_o(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(A){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(mo(t),(e=k)?(e=rf(e,Gi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fi===null?null:{id:Ii,overflow:Li},retryLane:536870912,hydrationErrors:null},n=Ti(e),n.return=t,t.child=n,Ui=t,k=null)):e=null,e===null)throw qi(t);return t.lanes=536870912,null}return hc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(mo(t),i)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(z||sa(e,t,n,!1),i=(n&e.childLanes)!==0,z||i){if(r=G,r!==null&&(o=dt(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,pi(e,o),hu(r,e,o),sc;Du(),t=gc(e,t,n)}else e=a.treeContext,k=cf(o.nextSibling),Ui=t,A=!0,Wi=null,Gi=!1,e!==null&&Hi(t,e),t=hc(t,r),t.flags|=4096;return t}return e=bi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return la(t),n=Oo(e,t,n,r,void 0,i),r=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(A&&r&&Bi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return la(t),t.updateQueue=null,n=Ao(t,r,n,i),ko(e),r=Mo(),e!==null&&!z?(No(e,t,a),Nc(e,t,a)):(A&&r&&Bi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(la(t),t.stateNode===null){var a=gi,o=n.contextType;typeof o==`object`&&o&&(a=j(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?j(o):gi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),no(t,r,a,i),to(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=gi,typeof u==`object`&&u&&(o=j(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,no(t,r,a,i),to(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=qa||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=gi,typeof l==`object`&&l&&(c=j(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,no(t,r,a,i),to();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&ca(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=qa||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ca(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return Zi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Oa()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Ec(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(N.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(A){if(i?po(t):go(t),(e=k)?(e=rf(e,Gi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fi===null?null:{id:Ii,overflow:Li},retryLane:536870912,hydrationErrors:null},n=Ti(e),n.return=t,t.child=n,Ui=t,k=null)):e=null,e===null)throw qi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(go(t),i=t.mode,c=Oc({mode:`hidden`,children:c},i),r=Ci(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(null,r)):(po(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(po(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(go(t),c=r.fallback,i=t.mode,r=Oc({mode:`visible`,children:r.children},i),c=Ci(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,t=pc(null,r)):(go(t),t.child=e.child,t.flags|=128,t=null);else if(po(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,$i({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(z||sa(e,t,n,!1),o=(n&e.childLanes)!==0,z||o){if(o=G,o!==null&&(r=dt(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,pi(e,r),hu(o,e,r),sc;af(c)||Du(),t=kc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,k=cf(c.nextSibling),Ui=t,A=!0,Wi=null,Gi=!1,e!==null&&Hi(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return i?(go(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=bi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Ci(c,i,n,null),c.flags|=2):c=bi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(i=c.cachePool,i===null?i=Oa():(l=M._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(e.child,r)):(po(t),n=e.child,e=n.sibling,n=bi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=vi(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ga(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),aa(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=N.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,D(N,o),cc(e,t,r,n),r=A?Mi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(sa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=bi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ca(e))):!0}function Fc(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ra(t,M,e.memoizedState.cache),Zi();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(po(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(po(t),t.flags|=128,null);po(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||(sa(e,t,n,!1),r=(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(N,N.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:ra(t,M,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)z=!0;else{if(!Pc(e,n)&&!(t.flags&128))return z=!1,Fc(e,t,n);z=!!(e.flags&131072)}else z=!1,A&&t.flags&1048576&&zi(t,Mi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)yi(e)?(r=Zs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===C){t.tag=11,t=lc(null,t,e,r,n);break a}else if(i===re){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=ue(e)||e,Error(s(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Zs(r,t.pendingProps),xc(e,t,r,i,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ya(e,t),no(t,r,null,n);var o=t.memoizedState;if(r=o.cache,ra(t,M,r),r!==a.cache&&oa(t,[M],n,!0),to(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==i){i=Oi(Error(s(424)),t),$i(i),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(k=cf(e.firstChild),Ui=t,A=!0,Wi=null,Gi=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Zi(),r===i){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:A||(n=t.type,e=t.pendingProps,r=Bd(ve.current).createElement(n),r[_t]=t,r[vt]=e,Pd(r,n,e),O(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&A&&(r=t.stateNode=ff(t.type,t.pendingProps,ve.current),Ui=t,Gi=!0,i=k,Zd(t.type)?(lf=i,k=cf(r.firstChild)):k=i),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&A&&((i=r=k)&&(r=tf(r,t.type,t.pendingProps,Gi),r===null?i=!1:(t.stateNode=r,Ui=t,k=cf(r.firstChild),Gi=!1,i=!0)),i||qi(t)),Se(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Oo(e,t,jo,null,null,n),Qf._currentValue=i),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&A&&((e=n=k)&&(n=nf(n,t.pendingProps,Gi),n===null?e=!1:(t.stateNode=n,Ui=t,k=null,e=!0)),e||qi(t)),null;case 13:return Ec(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ra(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,la(t),i=j(i),r=r(i),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return la(t),r=j(M),e===null?(i=Ea(),i===null&&(i=G,a=ha(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Ja(t),ra(t,M,i)):((e.lanes&n)!==0&&(Ya(e,t),no(t,null,null,n),to()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,ra(t,M,r),r!==i.cache&&oa(t,[M],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ra(t,M,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ia=Ma,Aa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:at(),e.lanes|=t,Xl|=t)}function Vc(e,t){if(!A)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Vi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ia(M),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qi())),B(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Lc(t),a===null?(B(t),Rc(t,i,null,r,n)):(B(t),zc(t,a))):a?a===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,a)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,i,e,r,n)),null;case 27:if(Ce(t),n=ve.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}e=ge.current,Xi(t)?Ji(t,e):(e=ff(i,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(Ce(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}if(a=ge.current,Xi(t))Ji(t,a);else{var o=Bd(ve.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[_t]=t,a[vt]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=ve.current,Xi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Ui,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||qi(t,!0)}else e=Bd(e).createTextNode(r),e[_t]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Xi(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[_t]=t}else Zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=Qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_o(t),t):(_o(t),null);if(t.flags&128)throw Error(s(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Xi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[_t]=t}else Zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),i=!1}else i=Qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(_o(t),t):(_o(t),null)}return _o(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return xe(),e===null&&Sd(t.stateNode.containerInfo),B(t),null;case 10:return ia(t.type),B(t),null;case 19:if(E(N),r=t.memoizedState,r===null)return B(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)Vc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=vo(e),a!==null){for(t.flags|=128,Vc(r,!1),e=a.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)xi(n,e),n=n.sibling;return D(N,N.current&1|2),A&&Ri(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>nu&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304)}else{if(!i)if(e=vo(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!A)return B(t),null}else 2*Ie()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=N.current,D(N,i?n&1|2:n&1),A&&Ri(t,r.treeForkCount),e);case 22:case 23:return _o(t),lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&E(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ia(M),B(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Uc(e,t){switch(Vi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ia(M),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(_o(t),t.alternate===null)throw Error(s(340));Zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_o(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(N),null;case 4:return xe(),null;case 10:return ia(t.type),null;case 22:case 23:return _o(t),lo(),e!==null&&E(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ia(M),null;case 25:return null;default:return null}}function Wc(e,t){switch(Vi(t),t.tag){case 3:ia(M),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&_o(t);break;case 13:_o(t);break;case 19:E(N);break;case 10:ia(t.type);break;case 22:case 23:_o(t),lo(),e!==null&&E(Ta);break;case 24:ia(M)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{io(t,n)}catch(t){Z(e,e.return,t)}}}function Jc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[vt]=t}catch(t){Z(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[_t]=e,t[vt]=n}catch(t){Z(e,e.return,t)}}var il=!1,V=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,H=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Lr(e),Rr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,H=t;H!==null;)if(t=H,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,H=e;else for(;H!==null;){switch(t=H,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Zs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Gc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{io(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||V,i=il;var a=V;il=r,(V=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),il=i,V=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:V||Xc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||Xc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:V||Xc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),V||Kc(4,n,t),dl(e,t,n);break;case 1:V||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,dl(e,t,n),V=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(s(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(s(160));fl(a,o,i),U=null,ul=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=vl;if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[wt]||a[_t]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[_t]=e,O(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[_t]=e,O(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),e.flags&32){i=e.stateNode;try{tn(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Qc(e,i,n===null?i:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=vl,vl=gf(t.containerInfo),_l(t,e),vl=i,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}al&&(al=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=V;if(il=u||i,V=d||l,_l(t,e),V=d,il=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||il||V||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;nl(e,el(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(tn(a,``),n.flags&=-33),nl(e,el(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;tl(e,el(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),Cl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Xc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n=n&&(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Gc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)ro(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Yc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i=i&&((t.subtreeFlags&10256)!=0||!1),t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(ll(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var zl={getCacheForType:function(e){var t=j(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return j(M).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:w.T===null?mt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||A){var e=$e;$e<<=1,!($e&3932160)&&($e=262144),Yl=e}else Yl=536870912;return e=uo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),st(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||rt(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=a,ql|=a,i=4;break a}a=Ql,Ql=i,a!==null&&(Ql===null?Ql=a:Ql.push.apply(Ql,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=eu+300-Ie(),10<i)){if(yu(r,t,Yl,!Hl),nt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,`Throttled`,-0,0),i);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Nl(t,a,d);var m=(a&62914560)===a?eu-Ie():(a&4194048)===a?tu-Ie():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Mr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&lt(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,na=ta=null,Po(e),za=null,Ba=0,e=K;for(;e!==null;)Wc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=bi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=rt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Je(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ui(),n}function Cu(e,t){P=null,w.H=Us,t===ka||t===ja?(t=La(),J=3):t===Aa?(t=La(),J=4):J=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,tc(e,Oi(t,e.current)))}function wu(){var e=uo.current;return e===null?!0:(q&4194048)===q?fo===null:(q&62914560)===q||q&536870912?e===fo:!1}function Tu(){var e=w.H;return w.H=Us,e===null?Us:e}function Eu(){var e=w.A;return w.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&uo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:uo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,na=ta=null,W=r,w.H=i,w.A=a,K===null&&(G=null,q=0,ui()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),i=Eu();G!==e||q!==t?(ru=null,nu=Ie()+500,Su(e,t)):Ul=rt(e,t);a:do try{if(J!==0&&K!==null){t=K;var a=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,a,1);break;case 2:case 9:if(Na(a)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},a.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Na(a)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var c=K;if(o?Wf(o):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,a,5);break;case 6:J=0,Vl=null,Pu(e,t,a,6);break;case 8:xu(),Y=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return na=ta=null,w.H=r,w.A=i,W=n,K===null?(G=null,q=0,ui(),Y):0}function ju(){for(;K!==null&&!Pe();)Mu(K)}function Mu(e){var t=Ic(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Po(t);default:Wc(n,t),t=K=xi(t,Gl),t=Ic(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){na=ta=null,Po(t),za=null,Ba=0;var i=t.return;try{if(oc(e,i,t,n,q)){Y=1,tc(e,Oi(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,tc(e,Oi(n,e.current)),K=null;return}t.flags&32768?(A||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=uo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Hc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=li,ct(e,n,a,o,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Be,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=w.T,w.T=null,i=T.p,T.p=2,o=W,W|=4;try{sl(e,t,n)}finally{W=o,T.p=i,w.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Lr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ir(s.ownerDocument.documentElement,s)){if(c!==null&&Rr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Fr(s,h),v=Fr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,T.p=r,w.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,T.p=r,w.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Fe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),pt(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=w.T,i=T.p,T.p=2,w.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{w.T=t,T.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=pt(su),r=w.T,i=T.p;try{T.p=32>n?32:n,w.T=null,n=lu,lu=null;var a=au,o=su;if(X=0,ou=au=null,su=0,W&6)throw Error(s(331));var c=W;if(W|=4,Il(a.current),Ol(a,a.current,o,n),W=c,id(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,a)}catch{}return!0}finally{T.p=i,w.T=r,Vu(e,t)}}function Wu(e,t,n){t=Oi(n,t),t=rc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(st(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Oi(n,e),n=ic(2),r=Za(t,n,2),r!==null&&(ac(n,r,t,e),st(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Ie()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=at()),e=pi(e,t),e!==null&&(st(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Me(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=nt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||rt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ie(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=it(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=nt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||rt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),pt(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=cd.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=nt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?Me(Re,ad):od()})}function dd(){if(nd===0){var e=ya;e===0&&(e=Qe,Qe<<=1,!(Qe&261888)&&(Qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[vt]||null).action),o=r.submitter;o&&(t=(t=o[vt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new jn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ii.length;hd++){var gd=ii[hd];ai(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ai(Xr,`onAnimationEnd`),ai(Zr,`onAnimationIteration`),ai(Qr,`onAnimationStart`),ai(`dblclick`,`onDoubleClick`),ai(`focusin`,`onFocus`),ai(`focusout`,`onBlur`),ai($r,`onTransitionRun`),ai(ei,`onTransitionStart`),ai(ti,`onTransitionCancel`),ai(ni,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){oi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){oi(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[bt];n===void 0&&(n=t[bt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,At.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Et(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),o=[];a:{var s=ri.get(e);if(s!==void 0){var c=jn,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:c=Yn;break;case`focusin`:u=`focus`,c=Bn;break;case`focusout`:u=`blur`,c=Bn;break;case`beforeblur`:case`afterblur`:c=Bn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Rn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=zn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Zn;break;case Xr:case Zr:case Qr:c=Vn;break;case ni:c=Qn;break;case`scroll`:case`scrollend`:c=Nn;break;case`wheel`:c=$n;break;case`copy`:case`cut`:case`paste`:c=Hn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Xn;break;case`toggle`:case`beforetoggle`:c=er}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Et(u)||u[yt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?Et(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=Rn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Xn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Ot(c),h=u==null?s:Ot(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,Et(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Ot(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=br;else if(mr(s))if(xr)v=Ar;else{v=Or;var y=Dr}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&on(r.elementType)&&(v=br):v=kr;if(v&&(v=v(e,r))){hr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Zt(s,`number`,s.value)}switch(y=r?Ot(r):window,e){case`focusin`:(mr(y)||y.contentEditable===`true`)&&(Br=y,Vr=r,Hr=null);break;case`focusout`:Hr=Vr=Br=null;break;case`mousedown`:Ur=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ur=!1,Wr(o,n,i);break;case`selectionchange`:if(zr)break;case`keydown`:case`keyup`:Wr(o,n,i)}var b;if(nr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ur?cr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ar&&n.locale!==`ko`&&(ur||x!==`onCompositionStart`?x===`onCompositionEnd`&&ur&&(b=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,ur=!0)),y=Ed(r,x),0<y.length&&(x=new Un(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=lr(n),b!==null&&(x.data=b)))),(b=ir?dr(e,n):fr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Un(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=vn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&tn(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:an(e,r,a);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=sn.get(n)||n,Rt(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:an(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&tn(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=un);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[vt]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Xt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}en(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Yt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[wt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Tt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[wt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=T.d;T.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Dt(e);t!==null&&t.tag===5&&t.type===`form`?js(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),O(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),O(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),O(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=kt(r).hoistableStyles,a=Af(e);t=t||`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);O(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),O(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),O(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=ve.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=kt(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=kt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=kt(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+Jt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),O(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Jt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,O(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),O(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,O(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),O(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,O(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),O(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??(e.crossOrigin=t.crossOrigin),e.referrerPolicy??(e.referrerPolicy=t.referrerPolicy),e.title??(e.title=t.title)}function zf(e,t){e.crossOrigin??(e.crossOrigin=t.crossOrigin),e.referrerPolicy??(e.referrerPolicy=t.referrerPolicy),e.integrity??(e.integrity=t.integrity)}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[wt]||a[_t]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,O(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),O(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=vi(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function tp(e){return e?(e=gi,e):gi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Xa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Za(e,r,t),n!==null&&(hu(n,e,t),Qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=pi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ft(t);var n=pi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=2,up(e,t,n,r)}finally{T.p=a,w.T=i}}function lp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=8,up(e,t,n,r)}finally{T.p=a,w.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Dt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=tt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Je(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Ie()+500,id(0,!1))}}break;case 31:case 13:s=pi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=fn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Et(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Dt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Et(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Dt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Dt(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[vt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[vt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[yt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.7`)throw Error(s(527,Lp,`19.2.7`));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:w,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ge=zp.inject(Rp),Ke=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Qs,a=$s,o=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[yt]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=n(),u=c(),d=[{id:`P0_5分钟筛选牛股`,title:`5分钟筛选牛股`,category:`集合竞价`,source:`P0`,filename:`实战笔记_5分钟筛选牛股.md`,content:`# 实战笔记 · 5 分钟黄金时间筛选牛股（集合竞价买入）

> 题材分类：集合竞价买入 / 强势股识别 / 早盘 5 分钟
> 游资/作者：邢者
> 关联资料：参见本批《集合竞价奥义》《看集合竞价》《云意电气涨停》
> 来源：D 盘《集合竞价之干货：如何用5分钟黄金时间筛选到牛股》

---

## 一句话定位

> **集合竞价真正有价值的时间段就是 9:20-9:24。** 在这 5 分钟里，快速筛选 3-5 只加入自选股，做重点观察——做超短的黄金时间段。

## 核心观点

1. **9:15-9:20 是诱多诱空时段**：可撤单，没有真实参考价值
2. **9:20-9:24 才是真信号**：不能撤单，反映真实资金博弈
3. **早盘竞价买股的目标**：找到当天能涨停的强势股
4. **开盘价到开盘是 5 分钟黄金时间**：复盘的缺漏在竞价中弥补
5. **每晚复盘 + 次日竞价筛选 = 完整闭环**

## 集合竞价时间分段

| 时段 | 规则 | 实战意义 |
|------|------|----------|
| 9:15-9:20 | 可挂单可撤单 | 主力的"诱多诱空"时间，**不要被表演迷惑** |
| 9:20-9:24 | 只能挂单不能撤单 | **核心观察窗口** |
| 9:24-9:25 | 撮合中 | 最终竞价价格形成 |
| 9:25-9:30 | 不能挂单不能撤单 | 等待开盘 |
| 9:30 | 正式开盘 | **从开盘到 9:35 是 5 分钟黄金筛选时间** |

## 强势股的两种竞价形态

### 形态 A：股价逐步推高型

| 条件 | 描述 |
|------|------|
| 1. 价格走势 | 集合竞价期间股价逐步加高，最好**最后 1 分钟**被大买单快速拉高 |
| 2. 量能 | 9.20 后成交量**逐渐缓慢放大**，红柱子连续排列，无空隙 |
| 3. 巨单 | 9.20 分前临时有巨单挂过涨停板 |
| 4. 趋势 | 上升通道 + 5 日均线多头排列 + **前 5 个交易日有过涨停记录** |

### 形态 B：股价逐步下坠型（仍然有机会）

| 条件 | 描述 |
|------|------|
| 1. 高开下坠 | 9.20 前高开，9.20 后买单不减少反而卖单逐渐增加 |
| 2. 价格下降 | 价格从 10-9% 缓慢下降到 5-4%，最后急落到 2-1% |
| 3. **不能下跌翻绿**：翻绿直接放弃 |
| 4. 卖单量 | 最后 1 分钟卖单量要**缓慢增加**，突然加大就放弃 |
| 5. 开始买单 | 开始买单要**大**，**不能撤单** |
| 6. 开始价格 | 要高，最好是涨停价 |

## 适用 / 不适用

- ✅ **适用**：复盘后已筛选的标的 + 题材股
- ❌ **不适用**：公告利好（管理层增持、收购兼并、年报预增）—— 这往往是出货的招数

## 邢者的实操方法

> 邢者的习惯就是：每晚复盘后筛选的股票池，会列入自选股，而次日的集合竞价期间，我会再筛选 3-5 只股票，快速加入自选股，做重点观察。

- **每晚复盘**：必修课，不复盘等于上了战场不拿武器
- **次日集合竞价**：在 5 分钟里快速来回切换 61 键和 63 键（**盯着快速涨幅榜和短线精灵**）
- **快速涨幅榜 + 短线精灵** = 黄金筛选工具
- **把握好这 5 分钟，筛选到好票，那就成功一半了**

## 经典案例

- **太阳鸟**：6 分钟涨停
  - 邢者当晚复盘没有发现它
  - 次日集合竞价发现异动，加入自选股
  - 开盘后迅速下单买入
  - 6 分钟后涨停，**当日收益 11%**
  - 买入理由：四通股份连板被关小黑屋，市场需要再确立一个龙头
- **太阳能**：集合竞价涨停案例
  - 白色线段 = 集合竞价时间
  - 红柱 = 买单（多），绿柱 = 卖单（少）
  - 红柱逐步扩大、空隙少、最后代表买单的红柱突然变大
  - 9:25 结束到开盘的 5 分钟内筛选到自选股

## 选股方法

> 太阳鸟案例的逻辑：四通股份连板被关小黑屋 → 市场需要再确立一个龙头 → 复牌补涨概念 → 金亚科技的涨停间接证明逻辑成立。

- **复盘 + 竞价 = 完整闭环**
- **次新竞价 + 高送转跷跷板**：邢者多模式互补
- **公告利好排除**：管理层增持、收购兼并、年报预增等，**不适用本法**

## 风控逻辑

- **9:20 后才看真信号**：之前是主力的"诱多诱空"时间
- **价格翻绿直接放弃**：股价逐步下坠型
- **开始买单不能撤**：撤了就是诱多
- **公告利好不适用**：往往就是出货招数
- **5 分钟快筛 → 开盘后还要看分时**：竞价只是开始

## 金句

> 集合竞价真正有价值的时间段就是 9 点 20 分-24 分之间，因为按照规定，在 9 点 20 分之后的挂单是不能撤回的，这更能真实反映场内外资金的博弈。

> 9.20 分后成交量逐渐缓慢放大，红柱子连续排列，最好每个红柱子之间没有空隙。

> 做超短，每晚复盘是必修课，不复盘，次日去追热点，做题材，等于上了战场不拿武器，跟送死没有区别。

> 而次日的集合竞价选股，恰恰就会弥补这个缺失。

> 把握好这 5 分钟，筛选到好票，那就成功一半了。

## 适用场景

- ✅ 早盘 9:20-9:24 的强势股筛选
- ✅ 复盘后 3-5 只目标股的快速补充
- ✅ 题材股/人气的竞价买入
- ✅ 启动日 K + 5 日均线上的标的
- ❌ 9:15-9:20 的虚假信号
- ❌ 公告利好股（往往是出货）
- ❌ 翻绿开盘的弱势股

## 关联阅读

- 集合竞价原理：参见本批《看集合竞价》《集合竞价奥义》
- 卖股艺术：参见本批《集合竞价卖股》
- 涨停判断：参见本批《云意电气涨停》《抓妖股概率》

## 与其他游资的呼应

- **JOKER 皇**：本笔记是"5 分钟选股"，JOKER 皇的"188 元文章"是"竞价深读"
- **Asking**：选最强股 = 选股
- **养家**：复盘 + 竞价 + 情绪揣摩的结合

---

*笔记来源：D 盘《集合竞价之干货：如何用5分钟黄金时间筛选到牛股》DOCX*
*整理日期：2026-06-25*
`,oneLine:`**集合竞价真正有价值的时间段就是 9:20-9:24。** 在这 5 分钟里，快速筛选 3-5 只加入自选股，做重点观察——做超短的黄金时间段。`,tags:[`集合竞价买入`,`强势股识别`,`早盘`,`5`,`分钟`]},{id:`P0_Asking理念总结`,title:`Asking理念总结`,category:`顶级游资心法`,source:`P0`,filename:`实战笔记_Asking理念总结.md`,content:`# 实战笔记 · Asking 理念总结

> 题材分类：龙头战法 / 追涨 / 守株待兔
> 游资：邱宝裕（Asking）
> 席位：兴业证券福州湖东路；曾为中信建投成都马家花园 cdrr；2010 前后活跃
> 关联资料：参见本批《实战笔记_asking 龙头战法》范本；C 盘 \`ASKING心法_深度研读报告.md\`
> 来源：D 盘《Asking 理念总结》

---

## 一句话定位

> **等待、发现、跟随。** 选股是决定性前提，但选股不是全部——跟随才是最次要的买入动作。

## 核心观点

1. **对市场的理解力**：选股同等重要的两个因素是"等待"（绝对耐心）和"发现"（经验确认）。
2. **下决心的决断力**：龙头战法需要的是"临阵时的果敢和勇气"，技术上没有秘诀。
3. **只做超强势股追涨和守株待兔**：仓位管理必不可少，否则会坐电梯。
4. **人弃我取，人取我予**：99% 的人会去接"红岭路"那种恐慌盘，**正宗的短线不接别人恐慌盘**。
5. **赚钱效应的本质**：一个市场出现多只连续涨停股时，只有涨停次数最多的那只冲击力最强。
6. **交易环境比具体个股重要**：研究宁波佬的交易环境比研究个股更基础。

## 仓位管理铁律

| 场景 | 仓位动作 |
|------|----------|
| 确认追涨 | 先进**半仓** |
| 当天涨停 | 次日继续加仓到**全仓** |
| 当天不涨停 | 次日择高先出 → 等回调做"守株待兔" |
| 守株待兔 | 先**半仓**，获利后出局不加仓 |
| 失利 | **止损且不加仓** |
| 启动重仓条件 | **只有半仓股票迅速盈利时**，才能动用另半仓资金 |

## 选股方法

- **做超强势股 ≠ 做龙头**：Asking 自述他和职业炒手找的才是"龙头"，荣展做的只是超强势股。
- **熊市转势初期**：睁大眼睛等待最强股出现，**闭着眼睛进入**。
- **做超短 = 不参与任何性质整理**：哪怕是下跌通道的小反抽，买了就为马上挣钱。

## 龙头与超强势股的差异

| 维度 | 龙头 | 超强势股 |
|------|------|----------|
| 出现时机 | 大盘转势初期 | 任何时候 |
| 数量 | 1 年 1-2 次可赚大钱 | 持续存在 |
| 操作 | 追涨 + 守株待兔 | 主要追涨 |
| 风险 | 与大盘共振，风险小 | 单独性，风险大 |

## 风控逻辑

> 我不能确认每一次大盘是否能继续向上，所以就挑最强的股票上。

- 大盘向好 → 最强股继续大幅向上（吃肉）
- 大盘不行 → 最强股通常还能横几天（有机会退出）

**风控靠选股，不靠择时**——这是 Asking 的核心。

## 经典案例

- **2004.9 月以来**：龙头战法实战 **600645**、**000503**
- **守株待兔案例**：2004.11 以来任何有两个大阳线以上涨停的标的都是
- **2003 年下半年龙头**：600073
- 2004.10 月以来守株待兔：000503、600399
- **超强势股 ≠ 龙头**：2003 下半年的 000920 只能叫超强势股

## 金句

> 等待，需要绝对的耐心；发现，需要经验来确认；跟随，则是最次要的买入动作了。

> 龙头需要技术吗，不需要，要的是临阵时的果敢和勇气。

> 一般的资金只是发现和跟随，宁波解放南路是发掘和引导，技术含量要高得多。

> 当一个市场出现好几个连续涨停的股票时……只有涨停次数最多的那只冲击力才会最强。

> 我和一些朋友经常交流交易方法。谈到深圳红岭路这种专门接别人恐慌盘的做法……总认为这种交易方式的性质属于偏门或叫旁门。

## 适用场景

- ✅ 大盘转势初期的领涨股
- ✅ 板块龙头 / 人气股
- ✅ 强势行情中的最强股
- ❌ 弱势/下跌通道（Asking 明确不参与任何调整）
- ❌ 接恐慌盘的红岭路模式（Asking 明确反对）

## 关联阅读

- 详见本批《实战笔记_asking 龙头战法》范本
- 守株待兔与本批《JOKER 皇打板逻辑》"烂板"互补
- 龙头概念与本批《孤独牛背婚礼演讲》《养家心法》形成"龙头战法三家"对照

## 与其他游资的呼应

- **职业炒手**："我和职业炒手兄所找的才是龙头"——两人在龙头战法上共振。
- **炒股养家**：都强调"等待"和"最强股"，但养家多了"情绪周期"维度。
- **赵老哥 / 章盟主**：同样以打板/龙头为核心，但风格更激进。
- **荣展**：Asking 说"荣展做的只是超强势股，并非真正的龙头"。

---

*笔记来源：D 盘《Asking 理念总结》PDF*
*整理日期：2026-06-25*
`,oneLine:`**等待、发现、跟随。** 选股是决定性前提，但选股不是全部——跟随才是最次要的买入动作。`,tags:[`龙头战法`,`追涨`,`守株待兔`]},{id:`P0_JOKER皇打板逻辑`,title:`JOKER皇打板逻辑`,category:`打板追涨低吸`,source:`P0`,filename:`实战笔记_JOKER皇打板逻辑.md`,content:`# 实战笔记 · JOKER 皇涨停板打板逻辑与手法

> 题材分类：打板手法 / 排版 vs 扫板 / 烂板博弈
> 游资/作者：JOKER 皇
> 身份：知乎/摩尔大 V；2016 年发文时对打板模式有深入研究；"打板模式并未失效，只是要换一种思维"
> 关联资料：参见本批《集合竞价奥义》《打板手法系统》《5 分钟筛选牛股》
> 来源：D 盘《JOKER 皇【涨停板打板逻辑手法全解析】》

---

## 一句话定位

> **打板模式并未失效，只是要换一种思维。** 牛市中无脑扫板的生存空间越来越小，必须切换到"有逻辑地打板"。

## 核心观点

1. **打板定义**：用涨停板价格（10% 涨幅最高价）买入；第二天通常高开是极大概率事件。
2. **当前打板问题**：知道方法的人越来越多 + 假机构介入 + 封死涨停不代表第二天一定高开 → **无脑打板已是亏损最大的模式**。
3. **要有逻辑地打板**：排版/扫板/烂板各有适用场景，需要根据盘面判断。
4. **排版 = 风险控制 + 排队优势**：等封单稳定再排，可随时撤单。
5. **扫板 = 速度优先**：大单吃掉时立刻买入。
6. **烂板 = 烂而不弱**：关键是抛压在逐渐变小，直到没有抛压。

## 排版 vs 扫板 vs 烂板

| 手法 | 适用场景 | 案例 | 关键点 |
|------|----------|------|--------|
| **排版** | 盘子偏大、一封吃力、补量 | 9.22 大杨创世 | 二封时机：8000 手涨停板卖单被 2000 手吃掉时点击买入 |
| **排烂板** | 天量烂板/抛压需要消化 | 9.23 金科股份 | 等封单累加到一定数量（5 万手或 10 万手）再排 |
| **扫板** | 小盘烂板/抛压已消化 | 8.15 廊坊发展 | 小单吃完立马去排，不然就堵在后面 |
| **强势板** | 一封即封死 | 9.9/9.12 案例 | 烂板后抛压逐渐变小，**直至全天封死** |
| **弱势板** | 全天烂板 | 8.17 深深宝 A | 第二天是否高开不确定，**获利于拉高多少** |

## 排版的关键细节

> 关于排版，一般是等个股已经有封单封上涨停后再去排。

- **卡位大单的位置有讲究**：直接排板多用于一封和二封，不能排太后面
- **三封以上则不如等烂板无抛压再考虑买入**
- **需要抢的延迟**：
  - 延迟高的 2000 手出现时打提前量买入
  - 延迟低的 8000 手出现的时候买入
  - 基本可以保证卡在 5 万单前面
- **跟撤原则**：
  - 排板后马上撒单 → 技术上必须跟撒
  - 如果有看好逻辑层面支持，可以不撤单强吃
  - 正常情况是跟撒，再封再排，直到不撤不开板

## 烂板的核心分类

| 类型 | 表现 | 第二天预期 |
|------|------|-----------|
| **烂板后封死** | 烂板后抛压逐渐变小，**直至全天封死**（强势） | 高开确定，**几乎百分百获利** |
| **纯烂板（妖股接力）** | 全天烂板，妖股接力 → 深深宝 A | 第二天是否高开不确定 |
| **纯烂板（复牌/利好）** | 公告复牌或借利好涨停 → 惠球科技 | 利好"看得见"，**容易一步到位** |

## 成交量与烂板排版的关系

| 烂板成交量 | 排版策略 |
|------------|----------|
| **天量烂板**（一字板后放量） | 排可以排更后面（10 万手+） |
| **缩量烂板** | 需要速度去卡位（5 万手前） |
| 案例 | 去年 10.27 九安医疗、3.2 栖霞建设、4.8 大富科技（天量） |
| 对比 | 特力 A、四川双马、8.15 洪磊股份、廊坊发展（缩量） |

## 风控逻辑

> 游资的生存空间越来越小，无脑打板已经是亏损最大的模式了。

- **买点的核心**：用"涨停板"作为确认信号，未涨停前买入就是赌性
- **排版可以随时撤单**：这本身就是风控
- **烂板的风险**：纯烂板博弈带博弈成分，第二天盈利不完全可控
- **公告复牌/借利好涨停**：估值一步到位，开板原因多半是一家独大的出货

## 经典案例

- **9.22 大杨创世**：新高板+板块龙头+小弟不跟风 → 妖股模式 → 排版较好
- **9.23 金科股份**：烂板抛压消化 → 5/10 万手再排
- **8.17 深深宝 A**：妖股接力的全天烂板典型
- **惠球科技**：公告复牌/借利好涨停的一步到位
- **特力 A**（6.24）：大盘暴跌日 + 烂板 + 烂而不弱 → 经典成功案例
- **四川双马**：缩量烂板卡位的代表
- **廊坊发展**（8.15）：小单吃完立马去排

## 金句

> 打板模式并未失效，只是要换一种思维。

> 打板的人就可以在高开时实掉获得这个差价。

> 烂而不弱，我们需要的是他虽然开版，但一直是封板的状态。

> 烂板后抛压在逐渐变小，后来仍然可以归为全天封死涨停。

> 公告复牌，或者借利好涨停的股相对妖股接力有一个缺点就是，利好这种看得见的因素在，大家可以估算一个估值……通常会一步到位。

> 合力板几乎就是百分百获利。

## 适用场景

- ✅ 有逻辑地打板（不是无脑扫板）
- ✅ 烂板后抛压消化到位的"烂而不弱"板
- ✅ 二封/三封的卡位排版
- ✅ 缩量烂板的速度卡位
- ❌ 无脑打板（已失效）
- ❌ 全天纯烂板 + 不确定第二天走向
- ❌ 一家独大的出货板

## 关联阅读

- 早盘打板：参见本批《集合竞价奥义》《5 分钟筛选牛股》
- 系统方法：参见本批《打板手法系统》（邢者版）
- 卖股：参见本批《集合竞价卖股》

## 与其他游资的呼应

- **孤独牛背**："30 万手必须在几秒内抢完" → JOKER 皇的"8000 手被 2000 手吃掉时点击买入"是同一思路的两种表达
- **令胡冲**："8 成把握才出手" → JOKER 皇的"排版可随时撤单"是更稳健的实现
- **Asking**：JOKER 皇的"烂板博弈"与 Asking 的"守株待兔"在 K 线形态层面有共鸣

---

*笔记来源：D 盘《JOKER 皇【涨停板打板逻辑手法全解析】》PDF*
*整理日期：2026-06-25*
`,oneLine:`**打板模式并未失效，只是要换一种思维。** 牛市中无脑扫板的生存空间越来越小，必须切换到"有逻辑地打板"。`,tags:[`打板手法`,`排版`,`vs`,`扫板`,`烂板博弈`,`打板`]},{id:`P0_丁一熊两次股灾`,title:`丁一熊两次股灾`,category:`高手手记`,source:`P0`,filename:`实战笔记_丁一熊两次股灾.md`,content:`# 实战笔记 · 丁一熊两次股灾及近期操作思路

> 题材分类：长线指数 / 估值投资 / 心态哲学
> 游资/作者：丁一熊（丁一雄）
> 身份：闽发论坛骨灰级大神；实业经营（旅游/出境游）；2013 年看多发声，2015 两次股灾中保持淡定
> 关联资料：参见本批《丁一熊熊市策略》《丁一熊炒房炒股》（"丁一熊三连读"）
> 来源：D 盘《丁一熊_两次股灾及近期操作思路》

---

## 一句话定位

> **买入的时候，是估值划算。它可以再跌，越跌就越划算。** 长线指数 = 自动稳定器。

## 核心观点（按发帖时间整理）

### 2013-06-25【破 1900 点，长线就该进场】

1. **1900 点就是机会**：经济实体有问题，但坏不到哪去
2. **暴跌都是机会**（但属专业人士）
3. **做投资要大智若愚**：这个时候总会流言四起，眼光放长点，噪音而已
4. **赌的是大国经济和人类的乐观**：没有任何理财产品有指数这么长期的未来确定性

### 2015-06-26【你追求一夜暴富，就要做好一夜洗白的准备】

1. **股市这么容易赚钱，本身就不正常**：暴涨暴跌是本性
2. **2000 点跌到 1000 点当然可以**：市场可以再低，但 2000 点介入赢的概率在
3. **指数 3500 点的分红预值远大于国债**：刚性兑付折算也在 3200 点
4. **长期是价值回归的**：战争都摧毁不了
5. **高度换时间**：指数大幅下跌，比如 5000 点以内一口气下跌 2000 点，会观察货币问题

### 2015-07-08【做交易，不是这次就是那次，一定会被逮住】

1. **投机去站上巅峰是非常难的事情**：一将成名万骨枯
2. **这次极端行情，无数高手一样被灭**
3. **做交易一定会被逮住，这就是代价**
4. **长线指数**：你买了后根本不用看，就是一笔存款

### 2015-07-11【长线持仓总会遇到大涨和大跌日子】

1. **蓝筹指数是自动稳定器**：在大跌时是多么的中流砥柱
2. **平准金托盘指数不能让空方做套保期指循环获利**
3. **救市一定会面临全民抛盘最困难的日子**
4. **基金的融资来解决赎回**

### 2015-07-26【炒股其实很难，而投资股市一点都不难】

1. **没有一个交易手法是恒定有效的**
2. **打板交易、回转记录多么可笑**
3. **做实业目的就是积累和发行股票**：春秋上市原始股收益很大
4. **股市真正的赢家是创业者和创业团队**
5. **平均受益则是普通大众的长期持股投资者**

### 2016-01-07【买入的时候，是估值划算】

1. **熔断纪念**：太有意思了
2. **玩筹码不是玩价值**：大家心理结构一样
3. **第一，不用钱**：投资就是长期持有
4. **第二，有持续的钱**：每年都在找标的
5. **第三，不在乎短期**：玩短线炒，碰上这种诡异基本完蛋

### 2016-01-11【全中国也只有淘股吧的人通过股市做到了发财致富】

1. **百年风云跌宕的华尔街**：一部消灭散户的历史
2. **无论资金调配、资源优势、学识视野、金融工具、团队支撑，老百姓是不够的**
3. **不是每个人都能够成为淘股吧的人**
4. **资产配置是必须的**：汇率波动对出境旅游业影响很大
5. **先认清，后不乱**

## 关键战役与判断

| 时间 | 大盘位置 | 丁一熊的判断 | 后期验证 |
|------|----------|--------------|----------|
| 2013-06-25 | 破 1900 点 | "长线就该进场" | 2015 年牛市最高 5178 点 |
| 2015-06-26 | 约 4500 点 | "你追求一夜暴富，就要做好一夜洗白的准备" | 之后股灾跌到 3373 |
| 2015-07-08 | 约 3500 点 | "做交易一定会被逮住" | 之后跌到 2850 |
| 2016-01-07 | 熔断 | "买入的时候是估值划算" | 之后 1-2 年慢牛 |

## 选股方法（长线指数派）

- **大蓝筹 + 新兴优选**：在产品结构上做分离和拟合
- **指投 ETF**：赌大国经济和人类的乐观
- **房地产 + 蓝筹组合**：丁一熊自己的资产结构
- **实业原始股**：春秋上市原始股收益很大

## 风控逻辑（5 条核心铁律）

1. **不用钱**：投资就是长期持有
2. **有持续的钱**：每年都在找标的
3. **不在乎短期**：玩短线炒，碰上诡异基本完蛋
4. **没有一剑定江山的想法**：无所谓
5. **投资是细水长流，时间于无形**

## 经典案例

- **2013 年看多发声**：旗帜鲜明看一轮大牛市
- **2015 年 6 月暴跌前**：已经预测到 6 月股灾来临
- **2015-07 暴跌中**：本人账户回撤不大，"当初也没指望它要涨这么快"
- **2015-08 双降救市**：观察央行降准降息
- **2016-01 熔断**：本人持仓几年很少看盘

## 金句

> 你追求一夜暴富，就要做好一夜洗白的准备，便宜不能占尽，冲浪就是冲浪。

> 做交易，不是这次就是那次，一定会被逮住，这就是代价。

> 长线持仓总会遇到大涨和大跌日子，蓝筹指数是自动稳定器。

> 炒股，其实，很难，而投资股市，一点都不难，很少有人明白这里面的区别。

> 买入的时候，是估值划算。它可以再跌，越跌就越划算。就是这样。

> 投资是细水长流，时间于无形。

> 你只要没有一剑定江山的想法，就无所谓。

> 一年多奇迹，风云跌宕，容易呕吐。

## 适用场景

- ✅ 长线指数投资（资金量大、收入稳定）
- ✅ 大蓝筹 + 新兴优选的资产分离
- ✅ 实业 + 股市的资产组合
- ❌ 短线高杠杆
- ❌ 期市 / 期货（丁一熊只做股票房子）
- ❌ 没有持续现金流的抄底

## 关联阅读

- 参见本批《丁一熊熊市策略》《丁一熊炒房炒股》
- 长线指数可对比本批《滚雪球下》（巴菲特）、本批《江平投资准则》

## 与其他游资的对比/呼应

| 维度 | 丁一熊 | 巴菲特 | 裘国根 |
|------|--------|--------|--------|
| 持仓周期 | 数年（基本不动） | 永久 | 中长线 + 接力 |
| 标的选择 | 蓝筹指数 | 价值低估 | 价值低估 |
| 现金管理 | "有持续的钱" | 保险浮存金 | 私募 |
| 风控核心 | 心态节制 + 自动稳定器 | 复利 + 安全边际 | 流动性 + 安全边际 |

---

*笔记来源：D 盘《丁一熊_两次股灾及近期操作思路》PDF*
*整理日期：2026-06-25*
`,oneLine:`**买入的时候，是估值划算。它可以再跌，越跌就越划算。** 长线指数 = 自动稳定器。`,tags:[`长线指数`,`估值投资`,`心态哲学`]},{id:`P0_丁一熊炒房炒股`,title:`丁一熊炒房炒股`,category:`高手手记`,source:`P0`,filename:`实战笔记_丁一熊炒房炒股.md`,content:`# 实战笔记 · 丁一熊谈炒房与炒股的共同法则

> 题材分类：资产配置 / 长线思维 / 现金流哲学
> 游资/作者：丁一熊（丁一雄）
> 身份：闽发论坛骨灰级大神，同时管理实业（旅游/出境游）
> 关联资料：参见本批《实战笔记_丁一熊熊市策略》《实战笔记_丁一熊两次股灾》
> 来源：D 盘《民间股神之丁一熊：炒房灭富人，炒股灭穷人》

---

## 一句话定位

> **炒房灭富人，炒股灭穷人，期货灭聪明人。** 凡是"快速、一把整赢"的人都是聪明人，但赛程下来没几个成器的。

## 核心观点

1. **房子是长期资产配置，不是短期谋利工具**：20 年来当时价格都比工资高很多，**因为是发展中国家的核心都市**。
2. **货币增发是大趋势，把货币换成资产**：资产增值是财富加速器，也是个人财富的最大分化器。
3. **走势是未知的，也是不重要的**：你根本判断不出最低点——这点适用于房子也适用于股票。
4. **现金流 > 估值判断**：月供能否覆盖、收入能否持续，这是比"未来涨跌"更可靠的事。
5. **炒房比炒股惨**：温州炒房客从 97 年到现在 7 轮，几乎全军覆没；剧烈融资+资金链一旦不涨就死。
6. **大智若愚**：你买就是因为低迷+长期看好，判断不出最低点就直接买，但愿明年还能买。
7. **资产配置三件套**：股市长期 + 房子区域化 + 现金流保障，对冲经济周期和房子的剧烈下波动。

## 投资四立论（丁一熊的理财课）

| 立论 | 核心 | 操作含义 |
|------|------|----------|
| 1. 货币增发 | 把货币换成资产是长期趋势 | 资产化是必须的，但必须**长期** |
| 2. 走势未知 | 低迷期买入是你的运气 | 不知道也没关系，长期持有就好 |
| 3. 现金流为王 | 现金流决定我们买入和持有 | 每月收入能持续还贷，比估值重要 |
| 4. 人生无常 | "每一笔投资可能就是最坏的投资" | 留有余地，准备艰难 |

## 房子购买区域化原则

- **30 个核心都市**：发展快速 + 人才涌入 + 教育医疗完善 → 长期持有会赢
- **三线以下**：去省城买 1 套，为未来或孩子准备
- **省城**：配置 2 套以上，为孩子北上广购房调配
- **北上广深**：必须去奋斗、必须买
- **三线以下**：可以**不买**，量力而行

## 房子的风险预案

- **跌 90% 怎么办**？事实上跌 90% 你也失业了——经济有大问题
- **"如果失去资产，你怎么存活"**——这是丁一熊对大学老师最常问的问题
- **"你有什么本事和价值"**——这是金融课的核心

## 风控逻辑

- 房子大跌也卖不掉（都是聪明人，你卖给谁）→ 继续每月还贷就是
- 月供 + 收入 = 抗压能力的基石，**没有持续现金流就退出**
- 量力而行，留有余地，准备艰难，是长期投资者的成熟心境
- "这 2 天，是有人问房子，我才再一次重复观点，不是我鼓吹要你买房子"

## 经典案例

- 2002 年上海房价低迷时坚持买入 → 之后 10 多年大牛市印证
- 成都买的房子 5-6 年没涨 → 某天突然涨了很多 → **不预测，只持有**
- 2013 年一位炒房大咖 10 几年风风雨雨终于亏完，感慨"还是股市好"
- 1997 年到现在 7 轮温州炒房客全军覆没（vs 2007-2015 股市至少能回来）

## 金句

> 炒房灭富人，炒股灭穷人，期货灭聪明人。

> 你在中国，你是中国老百姓，那，房子和股票，就是一个很重要的资产配置。

> 走势是未知的，其实，也是不重要的。

> 你有积蓄和每月按揭支付能力，而周围的人都不看好房子，就是最好的机会。

> 投资就是。逆势，这需要你独立思考。

> 我们的每一笔投资，可能就是最坏的投资，你要有这个心理准备和防范。

## 适用场景

- ✅ 中长线资产配置（中产家庭/知识分子/工薪族）
- ✅ 核心城市房产的长期持有
- ✅ 现金流充裕前提下的低位布局
- ❌ 短线高杠杆炒房
- ❌ 短期判断最低点（丁一熊明确反对）
- ❌ 把房子当短期暴富工具

## 关联阅读

- 参见本批《实战笔记_丁一熊熊市策略》《实战笔记_丁一熊两次股灾》
- 房产+股票平衡配置理念可对比裘国根的"接力法"

## 与其他游资的对比/呼应

- **裘国根的"接力"**：丁一熊在房子上的"区域化长期持有" = 裘国根在股票上的"找到便宜货后接力"，都是放弃短炒、转向资产化。
- **Asking 等短线游资**：完全相反——他们是"越快越好、买了就为马上挣钱"，丁一熊认为这是聪明人送死。
- **徐翔式短线**：丁一熊式的资金管理 + 现金流 = 慢钱；徐翔式的高频 = 快钱。**前者长寿，后者暴毙**。

---

*笔记来源：D 盘《民间股神之丁一熊：炒房灭富人，炒股灭穷人》PDF*
*整理日期：2026-06-25*
`,oneLine:`**炒房灭富人，炒股灭穷人，期货灭聪明人。** 凡是"快速、一把整赢"的人都是聪明人，但赛程下来没几个成器的。`,tags:[`资产配置`,`长线思维`,`现金流哲学`]},{id:`P0_丁一熊熊市策略`,title:`丁一熊熊市策略`,category:`高手手记`,source:`P0`,filename:`实战笔记_丁一熊熊市策略.md`,content:`# 实战笔记 · 丁一熊熊市策略

> 题材分类：熊市策略 / 空仓纪律 / 心态哲学
> 游资/作者：丁一熊（丁一雄）
> 身份：闽发论坛骨灰级大神，职业投资人
> 关联资料：参见 C 盘 \`丁一熊_深度研读报告.md\`（如有）；与本批《丁一熊炒房炒股》《丁一熊两次股灾》形成"丁一熊三连读"
> 来源：D 盘《民间股神之丁一熊的熊市策略》

---

## 一句话定位

> **跌是水到渠成的，因为阻力最小。** 熊市里没有什么"已经够低了"，空仓、耐心、远离市场才是保命的最高境界。

## 核心观点

1. **水到渠成的下跌**：牛熊交替是自然规律，惯性意味着稳固，再长辉煌的盛市也摆脱不了周期循环。
2. **没有"已经够低"这回事**：2200 点你预测到今天了吗？大多数没有——所以不要预测底部。
3. **保本赚钱才是你的生意**：能赚就赚，赚不到就跑，小损也无妨；机构要竞争不落后，你只关心安全。
4. **弱市与熊市等义**：本质是长期卖盘 > 主动买盘，供大于求，消价抛售。
5. **崩溃一次 = 机会一次**：只要扛单的人还在，你就守株待兔地等，要心静如水。
6. **对市场永远不悲观**：空仓也不会挨打，跌完一波会有新强势股出现，空仓人最容易抓住新机会。

## 仓位管理 / 操作步骤

| 阶段 | 操作 |
|------|------|
| 跌势初期 | 高位减仓 → 颈线附近再入场试错 |
| 颈线破位 | 坚决止损，**进入熊市模式** |
| 反弹机会 | 6 日乖离率 -6% / 12 日 -10% / 24 日 -16% 进场 |
| 兑现 | 24 日乖离率接近 0 时卖出 |
| 风险偏好 | 熊市要**降低获利目标**，多忍少盲动 |
| 节奏铁律 | **快进快出，打得赢就打，打不赢就跑**；错了坚决止损，**绝不允许短线做中线、中线做长线** |

## 风控逻辑

- 任何位置买入都可能下跌，**唯一不亏的方法是不买**。
- 别与市场较劲：空仓时跌了你不亏，反弹了你能再上车。
- "有节制的人存活率总会大于轻浮的人"——节制本身就是风控。
- 机构与个人的本质区别：机构顾虑多患得患失，**个人大不了一空了之**，这才是你的天然优势。

## 经典案例

- 2008 年大熊市中的"水到渠成"——从 6124 一路跌到 1664 期间，丁一熊反复提示"水到渠成的下跌"，全程保持节制心态。
- 同期 2008 年市场从最高点跌幅约 73%，绝大多数"预测到底部"的资金都被埋。

## 金句

> 跌是水到渠成的，因为这样阻力最小。

> 适者生存，强者自强，每次熊市都一样，有节制的人存活率总会是大过轻浮的人。

> 我不能确认每一次大盘是否能继续向下，所以**就空仓**。

> 大不了一空了之，有什么了不起。

> 崩溃一次，就意味机会一次。他只要还在扛，你就守株待兔地等。

## 适用场景

- ✅ 任何级别的下跌趋势 / 弱市
- ✅ 大盘颈线破位后
- ✅ 乖离率超跌的抢反弹
- ❌ 牛市主升 / 转势初期（应该重仓介入）
- ❌ 抄底摸底（丁一熊明确反对预测底部）

## 关联阅读

- 参见本批次《实战笔记_丁一熊炒房炒股》《实战笔记_丁一熊两次股灾》
- 通用熊市节奏可参考本批《实战笔记_落升熊市盈利》（同样靠乖离率+颈线法则）

## 与其他游资的对比/呼应

| 维度 | 丁一熊（节制派） | 落升（技术派） | 裘国根（价值派） |
|------|-----------------|----------------|----------------|
| 熊市态度 | 主动空仓，远离市场 | 控仓做反弹，乖离率法则 | 保持在场，找便宜货 |
| 离场标准 | 趋势破位即出 | 颈线破位即出 | 估值合理即继续持有 |
| 抄底动作 | 不抄 | 严格按乖离率抄 | 不预测底部，只看估值 |

---

*笔记来源：D 盘《民间股神之丁一熊的熊市策略》PDF*
*整理日期：2026-06-25*
`,oneLine:`**跌是水到渠成的，因为阻力最小。** 熊市里没有什么"已经够低了"，空仓、耐心、远离市场才是保命的最高境界。`,tags:[`熊市策略`,`空仓纪律`,`心态哲学`,`熊市`]},{id:`P0_不足道也手记`,title:`不足道也手记`,category:`高手手记`,source:`P0`,filename:`实战笔记_不足道也手记.md`,content:`# 实战笔记 · 不足道也手记（超短实战感悟）

> 题材分类：超短线 / 心态控制 / 复盘
> 游资/作者：不足道也（淘股吧知名 ID）
> 身份：2008 年中辞职成为职业股民；07 年下半年入场；早期受巴菲特启蒙但实际做超短
> 关联资料：与 Asking 体系（"asking 7 年另两个月赚了约 300-400 倍"）形成对照
> 来源：D 盘《不足道也手记》

---

## 一句话定位

> **超短是防范风险的最佳手段。** 07 年到 09 年坚持 5% 以下的超短选手占比，10% 以上是优秀短线选手。

## 核心观点

1. **不参与期货**：包括股指期货，没有爆仓风险，**也永不碰期货**。
2. **不融资不借贷**：没有到期破产的风险和过大的压力。
3. **超短是控制风险的最好手段**：07.3-2009.3 期间"07 年只有 11 月小幅亏损，08 年 6 月小幅亏损，10 月最大一次亏损 -20%"。
4. **按月统计的纪律**：2009 年起每月盈利无一亏损。
5. **从一开始就亏损，比一开始就赚钱好得多**——2002 年那次入市让他看清市场本质。
6. **市场情绪要"逆着训练"**：让自己在大盘跳水时兴奋，连续上攻时恐惧。

## 选股方法 / 介入点

| 要素 | 要点 |
|------|------|
| K 线形态 | 近期 K 线形态及与远期形态的关系 |
| 换手 | 换手大小及换手与价格的变化强弱 |
| 开盘量能 | 开盘的量能与前日最高量能的比较 |
| 涨幅 | 涨幅高度与时间长度的关系 |
| 均量价 | 日 K 均线、分时均线、分时量能等寻求低点 |
| 介入原则 | 彼力欲竭、新力刚生之际的低吸位 |

## 风控逻辑（核心法则）

> 当早盘感觉大盘有较大问题时，在相对高位大幅减仓也不失明智之举。

- **介入点位的纪律**：在自己预估的介入点介入后当天收盘若造成 -1% 以上亏损，**多半是自己的思路出了严重问题**——该认错就认错
- **不要 YY**：凡是当晚自己 YY 的票，第二日多半就是短期高点
- **警惕追涨热门板块**：600111 领涨、600549/600259/000969/000970 跟风、600980/000795/600366 一次性补涨 → 这是"短期见顶的信号"
- **盈利后止盈位**：当日没来得及出 + 早盘快速下跌超 2% → 极度警惕并采取适当措施

## 对波段与长线的看法

> 我还是老老实实的做我的短线吧，风险可以控制在盘中或者一个晚上。

- **波段难做**：
  - 一是没有中级行情前提就匆匆介入——没有眼光
  - 二是常以波段心态介入、以短线理由卖出——中线做短
  - 三是缺乏耐心
  - 四是难以持续复制
- **长线不适合草根**：
  - 25 岁开始投资，能做几个 10 年的长线？
  - 做长线你一开始就要正确，每次都要正确
  - 万一遇到银广夏、亿安科技或 2008 那种大熊市 → 万劫不复
  - 标杆案例：万科原始股 18 年 400 万 → 27.69 亿，**这种属于非常特殊的人**

## 职业化建议

- **资金规模有底线**——不会因生活压力陷入泥潭
- **能稳定盈利**——尤其在行情差时也能稳定
- **不要高估自己**——人很容易被自己骗过，尤其在股市面前
- **2008 中年辞职职业化的教训**：6124 跌到 1664 的瀑布，当时也是事后才后怕

## 经典案例

- **ST 浪莎（5.30 之前）**：全仓买入，6 月 4 日跌停走——5.30 不仅躲过，而且还有不错收益
- **2009 年起**：每月盈利无一亏损（连续稳定盈利的起点）
- **2010 年起**：也是每月盈利
- **2014 年 4-8 月**：8 月单月最大一次亏损 -20%

## 金句

> 短线交易，对某些人可能是补药，但对另一些人可能是毒药。

> 我不粘期货，包括股指期货，没有爆仓的风险。

> 我思我在：主要在彼力欲竭，新力刚生之际的点位低吸，这也就是我认为的安全点位。

> 我几乎完全丧失了对这个市场的敬畏，更何况是个全新的市场，有爆仓风险的市场。

> 我重申一遍：我不做股指期货，永远不做。

> 短线成功者占比大概在 5% 以下，非常成功者占比应该在 1% 以下。

## 适用场景

- ✅ 上班族业余做超短（风险控制在盘中或一个晚上）
- ✅ 题材/热点的快进快出
- ✅ 有 2000 只股熟悉度 + 强复盘能力
- ❌ 重仓做波段（容易中线做短）
- ❌ 重仓做长线（草根无法承受万劫不复）
- ❌ 期货 / 股指期货（绝对禁止）

## 关联阅读

- 心态与风控与本批《孤独牛背控制回撤》形成"超短心态"对照
- 统计方法与本批《Asking 理念总结》互补
- 反面参考：本批《丁一熊两次股灾》——"没有人可以预测准股市"

## 与其他游资的对比/呼应

| 维度 | 不足道也 | Asking | 落升 |
|------|----------|--------|------|
| 操作周期 | 超短（1-3 天） | 超短/短线 | 数日（抢反弹） |
| 仓位 | 全仓单股 → 多股 | 半仓试错 | 控仓 |
| 选股 | K 线 + 换手 + 量能 | 人气股/龙头 | 乖离率 |
| 风控 | 早盘高位减仓 | 不涨停即出 | 颈线破位即出 |

---

*笔记来源：D 盘《不足道也手记》PDF*
*整理日期：2026-06-25*
`,oneLine:`**超短是防范风险的最佳手段。** 07 年到 09 年坚持 5% 以下的超短选手占比，10% 以上是优秀短线选手。`,tags:[`超短线`,`心态控制`,`复盘`]},{id:`P0_乔帮主交割单`,title:`乔帮主交割单`,category:`顶级游资心法`,source:`P0`,filename:`实战笔记_乔帮主交割单.md`,content:`# 实战笔记 · 乔帮主交割单整理

> 题材分类：低吸战法 / 龙头 5 日均线 / 交割单实证
> 游资/作者：乔帮主
> 身份：淘股吧知名 ID，10 万 → 1300 万
> 关联资料：参见 C 盘 26 位游资深度研读；与本批《孤独牛背控制回撤》形成"低吸 vs 打板"对照
> 来源：D 盘《乔帮主交割单整理》

---

## 一句话定位

> **乔帮主的方法一句话总结：在龙头股沿着 5 日均线低吸，第二天冲高出货。没有一个打板进的。**

## 核心观点

1. **核心手法：5 日均线低吸**：在龙头股沿着 5 日均线低吸
2. **出货：第二天冲高出**
3. **首阴战法**：龙头股第一个阴线买入，博弈反包
4. **高位无脑追击 + 锁仓**：当确定性高时，敢于重仓锁仓 10 天
5. **资金曲线**：2012 年元旦到 2013 年底，10 万 → 100 万（4 倍）；100 万 → 1000 万只用一年

## 关键战役的交割单解读

### 1. 82 万到 97 万之战：上海莱士（002252）2013-12-23

| 阶段 | 操作 |
|------|------|
| 12-23 上午 | 融资买入 2500+2500+2200 股，48-48.6 区间 |
| 12-23 中午 | 继续大单买入 11902+5700 股，48.27/48.19 |
| 12-24 早盘 | 全部卖出：53.99-53.30 区间 |
| 收益率 | **单日 +10% 以上** |

### 2. 97 到 109 万之战：天津松江（600225）2013-12-24

| 阶段 | 操作 |
|------|------|
| 12-24 上午 | 融资买入 50000+31600+8644+15900+40700+17400 股，7.5-7.6 区间 |
| 12-24 尾盘 | 卖出 17200+17200 股，7.44-7.45 |
| 12-25 | 全部清仓，8.67-8.46 区间 |
| 收益率 | **2 天 +15% 以上** |

### 3. 125 到 141 万之战：联建光电（300269）2014-01-13~15

| 阶段 | 操作 |
|------|------|
| 01-13 下午 | 买入 5000+8150+800 股，30.7-30.65 |
| 01-14 上午 | 加仓 1800+1200+500+8900+100+5900 股，28.94-29.20 |
| 01-14 尾盘 | 卖出 6900+6200+850 股，31.79-32.19 |
| 01-15 | 全部清仓，31.9-32.07 区间 |
| 收益率 | **3 天 +12% 左右** |

### 4. 203 到 255 万之战：金轮股份（002722）2014-02-24~25

| 阶段 | 操作 |
|------|------|
| 02-24 早盘 | 连续买入 15700+7800+7800+7900+12100+12200+24400+12400 股，20.38-20.64 |
| 02-25 早盘 | 全部清仓：33400+33400+33500 股，25.18-25.20 |
| 收益率 | **1 夜 +22% 左右** |

### 5. 229 到 278 万之战：东易日盛（002713）2014-03-03~07

| 阶段 | 操作 |
|------|------|
| 03-03 早盘 | 买入 25500+26000 股，45.5/45.01 |
| 03-04 早盘 | 卖出 17100+14777+17200+2423 股，54.89-55.5；又买入 29400 股，48.29 |
| 03-06 下午 | 卖出 9800+9800+9800 股，46.18-46.25；又买入 14500 股，46.5 |
| 03-07 上午 | 全部清仓：3200+4800+6500 股，44.7-45.16 |
| 收益率 | **反复操作 +20% 左右** |

### 6. 287 到 394 万之战：凤凰光学（600071）2014-07-10~11

| 阶段 | 操作 |
|------|------|
| 07-10 上午 | 买入 16400+1400 股，13.26-13.27 |
| 07-11 早盘 | 大量加仓 84800+42200+26950+22200+49200 股，13.73-13.84 |
| 收益率 | **1 天 +37% 左右** |

### 7. 473 到 745 万之战：保利地产（600048）2014-12-31~2015-01-05

| 阶段 | 操作 |
|------|------|
| 12-31 上午 | 大量买入 208200+409700+9300+201800+475544+29800 股，9.68-10.09 |
| 01-05 早盘 | 全部清仓：667100+667244 股，11.9 |
| 收益率 | **3 天 +22% 左右** |

### 8. 855 到 1300 万之战：中国南车（601766）2015-01-19~21

| 阶段 | 操作 |
|------|------|
| 01-19 下午 | 买入 717244+925500 股，11.31-11.33 |
| 01-20 早盘 | 卖出 779300+779332 股，12.21/12.30；又买入 431020+928200+564400 股，12.49-12.6 |
| 01-21 早盘 | 全部清仓：961800+756432+401311+253065+153700+153744 股，13.9-14.41 |
| 收益率 | **反复操作 +50% 左右** |

## 首阴战法

> 首阴战法 35 到 38 万之战

| 阶段 | 操作 |
|------|------|
| 2012-08-08 上午 | 连续买入罗顿发展（600209）共 38200 股，9.11-9.43 |
| 2012-08-09 上午 | 全部清仓：9100+9100+10000+10000 股，10.04-10.19 |
| 收益率 | **1 夜 +8% 左右** |

## 高位无脑追击 + 锁仓

> 50 到 60 万之战，3 个交易日收益 30%

| 阶段 | 操作 |
|------|------|
| 2012-12-21 | 满仓追击联创节能（300343），锁仓 3 个交易日 |

## 选股方法

- **10 万级别** → 100 万：时间跨度长（2012 元旦到 2013 年底）
- **100 万** → **1000 万**：才一年（2013 年底到 2014 年底）
- 关键转变：从 100 万开始加速，越大越快
- 选股：龙头股 + 5 日均线
- 介入：龙头股 5 日均线低吸；首阴战法博弈反包
- 出货：第二天冲高就卖

## 风控逻辑

- **没有打板进的** → 避开打板的"开盘就被砸"风险
- **5 日均线低吸** → 顺势回调，不是高位接盘
- **首阴战法** → 龙头股第一次阴线博弈反包
- **高位锁仓** → 仅在确定性高时使用
- **快进快出** → 多数持仓 1-2 天

## 金句

> 乔帮主的方法一句话总结：在龙头股沿着 5 日均线低吸，第二天冲高出货。没有一个打板进的。

> 好像有一些是下探前日涨停价位置买入。

> 贵球基本都是百万以上的了吧，而且我 10 万做到 100 万的时间跨度太长（2012 年元旦到 2013 年底），好像比 100 万到 1000 万要长（才一年）。

> 50 到 60 万之战，高位无脑追击，锁仓 10 天（3 个交易日）收益 30%。

## 适用场景

- ✅ 龙头股 5 日均线低吸
- ✅ 龙头股首阴战法（博弈反包）
- ✅ 强势行情中的人气龙头
- ✅ 有"高位锁仓"确定性的标的
- ❌ 弱势/下跌通道（5 日均线是下行）
- ❌ 跟风股（不是龙头不参与）
- ❌ 没有打板基因（乔帮主明确"没有一个打板进的"）

## 关联阅读

- 5 日均线低吸与本批《Asking 理念总结》的"守株待兔"互补
- 心态与本批《孤独牛背控制回撤》共振
- 反面参考：本批《JOKER 皇打板逻辑》《打板手法系统》——打板 vs 低吸

## 与其他游资的对比/呼应

| 维度 | 乔帮主 | Asking | 孤独牛背 |
|------|--------|--------|----------|
| 介入点 | 5 日均线低吸 | 涨停板 + 守株待兔 | 快速第一板 |
| 持仓周期 | 1-2 天 | 数日 | 1-2 天 |
| 标的选择 | 龙头股 | 龙头/人气股 | 龙头/妖股 |
| 风控方式 | 5 日均线止损 | 不涨停即出 | 第二天 2:30 前卖 |

---

*笔记来源：D 盘《乔帮主交割单整理》PDF*
*整理日期：2026-06-25*
`,oneLine:`**乔帮主的方法一句话总结：在龙头股沿着 5 日均线低吸，第二天冲高出货。没有一个打板进的。**`,tags:[`低吸战法`,`龙头`,`5`,`日均线`,`交割单实证`]},{id:`P0_云意电气涨停`,title:`云意电气涨停`,category:`案例复盘`,source:`P0`,filename:`实战笔记_云意电气涨停.md`,content:`# 实战笔记 · 云意电气涨停判断（四大理由实战拆解）

> 题材分类：分时洗盘 / 高送转/次新跷跷板 / 周末溢价
> 游资/作者：邢者
> 身份：2006-2008 年私募交易员（管理亿元以上资金）；后离开私募转自媒体
> 关联资料：参见本批《次新股筛选》《5 分钟筛选牛股》
> 来源：D 盘《干货中的干货！为何我敢打赌云意电气必须涨停？》

---

## 一句话定位

> **判断涨停不能只靠技术——均线（50%）+ 大局观（20%）+ 分时（20%）+ 周末溢价（10%）= 4 个理由叠加。**

## 核心观点

1. **均线走势**：一只短线牛股的走强一定跟均线有必然关联（占 50%）
2. **大局观/赚钱效应**：次新股变弱时高送转变强（跷跷板），占 20%
3. **分时判断是洗盘还是出货**：占 20%
4. **周末溢价效应**：周五是拉升涨停的最好时机，占 10%

## 邢者打赌云意电气涨停的 4 个理由

### 理由 1：均线（占 50%）

- 一只短线牛股的走强一定跟均线有必然关联
- 涉及"牛股在均线中的应用"战法（邢者撰写的 5000+ 字文档，2017 年 4 月见面）

### 理由 2：大局观/赚钱效应（占 20%）

- **市场赚钱效应主要在两个板块**：次新股 + 高送转
- 邢者连做 11 只次新、仅 1 只亏损
- **一山不容二虎**：次新要强，高送一定会弱
- 当次新变弱时，邢者开始注意高送转
- 周三开始布局云意电气（高送转）

### 理由 3：分时判断（占 20%）

> 判断云意电气的分时走势，**不是出货，而是洗盘**。

#### 洗盘分时的五个共性

| 共性 | 描述 |
|------|------|
| 1. 冲高幅度 | 上午冲高幅度在 **8% 左右**，股价不摸板 |
| 2. 锯齿形态 | 下午股价回落后，**围绕黄色均线做锯齿形状波动**，幅度 2 个点左右 |
| 3. 偏离值 | 最高点与最低点偏离值 **不超过 6%** |
| 4. 锯齿密度 | 锯齿密度越小越好（云意电气 + 成飞集成最符合） |
| 5. 次日表现 | **至少是一个大阳线，有七成几率是涨停板** |

> 邢者告诉你，一定是这种形态的股票，才是真的洗盘。**如果是倾斜向下 45 度角的回落，那就是真的出货了。**

#### 私募操盘案例（邢者自述）

- 2006-2008 年私募交易员：管理亿元资金
- 拉升到 8% 时用 2000 手以上单子砸
- 下午回落时用百手小单悄悄买回
- 锯齿形波动：买完一点股价上去，又被散户砸下，再买入
- 反复吸饱后小幅拉升或反手再砸，逼散户交出筹码

### 理由 4：周末溢价效应（占 10%）

- 周五是拉升涨停的最好时机
- 整个周末两天，个股研讨气氛更热烈
- 散户有更多时间研究热门涨停股
- 周一高开占"一天时的先机"

## 选股/择时体系

> 把这种选股规律摸透了，不用每天高频交易，每年选出几只，保证你有满意的收益！

- 邢者的"跷跷板"理论：次新与高送转的此消彼长
- 邢者每天晚上写战法，2017 年 4 月将出《牛股在均线中的应用》

## 经典案例

- **云意电气**：2017.3.10 邢者尾盘加仓 → 2017.3.11 涨停
- **成飞集成**：符合"次日上午 8% 冲高 + 下午锯齿波动"形态，次日涨停
- **多个冲高回落股票**：邢者找出共性 → 锯齿波动 + 偏离值 < 6%
- **邢者私募时代**：管理资金 1 亿元+，每年坏几个鼠标

## 风控逻辑

- **不是所有的冲高回落都是洗盘**：倾斜向下 45 度角才是出货
- **锯齿密度是核心**：密度小 = 主多资金买回节奏稳定
- **偏离值不能太大**：超过 6% 就要警惕
- **盈利不贪**：超短的精髓就是瞬间把握，一击中的

## 金句

> 判断它一定涨停，主要有四个理由。

> 大家一定要清楚，现在的市场还是熊市，熊市里场内资金是有限的……两者就是跷跷板的原理。

> 一定是这种形态的股票，才是真的洗盘。如果是倾斜向下 45 度角的回落，那就是真的出货了。

> 比如图 1 的云意电气和图 2 的成飞集成是最符合这种模式选股的票，次日全部涨停。

> 把这种选股规律摸透了，不用每天高频交易，每年选出几只，保证你有满意的收益！

> 超短的精髓就是在瞬间把握的机会，能一举中的，这已足够。

## 适用场景

- ✅ 短期高送转/次新跷跷板的判断
- ✅ 分时锯齿形态 = 主力洗盘的识别
- ✅ 周末溢价的周五板判断
- ❌ 45 度倾斜向下 = 出货（明确不参与）
- ❌ 高低偏离值 > 6% 的形态
- ❌ 没有"日线+均线+大局观"叠加的孤立判断

## 关联阅读

- 早盘操作：参见本批《5 分钟筛选牛股》
- 次新筛选：参见本批《次新股筛选》
- 卖股艺术：参见本批《集合竞价卖股》

## 与其他游资的呼应

- **JOKER 皇**：邢者的"锯齿形波动 = 洗盘"是分时层面的判断，与 JOKER 皇的"烂板后抛压消化"是同一逻辑的不同表达
- **养家**：邢者的"跷跷板"与养家的"主流/次主流"是一对孪生概念
- **Asking**：邢者的"4 个理由"叠加判断与 Asking"选最强股 = 风控"互补

---

*笔记来源：D 盘《干货中的干货！为何我敢打赌云意电气必须涨停？》DOCX*
*整理日期：2026-06-25*
`,oneLine:`**判断涨停不能只靠技术——均线（50%）+ 大局观（20%）+ 分时（20%）+ 周末溢价（10%）= 4 个理由叠加。**`,tags:[`分时洗盘`,`高送转`,`次新跷跷板`,`周末溢价`]},{id:`P0_令胡冲盘感训练`,title:`令胡冲盘感训练`,category:`顶级游资心法`,source:`P0`,filename:`实战笔记_令胡冲盘感训练.md`,content:`# 实战笔记 · 令胡冲盘感训练与打板技术

> 题材分类：盘感训练 / 打板技术 / 风控
> 游资/作者：令胡冲
> 身份：2015 年淘股吧年度网红，1 月 9 日 50 万实盘起，年内冲至 800 万（+16 倍）
> 关联资料：参见 C 盘 26 位游资深度研读（如有独立条目）
> 来源：D 盘《民间股神之令胡冲的盘感训练及打板技术》

---

## 一句话定位

> **市场每个阶段的第一次暴利行情都没参与，但第二次机会来时一定有我。** 盘感 = 看盘 + 复盘的合力，靠 2000 只股的熟悉度堆出来。

## 核心观点

1. **盘感是看盘 + 复盘的合力**：看盘训练情绪控制（上层建筑），复盘累积市场熟悉度（基础），缺一不可。
2. **2000 只股了如指掌**：看名字就知道代码和基本面，无需到处翻。
3. **独门心窍：第一次行情不参与，第二次一定到**：从 6、7 月股灾淬炼，8 月取得真经，2016 年 1 月突破 800 万。
4. **打板过滤主观风险**：上板那一刻是市场合力对个股的最后确认，完全尊重市场。
5. **8 成把握才出手**：6-7 成把握的板不眼红，**心态控制 > 技术**。
6. **风控要"放弃尾端行情"**：7 月股灾回撤 100 万是教训，主动放弃小利润反而躲过大风险。

## 打板的优先级（按重要程度排序）

| 优先级 | 维度 | 判断要点 |
|--------|------|----------|
| 1 | **市场氛围** | 跌停/大跌股数量；涨跌停家数之比；站队主板还是小盘 |
| 2 | **个股人气、股性** | 近期经常涨停且第二天不闷杀的股 |
| 3 | **趋势** | 冷门个股趋势板要"连贯趋势 + 基本面亮点" |

**重要纪律**：熊市打板要求高、时间点要求严；牛市打板成功率自然高。

## 选股与看盘要点

- **每天复盘**：把当日涨停归到板块，次日观察赚钱效应，作主要备选
- **盘中盯 5 分钟涨幅榜 + 总涨幅榜**，盘中临时决定
- **对个股只看日 K，不看分时突破/日线突破**——在意的是"启动时机 + 跟风盘/承接盘力道"
- **自选股**：各大板块指数 + 近期活跃板块龙头股、人气股

## 仓位与买入

| 时机 | 动作 |
|------|------|
| 把握大 | 看点火单就确定，不等冲板 |
| 把握中等 | 冲到板时观察合力，决定上不上 |
| 把握小 | 涨停刚封时下排单，观察市场认同 |
| 5-7% 时 | 已打好涨停价委托单等确认（看市场合力） |
| 没有 8 成把握 | 不出手 |

**半路板**：尽量少打 → 等到冲板时再上是过滤风险的过程；只在赌市场转折点时大搞半路。

## 风控逻辑

> 放弃尾端行情 → 同一个大坑不能跳两次

- 2015-08 下跌时有意放弃尾端 → 反而躲过更大跌幅
- 7 月股灾回撤 100 万 → 8 月主动减仓、只做盘中最确定的
- **行情尾端的风险和利润交给别人**，只做自己的交易
- **大机会这一波错过不可惜，下一次一定努力抓住**

## 经典案例

- **2015 年 1 月 9 日**：50 万实盘起，年度 800 万（+16 倍）
- **2015-06-10 打的 0540、300043**：人气股 + 启动时的成功案例
- **2015-06-20 打的 0620、300044、002181**：市场氛围不差 + 人气股板
- **7 月股灾**：回撤 100 万，**最大坑**——导致后来主动放弃尾端
- **8 月后**：收益率大幅跑赢大盘，2016-01 突破 800 万

## 金句

> 我极少搞半路，只有在我赌市场转折点的时候，我才会去大搞半路。

> 我打板的时候，没有 8 成以上把握我是不会出手的。

> 打板虽然错过了大部分利润，但也过滤掉了自己主观意识上对市场预判错误的风险，完全尊重市场。

> 同样的，有时候大的机会这一波错过了并不可惜也不眼红，下一次一定要努力抓住。

## 适用场景

- ✅ 牛市主升 + 转势初期的快速攻击
- ✅ 板块人气核心 + 启动时果断
- ✅ 有 8 成把握的人气板
- ❌ 弱势市场（令胡冲明确放弃尾端）
- ❌ 冷门股（容易被砸）
- ❌ 6-7 成把握的勉强板

## 关联阅读

- 通用打板思路参见本批《JOKER 皇打板逻辑》《打板手法系统》
- 控制回撤参见本批《孤独牛背控制回撤》《丁一熊两次股灾》

## 与其他游资的对比/呼应

| 维度 | 令胡冲 | Asking | 炒股养家 |
|------|--------|--------|----------|
| 风格 | 人气股+打板，8 成把握才出手 | 龙头战法，半仓试 | 情绪周期，重龙头轻跟风 |
| 风险偏好 | 中高（但放弃尾端） | 高（追最强） | 极高（专做崩溃后重仓） |
| 离场标准 | 板住/封不住即处理 | 不涨停即出 | 不涨停/不强势即出 |

---

*笔记来源：D 盘《民间股神之令胡冲的盘感训练及打板技术》PDF*
*整理日期：2026-06-25*
`,oneLine:`**市场每个阶段的第一次暴利行情都没参与，但第二次机会来时一定有我。** 盘感 = 看盘 + 复盘的合力，靠 2000 只股的熟悉度堆出来。`,tags:[`盘感训练`,`打板技术`,`风控`]},{id:`P0_低吸追涨打板`,title:`低吸追涨打板`,category:`打板追涨低吸`,source:`P0`,filename:`实战笔记_低吸追涨打板.md`,content:`# 实战笔记 · 低吸、追涨、打板三种模式的对比理解

> 题材分类：低吸 / 追涨 / 打板 / 三模式对比
> 游资/作者：邢者
> 身份：2015.10-2016.2 周周打板的实战派；后转低吸+其他多模式
> 关联资料：参见本批《打板手法系统》《JOKER 皇打板逻辑》《5 分钟筛选牛股》
> 来源：D 盘《浅谈我对低吸、追涨、打板的理解》

---

## 一句话定位

> **低吸最保守、追涨最难、打板最简单最暴利。** 合格的交易选手三种技能都要掌握，单一模式资金很难做大。

## 核心观点

1. **三种模式各有优劣**：低吸（保守）、追涨（最难）、打板（简单+暴利）
2. **合格的交易选手三种都要掌握**：单一模式资金很难做大
3. **瑞鹤仙的名言**："只要买的好，怎么卖都行！"
4. **市场环境决定模式选择**：弱势中打板容易重伤
5. **2015.10-2016.2 邢者每周打几个板**：当时行情好，换手板每天几十个
6. **2017 年邢者只打了 2 次板**：市场环境不利于打板时切换到低吸/其他模式

## 三种模式的详细对比

| 模式 | 难度 | 收益特征 | 适用人群 | 风险 |
|------|------|----------|----------|------|
| **低吸** | 较低 | 不赚大钱不亏大钱 | 初学者、熊市高手 | 抄底上瘾后格局变窄 |
| **追涨** | 最高 | 暴利或暴亏 | **散户最喜欢但最难** | 没有大局观必亏 |
| **打板** | 最低 | 简单+暴利 | 纪律强的选手 | 心魔（手快眼快+铁纪律） |

## 邢者的理解

### 低吸

- 三种模式最保守
- 不会赚大钱，也不会亏大钱
- **更适合初学者操作**
- **熊市中高手往往都会选择低吸**：只有低吸才有足够安全和利润空间
- **风险**：新手一旦尝到低吸甜头后容易上瘾，总想抄到最低的底，**把自己的格局变窄了**

### 追涨

- 三种模式中**难度最大**
- 偏偏就是**散户最喜欢的模式**——他们总是耐不住性子，追高买入
- 要求：
  - 对大盘整体氛围的理解
  - 对市场情绪的嗅觉
  - 对板块及龙头的把握
  - 对题材热点的挖掘
  - **大局观和大视野**
- **没有个几年的股龄人，很难把追涨理解到位**

### 打板

- 三种模式中**最简单**的，也是**最暴利**的
- 打不打板主要还是自己能否过**心魔**这关
- 招数要**眼快、手快**，吃肉比割肉要多
- 要执行**铁一般的纪律**
- 不是一般人能做到的
- **"八年一万倍"的赵老哥起家就是靠打板为生**
  - 有一套严格的打板体系和纪律
  - 当时是 2009-2012 年的行情
  - **现在市场打板的手法发生了翻天覆地的变化**，也是在不断的摸索中优化

## 弱势中打板的失败案例（邢者打一个死一个）

| 股票 | 结果 |
|------|------|
| 摩恩电气 | 失败 |
| 利君股份 | 失败 |
| 开创国际 | 失败 |
| 杭氧股份 | 失败 |

**关键判断**：不是模式问题，而是**市场环境不利于打板**。

- 弱势中打板本身就有很大风险
- 很好的日内龙头板，封死涨停
- 大环境差，**次日低开的概率就大**
- 即使市场环境好，能否炸板，跟该股本身的筹码分布、机构持股也有关系
- **不能见个板就要打，为了打板而打板，只会一输再输**

## 模式切换的实操经验

> 邢者今年只打了两次板，都是小赚出局，没吃到大肉。

- **2015.10-2016.2**：几乎每周打几个板
  - 当时行情好，换手板每天几十个
  - 连板股票一大堆
  - 打板的成功率自然高
  - 即使打了烂板，行情好第二天也赚钱
- **2017 年**：只打了 2 次板，小赚出局
  - 市场环境不利于打板
  - 切换到低吸/其他模式

## 选股方法

> "只要买的好，怎么卖都行！"

- **追涨的选股**：题材热点 + 板块龙头 + 大盘氛围
- **打板的选股**：龙头股 + 强势股
- **低吸的选股**：超跌股 + 强势股回踩
- **三种模式的核心共同点**：**买的好 = 大局观**

## 风控逻辑

- **弱势中不硬做打板**：模式不变，但市场变了
- **不能单一模式依赖**：股市最忌讳"一招鲜，吃遍天"
- **思维模式要随市场变化**：每天市场都在变化
- **随波逐流**：紧跟市场的变化调整自己的操作

## 金句

> 瑞鹤仙曾经说过，"只要买的好，怎么卖都行！"

> 低吸：是这三个模式最保守的，不会赚大钱，也不会亏大钱，它更适合初学者操作。

> 追涨：是这三个模式中难度最大的，这种最难的操作模式，偏偏就是散户最喜欢的模式。

> 打板：是这三个模式中最简单的，也是最暴利的。

> 八年一万倍的赵老哥起家就是靠打板为生，他有一套严格的打板体系和纪律。

> 股市最忌讳的就是："一招鲜，吃遍天"和"一条路走到黑"。

> 炒股跟其他的工种不一样地方就是，市场每天都是在变化的，我们的思维模式，操作方式也要不停的变化，要想紧跟市场，必须要做到随波逐流。

## 适用场景

- ✅ 强势行情下三种模式都可用
- ✅ 弱势行情下只做低吸
- ✅ 单一选手也要学习其他两种
- ✅ 赵老哥式严格打板体系（2009-2012 行情）
- ❌ 弱势市场硬做打板
- ❌ 单一模式依赖（"一招鲜"）
- ❌ 见个板就打（"为了打板而打板"）

## 关联阅读

- 系统打板方法：参见本批《打板手法系统》
- 排版/扫板细节：参见本批《JOKER 皇打板逻辑》
- 选股大局观：参见本批《云意电气涨停》

## 与其他游资的呼应

- **瑞鹤仙**："只要买的好，怎么卖都行"——邢者直接引用
- **赵老哥**：打板起家代表（"八年一万倍"）
- **Asking**：三种模式中更偏打板
- **乔帮主**：5 日均线低吸派，与本笔记"低吸最保守"互证

---

*笔记来源：D 盘《浅谈我对低吸、追涨、打板的理解》DOCX*
*整理日期：2026-06-25*
`,oneLine:`**低吸最保守、追涨最难、打板最简单最暴利。** 合格的交易选手三种技能都要掌握，单一模式资金很难做大。`,tags:[`低吸`,`追涨`,`打板`,`三模式对比`]},{id:`P0_养家心法`,title:`养家心法`,category:`顶级游资心法`,source:`P0`,filename:`实战笔记_养家心法.md`,content:`# 实战笔记 · 炒股养家心法论股市

> 题材分类：情绪周期 / 龙头战法 / 风控哲学
> 游资/作者：炒股养家
> 身份：淘股吧灵魂级人物，2008 年开始职业（约 3500 点起步，回调到 1664 接近腰斩）；后稳定盈利
> 席位：华泰证券荣超商务中心（多次一字板包场）
> 关联资料：参见 C 盘 \`炒股养家_深度研读报告.md\`（如已建条目）
> 来源：D 盘《炒股养家心法论股市》

---

## 一句话定位

> **得散户心者得天下；人气所向，牛股所在。** 理论体系核心是"基于对市场情绪的揣摩，进而判断风险和收益的比较"。

## 核心观点

1. **理论体系核心**：揣摩市场情绪 → 判断风险/收益比较 → 指导操作。
2. **高手买入龙头，超级高手卖出龙头**。
3. **别人贪婪时我更贪婪，别人恐慌时我更恐慌**。
4. **敢于大盘低位空仓，敢于大盘高位满仓；心中无顶底，操作自随心**。
5. **永不止损，永不止盈**：出局就是出局，管她止损还是止盈。
6. **得散户心者得天下；人气所向，牛股所在**。
7. **掌握市场之心，胜利接踵而至；心被市场掌握，失败连绵不绝**。

## 情绪揣摩的方法论

| 维度 | 观察对象 | 含义 |
|------|----------|------|
| **追涨效应** | 前一天涨幅前 20 名第二天的表现 | 喜欢追涨的人盈亏状况 |
| **抄底效应** | 逢下跌抄底的人盈亏状况 | 抄底者开始亏钱 = 崩溃前兆 |
| **领涨领跌** | 各周期阶段的领涨/领跌板块 | 赚钱效应的演变 |
| **崩溃特征** | 较大面积跌停（几十到上百家）+ 20-30% 跌幅品种 | 系统性风险前兆 |

## 主流/支流/次主流的划分

- **主流**（如页岩气）：较长阶段反复操作为主
- **次主流**（如移动互联）：操作周期更短，不少选择隔日超短
- 操作标的随主流/次主流切换，**用标杆品种的走势作为参考**

## 套利性机会的逻辑链

\`\`\`
龙头股超预期上涨
       ↓
引发关联板块补涨（套利标的 1）
       ↓
关联板块超预期
       ↓
再引发下一波套利标的
       ↓
……直到题材结束
\`\`\`

**案例**：山东墨龙（页岩气龙头）→ 宝莫股份（套利）→ 深天马 A（移动互联龙头）→ 华东科技（套利）

## 仓位与操作

| 情况 | 操作 |
|------|------|
| 大盘崩溃前 | **几乎空仓**（"放弃很多机会"） |
| 崩溃发生 | 抄底超跌品种或新热点 |
| 主流题材 | 一个较长阶段反复操作 |
| 次主流 | 不少选择隔日超短 |
| 重仓条件 | "对于后市没有 30-50% 上涨空间的股票，**永远不要重仓买**" |

## 风控逻辑

> 控制回撤，最重要的就是回避系统性崩溃风险。

- 崩溃前兆：领跌品种中有近期强势股 + 90-120 天周期级别品种有领跌倾向
- "看看天气，如果觉得要下雨了，就早点回家，不要贪玩，天气好了再出来"
- **崩溃的具体标准**：①较大面积跌停（几十到上百家）②不少数品种有 20-30% 以上跌幅
- **崩溃后的操作**：选择相关标的出击，至少风险上小了大截

## 关于职业化的忠告

> 第一个条件是资金有一定规模，这样你不会因为生活压力陷入泥潭。
> 第二就是确实能稳定盈利。

- 2008 年开始职业时接近 3500 点 → 1664 接近腰斩
- "在 3500 点职业，1664 时也是痛苦的"
- 当前市场操作难度 > 2008 年
- 必须在任何行情下都能稳定盈利，才能考虑职业化

## 经典案例

- **页岩气板块**（2012）：山东墨龙（龙头）→ 宝莫股份（套利）
- **移动互联**（2012）：深天马 A、掌趣科技（双涨停）→ 华东科技（套利）
- **苹果/3D 打印**（2012-2013）：泛苹果概念的反复套利
- **2012 阴跌行情**（5-9 月）：仓位不大、频率一般、整体打平或小亏

## 金句

> 别人贪婪时我更贪婪，别人恐慌时我更恐慌。

> 敢于大盘低位空仓，敢于大盘高位满仓；心中无顶底，操作自随心。

> 高手买入龙头，超级高手卖出龙头。

> 得散户心者得天下；人气所向，牛股所在。

> 掌握市场之心，胜利接踵而至；心被市场掌握，失败连绵不绝。

> 看看天气，如果觉得要下雨了，就早点回家，不要贪玩，天气好了再出来。

> 别人贪婪时他更贪婪是指敢于大盘高位满仓，让……

## 适用场景

- ✅ 任何行情下的市场情绪揣摩
- ✅ 主流/次主流切换的节奏把握
- ✅ 崩溃前后的反向操作
- ✅ 龙头/套利两层结构
- ❌ 重仓买入没有 30-50% 空间的股票
- ❌ 没有稳定盈利能力的职业化

## 关联阅读

- 情绪周期与本批《孤独牛背婚礼演讲》《Asking 理念总结》形成"龙头三家"
- 风控哲学与本批《孤独牛背控制回撤》共振
- 反面参考：本批《丁一熊熊市策略》（熊市不猜底）

## 与其他游资的对比/呼应

| 维度 | 养家 | Asking | 孤独牛背 |
|------|------|--------|----------|
| 核心方法 | 情绪揣摩 + 概率 | 龙头战法 + 守株待兔 | 龙头/妖股 + 扫板 |
| 仓位哲学 | 大盘低位空仓、高位满仓 | 半仓试错 | 龙头龙头再龙头 |
| 风险偏好 | 极高（崩溃后重仓） | 中高 | 高（纪律严） |
| 离场标准 | 超级高手卖龙头 | 不涨停即出 | 第二天 2:30 前卖 |

---

*笔记来源：D 盘《炒股养家心法论股市》PDF*
*整理日期：2026-06-25*
`,oneLine:`**得散户心者得天下；人气所向，牛股所在。** 理论体系核心是"基于对市场情绪的揣摩，进而判断风险和收益的比较"。`,tags:[`情绪周期`,`龙头战法`,`风控哲学`]},{id:`P0_孤独牛背婚礼演讲`,title:`孤独牛背婚礼演讲`,category:`心态方法`,source:`P0`,filename:`实战笔记_孤独牛背婚礼演讲.md`,content:`# 实战笔记 · 孤独牛背雷神婚礼演讲·龙头妖股战法

> 题材分类：龙头妖股战法 / 快速涨停第一板 / 补涨龙头
> 游资/作者：孤独牛背（雷神）
> 身份：2016 年淘股吧活跃游资；2016 二季度"再战杯"成绩优秀
> 关联资料：参见本批《孤独牛背控制回撤》
> 来源：D 盘《孤独牛背雷神婚礼演讲龙头妖股战法》

---

## 一句话定位

> **龙头龙头再龙头，空仓空仓再空仓。** 一切技术面和信息面都体现在价格上，**我看的主要看六点：人气、合力、换手、量能、强度、股性**。

## 核心观点

1. **看盘的核心是六要素**：人气、合力、换手、量能、强度、股性——所有技术指标都可被这六点覆盖。
2. **三台超宽屏分工**：大盘/IC/实时信息 / 交易看板块联动涨幅涨速 / 头天复盘选股 + 盘中异动。
3. **打板六要素的实战应用**：快速第一板、补涨龙头、转势灵魂板、妖股接力。
4. **强度 = 一笔带过**：30 万手挂单必须几秒内抢完，这是去打的关键信号。
5. **纪律 > 模式**：大盘不好或者赚钱效应不好时少动手，尽量空仓。
6. **空仓是超短的最高境界**：抄手说"他的最大瓶颈是什么？他空仓之后才解决掉所有的瓶颈"。

## 龙头妖股战法的四类标的

| 类型 | 定义 | 案例 | 第二天溢价 |
|------|------|------|-----------|
| **快速涨停第一板** | 强势板块率先涨停，人气度第一 | 2016 多只妖股 | 享受板块溢价 |
| **补涨龙头** | 单板块龙头打不到时，第二天早盘快速上板 | 300264（口袋游戏 300076 停牌后） | 高溢价出局 |
| **转势灵魂板** | 大盘跌到位+恐慌情绪，率领市场人气涨停 | 000838（3月1日）、开创国际（7月27日） | 极高溢价 |
| **妖股** | 股性好、见板就能打、筹码博弈 | 0025、宝钢包装、花王股份、鲍斯股份 | 一夜情也能涨 |

## 打第一板的关键判断

> 30 万手如何区分强度？**30 万手必须要在几秒钟内抢完**。

- 强度高的板：一笔带过、瞬间吃完 → 值得参与
- 强度低的板：磨磨唧唧上去 → 千万不能打
- 封单率不高时 → **立即撤单**，否则立马被砸

## 妖股打板的核心逻辑

- **0025 的案例**：6 月 23 日一波拉 5 个点，第二波直接拉板，7 个点直接扫
- **股性是核心**：筹码博弈预期高，知道涨停后第二天还能赚钱
- **三种资金参与**：点火资金、扫板资金、封板资金
- **市场情绪疲软时也能开板**，但游资会顶死
- **早期排单赚钱效应**：买了就帮市场顶单，是市场需要的表现

## 仓位与买入手法

| 情况 | 操作 |
|------|------|
| 早盘砸板（3-4%） | 我不爱早盘砸板，**这是赚大钱的机会** |
| 好股妖股首板打了 | 第二天怎么也要等到 2:30，最多不赚钱 |
| 扫了不爱撤单 | 成交不了帮顶，也是市场需要 |
| 预判大盘见底信号 | 看市场有哪些股最强硬、是否有联动板块 |

## 风控逻辑（核心）

> **纪律是大于模式的**，不管你是低吸、强势股回踩，还是打板，都是一样的，万变不离其宗。

- 纪律好了，没有赚钱效应，就是空仓
- 大盘不好或者是市场赚钱效应不好时，就少动手，尽量空仓
- **空仓绝对是一个最重要的学问**

## 经典案例

- **000838（3月1日）**：大盘跌幅大、0838 率领市场人气涨停，第二天高溢价
- **开创国际（7月27日）**：大盘走软下带领板块率先涨停
- **0025（6月23日）**：妖股模式两波拉板，第二天四板
- **宝钢包装**：四川双马停牌后挖掘的 IDG 概念，一波逆袭第二波直接拉板
- **花王股份（PPP 新秀）**：两拨拉板，扫板
- **鲍斯股份**：首板，佛山/校长等大资金做首板

## 金句

> 我讲的是我目前吃饭的看家本领，应该算是干货。

> 我没有什么技术，也从来不看技术，我看的主要看几点，人气，合力，换手，量能，强度，股性。

> 比如说，在涨停的五档中，最后一档，就是涨停价位上，比如说有 30 万手。30 万手如何区分强度呢？30 万手必须要在几秒钟内抢完。

> 抄手老师也说过，他的最大瓶颈是什么？他空仓之后才解决掉所有的瓶颈。

> 我的模式就是龙头龙头再龙头，空仓空仓再空仓。

> 纪律是大于模式的……万变不离其宗。

## 适用场景

- ✅ 强势行情中的快速第一板
- ✅ 龙头打不到时的补涨龙头
- ✅ 大盘见底转势时的转势灵魂板
- ✅ 股性好、人气足的妖股接力
- ❌ 弱势市场的硬做（纪律为空仓）
- ❌ 没有赚钱效应时勉强出手

## 关联阅读

- 参见本批《孤独牛背控制回撤》（空仓+风控更系统）
- 龙头的系统思路参见本批《Asking 理念总结》《养家心法》

## 与其他游资的呼应

- **Asking / 职业炒手**：都是龙头战法，但孤独牛背更具体到"扫板"和"秒抢"的执行细节
- **抄手（王元杰）**：抄手说"他学会了空仓之后，所有的问题都迎刃而解"——空仓是孤独牛背与抄手共同的核心理念
- **方新侠、杨力**：孤独牛背总结的"他们不亏钱的经验"都是纪律强、回撤基本没有
- **养家**：都强调"对市场情绪的揣摩"，孤独牛背的"赚钱效应"是更直白的表达

---

*笔记来源：D 盘《孤独牛背雷神婚礼演讲龙头妖股战法》PDF*
*整理日期：2026-06-25*
`,oneLine:`**龙头龙头再龙头，空仓空仓再空仓。** 一切技术面和信息面都体现在价格上，**我看的主要看六点：人气、合力、换手、量能、强度、股性**。`,tags:[`龙头妖股战法`,`快速涨停第一板`,`补涨龙头`]},{id:`P0_孤独牛背控制回撤`,title:`孤独牛背控制回撤`,category:`心态方法`,source:`P0`,filename:`实战笔记_孤独牛背控制回撤.md`,content:`# 实战笔记 · 孤独牛背超短梦想系列·控制回撤篇

> 题材分类：控制回撤 / 风控 / 心态
> 游资/作者：孤独牛背 + 上证兄（召集）+ 丹凤东路、打板赚盒饭、难觅知音、吞吴破秦、Linsanity016、从此开始
> 关联资料：参见本批《孤独牛背婚礼演讲》
> 来源：D 盘《孤独牛背【超短梦想系列之控制回撤篇】》

---

## 一句话定位

> **回撤就是对手盘力量大于己方，对手盘出现赚钱效应，己方出现亏钱效应。** 规避对手盘过于强大的情况，能避免 80% 以上的大幅回撤。

## 核心观点（综合多高手）

1. **多空仓，多看少做，做最强那几只**：很多一流高手都长期空仓等符合自己的标的
2. **仓位 = 交易的艺术**（丹凤东路）：管理好仓位 = 管理好回撤
3. **强势股的正确走势摆在那里**（丹凤东路）：强势股就明摆着，你不去分析才是问题
4. **新模式试仓先学精一样**（吞吴破秦）：1 万块炒了很长时间，不丢脸
5. **纪律好了 = 空仓**（吞吴破秦）：势好做强势品种，势不好空仓
6. **保持身心健康**（吞吴破秦）：该锻炼锻炼，该打炮打炮，**此条为 1，以上为 0**

## 控制回撤的实操方法

### 1. 仓位控制

| 策略 | 操作 |
|------|------|
| **单只标的仓位重** | 赚得多，亏得也多，盈亏同源 |
| **资金分 3 份** | 行情好买满 3 只，差时买 1 只或空仓 |
| **大赚 10%+ 强制降仓** | 降到 3 成以下（打板赚盒饭） |

### 2. 交易控制

- 只做自己熟悉的模式，亏损也无怨无悔
- 少做无效交易（频繁交易只适合手法多的高手）
- 好的模式出现后，跟风股会跟着大涨，大盘也可能跟着上涨

### 3. 标的控制

- 选有题材标的，禁做无题材/题材不明标的
- 行情好时龙头跟风都有肉，行情差时只有做龙头才保险
- 16 年股权变更、高送转填权、虚拟现实、OLED、次新股——板块个股众多足够做

### 4. 指数气氛

| 指数状态 | 操作 |
|----------|------|
| 上证跌 + 创业板大跌 | 28 齐跌，**禁止开仓** |
| 上证涨 + 创业板大跌 | 28 分化，小仓位做 |
| 上证跌 + 创业板涨 | 小盘气氛好，**5 成以上仓位** |
| 上证涨 + 创业板涨 | 28 齐涨，**满仓做多** |

## 回撤的本质：对手盘强大情形

| 类型 | 表现 | 应对 |
|------|------|------|
| **庄股** | 我们的对手盘具备完全碾压实力 | 高位一律回避 |
| **国家队** | A 股之王 | 不解释 |
| **一字换手买一独大** | 重组一字/新股一字，板上大幅换手 | 情绪不好时难接力 |
| **热点龙头加速一致期独食** | 头天强势、第二天缩量独食 | 第三天基本到头（10 个能接 3 个就不错） |
| **弱势缩量（连）板** | 龙头战法盈亏同源里的亏 | 弱势缩量板要换手保护 |
| **情绪转折后的反向加速** | 突然出现大幅杀跌强势股 | 果断出局 |

## 三大高手的止损/锁仓法（难觅知音）

| 手法 | 操作 | 状态 |
|------|------|------|
| **满仓排涨停** | 排 1 板，等单子打死涨停板的单 | 已停用（太累） |
| **半仓排涨停 + 半仓尾盘集合竞价** | 买入价就是收盘价，T+1 变 T+0 | 已停用 |
| **滚动打板**（当前手法） | 用理解力分仓打板，仓位分配根据大盘变化 | **当前使用** |

**关键原则**：开出第一仓如果被砸，基本不会做第 2 笔交易 → 证明当天市场不适合自己，或当天不顺 → 把战斗交给明天

## 吞吴破秦的核心操盘指导方针

1. **弱势不做**：势指的是赚钱效应
2. **滚动操作**：连板多就打板，炸板杀跌多就低吸反包
3. **经常空（轻）仓**：节奏不对空仓，大亏空仓，大赚空仓，拿不准空仓
4. **新模式试仓**：先学精一样，再图其他
5. **保持身心健康**：此条为 1，以上为 0

## 仓位与回撤的"以攻代守"派（Linsanity016 & 从此开始）

> 回撤是必然也是未知的，你不知道什么时候出现却总会悄悄来到你身边。

- **Linsanity016**：时刻保持进攻不擅空仓 → 大小回撤总是伴随
- **从此开始**：以攻代守型选手，内心深处都是进攻
- **回撤控制**：通过不断优化自身的模式去减少回撤

## 风控逻辑

- **核心定义**：回撤 = 对手盘力量大于己方，对手盘出现赚钱效应
- **80% 大幅回撤 = 来自对手盘强大**
- **剩下 20% = 模式内的情绪转折**（用来提醒自己收缩仓位或空仓）
- **势好的时候赚钱效应在什么品种，就做什么品种**——**不是看大盘看 PE 类的幼儿园炒股法**

## 金句

> 仓位才是交易的艺术，管理好仓位也管理好了回撤。

> 强中自有强中手，哪个高手也有大亏的时候，心态再好不要和趋势作对。

> 大家又不是死人对吗？谁会傻傻的站在那里让你一直砍啊。

> 行情好时买满 3 只标的，行情差时只买 1 只标的或空仓不做。

> 频繁交易只适合手法多的高手，普通选手频繁交易死路一条。

> 28 齐涨 → 满仓做多；28 齐跌 → 禁止开仓。

> 回撤的本质：对手盘力量大于己方。

> 弱势缩量（连）板 → 逆大势非真龙。

> 势好的时候赚钱效应在什么品种，就做什么品种，不是看大盘看 PE 类的幼儿园炒股法。

> 保持身心健康，该锻炼锻炼，该打炮打炮，此条为 1，以上为 0。

> 你的模式平时小亏小赚，偶尔大赚，但是绝不大亏。

## 适用场景

- ✅ 任何市场状态下的回撤控制
- ✅ 强势市场的多标的滚动
- ✅ 弱势市场的空仓等待
- ✅ 模式内的情绪转折
- ❌ 硬做弱势（容易爆亏）
- ❌ 无效交易（侵蚀盈利）
- ❌ 满仓单股（盈亏同源）

## 关联阅读

- 龙头战法配套：参见本批《孤独牛背婚礼演讲》
- 短线心态：参见本批《不足道也手记》
- 资金管理：参见本批《Asking 理念总结》（半仓试错）

## 与其他游资的对比/呼应

- **养家**："控制回撤最重要的就是回避系统性崩溃风险"——与吞吴破秦"对手盘强大情形"是同一思路
- **JOKER 皇**：排版可随时撤单 = 主动控制回撤
- **Asking**：半仓试错 + 亏损不加仓 = 仓位层面的回撤控制

---

*笔记来源：D 盘《孤独牛背【超短梦想系列之控制回撤篇】》PDF*
*整理日期：2026-06-25*
`,oneLine:`**回撤就是对手盘力量大于己方，对手盘出现赚钱效应，己方出现亏钱效应。** 规避对手盘过于强大的情况，能避免 80% 以上的大幅回撤。`,tags:[`控制回撤`,`风控`,`心态`]},{id:`P0_打板手法系统`,title:`打板手法系统`,category:`打板追涨低吸`,source:`P0`,filename:`实战笔记_打板手法系统.md`,content:`# 实战笔记 · 打板操作系统学习笔记（完整版·邢者版）

> 题材分类：打板原理 / 龙头股选择 / 买入卖出手法
> 游资/作者：邢者（系统整理者，方法论来自私募高手打板经验）
> 关联资料：参见本批《JOKER 皇打板逻辑》《5 分钟筛选牛股》
> 来源：D 盘《打板手法系统学习笔记(完整版)》

---

## 一句话定位

> **打板不是贪婪的赌博，而是有科学的理论依据。** 打板正式因为拥有众多优势，才成为游资主力和私募大佬的最爱。

## 核心观点（七维论证）

| 序号 | 维度 | 论证 |
|------|------|------|
| 1 | **K 线理论** | 涨停是最强的看涨信号，第二日上涨概率最高 |
| 2 | **主力操盘流程** | 涨停是最明显的拉升方式和标志 |
| 3 | **信号确认** | 涨停板本身就是确认标识，未涨停不算确认 |
| 4 | **把握市场热点** | 涨停如同电视广告，指明板块动向和热点标的 |
| 5 | **游资吸筹** | 涨停时市场出现巨大价格分歧，成交量才放大 |
| 6 | **短线工作量** | 涨停选股大大简化工作量 |
| 7 | **复盘角度** | 涨停跌停代表市场板块和热点变化的信号 |

## 打板理念（三条）

1. **打板要做龙头股**：资金有限，要做就做质量最好的涨停板
2. **打板是挣第二天的收益**：当天涨停没有上涨的机会
3. **打板就是赌第二天涨停**：以涨停为目标，第二天不涨停就走

## 龙头股判断（按市场阶段）

| 市场阶段 | 龙头类型 | 例子 |
|----------|----------|------|
| **熊市** | 不能打板（纪律） | — |
| **震荡市** | 市场总龙头（题材稀缺） | 四川双马（重组） |
| **牛市** | 板块龙头 / 总龙头（事后才会跑出来） | 14-15 跨年行情的各板块龙头 |

## 潜在标的筛选方法（四类）

| 类型 | 描述 | 时机 |
|------|------|------|
| **1. 日内市场最先打板** | 弱势时率先涨停，强势时仍优选 | 当天/盘后 |
| **2. 同一题材板块率先涨停** | 主力集中推动，龙头股领涨 | 当天 |
| **3. 连续涨停的品种** | 龙头股形成的初步迹象 | 持续盯盘 |
| **4. 连续涨停横盘后再次涨停** | 主力获悉突发性利好 | 盘后梳理 |

## 优势板的日内特征

| 维度 | 判断标准 |
|------|----------|
| **封板时间** | 越早越好（开盘半小时内的板最强势） |
| **开板次数** | 越少越好，最好不开板 |
| **封单数量** | 适中即可（几万手到十几万手） |
| **上涨空间** | 用形态系统测量较大、题材好 |

**封板时间细分为**：
- 集合竞价涨停（盘后就要分析题材）
- 平开/高开后直接封板（主力操盘流畅）
- 低开后封板（后期较多，需多考虑多空）
- 正常时段板（10:00-14:00）：稳健拉升或横盘拉起
- 收盘半小时的板（常见高位横盘后拉升）

## 买点选择（两种典型形态）

| 形态 | 描述 | 操作 |
|------|------|------|
| **连续涨停后短期横盘整理** | 2-3 个涨停后横盘 1-2 周 | 横盘后第一个涨停最合适；均线位买入 |
| **连续涨停日内盘出现** | 2-3 板后日内洗盘 | 第三个板打板；或回到均线时赌板 |

**市场阶段的对应**：
- 上涨初期：打板为主
- 牛市上升期：打板和赌板同时
- 上涨后期：低吸赌板为主
- 回落期：**空仓观望**

## 买入手法

| 方式 | 操作 |
|------|------|
| **盘中买入** | 涨停瞬间买入（10% 点位）；最后几档交易量比较大时买入 |
| **两笔等量买入** | 急速拉升时一笔 + 涨停位置一笔（兼顾焦急+捕捉） |
| **集合竞价买入** | 9:15-9:25 观察价格趋势；高开低走不易挂单 |

**集合竞价买入规则**：
- 题材性越强/连涨前提下可在集合竞价高位买入
- 不确定时在竞价的 0 点附近买入（±2%）
- 风险高时只买一半，另一半涨停时再买

## 卖出手法

> 打板方法中，**当日不涨停即走**是核心法则。

| 情况 | 操作 |
|------|------|
| 当天不涨停 | 第二天开盘就止损 |
| 第二天先盈利后下跌 | 收益为零时止损（保本原则） |
| 冲高回落 | 收盘后再看不涨停就卖出 |
| 涨幅较大且有打板冲击 | 可再等一天 |
| 主力未打算强势拉升 | 没出现预期涨停就走 |
| 止损原则 | 亏损必止损，速度比幅度重要 |

## 仓位管理

> 由于打板对盯盘注意精力和注意力要求比较高，操作时机比较短，所以不能打太多。

- **通常 2-3 只标的**，**两只最佳**
- 当对一只股票采用两笔买入时，最多可打两只
- 全入全出可操作三只
- 全仓一只风险大，资金量大时会有流动性风险

## 风控逻辑

- **打板不是赌博**：有科学的理论依据（七维论证）
- **打板有优势**：是众多优势的集合
- **不涨停就走**：简化操作、提高胜率
- **打板和赌板的转换**：跟随市场节奏检验牛熊

## 经典案例

- **四川双马（000935）**：震荡市的市场总龙头（重组概念）
- **特力 A**：妖股模式的代表
- **廊坊发展**：小单吃完立马排的缩量烂板
- 文中提及的多个附图案例（详见原 PDF）

## 金句

> 打板不是贪婪的赌博，而是有科学的理论依据。

> 短线的精髓不正是做股票拉升阶段的行情吗？

> 一是感觉白白浪费一天的交易机会很可惜；二是面对当天只跌不涨的局面感觉很焦虑。

> 理念第一条指出打板要做龙头股。

> 因为是第二天不涨停就走，让我们避免了耗在或套在还未准备好的股票里。

> 讲究动作的完整性。

## 适用场景

- ✅ 短线操作顶级技艺
- ✅ 龙头股 / 优势板的捕捉
- ✅ 强势/震荡/牛市（不可在熊市打板）
- ❌ 熊市（明确不能打板）
- ❌ 不做龙头股（资金量有限，标的不集中）
- ❌ 持股等待（不涨停即走原则）

## 关联阅读

- 排版/扫板细节：参见本批《JOKER 皇打板逻辑》
- 集合竞价买入：参见本批《5 分钟筛选牛股》
- 心态/风控：参见本批《孤独牛背控制回撤》

## 与其他游资的呼应

- **JOKER 皇**：本笔记侧重原理，JOKER 皇侧重手法（排版/扫板/烂板）
- **孤独牛背**：都强调"打最强股"，孤独牛背的"30 万手几秒内抢完"是本笔记"封板时间"的具体化
- **Asking**：龙头战法是同一思路，Asking 的"半仓试错"是本笔记"两笔等量买入"的另一种形式
- **炒股养家**：养家说"高手买入龙头"——本笔记的"做龙头股"理念

---

*笔记来源：D 盘《打板手法系统学习笔记(完整版)》PDF*
*整理日期：2026-06-25*
`,oneLine:`**打板不是贪婪的赌博，而是有科学的理论依据。** 打板正式因为拥有众多优势，才成为游资主力和私募大佬的最爱。`,tags:[`打板原理`,`龙头股选择`,`买入卖出手法`,`打板`]},{id:`P0_抓妖股概率`,title:`抓妖股概率`,category:`打板追涨低吸`,source:`P0`,filename:`实战笔记_抓妖股概率.md`,content:`# 实战笔记 · 抓妖股：连板股的概率统计玄机

> 题材分类：妖股 / 连板统计 / 概率博弈
> 游资/作者：邢者（"晚上和广州的同事一起吃饭"，作者 2016 后活跃）
> 关联资料：参见本批《云意电气涨停》《5 分钟筛选牛股》
> 来源：D 盘《揭秘如何抓妖股 连板股的概率统计有玄机》

---

## 一句话定位

> **有三必有五，有五必成妖。** 2014 年创业板大牛市时数据：1→2 板 7.5% / 2→3 板 14.6% / 3→4 板 21.7% / 4→5 板 34.3%。

## 核心观点

1. **连板数量越高，下一个涨停的概率就越大**（越到后面越高）
2. **2014 年连板股概率统计**（创业板大牛市期间）：
   - 1→2 板：**7.5%**
   - 2→3 板：**14.6%**
   - 3→4 板：**21.7%**
   - 4→5 板：**34.3%**
   - 5→6 板：又低于 10%
3. **妖股战法**：复盘选择 1 板 → 重点关注 2 板 → 适当参与 2 板（不成就次日止损）→ 确认 2 板冲 3 板有望成功就加仓
4. **妖股的特征**：
   - 很少有过大牛经历
   - 不怕停牌关小黑屋
   - 暂时的熄火只是为了更高的飞跃

## 各席位擅长领域

| 擅长领域 | 席位 |
|----------|------|
| **首板** | 佛山季华、佛山绿景、成都南北一环 |
| **连板** | 无锡清扬、国泰江苏路、绍兴解放北路 |
| **三板** | 深圳金田路、中信古北路 |
| **一字板** | 炒股养家的华鑫证券蒲雪璐、华鑫宁波沧海路 |
| **撬开跌停板** | 华泰商务中心荣超路 |
| **低吸** | 龙飞虎的华泰南京六合彤、瑞鹤仙的中信建投宜昌解放路 |

## 妖股战法的实操步骤

\`\`\`
Step 1: 复盘选择 1 板股（大浪淘沙第一步）
   ↓
Step 2: 1 板变 2 板 → 拉入自选股，重点观察
   ↓
Step 3: 次日 2 板可适当小仓位参与
   ↓
Step 4: 3 板不成 → 次日止损
   ↓
Step 5: 确认 2 板冲 3 板有望成功 → 加仓猛干
   ↓
Step 6: 3 板后必有强势洗盘，必须坚持到最后收盘才能判断
   ↓
Step 7: 4 板确认 → 5 板概率最大（"有三必有五"）
   ↓
Step 8: 5 板成妖 → "有五必成妖"
\`\`\`

## 关键经验

> 很多游资大佬……敢于高位接力连板股，并且重仓杀入。

- **3 板过后有强势洗盘**：必须坚持到最后收盘
- **一旦 4 板确认，5 板概率是最大的**："有三必有五"
- **"有五必成妖"** —— 成妖后的预期可期
- **2015 之前没有那么多妖股**（杭萧钢构换手板算那个时代大妖王）
- **2016 平均每个月出现一只翻两倍以上的妖股**
- **2017 比 2016 更精彩**

## 历史背景

- **2014 创业板大牛市**：上证依旧低迷，这份数据不能代表下一年
- **2015 股灾后**：特力 A 让市场见识单打独斗股的厉害
- **2015 之前**：大牛股更多是板块协同（先 2-3 只龙头翻倍，中期板块齐开花）
- **2015 之后**：妖股大面积诞生，独立行情

## 选股方法

- **妖股炒作之前很少有过大牛经历**：如果几年前它有过大牛暴涨，就不是妖股
- **妖股不怕停牌**：暂时的熄火只是为了更高的飞跃
- **市场选择的具有代表意义的龙头股做反抽**

## 风控逻辑

- **3 板不成 → 次日止损**
- **强势洗盘必须坚持到最后收盘**
- **5 板后再介入的成功率最低**：所以 5→6 板又低于 10%
- **重仓杀入的是 3 板、4 板**：5 板已经接近顶部

## 经典案例

- **杭萧钢构**：2015 之前大牛市的大妖王（换手板）
- **特力 A**：2015 股灾后单打独斗股的代表
- **2016 平均每月一只翻两倍以上的妖股**：模式繁衍和优化
- **2017 比 2016 更精彩**：对连板股一定要重视

## 金句

> 一板股涨至二板股的概率只有 7.5%，二板股涨至三板股的概率有 14.6%，三板股涨至四板股的概率有 21.7%，四板股涨至五板股的概率高达 34.3%。

> 连板的数量越高，下一个涨停的概率就越大。

> 很多韭菜，都不理解这是为什么？总觉得涨停板越多，风险会越大。

> 有三必有五，有五必成妖。

> 妖股炒作之前，很少有过大牛经历的，如果几年前，它有过大牛暴涨的历史，它就不是妖股。

> 妖股也不是停牌关小黑屋能打沉下去的，暂时的熄火，只是为了更高的飞跃。

## 适用场景

- ✅ 强势/震荡市中的连板股接力
- ✅ 3 板、4 板的高位接力（重仓）
- ✅ 5 板成妖后的套利
- ✅ 妖股的反包/二波
- ❌ 弱势/下跌通道（连板不持续）
- ❌ 5→6 板（成功率 < 10%）
- ❌ 历史大牛股（妖股不会是大牛股）

## 关联阅读

- 排版/扫板执行：参见本批《JOKER 皇打板逻辑》
- 妖股识别：参见本批《孤独牛背婚礼演讲》（妖股四类标的）
- 选股：参见本批《云意电气涨停》（分时识别）

## 与其他游资的呼应

- **炒股养家**：养家的华鑫席位是"一字板擅长"
- **龙飞虎 / 瑞鹤仙**：低吸派席位
- **Asking / 孤独牛背**：都强调"打最强股"
- **佛山系**：首板大师
- **绍兴解放北路**：连板接力大佬

---

*笔记来源：D 盘《揭秘如何抓妖股 连板股的概率统计有玄机》DOCX*
*整理日期：2026-06-25*
`,oneLine:`**有三必有五，有五必成妖。** 2014 年创业板大牛市时数据：1→2 板 7.5% / 2→3 板 14.6% / 3→4 板 21.7% / 4→5 板 34.3%。`,tags:[`妖股`,`连板统计`,`概率博弈`]},{id:`P0_次新股筛选`,title:`次新股筛选`,category:`打板追涨低吸`,source:`P0`,filename:`实战笔记_次新股筛选.md`,content:`# 实战笔记 · 次新股筛选（"临近新高不创新高"之法）

> 题材分类：次新股 / 技术分析 / 邢者战法
> 游资/作者：邢者
> 身份：2017 年前后的实战高手；2017.3.7 发表本文；最近做的 10 只次新有一半用此法筛选
> 关联资料：参见本批《JOKER 皇打板逻辑》《5 分钟筛选牛股》
> 来源：D 盘《再送干货！如何用技术分析来筛选次新股》

---

## 一句话定位

> **"临近新高，不创新高"——开板后一个月左右、盘整 7-12 个交易日、K 线在 5 日线上方，是开板次新走强的三个共性。**

## 核心观点

1. **此法只对次新**：在维稳和趋势背景下，次新的大环境好是前提
2. **纯技术分析 vs 题材/基本面**：选股主要是看个股的题材、人气、基本面、股性以及资金流；**卖股（选时）才会用技术**
3. **次新股指数日线走势**：突破前期平台压制是关键
4. **临近新高不创新高** = 稳妥的次新选股方法
5. **成功率 100%**（作者自述最近 10 只次新中的一半）

## 三个共性（必选条件）

| 条件 | 描述 |
|------|------|
| **1. 时间周期** | 开板后的时间周期在**一个月左右** |
| **2. 盘整时间** | 在股价向新高发起挑战之前，日线一定要有**7-12 个交易日**的盘整时间 |
| **3. K 线位置** | 拉升启动前的日 K 线要在 **5 日线上方** |

## 买入/止损规则

| 场景 | 操作 |
|------|------|
| **买入点** | 走出横盘震荡的那根日线买入（**不参与横盘整理期**） |
| **启动后追入** | 可继续观察；如果向下小幅调整可继续观察 3 个交易日 |
| **突破前期新高** | 可继续持有 |
| **跌回横盘位置** | **止损出局** |
| **原则** | 不启动，不买入 |

## 适用前提与限制

- **次新的大环境好**（维稳+趋势）是前提
- **超短技巧，不适用于中长线**
- **技术分析最怕刻舟求剑**：市场环境变化结果会变
- **脱离趋势和基本面，技术行不通**

## 选股方法

> 启动的日线量能要比之前横盘的大，**无量的不行**。

- 紫色框：横盘震荡周期
- 紫色箭头：启动买入点
- **量能比较**：启动日 > 横盘日（必须）

## 风控逻辑

- **不参与横盘整理期**：启动才买，不启动不买
- **3 个交易日观察期**：启动后追入若调整，可观察 3 天
- **跌回横盘位置止损**：硬性止损
- **买在横盘之后的第一根启动日线**（最稳妥）

## 金句

> 此法只对次新，因为在维稳和趋势背景下，次新的大环境好，这是前提。

> 临近新高，不创新高。

> 不参与横盘整理期，原则就是不启动，不买入。

> 启动的日线量能要比之前横盘的大，无量的不行。

## 适用场景

- ✅ 维稳 + 趋势背景下的次新市场
- ✅ 开板一个月左右的次新股
- ✅ 突破前高的临界点介入
- ❌ 弱势/下跌通道（次新大环境不好）
- ❌ 中长线持股（明确不适用）
- ❌ 脱离趋势和基本面的纯技术操作

## 关联阅读

- 早盘/竞价层面：参见本批《5 分钟筛选牛股》《JOKER 皇打板逻辑》
- 邢者其他方法：参见本批《打板手法系统》

## 与其他游资的呼应

- **JOKER 皇**：本笔记侧重"次新筛选"，JOKER 皇的"打板排版"是买入执行层面
- **Asking**：选股层面都强调"盘整后突破"是介入良机
- **乔帮主**：5 日均线低吸与本笔记"启动日 K 在 5 日线上方"有相通之处

---

*笔记来源：D 盘《再送干货！如何用技术分析来筛选次新股》DOCX*
*整理日期：2026-06-25*
`,oneLine:`**"临近新高，不创新高"——开板后一个月左右、盘整 7-12 个交易日、K 线在 5 日线上方，是开板次新走强的三个共性。**`,tags:[`次新股`,`技术分析`,`邢者战法`,`次新`]},{id:`P0_江平投资准则`,title:`江平投资准则`,category:`高手手记`,source:`P0`,filename:`实战笔记_江平投资准则.md`,content:`# 实战笔记 · 江平投资准则（华尔街顶级华裔交易员）

> 题材分类：投资哲学 / 价值与趋势 / 风险观
> 游资/作者：江平
> 身份：华尔街顶级华裔交易员；雷曼兄弟历史上最传奇交易员之一；2006 年赛克资本个人年入超 1 亿美元
> 关联资料：暂无 C 盘独立条目（首次整理）；可与本批《江平投资准则》一并深度阅读
> 来源：D 盘《巅峰高手之华尔街顶级华裔交易员江平投资准则》

---

## 一句话定位

> **古今中外历朝历代只有极少数人可以不劳而获。** 炒卖股票不属于劳动，绝大部分人不可能真正弄清市场规律——以死守不战为上策。

## 核心观点

1. **树立劳动致富的人生观**：炒卖股票不是劳动，靠股市赚的钱不长久。
2. **保卫劳动果实以死守不战为上策**：不战 ≠ 不做事，**指数化投资是好办法**。
3. **投资行业是特殊劳动**：门槛高，进去后并不难；做得好收入与付出不成比例。
4. **九死一生，百炼成钢**：业余 95% 亏钱，职业 90% 亏钱——**做那不亏的 10%，更难的是那 1%**。
5. **10 条平衡法则**：战略自信 + 战术谨慎的平衡；长线与短线的平衡；正与奇的平衡。

## 江平 10 条核心平衡法则

| 编号 | 法则 | 核心要点 |
|------|------|----------|
| 1 | 人生的平衡 | 胸无大志不可，强求功名也不可；投资 ≠ 圈钱 |
| 2 | 战略与战术平衡 | 战略上自信打败一切敌人；战术上如临深渊如履薄冰 |
| 3 | 与华尔街距离 | 出淤泥而不染；为华尔街做事要"情有可原"，但不出卖灵魂 |
| 4 | 正与奇的平衡 | 初入市场循正道、防守为上；待有积累后以奇兵出击 |
| 5 | 长线与短线的平衡 | 长线以价值为本；短线以技术/资金流分析为主；**止损要快** |
| 6 | **低进高出 vs 高进低出** | 长线低进高出；**短线要顺势高进低出**——这是普通投资者失败的关键 |
| 7 | 分散与集中的平衡 | 价值平庸时分散；超优价值时集中，**少用或不用杠杆** |
| 8 | 仓位大小的平衡 | 高估时小仓位灵活；低估时大仓位；**赢者心态** |
| 9 | 简单与复杂 | 好长线投资都简单；复杂套利要严格跟踪市场流动性 |
| 10 | 供与求的平衡 | 长线看基本面；短期看华尔街的供应操纵 |

## 选股/投资标准

- **不要受华尔街影响**：持之以恒地指数化投资是好办法
- **长线投资**：耐心让利润成长，**直到价值基本面改变**
- **短线投机**：顺势炒作，适可而止；时刻提醒"这是短线"
- **冷门资产**：潜心分析，向科学家一样有独创性，找出别人没发现的**超级价值**

## 风控逻辑

- **以死守不战为上策**：不要盲目进入市场
- **有道德的职业投资者**：拿着别人的钱要当成自己的钱一样保守
- **弄清情况之前主力资金不要轻易出击**
- **发现套利机会要制定周密行动方案**（而不是匆忙下手）
- 仓位平衡原则："涨是利润，跌是机会；**涨不足喜，跌不足忧**"

## 经典案例 / 自述

- 1986 中科大 → 1989 赴美 → 1993 普林斯顿化学博士 → 1994 斯坦福金融硕士 → 1995 雷曼 → 2005 赛克 → 2006 个人年入超 1 亿美元登华尔街百强
- 2008 年**因高层内斗辞职离开赛克** → 2008 创立江平资本管理公司
- 巴菲特称其"奇才"（尽管价投对其可能不屑一顾）

## 金句

> 树立劳动致富的人生观。古今中外历朝历代只有极少数人可以不劳而获。

> 保卫劳动果实以死守不战为上策。

> 业余投资者 95% 以上亏钱，职业投资者 90% 以上亏钱。

> 一个职业交易员首先要训练"高进低出"的直觉。

> 涨是利润，跌是机会；涨不足喜，跌不足忧。

> 如果你失去了资产，你怎么存活。

## 适用场景

- ✅ 价值投资 / 长线持仓
- ✅ 资金量较大、需要分散+集中平衡的组合管理
- ✅ 已经走完一轮认知升级、有自己"奇兵"机会的成熟投资者
- ❌ 短线追涨杀跌（普通投资者被反复警告）
- ❌ 杠杆驱动的暴利策略
- ❌ 受华尔街舆论影响频繁交易

## 关联阅读

- 通用价值投资理念参见本批《滚雪球下》（巴菲特传）
- 反面参考：本批《Asking 理念总结》《令胡冲盘感训练》——短线派视角

## 与其他游资的对比/呼应

| 维度 | 江平 | Asking / 令胡冲 | 裘国根 |
|------|------|-----------------|--------|
| 持仓周期 | 长线/价值 | 短线/超短 | 中长线/接力 |
| 离场逻辑 | 价值基本面改变 | 不涨停即出 | 达到预期收益即换 |
| 资金来源 | 华尔街职业 | 民间个人 | 私募机构 |
| 风控核心 | 死守不战 / 分散 | 选最强股 = 风控 | 流动性 + 安全边际 |

---

*笔记来源：D 盘《巅峰高手之华尔街顶级华裔交易员江平投资准则》PDF*
*整理日期：2026-06-25*
`,oneLine:`**古今中外历朝历代只有极少数人可以不劳而获。** 炒卖股票不属于劳动，绝大部分人不可能真正弄清市场规律——以死守不战为上策。`,tags:[`投资哲学`,`价值与趋势`,`风险观`]},{id:`P0_游资席位速查`,title:`游资席位速查`,category:`综合资料`,source:`P0`,filename:`实战笔记_游资席位速查.md`,content:`# 实战笔记_游资席位速查

| 题材分类 | 实战工具·席位字典 |
|---------|------------------|
| 游资/作者 | D 盘资料汇编（多源汇总） |
| 关联资料 | 《游资席位资料大全》（XLS）、本批各游资作战法笔记 |
| 来源 | D 盘原始 XLS 摘录 + 公开龙虎榜知识汇总 |

## 一句话定位

中国 A 股市场 30+ 知名游资集团 / 牛散 / 帮派的核心席位、操作风格、资金量级、活跃时段速查字典，**做跟随式短线交易前必查**。

## 核心观点

1. **席位 = 游资身份证**：龙虎榜上看到的"XX 证券 XX 路营业部"，背后通常对应着特定游资集团或个人，跟随对了席位就等于跟对了资金
2. **席位分散是常态**：一线游资往往控制 3-20 个马甲席位（关联账户），单一席位上榜只露出冰山一角
3. **席位风格 = 操作指纹**：每个游资的席位都有"刻板风格"——排一字、打板、低吸、追涨、做次新、做定增，看席位就能反推其策略
4. **席位轮动是信号**：游资"转场"（换券商）往往是规避监管或策略升级，跟随新席位常能捕捉到新阶段的主升浪
5. **D 盘 vs C 盘分工**：C 盘 26 位游资深度研读侧重"人物 + 心法"，D 盘这份字典侧重"席位 + 实战对应"，两者互为索引

## 仓位/接力/操作

**使用本字典的标准动作**：

1. **盘中异动 → 查席位**：看到连续涨停 / 巨量换手，先翻字典确认是哪路游资在主导
2. **席位风格 → 选接力点**：若发现是"打板专业户"主导，跟随二板时要快进快出；若是"低吸王"主导，则等回踩 5/10 日线低吸
3. **席位协同 → 验强度**：同一游资的多席位（3 个以上）同时上榜 = 集团军作战，强度极高，可重仓跟随
4. **席位轮换 → 跟新仓**：知名游资出现在"非主仓席位"上 = 转场初期，往往是新一波主升的开始
5. **席位缺席 = 警示**：原本应出现的席位突然消失 = 该游资已撤退，及时止盈

## 选股/标准

**席位筛选的核心维度**（按重要性排序）：

| 维度 | 关键判断 |
|------|---------|
| 资金量级 | 10 亿+ 为顶级（孙煜/章建平/叶庆均/谷苍），1-10 亿为一线，1 亿以下为短线客 |
| 操作风格 | 排一字板 / 扫板 / 低吸 / 追涨 / 做次新 / 做定增 |
| 席位数量 | 多席位协同 = 集团军，单席位 = 散户化 |
| 活跃时段 | 连续上榜 = 主升浪进行中，间隔上榜 = 间歇性参与 |
| 历史胜率 | 知名游资的"代表作"（如孙哥的中国中车、赵老哥的中国宝安）回测胜率 |
| 监管状态 | 被交易所"限制交易"过的席位要小心，可能已转型或被废 |

## 风控逻辑

1. **席位 ≠ 圣杯**：即便顶级游资也有亏损时刻（被埋、吃监管、被套），不能盲信席位
2. **席位出货信号**：
   - 同一席位连续 3 日买入后突然缺席 = 主力可能已在高位派发
   - 买一席位金额突然大幅萎缩 = 跟买资金不足，警惕见顶
   - "假机构席位"出现 + 游资席位消失 = 主力对倒出货
3. **席位"散户集中营"清单**：国信深圳泰然九路、平安芜湖江北、国金上海奉贤金碧路——这些上榜往往不是游资而是散户跟风，**反向指标**
4. **席位已废清单**：中投江门江堤路（被限制交易）、华泰江宁金箔路（已消失）——不要再跟随

## 经典案例

- **孙煜（中国中车）**：2015 年孙哥携 50 亿资金在溧阳路 + 庆春路 + 庆春东路三路协同封板中国中车，单股浮盈数十亿
- **赵老哥（中国宝安）**：2015 年赵强在华泰浙江分公司席位单股扫货中国宝安，3 个交易日获利 60%+
- **马信琪（浙富控股）**：单股投入 7 亿封板，创下 D 盘字典中"单股单席位最大资金量"记录
- **章建平（开板模式）**：在中信杭州延安路 + 四季路 + 朝晖路三席位做"公告一字连板后放量板上拿货"，代表作有招商地产
- **温州帮（坚瑞消防）**：2016 年以瑞安罗阳大道为旗舰 + 财通青田前路街 + 财通丽水北苑路 + 银河温州锦绣路 6+ 席位协同作战，集体做盘

## 金句

- "造席位比造股或造板块是最大的格局" —— 孙煜
- "不砸盘有担当的席位在牛市，市场会双倍奉献那种承担" —— 字典原话
- "一个师傅级的游资 出手必赚" —— 西藏证券辉河路
- "这类大鳄出现，基本上是市场短期人气回升的标志" —— 字典评甘忠廉 / 彪哥
- "经过 2008 年雪崩冲击的趋势投资者，一有风吹草动便迅速出逃" —— 评贝国浩

## 适用场景

| 场景 | 怎么用本字典 |
|------|--------------|
| 盘中看到龙虎榜异动 | 立即翻字典确认席位对应的游资 |
| 复盘某只牛股的资金路径 | 按席位倒查是哪几路游资接力 |
| 选股阶段筛强势股 | 优先选"顶级游资席位正在持仓"的票 |
| 判断行情阶段 | 多席位集团军上榜 = 主升加速；散户席位上榜 = 见顶预警 |
| 学习游资战法 | 锁定某位游资后，专项精读其代表作和席位规律 |

## 关联阅读

| 关联笔记 | 关联点 |
|---------|--------|
| 实战笔记_Asking理念总结 | 龙头战法集大成者，与本字典的"顶级游资席位"互为印证 |
| 实战笔记_养家心法 | 养家席位 = 孙峰（华鑫系 7 个马甲） |
| 实战笔记_乔帮主交割单 | 乔帮主 = 招商深圳蛇口工业七路 |
| 实战笔记_孤独牛背婚礼演讲 | 孤独牛背席位可从字典中检索 |
| 实战笔记_落升熊市盈利 | 落升（江南神鹰）= 罗申，光大金华双溪西路 |
| 实战笔记_王元杰弱市操作 | 王涛 = 王元杰（职业炒手），华泰成都南一环 |
| 实战笔记_丁一熊熊市策略 | 丁一熊属"老牌派"，可对照字典查席位 |
| 实战笔记_JOKER皇打板逻辑 | 打板派可对照字典"打板专业户"专栏 |
| 实战笔记_集合竞价奥义 | 舒逸民"竞价点火副仓"席位 = 银河宁波大庆南路 |
| 实战笔记_打板手法系统 | 系统化打板手法的席位地图 |

## 精选席位速查表（按知名度排序 Top 30）

| 排名 | 游资/牛散 | 网名/昵称 | 旗舰席位（主） | 资金量级 | 操作风格 |
|------|----------|----------|---------------|---------|---------|
| 1 | 孙煜 | 职业短线客/孙哥 | 中信上海溧阳路 | 50 亿 | 大兵力、连续多日强势上攻龙头 |
| 2 | 章建平 | 老章 | 中信杭州四季路/延安路 | 数十亿 | 开板模式、公告一字板放量拿货 |
| 3 | 叶庆均 | 叶大户 | 银河宁波翠柏路 | 数十亿 | 热门风口股、期股双栖 |
| 4 | 赵强 | 赵老哥 | 华泰浙江分公司 | 数十亿 | 涨停板接力、追涨龙头 |
| 5 | 马信琪 | — | 光大宁波解放南路 | 10 亿+ | 巨量做单、单股 7 亿封板 |
| 6 | 沈付兴 | — | 中信上海世纪大道 | 20+ 亿 | 13-15 年 2 亿做到 20 亿的巨散 |
| 7 | 王海祥 | 新股 1968 | 财通绍兴人民中路 | 集团军 | 绍兴豪华游资集团、做持续上涨股 |
| 8 | 谷苍 | 方新侠 | 广发西安南广济街 | 北方第一 | 北方第一主力、全国前五 |
| 9 | 舒逸民 | — | 兴业杭州清泰街 | 10 亿级 | 竞价点火、副仓配合 |
| 10 | 徐晓 | — | 国元上海虹桥路 | 顶级 | 与章大佬同层面 |
| 11 | 唐汉若 | — | 华泰北京雍和宫 | 10 位数 | 巨量出击、敢干敢割、北方资金第一 |
| 12 | 东北猛男 | — | 广发辽阳民主路 | 私募猎人级 | 09 年爆炒牛股成名 |
| 13 | 何（苏州） | 低吸王 | 东吴苏州西北街 | 集团军 | 低吸强势股、苏州集群 |
| 14 | 廖启昌 | 佛山无影脚 | 光大佛山绿景路 | 顶级 | 低位掩护板、独食万手联排 |
| 15 | 何志坚 | — | 光大佛山季华六路 | 顶级 | 早板、秒板专业户 |
| 16 | 乔帮主 | 玉米神 | 招商深圳蛇口工业七路 | 数亿 | 突破买入、单股翻倍 |
| 17 | 孙峰 | 炒股养家 | 华鑫上海宛平南路 | 10 亿内 | 一字板绝技、心法大师 |
| 18 | 黄长富 | — | 华泰厦门厦禾路 | 顶级 | 排一字板、风格接近溧阳 |
| 19 | 厦门帮 | 陈小华 | 安信厦门湖里大道 | 20 亿+ | 钱多势大、兵团作战 |
| 20 | 张建斌 | 定增王 | 银河南京江宁竹山路 | 10 位数 | 股权投资、定增王 |
| 21 | 瑞鹤仙 | yxkrrhx | 新时代宜昌东山大道 | 过亿 | 期指股票双栖、一年半悟道 |
| 22 | 温州帮 | — | 上海证券瑞安罗阳大道 | 集团军 | 坚瑞消防式集体做盘 |
| 23 | 郑州帮 | — | 中金广州天河路 | 上亿 | 集中做煤炭股 |
| 24 | 王涛 | 职业炒手/王元杰 | 华泰成都南一环路 | 顶级 | 银帆系、校长级游资 |
| 25 | 陈新宇 | 葵花宝典 | 国泰君安成都北一环 | 顶级 | 尾盘居多、银帆 3 期 |
| 26 | 周晨 | — | 中投无锡清扬路 | 顶级 | 南京大佬、品牌美誉 |
| 27 | 华舞 | saint 华舞 | 中投南京太平南路 | 过亿 | 90 后、佛山无影脚门徒 |
| 28 | 邱宝裕 | — | 兴业福州湖东路 | 福建新星 | 风格接近溧阳银河绍兴 |
| 29 | 龙飞虎 | 克拉美书 | 华泰南京六合彤华街 | 顶级 | 淘股吧大神 |
| 30 | 泽泉辛宇 | 涨停板 1 号 | 国海济南济安街 | 私募 | 神州牧系、涨停板敢死 |

## 席位风格分类索引

### 排一字板型
孙煜（中信溧阳路）、养家（华鑫宛平南路）、一花一残忆（华泰武定路）、叶？（中信漕溪北路）

### 扫板/接力型
赵老哥（华泰浙江分公司）、黄长富（华泰厦禾路）、孙煜（杭州庆春路系）

### 低吸型
佛山无影脚（光大绿景路）、何苏州（东吴苏州西北街）、贝国浩（国泰益田路）

### 次新专家型
张学友（华泰舟山解放东路）、沈付兴（方正上海保定路）

### 做盘/集团军型
温州帮、厦门帮、郑州帮、孙煜多席位协同

### 定增/股权型
张建斌（银河南京江宁竹山路）

### 追涨题材型
王海祥（财通绍兴人民中路）、何（华泰苏州何山路）

### 私募型
泽泉辛宇（神州牧系）、罗伟广（新价值投资）、星石江晖（国泰上海分公司）

## 已知"散户集中营"（反向指标）

- 国信深圳泰然九路
- 平安证券芜湖江北
- 国金上海奉贤金碧路
- 国金上海互联网分公司
- 方正温州小南路
- 平安深圳深南东路罗湖商务中心

> **使用提示**：看到这些席位集中上榜 = 散户在追涨，往往是阶段性顶部。

## 原始数据来源

D 盘《游资席位资料大全》原始 XLS 文件，Sheet1 共 407 行 5 列，已全量提取为 markdown 表格保存于 \`_raw_text/游资席位原始数据.md\`（405 行有效数据）。本笔记精选 Top 30 + 风格分类 + 散户集中营清单三部分。

## 对比/呼应

- **与 C 盘 26 位游资深度研读的关系**：C 盘侧重"人物心法 + 案例复盘"，D 盘这份字典侧重"席位定位 + 风格指纹"。**两份资料合用 = 立体化游资认知**
- **与本批 25 份实战笔记的呼应**：
  - 提到 Asking / 养家 / 乔帮主 / 落升 / 孤独牛背 / 王元杰 / 丁一熊等游资时，先到本字典查"这位游资的旗舰席位是哪个"，再去 D 盘对应笔记读战法
  - 提到"打板"主题时，对照字典的"打板专业户"专栏
  - 提到"低吸"主题时，对照字典的"低吸型"专栏
- **本批笔记的最后一站**：作为索引性笔记，本字典是 25 份笔记的"实战工具箱"，便于实战中快速调用
`,oneLine:`游资/作者 | D 盘资料汇编（多源汇总） |`,tags:[]},{id:`P0_滚雪球下`,title:`滚雪球下`,category:`经典思维`,source:`P0`,filename:`实战笔记_滚雪球下.md`,content:`# 实战笔记 · 滚雪球下（巴菲特传·人生与投资哲学）

> 题材分类：价值投资 / 复利 / 人生哲学
> 游资/作者：爱丽丝·施罗德（作者）；沃伦·巴菲特（传主）
> 来源：D 盘《滚雪球(下)》；原作：The Snowball: Warren Buffett and the Business of Life
> 关联资料：可与本批《江平投资准则》形成"价值派+华尔街"双视角

---

## 一句话定位

> **人生的目标就是，在你期望得到关爱的人们中间最大限度地争取自己受人爱戴。** 巴菲特一生的全部精力和热情都推动着自身智慧、性情和技能的不断完善。

## 核心观点

1. **"滚雪球" 的隐喻**：要找到很湿的雪和很长的坡。复利是滚雪球的发动机，财富以几何级数速度增长。
2. **评估投资价值，规避风险，保留安全边际，专注**：巴菲特的方法从来没变。
3. **"卵巢彩票"理论**：你出生在哪个国家、家庭，是不能选择的。
4. **复利的伟大力量**：像奴仆一样为他的财富辛勤劳作，财富以几何级数速度飞速增长。
5. **内部记分卡**：巴菲特的标准是内部记分卡，不是外部。
6. **投资不复杂**：长期投资都较简单；复杂的多头套利对冲要严格跟踪流动性。

## 巴菲特关键时间线（与本书相关）

| 年份 | 事件 | 关键数据 |
|------|------|----------|
| 1980 | 50 岁生日聚会 | 伯克希尔每股 375 美元 |
| 1981 | 里根大幅减税 + 撤销管制 | 1982 年底牛市开始突起 |
| 1983 | 收购蓝带印花公司 | 巴菲特和芒格成为合伙人 |
| 2007 | 道琼斯 14000 | 巴菲特首次荣膺全球首富 |
| 2008-03 | 贝尔斯登差点倒闭 | 美联储拿出 300 亿美元担保债务 |
| 2008 | 油价 144 美元/桶 | 巴菲特开始弯腰捡"烟蒂" |
| 2008 | 4% 回报环境（芒格语） | 骗子可能风行于市 |

## 2008 金融危机的应对

> 巴菲特仿佛回到了童年，又开始弯腰捡"烟蒂"。

- 美联储为贝尔斯登 300 亿美元担保债务 → 第一次花钱帮助投行
- **信用违约互换(CDS)**：对存在破产风险的公司推出保险
- 投入 40 亿美元 → "如果这就是有效的市场，那么字典必须重新定义'有效'一词"
- **优先贷款**有极大优势
- 资源类不再主流；苹果、3D 打印是衍生概念

## 巴菲特的人生价值观

> 沃伦·巴菲特性格内向，不喜欢抛头露面，生活中需要别人帮助来渡过困境。

- **对待身体**：像对待此生拥有的唯一一部车子那样——小心呵护
- **找与自己性情相投的人**：只与喜欢的人们一起工作
- **内部记分卡 vs 外部记分卡**：靠自己的标准
- **复利 = 复利+复利 = 几亿乃至几十亿**
- **"不要回头看山顶"**：他一直认为自己就是早晨八九点钟的太阳

## 给大学生的忠告

> 我很早就开始滚雪球了。如果起步晚了 10 年，就完全没有现在这样站在山顶看风景的优势。

- **"蓄势待发"**：起步早比拼命追赶更有效
- **信用卡会导致他们落在后面**
- **"在期望得到关爱的人们中间最大限度地争取自己受人爱戴"**——人生目标
- **结婚**（巴菲特不谈金钱）
- **怎么判断正误**：用内部记分卡
- **理想的社会**：每个公民都能参与财富创造

## 风控逻辑

> 在错误的时间买进或卖出或者付高价，都无异于自寻短见。

- 避开这两方面的最好办法：**买低廉的指数基金**，而且**长期买**
- 别人恐慌的时候贪婪，别人贪婪的时候恐慌
- **切勿企图智取市场**
- 如果长期美国社会都会好转，那又为何费力挑选投资对象？
- **只有少数人应该成为积极的投资者**

## 经典案例

- **1980 年 50 岁生日聚会**：500 名富翁在纽约大都会俱乐部
- **1983 年伯克希尔年报**：阐述"所有者导向原则"
- **罗克福德银行**：巴菲特被迫卖掉（银行控股公司法案）
- **2008 信用违约互换 CDS**：投入 40 亿美元，最荒唐的事情
- **B 夫人内布拉斯加家具城、波珊珠宝店**：大学生参观的圣地
- **佐治亚理工学院演讲**："人生的目标就是……最大限度地争取自己受人爱戴"

## 金句

> 复利这一伟大的发动机像奴仆一样正在为他的财富辛勤劳作着。

> 没有人像伯克希尔·哈撒韦的股东那样认为公司 CEO 就是自己的良师益友。

> 我很早就开始滚雪球了。如果起步晚了 10 年，就完全没有现在这样站在山顶看风景的优势。

> 别人恐慌的时候贪婪，别人贪婪的时候恐慌，但切勿企图智取市场。

> 人生的目标就是，在你期望得到关爱的人们中间最大限度地争取自己受人爱戴。

> 只有找对了雪地才可以滚雪球……我们要争取做一个受欢迎的人，其实就是让自己的雪球在雪地上越滚越大。

> 没有人可以预测准股市。长期配置，就是要勇敢去投资，在低迷的岁月。

## 适用场景

- ✅ 价值投资 / 长线持有
- ✅ 长期复利的复利效应（10+ 年）
- ✅ 早期储蓄/投资的起步者
- ✅ 资产配置层面的稳健派
- ❌ 短线 / 高频交易
- ❌ 危机中的杠杆豪赌
- ❌ 在错误的时间高买低卖

## 关联阅读

- 与本批《江平投资准则》形成"价值派 vs 华尔街"对照
- 与本批《丁一熊两次股灾》《裘国根成长股接力》形成"长线派的多种表达"

## 与其他游资/人物的对比/呼应

| 维度 | 巴菲特 | 裘国根 | 江平 |
|------|--------|--------|------|
| 持仓周期 | 永久持有 | 中长线 + 接力 | 长线 + 灵活 |
| 标的选择 | 价值低估 + 安全边际 | 价值低估 + 高安全边际 | 价值+独创性发现 |
| 资金来源 | 伯克希尔保险浮存金 | 私募 | 华尔街 |
| 风控核心 | 内部记分卡 + 复利 | 流动性 + 安全边际 | 死守不战 + 平衡 |

---

*笔记来源：D 盘《滚雪球(下)》PDF（爱丽丝·施罗德著）*
*整理日期：2026-06-25*
`,oneLine:`**人生的目标就是，在你期望得到关爱的人们中间最大限度地争取自己受人爱戴。** 巴菲特一生的全部精力和热情都推动着自身智慧、性情和技能的不断完善。`,tags:[`价值投资`,`复利`,`人生哲学`]},{id:`P0_王元杰弱市操作`,title:`王元杰弱市操作`,category:`高手手记`,source:`P0`,filename:`实战笔记_王元杰弱市操作.md`,content:`# 实战笔记 · 王元杰（职业炒手）弱市操作与超短感悟

> 题材分类：弱市操作 / 隔日超短 / 百万以下最艰难
> 游资/作者：王元杰（职业炒手 / 王涛）
> 身份：1967 年生（推测）；老闽发高手；首届淘股吧百万实盘赛冠军；2011 年成立银帆私募
> 席位：西藏同信证券成都东大街
> 关联资料：参见 C 盘 \`职业炒手_深度研读报告.md\`（如有）
> 来源：D 盘《王元杰_弱市操作及超短感悟》

---

## 一句话定位

> **弱市不做。** 无论水平多高的短线炒手，只要做不到这一点，都逃脱不了亏损的命运。

## 核心观点

1. **短线炒手第一原则：弱市不做**：做不到这一点的都在亏钱
2. **80% 交易是隔日交易**：今天买，明天卖；做这种交易能生存下来的人太少了
3. **百万以下最艰难**：10 万到 100 万，淘汰 95% 以上的短线爱好者
4. **看对三日行情便可富可敌国**：隔日交易只要求看对两日走势
5. **盘后静态选股远比盘中动态选股要重要**：成功率更高
6. **从 10 万到 100 万耗时 10 年，从 100 万到 4000 万只用了 2 年**

## 弱市不做的具体含义

| 情况 | 操作 |
|------|------|
| 大盘下跌通道 | **不操作是最好的操作** |
| 上午买进动作 | 几乎都会失手 |
| 上升通道或强势市场 | 持股 2 天可能盈利 |
| 弱市被套 | 明天亏损可能 5% 而且不得不卖 |
| 抢反弹 | 风险甚至比补跌更大 |
| 强做 | 即使宁波解放南路的高手也一样亏钱 |

## 隔日超短的实操方法

> 行内有句名言：看对三日行情，便可富可敌国。隔日交易的基础只是看对两日走势就行。

- **80% 交易**：今天买、明天卖
- **隔日交易要看的两日**：
  - 当日大盘和目标个股走势
  - 次日大盘和目标个股走势
- **看对的基础上再追求做对**
- **超短线的计划性越来越重要**
- **过多的随意性操作 = 收益不稳定的主要因素**

## 百万以下最艰难的洞察

> 第一个 10 倍利润最难。这个阶段要淘汰 95% 以上的短线爱好者。

| 阶段 | 难度 | 时间跨度 | 案例 |
|------|------|----------|------|
| **10 万 → 100 万** | 最难（淘汰 95%） | 10 年 | 王元杰自己 |
| **100 万 → 4000 万** | 容易 | 2 年 | 王元杰自己 |
| **其他高手** | 厚积薄发 | 100 万以下时间更长 | "比他更厉害"的朋友 |
| **代表人物** | 3 年完成 10 倍 | 现在年轻人学得快 | 炒股养家 |
| **天才型** | 3 年完成 10 倍 | — | 小赵、林肯、just999、只做这些 |

## 风控逻辑

> 风险市场原则，知易行难。能做好这一条就已经不错了。

- **弱市不做 = 第一风控**
- **隔日交易 = 时间可控**
- **看对两日走势 = 概率优势**
- **计划性超短 = 减少随意性**
- **盘后静态选股 > 盘中动态选股**

## 关于大盘的定性

> 如果对市场定性准确然后再展开操作，那么失误就会很少了。

- **大盘正在下跌时期**：不操作是最好的操作
- **大盘在上升通道或较强市场**：短线被套问题不大
- **没有大环境的配合**：成功率会大大降低
- **大盘走势在下跌通道**：会让短线客防不胜防
- **必须对市场定性准确**，再展开操作

## 经典案例

- **个人战绩**：10 万 → 100 万用了 10 年 → 4000 万用了 2 年 → 2009 年震荡盘跌中每月 10% 盈利
- **首届淘股吧百万实盘赛冠军**：发起者
- **2011 年成立银帆私募**：基金经理
- **2015 牛熊转换**：判断准确 6 月股灾来临，但无法避免数次千股跌停
- **代表人物**：自己 + 炒股养家（论坛"现成例子"）+ 小赵/林肯/just999/只做这些（天才型）

## 金句

> 短线炒手第一原则——弱市不做。

> 隔日交易的基础只是看对两日走势就行，所以不会富可敌国，可以只能挣点小钱。

> 过多的随意性操作是隔日交易收益不稳定的主要因素，因此超短线的计划性越来越重要。

> 百万以下最艰难（一般指 10 万左右进场的起点），也可以理解第一个 10 倍利润最难。

> 一旦完成第一个 10 倍利润的积累（一定是要靠纯短线交易完成），后面就是一马平川，财富对你来说挡都挡不住。

> 在大盘正在下跌时期，不操作是最好的操作。

## 适用场景

- ✅ 强势市场的隔日超短
- ✅ 大盘上涨通道的短线操作
- ✅ 计划性的超短（盘后静态选股）
- ❌ 弱市/下跌通道（明确不做）
- ❌ 上午的买进动作（容易失手）
- ❌ 强做弱势（高水平也会亏）

## 关联阅读

- 与本批《令胡冲盘感训练》对照：令胡冲是"半路+打板"，职业炒手是"隔日超短"
- 与本批《孤独牛背婚礼演讲》形成"老闽发系 vs 雷神"对照
- 反面参考：本批《丁一熊熊市策略》——空仓派

## 与其他游资的对比/呼应

| 维度 | 职业炒手 | 令胡冲 | 孤独牛背 |
|------|----------|--------|----------|
| 介入 | 隔日开盘 | 半路/打板 | 快速第一板 |
| 持仓 | 1 天 | 最长 5 天 | 1-2 天 |
| 弱市态度 | 明确不做 | 放弃尾端 | 纪律为空仓 |
| 资金曲线 | 10 年 100 倍 | 1 年 16 倍 | 龙头龙头再龙头 |

---

*笔记来源：D 盘《王元杰_弱市操作及超短感悟》PDF*
*整理日期：2026-06-25*
`,oneLine:`**弱市不做。** 无论水平多高的短线炒手，只要做不到这一点，都逃脱不了亏损的命运。`,tags:[`弱市操作`,`隔日超短`,`百万以下最艰难`]},{id:`P0_看集合竞价`,title:`看集合竞价`,category:`集合竞价`,source:`P0`,filename:`实战笔记_看集合竞价.md`,content:`# 实战笔记 · 怎样看集合竞价

> 题材分类：集合竞价基础 / 庄家操盘逻辑 / 实操挂单
> 作者：未署名（基础教材类文章）
> 关联资料：参见本批《集合竞价奥义》《5 分钟筛选牛股》《集合竞价卖股》
> 来源：D 盘《怎样看集合竞价》

---

## 一句话定位

> **庄家操控股价是从集合竞价开始的。** 看集合竞价，要识别庄家是试盘、出货、还是洗盘。

## 核心观点

1. **集合竞价是一天股价运行的开始**：庄家某日要运作那只股票，一定会控制集合竞价
2. **庄家利用竞价的目的**：
   - 涨停开盘 → 让你买不到货
   - 跌停开盘 → 让你卖不出货
   - 高开大量出货 → 让你买在全天最高价
   - 低开洗盘 → 让你卖在全天最低价
3. **9:20-9:25 才是关键**：20 分之后不能撤单，反映真实博弈
4. **挂单要掌握价格优先 + 时间优先 + 数量优先**
5. **挂单价格公式**：
   - 10 元以下：开盘价 + 0.1 元
   - 10 元以上：开盘价 + 开盘价 × 0.015

## 集合竞价的几种状态

| 状态 | 表现 | 含义 |
|------|------|------|
| **竞价涨停** | 9:15 涨停后 9:20 扯掉 | 主力的两种可能：①吸引眼球派货；②试盘 |
| **涨停试盘** | 瑞泰科技 2009-3-5 | 撤单后回归正常，**当日拉升涨停** |
| **涨停大量出货** | 国投电力 2009-3-6 | 价格逐步走低，**成交量不断则增加** |
| **挂跌停试盘** | 神马实业（典型） | 9:18 11.99 有 1734 手 → 9:19 变 54 手，跌幅 7.65% |
| **低开走高** | 持有或低点买进 | — |
| **低开走低** | 及时回避风险 | — |

## 集合竞价的成交价格确定原则

1. **可实现最大成交量的价格**
2. **高于该价格的买入申报与低于该价格的卖出申报全部成交的价格**
3. **与该价格相同的买方或卖方至少有一方全部成交的价格**
4. 两个以上价格符合上述条件时，**使未成交量最小的申报价格**为成交价格
5. 仍有两个以上时，**其中间价**为成交价格

## 关键时间节点

| 时段 | 规则 | 操作建议 |
|------|------|----------|
| 9:15-9:20 | 可挂单、可撤单 | 主力的"表演时间"，**不要被诱多诱空** |
| 9:20-9:25 | 只能挂单、不能撤单 | **核心观察窗口** |
| 9:25-9:30 | 不能挂单、不能撤单 | 等待开盘 |
| 9:30 | 撮合完成 | 开盘价形成 |

## 10 条挂单技巧

| 条件 | 操作 |
|------|------|
| 1. 开盘前 | 将可能上涨的个股选入自选股（特别是大证券报推荐） |
| 2. 开盘价出来后 | 判断大盘走势 |
| 3. 快速浏览个股 | 选出**首笔量大、量比大**的个股，记下代码 |
| 4. 复选 | 日/周 K 线技术指标支持上涨的个股 |
| 5. 开盘成交时 | 紧盯潜力股，看**量比放大、卖一卖二卖三三四位数大单** |
| 6. 连续大单上攻 | 立即打入**比卖三价格更高**的买入价 |
| 7. 一般情况 | 开盘上冲 10 多分钟后都有回档，看准买入 |
| 8. 经验不足 | 开盘 10-15 分钟后综合各种因素买入，更安全 |
| 9. 9:25 前委托 | 打一个比较高的价格，确保以开盘价成交 |
| 10. 10 元以下 | 开盘价 + 0.1 元；10 元以上：开盘价 × 1.5% 挂单 |

## 停牌与挂单规则

- **停牌 1 小时**（9:30-10:30）：不能挂单也不能撤单，集合竞价无效
- **10:30 开盘**：10:29:30 系统已打开
- **停牌前挂单**：10:29:20 挂涨停价买入 → 必须把握好时间
- **停牌期间不允许挂单**，但停牌前的挂单可以撤销

## 风控逻辑

- **识别 9:15-9:20 的诱多诱空**：庄家会在这期间挂大单引诱散户
- **不要轻易撤单**：9:20 后撤单失败的概率很大
- **大盘高位/下跌中**：使用上述挂单技巧很重要
- **新股操作**：强调纪律，做好计划，不能临时随意变化

## 经典案例

- **国投电力（2009-3-6）**：竞价涨停 → 大量出货典型
- **瑞泰科技（2009-3-5）**：竞价涨停 → 试盘 → 当日拉升涨停
- **神马实业（10-26）**：9:18 1734 手 → 9:19 54 手 → **典型诱多**，当日跌 7.65%

## 金句

> 集合竞价是一天股价运行的开始。

> 庄家某日要运作那只股票就一定会控制集合竞价的情况。

> 9:20 分之前扯掉涨停挂单，让股价和成交量回归正常的状态……说明庄家当日真的要拉升股价。

> 一定要清楚，现在的市场还是熊市。

> 一个股票符合自己的集合竞价条件时，如果你的单子能够在 9:25 以前委托成功，一般可以打一个比较高的价格，因为它会以开盘价成交。

> 集合竞价期间最好不要撤单，成功概率很小。

> 价格第一优先，时间第二优先，还有一个数量第三优先。

## 适用场景

- ✅ 早盘 9:15-9:25 的关键观察
- ✅ 强势股/涨停股的开盘判断
- ✅ 短线/超短的精准买入
- ✅ 大盘走势判断后的个股选择
- ❌ 9:15-9:20 的虚假挂单（要识别诱多诱空）
- ❌ 停牌期间挂单（无效）

## 关联阅读

- 本批《集合竞价奥义》（188 元文章）
- 本批《5 分钟筛选牛股》（早盘具体方法）
- 本批《集合竞价卖股》（卖股层面）

## 与其他游资的呼应

- **JOKER 皇**：本笔记是基础版，JOKER 皇的"188 元文章"是高级版
- **打板赚盒饭**（本批《孤独牛背控制回撤》）：所有打板操作的起点都是集合竞价
- **Asking**："竞价反应的是预期"——本笔记是系统化呈现

---

*笔记来源：D 盘《怎样看集合竞价》DOCX*
*整理日期：2026-06-25*
`,oneLine:`**庄家操控股价是从集合竞价开始的。** 看集合竞价，要识别庄家是试盘、出货、还是洗盘。`,tags:[`集合竞价基础`,`庄家操盘逻辑`,`实操挂单`]},{id:`P0_落升熊市盈利`,title:`落升熊市盈利`,category:`高手手记`,source:`P0`,filename:`实战笔记_落升熊市盈利.md`,content:`# 实战笔记 · 落升熊市盈利技巧（江南神鹰）

> 题材分类：熊市反弹 / 乖离率 / 短线纪律
> 游资/作者：落升（江南神鹰）
> 身份：生于 1968 年 8 月，2000 年入市；2003 年熊市中的"明星"；2006-2009 隐居 3 年狂赚 112 倍
> 席位：光大证券金华宾虹路、光大证券金华双溪西路
> 关联资料：参见本批《丁一熊熊市策略》《JOKER 皇打板逻辑》
> 来源：D 盘《民间股神之落升的熊市盈利技巧》

---

## 一句话定位

> **不轻言底部，不抄底，只做超跌抢反弹。** 用乖离率量化"该抢了"和"该跑了"。

## 核心观点

1. **不预测底，不抄底**：熊市盈利模式是顺势而为，只做超跌抢反弹。
2. **向"左"看齐卖出**：前期重要高点附近卖出股票，空仓等待。
3. **有效跌破颈线位 = 进入熊市**：坚决止损离场，从此按熊市模式操作。
4. **乖离率量化入场/出场点**：6 日 -6% / 12 日 -10% / 24 日 -16% 进场，24 日接近 0 时卖出。
5. **快进快出纪律**：打得赢就打，打不赢就跑；错了坚决止损。
6. **降低获利目标**：熊市风险大机会少，要多忍少盲动。

## 熊市操作步骤（两阶段）

\`\`\`
第一阶段：向"左"看齐
   前期重要高点附近 → 卖出 → 空仓
   跌到颈线附近 → 重新入场（试错）

第二阶段：跌破颈线 → 彻底进入熊市模式
   乖离率达到入场阈值 → 抢反弹
   乖离率回归 0 → 卖出
   错了 → 坚决止损
\`\`\`

## 乖离率入场/出场标准

| 指标 | 入场阈值 | 出场信号 |
|------|----------|----------|
| 6 日乖离率 | -6% 以下 | 反弹至 -3% 附近 |
| 12 日乖离率 | -10% 以下 | 反弹至 -5% 附近 |
| 24 日乖离率 | -16% 以下 | **接近 0 时卖出** |

## 风控逻辑

- **不抄底**：不预测底部在哪个点位，**只做超跌抢反弹**
- **不持股过长**：超跌抢反弹的标的就是超跌反弹，不是反转
- **别把短线做成长线**：错了要止损，不允许"先等等看"
- **多忍少盲动**：熊市机会少、风险大，降低获利目标

## 经典案例 / 战绩

- **2003 年熊市**：因股评一夜点击量过万的"明星"
- **2006-2009 隐居江南小城**：3 年狂赚 112 倍，资产与大盘走势完全背离的"喇叭口"曲线
- 2008-2009 熊市中提前布局的板块：农业、创投、迪士尼、奥运、基建、新能源——**几乎所有主流热点都在启动之初介入**

## 金句

> 顺势而为，不轻言底部，不抄底，只做超跌抢反弹。

> 抢反弹要快进快出，打得赢就打，打不赢就跑。

> 错了要坚决止损，千万不要短线做成中线，中线做成长线。

> 熊市风险很大，机会较少，要多忍，少盲动。

## 适用场景

- ✅ 大盘颈线破位后的熊市
- ✅ 乖离率超跌到 -10% 以下的抢反弹
- ✅ 主流热点启动初期的提前布局
- ❌ 牛市主升（应满仓做龙头）
- ❌ 抄底摸底（落升明确反对）
- ❌ 把反弹单做成持仓单

## 关联阅读

- 熊市节奏可对比本批《丁一熊熊市策略》（空仓派）
- 抢反弹工具与本批《JOKER 皇打板逻辑》中的"烂板排版"互补

## 与其他游资的对比/呼应

| 维度 | 落升（技术反弹派） | 丁一熊（空仓派） | 裘国根（价值派） |
|------|------------------|----------------|----------------|
| 熊市态度 | 控仓做反弹 | 主动空仓 | 保持在场 |
| 入场标准 | 乖离率量化 | 不入场 | 估值合理 |
| 出场标准 | 乖离率回归 0 | 趋势破位即出 | 达到预期收益 |
| 持仓周期 | 数日 | 0 | 数月-数年 |
| 节奏 | 量化纪律 | 心态节制 | 资产配置 |

---

*笔记来源：D 盘《民间股神之落升的熊市盈利技巧》PDF*
*整理日期：2026-06-25*
`,oneLine:`**不轻言底部，不抄底，只做超跌抢反弹。** 用乖离率量化"该抢了"和"该跑了"。`,tags:[`熊市反弹`,`乖离率`,`短线纪律`,`熊市`]},{id:`P0_集合竞价卖股`,title:`集合竞价卖股`,category:`集合竞价`,source:`P0`,filename:`实战笔记_集合竞价卖股.md`,content:`# 实战笔记 · 集合竞价卖股：勇气和果断是核心要素

> 题材分类：集合竞价卖股 / 黑天鹅应对 / 虎口脱险
> 游资/作者：邢者
> 身份：2015 股灾亲历者；2016.11 廊坊发展满仓复牌当天清仓
> 关联资料：参见本批《看集合竞价》《集合竞价奥义》《5 分钟筛选牛股》
> 来源：D 盘《集合竞价卖股：勇气和果断是最核心的要素》

---

## 一句话定位

> **集合竞价卖股比买股简单，难在你操作的那一刹那是否具备了勇气和果敢。** 如果没有，请返回上文，慢慢体会吧。

## 核心观点

1. **集合竞价卖股 = 虎口脱险**：躲避黑天鹅到来的救命招数
2. **3 种典型需要卖股的情况**：
   - 大盘极端行情
   - 遭遇黑天鹅
   - 强势股的盘中跌停预兆
3. **挂跌停价也无所谓**：最终成交价是开盘价，不是你委托的跌停价
4. **要果断预判 + 提前挂单**：9.25 之前输入比竞价还低的价格
5. **30% 翻红率是统计结果**：做 10 次对 7 次就是成功

## 集合竞价卖股的信号

> 1、集合竞价期间，股价逐步下跌，最后 1 分钟，股价被大卖单快速打压。

| 条件 | 描述 |
|------|------|
| 1. 价格 | 最后 1 分钟，股价被大卖单快速打压 |
| 2. 量能 | 9.20 后成交量逐渐缓慢放大，绿柱子连续排列 |
| 3. 巨单 | 9.20 后有巨单挂过跌停板 |
| 4. 价格变化 | 9.24 最后几秒价格下降严重，跌幅从 2-1% → 4-3% |
| 5. 成交量 | 涨幅 10-9% → 6-3% → 最后 1 分钟涨幅 < 1% |
| 6. 终量 | 竞价的最终成交量**在万手以上** |

## 心理准备与操作纪律

> 选择竞价卖股，要有很强的心理素质，在开盘前 5 分钟时间里，你要果断预判这个价格应该是当日的最高价。

- **果断预判** = 这个价格是当日最高价
- **9.25 之前输入比竞价还低的价格**：确保成交
- **犹豫不决是大忌**："有的人总在卖点上犹豫不决"
- **挂跌停价也无所谓**：
  - 竞价规则：按价格优先、时间优先
  - 同一价格原则按申报先后顺序排列
  - 即使挂跌停价，**最终成交价是开盘价**

## 3 种典型需要卖股的情况

### 情况 1：大盘极端行情

> 2015 年股灾的时候，邢者当时也是结结实实的吃到了一个满仓跌停。

- **当晚分析研判**：大势已去
- **次日集合竞价全部卖出**：逃过股灾的一劫
- **"用此发，救我一条老命"**

### 情况 2：遭遇黑天鹅

> 但凡遇到这种情况，第一件事就是从被窝里爬起来。

- **打开炒股交易软件** → 夜市委托
- **跌停挂单**：跌停价在次日集合竞价时间报送给交易所
- **还要看营业部通道速度**：速度不行，挂跌停价也难卖出

### 情况 3：强势股的盘中跌停

> 比如今天四通股份的开盘，作为被关复牌的股票……

- **复牌股票的开盘价**：基本就能判断出全天走势方向
- **开盘 -3% 以上**：弱势信号
- **集合竞价卖股没错**：即使卖出后盘中反弹拉红，也不用后悔
- **盘中翻红率 < 30%**：做 10 次对 7 次就是成功

## 经典案例

### 案例 1：四通股份（被关复牌）

- 集合竞价表现尤其重要
- 开盘在 -3% 以上 → 弱势信号
- 集合竞价卖股没有错误
- 即使卖出后盘中反弹拉红，也不用后悔

### 案例 2：廊坊发展（2016.11.07）

- **满仓廊坊发展一只股**
- 11 月 7 日复牌
- **集合竞价中就判断出由强转弱的拐点到来**
- **连续涨停之路就要结束**
- **开盘瞬间填了一个比现价更低的价格** → 全部成交
- **如果晚 1 分钟，股价接回跌停，几十万利润灰飞烟灭**

### 案例 3：太阳鸟

- 邢者 9:25 挂单卖出
- 挂单价格 21.6，**比开盘价还低 1 毛**
- 委托价比开盘价低 → 开盘瞬间成交
- 因为开盘前几秒钟会有大单互杀，成交更容易
- 已在高手日志公号说明卖出理由

## 选股/择时

- **9:20 后的真实信号**：集合竞价卖股的真信号
- **30% 翻红率**：统计概念，不必追求完美
- **强势股复牌的开盘价 = 全天走向**：用开盘价做判断

## 风控逻辑

> 集合竞价卖股难就难在，你操作的那一刹那，是否具备了勇气和果敢？

- **没有勇气和果敢 = 卖不到好价格**
- **挂跌停价也无所谓**：规则决定不会以跌停价成交
- **果断预判**：开盘前 5 分钟就要做决定
- **复牌股票开盘价 = 全天走向**：直接卖
- **黑天鹅 = 爬起来挂跌停**：不要等到开盘

## 金句

> 集合竞价买股是为了在强势股开盘前搭上车，而集合竞价卖股，邢者认为更多是为了躲避黑天鹅到来。

> 选择竞价卖股，要有很强的心理素质，在开盘前 5 分钟时间里，你要果断预判这个价格应该是当日的最高价。

> 有的人总在卖点上犹豫不决，其实，即使你挂跌停价也无所谓。

> 但凡遇到这种情况，第一件事就是从被窝里爬起来，打开炒股交易软件，夜市委托，跌停挂单。

> 集合竞价卖股不难，至少要比集合竞价买股简单很多。

> 竞价卖股难就难在，你操作的那一刹那，是否具备了勇气和果敢？

## 适用场景

- ✅ 大盘极端行情（次日竞价清仓）
- ✅ 黑天鹅利空（夜市委托跌停）
- ✅ 强势股复牌走弱
- ✅ 由强转弱拐点（开盘瞬间卖）
- ❌ 犹豫不决的卖点
- ❌ 期待反弹的"等等看"
- ❌ 不开夜市委托的散户

## 关联阅读

- 集合竞价原理：参见本批《看集合竞价》《集合竞价奥义》
- 5 分钟筛选：参见本批《5 分钟筛选牛股》

## 与其他游资的呼应

- **JOKER 皇**：本笔记是"卖股奥义"，JOKER 皇的"188 元文章"是"买股奥义"
- **Asking**：不涨停即出 = 集合竞价卖股的简化版
- **令胡冲**：放弃尾端 = 集合竞价卖股的纪律版
- **养家**：崩溃后清仓 = 大盘极端行情的集合竞价清仓

---

*笔记来源：D 盘《集合竞价卖股：勇气和果断是最核心的要素》DOCX*
*整理日期：2026-06-25*
`,oneLine:`**集合竞价卖股比买股简单，难在你操作的那一刹那是否具备了勇气和果敢。** 如果没有，请返回上文，慢慢体会吧。`,tags:[`集合竞价卖股`,`黑天鹅应对`,`虎口脱险`]},{id:`P0_集合竞价奥义`,title:`集合竞价奥义`,category:`集合竞价`,source:`P0`,filename:`实战笔记_集合竞价奥义.md`,content:`# 实战笔记 · 集合竞价的奥义（188 元文章）

> 题材分类：集合竞价 / 早盘买入 / 卖股艺术
> 游资/作者：JOKER 皇（早期作品，188 元文章）
> 身份：早期作品，作者完整方法论参见本批《JOKER 皇打板逻辑》
> 关联资料：参见本批《JOKER 皇打板逻辑》《看集合竞价》《5 分钟筛选牛股》《集合竞价卖股》
> 来源：D 盘《188 元文章—集合竞价的奥义》

---

## 一句话定位

> **全天看早盘，早盘看竞价。** 一只股的集合竞价隐藏了太多秘密，甚至可以直接决定这个股当天的走势、是否涨停。

## 核心观点

1. **竞价反应的是预期**：集合竞价可以预判早盘甚至全天的走势。
2. **9:20-9:25 才是真信号**：之前可以撤单，9:20 后不能撤单，**这段时间的买卖才真实**。
3. **隔夜委托的应用**：晚上找出有消息或复牌股票，挂涨停价排单；9:15 后利用排单靠前优势。
4. **竞价不符合预期的卖出情况**：
   - 低开：早盘低开原因主要是隔日消息不好或指数低开带动
   - 异常低开：涨停板开版的第二天、放量出货的第二天、翘跌停板这种当天振幅 15% 的第二天
   - "**竞价已经表面了接下来的走势，所以开盘甩卖无疑**"
5. **竞价超预期会带来涨停板**：观察竞价后开盘买入可获得远超打板的利润。

## 集合竞价的几个时间节点

| 时段 | 规则 | 操作 |
|------|------|------|
| 9:15-9:20 | 可挂单、可撤单 | 主力的"诱多诱空"时间 |
| 9:20-9:25 | 只能挂单、不能撤单 | **核心观察窗口** |
| 9:25-9:30 | 不能挂单、不能撤单 | 等待开盘 |
| 9:30 | 正式开盘 | 集合竞价撮合完成 |

## 集合竞价的两种典型情况

| 类型 | 表现 | 含义 |
|------|------|------|
| **竞价涨停板** | 一开始涨停后回归正常 | 主力试盘，可能拉升 |
| **竞价低开** | 比预期大幅低开 | 主力出货或情绪恐慌，开盘即卖 |

## 关键操作：开盘后分时应对

> 如果更高级一点的，比如发现指数是有上拉趋势，个股可能会先上再下，那么可以等一下，观察盘口情况。

**新海股份案例**：
- 8 月 1 日高开低走一段、振幅很小
- 早盘竞价 -4 个点（异常，正常应是 -1）
- 表面开盘还会继续下挫 → 一般情况开盘就卖出
- 盘口都是大单恐慌砸、小单买 → 小拉升时全部砸出

## 短线超预期案例（竞价 = 强买入信号）

| 股票 | 情况 | 表现 | 结果 |
|------|------|------|------|
| **特力 A（2015.10.13）** | 全天封死跌停尾盘撬板 | 14 日早盘买盘直接拉红盘 | 买盘极强 |
| **兔宝宝（2015.10.19）** | 复牌跌停撬板，22% 获利盘巨大 | 第二天集合竞价大幅高开 | 无视抛盘 |
| **华源包装（2016.01.18-19）** | 撬板后大幅波动 | 19 日竞价承接住获利盘、挂单价高 | 30 分钟开盘价即可买入 |
| **光华科技（02.26）** | 缩量涨停 | 第二天本应高开但大幅低开 | 开盘甩卖（缩量涨停后的大跌） |

## 风控逻辑

- **竞价反映预期**：早盘低开 → 还会继续下挫
- **缩量涨停第二天大幅低开**：大盘下跌趋势下强势股补跌
- **盘中判断"是出货还是洗盘"**：
  - 出货：倾斜向下 45 度角
  - 洗盘：股价围绕均线做 2% 幅度的锯齿型波动
- **竞价超预期的关键**：
  - 成交量大（承接住昨天大量获利盘）
  - 挂单价高（如翘板后第二天低开 -3 是正常，超预期应高于此）

## 经典案例

- **新海股份**（8.1 高开低走）→ 竞价 -4% 异常 → 开盘即卖
- **光华科技**（02.26）→ 缩量涨停 → 第二天大幅低开 → 开盘甩卖
- **华源包装**（01.18-19）→ 撬板后 19 日竞价超预期 → 30 分钟开盘价买入
- **特力 A**（10.13-14）→ 跌停撬板 → 第二天买盘强拉红盘
- **兔宝宝**（10.19-20）→ 复牌跌停撬板 → 第二天大幅高开

## 金句

> 全天看早盘，早盘看竞价。

> 既然知道了这个前提，那么我们就可以从竞价预判早盘的走势，因为低开代表的情绪的恐慌，这种低开代表着还会继续下挫。

> 竞价已经表面了接下来的走势，所以开盘甩卖无疑。

> 这里可以看出，竞价的超预期通常都可以带来拉升至涨停板，这里观察竞价后开盘买入可以获得远超打板的利润。

> 隔夜委托：晚上找出有消息或者复牌股票，判断出预期有可能涨停的股，挂涨停价去排。

## 适用场景

- ✅ 当日操作的预判（早盘就能定型）
- ✅ 撬板/复牌/利好的次日判断
- ✅ 缩量涨停的次日开盘判断
- ✅ 隔夜委托的排单机会
- ❌ 9:15-9:20 的诱多诱空（要识别主力的"表演"）
- ❌ 9:20 后再委托（交易所已不接）

## 关联阅读

- 买股层面：本批《5 分钟筛选牛股》
- 卖股层面：本批《集合竞价卖股》《看集合竞价》
- 排板层板：本批《JOKER 皇打板逻辑》

## 与其他游资的呼应

- **JOKER 皇**（同一作者）：本批 188 元文章是 JOKER 皇的早期作品
- **Asking / 令胡冲**：竞价决定开盘与 Asking"开盘半小时的板"形成互补
- **炒股养家**："竞价反应的是预期"和养家的"市场情绪揣摩"维度相通

---

*笔记来源：D 盘《188 元文章—集合竞价的奥义》PDF*
*整理日期：2026-06-25*
`,oneLine:`**全天看早盘，早盘看竞价。** 一只股的集合竞价隐藏了太多秘密，甚至可以直接决定这个股当天的走势、是否涨停。`,tags:[`集合竞价`,`早盘买入`,`卖股艺术`]},{id:`P1P2_Asking_理念`,title:`Asking_理念`,category:`顶级游资心法`,source:`P1P2`,filename:`实战笔记_Asking_理念.md`,content:`# 实战笔记 · Asking 理念借鉴总结（P1P2 增补）

> 题材分类：龙头战法 / 追涨 / 守株待兔
> 游资：邱宝裕（Asking）
> 席位：兴业证券福州湖东路（新大陆第二波推手，进入十大股东）
> 关联游资/ID：cdrr（成都马家花园）、职业炒手（成都）、荣展、张扬◎、鱼鹰、禅心一念
> 关联资料：P0《实战笔记_Asking理念总结》、P0《实战笔记_养家心法》、P0《实战笔记_打板手法系统》
> 来源：D 盘《Asking 理念总结》

---

## 一句话定位

> **等待、发现、跟随。** 选股是决定性前提，但选股不是全部——跟随才是最次要的买入动作。本份 PDF 在 P0 基础上补充了"朋友圈/席位对照"视角。

## 核心观点（5-8 条）

1. **对市场的理解力** = 等待（绝对耐心）+ 发现（经验确认）+ 跟随（最次要的买入）。
2. **下决心的决断力**：龙头战法需要"临阵时的果敢和勇气"，技术上没有秘诀。
3. **只做超强势股追涨和守株待兔**：仓位管理必不可少，否则会坐电梯。
4. **人弃我取，人取我予**：99% 的人会去接"红岭路"那种恐慌盘，**正宗的短线不接别人恐慌盘**。
5. **赚钱效应的本质**：一个市场出现多只连续涨停股时，只有涨停次数最多的那只冲击力最强。
6. **研究交易环境 > 研究个股**：研究宁波解放南路的交易环境比研究他做的个股重要得多。
7. **招式需要一年牛熊反复验证**：任何一招未经本人反复实盘验证的，都不算真正掌握。
8. **深挖一两招**：几招都有阶段性能盈利，但能稳定向上走的"那一两招"才是真本领。

## 仓位管理铁律

| 场景 | 仓位动作 |
|------|----------|
| 确认追涨 | 先进**半仓** |
| 当天涨停 | 次日继续加仓到**全仓** |
| 当天不涨停 | 次日择高先出 → 等回调做"守株待兔" |
| 守株待兔 | 先**半仓**，获利后出局不加仓 |
| 失利 | **止损且不加仓** |
| 启动重仓条件 | **只有半仓股票迅速盈利时**，才能动用另半仓资金 |

## 选股方法

- **做超强势股 ≠ 做龙头**：Asking 自述他和职业炒手找的才是"龙头"，荣展做的只是超强势股。
- **熊市转势初期**：睁大眼睛等待最强股出现，**闭着眼睛进入**。
- **做超短 = 不参与任何性质整理**：哪怕是下跌通道的小反抽，买了就为马上挣钱。
- **次新股东大阿派**：Asking 96 年上市就买，隔年高位卖掉赚 4 倍多 → 此次"中线尝试"教训他转向超短。
- **新大陆第二波**：Asking 推手并进入十大股东 → "不可复制的传奇人物"。

## 龙头与超强势股的差异

| 维度 | 龙头 | 超强势股 |
|------|------|----------|
| 出现时机 | 大盘转势初期 | 任何时候 |
| 数量 | 1 年 1-2 次可赚大钱 | 持续存在 |
| 操作 | 追涨 + 守株待兔 | 主要追涨 |
| 风险 | 与大盘共振，风险小 | 单独性，风险大 |
| 形态 | 大阳线涨停（不是小气涨停） | 小气涨停/无量拉升 |

## 风控逻辑

> 我不能确认每一次大盘是否能继续向上，所以就挑最强的股票上。

- 大盘向好 → 最强股继续大幅向上（吃肉）
- 大盘不行 → 最强股通常还能横几天（有机会退出）
- **风控靠选股，不靠择时**——这是 Asking 的核心。
- **守住不放大亏**：大盘有问题时高位大幅减仓，盈亏比管理即可。
- **只铁书 / 青木 / 孙成钢 / 唐能通**：看其书取其意，但"依样画葫芦会死得很惨"。

## 经典案例

- **5.19 行情至 2006.7.23**：Asking 资金从 10 几万（借的，一分半利息）→ 几千万，成交量从两三百万 → 7-8 个亿。
- **2003 下半年龙头**：**600073**；同期 **000920** 只能叫超强势股。
- **2004.9 龙头**：**600645**、**000503**。
- **2004.10 守株待兔**：**000503**、**600399**。
- **2004.11 守株待兔**：任何有两个大阳线以上涨停的标的。
- **新大陆（000997）第二波**：Asking 推手 → 进入十大股东。
- **新大陆阿派（600718）**：96 年上市即买，97 年高位卖掉赚 4 倍多。

## 朋友圈与席位对照

| ID / 席位 | 风格 | 与 Asking 的呼应 |
|-----------|------|------------------|
| **cdrr**（中信建投成都马家花园） | 顺势/对"势"的理解 | "宁波解放南路是发掘和引导"——cdrr 属"发现和跟随" |
| **职业炒手**（成都南一环路） | 龙头战法 | "与本人如出一辙，都是背过只铁书的" |
| **荣展** | 强调空仓风险 | "介入的龙头与本人所选方法并不一样"——但空仓心态一致 |
| **张扬◎** | 注重成交量过程 | 龙头战法其本人"很少讲" |
| **鱼鹰** | 超短线/守株待兔共振 | "5.19 到现在 2006.7.23 资金 10几万→几千万" |
| **禅心一念** | 守株待兔使用者 | 2004.10 实战 000503/600399 |
| **赵笑云** | 尾市买第二天卖 | 96 年上证报比赛第一（陶永根第一，赵笑云第二） |
| **陶永根** | 尾市买第二天卖 | Asking "做超短从陶永根处得到启发" |

## 金句

> 等待，需要绝对的耐心；发现，需要经验来确认；跟随，则是最次要的买入动作了。

> 龙头需要技术吗，不需要，要的是临阵时的果敢和勇气。

> 一般的资金只是发现和跟随，宁波解放南路是发掘和引导，技术含量要高得多。

> 当一个市场出现好几个连续涨停的股票时……只有涨停次数最多的那只冲击力才会最强。

> 我和一些朋友经常交流交易方法。谈到深圳红岭路这种专门接别人恐慌盘的做法……总认为这种交易方式的性质属于偏门或叫旁门。

> 龙头的涨停从来都是大阳线而不是小气的涨停开盘式，因为它有足够的心胸让所有跟它的人赚钱。

> 这句话才是炒股的最精华之处——任何一招未经过本人反反复复在一年当中多种周期情况下都实盘尝试过的，都不可能为其本人真正掌握。

> 十分里边，心态，控制力占 7 分，技术占 3 分。

## 适用场景

- ✅ 大盘转势初期的领涨股
- ✅ 板块龙头 / 人气股
- ✅ 强势行情中的最强股
- ❌ 弱势/下跌通道（Asking 明确不参与任何调整）
- ❌ 接恐慌盘的红岭路模式（Asking 明确反对）
- ❌ 期货 / 股指期货（Asking 多次强调"以后打死也不去做期货"）

## 关联阅读

- P0《实战笔记_Asking理念总结》——基础版（含 5 大核心观点 + 仓位铁律）
- P0《实战笔记_养家心法》——"等待/发现/跟随"与养家"得散户心者得天下"互补
- P0《实战笔记_打板手法系统》——操作层（追涨/打板/守株待兔的技术拆解）
- P0《实战笔记_抓妖股概率》——龙头连板概率统计与 Asking"龙头一年 1-2 次"形成数据印证
- C 盘 \`ASKING心法_深度研读报告.md\`（邱宝裕深度研读）

## 与其他游资的呼应

- **职业炒手（成都）**：龙头战法共振——"与本人如出一辙"。
- **炒股养家**：都强调"等待"和"最强股"，但养家多了"情绪周期"维度。
- **赵老哥 / 章盟主**：同样以打板/龙头为核心，但风格更激进。
- **荣展**：Asking 说"荣展做的只是超强势股，并非真正的龙头"——但空仓心态一致。
- **赵老哥 / 孙哥**：与 cdrr 席位不属同派系，但同为"发现跟随"型。
- **cdrr**：是本份 PDF 中"研究势"派的代表，强调顺势而非发动引导。

---

*整理日期：2026-06-25*
*来源：Asking理念总结.pdf*
`,oneLine:`**等待、发现、跟随。** 选股是决定性前提，但选股不是全部——跟随才是最次要的买入动作。本份 PDF 在 P0 基础上补充了"朋友圈/席位对照"视角。`,tags:[`龙头战法`,`追涨`,`守株待兔`]},{id:`P1P2_Ballcap_手记`,title:`Ballcap_手记`,category:`高手手记`,source:`P1P2`,filename:`实战笔记_Ballcap_手记.md`,content:`# 实战笔记 · Ballcap 再战杯之旅（非职业股民的成长记录）

> 题材分类：再战杯实盘赛 / 非职业股民成长 / 短线交易
> 游资/作者：ballcap（淘股吧 ID，2007 年底入市）
> 风格特征：非职业股民自我定位，4 届再战杯完整记录（10-14 届），坚持参赛不 ST
> 关联资料：P0《实战笔记_令胡冲_盘感训练》、P1P2《实战笔记_令胡冲_50万至800万成长之路》
> 来源：D 盘《Ballcap 手记》PDF（2018.06.15 增补）
> ⚠️ **内容有截断，详见原始文件**（32.2MB 大文件，仅取前 50% 内容）

---

## 一句话定位

> **一个非职业股民的再战杯之旅——坚持参赛不 ST、不退赛，把握住财富积累的圣杯。**

## 核心观点

1. **2007 年底牛尾巴入市**："受人鼓惑"入市，经历了一番惨痛——这是大多数普通股民的起点。
2. **2011 年开始做短线**，年底听人介绍注册淘股吧账号，以"菜鸟"身份报名参加第十届再战杯。
3. **4 届比赛"有得有失"**：第 10 届到第 14 届，每一届都坚持参加，没被 ST，也没中途退赛。
4. **资金稳定快速成长**是终极目标——ballcap 自述"寄望今后资金稳定快速成长，把握住财富积累的圣杯"。
5. **自我定位"非职业股民"**——不与职业选手比绝对收益，比的是"坚持 + 不犯大错"。

## 4 届再战杯成绩单

| 届次 | 时间 | 初始资产 | 最终资产 | 累计收益率 | 最终排名 | 备注 |
|------|------|----------|----------|------------|----------|------|
| 第 10 届 | 2013 之前 | 294,722 | 252,489 | **-14.33%** | 53/57 | 排名倒数第 2-10 名游荡 |
| 第 11 届 | 2012.4.1-6.30 | 250,000 | 254,441 | **+1.78%** | 47 | 总冠军"消失的神话补图"+76.33% |
| 第 12 届 | 2012.7.1-9.30 | - | - | 结束前一周排名 20 | - | 总冠军"面向海风"+41.34% |
| 第 13-14 届 | 2012-2013 | - | - | - | - | "至今是第十四届" |

### 第十届再战杯高手榜（前 5 名）

| 排名 | 选手 | 初始资产 | 累计收益率 | 最高收益率 |
|------|------|----------|------------|------------|
| 1（总冠军） | scud021 | 354,359 | **+39.41%** | 50.26% |
| 2（亚军） | 吾知讲乜 | 1,199,709 | +30.12% | 39.25% |
| 3（季军） | xiandai | 96,561 | +29.92% | 50.32% |
| 4 | 股海来德 | 160,953 | +21.96% | 30.32% |
| 5 | 动力牛 | 218,438 | +18.91% | 18.91% |

**对比 ballcap 第 10 届**：初始 294,722 → 252,489，**-14.33%**，排名 53/57，险些被淘汰。

### 第十一届再战杯高手榜（前 5 名）

| 排名 | 选手 | 初始资产 | 累计收益率 | 最高收益率 |
|------|------|----------|------------|------------|
| 1（冠军） | 消失的神话补图 | 59,476 | **+76.33%** | 90.53% |
| 2 | 其名为鲲 | 29,269 | +61.00% | 73.02% |
| 3 | 无锋上剑 | 157,287 | +42.52% | 57.36% |
| 4 | 南山大道 | 725,355 | +33.56% | 40.29% |
| 5 | 最浪请假 | 122,792 | +28.96% | 38.91% |

**对比 ballcap 第 11 届**：初始 250,000 → 254,441，**+1.78%**，排名 47（中等偏下），守住了"不 ST"底线。

## 仓位管理 / 操作节奏

| 操作风格 | 具体动作 |
|----------|----------|
| 比赛期间仓位 | 第 11 届统计中 100% 仓位选手占多数（消失的神话 100%、其名为鲲 100%、南山大道 100%） |
| ballcap 自身节奏 | 排名"倒数第 2 到第 10 名之间游荡"——低仓位试探 |
| 守住的底线 | **没被 ST，没退赛**——这是再战杯实盘赛中"非职业选手"能存活的关键 |
| 第 12 届 | "结束前一周排名 20"——表明第 12 届成绩明显好转 |

## 选股方法 / 风控逻辑

- **不 ST 的核心**：不重仓单一黑天鹅股（不踩雷）。
- **不退出比赛的核心**：仓位不过度集中，回撤可控。
- **坚持参赛的意义**：积累实盘经验 + 锻炼心态 + 跟踪高手（scud021/消失的神话补图等）。

## 经典案例

### 案例 1：第 10 届 ballcap 自己（-14.33%）

- 初始资产 294,722 → 最终 252,489
- 排名 53/57（第 53 名）
- 当日收益率 1.00%，最高收益率 0.00%
- 同期上证指数 +2.88%，跑输大盘 17.21 个百分点

### 案例 2：第 10 届总冠军 scud021

- 初始 354,359 → 最终 493,999
- 累计 +39.41%，最高 50.26%
- 当日 +4.69%，强势封板能力

### 案例 3：第 11 届冠军"消失的神话补图"

- 初始 59,476 → 最终 104,871
- 累计 +76.33%，最高 90.53%
- 100% 仓位 + 当日 +0.53%——"满仓涨停"型选手

### 案例 4：第 11 届"无锋上剑"

- 初始 157,287 → 最终 218,325
- 累计 +42.52%，最高 57.36%
- 0% 仓位（即比赛最后一天已空仓），保留胜利果实

### 案例 5：第 12 届总冠军"面向海风"+41.34%

- 同样在弱势市场中逆势获利

## 金句

> 一个非职业股民的再战杯之旅——记录与寄望。

> 2007 年底牛尾巴的时候受人鼓惑入市，经历了一番惨痛。

> 总算是坚持下来了，没被 ST，也没退赛。

> 之后每一届都坚持参加了，而且一直没被 ST，一直没中途退赛。

> 至今是第十四届了。又差不多快过年了。回顾过去一年多，4 届比赛，有得有失，也不想再感慨什么。

> 唯以此贴，做个小结，更多的，寄望今后资金稳定快速成长，把握住财富积累的圣杯。

## 适用场景

- **普通股民 / 非职业股民**的实盘赛自我定位参考。
- **再战杯、百万杯、实盘争先赛**参赛者的心态管理范本。
- **短线交易成长曲线**典型样本：负收益 → 微正收益 → 中等排名 → 持续参赛。
- **不以绝对收益论英雄**——以"不踩雷 + 不退出 + 长期在场"为目标的资金管理哲学。
- **跨年度资金曲线管理**的学习样本：4 届比赛如何应对不同市况（牛市/熊市/震荡市）。

## 关联阅读

### P0 已有笔记
- **《实战笔记_令胡冲_盘感训练》**：令胡冲早期盘感训练，与 ballcap 的"菜鸟起步"形成对照。
- **《实战笔记_游资席位_速查》**：再战杯高手席位分布。

### P1P2 同批次笔记
- **《实战笔记_令胡冲_50万至800万成长之路》**：令胡冲从 50 万做到 800 万，与 ballcap 的"非职业"路线形成"职业 vs 业余"对照。
- **《实战笔记_再站杯_高手集锦》**：若茶/只看题材/姓股名/成都三万起家等高手的成长记录，可与 ballcap 的"非职业路线"形成横向对比。
- **《实战笔记_养家_全集》**：养家心法"得散户心者得天下"——ballcap 作为非职业选手也需理解散户行为。

### C 盘 26 位游资心法
- 参考 C 盘"再战杯高手语录"——其他参赛选手的策略分享。

## 与其他游资呼应

| 维度 | Ballcap | 令胡冲 | 独股一箭 |
|------|---------|--------|----------|
| 起步身份 | 非职业股民 | 职业化路径 | 职业选手 |
| 资金起点 | 25-30 万级 | 50 万 | 166 万（百万杯） |
| 比赛参与 | 4 届再战杯 | 1 届 50→800 万 | 1 届百万杯 |
| 核心特征 | 坚持参赛不 ST | 突破 800 万 | 单股满仓接力 |
| 仓位偏好 | 低仓位试探 | 满仓切换 | 满仓单股 |

**呼应点**：ballcap 与令胡冲都是"从小资金起步"的典型代表，但路径完全不同——
- **ballcap**走"非职业 + 长期在场"路线，强调**心态和坚持**。
- **令胡冲**走"职业化 + 突破"路线，强调**盘感和资金曲线爆发**。
- **独股一箭**走"满仓接力"路线，强调**强势股循环**。

ballcap 的"非职业"定位，恰好可以弥补 P0 中以职业高手为主体的笔记缺口，为**"散户如何在实盘赛中存活"**提供第一手参照。

---

*整理日期：2026-06-25*
*来源：Ballcap手记.pdf（32.2MB 大文件，仅取前 50% 内容）*
`,oneLine:`**一个非职业股民的再战杯之旅——坚持参赛不 ST、不退赛，把握住财富积累的圣杯。**`,tags:[`再战杯实盘赛`,`非职业股民成长`,`短线交易`]},{id:`P1P2_Dfusmku_手记`,title:`Dfusmku_手记`,category:`高手手记`,source:`P1P2`,filename:`实战笔记_Dfusmku_手记.md`,content:`# 实战笔记 · Dfusmku 手记（融资 + 多股操作体系）

> 题材分类：融资交易 / 中短线 / 多股组合 / 主题投资
> 游资/作者：dfusmku（淘股吧 ID）
> 风格特征：使用融资融券交易（2013-2014 期间），多股并行操作，资产 21 万起步 → 百万级
> 关联资料：P0《实战笔记_游资席位速查》、P0《实战笔记_乔帮主交割单》
> 来源：D 盘《Dfusmku 手记》

---

## 一句话定位

> **融资 + 多股 + 主题投资**——通过融资融券放大资金弹性，在 2013 年自贸区/迪士尼/影视等主题中多线操作。

## 核心观点（5-8 条）

1. **融资是放大器**：2013.10 期间使用融资融券（已用融资信用额度 598,820 元），用融资仓位做主题板块的 β 收益。
2. **多股分散但有重仓**：典型持仓同时持有 3-4 只主题相关股，**单股可占市值 50% 以上**。
3. **主题驱动选股**：2013 年主攻**自贸区（外高桥 600648、陆家嘴 600663）→ 影视（华谊兄弟 300027）→ 互联网金融（金证股份 300446）**。
4. **止损很果断**：外高桥 600648 持股市值 1319626.00 元（成本 56.881），亏损 5.86 万 → 立即减仓；远东股份 000681 → "精确割在最低点"。
5. **资产曲线从 21 万到 100 万**：2012.3 资产 210,795（仓位 60%）→ 2013.9 资产 1,033,024 → 2013.10 资产 1,944,997。
6. **不排斥新股**：300027 华谊兄弟、300446 金证股份、300244 迪安诊断、300175 朗源股份、300433 冠豪高新等都进入过持仓。
7. **赤峰黄金 / 保利地产 / 海南橡胶等资源股也参与**：显示风格并非纯题材，还有资源类 β。
8. **公开交割单纪律**：所有交割单公开贴出（含 20131008 海南橡胶融资买入 50,000 股 8.42 元），保持可验证。

## 仓位管理

| 时点 | 资产 | 仓位 | 重仓股 | 备注 |
|------|------|------|--------|------|
| 2012.3.30 | 210,795 | 60% | 600010 包钢股份 + 002288 超华科技 | 起步阶段 |
| 2012.4.5 | 218,294 | 59% | 600010 包钢股份 | 清明后 |
| 2012.4.6 | 221,054 | 100% | 600010/600645/600745/002260 | 满仓多股 |
| 2013.6.28 | 667,075 | 73% | 300048 保利地产 + 300433 冠豪高新 + 300988 赤峰黄金 | 中段 |
| 2013.9.30 | 1,033,024 | 99% | 600433 冠豪高新 + 600648 外高桥 + 600663 陆家嘴 | **自贸区行情** |
| 2013.10.9 | 1,944,997 | 91% | 300027 华谊兄弟 + 002024 苏宁云商 + 002416 爱施德 + 600821 津劝业 | 主题扩散 |
| 2013.10.10 | 1,878,641 | 96% | 000681 远东股份 + 600648 外高桥 + 600433 冠豪高新 + 600185 格力地产 | 多股主题 |

## 选股方法 / 主题驱动

> 2013 年下半年的主旋律：自贸区 → 影视 → 互联网金融。

| 主题 | 代表股 | 阶段 |
|------|--------|------|
| **自贸区** | 600648 外高桥、600663 陆家嘴、600007 中国国贸 | 2013.9 大幅拉升 |
| **影视/传媒** | 300027 华谊兄弟（成本 76.365） | 2013.10 |
| **互联网金融** | 300446 金证股份（已卖出 26,574 元盈利） | 2013.6 |
| **资源/黄金** | 600489 中金黄金、300988 赤峰黄金 | 2013.6-10 |
| **新三板/园区** | 002024 苏宁云商、002416 爱施德 | 2013.10 |
| **小市值题材** | 300433 冠豪高新、300244 迪安诊断、300175 朗源股份 | 持续观察 |

## 融资融券操作细节（2013.9.30 数据）

| 项目 | 数值 |
|------|------|
| 维持担保比例 | 272.33% |
| 已用融资信用额度 | 598,820.69 |
| 可用融资信用额度 | 445,179.31 |
| 融资负债 | 598,820.69 |
| 融资当前市值 | 523,167.07 |
| 融资浮亏 | 75,653.62 |
| 融资利息 | 624.04 |

> 注：2013.10.8 海南橡胶（601118）**融资买入 5 万股 8.42 元** + **融资买入 52,300 股 8.36 元**——典型融资追强势股。

## 风控逻辑

- **果断止损**：远东股份（000681）"精确割在最低点"——说明其止损纪律不掺杂情感。
- **分散 + 重仓平衡**：3-4 只主题相关股中保留一只主攻，避免单股黑天鹅。
- **仓位动态调整**：从 60% → 100% → 91% 灵活切换，取决于市场主题强度。
- **融资利息成本意识**：2013.9.30 当月融资利息 624.04——低频使用不形成负担。
- **盈利兑现**：300446 金证股份实现盈利 26,574.75 → 立即兑现。

## 经典案例

- **2013.9 自贸区战役**：
  - 600648 外高桥：成本 56.881，市值峰值 1319626 元（24,200 股）
  - 600663 陆家嘴：成本 26.511，市值 248,976 元（10,400 股）
  - 合计自贸区仓位 ~157 万 → 自贸区政策出台后账面亏损后部分减仓
- **2013.10.8 海南橡胶（601118）**：融资买入 5 万股 8.42 + 5.23 万股 8.36 → 后盈利兑现 51,779.37
- **2013.10.9 华谊兄弟（300027）**：成本 76.365 → 浮盈 27,877 → 影视主题兑现
- **2013.10.10 远东股份（000681）**：成本 19.068 → 浮亏 36,467.5 → 第二天（10.11）"精确割在最低点"
- **2013.10.11 御银股份（002177）**：成本 6.622 → 浮盈 34,881（145,700 股）

## 金句 / 风格判断

> 资产曲线：从 21 万到 194 万的 1 年多时间，使用融资 + 主题多股策略。

> 自贸区 600648 外高桥 24,200 股，市值 1319626 元——典型重仓单一个股特征。

> 海南橡胶融资买入 5 万股 8.42 → 兑现盈利 51,779.37——融资追强势股短期兑现。

> 远东股份 000681 精确割在最低点——果断止损不抗单。

## 适用场景

- ✅ 主题驱动行情（自贸区/影视/互联网金融等有明确政策或事件催化的板块）
- ✅ 资金规模 50 万-200 万的中型账户
- ✅ 投资者具备融资融券资格和风险承受力
- ❌ 弱势震荡市（无主线主题时融资暴露风险）
- ❌ 单只小盘股集中持仓（黑天鹅风险高）
- ❌ 不做期货/不做纯技术短线

## 关联阅读

- P0《实战笔记_乔帮主交割单》——同为多股实盘，但乔帮主更纯打板
- P0《实战笔记_游资席位速查》——dfusmku 的具体席位不在 Top 30，但风格可参考融资型游资
- P0《实战笔记_不足道也手记》——同为超短心态 + 月度统计
- P1P2《实战笔记_独股一箭手记》——同期百万杯选手，方法论不同（独股一箭强 β，本份偏主题 α）
- C 盘 26 位游资心法中如"赵老哥"早期也用融资

## 与其他游资的对比

| 维度 | dfusmku | 独股一箭 | 乔帮主 | 赵老哥 |
|------|---------|----------|--------|--------|
| 资金规模 | 21万→194万 | 166万 | 中型 | 巨型 |
| 杠杆使用 | 融资融券 | 无 | 偶用 | 早期用融资 |
| 持股数量 | 多股（3-4 只） | 单股或 2 只 | 单股集中 | 单股集中 |
| 选股 | 主题驱动 | 强势股 + 题材 | 强势龙头 | 龙头妖股 |
| 止损 | 果断割肉 | 割肉不拖 | 严守 | 看情况 |
| 周期 | 中短线（数日-数周） | 超短（1-3 天） | 短线 | 短线 |
| 资产曲线 | 平滑上升 | 波动大 | 稳定增长 | 爆发性增长 |

---

*整理日期：2026-06-25*
*来源：Dfusmku手记.pdf*
`,oneLine:`**融资 + 多股 + 主题投资**——通过融资融券放大资金弹性，在 2013 年自贸区/迪士尼/影视等主题中多线操作。`,tags:[`融资交易`,`中短线`,`多股组合`,`主题投资`]},{id:`P1P2_JOKER皇_打板逻辑`,title:`JOKER皇_打板逻辑`,category:`打板追涨低吸`,source:`P1P2`,filename:`实战笔记_JOKER皇_打板逻辑.md`,content:`# 实战笔记 · JOKER 皇打板逻辑手法（实操细节补充版）

> 题材分类：打板手法 / 排版 vs 扫板 / 烂板博弈
> 游资/作者：JOKER 皇
> 席位/身份：摩尔金融大 V；588 元付费文章作者
> 关联资料：参见本批《集合竞价奥义》《打板手法系统》《5 分钟筛选牛股》《抓妖股概率》
> 来源：用户上传《JOKER皇涨停板打板逻辑手法全解析.PDF》

---

## 一句话定位

> **打板模式并未失效，只是要换一种思维。** 牛市中无脑扫板的生存空间越来越小，必须切换到"有逻辑地打板"——本文是 588 元付费文章的实战细节完整复原。

## 核心观点

1. **打板定义**：用涨停板价格（10% 涨幅最高价）买入；第二天通常高开是极大概率事件。
2. **无脑打板已失效**：知道方法的人越来越多 + 假机构介入 + 封死涨停不代表第二天一定高开。
3. **三封以上不如等烂板**：一封和二封适合排版卡位，三封以上则等烂板无抛压再买入。
4. **排版的核心是"可撤单"**：利用封板后的抛压吃入，**风险随时可控**。
5. **烂板分两类**：烂板后封死（强势，几乎百分百获利） vs 全天烂板（博弈，第二天不确定）。
6. **天量 vs 缩量烂板策略不同**：天量排更后面（10 万手+），缩量需要速度卡位（5 万手前）。
7. **跟撤原则**：技术必须跟撒，看好逻辑可以强吃。
8. **利好涨停"一步到位"**：公告复牌/借利好涨停估值一步到位，开板原因多半是一家独大出货。

## 排版 vs 扫板 vs 烂板

| 手法 | 适用场景 | 案例 | 关键点 |
|------|----------|------|--------|
| **排版** | 盘子偏大、一封吃力、补量 | **9.22 大杨创世** | 二封时机：8000 手涨停板卖单被 2000 手吃掉时点击买入 |
| **排烂板** | 天量烂板/抛压需要消化 | **9.23 金科股份** | 等封单累加到 5 万手或 10 万手再排 |
| **扫板** | 小盘烂板/抛压已消化 | **8.15 廊坊发展** | 小单吃完立马去排，不然就堵在后面 |
| **强势板** | 一封即封死 | **9.9/9.12 案例** | 烂板后抛压逐渐变小，**直至全天封死** |
| **弱势板** | 全天烂板 | **8.17 深深宝 A** | 第二天是否高开不确定，**获利于拉高多少** |

## 排版的关键细节

> 关于排版，一般是等个股已经有封单封上涨停后再去排。

- **卡位大单的位置有讲究**：直接排板多用于一封和二封，**不能排太后面**。
- **三封以上则不如等烂板无抛压再考虑买入**。
- **延迟高低的利用**：
  - 延迟高的 2000 手出现时打提前量买入
  - 延迟低的 8000 手出现的时候买入
  - **基本可以保证卡在 5 万单前面**
- **跟撤原则**：
  - 排板后马上撒单 → **技术上必须跟撒**
  - 如果有看好逻辑层面支持，可以不撤单强吃
  - 正常情况是跟撒，再封再排，直到不撤不开板
- **从 3 万多撤单到 7000 然后又加单回去时 → 抛压就差不多了**。

## 烂板的核心分类

| 类型 | 表现 | 第二天预期 |
|------|------|-----------|
| **烂板后封死** | 烂板后抛压逐渐变小，**直至全天封死**（强势） | 高开确定，**几乎百分百获利** |
| **纯烂板（妖股接力）** | 全天烂板，妖股接力 → 深深宝 A | 第二天是否高开不确定 |
| **纯烂板（复牌/利好）** | 公告复牌或借利好涨停 → 惠球科技 | 利好"看得见"，**容易一步到位** |

## 成交量与烂板排版的关系

| 烂板成交量 | 排版策略 | 案例 |
|------------|----------|------|
| **天量烂板** | 排可以排更后面（10 万手+） | 去年 **10.27 九安医疗**、**3.2 栖霞建设**、**4.8 大富科技** |
| **缩量烂板** | 需要速度去卡位（5 万手前） | **特力 A**、**四川双马**、**8.15 洪磊股份**、**廊坊发展** |

## 工具：L2 看排单

> **东财 L2 是可以看到非沪市的所有排单的**，这个对于排板也是有用的

- 同花顺 L2 的**超级盘口复盘**功能可看历史分笔成交
- 学会看抛压来源

## 风控逻辑

> 游资的生存空间越来越小，无脑打板已经是亏损最大的模式了。

- **买点的核心**：用"涨停板"作为确认信号，**未涨停前买入就是赌性**。
- **排版可以随时撤单**：这本身就是风控。
- **烂板的风险**：纯烂板博弈带博弈成分，第二天盈利不完全可控。
- **公告复牌/借利好涨停**：估值一步到位，开板原因多半是一家独大的出货。
- **次日还得看竞价**：纯烂板因为第二天需要看竞价，**高开可以消除分歧**。

## 经典案例

| 案例 | 日期 | 类型 | 关键点 |
|------|------|------|--------|
| **大杨创世** | 9.22 | 新高板+板块龙头+小弟不跟风 | 妖股模式 → 排版较好 |
| **金科股份** | 9.23 | 烂板抛压消化 | 5/10 万手再排 |
| **深深宝 A** | 8.17 | 妖股接力的全天烂板 | 任何时候都可排板 |
| **惠球科技** | — | 公告复牌/借利好涨停 | 一步到位，一家独大出货 |
| **特力 A** | 6.24 | 大盘暴跌日 + 烂板 + 烂而不弱 | 经典成功案例 |
| **四川双马** | — | 缩量烂板卡位 | 速度优先 |
| **廊坊发展** | 8.15 | 小单吃完立马去排 | 排版的代表 |
| **九安医疗** | 去年 10.27 | 天量烂板 | 排更后面 |
| **栖霞建设** | 今年 3.2 | 天量烂板 | 排更后面 |
| **大富科技** | 今年 4.8 | 天量烂板 | 排更后面 |
| **洪磊股份** | 8.15 | 缩量烂板 | 速度卡位 |
| **广东甘化** | 8.17 | 反例（不是烂板标准） | 不可打板的烂板 |

## 金句

> 打板模式并未失效，只是要换一种思维。

> 打板的人就可以在高开时实掉获得这个差价。

> 烂而不弱，我们需要的是他虽然开版，但一直是封板的状态。

> 烂板后抛压在逐渐变小，后来仍然可以归为全天封死涨停。

> 公告复牌，或者借利好涨停的股相对妖股接力有一个缺点就是，利好这种看得见的因素在，大家可以估算一个估值……通常会一步到位。

> 合力板几乎就是百分百获利。

> 当时 8000 手涨停板卖单被 2000 手间吃掉的时候，点击买入确定。

## 适用场景

- ✅ 有逻辑地打板（不是无脑扫板）
- ✅ 烂板后抛压消化到位的"烂而不弱"板
- ✅ 二封/三封的卡位排版
- ✅ 缩量烂板的速度卡位
- ❌ 无脑打板（已失效）
- ❌ 全天纯烂板 + 不确定第二天走向
- ❌ 一家独大的出货板
- ❌ 三封以上的追板

## 关联阅读

- 早盘打板：本批《集合竞价奥义》《5 分钟筛选牛股》
- 系统方法：本批《打板手法系统》（邢者版）
- 卖股：本批《集合竞价卖股》《看集合竞价》
- 抓妖股接力：本批《抓妖股概率》（妖股接力 vs 复牌/利好涨停的对比）
- C 盘《JOKER 皇心法_深度研读报告》

## 与其他游资呼应

- **孤独牛背**："30 万手必须在几秒内抢完" → JOKER 皇的"8000 手被 2000 手吃掉时点击买入"是同一思路的两种表达
- **令胡冲**："8 成把握才出手" → JOKER 皇的"排版可随时撤单"是更稳健的实现
- **Asking**：JOKER 皇的"烂板博弈"与 Asking 的"守株待兔"在 K 线形态层面有共鸣
- **炒股养家**：和"一字板席位"养家同属打板阵营，但养家更重情绪周期
- **佛山系 / 成都南北一环**：本批《游资席位速查》中提到的"首板席位"，与 JOKER 皇"日内市场最先打板的品种"思路一致

---

*笔记来源：用户上传《JOKER皇涨停板打板逻辑手法全解析.PDF》*
*整理日期：2026-06-25*
`,oneLine:`**打板模式并未失效，只是要换一种思维。** 牛市中无脑扫板的生存空间越来越小，必须切换到"有逻辑地打板"——本文是 588 元付费文章的实战细节完整复原。`,tags:[`打板手法`,`排版`,`vs`,`扫板`,`烂板博弈`,`打板`]},{id:`P1P2_just999_手记`,title:`just999_手记`,category:`高手手记`,source:`P1P2`,filename:`实战笔记_just999_手记.md`,content:`# 实战笔记 · just999 高频 T+0 实战手记（2009 年 2 月起）

> 题材分类：高频 T+0 / 多板块轮动 / 权证交易 / 实盘赛起步
> 游资/作者：just999（淘股吧 ID，2009.2.3 报名比赛）
> 风格特征：2009 年 2 月起每日实盘交割单记录，涉及权证、资源、地产、银行等多板块；操作频次极高
> 关联资料：P0《实战笔记_乔帮主交割单》、P0《实战笔记_打板手法系统》
> 来源：D 盘《just999 手记》PDF（2018.06.15 增补）
> ⚠️ **内容有截断，详见原始文件**（40.5MB 大文件，仅取前 50% 内容）

---

## 一句话定位

> **一个 2009 年 2 月报名比赛的实盘赛选手，从 2.2-2.20 高频操作近 20 只股票——权证 T+0 + 资源股 + 地产 + 银行，是熊市反弹初期的典型资金路径。**

## 核心观点

1. **2009.2.3 报名参赛，2.2-2.20 期间完成 18 天高频操作**——从报名到节奏确立仅 1 周。
2. **2.2 起步首日**即完成"买入 振华科技 000733（30,000 股，5.01-5.02） + 卖出 金发科技 600143（21,115 股，5.77） + 买入 豫光金铅 600531（64,100 股，9.035） + 买入 山东巨力（34,800 股，6.22）"等多笔操作。
3. **2009.2.11 自述"追高被套"**——这是整个手记中最关键的**心态自省节点**。
4. **权证 T+0 是核心工具**：国安 GAC1 031005（101,400 股，5.635-5.622）、宝钢 CWB1 580024（398,300 股，1.56-1.567）、石化 CWB1 580019（200,000 股，2.00）——三只权证都是 T+0 模式。
5. **多板块轮动**：资源（豫光金铅/大同煤业/国阳新能）、地产（创兴置业/中关村/天宸股份/空港股份）、银行（北京银行/太平洋）、消费（福耀玻璃/泸州老窖/华鲁恒升）、化工（沧州大化/宝胜股份/浙江医药）、电子（三花股份/生益科技）。
6. **小资金快速切换**：单笔金额从 1-2 万（威远生化 400 股×6.95=2,780 元）到 57 万（国安 GAC1 101,400 股×5.635）不等。

## 资金曲线（2009.2.2-2.13 重点交易日）

| 日期 | 操作主线 | 当日盈亏逻辑 |
|------|----------|--------------|
| 2.2 | 买入振华 30,000 股 5.01-5.02 + 卖金发科技 5.77 | 调仓+建仓 |
| 2.3 | 卖豫光金铅 64,100 股 8.96-8.98 + 卖振华 5.13-5.16 | 兑现浮盈 |
| 2.4 | 买入中关村 100,000 股 3.86 + 买入天宸股份 90,400 股 6.36-6.40 | 地产双建仓 |
| 2.5 | 卖天宸 6.40 + 卖中关村 4.33 + 买大同煤业 37,000 股 15.592 | 兑现地产+建仓资源 |
| 2.6 | 卖大同煤业 15.44 + 买三花股份 28,700 股 14.25 + 买国安 GAC1 101,400 股 5.635 + T+0 卖 5.622 | 资源兑现+T+0 试水 |
| 2.9-2.11 | 卖三花 28,700 股 15.70 + 卖创兴置业 5.33 万股 7.32-7.33 + 买爱使股份 100,000 股 4.29 | 持续轮动 |
| **2.11** | **"追高被套"**——这是心态自省日 | 关键转折点 |
| 2.12 | 买福耀玻璃 33,700 股 5.57-5.58 + 买宝钢 CWB1 398,300 股 1.56-1.567 | 权重大票 |
| 2.13 | 卖宝钢 CWB1 248,300 股 1.598 + 买太平洋 40,000 股 15.37-15.45 + 买北京银行 30,001 股 10.85-10.89 | 兑现权证+金融双建仓 |

**2.13 资产快照**：资金余额 5,329.70 元 + 股票市值 1,103,855.00 元 ≈ 110 万总资产。

## 仓位管理 / 操作节奏

just999 典型日内操作笔数（2.2-2.13）：

| 操作类型 | 笔数 | 占比 |
|----------|------|------|
| 买入 | 25+ | 55% |
| 卖出 | 20+ | 45% |
| 权证 T+0 | 6 笔 | 13% |
| 单日操作 5+ 笔 | 5 天 | 38% |

**典型节奏**：1 天 5-8 笔交易是常态，权证 T+0 + 主板个股切换是核心模式。

## 选股方法 / 经典交割单（2009.2.2-2.20）

| 股票 | 代码 | 操作 | 关键价位 | 备注 |
|------|------|------|----------|------|
| 振华科技 | 000733 | 买/卖 | 5.01-5.16 | 2.2 买入 30,000 股，2.3 卖 5.13-5.16 |
| 金发科技 | 600143 | 卖 | 5.77 | 2.2 卖 21,115 股 |
| 豫光金铅 | 600531 | 买/卖 | 8.96-9.035 | 2.2 买 64,100 股，2.3 卖 8.96-8.98 |
| 山东巨力 | - | 买/卖 | 6.22-6.764 | 2.2 买 34,800 股，2.3 卖 6.73-6.764 |
| 中关村 | 000931 | 买/卖 | 3.86-4.33 | 2.4 买 100,000 股，2.5 卖 4.33 |
| 天宸股份 | 600620 | 买/卖 | 6.36-6.40 | 2.4 买 90,400 股，2.5 卖 6.40 |
| 大同煤业 | 601001 | 买/卖 | 15.44-15.592 | 2.5 买 37,000 股，2.6 卖 15.44 |
| 三花股份 | 002050 | 买/卖 | 14.25-15.70 | 2.6 买 28,700 股，2.9 卖 15.70 |
| **国安 GAC1** | **031005** | **T+0 买/卖** | **5.622-5.635** | **权证 T+0 标杆案例** |
| 威远生化 | 600781 | 买/卖 | 6.95-7.07 | 2.6 买 400 股，2.9 卖 7.07 |
| 创兴置业 | 600193 | 买/卖 | 7.21-7.69 | 2.6 买 78,700 股，2.9-2.13 分批卖 7.32-7.69 |
| 爱使股份 | 600652 | 买/卖 | 4.29-4.44 | 2.9 买 100,000 股，2.10 卖 4.38-4.44 |
| 浦东建设 | 600284 | 买/卖 | 11.903-12.15 | 2.10 买 67,600 股，2.11 卖 11.903 |
| 华鲁恒升 | 600426 | 买/卖 | 14.00-14.86 | 2.10 买 15,500 股，2.11 卖 14.86 |
| 泸州老窖 | 000568 | 买/卖 | 22.352-22.953 | 2.11 买 22,559 股，2.12 卖 22.953 |
| 空港股份 | 600463 | 买/卖 | 6.42-6.46 | 2.12 买 5,600 股 |
| 福耀玻璃 | 600660 | 买/卖 | 5.57-5.991 | 2.12 买 33,700 股，2.13 卖 5.991 |
| **宝钢 CWB1** | **580024** | **T+0 买/卖** | **1.56-1.598** | **2.12 买 398,300 股，2.13 卖 248,300 股 1.598** |
| 太平洋 | 601099 | 买 | 15.37-15.45 | 2.13 买 40,000 股 |
| 北京银行 | 601169 | 买 | 10.85-10.89 | 2.13 买 30,001 股 |
| 禾嘉股份 | 600093 | 卖 | 6.90-6.95 | 卖 56,055 股 |
| 上海普天 | 600680 | 卖 | 6.95-6.98 | 卖 20,000 股 |
| 云维股份 | 600725 | 买 | 15.778 | 买 33,700 股 |
| 中兵光电 | 600435 | 买 | 33.07-34.88 | 买 6,300 股 |
| 渤海物流 | 000889 | 买 | 5.04 | 买 20,600 股 |
| 长春高新 | 000661 | 买 | 16.34 | 买 4,300 股 |
| 新五丰 | 600975 | 买 | - | 买 10,300 股 |
| 粤高速 A | 000429 | 卖 | 4.74-4.79 | 卖 76,092 股 |
| 生益科技 | 600183 | 买/卖 | 6.35 | 2.18-2.19 买 46,000 股，2.19 卖 |
| 国阳新能 | 600348 | 卖/买 | 15.01-15.70 | 卖 30,000 股 15.01，买 11,500 股 15.70 |
| 浙江医药 | 600216 | 买 | 19.35 | 买 26,000 股 |
| 宝胜股份 | 600973 | 买 | 15.25 | 买 19,100 股 |
| 国能集团 | 600077 | 买 | 4.83 | 买 64,900 股 |
| 沧州大化 | 600230 | 买 | 13.35-13.38 | 买 43,400 股 |
| **石化 CWB1** | **580019** | **T+0 买** | **2.00** | **买 200,000 股** |

## 权证 T+0 三大案例详解

### 案例 1：国安 GAC1 031005（2.6）

- **2.6 买入**：101,400 股 × 5.635 = 571,434.00 元
- **2.6 当日卖出**：101,400 股 × 5.622 = 570,030.20 元
- **当日盈亏**：-1,403.80 元（-0.25%）
- **意义**：T+0 完整闭环（同一交易日买卖）

### 案例 2：宝钢 CWB1 580024（2.12-2.13）

- **2.12 买入**：100,000 股 × 1.567 + 100,000 股 × 1.562 + 198,300 股 × 1.560 = 608,896 元
- **2.13 卖出**：150,000 股 × 1.580 + 100,000 股 × 1.598 + 148,300 股 × 1.598 = 642,247.40 元
- **1 日盈亏**：约 +33,351 元（+5.48%）
- **意义**：T+1 兑现型权证操作

### 案例 3：石化 CWB1 580019

- 买 200,000 股 × 2.00 = 400,000 元
- 后续操作待续

## 风控逻辑

- **"追高被套"自省**（2.11）：原文多次出现该标题，是 just999 自我警醒的核心节点。
- **分散持仓**：2.13 时点股票市值 110 万，持仓至少 5-6 只股票 + 1-2 只权证。
- **权证作为 T+0 工具**：3 只权证合计 70 万左右仓位，是短线流动性的核心来源。
- **板块轮动**：地产→资源→银行→消费，多板块并行降低单边风险。

## 金句

> 我拿个帐户报个名（2.3 报名参赛）

> 今天操作不好 跑输大盘（2.4）

> 朱七兄我的收益率你算错了（2.4 自辩）

> 今天又跑输大盘（2.6）

> 追高被套（2.11——关键心态节点）

> 人民币 资金余额 5,329.70 可取金额 34.33 冻结金额 0.00 股票市值 1,103,855.00 总资产 1,109,184.70（2.13 资产快照）

## 适用场景

- **2009 年熊市反弹初期**的实盘赛选手操作范本。
- **权证 T+0 + 多板块轮动**的早期样本（2009 年权证时代是 T+0 黄金窗口）。
- **小资金高频切换**的典型案例：2 周内 18 天操作近 30 只股票。
- **"追高被套"自省**心态管理范本：操作频次高必然伴随失误率，关键是事后复盘。
- **小单试仓**（威远生化 400 股 = 2,780 元）与**大单重仓**（国安 GAC1 101,400 股 = 57 万）的灵活切换。

## 关联阅读

### P0 已有笔记
- **《实战笔记_乔帮主交割单》**：乔帮主 2014 年的实盘交割单，just999 是 2009 年版本——时隔 5 年的对照。
- **《实战笔记_打板手法系统》**：打板手法的系统化整理，可与 just999 的"多板块轮动"形成"打板 vs 轮动"对照。
- **《实战笔记_抓妖股_连板概率》**：连板妖股的概率研究，just999 的 2 周内近 30 只股票是"广撒网"反例。

### P1P2 同批次笔记
- **《实战笔记_独股一箭_手记》**：独股一箭 2010-2011 百万杯，just999 是 2009 起步——时间线上前后衔接。
- **《实战笔记_独股一箭_交割单》**：完整 50+ 只股票交割单，just999 是 2009 年 2 月的早期版本。
- **《实战笔记_骑在牛股_手记》**：骑在牛股是 2011 年起步，与 just999 的"多板块轮动"形成风格对比。
- **《实战笔记_著名刺客_手记》**：著名刺客是 2014 年题材驱动，just999 是 2009 年普涨轮动。

### C 盘 26 位游资心法
- 参考 C 盘"实盘赛起步期"游资的早期操作语录。

## 与其他游资呼应

| 维度 | just999（2009） | 独股一箭（2010-2011） | 著名刺客（2014） |
|------|-----------------|----------------------|------------------|
| 操作频次 | 极高（1 天 5-8 笔） | 中等（满仓单股） | 中等（题材驱动） |
| 持仓数 | 5-10 只并行 | 1-2 只满仓 | 1-2 只题材股 |
| 核心工具 | **权证 T+0 + 主板切换** | 强势股接力 | 题材龙头 |
| 心态自省 | "追高被套"频繁出现 | "狗屎运"自嘲 | 题材预判 |
| 市况 | 2009 熊市反弹初期 | 2010-2011 震荡 | 2014 题材牛市 |

**呼应点**：just999 的 2009 年 2 月操作记录，是 P0/P1P2 笔记中**唯一的 2009 年原始交割单样本**——
- **乔帮主**是 2014 年版实盘交割单；
- **独股一箭**是 2010-2011 年版；
- **著名刺客**是 2014 年版；
- **just999**填补了 **2009 熊市反弹初期**的空白。

这对于理解"不同市况下的操作策略"具有**不可替代的时间序列价值**。

---

*整理日期：2026-06-25*
*来源：just999手记.pdf（40.5MB 大文件，仅取前 50% 内容）*
`,oneLine:`**一个 2009 年 2 月报名比赛的实盘赛选手，从 2.2-2.20 高频操作近 20 只股票——权证 T+0 + 资源股 + 地产 + 银行，是熊市反弹初期的典型资金路径。**`,tags:[`高频`,`T+0`,`多板块轮动`,`权证交易`,`实盘赛起步`]},{id:`P1P2_不足道也_手记`,title:`不足道也_手记`,category:`高手手记`,source:`P1P2`,filename:`实战笔记_不足道也_手记.md`,content:`# 实战笔记 · 不足道也手记（P1P2 增补：08 年熊市实战补遗）

> 题材分类：超短线 / 心态控制 / 08 熊市实战
> 游资/作者：不足道也（淘股吧知名 ID）
> 身份：2008 年中辞职职业股民；07 年下半年入场；早期受巴菲特启蒙但实际做超短
> 关联资料：P0《实战笔记_不足道也手记》（基础版）、C 盘 26 位游资心法
> 来源：D 盘《不足道也手记》PDF（2018.06.15 增补）

---

## 一句话定位

> **超短是防范风险的最佳手段。** 本份 PDF 在 P0 基础上重点补充 08 年熊市中的板块轮动实战和大盘 6124→1664 瀑布下的心路历程。

## 核心观点

1. **不参与期货**：包括股指期货，没有爆仓风险，**也永不碰期货**——"我重申一遍：我不做股指期货，永远不做。"
2. **不融资不借贷**：没有到期破产的风险和过大的压力。
3. **超短是控制风险的最好手段**：07.3-2009.3 期间"07 年只有 11 月小幅亏损，08 年 6 月小幅亏损，10 月最大一次亏损 -20%"。
4. **按月统计的纪律**：2009 年起每月盈利无一亏损。
5. **从一开始就亏损，比一开始就赚钱好得多**——2002 年那次入市让他看清市场本质。
6. **市场情绪要"逆着训练"**：让自己在大盘跳水时兴奋，连续上攻时恐惧。
7. **AskING 7 年另两个月赚 300-400 倍，07.3 至今 82 倍**——立志"年底再翻一番"。

## 08 年熊市中的板块轮动实战（P1P2 新增主线）

> 2008 也提供了比较丰富的板块机会。

| 时段 | 板块 | 备注 |
|------|------|------|
| 年初 | **中小板** | 资金避风港 |
| 2 月 | **环保** | 主题性机会 |
| 4-5 月 | **券商** | 阶段性反弹 |
| 接下来 | **小盘地产** | 超跌反弹 |
| 中段 | **世博** | 题材驱动 |
| 又见 | **券商** | 二次反弹 |
| 末段 | 接近底部 | |

> 当身处其间时，没觉得可怕。后来回身一望，**6124 到 1664 呀，瀑布一样的倾泻，心里还真有点后怕。**

> 当我从 1664 开始后，我知道自己能从这个市场稳定盈利了。

## 仓位管理（与 P0 一致）

| 场景 | 仓位动作 |
|------|----------|
| 早盘判断大盘有较大问题 | **相对高位大幅减仓**（盘中风控） |
| 介入后当天 -1% 以上 | 多数是思路出问题，**该认错就认错** |
| 已有盈利 | 最好设止盈位（个人一般不设） |
| 早盘快速下跌超 2% | 极度警惕并采取适当措施 |
| 当晚 YY 某票 | **第二天多半是短期高点** |

## 选股方法 / 介入点

| 要素 | 要点 |
|------|------|
| K 线形态 | 近期 K 线形态及与远期形态的关系 |
| 换手 | 换手大小及换手与价格的变化强弱 |
| 开盘量能 | 开盘的量能与前日最高量能的比较 |
| 涨幅 | 涨幅高度与时间长度的关系 |
| 均量价 | 日 K 均线、分时均线、分时量能等寻求低点 |
| 介入原则 | **彼力欲竭、新力刚生之际的低吸位** |

## 风控逻辑（核心法则）

> 当早盘感觉大盘有较大问题时，在相对高位大幅减仓也不失明智之举。

- **介入点位的纪律**：在自己预估的介入点介入后当天收盘若造成 -1% 以上亏损，**多半是自己的思路出了严重问题**——该认错就认错
- **不要 YY**：凡是当晚自己 YY 的票，第二日多半就是短期高点
- **警惕追涨热门板块**：600111 领涨、600549/600259/000969/000970 跟风、600980/000795/600366 一次性补涨 → 这是"短期见顶的信号"
- **盈利后止盈位**：当日没来得及出 + 早盘快速下跌超 2% → 极度警惕并采取适当措施

## 大熊市中的"逆市练兵"心态（P1P2 强化）

> 为什么我非要逆市而动？在这个市场，逆市易亡，这个简单的道理我自然知道。

逆市练兵的三个理由：
1. **大熊虽巨，要拍死一只灵活的蚊子也不是那么容易**——灵活性胜过规模
2. **完整经历一轮熊市，能从心理和技术上极大的完善自己**——所谓练兵是也
3. **07 年底资金有限，需要积累**——"哪怕慢一点，我也要逐月积累，早日完成 100W 的原始积累"

## 巴菲特启蒙 vs 实际操作（P1P2 完整梳理）

> 当时读得如痴如醉，边读边做笔记，因为是借别人的。做完笔记后，想了想。

| 七句 | 内容 |
|------|------|
| 1. 趁早 | 及早储蓄是奠定未来财富的关键；从事投资活动越年轻越好 |
| 2. 好学 | 投资一定得花时间靠学习才能行 |
| 3. 介入 | 一只股票的投资价值完全取决于评估的时间点 |
| 4. 约束 | 自我约束是成功与失败的界限 |
| 5. 赔钱 | 投资没计划，买在高档后失去耐心或心生恐惧 |
| 6. 输家 | 暴跌中真正的最大输家是借钱买股票的融资户 |
| 7. 狂热 | 狂热/泡沫，疯狂付出超常代价买不实在的机会 |

> 没想到，自己一直使用的都是超短线交易方式，这和老巴的价值投资似乎是背道而驰。呵呵。

## 经典案例

- **ST 浪莎（5.30 之前）**：全仓买入，6 月 4 日跌停走——5.30 不仅躲过，而且还有不错收益
- **2002 年首次入市**：1 年不到，亏损——多人决策权 → 看清市场本质
- **2007 年下半年入场**：重新入市
- **2009 年起**：每月盈利无一亏损（连续稳定盈利的起点）
- **2010 年起**：也是每月盈利
- **2014 年 4-8 月**：8 月单月最大一次亏损 -20%
- **2014 年初**：挑战 100W 原始积累目标 → 资金 82 倍增长（自述）

## 对波段与长线的看法

> 我还是老老实实的做我的短线吧，风险可以控制在盘中或者一个晚上。

- **波段难做**：
  - 一是没有中级行情前提就匆匆介入——没有眼光
  - 二是常以波段心态介入、以短线理由卖出——中线做短
  - 三是缺乏耐心
  - 四是难以持续复制
- **长线不适合草根**：
  - 25 岁开始投资，能做几个 10 年的长线？
  - 做长线你一开始就要正确，每次都要正确
  - 万一遇到银广夏、亿安科技或 2008 那种大熊市 → 万劫不复
  - 标杆案例：万科原始股 18 年 400 万 → 27.69 亿，**这种属于非常特殊的人**

## 职业化建议

- **资金规模有底线**——不会因生活压力陷入泥潭
- **能稳定盈利**——尤其在行情差时也能稳定
- **不要高估自己**——人很容易被自己骗过，尤其在股市面前
- **2008 中年辞职职业化的教训**：6124 跌到 1664 的瀑布，当时也是事后才后怕

## 金句

> 我想，一开始就亏损，比我要一开始就赚钱好得多。

> 我不粘期货，包括股指期货，没有爆仓的风险。

> 我思我在：主要在彼力欲竭，新力刚生之际的点位低吸，这也就是我认为的安全点位。

> 我几乎完全丧失了对这个市场的敬畏，更何况是个全新的市场，有爆仓风险的市场。

> 我重申一遍：我不做股指期货，永远不做。

> 短线成功者占比大概在 5% 以下，非常成功者占比应该在 1% 以下。

> 短线交易，对某些人可能是补药，但对另一些人可能是毒药。

> 当身处其间时，没觉得可怕。后来回身一望，6124 到 1664 呀，瀑布一样的倾泻，心里还真有点后怕。

> 让自己在大盘跳水的时候兴奋，连续上攻时恐惧？

## 适用场景

- ✅ 上班族业余做超短（风险控制在盘中或一个晚上）
- ✅ 题材/热点的快进快出
- ✅ 有 2000 只股熟悉度 + 强复盘能力
- ✅ 熊市中通过板块轮动逐月积累原始资金
- ❌ 重仓做波段（容易中线做短）
- ❌ 重仓做长线（草根无法承受万劫不复）
- ❌ 期货 / 股指期货（绝对禁止）

## 关联阅读

- P0《实战笔记_不足道也手记》——基础版（2009 起每月盈利的统计与心态）
- P0《实战笔记_孤独牛背控制回撤》——回撤控制与本份"早盘减仓"形成"超短心态"对照
- P0《实战笔记_Asking理念总结》——"等待、发现、跟随"与本份"逆市练兵"互补
- P0《实战笔记_落升熊市盈利》——同为熊市盈利技巧（落升用乖离率）
- P0《实战笔记_丁一熊两次股灾》——反面参考（"没有人可以预测准股市"）
- C 盘 26 位游资心法中的"不足道也"深度研读

## 与其他游资的对比/呼应

| 维度 | 不足道也 | Asking | 落升 |
|------|----------|--------|------|
| 操作周期 | 超短（1-3 天） | 超短/短线 | 数日（抢反弹） |
| 仓位 | 全仓单股 → 多股 | 半仓试错 | 控仓 |
| 选股 | K 线 + 换手 + 量能 | 人气股/龙头 | 乖离率 |
| 风控 | 早盘高位减仓 | 不涨停即出 | 颈线破位即出 |
| 熊市态度 | **逆市练兵、逐月积累** | 只做转势初期 | 熊市盈利技巧 |
| 资金曲线 | 07.3-2014 约 82 倍 | 5.19-2006.7 几百倍 | 反复强调风控 |

---

*整理日期：2026-06-25*
*来源：不足道也手记.pdf*
`,oneLine:`**超短是防范风险的最佳手段。** 本份 PDF 在 P0 基础上重点补充 08 年熊市中的板块轮动实战和大盘 6124→1664 瀑布下的心路历程。`,tags:[`超短线`,`心态控制`,`08`,`熊市实战`]},{id:`P1P2_乔帮主交割单整理`,title:`乔帮主交割单整理`,category:`顶级游资心法`,source:`P1P2`,filename:`实战笔记_乔帮主交割单整理.md`,content:`# 实战笔记 · 乔帮主·交割单整理（P1P2 增补版）

> 题材分类：低吸战法 / 龙头 5 日均线 / 交割单实证
> 游资/作者：乔帮主（淘股吧 ID）
> 身份/体量：10 万 → 1300 万；2012 元旦到 2013 年底 10 万到 100 万；2014 年只用一年从 100 万到 1000 万
> 关联资料：参见 P0《实战笔记_乔帮主交割单》主线版；C 盘 26 位游资深度研读中乔帮主专题
> 来源：D 盘《乔帮主交割单整理》PDF（P1P2 增补；与 P0 同源但分册）

---

## 一句话定位

> **乔帮主的方法一句话总结：在龙头股沿着 5 日均线低吸，第二天冲高出货。没有一个打板进的。**

## 核心观点

1. **核心手法：龙头股 5 日均线低吸**（不是打板）；次日冲高就出。
2. **首阴战法**：龙头股第一个阴线买入，博弈反包（如 2012.08 罗顿发展 600209）。
3. **高位无脑追击 + 锁仓**：当确定性高时，敢于重仓锁仓 10 天（如 2012.12 联创节能 300343，3 个交易日 30%）。
4. **从 100 万到 1000 万只用一年**：越到后期资金曲线越快。
5. **下探前日涨停价位置买入**：有时是回踩涨停板的洗盘买点。
6. **不贴 10 万级别战役**：因为"贵球基本都是百万以上"，跨度太长参考价值低。
7. **10 万级别第一战**：15 万到 18 万（2012 年 4 月），揭开 2012 年 4 倍序幕。

## 资金曲线与关键战役（与 P0 完全一致，本表做交叉对照）

| 战役 | 标的 | 时间 | 规模 |
|------|------|------|------|
| 15→18 万 | （首战） | 2012.04 | 揭开 4 倍序幕 |
| 35→38 万 | 罗顿发展 600209（首阴战法） | 2012.08.08~09 | +8% |
| 50→60 万 | 联创节能 300343（高位锁仓） | 2012.12.21 | 3 日 +30% |
| 82→97 万 | 上海莱士 002252 | 2013.12.23~24 | +10% |
| 97→109 万 | 天津松江 600225 | 2013.12.24~25 | 2 日 +15% |
| 125→141 万 | 联建光电 300269 | 2014.01.13~15 | 3 日 +12% |
| 203→255 万 | 金轮股份 002722 | 2014.02.24~25 | 1 夜 +22% |
| 229→278 万 | 东易日盛 002713 | 2014.03.03~07 | 反复操作 +20% |
| 287→394 万 | 凤凰光学 600071 | 2014.07.10~11 | 1 天 +37% |
| 473→745 万 | 保利地产 600048 | 2014.12.31~2015.01.05 | 3 天 +22% |
| 855→1300 万 | 中国南车 601766 | 2015.01.19~21 | 反复操作 +50% |

## 仓位管理（基于 5 日均线低吸的实战特征）

| 场景 | 仓位动作 |
|------|----------|
| 5 日均线低吸 | 集中加仓，常出现 **同一标的多次小额融资买入** |
| 次日冲高 | 全部清仓，**不留过夜** |
| 首阴战法 | 开盘 09:42~10:19 持续买入，下探前日涨停价 |
| 高位锁仓 | 满仓追击，**10 天不操作**（如联创节能） |
| 反复操作 | 同一标的 **T+0 多次进出**（如东易日盛 3 月 3-7 日 5 笔买卖） |
| 大标的 1000 万+ | 经常分 8 笔以上分批买入（避免冲击成本） |

## 选股方法

- **标的选择：龙头股**，不是跟风股
- **介入点：5 日均线**，不追涨不抄底
- **出货：第二天冲高就卖**，持仓周期 1-2 天为主
- **少数情况：首阴战法 + 高位锁仓**（3-10 天）

## 风控逻辑

- **不参与打板** → 避开"开盘就被砸"风险（"没有一个打板进的"）
- **5 日均线** → 顺势回调，不是高位接盘
- **快进快出** → 多数持仓 1-2 天
- **首阴战法** → 龙头股第一次阴线博弈反包
- **高位锁仓** → 仅在确定性高时使用

## 经典案例详解（带具体交割单时间）

### 1. 上海莱士（002252）2013-12-23 上午 → 12-24 早盘清仓

- 10:32:49 融资买入 2500 股 @ 48.510
- 10:32:47 融资买入 2500 股 @ 48.605
- 10:36:03 融资买入 2200 股 @ 48.060
- 11:11:58 买入 11902 股 @ 48.270
- 11:14:49 买入 5700 股 @ 48.190
- 12-24 09:35~09:57 分 6 笔卖出，区间 53.143~53.990，**单日 +10%+**

### 2. 罗顿发展（600209）首阴战法 2012-08-08~09

- 08-08 09:42~10:19 持续买入 7 笔（11000+900+5000+7800+6200+5100+2200 股），价格 9.11~9.43
- 08-09 11:01~11:11 分 4 笔清仓（9100+9100+10000+10000 股），价格 10.04~10.19
- **1 夜 +8%**

### 3. 联创节能（300343）高位无脑追击 2012-12-21~31

- 12-21 10:10 满仓买入
- 锁仓 10 天（含 12-23 11:12 卖出 600 股 @ 62.450；12-31 11:12~14:14 分 3 笔卖出 1100/1020/300 股）
- **3 个交易日 +30%**

### 4. 中国南车（601766）2015-01-19~21 反复操作 855→1300 万

- 01-19 13:56~14:08 买入 717244+925500 股 @ 11.31~11.33
- 01-20 09:25~09:40 卖出 779300+779332 股 @ 12.21~12.30；又买入 431020+928200+564400 股 @ 12.49~12.60
- 01-21 09:25~09:48 分 6 笔清仓 @ 13.9~14.41
- **反复操作 +50% 左右**

## 金句

> 乔帮主的方法一句话总结：在龙头股沿着 5 日均线低吸，第二天冲高出货。没有一个打板进的。

> 好像有一些是下探前日涨停价位置买入。

> 贵球基本都是百万以上的了吧，而且我 10 万做到 100 万的时间跨度太长（2012 年元旦到 2013 年底），好像比 100 万到 1000 万要长（才一年）。

> 50 到 60 万之战，高位无脑追击，锁仓 10 天（3 个交易日）收益 30%。

> 辛苦大家一晚上绞尽脑汁的作诗了！干货来了。

> 15 万到 18 万之战。此战乃 10 万级别第一次成功的大规模战役，此战揭开 2012 年 4 倍的序幕。

## 适用场景

- ✅ 龙头股 5 日均线低吸
- ✅ 龙头股首阴战法（博弈反包）
- ✅ 强势行情中的人气龙头
- ✅ 有"高位锁仓"确定性的标的（如政策预期、突发利好）
- ❌ 弱势/下跌通道（5 日均线是下行）
- ❌ 跟风股（不是龙头不参与）
- ❌ 任何形式的打板（乔帮主明确"没有一个打板进的"）

## 关联阅读

- 5 日均线低吸与 P0《Asking 理念总结》的"守株待兔"互补
- 心态与 P0《孤独牛背控制回撤》共振
- 反复操作（T+0）模式与 P0《赵老哥系列》"做 T"手法可对照
- 反面参考：P0《JOKER 皇打板逻辑》《打板手法系统》——打板 vs 低吸
- C 盘 26 位游资深度研读中乔帮主专题

## 与其他游资的对比/呼应

| 维度 | 乔帮主 | Asking | 赵老哥 | 孤独牛背 |
|------|--------|--------|--------|----------|
| 介入点 | 5 日均线低吸 | 涨停板+守株待兔 | 打板+做 T | 扫板 |
| 持仓周期 | 1-2 天为主 | 数日 | 1-3 天 | 1-2 天 |
| 标的选择 | 龙头股 | 龙头/人气股 | 强势板块龙头 | 龙头/妖股 |
| 风控方式 | 5 日均线止损 | 不涨停即出 | 龙头做 T+第三日清仓 | 第二天 2:30 前卖 |
| 资金量级 | 10 万→1300 万 | 亿元级 | 亿元级 | 千万-亿级 |

> **P1P2 增补说明**：本 PDF 与 P0 同源（同样的交割单截图、同一作者帖），主要价值是 P1P2 分册**完整收录**了 11 个关键战役（从 10 万级到 1300 万），可作为低吸战法实证档案。本笔记侧重"案例时间线 + 反复操作（T+0）"细节。

---

*笔记来源：D 盘《乔帮主交割单整理》PDF*
*整理日期：2026-06-25*
`,oneLine:`**乔帮主的方法一句话总结：在龙头股沿着 5 日均线低吸，第二天冲高出货。没有一个打板进的。**`,tags:[`低吸战法`,`龙头`,`5`,`日均线`,`交割单实证`]},{id:`P1P2_云意电气_涨停复盘`,title:`云意电气_涨停复盘`,category:`案例复盘`,source:`P1P2`,filename:`实战笔记_云意电气_涨停复盘.md`,content:`# 实战笔记 · 云意电气涨停复盘（"打赌 88 元红包"案例）

> 题材分类：分时锯齿型洗盘 / 高送转 / 周溢价
> 游资/作者：邢者
> 席位/身份：邢者股票池（公号 ID：xingzwgpc）；2006-2008 私募交易员，团队资金峰值过亿
> 关联资料：参见本批《强势股低吸战法》《次新股技术筛选》《抓妖股概率》《打板手法系统》
> 来源：用户上传《干货中的干货为何我敢打赌云意电气必须涨停.docx》

---

## 一句话定位

> **打赌 88 元红包，邢者赢了；又把红包返还给同事**——本案例是"出货 vs 洗盘"判别的最经典教学，权重配比 **50% 均线 + 20% 大局观 + 20% 分时 + 10% 周末溢价**。

## 核心观点（必涨停的 4 大理由）

| 权重 | 理由 | 核心判断 |
|------|------|----------|
| **50%** | 均线走势 | 短线牛股走强必然伴随均线特征（详见邢者《牛股在均线中的应用》） |
| **20%** | 大局观和赚钱效应 | 次新 vs 高送的"跷跷板"，次新变弱时高送必强 |
| **20%** | 分时走势（不是出货是洗盘） | 冲高 8% + 锯齿型 2% 波动 = 洗盘 |
| **10%** | 周末溢价效应 | 周五涨停 → 周一高开占先机 |

## 分时锯齿型洗盘（出货 vs 洗盘的核心判别）

### 5 大共性

1. **冲高幅度 8% 左右**（不摸板），主力已了解上方抛压
2. **下午回落后，股价围绕黄色均线做锯齿型波动，幅度 2% 左右**
3. **最高点与最低点偏离值不超过 6%**（超过 6% 不符合买点）
4. **锯齿密度越小越好**（云意电气和成飞集成最符合）
5. **次日至少一个大阳线，70% 概率涨停板**

### 核心判别

- **洗盘**：锯齿型 2% 波动
- **出货**：倾斜向下 **45 度角**回落

## 仓位管理（邢者亲述）

> 邢者 **昨天下午尾盘不断加仓**云意电气，**上午冲高 8% 不封板，下午锯齿型 2% 波动时仍在加仓**。

| 场景 | 操作 |
|------|------|
| 昨日尾盘 | **加仓**（分多笔） |
| 当日涨停后 | 持有等待周一 |
| 周一高开 | 卖出（不贪最高） |

**打赌设置**：云意电气周五必须涨停（封死）。最终同事反给 88 元红包，邢者又返还。

## 选股方法

- **市场风格识别**：当时市场**还在熊市**，场内资金有限。
- **跷跷板原理**：次新股强 → 高送转弱；次新股弱 → 高送转强。**一山不容二虎**。
- **11 只次新 1 亏战绩**：邢者连做 11 只次新，只有 1 只亏损出局 → 验证次新方法论。
- **今年首次配资蓝筹做对冲**：当次新势头变弱，**蓝筹对冲**控制风险。

## 风控逻辑

- **分时出货 vs 洗盘判别**：45 度角向下 = 出货，2% 锯齿 = 洗盘
- **锯齿型小单买回是主力手法**：邢者私募时期操盘揭秘——"用百手小单悄悄买回"
- **熊市严格控仓**：场内资金有限，不在多个板块同时下注
- **判断错误的同事视角**：两个同事分别认为"低开低走收大阴线"和"绝无可能涨停"——两人都是看到分时冲高回落的表象，**未识别洗盘本质**

## 经典案例

| 案例 | 股票代码 | 日期 | 类型 | 关键点 |
|------|----------|------|------|--------|
| **云意电气** | — | 2017.03.10（周五涨停） | 锯齿型洗盘 | 当日下午 2% 锯齿波动 → 次日涨停 |
| **成飞集成** | — | — | 锯齿型洗盘 | 与云意电气共性最高，次日涨停 |
| **华测检测** | — | 2016.06.17 | 冲高回落 | 邢者对比案例之一 |
| **掌趣科技** | — | 2013.07.02 | 冲高回落 | 邢者对比案例之一 |
| **华谊兄弟** | — | 2015.04.03 | 冲高回落 | 邢者对比案例之一 |
| **廊坊发展** | — | 2016.10.19 | 冲高回落 | 邢者对比案例之一 |
| **文化长城** | **300089** | 2015.11.23 | 冲高回落 | 邢者对比案例之一 |
| **邢者私募操盘案例** | — | 2006-2008 | 主力手法 | 2000 手大单砸 + 锯齿小单买回 |

## 金句

> 邢者坚持我的分析和他们争论不下，最后和他俩打了一个赌……后来，我把打赌赢的红包，又给同事们返回去了。

> 一只短线牛股的走强，一定跟它的均线有必然的关联。

> 熊市里场内资金是有限的，在一个交易日，不可能出现两个强势热点，这个与"一山不容二虎"的道理一样。

> 股价围绕黄色的均线在做锯齿型状的波动，这个波动幅度在2个点的幅度左右。

> 锯齿的密度越小越好，比如图1的云意电气和图2的成飞集成是最符合这种模式选股的票，次日全部涨停。

> 一定是这种形态的股票，才是真的洗盘。如果是倾斜向下45度角的回落，那就是真的出货了。

> 只能用百手小单悄悄的买回……我们在锯齿的波动中，又买回了便宜的筹码。

> 周五是拉升涨停板的最好时机。

> 超短的精髓就是在瞬间把握的机会，能一举中的，这已足够。

## 适用场景

- ✅ 短线牛股的二次启动（冲高 8% 后锯齿型）
- ✅ 跷跷板主线的切换（次新 → 高送）
- ✅ 周末溢价的提前布局
- ✅ 熊市中强势股分时洗盘
- ❌ 倾斜向下 45 度角的弱势股（=出货）
- ❌ 偏离值超过 6% 的剧烈波动
- ❌ 锯齿密度大（不是洗盘，是弱势震荡）

## 关联阅读

- 邢者同源：本批《强势股低吸战法》（分时拐头 + 锯齿的姐妹篇）
- 跷跷板原理：本批《次新股技术筛选》《低吸追涨打板》
- 卖股层面：本批《集合竞价卖股》
- 均线战法：邢者《牛股在均线中的应用》（未在 P0 但已上传）
- C 盘《邢者心法_深度研读报告》

## 与其他游资呼应

- **瑞鹤仙**：私募出身，"只要买的好怎么卖都行"与邢者 2006-2008 私募背景同源
- **Asking**：分时洗盘识别与 Asking"市场情绪揣摩"相通
- **赵老哥**："八年一万倍"的打板 vs 邢者"分时锯齿"的低吸 → 短线两种路径
- **JOKER 皇**：188 元文章"开盘后分时应对"与本批云意电气"冲高后锯齿型"形成分时两案例
- **孙哥/佛山系**：高送转是游资必炒主线，本案例是高送转 + 周末溢价的经典组合
- **炒股养家**：养家"不涨停即走"vs 邢者"打赌必涨停"→ 短线两种决策风格

---

*笔记来源：用户上传《干货中的干货为何我敢打赌云意电气必须涨停.docx》*
*整理日期：2026-06-25*
`,oneLine:`**打赌 88 元红包，邢者赢了；又把红包返还给同事**——本案例是"出货 vs 洗盘"判别的最经典教学，权重配比 **50% 均线 + 20% 大局观 + 20% 分时 + 10% 周末溢价**。`,tags:[`分时锯齿型洗盘`,`高送转`,`周溢价`]},{id:`P1P2_令胡冲_50万至800万成长之路`,title:`令胡冲_50万至800万成长之路`,category:`顶级游资心法`,source:`P1P2`,filename:`实战笔记_令胡冲_50万至800万成长之路.md`,content:`# 实战笔记 · 令胡冲 50万至 800万 成长之路

> 题材分类：实盘复盘 / 50万起步 / 短线游资成长
> 游资：令胡冲
> 关联资料：参见本批《淘股吧高手语录集》中令胡冲语录；C 盘 \`令胡冲_50万到800万_交割单_深度复盘.md\`
> 来源：D 盘《令胡冲从 50万至 800万的股市成长之路_交割单》

---

## 一句话定位

> **从 2015.01.09 满仓 24.1 万利达光电起步，到 2015 年下半年突破 800 万的完整实盘交割单**——一部牛市新兵的 16 倍成长史。

## 核心观点

1. **小资金 = 必须满仓单股做**：每个交易日基本满仓 1-3 只标的，靠"重仓单股"实现快速积累
2. **市值和股数严格匹配**：单只标的仓位约 20-30 万为基准线，浮盈加仓后到 30-46 万
3. **题材为王**：主要操作一带一路（中国北车、中国南车、中国交建、上海电力、中铁二局）、券商（国元证券、西部证券、国金证券）、互联网金融（东方财富、金盾股份）
4. **手也要认错**：自陈"手欠追的 300402，明天大概率是割肉了"——错了就割
5. **节奏感强**：2015.01 至 04 单股市值从 24.1 万 → 36.1 万 → 70.8 万 → 113.3 万，每月翻一番
6. **杠杆使用**：交割单中出现"标准券 131990"反回购操作，说明懂得用闲置资金做现金管理

## 仓位管理（成长时间轴）

| 阶段 | 时间 | 总资产 | 关键操作 |
|------|------|--------|----------|
| 起步 | 2015.01.09 | 50.0 万 | 满仓利达光电(002189)24.1万 |
| 突破 100 万 | 2015.04.10 | 109 万 | 持仓国金证券、乐视网 |
| 突破 200 万 | 2015.05.21 | 186 万 | 主升浪加速 |
| 突破 300 万 | 2015.06.11 | 289 万 | 顶峰附近 |
| 突破 400 万 | 2015.08.31 | 390 万 | 救市反弹 |
| 突破 800 万 | 2015 下半年 | 812 万 | 牛市最高位 |

## 选股方法

- **热点板块为王**：2015 年上半年紧抓"一带一路"+"互联网金融"+"国企改革"三条主线
- **小盘创业板为辅**：300411 金盾股份、300104 乐视网、300223 北京君正、300077 国民技术 等创业板权重
- **题材叠加**：中科云网(002306)、三五互联(300051) 等重组预期股
- **次新+小盘**：连云港(601008)、宁波高发(603788)、柯利达(603828)、贵人鸟(603555) 等次新
- **券商轮动**：国元证券(000728) → 西部证券(002673) → 国金证券(600109)

## 风控逻辑

- **"手欠"自省**：对 300402 宝色股份追高决策的复盘——"明天大概率是割肉了"
- **浮盈加仓**：永大集团 25.0万→24.1万（30.88）→浮盈 53,551.60 元
- **止损坚决**：连续亏损的标的（永大集团 24.6万→22.2万）会迅速出局
- **题材切换**：一带一路 → 互联网金融 → 券商 → 创业板，跟随主线轮动

## 经典案例

### 案例 1：金盾股份(300411) 接力
- 2015.01.19 买入 6,400 股 @ 32.98，市值 21.1 万
- 2015.01.20 加仓（6,400 @ 36.28），市值 23.2 万，**浮盈 20,775.99**
- 2015.01.21 卖出 @ 39.91，**浮盈 43,978.95 元**（+20%）
- 卖点：跟随创业板龙头

### 案例 2：中矿资源(002738) 接力
- 2015.01.19 买入 7,500 股 @ 34.23，市值 25.7 万
- 2015.01.20 浮盈 32,912.68
- 2015.01.22 持仓 @ 40.20，**浮盈 12,345.18**
- 2015.01.23 持仓 @ 37.37，浮亏 2,515.76（题材切换）

### 案例 3：永大集团(002622) 复权大肉
- 2015.01.13 买入 7,700 @ 32.55，市值 25.1 万
- 2015.01.14 浮盈 24,462.95
- 2015.04.15 持仓 7,800 @ 30.88，**浮盈 53,551.60 元**（约 +20%）
- 2015.04.16 卖出 7,800 @ 28.41，**浮盈 34,311.68**

### 案例 4：宝色股份(300402) 割肉案例
- 2015.01.14 满仓追高 10,000 @ 17.44，市值 17.4 万，**浮亏 4,864.75**
- 自陈"手欠追的 300402，明天大概率是割肉了"
- 2015.01.15 卖出，认亏出局

### 案例 5：国金证券(600109) 中线持有
- 2015.04.13 满仓 15,800 @ 22.91，市值 36.2 万
- 2015.04.15 持仓 13,000 @ 23.15，**浮盈 14,521.00**
- 2015.04.16 减仓 @ 23.50 附近，兑现部分利润

### 案例 6：乐视网(300104) 大票接力
- 2015.04.15 买入 4,000 @ 90.39，市值 36.2 万
- 2015.04.16 减仓 2,000 @ 87.96，**浮亏 13,770.95**
- 2015.04.20 清仓 @ 92.30，**浮盈 292.44**

## 金句

> 手欠追的 300402，明天大概率是割肉了。

> 明天看看一带一路能不能起，有悬念。

> 1.今天很高兴参加实盘大赛的帐户踏上了 200万整数关。2.非常感谢职业炒手、asking等短线高手，从他们身上得到最多的是对于短线操作的信念，因为有了信念，才会全身心的投入。

> 第一招是和 asking学的，第二招是和炒手学的。

> 这两天也埋伏了一些相对强势的新能源股票，不知道会不会炒。

> 关于超跌度的把握，大盘的角度，连续下跌一段后，再出现大阴线，指数远离 5日线；板块的角度，超跌的板块在连续下跌一段后，再次出现集体性的大幅杀跌，当两者结合的时候，便是超跌的出击时刻。

> 买入，攻在量中。卖出，退在量后。

> 不符合主流热点的、不明原因的、累计涨幅过大的——这周利润回撤的股基本都是因为不符合主流热点而强行追高。

## 适用场景

- ✅ 牛市主升浪中（2015.01-06 阶段）
- ✅ 板块轮动明确的题材接力
- ✅ 单股高仓位搏主升
- ✅ 复盘交割单学习游资建仓/出货节奏
- ❌ 熊市/震荡市（2015.06 后回撤巨大）
- ❌ 满仓单股追高（容易次日闷杀）
- ❌ 杠杆配资（容易爆仓）

## 关联阅读

- 养家访谈：参见本批《养家_全集》（养家高度评价令胡冲的交易节奏）
- Asking 龙头：参见本批《淘股吧高手语录集》（Asking 是令胡冲的精神导师之一）
- 盘感训练：参见 P0《实战笔记_令胡冲盘感训练》（同游资不同时期的笔记）

## 与其他游资的呼应

- **养家（孙峰）**：令胡冲 2010 年开始职业炒股，路径与养家类似——"全身心投入短线研究"
- **Asking（邱宝裕）**：令胡冲称"第一招是和 asking 学的"
- **职业炒手（王涛）**：令胡冲"第二招是和炒手学的"
- **龙飞虎（陈新宇）**：令胡冲复盘方法大量借鉴龙飞虎"换手决定高度"
- **赵老哥（赵强）**：2015 年 50 万→800 万的路径与赵老哥早期相似

---

*笔记来源：D 盘《令胡冲从 50万至 800万的股市成长之路_交割单》*
*整理日期：2026-06-25*
`,oneLine:`**从 2015.01.09 满仓 24.1 万利达光电起步，到 2015 年下半年突破 800 万的完整实盘交割单**——一部牛市新兵的 16 倍成长史。`,tags:[`实盘复盘`,`50万起步`,`短线游资成长`]},{id:`P1P2_低吸追涨打板_理解`,title:`低吸追涨打板_理解`,category:`打板追涨低吸`,source:`P1P2`,filename:`实战笔记_低吸追涨打板_理解.md`,content:`# 实战笔记 · 低吸、追涨、打板（三种模式对比 + 实战反思）

> 题材分类：低吸/追涨/打板 / 模式选择 / 弱势生存
> 游资/作者：邢者
> 席位/身份：邢者股票池（公号 ID：xingzwgpc）
> 关联资料：参见本批《强势股低吸战法》《云意电气涨停》《打板手法系统》《抓妖股概率》
> 来源：用户上传《浅谈我对低吸追涨打板的理解.docx》

---

## 一句话定位

> **只要买的好，怎么卖都行**（瑞鹤仙语）——本文是邢者对三种买股模式的对比 + 弱势反思，核心结论：**三种技能都要掌握，如果只用一种模式买票，资金很难做大**。

## 核心观点

### 三种模式的核心理解

| 模式 | 难度 | 收益特征 | 风险特征 | 适用人群 |
|------|------|----------|----------|----------|
| **低吸** | **最保守** | **不会赚大钱，也不会亏大钱** | 安全 | 初学者；熊市高手 |
| **追涨** | **难度最大** | 散户最喜欢但最难 | 中 | 有大局观的老司机 |
| **打板** | **最简单、最暴利** | 吃肉多于割肉 | 大（需要纪律） | 眼快手快 + 铁的纪律 |

### 邢者的核心论断

1. **合格的交易选手 = 三种技能都要掌握**（资金难做大的根源是模式单一）
2. **瑞鹤仙**："只要买的好，怎么卖都行！"——"买的好"背后是缜密的逻辑和大局观
3. **弱势中打板风险极大**：龙头板封死但大环境差 → 次日低开概率大
4. **打板 ≠ 见板就打**：为了打板而打板，只会一输再输
5. **赵老哥"八年一万倍"**起家靠打板（2009-2012 年行情）
6. **市场每天都在变** → "一招鲜吃遍天"和"一条路走到黑"是炒股大忌

## 三种模式的实战细节

### 1. 低吸
- **特征**：最保守；不会赚大钱也不会亏大钱
- **适合**：初学者；熊市中高手的常用选择
- **风险**：新手尝到甜头后容易**上瘾**，**总想抄到最低的底，格局变窄**

### 2. 追涨
- **特征**：三种模式中**难度最大**；散户最喜欢但最难
- **要求**：对大盘整体氛围的理解 + 市场情绪的嗅觉 + 板块及龙头的把握 + 题材热点的挖掘
- **要求时间**：**没有个几年的股龄人，很难把追涨理解到位**

### 3. 打板
- **特征**：三种模式中**最简单的，也是最暴利**
- **要求**：眼快、手快 + 铁一般的纪律
- **执行门槛**：**不是一般人能做到的**
- **代表人物**：**"八年一万倍"的赵老哥**起家就是靠打板为生
- **历史行情**：2009-2012 年的打板行情已变，现在手法不断优化

## 仓位管理

| 模式 | 仓位建议 |
|------|----------|
| **低吸** | 分批建仓（参考本批《强势股低吸战法》） |
| **追涨** | 半仓起步 |
| **打板** | **2-3 只标的**（参考本批《打板手法系统》） |

## 选股方法

### 弱势环境反思（打板连续重伤案例）

> 某新粉丝**打板连续重伤**：**摩恩电气**、**利君股份**、**开创国际**、**杭氧股份**——"打一个死一个"。

**邢者的诊断**：
- **不是模式问题**，而是**现在市场环境不利于打板**
- 弱势中打板本身就有很大的风险
- 龙头板封死但大环境差 → 次日低开概率大
- 即使市场环境好，赚钱效应强，能否炸板跟该股**本身的筹码分布、机构持股**也有关系

### 邢者自己的打板历史

- **2015.10-2016.02 黄金期**："**几乎是每周打几个板**" → 当时行情好
- 当时自然换手板每天几十个，连板一大堆
- 即使打烂板，**行情好 → 第二天也赚钱**
- **但这并不是打板水平提高了** → 是**占了市场的大便宜**

## 风控逻辑

- **弱势不重仓打板**：以低吸为主
- **同一只票炸板**：考虑个股筹码分布和机构持股
- **"一招鲜吃遍天"大忌**：必须做到**随波逐流**
- **市场每天都在变**：思维模式 + 操作方式都要不停变
- **打板要过心魔**：眼快 + 手快 + 铁的纪律

## 经典案例

| 案例 | 类型 | 启示 |
|------|------|------|
| **摩恩电气** | 打板连续重伤 | 弱势中打板的风险 |
| **利君股份** | 打板连续重伤 | 弱势中打板的风险 |
| **开创国际** | 打板连续重伤 | 弱势中打板的风险 |
| **杭氧股份** | 打板连续重伤 | 弱势中打板的风险 |
| **2015.10-2016.02 黄金期** | 邢者周打几板 | 行情好时打板的高成功率 |
| **赵老哥 2009-2012** | "八年一万倍" | 打板起家的代表 |

## 关键人物

| 人物 | 关键语录/事迹 | 与本文关联 |
|------|---------------|------------|
| **瑞鹤仙** | "只要买的好，怎么卖都行" | 核心理念引述 |
| **赵老哥** | "八年一万倍"，2009-2012 打板起家 | 打板的代表人物 |
| **邢者** | 2015.10-2016.02 周打几板 | 自身打板实战回顾 |

## 金句

> 邢者认为一个合格的交易选手，这三种技能都要掌握，每一种模式都要学习并实践，如果只用一种模式买票，资金很难做大。

> 瑞鹤仙曾经说过，"只要买的好，怎么卖都行！"

> 在弱势中，打板本身就有很大的风险。

> 所以不能见个板就要打，为了打板而打板，只会一输再输。

> 这并不能说明你打板水平提高了，而是你占了市场的大便宜。

> 追涨：是这三个模式中**难度最大**的，这种最难的操作模式，偏偏就是散户最喜欢的模式。

> 打板：是这三个模式中**最简单的，也是最暴利**的。

> "八年一万倍"的赵老哥起家就是靠打板为生。

> 股市最忌讳的就是："一招鲜，吃遍天"和"一条路走到黑"。

> 要想紧跟市场，必须要做到随波逐流。

## 适用场景

### 三种模式分别适合

| 模式 | 适合场景 |
|------|----------|
| **低吸** | 熊市；初学者；强势股分时回调（参考本批《强势股低吸战法》） |
| **追涨** | 有大局观 + 几年股龄；市场情绪 + 板块龙头把握到位 |
| **打板** | 强势行情；眼快手快 + 铁的纪律；弱势要谨慎（赵老哥早期模式） |

### 总体策略

- ✅ 大盘强势 → 打板为主
- ✅ 大盘弱势 → 低吸为主
- ✅ 牛熊切换 → 追涨
- ❌ 弱势硬打板（"打一个死一个"）
- ❌ 单一模式（资金难做大）
- ❌ 死守一种模式（"一条路走到黑"）

## 关联阅读

- 低吸实操：本批《强势股低吸战法》（同作者，4 笔建仓实录）
- 追涨的全局观：本批《云意电气涨停》（同作者，跷跷板原理 + 锯齿洗盘）
- 打板系统：本批《打板手法系统》（同作者）
- 抓妖股接力：本批《抓妖股概率》（同作者）
- 模式平衡：本批《JOKER 皇打板逻辑》（"有逻辑地打板"= 模式灵活切换）
- C 盘《邢者心法_深度研读报告》《瑞鹤仙心法_深度研读报告》

## 与其他游资呼应

- **瑞鹤仙**（本批核心引述）："只要买的好，怎么卖都行"——本批核心理念来源
- **赵老哥**："八年一万倍"打板起家 → 本批打板案例代表
- **Asking**：选股是决定性前提 + 三种模式要会 → 短线通才
- **JOKER 皇**：本批《JOKER 皇打板逻辑》"打板模式并未失效，只是要换一种思维" = 模式灵活切换
- **炒股养家**："不涨停即走"vs 打板"次日高开获利" → 短线两种决策
- **孤独牛背**：本批《孤独牛背婚礼演讲》"龙头妖股战法"→ 追涨的极致

---

*笔记来源：用户上传《浅谈我对低吸追涨打板的理解.docx》*
*整理日期：2026-06-25*
`,oneLine:`**只要买的好，怎么卖都行**（瑞鹤仙语）——本文是邢者对三种买股模式的对比 + 弱势反思，核心结论：**三种技能都要掌握，如果只用一种模式买票，资金很难做大**。`,tags:[`低吸`,`追涨`,`打板`,`模式选择`,`弱势生存`]},{id:`P1P2_养家_全集`,title:`养家_全集`,category:`顶级游资心法`,source:`P1P2`,filename:`实战笔记_养家_全集.md`,content:`# 实战笔记 · 养家全集（P1P2 完整版）

> 题材分类：心法全编 / 养家实录 / 职业炒手心法 / 板块炒作
> 游资/作者：孙峰（养家）、龙飞虎（陈新宇）、职业炒手（王涛/王元杰）、令胡冲
> 关联资料：参见 P0《实战笔记_养家心法》；C 盘 \`养家_全集_深度研读.md\`
> 来源：D 盘《炒股养家全集》

---

## 一句话定位

> **养家 2010 年从 200 万起步做实盘，到 2010.05 突破 200 万的过程 + 龙飞虎仓位管理 + 职业炒手思维 + 板块炒作规律 + 令胡冲打板复盘方法的完整合集。**

## 核心观点（6 大模块）

### 模块 1：龙飞虎仓位管理

- **衡量能否职业炒股** = 能控制回撤幅度
- **持仓风格**：滚动、分仓，3-6 成收盘仓位
- **原则**：严格控制总市值的回撤幅度，谋求低速、稳定的上行曲线
- **心态控制**：常常会因为老仓的不利，而放弃或者控制一天的主动进攻

### 模块 2：炒股养家思路 1

1. 把握住了市场的热点和焦点，认清了**市场赚钱效应**的所在
2. 强势阶段买股逻辑：**赚钱效应下的资金不断进入 → 选强**
3. 弱势阶段买股逻辑：**恐慌盘的不断宣泄 → 宣泄待尽 → 低吸**
4. **不符合主流热点的涨停板容易被砸**
5. **买入机会，卖出风险，只做对的交易，胜负交给概率**

### 模块 3：炒股养家思路 2

- **得散户心者得天下；人气所向，牛股所在**
- **下跌趋势各阶段炒作模式**：
  - 初期：仍有主升能力的品种
  - 第二阶段：高位二次确认见顶嫌疑 → 大周期超跌品种
  - 第三阶段：强势品种大幅回落 → 个股性机会
  - 末段：市场恐慌 → 等待有持续性的热点领导市场上涨

### 模块 4：职业炒手思维

1. **盘后静态选股代替盘中动态选股**
2. **午间收盘前拉高的个股，开盘后价格易成为当日盘中高点**
3. **追涨 = 第一次放量上穿 5 天线、涨停品种**
4. **低吸 = 龙头品种均线附近买**
5. **大盘急跌告一段落，可以做反弹行情**
6. **牛市的思路不应做超跌，而应做抗跌**
7. **弱市市场，没有思路就是最好的思路**

### 模块 5：板块炒作规律

> 沪深股市目前已有 1 千多只股票，不可能再出现齐涨共跌的情况

**主流热点 3 阶段**：
- **第 1 阶段**：出现大幅上涨的股票，板块未跟风
- **第 2 阶段**：相关媒体指出热点是什么题材，短线客开始追涨
- **第 3 阶段**：几乎每个投资者都知道，开始疯狂追涨，**主力开始大举出货**

**主流热点 3 大特征**：
- 领头羊直线上攻，迅速翻倍，形成"神话"股
- 巨大比价效应下，板块炒作时间较久
- 投资者介入"紧跟神话股启动的股票"

**板块内 4 大规律**：
- 领头羊一路大涨，板块内部分个股开始跟风上涨
- 一旦领头羊涨势趋缓 → 另一个明星股出现
- 板块内鸡犬升天 → 主力大举出货之时
- 投资者多数在板块全面启动时重仓抢盘 = 最高点

### 模块 6：令胡冲打板方法

1. **市场氛围**（最重要）= 如果跌幅榜上躺着众多跌停或大跌 5% 以上的个股，不要轻易出手
2. **个股的人气、股性**= 近期经常有过涨停，第二天还能不闷杀的股
3. **趋势**= 冷门个股趋势板，最好有极其连贯的趋势

**打板时机**：
- 一般是直接往涨停上去扫
- 个股开板了或快要开板时直接挂涨停去买
- 反应慢 → 尾盘判断 → 买几个烂板

### 模块 7：令胡冲复盘方法

- 看昨天的涨停板今天的赚钱效应
- 哪一类涨停股次日有肉 → 持续的赚钱效应
- **重视趋势**：当趋势转折时，别去接飞刀
- **盘感**：自己长期复盘和市场天天对话的结果
- **细节**：当日国企改革 839 双板也得重视

## 仓位管理（龙飞虎滚动分仓法）

| 阶段 | 仓位动作 | 备注 |
|------|----------|------|
| 第 2 天强势 | 上午激进，开新仓 | 强势阶段 |
| 第一笔追板封住 / 低吸成功 | 寻找第 2 笔 → 8 成 - 满仓 | 进攻模式 |
| 老仓不涨停 | 逐步止赢，3-6 成过夜 | 锁定利润 |
| 开新仓后走弱 | 降低预期，加速老仓了结 | 收缩模式 |
| 大盘与个股不良信号 | 无条件了结老仓 | 风险第一 |
| 老仓不佳时 | 谨慎开新仓，5 成上下 | 震荡市策略 |

## 选股方法（板块维度）

### 热点板块诞生的环境（5 大类型）

1. **大盘中大级底部的 V 形反转** → 理论上 9 个板的大龙头
2. **大盘熊市下行中的局部反弹**（55 天以下）→ 龙头高度 5-7 个板
3. **大盘历经中大级底部之后的主升和尾声** → 主升（07 年有色、军工）和尾声（参股券商）
4. **大盘突然利空暴跌后的刚完成吸筹尚未出货的个股**
5. **大盘不处于暴跌位置恰有高送配或资产注入等题材**

### 热点板块内部传导路线

- **题材在先** → 直接收益的个股极易成为龙头
- 看第一个板的封板时间、封单大小、流通盘大小、股东结构、筹码结构、股价位置、图形
- 场外踏空资金也开始参与非直接收益的个股
- **主力的布局一般只选择第一梯队**

## 风控逻辑

### 养家风控 5 大要点

1. **弱市不亏钱** = 复利增长的关键中的关键
2. **弱市空仓** = 度过漫漫熊市的唯一法门
3. **赢钱能守住，亏钱能打回** = 职业选手起码要求
4. **超短线极其明显** → 大赢后极亢奋下心态失误
5. **每次大盘疯狂时，关注滞涨的权重股突然启动** = 大盘变盘信号

### 养家心法"8 大要点"

1. 没有做到持续稳定盈利之前，**永远不要再投更多的钱**
2. 任何时候离开这个市场对大部分人都是最明智的选择
3. **书上的东西仅仅作为参考**，自己体会到的才是财富
4. 任何行业只要努力就能成功，**股票不管多努力，没有天分，几乎不可能成功**
5. 股市充分体现人性弱点
6. **会作股票会赚钱的人不会做股评，不会收会员**
7. 市场上没有人能准确预测个股和指数的走势
8. 牛市是人都会赚钱，**高手高在熊市不亏钱**

## 经典案例（养家访谈实录）

### 案例 1：2010.05.25 突破 200 万
- 参加了实盘大赛，帐户踏上 200 万整数关
- 非常感谢职业炒手、asking 等短线高手
- 答："最重要的是**信念**二字，具体操作上一个是对于热点的把握，一个是对于大盘和个股分时高低点的把握"

### 案例 2：第 4 届实盘赛
- 因为把握了一次**手机支付概念**的热点机会
- 第 5 届没赚什么，只是大盘跌得多，侥幸抗住了
- "也许是近半年来人品的集中爆发"

### 案例 3：2010.05 反弹
- 这段下跌期的操作，绝大多数买入是**等大阴线后，第二天再探底的时候**
- 板块上，以**地产股为风向标**，等地产股企稳时操作新能源等热点
- 地产股回落时就减仓

### 案例 4：康强电子
- 买康强电子，**实际是买手机支付**
- 买手机支付是买新兴产业，**一个新故事出现在主流热点时候，便是赚大钱的机会**
- 早年大量学习**不动明王**（涨停板技巧的高手）

### 案例 5：辰州矿业
- 2010.10.9 重点出击热点**黄金股**辰州矿业
- 选相对盘小的介入，随后两天轻松赚出
- 第一招是和 asking 学的，第二招是和炒手学的

### 案例 6：马钢股份
- 系统的问题，没办法把马钢卖这么高
- 体现了两个手法：**强势追击热点 + 介入超跌的钢铁板块**

## 金句

> 衡量能否职业炒股很重要的一条就是能控制回撤幅度。

> 技术发挥—仓位控制—良好心态，三者相辅相承，是个良性的过程。

> 把握住了市场的热点和焦点，认清了市场赚钱效应的所在。

> 强势阶段：选强（赚钱效应下的资金不断进入）；弱势阶段：低吸（恐慌盘宣泄待尽）。

> 得散户心者得天下；人气所向，牛股所在。

> 弱市学会空仓是度过漫漫熊市的唯一法门。

> 弱市不亏钱才是复利增长的关键。

> 攻在量中，退在量后。

> 强中自有强中手，哪个高手也有大亏的时候，心态再好不要和趋势作对。

> 一个游资题材板块就像一朵花，天时地利人和，能盛开。

> 我们的对手盘具备完全碾压实力，只能根据其成本位置去跟庄，高位一律自行回避。

> 买入机会，卖出风险，只做对的交易，胜负交给概率。

> 在你都快不相信时，它来了。

> 牛市的思路不应做超跌，而应做抗跌。

> 没有做到持续稳定盈利之前，永远不要再投更多的钱。

## 适用场景

- ✅ 牛市主升浪（强势阶段选强）
- ✅ 板块轮动明确的接力行情
- ✅ 题材爆发初期的打板
- ✅ 弱势市场的低吸反包
- ❌ 弱势市场的追高（容易被砸）
- ❌ 板块全面启动时（主力出货期）
- ❌ 不符合主流热点的涨停板

## 关联阅读

- 心态/控制力：参见本批《孤独牛背_控制回撤精要》
- 养家访谈补充：参见 P0《实战笔记_养家心法》
- 实盘案例：参见本批《令胡冲_50万至800万成长之路》
- 集合竞价：参见本批《5 分钟筛选牛股》
- 龙头战法：参见本批《养家_全集》《淘股吧_高手语录集》

## 与其他游资的呼应

- **Asking（邱宝裕）**：养家承认"第一招是和 asking 学的"
- **职业炒手（王涛）**：养家承认"第二招是和炒手学的"
- **龙飞虎（陈新宇）**：养家大量引用龙飞虎语录
- **不动明王**：养家早年学习的"涨停板技巧高手"
- **葵花宝典（陈新宇早期）**：养家评价"葵花宝典 99 年 5000 元起家"
- **cdrr**：养家"519 之前分文没有"的真实故事主角

---

*笔记来源：D 盘《炒股养家全集》PDF*
*整理日期：2026-06-25*
`,oneLine:`**养家 2010 年从 200 万起步做实盘，到 2010.05 突破 200 万的过程 + 龙飞虎仓位管理 + 职业炒手思维 + 板块炒作规律 + 令胡冲打板复盘方法的完整合集。**`,tags:[`心法全编`,`养家实录`,`职业炒手心法`,`板块炒作`]},{id:`P1P2_养家心法论股市`,title:`养家心法论股市`,category:`顶级游资心法`,source:`P1P2`,filename:`实战笔记_养家心法论股市.md`,content:`# 实战笔记 · 炒股养家·心法论股市（P1P2 完整问答版）

> 题材分类：情绪周期 / 龙头战法 / 风控哲学
> 游资/作者：炒股养家
> 身份：淘股吧灵魂级人物，2008 年开始职业（约 3500 点起步，回调到 1664 接近腰斩）；后稳定盈利
> 席位：华泰证券荣超商务中心（多次一字板包场）
> 关联资料：参见 P0《实战笔记_养家心法》主线版；C 盘 \`炒股养家_深度研读报告.md\`
> 来源：D 盘《炒股养家心法论股市》PDF（P1P2 增补版：含原帖 7 条心法 + 60+ 个问答互动）

---

## 一句话定位

> **得散户心者得天下；人气所向，牛股所在。** 理论体系核心是"基于对市场情绪的揣摩，进而判断风险和收益的比较"。

## 核心观点（7 条心法原文）

1. **理论体系核心**：揣摩市场情绪 → 判断风险/收益比较 → 指导操作。
2. **高手买入龙头，超级高手卖出龙头**。
3. **别人贪婪时我更贪婪，别人恐慌时我更恐慌**。
4. **敢于大盘低位空仓，敢于大盘高位满仓；心中无顶底，操作自随心**。
5. **永不止损，永不止盈**——出局就是出局。
6. **得散户心者得天下；人气所向，牛股所在**。
7. **掌握市场之心，胜利接踵而至；心被市场掌握，失败连绵不绝**。

## 核心观点（问答补充 8 条，源自 P1P2 完整互动版）

1. **短线好手仓位与市场整体交易量呈正相关**：机会多时多操作，机会少时少操作。
2. **左侧交易时机**：大盘连续下跌一段后，再遇快速下跌的时候（典型如 2012-08-31）。
3. **崩溃的具体标准**：①较大面积跌停（几十到上百家）②不少品种有 20-30% 以上跌幅。
4. **领跌品种信号**：①领跌品种中有近期强势股 ②90-120 天周期级别品种（煤炭/水泥）有领跌倾向。
5. **新热点挖掘方法**：信息催化剂 + 自身条件（盘子、价格、形态）→ 市场有自我发现功能。
6. **主流/次主流划分**：主流（如页岩气）长阶段反复操作；次主流（如移动互联）操作周期更短，不少选择隔日超短。
7. **职业化前提**：①资金有一定规模（不为生活压力困扰）②**任何行情下都能稳定盈利**。
8. **2012 年市场环境**：当前市场操作难度 > 2008 年；二级市场整体是**负和博弈**格局。

## 仓位与操作

| 情况 | 操作 |
|------|------|
| 大盘崩溃前 | **几乎空仓**（"放弃很多机会"） |
| 崩溃发生 | 抄底超跌品种或新热点 |
| 主流题材 | 一个较长阶段反复操作 |
| 次主流 | 不少选择隔日超短 |
| 重仓条件 | "对于后市没有 30-50% 上涨空间的股票，**永远不要重仓买**" |
| 左侧交易 | 大盘连续下跌后再遇快跌时，盘中下探反抽即可抄底 |
| 主流切换 | 关注标杆品种（深天马、掌趣科技）的走势作为参考 |

## 风控逻辑

> 控制回撤，最重要的就是回避系统性崩溃风险。
> 看看天气，如果觉得要下雨了，就早点回家，不要贪玩，天气好了再出来。

- 崩溃前兆：领跌品种中有近期强势股 + 90-120 天周期级别品种有领跌倾向
- "看看天气，如果觉得要下雨了，就早点回家，不要贪玩，天气好了再出来"
- 崩溃后操作：选择相关标的出击，至少风险上小了大截
- **"得散户心者得天下"**——题材必须有群众基础

## 关于职业化的忠告

> 第一个条件是资金有一定规模，这样你不会因为生活压力陷入泥潭。
> 第二就是确实能稳定盈利。

- 2008 年开始职业时接近 3500 点 → 1664 时账户也接近腰斩
- "在 3500 点职业，1664 时也是痛苦的"
- 当前市场操作难度 > 2008 年
- **"不管行情如何，仍然可以稳定盈利"** 是职业化的必要条件
- 2012 年网友实例："去年 5 月份开始职业的，20 万到现在剩 3 万"（反面教材）

## 情绪揣摩的方法论（详细版）

| 维度 | 观察对象 | 含义 |
|------|----------|------|
| **追涨效应** | 前一天涨幅前 20 名第二天的表现 | 喜欢追涨的人盈亏状况 |
| **抄底效应** | 逢下跌抄底的人盈亏状况 | 抄底者开始亏钱 = 崩溃前兆 |
| **领涨领跌** | 各周期阶段的领涨/领跌板块 | 赚钱效应的演变 |
| **崩溃特征** | 较大面积跌停（几十到上百家）+ 20-30% 跌幅品种 | 系统性风险前兆 |
| **次主流标杆** | 深天马、掌趣科技等 | 次主流是否走强的参考信号 |

## 主流/支流/次主流的划分

- **主流**（如页岩气）：较长阶段反复操作为主
- **次主流**（如移动互联）：操作周期更短，不少选择隔日超短
- 操作标的随主流/次主流切换，**用标杆品种的走势作为参考**

## 套利性机会的逻辑链

\`\`\`
龙头股超预期上涨
       ↓
引发关联板块补涨（套利标的 1）
       ↓
关联板块超预期
       ↓
再引发下一波套利标的
       ↓
……直到题材结束
\`\`\`

**完整案例链**：山东墨龙（页岩气龙头）→ 宝莫股份（套利）→ 深天马 A（移动互联龙头）→ 华东科技（套利）→ 000727（套利）→ 000050（触摸屏龙头）

## 经典案例（P1P2 完整版补充）

- **页岩气板块**（2012.08）：山东墨龙（002490）→ 宝莫股份
- **移动互联**（2012.08.21~22）：深天马 A、掌趣科技（双涨停）→ 华东科技
- **触摸屏**（2012.08.21）：000727 华东科技 → 000050 深天马 A
- **苹果/3D 打印**（2012-2013）：泛苹果概念的反复套利
- **2012 阴跌行情**（5-9 月）：仓位不大、频率一般、整体打平或小亏
- **3D 打印分歧**（2012.09）：大族激光三板被咬到回撤

## 龙头 vs 跟风（养家观点）

> 所谓的龙头理论实际并不科学，虽然很多做短线对此笃信不无疑，这也是导致长期迷茫和不能稳定获利的本源。

- **买龙头 vs 买跟风**："不是胆量问题，是根据板块整体动能"
  - 龙头：股价尚未反应溢价时介入
  - 跟风：龙头赚钱效应十足 + 部分跟风尚处低位 → 受龙头激发向上
- **代表人物**：论坛 ID 职业炒手正是"做跟风的稳健派"
- **"得散户心者得天下"**：题材能否讲出大故事，能否扩散热点，能否抓住散户心理

## 关于模式选择

- **"或许你需要解决的不是有胆做龙头的问题，而应领会龙头和跟风品种间的套利关系"**
- **"若是引导市场，坚决反对这么做"**：养家明确说他的模式是**跟随**而非引导
- **暴跌后的选择**：①套利低位页岩气 ②部分 ST 摘帽 ③**不追宝莫**（已涨多）
- **市场预期管理**："别人贪婪时他更贪婪是指敢于大盘高位满仓"

## 金句

> 别人贪婪时我更贪婪，别人恐慌时我更恐慌。

> 敢于大盘低位空仓，敢于大盘高位满仓；心中无顶底，操作自随心。

> 高手买入龙头，超级高手卖出龙头。

> 得散户心者得天下；人气所向，牛股所在。

> 掌握市场之心，胜利接踵而至；心被市场掌握，失败连绵不绝。

> 看看天气，如果觉得要下雨了，就早点回家，不要贪玩，天气好了再出来。

> 股票走势本质是持币者与持筹者的博弈产生，应该多揣摩两者之心，让自己站在主动的这一方即可。

> 别人贪婪时他更贪婪是指敢于大盘高位满仓，让……

> 让自己处于主动的一方，持筹者在下跌过程中想想同样和你持筹的人怎么想。

> 买入那一刻机会大过风险即可。

## 适用场景

- ✅ 任何行情下的市场情绪揣摩
- ✅ 主流/次主流切换的节奏把握
- ✅ 崩溃前后的反向操作
- ✅ 龙头/跟风两层结构（套利性机会）
- ❌ 重仓买入没有 30-50% 空间的股票
- ❌ 没有稳定盈利能力的职业化
- ❌ 引导市场（养家明确反对）

## 关联阅读

- 情绪周期与 P0《孤独牛背婚礼演讲》《Asking 理念总结》形成"龙头三家"
- 风控哲学与 P0《孤独牛背控制回撤》共振
- 套利性机会（养家）vs 龙头战法（Asking）互补
- 反面参考：P0《丁一熊熊市策略》（熊市不猜底）
- C 盘 \`炒股养家_深度研读报告.md\`、\`ASKING心法_深度研读报告.md\`

## 与其他游资的对比/呼应

| 维度 | 养家 | Asking | 孤独牛背 | 职业炒手 |
|------|------|--------|----------|----------|
| 核心方法 | 情绪揣摩 + 概率 | 龙头战法 + 守株待兔 | 龙头/妖股 + 扫板 | 龙头跟风套利 |
| 仓位哲学 | 大盘低位空仓、高位满仓 | 半仓试错 | 龙头龙头再龙头 | 跟随而非引导 |
| 风险偏好 | 极高（崩溃后重仓） | 中高 | 高（纪律严） | 中（稳） |
| 离场标准 | 超级高手卖龙头 | 不涨停即出 | 第二天 2:30 前卖 | 跟随龙头 |
| 操作模式 | 主流/次主流切换 | 龙头+守株待兔 | 快速第一板 | 跟风套利 |

> **P1P2 增补说明**：P1P2 版包含 P0 之外的 **60+ 个完整问答互动**（页岩气/移动互联/3D 打印/苹果产业链/苹果/职业化），细节丰富度远超 P0 主线版。本笔记重点收录 P0 缺失的"市场情绪揣摩方法论""套利性机会逻辑链""职业化忠告""大众心理博弈"等部分。

---

*笔记来源：D 盘《炒股养家心法论股市》PDF*
*整理日期：2026-06-25*
`,oneLine:`**得散户心者得天下；人气所向，牛股所在。** 理论体系核心是"基于对市场情绪的揣摩，进而判断风险和收益的比较"。`,tags:[`情绪周期`,`龙头战法`,`风控哲学`]},{id:`P1P2_再站杯_高手集锦`,title:`再站杯_高手集锦`,category:`高手手记`,source:`P1P2`,filename:`实战笔记_再站杯_高手集锦.md`,content:`# 实战笔记 · 再战杯高手集锦（5 位顶级选手合集）

> 题材分类：再战杯实盘赛 / 高手成长案例 / 短线暴利
> 游资/作者：若茶 / 只看题材炒股 / 姓股名（股神）/ 成都三万起家 / 4 位高手合集
> 风格特征：5 位高手的实盘记录与点评，跨越 2011-2015 多个时间段
> 关联资料：P0《实战笔记_令胡冲_盘感训练》、P1P2《实战笔记_令胡冲_50万至800万成长之路》
> 来源：D 盘《再站杯高手集锦》PDF（2018.06.15 增补）
> ⚠️ **内容有截断，详见原始文件**（38.6MB 大文件，仅取前 50% 内容）

---

## 一句话定位

> **若茶 6→120 万 / 只看题材 10→100 万 / 股神 130→1300 万 / 成都三万起家 3→600 万——四位再战杯顶尖选手的暴利成长路径与股神 2015.1-2 完整交割单。**

## 5 位高手速览

| 序号 | 选手 | 周期 | 资金增长 | 增长率 | 再战杯成绩 | 风格特征 |
|------|------|------|----------|--------|------------|----------|
| 1 | **若茶** | 熊市 10 个月 | 6 万→120 万 | **20 倍** | - | 熊市暴利无人能破 |
| 2 | **只看题材炒股** | 3 届比赛 | 10 万→100 万 | **10 倍** | **2 冠 1 亚** | 题材驱动 |
| 3 | **姓股名（股神）** | 5 个月 | 130 万→1300 万 | **10 倍** | **22 届亚军**（23 届满仓停牌退赛） | 满仓一股进出 |
| 4 | **成都三万起家** | 2 年 | 3 万→600 万 | **200 倍** | - | 卖鱼小商贩→自由职业者 |
| 5 | **股神（详细点评）** | 2015.1.15-2.3 | 完整 19 条交割单 | - | - | 打板/半路/点火/低吸全手法 |

## 核心观点

1. **暴利路径的共性**：4 位选手都在**熊市或震荡市**中实现 10-200 倍增长——印证"弱势出高手"的逻辑。
2. **股神的"满仓一股进出"**：原文"特点：股神喜好满仓一股进出，随心所欲，没有条条框框限制，觉得可以搞就搞。有时半路，有时打板，有时抄底，超短手法。"
3. **资金曲线"中途只取款而没有转入过资金"**——纯利润累积，不靠追加本金。
4. **打板/半路/点火/低吸 4 大手法"总有一款适合你"**——原文所发交割单覆盖全部短线手法。
5. **股神 1.6 ST 广夏案例**：复牌补跌打开跌停后，介入位置考虑动机是"广夏的左肩启动点技术支撑，分时巨量打开跌停后拉升介入，赌涨停"——典型"左侧埋伏 + 右侧确认"。

## 股神（姓股名）2015.1.15-2.3 完整交割单

### 第一张交割单（2015.1.15-1.21）

| 成交日期 | 证券代码 | 证券名称 | 买卖 | 成交价格 | 成交数量 |
|----------|----------|----------|------|----------|----------|
| 20150115 | 300398 | 飞凯材料 | 卖出 | 60.590 | -500 |
| 20150115 | 300398 | 飞凯材料 | 卖出 | 60.448 | -6,000 |
| 20150115 | 002738 | 中矿资源 | 买入 | 28.290 | 15,400 |
| 20150115 | 736611 | 诺力配号 | 买入 | 18.370 | 8 |
| 20150115 | 736601 | 再升配号 | 买入 | 7.900 | 6 |
| 20150115 | 736678 | 火炬配号 | 买入 | 10.380 | 16 |
| 20150115 | 791069 | 黄金配号 | 买入 | 3.570 | 37 |
| 20150115 | 002739 | 万达院线 | 买入 | 21.350 | 36 |
| 20150115 | 300364 | 中文在线 | 买入 | 6.810 | 24 |
| 20150115 | 002734 | 利民股份 | 买入 | 10.690 | 20 |
| 20150115 | 300417 | 南华仪器 | 买入 | 16.080 | 8 |
| **20150116** | **002738** | **中矿资源** | **卖出** | **31.120** | **-17,300** |
| 20150116 | 002337 | 赛象科技 | 买入 | 37.550 | 14,300 |
| **20150119** | **300268** | **万福生科** | **买入** | **12.000** | **94,100** |
| 20150119 | 002337 | 赛象科技 | 卖出 | 37.860 | -5,000 |
| 20150119 | 002337 | 赛象科技 | 卖出 | 37.815 | -9,300 |
| 20150119 | 300244 | 迪安诊断 | 买入 | 55.220 | 9,700 |
| 20150120 | 300268 | 万福生科 | 卖出 | 12.780 | -14,165 |
| 20150120 | 300268 | 万福生科 | 卖出 | 12.760 | -35,000 |
| 20150120 | 300411 | 金盾股份 | 买入 | 34.600 | 1,700 |
| 20150120 | 300268 | 万福生科 | 卖出 | 13.350 | -16,200 |
| 20150120 | 002516 | 江苏旷达 | 买入 | 23.400 | 9,200 |
| 20150120 | 300244 | 迪安诊断 | 卖出 | 55.000 | -9,700 |
| 20150120 | 002516 | 江苏旷达 | 买入 | 23.697 | 22,500 |
| 20150120 | 002516 | 江苏旷达 | 买入 | 23.680 | 24,000 |
| 20150120 | 300268 | 万福生科 | 卖出 | 12.990 | -1,589 |
| 20150120 | 002516 | 江苏旷达 | 买入 | 23.390 | 900 |
| 20150120 | 300268 | 万福生科 | 卖出 | 12.950 | -27,146 |
| 20150120 | 002516 | 江苏旷达 | 买入 | 23.540 | 7,200 |
| 20150120 | 002516 | 江苏旷达 | 买入 | 24.710 | 7,300 |
| **20150121** | **300411** | **金盾股份** | **卖出** | **39.69** | **-1,700** |
| 20150121 | 300268 | 万福生科 | 买入 | 14.320 | 4,700 |

### 第二张交割单（2015.1.27-2.3）

| 发生日期 | 摘要 | 证券代码 | 证券名称 | 买卖 | 成交数量 | 成交价格 | 成交金额 |
|----------|------|----------|----------|------|----------|----------|----------|
| 20150127 | 证券卖出 | 300104 | 乐视网 | 卖出 | -9,700 | 55.890 | 542,133.00 |
| 20150127 | 证券卖出 | 300104 | 乐视网 | 卖出 | -28,536 | 55.832 | 1,593,209.32 |
| **20150127** | **证券买入** | **300411** | **金盾股份** | **买入** | **57,100** | **37.273** | **2,128,279.00** |
| 20150128 | 证券买入 | 603000 | 人民网 | 买入 | 45,900 | 48.000 | 2,203,200.00 |
| 20150128 | 证券卖出 | 300411 | 金盾股份 | 卖出 | -46,900 | 38.641 | 1,812,259.00 |
| 20150128 | 证券卖出 | 300411 | 金盾股份 | 卖出 | -10,200 | 38.430 | 391,986.00 |
| 20150129 | 证券卖出 | 603000 | 人民网 | 卖出 | -1,300 | 47.890 | 62,257.00 |
| 20150129 | 证券卖出 | 603000 | 人民网 | 卖出 | -1,800 | 47.560 | 85,608.00 |
| 20150129 | 证券卖出 | 603000 | 人民网 | 卖出 | -6,000 | 47.600 | 285,600.00 |
| 20150129 | 证券卖出 | 603000 | 人民网 | 卖出 | -6,000 | 47.590 | 285,540.00 |
| 20150129 | 证券卖出 | 603000 | 人民网 | 卖出 | 30,800 | 47.750 | 1,470,700.00 |
| 20150129 | 证券买入 | 300104 | 乐视网 | 买入 | 24,800 | 52.670 | 1,306,216.00 |
| 20150129 | 证券买入 | 300104 | 乐视网 | 买入 | 16,700 | 52.720 | 880,424.00 |
| **20150130** | **证券卖出** | **300104** | **乐视网** | **卖出** | **-41,500** | **50.500** | **2,095,731.12** |
| 20150130 | 证券买入 | 000875 | 吉电股份 | 买入 | 394,700 | 5.310 | 2,095,857.00 |
| 20150202 | 证券买入 | 601021 | 春秋航空 | 买入 | 37,000 | 51.857 | 1,918,692.00 |
| 20150202 | 证券卖出 | 000875 | 吉电股份 | 卖出 | -394,700 | 4.880 | 1,926,136.00 |
| 20150203 | 证券卖出 | 601021 | 春秋航空 | 卖出 | -37,000 | 58.780 | 2,174,860.00 |
| 20150203 | 证券买入 | 601021 | 春秋航空 | 买入 | 36,300 | 59.800 | 2,170,740.00 |

## 经典交割单案例（股神 2015.1-2）

### 案例 1：万福生科 300268 完整操作（1.19-1.21）

- **1.19 买入**：94,100 股 × 12.000 = 1,129,200 元
- **1.20 卖出**（分 5 笔）：14,165 + 35,000 + 16,200 + 1,589 + 27,146 = 94,100 股
  - 卖 12.780 元 14,165 股 = 181,029.70 元
  - 卖 12.760 元 35,000 股 = 446,600 元
  - 卖 13.350 元 16,200 股 = 216,270 元
  - 卖 12.990 元 1,589 股 = 20,635.11 元
  - 卖 12.950 元 27,146 股 = 351,540.70 元
- **1 日盈亏**：+86,875.51 元（+7.69%）
- **1.21 反手买入**：4,700 股 × 14.320 = 67,304 元（追高）

### 案例 2：金盾股份 300411 三段操作（1.20-1.28）

- **1.20 试仓**：1,700 股 × 34.600 = 58,820 元
- **1.21 兑现**：1,700 股 × 39.69 = 67,473 元（+14.71%）
- **1.27 重仓**：57,100 股 × 37.273 = 2,128,279.00 元
- **1.28 兑现**（分 2 笔）：46,900 + 10,200 = 57,100 股
  - 卖 38.641 元 46,900 股 = 1,812,259.00 元
  - 卖 38.430 元 10,200 股 = 391,986.00 元
- **1 日盈亏**：+75,966.00 元（+3.57%）

### 案例 3：乐视网 300104（1.27-1.30）

- **1.27 卖出**：38,236 股（9,700 + 28,536）均价 55.832-55.890
- **1.29 买回**：41,500 股（24,800 + 16,700）均价 52.670-52.720
- **1.30 卖出**：41,500 股 × 50.500 = 2,095,731.12 元
- **2 日盈亏**：约 -90,000 元（追高被套后割肉）

### 案例 4：人民网 603000（1.28-1.29）

- **1.28 买入**：45,900 股 × 48.000 = 2,203,200.00 元
- **1.29 卖出**（分 5 笔）：1,300 + 1,800 + 6,000 + 6,000 + 30,800 = 45,900 股
  - 卖 47.890 元 1,300 股 = 62,257.00 元
  - 卖 47.560 元 1,800 股 = 85,608.00 元
  - 卖 47.600 元 6,000 股 = 285,600.00 元
  - 卖 47.590 元 6,000 股 = 285,540.00 元
  - 卖 47.750 元 30,800 股 = 1,470,700.00 元
- **1 日盈亏**：-103,495 元（-4.70%，追高失败）

### 案例 5：吉电股份 000875（1.30-2.2）

- **1.30 买入**：394,700 股 × 5.310 = 2,095,857.00 元
- **2.2 卖出**：394,700 股 × 4.880 = 1,926,136.00 元
- **3 日盈亏**：-169,721 元（-8.10%，重仓被套）

### 案例 6：春秋航空 601021（2.2-2.3）

- **2.2 买入**：37,000 股 × 51.857 = 1,918,692.00 元
- **2.3 卖出**：37,000 股 × 58.780 = 2,174,860.00 元
- **1 日盈亏**：+256,168 元（+13.35%）

### 案例 7：迪安诊断 300244（1.19-1.20）

- **1.19 买入**：9,700 股 × 55.220 = 535,634.00 元
- **1.20 卖出**：9,700 股 × 55.000 = 533,500.00 元
- **1 日盈亏**：-2,134 元（-0.40%，平盘小亏）

### 案例 8：江苏旷达 002516（1.20）

- **当日买入**（分 6 笔）：9,200 + 22,500 + 24,000 + 900 + 7,200 + 7,300 = 71,100 股
- **均价**：23.39-24.71
- **总成本**：约 1,679,168 元

### 案例 9：飞凯材料 300398（1.15 兑现）

- **1.15 卖出**：6,500 股（500 + 6,000）均价 60.448-60.590
- **总金额**：393,108.50 元（前期持仓兑现）

### 案例 10：中矿资源 002738（1.15-1.16）

- **1.15 买入**：15,400 股 × 28.290 = 435,666 元
- **1.16 卖出**：17,300 股 × 31.120 = 538,376 元
- **1 日盈亏**：+102,710 元（+23.57%）

### 案例 11：赛象科技 002337（1.16-1.19）

- **1.16 买入**：14,300 股 × 37.550 = 536,965 元
- **1.19 卖出**：14,300 股（5,000 + 9,300）均价 37.815-37.860
- **3 日盈亏**：约 +4,000 元（+0.75%）

## 股神 1.6-1.12 特殊操作点评

### 1.6 ST 广夏 000557

> 1.6 号股神当天把手上股票处理完后，反手买入一只复牌补跌打开跌停的 ST 股，介入位置考虑动机是广夏的左肩启动点技术支撑，分时巨量打开跌停后拉升介入，赌涨停。

### 1.7 柘中股份 002346

> 1.7 号广夏接近跌停开出，待第 2 波拉升亏手续费跑掉——一般人看是一笔无效交易，但昨天一日赌刘涨停，今天应该能有 5-7 个点利润跑路。

**2015.01.07 柘中股份分时数据**：14:55 价位 13.12，成交量 1245。

### 1.12 飞利信 300287

> 半路板——1.12 半路板操作

### 1.8 中富

> 1.8 1 接 2 半路板——"1 板接 2 板"半路板模式

## 4 位高手风格对比

| 选手 | 资金起点 | 增长倍数 | 时间 | 风格关键词 | 关键启示 |
|------|----------|----------|------|------------|----------|
| **若茶** | 6 万 | 20 倍 | 10 个月 | 熊市暴利 | 弱势市场反而有大机会 |
| **只看题材炒股** | 10 万 | 10 倍 | 3 届比赛 | 题材驱动 | 题材预判是核心 |
| **股神** | 130 万 | 10 倍 | 5 个月 | 满仓一股 | 单一标的极致操作 |
| **成都三万起家** | 3 万 | 200 倍 | 2 年 | 平民逆袭 | 散户也能翻 200 倍 |

## 金句

> 若茶熊市十个月 20 倍 6 万做到 120 万的辉煌战绩至今无人能破，如何做到的？

> 只看题材炒股 3 届再战杯 2 冠 1 亚，演绎 10 万到 100 万的蜕变过程。

> 姓股名 五个月十倍 130 万到 1300 万之路。

> 成都三万起家两年二百倍如何从一个卖鱼小商贩三万起家成功转型为资产六百万的自由职业者？

> 所发之交割单将包括：打板、半路、点火、低吸，短中结合波段，总有一款适合你。

> 姓股名神，简称股神，再战杯 22 届亚军，23 届因满仓停牌退赛。初始资金是 130 万，停牌前是 1300 万，历时五个月。

> 特点：股神喜好满仓一股进出，随心所欲，没有条条框框限制，觉得可以搞就搞，有时半路，有时打板，有时抄底，超短手法，中途只取款而没有转入过资金。

> 介入位置考虑动机是广夏的左肩启动点技术支撑，分时巨量打开跌停后拉升介入，赌涨停。

> 1.7 号广夏接近跌停开出，待第 2 波拉升亏手续费跑掉——一般人看是一笔无效交易，但昨天一日赌刘涨停，今天应该能有 5-7 个点利润跑路。

## 适用场景

- **短线暴利路径研究**——4 位高手的成长曲线对比。
- **2015 年 1 月创业板牛市**的实盘赛交割单（万福生科/金盾股份/乐视网/人民网/吉电股份/春秋航空）。
- **"满仓一股进出"风格的极致表现**——股神 5 个月 10 倍。
- **打板/半路/点火/低吸 4 大手法**的具体应用。
- **ST 股"赌涨停"博弈**——ST 广夏 1.6 案例的"左肩启动点技术支撑"逻辑。
- **追高被套的真实代价**——股神 1.30 乐视网/吉电股份两个 -8%~-13% 案例。

## 关联阅读

### P0 已有笔记
- **《实战笔记_乔帮主交割单》**：乔帮主的实盘交割单，可与股神 2015.1 交割单形成"2014 vs 2015"对照。
- **《实战笔记_打板手法系统》**：打板手法的系统化整理，股神是"打板+半路+点火+低吸"全手法选手。
- **《实战笔记_抓妖股_连板概率》**：连板妖股的概率研究，股神 1.27 金盾股份 1 日 +3.57% 是非典型连板。
- **《实战笔记_集合竞价_奥义188元版》**：集合竞价理论，股神 1.6 ST 广夏是集合竞价打开跌停的实战。

### P1P2 同批次笔记
- **《实战笔记_令胡冲_50万至800万成长之路》**：令胡冲 2015 年同步 50→800 万，与股神 130→1300 万是"同市况双高手"。
- **《实战笔记_Ballcap_手记》**：ballcap 是"非职业 + 长期在场"路线，与 4 位高手的"暴利"形成风格对比。
- **《实战笔记_著名刺客_手记》**：著名刺客是 2014 年题材驱动，股神是 2015 年 1 月题材驱动+半路板。
- **《实战笔记_骑在牛股_手记》**：骑在牛股是 2011 年打板体系，股神是 2015 年全手法。

### C 盘 26 位游资心法
- 参考 C 盘"再战杯选手"心法语录，与本集锦的 4 位选手形成"语录 vs 实盘"互补。

## 与其他游资呼应

| 维度 | 股神（姓股名） | 令胡冲 | 成都三万起家 |
|------|---------------|--------|--------------|
| 资金起点 | 130 万 | 50 万 | 3 万 |
| 增长倍数 | 10 倍 | 16 倍 | 200 倍 |
| 时间 | 5 个月 | 1 年多 | 2 年 |
| 仓位 | 满仓一股 | 满仓切换 | - |
| 风格 | 全手法（打板/半路/点火/低吸） | 打板复盘 | 平民逆袭 |

**呼应点**：4 位选手代表了**"短线暴利的 4 种路径"**——
- **若茶**：熊市暴利派
- **只看题材炒股**：题材驱动派
- **股神**：满仓一股派
- **成都三万起家**：平民逆袭派

股神的 2015.1-2 交割单，是 P0/P1P2 中**最完整的 2015 年创业板牛市实盘样本**——
- **盈利单**：春秋航空 +13.35%、金盾股份 +3.57%、中矿资源 +23.57%、万福生科 +7.69%
- **亏损单**：吉电股份 -8.10%、人民网 -4.70%、乐视网 -4.30%（约）
- **特殊单**：ST 广夏 1.6 "赌涨停"+1.7 跌停割肉
- **平盘单**：迪安诊断 -0.40%、赛象科技 +0.75%

这种"盈亏全记录"完整呈现了 2015 年 1 月牛市初期的真实操作生态，是其他笔记无法替代的**实战档案**。

---

*整理日期：2026-06-25*
*来源：再站杯高手集锦.pdf（38.6MB 大文件，仅取前 50% 内容）*
`,oneLine:`**若茶 6→120 万 / 只看题材 10→100 万 / 股神 130→1300 万 / 成都三万起家 3→600 万——四位再战杯顶尖选手的暴利成长路径与股神 2015.1-2 完整交割单。**`,tags:[`再战杯实盘赛`,`高手成长案例`,`短线暴利`]},{id:`P1P2_均线_牛股深度学习`,title:`均线_牛股深度学习`,category:`打板追涨低吸`,source:`P1P2`,filename:`实战笔记_均线_牛股深度学习.md`,content:`# 实战笔记 · 牛股均线应用：深度学习笔记

> 题材分类：均线系统 / 葛南维八大法则 / 金山谷银山谷 / 慢牛与妖股
> 作者：邢者（公号：邢者股票池 xingzwgpc）
> 发表时间：2017-03-30
> 性质：邢者均线战法系统学习笔记，按 5 章 + 实战问题展开
> 关联资料：参见本批《均线_牛股深度学习》姊妹篇
> 来源：D 盘《牛股在均线中的应用之深度学习笔记》PDF

---

## 一句话定位

> **均线是绕不过的技术手法。** 因为它能让我们解决"会买不会卖，会卖不会拿"的千古难题——抓住牛股很难，抓住又拿不住更可惜。均线是骑牛股的尺子，让我们能与股市保持合适的距离。

## 核心观点

1. **均线能解决"持股信心"**：会买不会卖，会卖不会拿 → 均线一招鲜
2. **葛南维八大法则**：均线由道氏理论提炼而来
3. **金叉/死叉的威力**：短期中线资金合力 = 死叉是强烈的卖出信号
4. **金山谷 = 银山谷的二次确认**：形态理论的"反抽确认"
5. **三种基本形态**：交织 → 并列 → 发散
6. **慢牛是好的投资策略**：复利增长 + 节省盯盘时间
7. **慢牛拿不住的原因**：涨的迟缓 + 下跌时担心补跌
8. **妖股均线的两种用法**：连续涨停型 + 不连续涨停型
9. **均线是"公众语言"**：主力喜欢用均线施展四两拨千斤
10. **均线是你绕不过的技术手法**：4 大原因（看大盘 / 把握波段 / 大资金管理 / 投资理念统一）

## 选均线战法而不是 K 线的 3 个原因

1. **均线可以提升交易格局**：从追涨杀跌的短线 → 把握主升浪
2. **均线能解决"会买不会卖，会卖不会拿"**：解决持股信心问题
3. **均线简洁凝练、易学易懂**：高效率的系统工具，K 线组合内容繁多学习负担重

## 葛南维八大买卖法则

### 买进法则（4 条）
1. 平均线从下降逐渐走平转为上升，股价从平均线下方突破 → **买进信号**
2. 股价跌破上升的平均线，但不久又掉头向上，并运行于平均线上方 → **加码买进**
3. 股价下跌未破平均线，并重现升势 → **买进信号**
4. 股价跌破平均线，并远离平均线时 → **可能产生反弹，但要记住弹升后仍将继续下挫**

### 卖出法则（4 条）
5. 平均线走势从上升逐渐走平转为下跌，股价从平均线上方往下跌破 → **卖出信号**
6. 股价反弹突破平均线，但不久又跌到平均线之下 → **卖出信号**
7. 股价跌落于平均线之下，弹升受阻 → **卖出信号**
8. 股价极速上涨远离上升的平均线时 → **风险激增**

## 两条均线：金叉死叉

> 不同周期的均线大致展示了不同类型投资者的持仓成本

| 均线 | 名称 | 投资者类型 |
|------|------|-----------|
| 5 日 | 攻击线 | 短线 |
| 10 日 | 操盘线 | 短线 |
| 20 日 | 生命线 | 中线 |
| 60 日 | 决策线 | 中长线 |
| 120 日 | 牛熊线 | 长线 |

**金叉**：短期均线上穿长期均线，短线中线资金均看好 → **买点**
**死叉**：短期均线下穿长期均线，大家都不看好 → **卖点**

### 金叉买点（宝钛股份、新宏泽案例）

> 在牛股中的均线上，参与牛股的资金面临的压力较大，技术指标破位风险更大，需要良好的接力和旺盛的人气。

### 死叉卖点的力量
- 短期和中期均线之间的距离看似不大
- 但若让短期均线扭转向下触及中期均线，非得要几天下跌
- 短线和中线都被套 = 量变到质变 = **下跌的合力非常大**

### 均线 vs KDJ vs MACD

| 指标 | 优势 | 劣势 |
|------|------|------|
| KDJ | 直观易懂 | 加速涨跌时数值过头易失灵 |
| MACD | 趋势与均线基本相同 | 横盘时容易出现差异 |
| 均线 | 不会出现失灵 + 关键时候能帮忙 | 慢，但适合趋势确认 |

> "均线是可以看成是更贴切的指标系统，有点系统跨界的味道了"

## 三条均线：金山谷银山谷

- **银山谷**：第一个山谷（底下的扇形）
- **金山谷**：第二个山谷（上面的扇形），**买入价值更高**
- **金山谷 = 银山谷的再次确认** = 形态理论的"反抽确认"
- **主力的建仓期**（银山谷）→ **主力的拉升期**（金山谷）
- 实际操作中**出现死叉就要赶紧卖了**，等不得死亡谷的出现

### 案例
- **上证指数金山谷日线图**
- **华铁科技金山谷、死叉日线图**
- **四通股份金山谷、银山谷日线图**

## 一条均线：单根均线作为支撑/压力

> 当股价加速上升或下降时，均线基本都是并排的，不像金叉或金山谷是一段行情的起点，而是处于单向运行过程之中。

- **当 K 线打到均线的时候就是买点**
- **当跌破均线的时候就是卖点**
- **加速上升或妖股连板**：用均线把握买卖点，最准

### 案例
- **中材国际日线图**
- **西部建设日线图**
- **桂发祥日线图**

> "加入第三根均线主要是为了辅助功效，实用性一般。如果均线再增加，就没有太大意义了"

## 三种基本形态

| 阶段 | 形态 | 特征 | 实战意义 |
|------|------|------|----------|
| 1 | **交织** | 多条均线交叉在一起 | 横盘整理阶段，没方向 |
| 2 | **并列** | 均线粘合后并排向上/下 | 牛股启动或正在运行的特征 |
| 3 | **发散** | 短期均线走的太快 | 牛股基本到了走势的末端 |

> "虽然我们知道了什么形态会有好的机会，但如果真是按图索骥，你就发现按照金叉信号和均线并排信号不太容易筛选出股票"

## 均线和其他系统的辩证关系

### 1. 纵向看均线的投资威力
- **复利隐含的条件就是中长线持股**
- 短线做的好如果没很高胜率，做多错多，无法形成复利
- **中长线投资做少错少，仓位不变，持股波段操作**
- "跑不赢大盘，也不要气馁，不妨从中长线持股角度思考下原因"

### 2. 横向比较均线和各系统的特点及差异

| 系统 | 视角 | 特点 |
|------|------|------|
| K 线 | 反映多空能量变化 | 不关心多空双方内在成分 |
| 形态 | 更大时间周期 | 中线角度，未来运行空间测量 |
| 通道 | 上下轨 | 短线买卖点 + 突破上轨容易错失主升浪 |
| **均线** | **跟踪短中长线资金成本变化** | **柔性 + 实时修正** |

> "均线换了个研究思路，它是通过跟踪分析短线、中线和长线资金的持仓成本变化趋势来判断市场的运行方向"

### 3. 均线和其他形态的联合应用
- 均线与 K 线联合
- 均线与形态联合
- 均线与指标联合
- 均线与通道联合

## 均线在慢牛中的用法

### 慢牛均线周期选择（两种情况）

**情况 1：K 线以 5 日线为支撑**
- 一段时间不破（1-2 周）→ 以 5 日线为支撑
- 触及 10 日线且不破 → 选 10 日线为支撑
- 上升斜率加大 → 5 日线和 10 日线拉开距离，常用 5 日线

**情况 2：主支撑线 + 副支撑线**
- 主支撑线：短线（5/10 日线）
- 副支撑线：中线（20 日线）
- 短线投资者：跌破主支撑线可卖出
- 中长线投资者：跌破主支撑线可不理会，待副支撑线且均线拐头向下才离场

### 慢牛是很好的投资策略
- "股价基本沿均线稳步上行，均线支撑有效性非常强"
- "中线投资者不经意间就看到股票在几个月中涨了一倍"
- "下跌的时候调整的幅度很小，甚至能扛着不调整，这就是产生复利的重要源泉"
- **慢牛最能体现复利增长**
- **节省大量盯盘时间和精力**

### 慢牛拿不住的原因
- 大多数时候涨的迟缓，很难发现
- 偶尔的异动中发现也因忍受不了它的墨迹而被抛弃
- 担心补跌，提前抛掉
- 每天盯盘离市场太近不行，离市场远了不行
- **"事先没有准备好用均线把握这些标的，是拿不到这个收益的"**

### 慢牛选股逻辑
- 与其说是做个股的慢牛，不如说是做市场的慢牛
- 找慢牛要从市场主线中来
- 主力资金选择股票先选行业
- **题材的基本面要大于个股的基本面**
- 短线资金只盯着眼前发生的确定的事情
- 归根结底还是有中长线资金撑着，短线资金才容易冲锋陷阵

### 案例
- **江泉实业图**
- **沧州大化图**
- **罗顿发展图**
- 上证指数 15 年 4-6 月主升浪
- 上证指数 17 年 1 月 20 日-3 月 3 日

## 均线在妖股中的用法

> 对于短线投资者来说，市场还是喜欢短期暴利的标的，快牛和妖股均具有加速上涨的特点

### 妖股分类
1. **连续涨停型**：顺丰控股、天山股份（基本浮在 5 日均线上）
2. **不连续涨停**：清源股份、云意电器、恒通科技（中间休息，冲高回落）

### 连续涨停型操作方法
- 选股从近两日的涨停标的里找
- 打板 / 低吸赌板（按打板系统）
- 像顺丰这样的连板票天天都是股价高于 5 日均线上涨
- 调整均线参数：5 日 → 3 日，让 K 线最大化触及且不破均线
- **"上车交给打板，坐车交给均线"**
- 常用 5 日均线是市场公认语言

### 不连续涨停型操作方法
- 主力资金有限，滚动操盘
- 适合在均线上的低吸买入
- 追高容易被套
- 结合其他指标找高抛低吸机会

### 案例
- **顺丰控股 3 日、5 日线图**
- **柘中股份**（一路踏着 5 日均线上涨）
- **桂发祥图**

> "做强势品种时，都是围绕着涨停去做的" → 妖股 = 涨停 + 均线

## 均线核心价值：一招鲜的精髓

### 股票操作晋级线路
1. 初期：某种战法的胜率比较高，用惯了就会舍弃其他方法
2. 中期：精研此法，不断修剪在各种环境下的易用性，继续做减法
3. 后期：碰到一些特殊情况，引起用其他战法做联合应用的兴趣
4. 最终：系统稳定性提高，使用更简单，出手更少 → **只会奔着参与龙头主升浪的目标而去**

### 一招鲜的 3 个递进要素
1. **胜率**（均线在牛股中胜率相当高，尤其是妖股）
2. **个股盈利最大化**（关键看持股，均线是拿手好戏）
3. **账户收益最大化**（仓位变化受持股性能决定）

### 均线的"公众语言"特性
- K 线千变万化，像外语
- 形态、通道画法因人而异
- **均线像肢体语言，一看就懂**
- 主力最喜欢用均线施展四两拨千斤的功夫

### 均线是绕不过的技术手法的 4 大原因
1. **分析大盘**：仅次于 K 线的重要数据和指标
2. **把握波段**：找到一条适度的均线，可以非常及时的把握买卖点
3. **大资金管理**：均线成为少有的靠谱技术保障
4. **投资理念统一**：用了均线，不知不觉用到中长线持股复利增长理念和做强势股的策略

## 均线实战问题

### 问题 1：牛股均线指标修正对判断的影响
- 均线是动态指标，会实时修正
- 股价站在均线上出现的买点是个静态方法
- **需要打一点提前量**
- 涨停第二日，高开 3 个点 → 离均线远 → 不符合到均线买入
- 收盘后均线正好贴在开盘价上 = 马后炮
- 涨停后三个板 → 均线又被拉上开盘价
- 注意到这个规律，就能更好地应用均线

### 问题 2：股价在均线附近波动时，是止损还是持有？
- 这个问题只针对牛股而言
- K 线触碰到均线时有可能跌穿后又返回 → **耐心等到收盘**
- 妖股要根据盘 + 国日内分时均线辅助判断
- **妖股最听均线的话**，对均线的支撑性能最认可
- 中线角度：等观察到均线拐头死叉的时候卖
- **死叉是不会轻易出现的**，一旦出现肯定意味着股价已经下跌
- **非出来不可**

### 问题 3：如何骑上牛股的均线
**选择 1：等**
- 等后面几天股价回踩均线
- 经常是第二天就收个阴线回踩均线，第三天反包上行
- 见到涨停不要懊悔自己迟来一步

**选择 2：追**
- 判断股票是龙头
- 当第二日高开高走时，可以用一部分仓位做半路板去追
- 或是直接打板
- 追错了有另一部分仓位可以补或者做 T+0
- **目的：能在龙头中坚持住，直到等到均线跟上来**
- **"这个方法重在抓龙头股"**

## 金句

> 既然是讲系统，为什么不先讲 K 线，而选择讲均线？关于这个问题，我先来解答部分朋友的困惑，搞清楚了这个问顾，大家才能愉快地、踏实地来学习！

> 均线可以提升大家的交易格局，从追涨杀跌的短线投机逐渐提升到可以波段操作，把握个股的主升浪，成为股市赢家。

> 炒股的核心是做龙头股，但这类品种由于主力剧烈的洗盘，游资接力式的换手，很容易使 K 线上下翻飞，买卖信号过于灵敏频繁，难以用 K 线系统把握。

> 你会发现，按照金叉信号和均线并排信号不太容易筛选出股票或者候选的自选股票太多了，依然无从下手。

> 均线是做牛股、妖票必用的工具，可以提供买卖点，防止被洗，安心持股，是其他工具不容易代替的。

> 上车交给打板，坐车交给均线。

> 慢牛最能体现复利增长，短线投资者一般都觉的慢，但其实一点也不慢，很多时候，中线投资者不经意间就看到股票在几个月中涨了一倍。

> 我们说，要想做专业的投资者，是一定绕不过均线的。

> 死捂可耻，卖飞一样没什么好光荣的。

## 适用场景

- ✅ 中长线持股 + 慢牛波段操作
- ✅ 妖股连续涨停型（调整均线到 3 日 / 5 日）
- ✅ 妖股不连续涨停型（均线低吸）
- ✅ 龙头股持有（均线跟随）
- ✅ 大盘分析（多周期均线）
- ✅ 大资金管理
- ❌ 短线快进快出（均线慢，不适合）
- ❌ 弱势/下跌通道的弱势股
- ❌ 主力刻意破坏均线的小盘股

## 关联阅读

- **打板手法系统**：本笔记说"上车交给打板，坐车交给均线"
- **JOKER 皇打板逻辑 / 抓妖股概率**：妖股识别
- **5 分钟筛选牛股 / 集合竞价**：早盘选股
- **低吸追涨打板 / 强势股买入三大战法之"低吸"战法**：低吸技巧
- **骑在牛股上手记**：中长线持股（与均线慢牛呼应）

## 与其他游资的呼应

- **盛夏阿凯**：本笔记说"上车交给打板，坐车交给均线"，盛夏阿凯正是这两套系统并用
- **Asking**：选股耐心 + Asking 的"等待"哲学在均线慢牛中体现
- **养家**：复利 + 情绪揣摩的结合
- **赵老哥**：妖股打板 + 均线的双系统代表

---

*笔记来源：D 盘《牛股在均线中的应用之深度学习笔记》PDF（邢者 2017-03-30）*
*整理日期：2026-06-25*
`,oneLine:`**均线是绕不过的技术手法。** 因为它能让我们解决"会买不会卖，会卖不会拿"的千古难题——抓住牛股很难，抓住又拿不住更可惜。均线是骑牛股的尺子，让我们能与股市保持合适的距离。`,tags:[`均线系统`,`葛南维八大法则`,`金山谷银山谷`,`慢牛与妖股`]},{id:`P1P2_孤独牛背_控制回撤精要`,title:`孤独牛背_控制回撤精要`,category:`心态方法`,source:`P1P2`,filename:`实战笔记_孤独牛背_控制回撤精要.md`,content:`# 实战笔记 · 孤独牛背控制回撤精要（P1P2 增强版）

> 题材分类：控制回撤 / 风控 / 心态 / 仓位管理
> 游资/作者：孤独牛背 + 上证兄（召集）+ 丹凤东路 / 打板赚盒饭 / 难觅知音 / 吞吴破秦 / Linsanity016 / 从此开始
> 关联资料：参见 P0《实战笔记_孤独牛背控制回撤》；C 盘 \`孤独牛背_超短梦想系列.md\`
> 来源：D 盘《孤独牛背【超短梦想系列之控制回撤篇】》

---

## 一句话定位

> **回撤的本质是对手盘力量大于己方；规避 80% 的强大对手盘 + 20% 的情绪转折识别 = 控制回撤的完整闭环。**

## 核心观点（7 位高手语录精要）

1. **孤独牛背**：多空仓、多看少做、做最强那几只——一流高手长期空仓等符合自己的标的
2. **丹凤东路**：仓位是交易的艺术，管理好仓位 = 管理好回撤
3. **打板赚盒饭**：单只标的仓位重 = 盈亏同源；分 3 份才平衡
4. **难觅知音**：第一仓被砸 → 基本不做第二笔 → 把战斗交给明天
5. **吞吴破秦**：弱势不做，滚动操作，经常空仓，新模式试仓，**保持身心健康（此条为 1，以上为 0）**
6. **Linsanity016**：时刻保持进攻不擅空仓，大小回撤总伴随——以攻代守派
7. **从此开始**：以攻代守型选手，不断进攻，回撤 20% 也能承受

## 仓位管理铁律

| 策略 | 操作要点 | 主张者 |
|------|----------|--------|
| **单只标的仓位重** | 赚得多，亏得也多 | 打板赚盒饭 |
| **资金分 3 份** | 行情好买满 3 只，差时买 1 只或空仓 | 打板赚盒饭 |
| **大赚 10%+ 强制降仓** | 降到 3 成以下 | 打板赚盒饭 |
| **新模式试仓** | 1 万块炒了很长时间，不丢脸 | 吞吴破秦（养家原话） |
| **节奏不对空仓** | 大亏空仓、大赚空仓、拿不准空仓 | 吞吴破秦 |
| **以攻代守** | 不擅空仓，靠模式优化减少回撤 | Linsanity016 / 从此开始 |

## 选股控制（打板赚盒饭）

- 只做有题材标的，**禁做无题材/题材不明标的**
- 行情好时：龙头 + 跟风股都有肉
- 行情差时：只有做龙头才保险
- **2016 重点板块**：股权变更、高送转填权、虚拟现实、OLED、次新股
- 频繁交易只适合手法多的高手，普通选手频繁交易 = **死路一条**

## 指数气氛与仓位对照

| 指数状态 | 仓位动作 | 备注 |
|----------|----------|------|
| 上证跌 + 创业板大跌 | **28 齐跌，禁止开仓** | 最高级别空仓 |
| 上证涨 + 创业板大跌 | 28 分化，小仓位做 | 跟随上证 |
| 上证跌 + 创业板涨 | 小盘气氛好，**5 成以上仓位** | 跟随创业板 |
| 上证涨 + 创业板涨 | **28 齐涨，满仓做多** | 全力进攻 |

## 6 大对手盘强大情形（吞吴破秦）

| 类型 | 表现 | 应对策略 |
|------|------|----------|
| **庄股** | 对方有完全碾压实力 | 高位一律回避 |
| **国家队** | A 股之王 | 不解释，不参与 |
| **一字换手买一独大** | 重组/新股一字，板上大幅换手 | 情绪不好时难接力 |
| **热点龙头加速一致期独食** | 头天强势、第二天缩量独食 | 第三天基本到头（10 个能接 3 个就不错） |
| **弱势缩量（连）板** | 龙头战法盈亏同源里的亏 | 弱势缩量板要换手保护 |
| **情绪转折后的反向加速** | 突然出现大幅杀跌强势股 | 果断出局（多杀多） |

## 三大高手的止损/锁仓法（难觅知音）

| 手法 | 操作 | 状态 |
|------|------|------|
| 满仓排涨停 | 排 1 板，等单子打死涨停板的单 | **已停用**（太累） |
| 半仓排涨停 + 半仓尾盘集合竞价 | 买入价就是收盘价，T+1 变 T+0 | **已停用** |
| 滚动打板（当前手法） | 用理解力分仓打板，仓位分配根据大盘变化 | **当前使用** |

**关键原则**：开出第一仓如果被砸，**基本不会做第 2 笔交易** → 证明当天市场不适合自己 → 把战斗交给明天

## 吞吴破秦 5 大操盘指导方针

1. **弱势不做**：势 = 赚钱效应
2. **滚动操作**：连板多打板，炸板杀跌多低吸反包
3. **经常空（轻）仓**：节奏不对空仓，大亏空仓，大赚空仓，拿不准空仓
4. **新模式试仓**：先学精一样，再图其他
5. **保持身心健康**：**此条为 1，以上为 0**（最关键）

## 两位"以攻代守派"（Linsanity016 & 从此开始）

- **Linsanity016**：时刻保持进攻不擅空仓 → 大小回撤总是伴随
- **从此开始**：以攻代守型选手，内心深处都是进攻；**职业以来回撤最大 20% 左右**
- **共性**：通过不断优化自身的模式去减少回撤，而非空仓
- **心法**：做自己喜欢的事，每天痛并快乐着，享受突破自我的快感

## 风控逻辑

- **核心定义**：回撤 = 对手盘力量大于己方
- **80% 大幅回撤 = 来自对手盘强大**（庄股/国家队/一字/独食/弱势缩量/情绪转折）
- **剩下 20% = 模式内的情绪转折**（用来提醒收缩仓位或空仓）
- **势好的时候赚钱效应在什么品种，就做什么品种**——**不是看大盘看 PE 类的幼儿园炒股法**

## 经典案例（综合多高手）

- **2016 股权变更/高送转填权/VR/OLED/次新**：打板赚盒饭指定 5 大方向
- **某游资反复操作的中国建筑（基建）**：丹凤东路重仓失误，单周回撤 3%
- **3000 点赚到 3300 点赔光**：吞吴破秦指出"势在大盘股"时还做小盘股必亏
- **打板炸板后多杀多**：弱势板块集体一字后接力盘缺失的典型衰竭

## 金句

> 仓位才是交易的艺术，管理好仓位也管理好了回撤。

> 强中自有强中手，哪个高手也有大亏的时候，心态再好不要和趋势作对。

> 大家又不是死人对吗？谁会傻傻的站在那里让你一直砍啊。

> 行情好时买满 3 只标的，行情差时只买 1 只标的或空仓不做。

> 频繁交易只适合手法多的高手，普通选手频繁交易死路一条。

> 28 齐涨 → 满仓做多；28 齐跌 → 禁止开仓。

> 回撤的本质：对手盘力量大于己方。

> 弱势缩量（连）板 → 逆大势非真龙。

> 势好的时候赚钱效应在什么品种，就做什么品种，不是看大盘看 PE 类的幼儿园炒股法。

> 保持身心健康，该锻炼锻炼，该打炮打炮，此条为 1，以上为 0。

> 你的模式平时小亏小赚，偶尔大赚，但是绝不大亏。

> 胜兵先胜而后求战，败兵先战而后求胜。

## 适用场景

- ✅ 任何市场状态下的回撤控制
- ✅ 强势市场的多标的滚动
- ✅ 弱势市场的空仓等待
- ✅ 模式内的情绪转折
- ❌ 硬做弱势（容易爆亏）
- ❌ 无效交易（侵蚀盈利）
- ❌ 满仓单股（盈亏同源）

## 关联阅读

- 龙头战法配套：参见本批《孤独牛背_婚礼演讲》、《养家_全集》
- 短线心态：参见本批《养家_全集》（养家是吞吴破秦的引用源）
- 资金管理：参见本批《养家_全集》中"龙飞虎仓位管理"章节
- 集合竞价：参见本批《5 分钟筛选牛股》《看集合竞价》

## 与其他游资的呼应

- **养家（孙峰）**：吞吴破秦核心就是"养家心法"的复刻——"新模式试仓"原话来自养家
- **JOKER 皇**：排版可随时撤单 = 主动控制回撤（参见本批《JOKER 皇打板逻辑》）
- **Asking**：半仓试错 + 亏损不加仓 = 仓位层面的回撤控制（参见 P0《Asking 理念总结》）
- **职业炒手（王涛）**：弱势不做 = 同一思路
- **JOKER 皇**：本批《JOKER 皇打板逻辑》中"挂单可撤" = 主动控制回撤
- **王元杰**：本批《王元杰弱市操作》"尾盘半仓过夜" = 滚动打板的具体应用

---

*笔记来源：D 盘《孤独牛背【超短梦想系列之控制回撤篇】》PDF*
*整理日期：2026-06-25*
`,oneLine:`**回撤的本质是对手盘力量大于己方；规避 80% 的强大对手盘 + 20% 的情绪转折识别 = 控制回撤的完整闭环。**`,tags:[`控制回撤`,`风控`,`心态`,`仓位管理`]},{id:`P1P2_孤独牛背婚礼演讲`,title:`孤独牛背婚礼演讲`,category:`心态方法`,source:`P1P2`,filename:`实战笔记_孤独牛背婚礼演讲.md`,content:`# 实战笔记 · 孤独牛背·雷神婚礼演讲·龙头妖股战法（P1P2 增补版）

> 题材分类：龙头妖股战法 / 快速涨停第一板 / 补涨龙头 / 转势灵魂板 / 妖股接力
> 游资/作者：孤独牛背（雷神）
> 身份：2016 年淘股吧活跃游资；2016 二季度"再战杯"成绩优秀
> 关联资料：参见 P0《实战笔记_孤独牛背婚礼演讲》主线版、《实战笔记_孤独牛背控制回撤》
> 来源：D 盘《孤独牛背雷神婚礼演讲龙头妖股战法》PDF（P1P2 增补：逐字逐句完整录音整理稿）

---

## 一句话定位

> **龙头龙头再龙头，空仓空仓再空仓。** 我看的主要看六点：人气、合力、换手、量能、强度、股性。

## 核心观点（P1P2 增补：六要素完整论述）

1. **看盘的六要素**：人气、合力、换手、量能、强度、股性——"所有短线指标都可被覆盖"。
2. **三台超宽屏分工**：大盘/IC/实时信息 / 板块联动涨幅涨速 / 头天复盘选股+盘中异动。
3. **打板四类标的**：快速第一板、补涨龙头、转势灵魂板、妖股接力。
4. **强度 = 一笔带过**：30 万手挂单必须几秒内抢完，这是去打的关键信号。
5. **纪律 > 模式**：大盘不好或者赚钱效应不好时少动手，尽量空仓。
6. **空仓是超短的最高境界**：抄手说"他的最大瓶颈是什么？他空仓之后才解决掉所有的瓶颈"。

## 龙头妖股战法的四类标的（详解）

| 类型 | 定义 | 案例 | 第二天溢价 |
|------|------|------|-----------|
| **快速涨停第一板** | 强势板块率先涨停，人气度第一 | 2016 多只妖股 | 享受板块溢价 |
| **补涨龙头** | 单板块龙头打不到时，第二天早盘快速上板 | 300264（口袋游戏 300076 停牌后） | 高溢价出局 |
| **转势灵魂板** | 大盘跌到位+恐慌情绪，率领市场人气涨停 | 000838（3月1日）、开创国际（7月27日） | 极高溢价 |
| **妖股** | 股性好、见板就能打、筹码博弈 | 0025、宝钢包装、花王股份、鲍斯股份 | 一夜情也能涨 |

## 打第一板的关键判断（详解）

> 30 万手如何区分强度？**30 万手必须要在几秒钟内抢完**。

- 强度高的板：一笔带过、瞬间吃完 → 值得参与
- 强度低的板：磨磨唧唧上去 → 千万不能打
- 封单率不高时 → **立即撤单**，否则立马被砸
- 排单与扫单的关系：扫单其实就是在排单

## 补涨龙头（详解）

> 龙头出来以后，万一打不到龙头，也没关系，那就去做快速补涨龙头。

- **单板块中龙头打不到**时
- **第二天早盘**出现非常快速的龙头
- 主多资金非常坚决 + 上板速度很快
- 成交、量能、换手还大 → 这种板非常值得打
- **案例：口袋游戏 300076 停牌后**，龙二 300081 也停牌，群龙无首
  - 300264 就是一个非常快速的补涨龙头
  - 第二天开盘出来以后直接封一字板 → 很好的快速补涨龙头

## 转势灵魂板（详解）

> 大盘跌到位了，恐慌情绪有了，那我就做快速反弹龙头。

- **大盘背景**：跌到位 + 恐慌情绪
- **个股特征**：率领市场人气涨停
- **应对方法**：扫单、打板、排单
- **个人操作**："在第二波 7 个点、8 个点、9 个点的时候，五档、十挡，全部一笔扫完了"
- **核心难点**：反应速度极快 + 内心预判（也许一秒钟）
- **案例 1：000838**（3 月 1 日）
  - 当天 0838 跌幅不大，但大盘跌的很多
  - 在大盘走低的情况下，0838 率领市场人气涨停
  - **且在大盘还没有红盘的情况下，0838 已经涨停**
  - 必然一波、两拨去拉板
- **案例 2：开创国际**（7 月 27 日）
  - 大盘并不是不好
  - 当天快速反转龙头 + 第一板
  - 带领整个板块率先涨停
  - 当天带动了 626

## 妖股（详解）

> 妖股的赚钱效应是很快的……股性好，只要是见板，你去打板，从不坑人。

- **0025 案例**（6 月 23 日）
  - 两波拉板：第一波 5 个点左右，第二波直接拉板
  - 7 个点就可以直接扫
  - 市场情绪疲软的情况下可能开板，但被游资给顶死
  - 如果当时管理层不去特停的话，**四板还是打不住的**
- **宝钢包装**（四川双马停牌后）
  - 双马被停牌，市场挖掘 IDG 概念
  - 标的：宝钢包装、603031、还有"一个科技"
  - 宝钢包装一波逆袭：第一波 4-5 个点，第二波直接拉板
  - 我是直接扫单，毫不犹豫的扫单
- **花王股份**（PPP 新秀）
  - 最近次新比较差，从逻辑来说不是应该去参与的
  - 但是有大热的题材 PPP
  - 开盘 7 个点左右，一波下杀到 2-3 个点
  - 两拨拉板，值得参与
  - 我扫进去，已经排到很后面了（抢筹）
- **鲍斯股份**（首板）
  - 佛山、校长、成都一大批资金爱做首板
  - 强度这么高的，最受他们欢迎
  - 大资金风控能力更强，直接万手大单就封死了
- **特力**（好股妖股首板）
  - 第二天怎么也要等到 2:30
  - 最多不赚钱，但等到了就是两个板、三个板、四个板

## 三种资金分工

- **点火资金**：很关键的资金
- **扫板资金**：非常坚决
- **封板资金**：加上里面的筹码博弈程度

> "我就是一个进攻资金，而且非常迅猛的进攻"——妖股打板核心心态

## 仓位与买入手法

| 情况 | 操作 |
|------|------|
| 早盘砸板（3-4%） | 不爱早盘砸板，**这是赚大钱的机会** |
| 好股妖股首板打了 | 第二天怎么也要等到 2:30，最多不赚钱 |
| 扫了不爱撤单 | 成交不了帮顶，也是市场需要 |
| 预判大盘见底信号 | 看市场有哪些股最强硬、是否有联动板块 |
| 龙头打了 | 带动整个板块，第二天绝对享受溢价 |

## 风控逻辑（核心）

> **纪律是大于模式的**，不管你是低吸、强势股回踩，还是打板，都是一样的，万变不离其宗。

- 纪律好了，没有赚钱效应，就是**空仓**
- 大盘不好或者是市场赚钱效应不好时，就少动手，尽量空仓
- 预判大盘见底信号：看市场有哪些股最强硬 + 是否有联动板块
- **空仓绝对是一个最重要的学问**

## 互动环节：方新侠/杨力/抄手的共同经验

> 我总结了很多市场大佬的经验，他们不亏钱的经验，方新侠、杨力、抄手，他们的回撤基本上是没有的。

- **方新侠、杨力**（录音拼字）
- **抄手（王元杰）**："他的最大瓶颈是什么？他空仓之后才解决掉所有的瓶颈"
- 共同点：**纪律非常强**，大盘不好就不动手

## 经典案例汇总

- **000838**（3 月 1 日）：大盘跌、0838 率领涨停；高溢价
- **开创国际**（7 月 27 日）：大盘走软下带领板块率先涨停
- **0025**（6 月 23 日）：妖股模式两波拉板，第二天四板
- **宝钢包装**：四川双马停牌后挖掘的 IDG 概念，一波逆袭第二波直接拉板
- **花王股份**（PPP 新秀）：两拨拉板，扫板
- **鲍斯股份**：首板，佛山/校长等大资金做首板
- **特力**：好股妖股首板第二天等到 2:30
- **口袋游戏 300076** 停牌后，300264 补涨龙头（一字板）
- **特力** 等好股

## 金句

> 我讲的是我目前吃饭的看家本领，应该算是干货。

> 我没有什么技术，也从来不看技术，我看的主要看几点，人气，合力，换手，量能，强度，股性。

> 比如说，在涨停的五档中，最后一档，就是涨停价位上，比如说有 30 万手。30 万手如何区分强度呢？30 万手必须要在几秒钟内抢完。

> 抄手老师也说过，他的最大瓶颈是什么？他空仓之后才解决掉所有的瓶颈。

> 我的模式就是龙头龙头再龙头，空仓空仓再空仓。

> 纪律是大于模式的……万变不离其宗。

> 排了之后都撤，撤了之后市场就没有赚钱效应了啊，能排到我就赚钱，排不到那我也为市场做了贡献。

> 我不爱早盘砸板呢，早盘 3、4 个点狂砸啊，这个也是我赚大钱的机会。

> 我的模式时候平时小亏小赚，偶尔大赚，但是绝不大亏。

## 适用场景

- ✅ 强势行情中的快速第一板
- ✅ 龙头打不到时的补涨龙头
- ✅ 大盘见底转势时的转势灵魂板
- ✅ 股性好、人气足的妖股接力
- ❌ 弱势市场的硬做（纪律为空仓）
- ❌ 没有赚钱效应时勉强出手
- ❌ 早盘狂砸板（反而是赚大钱机会）

## 关联阅读

- 参见 P0《实战笔记_孤独牛背控制回撤》（空仓+风控更系统）
- 龙头的系统思路参见 P0《Asking 理念总结》《养家心法》
- 互动环节提及的方新侠/杨力/抄手 → P0《王元杰弱市操作》
- 鲍斯股份/佛山/校长 → P0《游资席位速查》中有佛山系

## 与其他游资的呼应

- **Asking / 职业炒手**：都是龙头战法，但孤独牛背更具体到"扫板"和"秒抢"的执行细节
- **抄手（王元杰）**：抄手说"他学会了空仓之后，所有的问题都迎刃而解"——空仓是孤独牛背与抄手共同的核心理念
- **方新侠、杨力**：孤独牛背总结的"他们不亏钱的经验"都是纪律强、回撤基本没有
- **养家**：都强调"对市场情绪的揣摩"，孤独牛背的"赚钱效应"是更直白的表达
- **佛山/校长（成都资金）**：做首板的资金，孤独牛背在鲍斯股份案例中提到

> **P1P2 增补说明**：P1P2 这份是**逐字逐句**的完整录音整理稿（之前 P0 那份是二手整理稿），保留了所有口语细节、互动环节（方新侠/杨力/抄手）、三类资金分工（点火/扫板/封板）、以及妖股 4 个具体案例（0025/宝钢包装/花王股份/鲍斯股份）。本笔记重点收录 P0 缺失的**案例细节 + 互动环节**。

---

*笔记来源：D 盘《孤独牛背雷神婚礼演讲龙头妖股战法》PDF*
*整理日期：2026-06-25*
`,oneLine:`**龙头龙头再龙头，空仓空仓再空仓。** 我看的主要看六点：人气、合力、换手、量能、强度、股性。`,tags:[`龙头妖股战法`,`快速涨停第一板`,`补涨龙头`,`转势灵魂板`,`妖股接力`]},{id:`P1P2_强势股低吸战法`,title:`强势股低吸战法`,category:`打板追涨低吸`,source:`P1P2`,filename:`实战笔记_强势股低吸战法.md`,content:`# 实战笔记 · 强势股低吸战法（附实盘交割单）

> 题材分类：强势股低吸 / 分时拐头 / 锯齿洗盘
> 游资/作者：邢者
> 席位/身份：邢者股票池（公号 ID：xingzwgpc）；2006-2008 年私募交易员，团队资金峰值过亿
> 关联资料：参见本批《低吸追涨打板》《云意电气涨停》《打板手法系统》《抓妖股概率》
> 来源：用户上传《强势股买入三大战法之"低吸"战法_附实盘交割单讲解_.docx》

---

## 一句话定位

> **低吸不是抄底，而是强势股分时下探的拐点博弈。** 平庄能源 4 笔建仓实录，把抽象的"分时买点"具象成可复制的执行清单。

## 核心观点

1. **强势股三大战法**：追高、低吸、首阴，三种模式都应掌握；只用一种模式资金难做大（与本批《低吸追涨打板》同源）。
2. **低吸的底层逻辑**：强势股在第一个分时线下探释放风险回升后，有很大概率直接暴起翻红。
3. **分批建仓 = 风险分散**：4 笔单子的时间、价格、仓位都有讲究，**不是一次性 All-in**。
4. **"拐头"是核心买点**：第一笔是分时回调后的向上第一笔拐头瞬间；第二笔是双倍仓位的止跌企稳。
5. **双底是"最好买点"**：第三笔本应在双底买入，邢者承认因挂单晚了是失误。
6. **翻红后加仓有差价保护**：第四笔利用 5% 价差的反抽，安全性并不低。
7. **题材/期货联动是关键**：平庄能源上涨主因是**焦煤、焦炭期货连续大涨**（焦炭 1701 涨幅 2.19%，焦煤 1701 涨幅 2.97%）。

## 仓位管理

| 笔数 | 时间 | 价格 | 性质 | 仓位比例 | 备注 |
|------|------|------|------|----------|------|
| 第一笔 | 09:30:49 | 6.91 | 拐头建仓 | 1 单位 | 试探性 |
| 第二笔 | 09:39:33 | 6.84 | 止跌企稳 | **2 单位** | 双倍 |
| 第三笔 | 09:43:30 | 6.89 | 小回踩博弈 | 1 单位 | 可下可不下 |
| 第四笔 | — | 7.18 | 翻红加仓 | — | 利用 5% 差价反抽 |
| 第一笔卖 | — | **7.44** | 几乎最高价 | — | 当日最高 7.48 |
| 均价卖 | — | ~7.35 | 分批 | — | 后续撤单再卖 |

**核心原则**：分批建仓、多笔下单；越是低吸越忌"一次性满仓"。

## 选股方法

- **强势股识别**：5 个交易日 3 个涨停（如平庄能源 10.19/10.24/10.25），从"衰股"变成"高富帅"。
- **三个涨停各有意义**：
  - **一字板**（10.19）— 机构/大户级别，散户想都不用想
  - **启动板**（10.24）— 分时拉升反应快的高手能买到半路板
  - **放量换手板**（10.25）— 量能放大一倍，**鱼龙混杂**，风险高
- **大前提**：低吸只适用强势股，**对横盘震荡的衰股无参考价值**。
- **期货/现货联动**：焦煤焦炭期货涨 → 平庄能源涨，是当时操作的根本逻辑。

## 风控逻辑

- **分批建仓控制单笔风险**：4 笔单子逐步加码，每笔都有独立止损逻辑。
- **弱势股（僵尸股）不适用**：宏磊股份等案例都强调"必须是强势股 + 振幅巨大"。
- **挂单要有纪律**：错过双底要承认失误，不强求。
- **手机操作的应急处理**：邢者打吊瓶用手机操作时分不清分时，靠感觉分三笔卖出（最高价 7.44、均价 7.35）——**极端情况下的分批卖出**。
- **不适用场景**：横盘震荡的衰股、低吸后没有反抽的弱势股。

## 经典案例

| 案例 | 股票代码 | 日期 | 类型 | 关键点 |
|------|----------|------|------|--------|
| **平庄能源** | **000780** | 2016.10.19-25（5日3板） | 强势股低吸 | 4 笔建仓从 6.84 到 7.18，3 笔卖出 7.44 接近最高 |
| **特力 A** | **000025** | 2015.09.18 | 第一笔拐头 | 分时快速下探后第一笔拐头 → 立即翻红拉升 |
| **浙江世宝** | — | 2016.08.15 | 第二笔企稳 | 两波下探后止跌企稳 2-3 分钟 → 快速拉升 |
| **煌上煌** | — | 2016.08.12 | 第三笔双底 | 构筑分时双底 → 反弹翻红 |
| **宏磊股份** | — | 2015.10.26 | 第四笔翻红 | 跌 6% 拉涨 9% 后回踩涨 1% 的买点 |
| **期货背景** | J1701 / JM1701 | 2016.10 | 题材驱动 | 焦炭 +2.19%，焦煤 +2.97% |

## 金句

> 看似之前都涨两个板了，风险很高，其不知这种低吸，比买银行股的风险还要小。

> 强势股在第一个分时线下探释放风险回升后，有很大的概率是直接暴起翻红。

> 强势股的分时双底，是最好买点，而且风险很小。

> 一定要切忌，只适用强势股，这是大前提。

> 这第二笔单子的仓位是第一笔单子的1倍，因为这个安全系数会更高一些。

> 只能用百手小单悄悄的买回……在锯齿的波动中，又买回了便宜的筹码。（邢者私募操盘揭秘）

## 适用场景

- ✅ 强势股短期回调（5 日 3 板后）
- ✅ 有期货/现货联动的题材股
- ✅ 早盘分时下探后止跌回升的拐点
- ✅ 强势股分时双底
- ✅ 强势股翻红后回踩的低吸
- ❌ 横盘震荡的衰股（明确不适用）
- ❌ 没有振幅的僵尸股
- ❌ 一次性满仓的抄底

## 关联阅读

- 模式对比：本批《低吸追涨打板》（同作者，三种模式全面对比）
- 锯齿洗盘识别：本批《云意电气涨停》（同作者，分时锯齿型 2% 波动的洗盘特征）
- 打板体系：本批《打板手法系统》（同作者）
- 选股逻辑：本批《抓妖股概率》（"有三必有五"）
- 同为邢者体系；C 盘《邢者心法_深度研读报告》

## 与其他游资呼应

- **赵老哥**："八年一万倍"起家靠打板 → 平庄能源是强势股低吸（与打板互补）
- **瑞鹤仙**："只要买的好，怎么卖都行" → 邢者 4 笔分批建仓是"买的好"的具体实现
- **JOKER 皇**："排版可以随时撤单" → 邢者的"分批建仓 + 分批卖出"是同一风控思路的不同实现
- **Asking**：守株待兔 = 强势股回踩 = 平庄能源第四笔
- **炒股养家**："不涨停即走"vs 邢者"分批低吸" = 短线两种流派
- **孙哥/佛山系**：擅长撬跌停板 / 一字板（席位见本批《游资席位速查》）

---

*笔记来源：用户上传《强势股买入三大战法之"低吸"战法_附实盘交割单讲解_.docx》*
*整理日期：2026-06-25*
`,oneLine:`**低吸不是抄底，而是强势股分时下探的拐点博弈。** 平庄能源 4 笔建仓实录，把抽象的"分时买点"具象成可复制的执行清单。`,tags:[`强势股低吸`,`分时拐头`,`锯齿洗盘`,`低吸`]},{id:`P1P2_打板手法_系统学习`,title:`打板手法_系统学习`,category:`打板追涨低吸`,source:`P1P2`,filename:`实战笔记_打板手法_系统学习.md`,content:`# 实战笔记 · 打板手法系统学习（邢者 · 完整版 · 7 大模块）

> 题材分类：打板系统 / 龙头战法 / 仓位管理
> 游资/作者：邢者（公号 ID：xingzwgpc）
> 形式：老师与虚拟人物"小股"对话形式的系统课程
> 关联资料：参见本批《JOKER 皇打板逻辑》《强势股低吸战法》《抓妖股概率》《看集合竞价》
> 来源：用户上传《打板手法系统学习笔记_完整版_.pdf》

---

## 一句话定位

> **打板不是贪婪的赌博，而是有科学的理论依据。** 本文是邢者《打板操作系统》全 9 讲完整版——从原理到理念、从选股到买点、从仓位到卖点的全链路课程。

## 核心观点（7 大模块）

### 一、打板原理深度剖析（7 个理由论证打板有科学依据）

1. **K 线理论** - 涨停是最强的看涨信号，第二日上涨概率最高
2. **主力操盘流程** - 涨停是最明显的拉升方式
3. **信号确认** - 涨停板本身就是确认标识
4. **把握市场热点** - 涨停品种如同"电视里的广告"
5. **游资吸筹** - 涨停是主力的行为，不是散户
6. **工作量** - 大大简化选股工作量
7. **复盘** - 涨停跌停代表板块和热点变化信号

### 二、打板理念（3 条铁律）

1. **做龙头股** - 龙头股下跌滞后其他股，**高收益低风险**
2. **挣第二天的收益** - 当天不痛快是为了第二天痛快
3. **打板就是赌第二天涨停** - 没有涨停完全可以走人

### 三、龙头股判断（市场阶段决定选择）

| 市场阶段 | 龙头类型 | 案例 |
|----------|----------|------|
| **熊市** | **不能打板**（纪律） | — |
| **震荡市** | 市场总龙头（重组/高送转题材） | **四川双马（000935）** |
| **牛市** | 板块龙头股（概念集中） | — |

### 四、潜在标的 4 大筛选方法

1. **盘前看得到的机会**（个股重大利好：并购、重组、中标、业绩预告、技术新突破）→ **前一日 23:00 集合竞价排队**
2. **日内市场最先打板的品种**（去除一字板/次新复牌）
3. **同一题材和板块率先涨停**（板块排序 + 涨停排序结合）
4. **连续涨停的品种**（重点研究 2-3 板）
5. **连续涨停横盘后再次涨停**（涨停后横盘 1-2 周）

### 五、优势板的日内特征（4 项）

| 特征 | 评判标准 |
|------|----------|
| **封板时间** | 越早越好（开盘半小时最佳） |
| **开板次数** | 越少越好，**最好不开板** |
| **封单数量** | 适中即可（几万手到十几万手） |
| **上涨空间 + 题材** | 越大越好 |

### 六、买点选择（打板 vs 赌板的牛熊适用）

| 市场阶段 | 操作 |
|----------|------|
| **上涨初期** | **以打板为主** |
| **牛市上升** | 打板 + 赌板同时 |
| **上涨后期** | 适合**低吸赌板** |
| **市场回落** | **空仓观望** |

### 七、买入手法（盘中 + 集合竞价）

- **两笔等量买入法**：一笔低位拉升时 + 一笔涨停位
- **集合竞价买入**：高开低走不挂单，**低开高走才挂单** → 集合竞价只买一半仓位，另一半涨停时买

### 八、卖出手法

1. **不涨停即走**（简化操作）
2. **正常止损**（保本为原则，亏损不用怕）

### 九、仓位管理

- **2-3 只标的**最合适（2 只最佳）
- 一只股票两笔买入 → 最多 2 只
- 全入全出 → 最多 3 只
- **全仓一只风险太大**（资金量大时有流动性风险）

## 仓位管理

| 标的数 | 适用情境 | 风险评估 |
|--------|----------|----------|
| **2 只** | 最佳（平衡打板风格和可操作性） | ✅ 推荐 |
| 3 只 | 全入全出节奏 | OK |
| 1 只全仓 | 资金量大时 | ❌ 流动性风险 |
| 超过 3 只 | — | ❌ 顾不过来 |

## 选股方法

**6 大类**：

1. 市场公认龙头（如四川双马 000935）
2. 集合竞价的板（盘前可参与）
3. 日内市场最先打板的品种
4. 同一题材和板块首先冲板的品种
5. 连续涨停品种
6. 连续涨停横盘后再次涨停的品种

## 风控逻辑

- **熊市不打板**（这是纪律）
- **不涨停就走**（简化操作的智慧）
- **开盘半小时内封板**（最强势的信号）
- **封单适中即可**（太大有诱多可能）
- **题材朦胧的美**（找不到原因也没关系，"想象空间"是优势）

## 经典案例

| 案例 | 股票 | 时期 | 类型 |
|------|------|------|------|
| **四川双马（000935）** | 000935 | 震荡市 | 市场总龙头（重组概念） |
| 附图集合竞价板 | — | — | 集合竞价操作 |
| 附图高开高走板 | — | — | 平开/高开后直接封板 |
| 附图低开高走板 | — | — | 稳健拉升封板 |
| 附图横盘拉起板 | — | — | 突然迅速拉升 |
| 附图收盘板 | — | — | 尾盘打板（不优选但可接受） |

## 金句

> 打板不是贪婪的赌博，而是有科学的理论依据。

> 打板就是赌第二天涨停。

> 龙头股下跌幅度或者下跌动作会明显滞后于其他股票。

> 熊市是不能打板的，这是做股票的纪律，也是打板的纪律。

> 集合竞价中通常只买入一半仓位，另一半还是在涨停时买入。

> 不涨停即走。

> 两只相比是最佳的选择，可以平衡打板风格和可操作性。

> 朦胧的题材具有朦胧的美，不知道原因就多了想象空间。

## 适用场景

- ✅ 震荡市的市场总龙头
- ✅ 牛市上升期的板块龙头
- ✅ 连续涨停的强势股
- ✅ 题材朦胧的涨停品种
- ✅ 开盘半小时内封板
- ❌ 熊市（明确不能打板）
- ❌ 上涨后期（适合低吸赌板）
- ❌ 市场回落（空仓观望）
- ❌ 全仓一只（流动性风险）

## 关联阅读

- 排版细节：本批《JOKER 皇打板逻辑》
- 集合竞价：本批《集合竞价奥义》《看集合竞价》
- 选股：本批《次新股技术筛选》《5 分钟筛选牛股》
- 抓妖股：本批《抓妖股概率》
- 邢者同源：本批《强势股低吸战法》《云意电气涨停》《低吸追涨打板》
- C 盘《邢者心法_深度研读报告》

## 与其他游资呼应

- **JOKER 皇**（本批）：JOKER 皇的"排版/扫板/烂板"分类与邢者"打板/赌板"分类形成打板双视角
- **Asking**：Asking"做龙头股"= 邢者"做龙头股"的高度一致
- **炒股养家**：养家"不涨停即走"是邢者"不涨停即走"的同源表达
- **赵老哥**：赵老哥"八年一万倍"= 邢者"抓住连板几天收益顶别人几年"的同源野心
- **孤独牛背**：本批《孤独牛背婚礼演讲》"龙头妖股战法"= 邢者"市场总龙头"
- **瑞鹤仙**：本批《瑞鹤仙精华帖》中"高位接力"与邢者"打板/赌板"的牛熊适用相通

---

*笔记来源：用户上传《打板手法系统学习笔记_完整版_.pdf》*
*整理日期：2026-06-25*
`,oneLine:`**打板不是贪婪的赌博，而是有科学的理论依据。** 本文是邢者《打板操作系统》全 9 讲完整版——从原理到理念、从选股到买点、从仓位到卖点的全链路课程。`,tags:[`打板系统`,`龙头战法`,`仓位管理`,`打板`]},{id:`P1P2_抓妖股_连板概率`,title:`抓妖股_连板概率`,category:`打板追涨低吸`,source:`P1P2`,filename:`实战笔记_抓妖股_连板概率.md`,content:`# 实战笔记 · 抓妖股（连板概率统计有玄机）

> 题材分类：妖股接力 / 连板股 / 高位博弈
> 游资/作者：邢者
> 席位/身份：邢者股票池（公号 ID：xingzwgpc）；十三年炒股生涯
> 关联资料：参见本批《打板手法系统》《JOKER 皇打板逻辑》《5分钟筛选牛股》《低吸追涨打板》
> 来源：用户上传《揭秘如何抓妖股_连板股的概率统计有玄机.docx》

---

## 一句话定位

> **有三必有五，有五必成妖。** 本文是连板股概率统计的完整数据 + 各路游资席位擅长手法的速查表——从数据到实操的完整抓妖股手册。

## 核心观点

1. **连板的数量越高，下一个涨停的概率就越大**（核心数据）
2. **妖股之前很少有过大牛经历**（关键属性）
3. **妖股不是停牌关小黑屋能打沉下去的**（抗监管属性）
4. **2015 年股灾后妖股开始大面积诞生**（特力 A 开启单打独斗模式）
5. **2016 年平均每个月都出现一只翻两倍以上的妖股**（频率高）
6. **银河绍兴/上海溧阳/华泰荣超**等大佬**喜欢做三板和四板**
7. **妖股炒作之前，很少有过大牛经历**（与"妖股属性"对应）

## 连板股的概率统计（2014 创业板大牛市数据）

| 连板进阶 | 概率 | 解读 |
|----------|------|------|
| **一板→二板** | **7.5%** | 失败率 92.5% |
| **二板→三板** | **14.6%** | 接近翻倍 |
| **三板→四板** | **21.7%** | 进一步提升 |
| **四板→五板** | **34.3%** | 概率峰值 |
| **五板→六板** | **<10%** | 大幅回落 |

> **数据结论**：连板数量越高 → 下一板概率越大（四板→五板是 34.3% 峰值）

## 各路游资擅长手法速查（席位-手法对照表）

| 擅长手法 | 席位 |
|----------|------|
| **首板** | 佛山季华、**佛山绿景**、**成都南北一环** |
| **连板** | 无锡清扬、**国泰江苏路**、**绍兴解放北路** |
| **三板** | **深圳金田路**、**中信古北路** |
| **一字板** | 炒股养家的 **华鑫证券蒲雪璐**、**华鑫宁波沧海路** |
| **撬跌停板** | **华泰商务中心荣超路** |
| **低吸** | 龙飞虎的 **华泰南京六合彤**、瑞鹤仙的 **中信建投宜昌解放路** |

## 抓妖股 7 步实操

| 步骤 | 操作 | 仓位/止损 |
|------|------|----------|
| 1 | 复盘选择一板股 | 大浪淘沙 |
| 2 | 一板→二板 | 重点关注，拉入自选 |
| 3 | 次日 | **小仓位参与** |
| 4 | 三板不成 | **次日止损** |
| 5 | 二板冲击三板有望成功 | **加仓猛干** |
| 6 | 三板过后 | 一定会有强势洗盘 → **必须坚持到最后收盘**才能做卖出决定 |
| 7 | 四板确认 | 五板概率最大（"有三必有五"） |

## 仓位管理

| 板数 | 仓位建议 |
|------|----------|
| 一板→二板 | 观察（不进） |
| 二板次日 | **小仓位**参与 |
| 二板冲击三板 | **加仓猛干** |
| 三板不成 | **次日止损** |
| 四板确认 | 重仓持有 |
| 五板确认 | **有五必成妖** |

## 选股方法

### 妖股识别 3 大属性

1. **之前很少有过大牛经历** — 有大牛历史的不是妖股
2. **停牌关小黑屋打不沉** — 监管抗性强
3. **暂时的熄火，是为了更高的飞跃** — 短暂回调是机会

### 妖股诞生的市场环境

- **2015 年股灾前**：妖股稀少，**杭萧钢构**（换手板）是大妖王级别
- **2015 年股灾后**：特力 A 开启**单打独斗**模式
- **2016 年**：**每月一只翻两倍**的妖股
- **2017 年**：邢者预判**比 2016 还精彩**

## 风控逻辑

- **三板不成 → 次日止损**（明确的止损纪律）
- **必须坚持到最后收盘**（三板后强势洗盘常发生）
- **数据不能照搬**：2014 创业板牛市数据**不能直接套用**到下一年的股票市场（刻舟求剑是炒股大忌）
- **板块协同 → 单打独斗**：2015 后妖股模式从板块协同变成单打独斗

## 经典案例

| 案例 | 时期 | 地位 |
|------|------|------|
| **杭萧钢构** | 2015 年前 | 13 年炒股生涯中那个时代的大妖王级别（换手板） |
| **特力 A** | 2015 股灾后 | 单打独斗股的鼻祖，妖股大面积诞生的标志 |
| 2016 年平均每月一只翻两倍妖股 | 2016 | 频率数据 |
| **银河绍兴** | — | 喜欢做三板和四板 |
| **上海溧阳** | — | 喜欢做三板和四板 |
| **华泰荣超** | — | 喜欢做三板和四板 |

## 金句

> 连板的数量越高，下一个涨停的概率就越大。

> 有三必有五。

> 有五必成妖。

> 妖股炒作之前，很少有过大牛经历的，如果几年前，它有过大牛暴涨的历史，它就不是妖股。

> 妖股也不是停牌关小黑屋能打沉下去的，暂时的熄火，只是为了更高的飞跃。

> 很多游资大佬，比如银河绍兴、上海溧阳、华泰荣超非常喜欢做三板和四板的股票，敢于高位接力连板股，并且重仓杀入。

> 这可能是短期盈利最大化的唯一途径。

## 适用场景

- ✅ 一板→二板的预判（小仓位试错）
- ✅ 二板冲击三板（**加仓猛干**）
- ✅ 三板→四板→五板的妖股进阶
- ✅ 弱势市场中的妖股单打独斗
- ✅ 题材朦胧的"翻倍股"
- ❌ 一板→二板就重仓（7.5% 失败率太高）
- ❌ 五板→六板的重仓（<10% 概率）
- ❌ 2014 创业板数据照搬到现在
- ❌ 强监管博弈（停牌关小黑屋）

## 关联阅读

- 打板系统：本批《打板手法系统》（邢者同源）
- 排版细节：本批《JOKER 皇打板逻辑》
- 抓妖股席位：本批《游资席位速查》（P0 25 份笔记）
- 低吸/追涨/打板选择：本批《低吸追涨打板》
- 早盘选股：本批《5 分钟筛选牛股》
- C 盘《26 位游资心法_深度研读报告》

## 与其他游资呼应

- **炒股养家**：养家"一字板席位"（华鑫证券蒲雪璐、华鑫宁波沧海路）→ 妖股一字板排单
- **龙飞虎**：龙飞虎"低吸席位"（华泰南京六合彤）→ 妖股回调低吸
- **瑞鹤仙**：瑞鹤仙"低吸席位"（中信建投宜昌解放路）→ 妖股回调低吸
- **孙哥 / 赵老哥**：可能与"深圳金田路、中信古北路"等三板席位有关
- **华泰荣超**：本批《JOKER 皇打板逻辑》中烂板的核心案例
- **Asking / 职业炒手**："龙头战法" = 妖股抓龙头的鼻祖

---

*笔记来源：用户上传《揭秘如何抓妖股_连板股的概率统计有玄机.docx》*
*整理日期：2026-06-25*
`,oneLine:`**有三必有五，有五必成妖。** 本文是连板股概率统计的完整数据 + 各路游资席位擅长手法的速查表——从数据到实操的完整抓妖股手册。`,tags:[`妖股接力`,`连板股`,`高位博弈`,`妖股`]},{id:`P1P2_次新股_技术筛选`,title:`次新股_技术筛选`,category:`打板追涨低吸`,source:`P1P2`,filename:`实战笔记_次新股_技术筛选.md`,content:`# 实战笔记 · 次新股技术筛选（"临近新高，不创新高"战法）

> 题材分类：次新股 / 形态选股 / 涨停前夜
> 游资/作者：邢者
> 席位/身份：邢者股票池（公号 ID：xingzwgpc）
> 关联资料：参见本批《强势股低吸战法》《云意电气涨停》《抓妖股概率》《打板手法系统》
> 来源：用户上传《再送干货如何用技术分析来筛选次新股.docx》

---

## 一句话定位

> **"临近新高，不创新高"是次新股的稳妥筛选法。** 邢者 10 只次新中 5 只用此法，**成功率 100%**——本文是该战法的完整复盘与边界条件。

## 核心观点

1. **三大共性（核心筛选条件）**：
   - **开板后的时间周期在一个月左右**
   - **向新高挑战之前，日线必须 7-12 个交易日盘整**
   - **拉升启动前的日 K 线要在 5 日线上方**
2. **买点是"启动日"那根 K 线**：**不参与横盘整理期**，原则就是**不启动，不买入**。
3. **技术最怕刻舟求剑**：此法只对次新，**在维稳和趋势背景下**大环境好，是前提。
4. **启动的日线量能要比之前横盘的大**，**无量的不行**。
5. **买股不看技术，卖股要看技术**（邢者自述选股主看题材/人气/基本面/股性/资金流）。
6. **中长线不适用**：此法是超短技巧，技术分析在不同市场环境下结果不同。
7. **止损纪律**：启动后追入未突破新高又小幅调整，可观察 3 个交易日，再跌回横盘位止损。

## 选股流程（"临近新高，不创新高"4 步法）

| 步骤 | 操作 | 边界条件 |
|------|------|----------|
| 1. 圈定次新池 | 开板后约 1 个月的次新股 | 套牢盘少 + 筹码集中 |
| 2. 等待盘整 | 日线盘整 7-12 个交易日 | 不在盘整期买入 |
| 3. 启动确认 | 启动日 K 线在 5 日线上方 + 量能放大 | 无量不行 |
| 4. 启动日买入 | 走出横盘震荡的那根日线 | 启动当天买入 |

## 仓位管理

- **单只次新**：分批建仓或半仓起步
- **止损线**：启动后 3 个交易日未突破新高 + 跌回横盘位 → 止损出局
- **加仓线**：突破前期新高 → 可继续持有
- **大环境前提**：次新股指数走势已经突破前期平台压制（邢者原话）

## 选股方法（量化条件）

| 条件 | 标准 | 解释 |
|------|------|------|
| 开板时间 | 1 个月左右 | 套牢盘相对较少，筹码最集中 |
| 横盘时间 | 7-12 个交易日 | 时间太短筹码不集中，太久股性弱 |
| 启动位置 | 5 日线上方 | 强势特征 |
| 启动量能 | 比横盘期大 | **无量的不行** |
| 指数环境 | 次新股指数突破前期平台 | 大环境 |

## 风控逻辑

- **不参与横盘整理期**：避免"时间成本"和"被套风险"。
- **启动后追入要设止损**：3 个交易日观察期，跌回横盘位必须走。
- **技术分析的边界**：脱离趋势和基本面，技术分析是"行不通"的。
- **失败要承认**：每个人对技术的理解不同，欢迎拍砖指正。
- **大盘环境恶化时**：次新大环境不好时此法可能失效。

## 经典案例

| 案例 | 类型 | 关键点 |
|------|------|--------|
| **中国科传** | 次新（横盘 7-12 日 + 启动日量能放大） | 邢者实盘案例之一 |
| **皖天然气** | 次新 | 邢者实盘案例之一 |
| **百傲化学** | 次新 | 邢者实盘案例之一 |
| **吉大通信** | 次新 | 邢者实盘案例之一 |
| **听特** | 次新 | 邢者实盘案例之一（截图标注） |

> 包括邢者**最近做的 10 只次新，有一半是用此法来筛选，目前成功率是 100%**。（高手日志，有实盘交割单）

## 金句

> 牛股出，行业先。

> 不启动，不买入。

> 此法只对次新，因为在维稳和趋势背景下，次新的大环境好，这是前提。

> 启动的日线量能要比之前横盘的大，无量的不行。

> 技术分析最怕的就是刻舟求剑，一套技术理论在不同的市场环境下，分析结果都是不一样的。

> 每个人对技术的理解又各不相同，欢迎大家留言，拍砖指正！

## 适用场景

- ✅ 次新股开板后 1 个月左右
- ✅ 大盘维稳/趋势向上
- ✅ 次新股指数突破前期平台
- ✅ 题材/资金流配合的次新
- ❌ 中长线（明确不适用）
- ❌ 横盘震荡的衰股
- ❌ 大盘熊市/下跌趋势
- ❌ 启动日无量

## 关联阅读

- 邢者同源：本批《强势股低吸战法》《云意电气涨停》《抓妖股概率》《打板手法系统》
- 牛市选股：参见本批《低吸追涨打板》中"次新要强，高送一定会弱"的跷跷板原理
- 牛市切换：参见本批《5分钟筛选牛股》早盘选股
- 强势股识别：参见本批《滚雪球下》"牛股在均线中的应用"
- C 盘《邢者心法_深度研读报告》

## 与其他游资呼应

- **赵老哥 / 炒股养家**：都偏好次新股的爆发力，邢者此法提供量化筛选路径
- **Asking**：选股是决定性前提，与"题材/基本面/股性"的综合判断呼应
- **JOKER 皇**："集合竞价排次新"的隔夜委托 → 邢者此法选出的"启动日次新"是 JOKER 皇排单的目标
- **孙哥/赵老哥**：本批《抓妖股概率》中"妖股之前很少有大牛经历"，次新股是妖股高产田
- **佛山系（首板席位）**：本批《游资席位速查》中佛山季华/绿景/成都南北一环擅长做首板，次新股的首板是其主要标的

---

*笔记来源：用户上传《再送干货如何用技术分析来筛选次新股.docx》*
*整理日期：2026-06-25*
`,oneLine:`**"临近新高，不创新高"是次新股的稳妥筛选法。** 邢者 10 只次新中 5 只用此法，**成功率 100%**——本文是该战法的完整复盘与边界条件。`,tags:[`次新股`,`形态选股`,`涨停前夜`,`次新`]},{id:`P1P2_淘股吧_高手语录集`,title:`淘股吧_高手语录集`,category:`综合资料`,source:`P1P2`,filename:`实战笔记_淘股吧_高手语录集.md`,content:`# 实战笔记 · 淘股吧高手语录集

> 题材分类：游资心法 / 语录汇编 / 短线索典
> 游资/作者：Asking、钢铁战士、深南中路高手、职业炒手、龙飞虎、经常站岗、陶永根、cdrr（刘睿）、王元昊
> 关联资料：参见本批各游资深度笔记；C 盘 \`淘股吧 9 位高手_语录_深度研读.md\`
> 来源：D 盘《淘股吧高手语录集》

---

## 一句话定位

> **淘股吧 9 位短线高手的核心语录汇编，覆盖心态、龙头、低吸、追涨、仓位、复盘全维度——一部"短线小百科"。**

## 9 位高手核心语录精要

### 1. Asking（邱宝裕）

1. **炒股一定要炒龙头股**，有板块效应的最好
2. **永远都要跟随着市场主流走**，主流板块龙头，资金易形成合力
3. **小资金要想快速变大一定要超短线**，一年 10 多倍
4. **个股活跃就追涨，追板块的龙头**；没有就看看好
5. **我只跟市场走，不预测，不操纵**
6. **心态、控制力占 7 分，技术占 3 分**

### 2. 钢铁战士

1. 在一个**下降通道**赚钱是偶然的，亏钱是必然的
2. 在一个**上升通道**赚钱是必然的，亏钱是偶然的
3. **没有耐心** = 在股市一无所获
4. **不会空仓**的人 = 永远不会战斗
5. **不会止损**的人 = 死路一条

### 3. 深南中路高手（5 级进化论）

> 做好第一条都需要花 5 年时间，做得好的话小资金可以做到上千万原始积累

1. **第 1 级**：简单事情重复做，成为某一招数的高手
2. **第 2 级**：开始研究大盘涨跌趋势，避免下跌过程中操作
3. **第 3 级**：水平更高，追随者增多，开始影响市场变化
4. **第 4 级**：成为市场注目的焦点，能带领市场资金形成新趋势
5. **第 5 级**：呼风唤雨，**为所欲为，一跺脚，世界为之震荣**（趋势引导者 → 大鳄）

### 4. 职业炒手（王涛/王元杰）

1. 把握住了市场的热点和焦点，认清了**市场赚钱效应**的所在
2. **技术分析的最高层次是抛弃所有的技术指标**，最后只剩下资金流向的分析
3. **稳定获利**的境界才是交易者追求的最高目标（不是利润最大化）
4. 学习的次序：**入门贵在精一 → 重在坚持 → 法无定法 → 万法归宗**
5. **cdrr 真实故事**：519 之前已分文没有，每天坐 1 元钱公交车 → 朋友给 12 万代操作 → 那一年翻 10 倍
6. **葵花宝典**：99 年 5000 元起家 → 2005 年 20 万 → 现在后面再加三个零
7. **眼到、手到、心到**（龙头股三到）
8. **弱市不亏钱** = 复利增长的关键中的关键
9. **弱市学会空仓** = 度过漫漫熊市的唯一法门
10. 不会空仓 = 还没入门
11. **攻在量中，退在量后** = 绝对的短线级别信条
12. **强中只做龙头**，不做龙 2 以及龙尾
13. **我们买的不是价格，而是势**！
14. **大赚后卖出不能马上买票**，最好休息一天

### 5. 龙飞虎（陈新宇）

1. **一个游资题材板块就像一朵花**，天时地利人和，能盛开；缺一点则早熟或夭折
2. **换手决定高度**——大牛板块都是换手上去的板
3. **很多游资股票都是靠板板换手前进的**（600623、600599、600553、600818、000998）
4. **量能 15-30% 区间**（小盘股更高），不缩量即可
5. **一字板个股，要么买不到，买到就死了**；跌下来连反抽都难做
6. **知行合一是最难的**——做超短，天天会犯错

### 6. 经常站岗

> 赚赔不是评价操作的标准，在能力所及的范围内贯彻好自己的执行力才是最重要的

- **只做右侧交易**（万万不可做左侧交易，这是铁律）
- **流程化操作**，运用系统的力量
- **计划内的理想买点**才是成功的第一步
- **一个流程错即全错**，流程全部对了，结果基本也对了

### 7. 陶永根

1. 复利的前提就是**不亏损**，要么不出手，出手就要赢
2. **坐标股**：监控大盘走势 / 研究板块强弱 / 选择龙头品种
3. **判断指数、买卖股票要从阴中看阳、阳中看阴**，方可立于不败之地
4. **龙头 5 特征**：率先涨停 / 盘子适中 / 形象好或冷门 / 换手充分 / 周月线形态好
5. **复盘要从 61、63 涨幅排行榜**先后顺序搜盘
6. **会作股票会赚钱的人，不会做股评，不会收会员**
7. **牛市是人都会赚钱**，高手高在熊市不亏钱
8. **永远不休息不控制仓位的短线投资者 = 赚不了钱**
9. **别忘了利用休息好好复盘**！专注和坚持是成功最重要条件之一

### 8. cdrr（刘睿，中睿合银）

1. **不同市况下运用不同的盈利方式**（大跌反弹 / 震荡市 / 上升市有不同模式）
2. **滚动炒作** = 不同交易模式之间的滚动，不是手里股票的滚动
3. **放弃主观判断**，简简单单的顺势而为即可
4. **坚持自己的投资体系、原则、策略**，再有不计较一城一池得失的心态
5. **宁波赚大钱的交易在于对势的深刻理解**——明白什么时候可以重仓
6. **股市里面充分体现了人性的弱点**：贪婪、恐惧、冲动
7. **股市中要充分认识到自己**：没有持续稳定盈利之前，永远不要再投更多的钱

### 9. 王元昊（职业炒手/王涛）

> 大盘的状态只有 3 种：强势上攻 / 弱市整理 / 下跌通道

**战法体系**：
- **常规战法**：打开 81 黑马窗口，出现在涨幅前 10 + 量比前 10 的个股
- **抓领涨股战法**：某板块集体试盘 → 打压 → 个股率先走强 → 板块集体走强
- **炒新前三板**：新股上市当天吸货 → 第二天看洗盘强度 → 第三天确认主升浪

## 选股方法汇总

| 流派 | 主张 | 代表 |
|------|------|------|
| **龙头派** | 只做龙头，不做龙 2 龙尾 | Asking、职业炒手、龙飞虎 |
| **强势追击派** | 追板块的龙头，主流热点 | Asking |
| **换手接力派** | 换手决定高度 | 龙飞虎 |
| **资金流派** | 抛弃技术指标，只看资金流向 | 职业炒手 |
| **空仓派** | 弱市空仓=唯一法门 | 钢铁战士、职业炒手 |
| **右侧交易派** | 只做右侧，左侧铁律不碰 | 经常站岗 |
| **坐标股派** | 用坐标股监控大盘/板块/龙头 | 陶永根 |
| **顺势派** | 放弃主观判断 | cdrr |
| **新股战法派** | 炒新前三板 | 王元昊 |

## 风控逻辑

- **资金三流派风控**：
  - Asking：心态+控制力 7 分
  - 钢铁战士：止损+空仓
  - 职业炒手：弱市不亏钱
- **共同点**：都强调空仓、止损、势的判断
- **差异化**：深南中路高手强调成长路径（5 级进化），cdrr 强调顺势

## 金句集锦

> 炒股一定要炒龙头股，有板块效应的最好。

> 在一个下降通道赚钱是偶然的，亏钱是必然的！

> 心态、控制力占 7 分，技术占 3 分。

> 我和一些朋友经常交流交易方法……简单的顺势而为即可在市场长久持续的好好活下去。

> 攻在量中，退在量后。

> 换手决定高度。

> 我们买的不是价格，而是势！

> 你的模式平时小亏小赚，偶尔大赚，但是绝不大亏。

> 弱市学会空仓是度过漫漫熊市的唯一法门。

> 会作股票会赚钱的人，不会做股评，不会收会员。

> 大赚后卖出不能马上买票，最好休息一天。

> 计划内的理想买点买入才是一切的关键，不到理想的买点坚决不买入。

> 牛市的思路不应做超跌，而应做抗跌。

> 选择简单的事情重复的作，以达到最佳境地，成为某一招数的高手。

> 弱势不做，弱势不亏钱。

> **股市中，良好的个性、超越旁人的控制力是立身之本。**（龙飞虎）

## 适用场景

- ✅ 学习短线心法 / 龙头战法
- ✅ 寻找适合自己的"招式"
- ✅ 反思自己的交易体系
- ✅ 复盘后的心态调整
- ❌ 直接复制照搬（每位高手语录都有前提条件）
- ❌ 试图"集百家之长"（cdrr 提示要"万法归宗"）

## 关联阅读

- 龙头战法集大成：参见本批《养家_全集》
- 心态/控制力：参见本批《孤独牛背_控制回撤精要》《养家_全集》
- 实盘案例：参见本批《令胡冲_50万至800万成长之路》
- 集合竞价：参见本批《5 分钟筛选牛股》《看集合竞价》

## 与其他游资的呼应

- **Asking ↔ 职业炒手**：两人都强调"等待 + 龙头 + 顺势"
- **龙飞虎 ↔ 养家**：龙飞虎是养家的"偶像"之一，养家大量引用龙飞虎
- **陶永根 ↔ 王元昊**：两人都是"坐标股 + 复盘"派
- **cdrr ↔ 职业炒手**：都强调"放弃主观判断"和"顺势"
- **钢铁战士 ↔ 经常站岗**：都强调"空仓"和"右侧交易"

---

*笔记来源：D 盘《淘股吧高手语录集》PDF*
*整理日期：2026-06-25*
`,oneLine:`**淘股吧 9 位短线高手的核心语录汇编，覆盖心态、龙头、低吸、追涨、仓位、复盘全维度——一部"短线小百科"。**`,tags:[`游资心法`,`语录汇编`,`短线索典`]},{id:`P1P2_淘股吧大师列传`,title:`淘股吧大师列传`,category:`综合资料`,source:`P1P2`,filename:`实战笔记_淘股吧大师列传.md`,content:`# 实战笔记 · 淘股吧·大师列传（系列合集版）

> 题材分类：游资人物志 / 大师列传 / 龙头战法 / 各派心法
> 收录大师：徐翔、章建平、Asking、落升、职业炒手、炒股养家、龙飞虎（及其他）
> 席位来源：兴业证券福州湖东路（Asking）；光大宁波解放南路（徐翔）；东吴湖墅南路（章建平）
> 关联资料：参见 P0《实战笔记_养家心法》《实战笔记_Asking 理念总结》《实战笔记_孤独牛背婚礼演讲》等
> 来源：D 盘《淘股吧大师列传》PDF（高手专辑第一册；P1P2 新增）

---

## 一句话定位

> **时势造英雄，英雄亦适时。** 从徐翔到 Asking，从职业炒手到炒股养家，每个人的成功都是时代红利+个人悟性+极致执行力的综合产物。

## 收录大师全景图

| 大师 | 风格 | 席位/地点 | 体量/成就 |
|------|------|-----------|-----------|
| **徐翔** | 宁波涨停板敢死队总舵主 | 光大宁波解放南路→东方证券肇嘉浜路 | 20万→百亿（传说） |
| **章建平** | 超级散户短线打法 | 东吴证券湖墅南路 | 5万→20亿（2007年高峰） |
| **Asking（邱宝裕）** | 龙头战法+守株待兔 | 兴业证券福州湖东路 | 10万→数亿 |
| **刘睿（cdrr）** | 高频趋势交易 | 深圳中睿合银 | 3万→10亿+（阳光私募） |
| **落升（江南神鹰）** | 熊市超跌反弹 | 隐居滨江小城 | 112倍/3年 |
| **职业炒手** | 龙头和领涨 | 发信托产品 | 第三阶梯→功成名就 |
| **炒股养家** | 情绪揣摩+龙头套利 | 华泰荣超 | 顶尖高手第一阶梯 |
| **龙飞虎** | 待详见《龙飞虎全集》 | 待详见 | 待详见 |

---

## 第一梯队：徐翔（私募大佬·宁波敢死队总舵主）

### 生平

- 1978 年生，十七八岁入股市
- 宁波敢死队三大头目之一，"五朵金花"带头者
- 后转战上海，创建泽熙投资（2009 年末），管理资产超 20 亿
- 2010 年 3 月首只产品泽熙瑞金 1 号规模 10 亿，成立两个月净值 1.8148（同期沪指跌 11.31%）

### 席位变迁

- 银河证券宁波解放南路 → 国泰君安上海江苏路 → 东方证券肇嘉浜路
- 东吴证券肇嘉浜路总经理亲自对接（资金量顶整个营业部）

### 核心战绩

- 5.19 行情：三个月赚了 500%+（陶永根比赛第一名）
- 2000 年：1-4 月赚了 500%+（重仓 600073）

### 金句

> 能在市场赚钱就是高手，不一定是长线投资就是高手。

> 今天在 10:35 左右 9.8 左右买了 2800000 股，你怎么不参与啊……

---

## 第一梯队：章建平（浙江股市第一盟主）

### 生平

- 1967 年生，天津商学院毕业
- 1996 年 5 万元入市，1997 年底达 20 万，1999 年 500 万，2000 年 3000 万
- 2000 年香港创业板半年亏一半（3000 万→1500 万）
- 2007 年高峰资产近 20 亿；据说印花税一年给国家近 2 亿

### 席位变迁

- 国信证券杭州保俶路 → 新疆证券庆春路 → 东吴证券湖墅南路（05 年）
- 2007 年湖墅南路交易量占营业部 50%+（05 年曾占 90%）

### 两大经典战役

**北辰实业**（2006.10-12）：从 3.27 元到 8.91 元（+172%），累计买入 2.5 亿，卖出 2 亿

**招商轮船**（2006.12）：上市首日即涨停，连续三天，累计买入 3.3 亿，卖出 3.52 亿

### 中信证券滑铁卢（2007.12-2008.2）

- 12/14 首次建仓 1.68 亿 → 1/8 拉升 5.3 亿失败 → 之后连续下跌
- 1/22 忍痛割肉 7000 万
- **亏损超 2 亿**（最大一笔 5.3 亿，成本 95 元，2/26 低至 58 元）

### 特点总结

- 低调：不驾车、无手机
- 独立：只有自己和妻子两个账户，无助手不收徒
- 夫妻 9 次同时现身十大流通股股东，从不在同一股票出现两次
- 短线操作：不捂股，不留名超过两次

---

## 第一梯队：Asking（邱宝裕）

### 生平

- 兴业证券福州湖东路
- 破产两次，1998 年借钱起家（10 来万，母亲高利贷）
- 1999-2005：年年获利，总盈利率超 120 倍
- 1999：+100%；2000：+1200%；2003：+100%+；2004：+300%；2005：+190%

### 代表战役

- **鲁抗医药 600789**（2010.09）：光大宁波解放南路买 3179 万，兴业福州湖东路（Asking）买 1341 万
- 第二天继续拉升涨停

### 核心心法（原文）

- "我只跟市场走，不预测，不操纵"
- "十分里边，心态，控制力占 7 分，技术占 3 分"
- "心态是内功，如张无忌练的九阳真经；方法就如十八般武艺"
- "行情好多做，一般都轻仓"
- "小钱要博，大钱要稳"
- "超短一定要及时获利了解"
- "有量就能来钱，操短对行情好坏只有一个标准---量"
- "大盘在走牛，炒股炒的就是想象力，人有多大胆价就有多高"
- "炒股一定要借力打力，四两拨千斤，硬干是不行的，顺势最关键"
- "一定要做市场高度认同的票"
- "追涨停，风险偏大，逢大跌买点更稳妥"
- "上涨靠的是市场合力"

### As king 仓位管理

| 场景 | 动作 |
|------|------|
| 确认追涨 | 先进**半仓** |
| 当天涨停 | 次日继续加仓到**全仓** |
| 当天不涨停 | 次日择高先出 → 等回调做"守株待兔" |
| 守株待兔 | 先**半仓**，获利后出局不加仓 |
| 失利 | **止损且不加仓** |
| 启动重仓条件 | **只有半仓股票迅速盈利时**，才能动用另半仓 |

---

## 第一梯队：落升（江南神鹰）

### 生平

- 1968 年生，2000 年入市
- 2003 年熊市已红遍网络
- 2005 年底隐居滨江小城，3 年狂赚 **112 倍**
- 2008 熊市依然盈利（市场主流热点：农业、创投、迪士尼、奥运、基建、新能源）

### 核心战法：熊市超跌反弹

**第一阶段：向"左"看齐逃顶**
- 大盘前期重要高点附近卖出股票，空仓
- 等跌到颈线附近重新入场

**第二阶段：有效跌破颈线位，离场**

**熊市抢反弹秘诀（量化标准）**

| 指标 | 进场条件 | 离场条件 |
|------|---------|---------|
| 6 日乖离率 | 超过 **-6%** | — |
| 12 日乖离率 | 超过 **-10%** | — |
| 24 日乖离率 | 超过 **-16%** | 接近 **0** 时卖出 |

> 成功率：几乎 **100%**（落升自述）

**选股重点**：最超跌的股票 或 可能成为近期热点的股票

### 落升炒股绝招（四类）

1. **技术面**：追强势股（涨停板/低位放量大阳线）、超跌反弹（跌50%+筑平台）
2. **基本面**：成长周期、扩张信息、资产重组、制度创新
3. **题材面**：社会题材、热点题材、低价绩优、制度题材
4. **经验面**：熟悉主力、背景习惯、龙头个股、偏锋品种

---

## 第一梯队：炒股养家（详见 P0《养家心法》，本节仅补充）

### 本书记载的要点

- **顶尖高手第一阶梯**（书中评定）
- "因简单所以果断，最忌自己都不看好了，只是因为套了几个点还在犹豫"
- 手法稳健、仓控灵动、基本面题材理解与短炒盘面锁定结合

---

## 第一梯队：职业炒手（行情好多做·行情不好少做）

### 本书记载的要点

- **第三阶梯**（书中评定）：手法多样，但大气不足
- 发了信托产品，从草根到大众人物，功成名就
- **《闲谈龙头和领涨》**：涨停板操作，90%+ 操作第二天结束

### 职业炒手·龙头与领涨

> "谁先涨停谁就是龙头，谁的封单越多谁就是领涨"——太肤浅了。

- 龙头不在盘子大小，而在启动时机
- 趋势的力量引导市场合力
- 宁波短线资金流有时只是点燃引暴的作用
- 大盘背景的判断是回避风险的唯一办法

### 职业炒手·强弱市的看法

- **弱市**：只有极度超跌后的反弹行情可参与
- **强势市场**（持续 120 亿+，上海）：大部分人赢多亏少
- 牛市：慢涨急跌；熊市：慢跌急涨
- "弱市忍手不住，强市踩准节奏"

### 职业炒手·炒股就是修道

- **修法 ≠ 修道**：诵经、拜佛、打坐都是手段，目的是一心不乱
- 做任何事都能达到一心不乱（吃饭、砍柴、打板）
- 2013 年职业炒手亲述：
  - 打板 10 年后平静多了，但高度专注不变
  - "血往上涌，心跳加快"是打板时的一心不乱状态

---

## 各派心法对照

| 大师 | 核心 | 操作周期 | 仓位 |
|------|------|---------|------|
| Asking | 龙头+守株待兔 | 数日 | 半仓→全仓 |
| 养家 | 情绪揣摩+龙头套利 | 主流反复/次主流超短 | 大盘高位满仓 |
| 职业炒手 | 龙头+领涨 | 超短（90%次日了结） | 弱市空仓 |
| 落升 | 熊市乖离率超跌反弹 | 波段 | 轻仓快进快出 |
| 孤独牛背 | 龙头+补涨+转势+妖股 | 1-2 天 | 纪律控制 |
| 徐翔 | 宁波敢死队短线 | 极短 | 灵活 |
| 章建平 | 大资金引导+顺势 | 短线 | 满仓操作 |

---

## 经典战役：Asking + 徐翔 双战鲁抗医药（2010.09）

| 席位 | 标的 | 9/9 买入 | 9/10 操作 |
|------|------|---------|-----------|
| 徐翔（光大宁波解放南路） | 600789 鲁抗医药 | 3179 万 | 次日涨停继续加仓 |
| Asking（兴业福州湖东路） | 600789 鲁抗医药 | 1341 万 | 次日涨停继续买 |
| 其他游资 | 600789 鲁抗医药 | 多席位 | — |

> 包头人点评：两人操作思路一致，英雄所见略同。

---

## 经典战役：章建平 中信证券滑铁卢（2007.12-2008.2）

- 12/14 买入 1.68 亿 → 1/8 拉升 5.3 亿失败 → 连续下跌
- 1/22 割肉 7000 万 → 2/4 大涨 8.25% 再卖 2.5 亿 → 2/13 又买 1.6 亿 → 2/22 再割 1.3 亿
- 总结：两月亏损 **超 2 亿**（最大单笔 5.3 亿@95 元→最低 58 元）

---

## 金句

> 徐翔：能在市场赚钱就是高手，不一定是长线投资就是高手。今天在 10:35 买了 2800000 股，你怎么不参与啊。

> Asking：我只跟市场走，不预测，不操纵。十分里边，心态，控制力占 7 分，技术占 3 分。

> Asking：炒股比赌博刺激多了。我一点都不好赌。要不现在还在骑自行车。我已破产两次。

> 职业炒手：弱市忍手不住，强市踩准节奏。行情好多做，行情不好少做。

> 落升：不轻言底部，只做超跌抢反弹。

> 章建平（老婆方文艳）：短线操作，不在十大流通股东中停留两次。

> 龙飞虎：梦想在上，孤独在下。

## 适用场景

- ✅ 研究各路游资的风格、席位、成长路径
- ✅ 理解"时代+个人+执行"的综合成功要素
- ✅ 龙头战法/超跌反弹/情绪揣摩 各派对照
- ❌ 不可简单模仿大资金操作（章建平中信证券案例说明大资金也照样亏）

## 关联阅读

- Asking → P0《Asking 理念总结》
- 养家 → P0《养家心法》
- 职业炒手 → P0《孤独牛背控制回撤》（"行情好多做"）
- 落升 → P0《落升熊市盈利》（乖离率战法）
- 龙飞虎 → P0/P1P2《龙飞虎全集》

---

*笔记来源：D 盘《淘股吧大师列传》PDF*
*整理日期：2026-06-25*
`,oneLine:`**时势造英雄，英雄亦适时。** 从徐翔到 Asking，从职业炒手到炒股养家，每个人的成功都是时代红利+个人悟性+极致执行力的综合产物。`,tags:[`游资人物志`,`大师列传`,`龙头战法`,`各派心法`]},{id:`P1P2_游资席位_完整资料`,title:`游资席位_完整资料`,category:`综合资料`,source:`P1P2`,filename:`实战笔记_游资席位_完整资料.md`,content:`# 实战笔记 · 游资席位完整资料（P1P2 全量版）

> 题材分类：实战工具 / 席位字典 / 游资定位
> 游资/作者：D 盘资料汇编（多源汇总）
> 关联资料：参见 P0《实战笔记_游资席位速查》；C 盘 \`26 位游资_席位_心法_完整研读.md\`
> 来源：D 盘《游资席位资料大全》XLS（5 sheet / 798 行）

---

## 一句话定位

> **D 盘《游资席位资料大全》原版全量提取（798 行 5 sheet），按地区和风格分类，覆盖浙江/上海/江苏/福建/深圳/北京等 80+ 知名游资的席位 + 关联账户 + 资金量级。**

## 核心观点

1. **席位 = 游资身份证**：龙虎榜上的"XX 证券 XX 路营业部"背后通常对应着特定游资集团
2. **席位分散是常态**：一线游资控制 3-20 个马甲席位（关联账户）
3. **席位风格 = 操作指纹**：每个游资的席位都有"刻板风格"——排一字、打板、低吸、追涨、做次新、做定增
4. **席位协同 = 集团军信号**：同一游资的 3+ 席位同时上榜 = 主升浪进行中
5. **席位轮动 = 转场信号**：游资"换券商" = 规避监管或策略升级
6. **D 盘 vs C 盘分工**：C 盘侧重"人物 + 心法"，D 盘侧重"席位 + 实战对应"

## 数据规模

| Sheet 名称 | 行数 | 用途 |
|------------|------|------|
| Sheet "1" | 407 | 主表 - 全部席位（按地区分块） |
| Sheet "1 (5)" | 385 | 同主表（重复内容） |
| Sheet "2" | 4 | 推广信息 |
| Sheet "Sheet3" | 1 | 推广信息 |
| Sheet "更多资料" | 1 | 推广信息 |
| **有效数据行** | **792** | 浙江 / 上海 / 江苏 / 福建 / 深圳 等 |

## 地区分类的游资集团

### 一、浙江省游资（最密集）

| 游资 | 旗舰席位 | 资金量 | 备注 |
|------|----------|--------|------|
| **孙煜** | 中信上海溧阳路 | 50 亿 | 孙国栋、孙建民；造席位比造股或造板块是最大格局 |
| **章建平** | 中信杭州四季路/延安路 | 数十亿 | 开板模式、公告一字板放量拿货；方文艳、王冬香 |
| **沈昌宇** | 东方证券杭州龙井路 | 与孙哥同档 | 罕见的胆大心细 |
| **赵强** | 华泰浙江分公司 | 数十亿 | 淘股吧赵老哥；张渺翊；固定单子 9917-9137 |
| **王海祥** | 财通绍兴人民中路 | 集团军 | 绍兴俞氏豪华游资集团；新股 1968 |
| **马信琪** | 光大宁波解放南路 | 10 亿+ | 浙富控股一役花 7 亿封板；牛散彭旭 |
| **罗申** | 中泰奉化南山路 | — | 功课狂人；落升（江南神鹰）早期席位 |
| **舒逸民** | 兴业杭州清泰街 | 10 亿级 | 竞价点火副仓；舒成芳 |
| **叶庆均** | 银河宁波翠柏路 | 数十亿 | 期股双栖；银河宁波翠柏路 |
| **楼华** | 方正台州解放路 | — | 最初是夫妻账户 |
| **李红彪** | 中信杭州东新路 | 绝对一流 | — |
| **蔡小士** | 财通温岭东辉北路 | — | 题材股为主 |
| **徐柏良** | 银河宁波解放南路 | — | — |
| **朱斌** | 中泰宁波江东北路 | — | 江东大佬；朱德宏 |
| **若茶夫妇** | 东吴杭州文晖路 | — | 夫妇联袂 |
| **缪水妹** | 浙商杭州萧山恒隆 | — | 第一阵营第二线 |
| **彭晨** | 中投杭州环球中心 | — | 杭州一线游资，两个马甲 |
| **王中秋** | 中信金通杭州朝晖路 | — | — |
| **施美艳** | 海通杭州环城西路 | — | 王素芳、叶玉莲 |
| **孙峰（养家）** | 华鑫上海宛平南路 | 10 亿内 | 茅台路的新分仓，最擅长一字板绝技 |
| **郑伟** | 浙商宁波四明中路 | — | 每次投入资金恒定 |

### 二、上海游资

| 游资 | 旗舰席位 | 资金量 | 备注 |
|------|----------|--------|------|
| **赵晨** | 中信上海溧阳路 | — | 徐琦；龙头战法集大成者 |
| **冯志浩** | 申万上海闵行东川路 | — | 浦江之星系列产品 |
| **徐晓** | 国元上海虹桥路 | 顶级 | 和章大佬同一层面 |
| **星石江晖** | 国泰上海分公司 | 私募 | 星石私募分仓席 |
| **沈付兴** | 中信上海世纪大道 | 20+ 亿 | 2013-15 年 2 亿做到 20 多亿；瞿明淑控制 |
| **孙煜** | 中信上海淮海中路 | 50 亿 | 中信证券的旗舰营业部之一 |
| **孙煜** | 申万上海陆家嘴环路 | — | 赵庚禹、赵宁 |
| **一花一残忆** | 华泰上海武定路 | — | 20 万起家 → 2013 年净资产上亿；林古琴 |
| **彪哥** | 中信上海恒丰路 | 大鳄 | 第二天大概率竞价或早盘砸掉 |

### 三、江苏游资

| 游资 | 旗舰席位 | 资金量 | 备注 |
|------|----------|--------|------|
| **张建斌（定增王）** | 银河南京江宁竹山路 | 10 位数 | 原华泰瑞金和海通南京，干大的轻易不上榜 |
| **任** | 国泰君安南京太平南路 | 巨鳄 | 多次进十大股东，举牌 |
| **周晨** | 中投无锡清扬路 | 顶级 | 南京大佬，品牌美誉 |

### 四、福建游资

| 游资 | 旗舰席位 | 资金量 | 备注 |
|------|----------|--------|------|
| **陈小华（厦门帮）** | 安信厦门湖里大道 | 20 亿+ | 钱多势大，兵团作战 |
| **黄长富** | 华泰厦门厦禾路 | 顶级 | 排一字板，风格接近溧阳 |
| **邱宝裕（Asking）** | 兴业福州湖东路 | 福建新星 | 风格接近溧阳银河绍兴 |

### 五、深圳游资

| 游资 | 旗舰席位 | 资金量 | 备注 |
|------|----------|--------|------|
| **乔帮主** | 招商深圳蛇口工业七路 | 数亿 | 突破买入，单股翻倍 |
| **廖启昌（佛山无影脚）** | 光大佛山绿景路 | 顶级 | 低位掩护板，独食万手联排 |
| **何志坚** | 光大佛山季华六路 | 顶级 | 早板、秒板专业户 |
| **王涛（职业炒手）** | 华泰成都南一环路 | 顶级 | 银帆系、校长级游资 |

### 六、北京游资

| 游资 | 旗舰席位 | 资金量 | 备注 |
|------|----------|--------|------|
| **唐汉若** | 华泰北京雍和宫 | 10 位数 | 巨量出击、敢干敢割、北方资金第一 |
| **东北猛男** | 广发辽阳民主路 | 私募猎人级 | 09 年爆炒牛股成名 |

### 七、温州帮（典型集团军）

- **旗舰**：上海证券瑞安罗阳大道
- **跟风席位**：财通青田前路街 / 财通丽水北苑路 / 银河温州锦绣路 / 银河温州大南路
- **特点**：坚瑞消防式集体做盘
- **代表案例**：坚瑞消防（2016 年 6+ 席位协同作战）

### 八、其他

- **张学友**：财通慈溪开发大道 / 华泰舟山解放东路 - 专做新股，杭电股份
- **蒋政一**：海通上海共和新路
- **真好玩**：西藏证券上海辉河路
- **老牌劲旅光**：光大上海张杨路

## 风格分类索引

### 排一字板型
- 孙煜（中信溧阳路）
- 养家（华鑫宛平南路）
- 一花一残忆（华泰武定路）
- 叶？（中信漕溪北路）
- 黄长富（华泰厦禾路）

### 扫板/接力型
- 赵老哥（华泰浙江分公司）
- 孙煜（杭州庆春路系）

### 低吸型
- 佛山无影脚（光大绿景路）
- 何苏州（东吴苏州西北街）
- 贝国浩（国泰益田路）

### 次新专家型
- 张学友（华泰舟山解放东路）
- 沈付兴（方正上海保定路）

### 做盘/集团军型
- 温州帮
- 厦门帮
- 郑州帮
- 孙煜多席位协同

### 定增/股权型
- 张建斌（银河南京江宁竹山路）

### 追涨题材型
- 王海祥（财通绍兴人民中路）
- 何（华泰苏州何山路）

### 私募型
- 泽泉辛宇（神州牧系）
- 罗伟广（新价值投资）
- 星石江晖（国泰上海分公司）

## 已知"散户集中营"（反向指标）

> 看到这些席位集中上榜 = 散户在追涨，往往是阶段性顶部

- 国信深圳泰然九路
- 平安证券芜湖江北
- 国金上海奉贤金碧路
- 国金上海互联网分公司
- 方正温州小南路
- 平安深圳深南东路罗湖商务中心

## 经典案例（基于原文档评价）

- **孙煜中国中车**：2015 年 50 亿资金溧阳路 + 庆春路 + 庆春东路三路协同封板
- **马信琪浙富控股**：单股 7 亿封板，字典中"单股单席位最大资金量"
- **章建平开板模式**：中信杭州延安路 + 四季路 + 朝晖路三席位，公告一字连板后放量板上拿货
- **赵强（赵老哥）华泰浙江分公司**：固定单子 9917-9137，淘股吧大神
- **温州帮坚瑞消防**：2016 年瑞安罗阳大道旗舰 + 6+ 席位协同作战
- **孙煜造席位**："造席位比造股或造板块是最大的格局"
- **中信淮海路**："龙头战法的集大成者"，中信证券的旗舰营业部之一
- **一花一残忆**：20 万起家 → 2013 年仅 22 岁就做到净资产上亿

## 金句

> **造席位比造股或造板块是最大的格局** —— 孙煜

> **不砸盘有担当的席位在牛市，市场会双倍奉献那种承担** —— 字典原话

> **一个师傅级的游资 出手必赚** —— 西藏证券辉河路

> 这类大鳄出现，基本上是市场短期人气回升的标志 —— 字典评甘忠廉 / 彪哥

> 经过 2008 年雪崩冲击的趋势投资者，一有风吹草动便迅速出逃 —— 评贝国浩

> 没有砸盘的资本就不要当游资

> 涨停板是龙头战法的集大成者

> 市场上的游资席位如同指纹，每位都不可复制

## 风控逻辑

1. **席位 ≠ 圣杯**：即便顶级游资也有亏损时刻
2. **席位出货信号**：
   - 同一席位连续 3 日买入后突然缺席 = 主力可能已在高位派发
   - 买一席位金额突然大幅萎缩 = 跟买资金不足，警惕见顶
   - "假机构席位"出现 + 游资席位消失 = 主力对倒出货
3. **席位"散户集中营"清单** = 反向指标
4. **席位已废清单** = 不要再跟随

## 适用场景

| 场景 | 怎么用本字典 |
|------|--------------|
| 盘中看到龙虎榜异动 | 立即翻字典确认席位对应的游资 |
| 复盘某只牛股的资金路径 | 按席位倒查是哪几路游资接力 |
| 选股阶段筛强势股 | 优先选"顶级游资席位正在持仓"的票 |
| 判断行情阶段 | 多席位集团军上榜 = 主升加速；散户席位上榜 = 见顶预警 |
| 学习游资战法 | 锁定某位游资后，专项精读其代表作和席位规律 |

## 关联阅读

| 关联笔记 | 关联点 |
|---------|--------|
| 实战笔记_Asking理念总结 | Asking 席位 = 兴业福州湖东路 |
| 实战笔记_养家_全集 | 养家席位 = 孙峰（华鑫系 7 个马甲） |
| 实战笔记_令胡冲_50万至800万成长之路 | 令胡冲实盘记录在 2015 年牛市 |
| 实战笔记_孤独牛背_控制回撤精要 | 孤独牛背席位可从字典中检索 |
| 实战笔记_赵老哥_1.12操作 | 赵老哥 1.12 当日操作 |
| 实战笔记_淘股吧_高手语录集 | 涉及 9 位高手的席位交叉验证 |

---

*笔记来源：D 盘《游资席位资料大全》XLS*
*整理日期：2026-06-25*
`,oneLine:`**D 盘《游资席位资料大全》原版全量提取（798 行 5 sheet），按地区和风格分类，覆盖浙江/上海/江苏/福建/深圳/北京等 80+ 知名游资的席位 + 关联账户 + 资金量级。**`,tags:[`实战工具`,`席位字典`,`游资定位`]},{id:`P1P2_滚雪球_上`,title:`滚雪球_上`,category:`经典思维`,source:`P1P2`,filename:`实战笔记_滚雪球_上.md`,content:`# 实战笔记 · 滚雪球上（巴菲特传·早期投资生涯）

> 题材分类：巴菲特传记 / 早期投资 / 格雷厄姆学派 / 太阳谷演讲
> 游资/作者：爱丽丝·施罗德（作者）；沃伦·巴菲特（传主）；查理·芒格（合伙人）
> 性质：**内容有截断，详见原始文件**（大文件，仅取前半部分精华）
> 副标题："巴菲特和他的财富人生"
> 译者：覃扬眉、丁颖颖、张万伟、张春明、张艳云
> 出版：中信出版社，2009.1，定价 39.00 元，477 千字
> 来源：D 盘《滚雪球上》PDF（艾丽斯·施罗德著）

---

## ⚠️ 内容截断说明

> **本笔记基于文件前约 50% 内容整理。** 原文件共 38.3MB，PDF 解析涉及 30+ 章节（从童年的西点镇到 1999 年太阳谷演讲），后半部分（含 2008 金融危机、与芒格的更多故事）未完整覆盖。**详见原始文件**。

## 一句话定位

> **滚雪球的隐喻 = 找到很湿的雪和很长的坡。** 巴菲特 9 岁那年的冬天，他把雪球从院子滚到街区，再滚向白雪皑皑的整个世界。本书是巴菲特从童年到 1999 年太阳谷演讲的完整投资人生记叙。

## 核心观点（前半部分）

1. **早年的复利启蒙**：6 岁的巴菲特手里拿着自己最喜欢的玩具——货币换算器
2. **父亲的价值观影响**：霍华德·巴菲特是国会议员，"用简单的美国尺度——这一提议是让我们走向人类自由还是远离它"
3. **本杰明·格雷厄姆的传承**：从恩师到芒格的进化
4. **太阳谷演讲（1999）**：泡沫顶峰时巴菲特预言"市场不出现下跌的话，未来 17 年最有可能的收益率是 6%"
5. **内部记分卡**：巴菲特的标准不是外部记分卡
6. **逆向思考 + 习惯性动物**：芒格的"鞋扣情结"比喻
7. **"习惯性动物"性格**：巴菲特和芒格"简直就是连体双胞胎"
8. **巴菲特投资 44 年**：5 年杰出成绩足够表现不凡，巴菲特 44 年一直处于第一流位置
9. **巴菲特 vs 市场**：短期市场是选票机，长期市场是一杆秤
10. **伊索的"一鸟在手"**：伊索没提到时间——利率是对"时间"的定价

## 第一部分：大泡泡（1999 太阳谷演讲）

### 背景
- **1999 年太阳谷年会**：听众席里坐满了工业的领头人物
- **他们认为这是新模式，互联网时代的黎明时刻**
- 巴菲特被打上"贪婪作祟"的标签
- **巴菲特正在往他们的香槟里吐口水**

### 巴菲特演讲核心观点

> 短期内，市场是选票机；而在长期，市场是一杆秤。

> 关于投资，只存在两个真正的问题：你想得到多少回报，二是你想什么时间得到回报。

> 伊索你不上是一位金融家，但是他说过"一鸟在手胜过双鸟在林"，不过，他并没有提到时间。

> 利率-借贷成本-是对"时间"的定价。

> 利率变化，所有金融资产，包括房子、股票、债券的价值都会发生变化。

> 这就是为什么有时手里的鸟比林子里的鸟值钱，有时林子里的鸟比手里的鸟值钱。

### 三种让股票保持 10% 以上增速的方式
1. 利率下降，保持在历史低位
2. 投资人而非雇员/政府/其他主体在经济中享有的份额高于历史已有水平
3. 经济的增速开始快于正常情况
- 巴菲特斥为**"痴心妄想"**

### 创新投资的失败案例
- **汽车行业**：2000 多家汽车公司，最后只有 3 家活下来
- **航空业**：1919-1939 年 200 多家航空公司，**对航空企业的所有股票投资都赚不到钱**
- **巴菲特原话**："我会回到小鹰号时代，我会有足够的远见和'见义勇为'的精神，把奥维尔·莱特给打下来"

### 美国经营不善的企业数量
| 年份 | 数量 |
|------|------|
| 1900 | 1700 万 |
| 1998 | 500 万 |

### 巴菲特对"创新"的看法

> 推广、宣传新行业是好事，因为新行业很容易推销出去。而要推销现存的产品则非常困难。

> 相比之下，推销没什么人懂的产品要容易得多即使是亏损的产品，因为不存在量化的要求。

> 投资股市最大的风险其实并不是价格的上下起伏，而是你的投资未来会不会出现永久性的亏损。

> 不停地回来投资。这让我想起一个关于石油勘探商的故事……这就是人们认识、感受股票的方式。

### 巴菲特的演讲效果

> 听众席上的人大笑起来，然后鼓掌欢呼……一股怨气暗暗充斥整个房间

- 有人觉得"很了不起，这是关于股票市场的基础教程，一节课就蕴含了一切"（盖茨）
- 有人觉得"演讲令人感到安慰、身心通畅"
- **盖斯·基奥（可口可乐影子 CEO）**：当时推销员，每周 200 美元，要供 6 个孩子上教区学校

### 投资回报率预期

- **巴菲特的预期**：如果市场不出现下跌，未来 17 年最有可能的收益率是 **6%**
- **潘恩韦伯-盖勒普机构调查**：投资者预期的股票收益率为 **13%—22%**
- **巴菲特被私下称为"新好男人沃伦"——"沃伦错过了这班车"**

### 历史汽车行业的数据震撼

> 这清单上面有 2000 家汽车公司……但是，在几年前的 2000 多家汽车业中，只有 3 家企业活了下来。而且，曾几何时这 3 家公司的出售价格都低于其账面价值。

### 巴菲特演讲的"无懈可击"

> 巴菲特对股票市场过度膨胀的演讲就像是对一屋子声名狼藉的人宣扬贞洁

> 巴菲特显然对可以免费获取的信息置若罔闻，而且无视新世纪正到来的现实

> 巴菲特什么时候会停止脚步？……有些人认为，也许可以用个人电脑这样的发明，再加上像互联网这样具有说服性的某项技术来说服或反驳巴菲特。

## 第二部分：内部记分卡

### 巴菲特评价芒格

> 巴菲特和芒格"简直就是连体双胞胎"（连体婴儿）

- **走路时都斜向同一方向，步态同样笨拙**
- 同一款的灰西装，僵硬地挂在同样呆板的身上
- 灰白色的头发的理发方式都一模一样
- 戴款式相似的克拉克·肯特式的眼镜
- **透射出一样慑人的眼光**

### 巴菲特和芒格的共同特质

| 维度 | 巴菲特 | 芒格 |
|------|--------|------|
| 思考方式 | 逐字逐句来推理 | 用比喻 |
| 对待"宿命论" | 不如芒格纤细 | 纤细的宿命论感 |
| 演讲风格 | 批评一类人 | "我一直在以伟大代数学家卡尔·雅各比所建议的热情，寻找逆向观察力" |
| 角色定位 | "表扬单个人，批评一类人" | "被人从讲台上给拖下来" |
| 自我陶醉 | 难以停止演讲 | 选择性演讲但停不下来 |
| 关注点 | 钱、投资、生活 | 业余科学家、建筑师 |

### "习惯性动物"（芒格）

> 我同学的父亲每天都和同一群人上班。他们中有一个人计划在鞋扣市场囤积居奇——这个市场真的是很小，但是这人最终占据了整个市场。然后，他对所有东西都高谈阔论，所有能想象的东西——垄断鞋扣市场令他成为各个方面的全能专家。沃伦和我一直认为，这种行为方式大错特错。

### 芒格早上的固定动作

> 芒格早上起床，然后把 0.25 英寸厚的老式、白内障术后眼镜架上鼻梁。每天在同一时刻准点坐进汽车，小心翼翼地把他父亲的公文包——他正使用的公文包——放到旁边的座位上

### 巴菲特的能力范围

> 巴菲特不存在受"鞋扣情结"折磨的危险。他担心自己看起来面目可憎，或者更糟糕的是，显得伪善。

> 他相信自己所谓的"能力范围"，在自己个围个圈，待在里面，做好三件事：钱、投资和生活——他可以以此被视为一名绝对意义上的专家。

### 巴菲特作为"传教士"

> 巴菲特作演讲，写文章，写评论。搞乐会，把人聚到一块，给他们上小课；他为诉讼案作证；他上电视纪录片，接受电视采访，让新闻记者跟着他旅行；他去大学转悠并开课，邀请大学生来看望他……

> **伯克希尔·哈撒韦就是巴菲特的"西斯廷教堂"——不只是一件艺术品，而且还是展示其信仰和理念的"讲义"**

> 这就是为什么芒格会把公司称为巴菲特的**"传教公司"**。

## 巴菲特-芒格友谊

- **1959 年通过朋友在午餐时认识**
- 之后交谈持续了几十年，从未中断
- **最后他俩能读懂对方脑子里的东西，无须说话，靠心灵感应就可以**
- "人们离开巴菲特的办公室或者芒格的演讲会之后，都会夸张地用手拍额头，嘴里叫着'我的天啊！'"

## 格雷厄姆集团（1968 年）

### 1968 年格雷厄姆集团成员（圣迭戈科罗拉多酒店）
- 巴菲特
- 罗伯特·布尔斯廷
- 本杰明·格雷厄姆
- 桑迪·戈特斯曼
- 汤姆·纳普
- **查理·芒格**
- 杰克·亚历山大
- 亨利·勃兰特
- 沃尔特·施洛斯
- 马歇尔·温伯格
- 巴迪·福克斯
- 比尔·鲁安
- 罗伊·托尔斯（拍下这张照片）
- 弗雷德·斯坦贝克（未参加）

> 沃伦自己就称他和芒格"简直就是连体婴儿"。

## 巴菲特与盖茨

> 比尔·盖茨屏住了呼吸，直到巴菲特展示出第一张幻灯片，他才松了一口气

## 巴菲特的核心金句

> 短期内，市场是选票机；而在长期，市场是一杆秤。

> 重量最终才是有价值的，但是短期内，数量很重要。而且这是一种非民主的投票。

> 巴菲特：估值不是预测。

> 关于投资，只存在两个真正的问题：一是你想得到多少回报，二是你想什么时间得到回报。

> 利率-借贷成本-是对"时间"的定价。

> 历史车轮滚滚，浪花淘尽英雄，作为个人，在时代的潮流中当然有得有失。

> 在 5 年的时间里经济规模增长了 5 倍，《财富》500 强企业的销售额的增长超过 5 倍，然而，在这 17 年里，股票市场完完全全落在了后面。

> 1919-1939 年 200 多家航空公司，历史上，对航空企业的所有股票投资都赚不到钱。

> 推广、宣传新行业是好事……推销没什么人懂的产品要容易得多即使是亏损的产品，因为不存在量化的要求。

> 巴菲特的话锋一转，回到林中鸟，以之结束了演讲。

## 关键时间线

| 年份 | 事件 |
|------|------|
| 1930 | 巴菲特出生（西点镇） |
| 1933 | 2 岁照片 |
| 1936-1937 | 6 岁，手里拿着玩具货币换算器 |
| 1938 | 罗斯帝尔学校 8 年级 |
| 1945 | 与父亲参加内布拉斯加国会议员代表团钓鱼活动 |
| 1946.1 | 在美国校园之音栏目广播 |
| 1948.1 | 宣誓加入宾夕法尼亚大学 Alpha Sigma Phi 兄弟会 |
| 1948 | 沃伦、诺尔玛、唐·丹利在斯普林菲尔德劳斯莱斯布鲁斯特小轿车旁 |
| 1949 | 在彭尼家地下室卖男士服装（"热身练习"） |
| 1950 | 巴菲特一家 |
| 1951 | 与范尼塔·梅·布朗约会（1949 国家樱花节"内布拉斯加公主"） |
| 1952.4.19 | 与苏珊·汤普森结婚 |
| 1959 | 通过朋友午餐时认识芒格 |
| 1968 | 格雷厄姆集团在圣迭戈聚会 |
| 1974 | 28 岁的阿斯特丽德·门克斯（4 年后搬到巴菲特家） |
| 1983.11 | 苏茜与艾伦·格林伯格的婚礼 |
| 1991 | 为庆祝乔治·彭斯 95 岁生日切磋桥牌 |
| 1999.7 | 太阳谷演讲（最具代表性事件） |
| 2003.4.11 | 为奥马哈皇家联赛抛出第一球 |

## 巴菲特家族

- **妻子**：苏珊·汤普森（Susan Thompson）
- **长子**：豪伊（Howie）
- **长女**：苏茜（Suzie）
- **次子**：彼得（Peter）
- **晚年伴侣**：阿斯特丽德·门克斯（Astrid Menks，1974 28 岁）

## 与格雷厄姆的友谊

- 格雷厄姆-纽曼合伙企业的杰瑞·纽曼和本杰明·格雷厄姆
- 1950 年代，巴菲特在奥马哈大学授课
- 1968 年格雷厄姆集团聚会
- 1980 年代，巴菲特每年邀请格雷厄姆到家中做客

## 经典语录（前半部分精选）

> 鸟儿已飞过，天空没有翅膀的痕迹。人的记忆力是有限的，不是所有经历过的人和事都能永存我们的记忆之中。

> 兄弟，你下了一步先手啊！中国的国企没干头，干好干坏最后都得走人。

> 我和沃伦一直认为，"鞋扣情结"是错的。

> 我想让他们坐在椅子上不离去，但是，这不意味着他们会放弃。

> 你应该做的事就是卖空经营不好的公司。

> 巴菲特："现在，还有没有什么人没被我挖苦到？"（反问）"谢谢各位！"

## 适用场景

- ✅ 价值投资 / 长线持有
- ✅ 巴菲特/芒格生平学习
- ✅ 复利思维 / 投资哲学
- ✅ 危机时期的市场判断
- ✅ 跨学科学习（与芒格的多元思维模型对照）
- ❌ 短线 / 高频交易
- ❌ IT 泡沫时期的跟随（巴菲特明确不看互联网）
- ❌ 卖空经营不善的公司（巴菲特也未做）

## 关联阅读

- **滚雪球下**：本批《实战笔记_滚雪球_下_谷巴高清》—— 巴菲特传后半部分
- **穷查理宝典**：本批《实战笔记_穷查理宝典_智慧》—— 芒格智慧
- **荣辱二十年**：本批《实战笔记_荣辱二十年_股市人生》—— 中国版证券业拓荒者
- **江平投资准则**：P0《江平投资准则》—— 华尔街视角
- **丁一熊两次股灾**：P0《丁一熊》—— 中国股灾中的应对

## 与其他人物的呼应

| 维度 | 巴菲特 | 芒格 | 阚治东 | 裘国根 |
|------|--------|------|--------|--------|
| 角色 | 价值投资 | 多元思维 | 中国证券拓荒者 | 私募价投 |
| 时代 | 20 世纪下半叶-21 世纪 | 20 世纪下半叶-21 世纪 | 1980s-2000s | 1990s 至今 |
| 关键事件 | 太阳谷演讲预言 IT 泡沫 | 2008 危机远见 | 申银万国合并、南方证券 | 私募长期价投 |
| 思想核心 | 内部记分卡 | 心理学 + 逆向 | 国企改革时代 | 安全边际 |

---

*笔记来源：D 盘《滚雪球上》PDF（艾丽斯·施罗德著，2009.1 中信出版社）*
*内容有截断，详见原始文件*
*整理日期：2026-06-25*
`,oneLine:`**滚雪球的隐喻 = 找到很湿的雪和很长的坡。** 巴菲特 9 岁那年的冬天，他把雪球从院子滚到街区，再滚向白雪皑皑的整个世界。本书是巴菲特从童年到 1999 年太阳谷演讲的完整投资人生记叙。`,tags:[`巴菲特传记`,`早期投资`,`格雷厄姆学派`,`太阳谷演讲`]},{id:`P1P2_滚雪球_下_谷巴高清`,title:`滚雪球_下_谷巴高清`,category:`经典思维`,source:`P1P2`,filename:`实战笔记_滚雪球_下_谷巴高清.md`,content:`# 实战笔记 · 滚雪球下（谷巴高清版·投资智慧补遗）

> 题材分类：价值投资 / 复利 / 人生哲学
> 游资/作者：爱丽丝·施罗德（作者）；沃伦·巴菲特（传主）
> 性质：P0 已有《滚雪球下》笔记，本笔记为 P1P2 批次同名文件（无优选课程网前缀）的独立整理版
> 关联资料：原作 The Snowball: Warren Buffett and the Business of Life
> 来源：D 盘《滚雪球(下) (谷巴网高清版)》PDF

---

## 一句话定位

> **人生的目标就是，在你期望得到关爱的人们中间最大限度地争取自己受人爱戴。** 巴菲特一生的全部精力和热情都推动着自身智慧、性情和技能的不断完善。

## 核心观点

1. **"滚雪球" 的隐喻**：要找到很湿的雪和很长的坡
2. **复利是滚雪球的发动机**：财富以几何级数速度增长
3. **评估投资价值 + 规避风险 + 保留安全边际 + 专注**：巴菲特的方法从来没变
4. **"卵巢彩票"理论**：你出生在哪个国家、家庭，是不能选择的
5. **内部记分卡**：巴菲特的标准是内部记分卡，不是外部
6. **投资不复杂**：长期投资都较简单；复杂的多头套利对冲要严格跟踪流动性
7. **不要回头看山顶**：他一直认为自己就是早晨八九点钟的太阳
8. **别人恐慌的时候贪婪**：但切勿企图智取市场
9. **只有少数人应该成为积极的投资者**

## 巴菲特关键时间线（与本书相关）

| 年份 | 事件 | 关键数据 |
|------|------|----------|
| 1980 | 50 岁生日聚会 | 伯克希尔每股 375 美元 |
| 1981 | 里根大幅减税 + 撤销管制 | 1982 年底牛市开始突起 |
| 1983 | 收购蓝带印花公司 | 巴菲特和芒格成为合伙人 |
| 2007 | 道琼斯 14000 | 巴菲特首次荣膺全球首富 |
| 2008-03 | 贝尔斯登差点倒闭 | 美联储拿出 300 亿美元担保债务 |
| 2008 | 油价 144 美元/桶 | 巴菲特开始弯腰捡"烟蒂" |
| 2008 | 4% 回报环境（芒格语） | 骗子可能风行于市 |

## 2008 金融危机的应对

> 巴菲特仿佛回到了童年，又开始弯腰捡"烟蒂"。

- 美联储为贝尔斯登 300 亿美元担保债务 → 第一次花钱帮助投行
- **信用违约互换(CDS)**：对存在破产风险的公司推出保险
- 投入 40 亿美元 → "如果这就是有效的市场，那么字典必须重新定义'有效'一词"
- **优先贷款**有极大优势
- 资源类不再主流；苹果、3D 打印是衍生概念

## 巴菲特的人生价值观

> 沃伦·巴菲特性格内向，不喜欢抛头露面，生活中需要别人帮助来渡过困境。

- **对待身体**：像对待此生拥有的唯一一部车子那样——小心呵护
- **找与自己性情相投的人**：只与喜欢的人们一起工作
- **内部记分卡 vs 外部记分卡**：靠自己的标准
- **复利 = 复利+复利 = 几亿乃至几十亿**
- **"不要回头看山顶"**：他一直认为自己就是早晨八九点钟的太阳

## 给大学生的忠告

> 我很早就开始滚雪球了。如果起步晚了 10 年，就完全没有现在这样站在山顶看风景的优势。

- **"蓄势待发"**：起步早比拼命追赶更有效
- **信用卡会导致他们落在后面**
- **"在期望得到关爱的人们中间最大限度地争取自己受人爱戴"**——人生目标
- **结婚**（巴菲特不谈金钱）
- **怎么判断正误**：用内部记分卡
- **理想的社会**：每个公民都能参与财富创造

## 风控逻辑

> 在错误的时间买进或卖出或者付高价，都无异于自寻短见。

- 避开这两方面的最好办法：**买低廉的指数基金**，而且**长期买**
- 别人恐慌的时候贪婪，别人贪婪的时候恐慌
- **切勿企图智取市场**
- 如果长期美国社会都会好转，那又为何费力挑选投资对象？
- **只有少数人应该成为积极的投资者**

## 经典案例

- **1980 年 50 岁生日聚会**：500 名富翁在纽约大都会俱乐部
- **1983 年伯克希尔年报**：阐述"所有者导向原则"
- **罗克福德银行**：巴菲特被迫卖掉（银行控股公司法案）
- **2008 信用违约互换 CDS**：投入 40 亿美元，最荒唐的事情
- **B 夫人内布拉斯加家具城、波珊珠宝店**：大学生参观的圣地
- **佐治亚理工学院演讲**："人生的目标就是……最大限度地争取自己受人爱戴"

## 金句

> 复利这一伟大的发动机像奴仆一样正在为他的财富辛勤劳作着。

> 没有人像伯克希尔·哈撒韦的股东那样认为公司 CEO 就是自己的良师益友。

> 我很早就开始滚雪球了。如果起步晚了 10 年，就完全没有现在这样站在山顶看风景的优势。

> 别人恐慌的时候贪婪，别人贪婪的时候恐慌，但切勿企图智取市场。

> 人生的目标就是，在你期望得到关爱的人们中间最大限度地争取自己受人爱戴。

> 只有找对了雪地才可以滚雪球……我们要争取做一个受欢迎的人，其实就是让自己的雪球在雪地上越滚越大。

> 没有人可以预测准股市。长期配置，就是要勇敢去投资，在低迷的岁月。

## 适用场景

- ✅ 价值投资 / 长线持有
- ✅ 长期复利的复利效应（10+ 年）
- ✅ 早期储蓄/投资的起步者
- ✅ 资产配置层面的稳健派
- ❌ 短线 / 高频交易
- ❌ 危机中的杠杆豪赌
- ❌ 在错误的时间高买低卖

## 关联阅读

- **P0 已有的《滚雪球下》**：可对照阅读
- **滚雪球上**：本批《实战笔记_滚雪球_上》—— 巴菲特更详细的投资历程
- **穷查理宝典**：本批《实战笔记_穷查理宝典_智慧》—— 芒格视角的对照
- **江平投资准则**：P0《江平投资准则》—— 形成"价值派 vs 华尔街"对照
- **丁一熊两次股灾 / 裘国根成长股接力**：P0 多份—— 形成"长线派的多种表达"

## 与其他游资/人物的对比/呼应

| 维度 | 巴菲特 | 裘国根 | 江平 |
|------|--------|--------|------|
| 持仓周期 | 永久持有 | 中长线 + 接力 | 长线 + 灵活 |
| 标的选择 | 价值低估 + 安全边际 | 价值低估 + 高安全边际 | 价值+独创性发现 |
| 资金来源 | 伯克希尔保险浮存金 | 私募 | 华尔街 |
| 风控核心 | 内部记分卡 + 复利 | 流动性 + 安全边际 | 死守不战 + 平衡 |

---

*笔记来源：D 盘《滚雪球(下) (谷巴网高清版)》PDF（爱丽丝·施罗德著）*
*整理日期：2026-06-25*
`,oneLine:`**人生的目标就是，在你期望得到关爱的人们中间最大限度地争取自己受人爱戴。** 巴菲特一生的全部精力和热情都推动着自身智慧、性情和技能的不断完善。`,tags:[`价值投资`,`复利`,`人生哲学`]},{id:`P1P2_独股一箭_交割单`,title:`独股一箭_交割单`,category:`高手手记`,source:`P1P2`,filename:`实战笔记_独股一箭_交割单.md`,content:`# 实战笔记 · 独股一箭交割单（百万杯完整交割单）

> 题材分类：交割单复盘 / 强势股接力 / 实战
> 游资/作者：独股一箭
> 数据来源：第七届职业炒手杯百万实盘炒股大赛（2010.10 - 2011.9 完整交割单）
> 关联资料：P1P2《实战笔记_独股一箭_手记》
> 来源：D 盘《独股一箭交割单》

---

## 一句话定位

> **百万杯完整交割单**——2010.10 至 2011.9 期间 50+ 只股票的逐笔成交记录，复盘"强势股接力"在实盘中的落地。

## 核心观点（5-8 条）

1. **交割单可验证**：所有交易逐笔公开，验证"只看分时+成交量+均线"的方法论是否可执行。
2. **风格高频切换**：从地产（保利/大龙）到券商（兴业证券）到资源（紫金/辰州/鞍钢）到机械（中联/三一）到医药（联环/以岭/迪安）——题材全覆盖。
3. **新股是 2011 主战场**：002602 世纪华通、002603 以岭药业、002604 龙力生物、300077 国民技术、300175 朗源股份、300244 迪安诊断——创业板开通后第一批新股炒作。
4. **单股满仓大票** → **多股切换** 的策略循环。
5. **手续费和印花税意识**：每笔交易都标注手续费/印花税/其他杂费。
6. **亏损单不被过滤**：交割单显示完整的失败交易——"002603 以岭药业"反复操作最终亏损出局。
7. **兑现很果断**：大龙地产 600159 单日兑现 113 万（中南传媒亦然）。
8. **心态记录 + 实盘交割单双线**：每段操作后都有自评（"做的真 tmd 烂"、"控制力太差"）。

## 关键数据：第七届职业炒手杯百万实盘数据

| 阶段 | 资产 | 关键操作 |
|------|------|----------|
| 报名初始 | 1,668,715 元 | 2010.10.8 转出 10w 后 |
| 第一周 | 1,784,117 | 联环药业 600513 浮盈 5.89% |
| 1 个月 | 2,148,116 | 中船/鞍钢兑现 |
| 2011.7-9 期间 | 数百次操作 | 濮耐/尖峰/龙力/以岭/汇源/汉王 |

## 经典交割单（按时间）

### 2010.10.8 起手
| 时间 | 股票 | 操作 | 数量 | 均价 | 发生金额 |
|------|------|------|------|------|----------|
| 10.8 | 600048 保利地产 | 卖 | -134,284 | 12.07-12.20 | +1,627,308 |
| 10.8 | 000541 佛山照明 | 买 | 95,100 | 17.03-17.15 | -1,625,213 |
| 10.11 | 600513 联环药业 | 买 | 81,300 | 20.45-20.70 | -1,670,754 |
| 10.12 | 600513 联环药业 | 卖 | -81,300 | 21.34-21.49 | +1,743,144 |

### 2010.10.15 关键日（中船+鞍钢兑现）
| 时间 | 股票 | 操作 | 数量 | 均价 | 金额 |
|------|------|------|------|------|------|
| 10.15 | 601377 兴业证券 | 卖 | -125,850 | 16.31-16.67 | +2,094,964 |
| 10.15 | 600072 中船股份 | 买 | 80,400 | 16.35-16.55 | -1,327,624 |
| 10.15 | 000898 鞍钢股份 | 买 | 75,600 | 9.66-9.67 | -731,144 |
| 10.18 | 600072 中船股份 | 卖 | -80,400 | 17.68-17.72 | +1,421,525 |
| 10.18 | 000898 鞍钢股份 | 卖 | -75,600 | 10.15-10.18 | +767,350 |

### 2010.10 大龙地产重仓战役
| 时间 | 操作 | 数量 | 均价 | 金额 |
|------|------|------|------|------|
| 10.13 | 600159 大龙地产 买 | 285,800 | 5.59-5.82 | -1,612,484 |
| 10.14 | 600159 大龙地产 卖 | -324,800 | 5.70-5.79 | +1,866,540 |
| 净盈利 | | | | +254,056（4 个交易日） |

### 2010.10 末 / 11 月初切换
| 时间 | 股票 | 操作 |
|------|------|------|
| 10.22 | 002488 金固股份 | 买 30,500 股 26.6-27.1 |
| 10.22 | 000725 京东方A | 买 429,100 股 3.34 |
| 10.25 | 000541 佛山照明 | 买 82,200 股 19.33-19.6 |
| 10.25 | 000725 京东方A | 卖 -433,100 股 3.69-3.75 |
| 10.26 | 600333 长春燃气 | 买 175,300 股 13.44-13.71 |
| 10.27 | 000518 四环生物 | 买 267,300 股 8.52-8.76 |
| 10.27 | 600333 长春燃气 | 卖 -175,300 股 12.98-13.25 |
| 10.28 | 600159 大龙地产/600173 卧龙地产/600376 首开股份 | 多股切换 |
| 10.29 | 601098 中南传媒 | 买 133,100 股 13.79-14.05 |
| 11.1 | 601098 中南传媒 | 卖 -170,300 股 14.08-14.27 |
| 11.1 | 600531 豫光金铅 | 买 20,000 股 32.00 |
| 11.1 | 601899 紫金矿业 | 买 98,200 股 9.91-9.92 |
| 11.1 | 002155 辰州矿业 | 买 19,900 股 40.31 |

### 2011.7 濮耐股份兑现（最大单笔）
| 时间 | 股票 | 操作 | 数量 | 均价 | 金额 |
|------|------|------|------|------|------|
| 7.25 | 002225 濮耐股份 | 卖 | -184,050 | 14.26-14.68 | +2,694,825 |
| 7.25 | 600833 第一医药 | 买 | 154,600 | 10.30-10.45 | -1,597,980 |
| 7.26 | 600833 第一医药 | 卖 | -195,800 | 10.00-10.10 | -（小亏） |
| 7.26 | 600085 同仁堂 | 卖 | -57,700 | 17.34-17.35 | +1,000,797 |

### 2011.7-8 多股密集切换
| 时间 | 主要操作 |
|------|----------|
| 7.26-7.27 | 600668 尖峰集团 6.6 万股/000598 兴蓉投资 4.27 万/002600 江粉磁材 5 万股 |
| 7.27 | 600802 福建水泥 11.66 万股/000798 中水渔业 1.1 万/000975 科学城 2.16 万 |
| 7.27 | 002240 威华股份 11.97 万股 |
| 7.28 | 600399 抚顺特钢 **50.5 万股 8.82-8.90**（单股 444 万） |
| 7.28 | 300175 朗源股份 9,600 股 26.38 |
| 7.29 | 002604 龙力生物 **13.95 万股 26.3-27.7**（单股 369 万） |
| 7.29 | 002602 世纪华通 4,900 股 25.6 |
| 8.1-8.4 | 002603 以岭药业反复操作（5.43 万股 44.8-46.4，最终亏损） |
| 8.1 | 300244 迪安诊断 5,000 股 41.4 |
| 8.2 | 002602 世纪华通 **22.8 万股 26.2-26.6**（单股 600 万） |
| 8.4 | 600714 金瑞矿业 8.36 万股 21.0 |
| 8.4 | 002362 汉王科技 3 万股 21.8 |
| 8.4 | 000586 汇源通信 **13.6 万股 10.25-10.51**（单股 140 万） |
| 8.4 | 300077 国民技术 1,200 股 28.51 |

## 选股特征（按主题归类）

| 主题 | 代表股 | 操作频次 |
|------|--------|----------|
| **地产** | 600048、600159、600173、600376、600399、600714、000586、002362 | 高 |
| **资源** | 601899、000898、600531、002155、002171、000518 | 高 |
| **券商/金融** | 601377、000562、002488、002155 | 中 |
| **机械/基建** | 600072、000157、600031、002085 | 中 |
| **医药** | 600513、002603、600833、600085、300244、002589 | 中 |
| **新股（0026xx/300xxx）** | 002602、002603、002604、300077、300175、300244 | 极频繁 |
| **科技/电子** | 000725、002362、002600、002155、002240、300077 | 中 |
| **传媒/教育** | 601098、000793、002261 | 低 |
| **纺织/消费** | 000541、002154、002486、002569、002572 | 中 |

## 风控逻辑

> 交割单揭示三个核心风控原则：

1. **盈利后快速兑现**：002225 濮耐股份 165 万单笔兑现；000898 鞍钢股份 76 万兑现；601377 兴业证券 209 万兑现。
2. **亏损不止损但限制单股规模**：002603 以岭药业反复操作 → 通过多笔小仓位控制单股风险敞口。
3. **题材切换很频繁**：2011.7 一天内多次满仓切换（抚顺特钢→龙力生物→世纪华通→以岭药业）。

## 经典案例回顾

- **大龙地产（600159）4 天战役**：285,800 股 5.59-5.82 买入 → 324,800 股 5.70-5.79 卖出 → 单股净赚 254,056 元
- **濮耐股份（002225）大兑现**：184,050 股 14.26-14.68 卖出 → 2,694,825 元（最大单笔兑现）
- **2011.7.28 抚顺特钢（600399）重仓**：单日买入 50.5 万股 8.82-8.90 元 = 4,440,250 元（当时资产近一半）
- **2011.7.29 龙力生物（002604）重仓**：当日买入 13.95 万股 26.3-27.7 元 = 3,693,178 元（创业板新股炒作）
- **2011.8.2 世纪华通（002602）再重仓**：22.8 万股 26.2-26.6 元 = 6,000,250 元（继续创业板新股）

## 金句

> 收集强势股→直关注→找到合适的时机介入→如果不成功割肉走人。

> 关于技术，我只看分时+成交量+均线，其他基本不看。

> 最高境界是只看分时+成交量。

> 2010.10.11 联环药业："太狗屎了，太狗屎运了！"

> 2010.10.13："最近做的真垃圾，浪费大好行情！"

> 2011.8.1："002604 今天又卖烂了，开盘砸了！日！"

> 2011.8.3："做的真 tmd 的烂！控制力太 tmd 差！"

> 2011.8.4："3 天的垃圾操作！灵感都做没了！"

> 2011.8.5："早盘该砸的没砸，不该砸的砸了，草他大爷的！"

> 2011.8.5："好不容易赚点钱，又都吐出去了，tnnd，大 sb！"

## 适用场景

- ✅ 验证"分时+成交量+均线"在实盘中的可执行性
- ✅ 强势股接力的逐笔复盘
- ✅ 创业板开通后（2010.6）第一批新股炒作记录
- ✅ 中等规模资金（百万级）单股满仓的操作纪律
- ❌ 不适合纯长线/价投选手
- ❌ 不适合无法高频切换的人（独股一箭 1 天多笔交易）

## 关联阅读

- P1P2《实战笔记_独股一箭_手记》——理念提炼
- P0《实战笔记_乔帮主交割单》——同为单股集中持仓型
- P0《实战笔记_打板手法系统》——操作层
- P0《实战笔记_5分钟筛选牛股》——选股层
- P0《实战笔记_次新股筛选》——本份大量涉及次新股
- C 盘 26 位游资心法中的"乔帮主"等

## 数据统计

- **股票覆盖**：50+ 只
- **交易笔数**：2010.10-2011.9 期间数百笔
- **最大单笔兑现**：濮耐股份 2,694,825 元
- **最大单笔买入**：世纪华通 6,000,250 元（22.8 万股）
- **主题覆盖**：地产/资源/券商/机械/医药/新股/科技/传媒/消费 9 大主题
- **交割单完整度**：100% 公开（含手续费/印花税/其他杂费）

---

*整理日期：2026-06-25*
*来源：独股一箭交割单.pdf*
`,oneLine:`**百万杯完整交割单**——2010.10 至 2011.9 期间 50+ 只股票的逐笔成交记录，复盘"强势股接力"在实盘中的落地。`,tags:[`交割单复盘`,`强势股接力`,`实战`]},{id:`P1P2_独股一箭_手记`,title:`独股一箭_手记`,category:`高手手记`,source:`P1P2`,filename:`实战笔记_独股一箭_手记.md`,content:`# 实战笔记 · 独股一箭（百万杯交易体系）

> 题材分类：强势股接力 / 龙头战法 / 超短
> 游资/作者：独股一箭（淘股吧 ID，第七届职业炒手杯百万实盘炒股大赛选手）
> 风格特征：2010-2011 期间从 166 万起，单股满仓为主，分散为辅
> 关联资料：P0《实战笔记_乔帮主交割单》、P0《实战笔记_打板手法系统》
> 来源：D 盘《独股一箭手记》PDF（2018.06.15 增补）

---

## 一句话定位

> **只看分时 + 成交量 + 均线**——技术极简主义，通过强势股接力实现复利增长。

## 核心观点（5-8 条）

1. **收集强势股 → 关注 → 找到合适的时机介入 → 不成功割肉走人**——这是独股一箭的循环体系。
2. **"关于技术，我只看分时+成交量+均线，其他基本不看"**——技术极简派。
3. **最高境界是只看分时+成交量**——比"分时+成交量+均线"更简化。
4. **过程中交学费不可避免，承受能力要强**——心理建设是入门前提。
5. **"别人多说也没用，看个人悟性"**——强调自学和实战。
6. **大多数人会以失败告终**——对概率有清醒认知。
7. **大部分时候半仓**——风险管理与资金量匹配。
8. **真实对手只是自己**——比赛心态："在这种竞技环境与状态中突破自我"。

## 仓位管理 / 操作节奏

> 独股一箭是单股满仓型选手，与 dfusmku 多股分散形成鲜明对比。

| 时点 | 资产 | 仓位 | 重仓股 | 阶段 |
|------|------|------|--------|------|
| 2010.9.29 | 报名比赛 | - | - | 起步 |
| 2010.10.8 | 1,668,715 | 满仓 | 600048 保利地产 | 报名资金 |
| 2010.10.11 | 1,784,117 | 满仓 | 600513 联环药业 | 收益 5.89% |
| 2010.10.12 | - | 满仓 | 西藏天路/天兴仪表/万丰奥威/海亮股份 | 多股满仓切换 |
| 2010.10.15 | 2,148,116 | 满仓 | 中船股份/鞍钢股份 | 28.7% 收益 |
| 2011.7.25 | - | 满仓 | 002225 濮耐股份（卖 1,656,960 元） | 重仓兑现 |
| 2011.7.26 | - | 切换 | 600668 尖峰集团/000598 兴蓉投资/002600 江粉磁材 | 多股 |
| 2011.7.27 | - | 切换 | 600802 福建水泥/000798 中水渔业/000975 科学城/002240 威华股份 | 多股 |
| 2011.7.28 | - | 切换 | 600399 抚顺特钢/300175 朗源股份 | 多股 |
| 2011.7.29 | - | 重仓 | 002604 龙力生物（连买多笔，成本 26.3-27.1） | 新股 |

## 选股方法 / 经典交割单（2010-2011 百万杯期间）

| 股票 | 代码 | 操作 | 关键价位 | 备注 |
|------|------|------|----------|------|
| 保利地产 | 600048 | 卖 | 12.07-12.20 | 起手重仓 |
| 佛山照明 | 000541 | 买/卖 | 17.05-17.68 | 短线波段 |
| 联环药业 | 600513 | 买/卖 | 20.45-21.49 | **狗屎运**一战成名 |
| 西藏天路 | 600326 | 买/卖 | 13.46-14.44 | 题材 |
| 天兴仪表 | 000710 | 买/卖 | 13.03-13.68 | 短线 |
| 万丰奥威 | 002085 | 买/卖 | 13.14-12.80 | 卖飞 |
| 万向德农 | 600371 | 买/卖 | 15.46-15.04 | 短线 |
| 大龙地产 | 600159 | 重仓 | 5.59-5.79 | 重仓多笔 |
| 兴业证券 | 601377 | 买/卖 | 14.55-16.67 | 券商 |
| 中船股份 | 600072 | 买/卖 | 16.35-17.72 | 题材 |
| 鞍钢股份 | 000898 | 买/卖 | 9.66-10.18 | 资源 |
| 中联重科 | 000157 | 买/卖 | 13.19-13.17 | 卖飞后回买 |
| 飞乐音响 | 600651 | 买/卖 | 11.78-13.28 | 短线 |
| 三一重工 | 600031 | 买/卖 | 35.60-39.75 | 题材 |
| 紫金矿业 | 601899 | 买/卖 | 9.47-10.79 | 资源 |
| 京东方A | 000725 | 买/卖 | 3.33-3.75 | 题材 |
| 长春燃气 | 600333 | 买/卖 | 13.08-13.71 | 题材 |
| 四环生物 | 000518 | 买/卖 | 8.52-8.19 | 短线 |
| 卧龙地产 | 600173 | 买/卖 | 7.11-7.10 | 题材 |
| 首开股份 | 600376 | 买/卖 | 18.50-18.80 | 地产 |
| 中南传媒 | 601098 | 买/卖 | 13.79-14.27 | 传媒 |
| 豫光金铅 | 600531 | 买 | 32.00 | 资源 |
| 辰州矿业 | 002155 | 买 | 40.31 | 资源 |
| 精诚铜业 | 002171 | 买/卖 | 19.89-20.75 | 短线 |
| 金固股份 | 002488 | 买/卖 | 26.61-27.11 | 新股 |
| **濮耐股份** | 002225 | 卖 11.28 万股 14.68 | 市值 1656960 | **2011.7.25 一笔变现 165 万** |
| 尖峰集团 | 600668 | 买/卖 | 14.15-14.79 | 水泥 |
| 江粉磁材 | 002600 | 买/卖 | 21.17-23.38 | 短线 |
| 兴蓉投资 | 000598 | 买/卖 | 21.11-21.45 | 题材 |
| 福建水泥 | 600802 | 买/卖 | 13.90-14.41 | 题材 |
| 威华股份 | 002240 | 买/卖 | 7.20-8.17 | 重仓 |
| 抚顺特钢 | 600399 | 重仓 | 8.82-9.69 | 重仓兑现 |
| 朗源股份 | 300175 | 买/卖 | 26.38-26.30 | 创业板 |
| 龙力生物 | 002604 | 重仓 | 26.3-28.5 | **新股重仓** |
| 世纪华通 | 002602 | 买/卖 | 24.51-26.62 | 新股 |
| 以岭药业 | 002603 | 买/卖 | 44.80-46.45 | **新股重仓** |
| 迪安诊断 | 300244 | 买/卖 | 41.40-46.30 | 创业板 |
| 汉王科技 | 002362 | 买 | 21.81-21.86 | 题材 |
| 汇源通信 | 000586 | 重仓 | 10.25-10.51 | 重仓 |
| 国民技术 | 300077 | 买/卖 | 28.51-27.96 | 创业板 |
| 金瑞矿业 | 600714 | 重仓 | 20.96-21.20 | 资源 |
| 瑞康医药 | 002589 | 买/卖 | 27.05-27.21 | 题材 |
| 同仁堂 | 600085 | 卖 | 17.34-17.35 | 兑现 |
| 第一医药 | 600833 | 买/卖 | 10.00-10.40 | 医药 |
| 中水渔业 | 000798 | 买 | 12.86-13.00 | 题材 |
| 科学城 | 000975 | 买/卖 | 11.07-11.26 | 题材 |

## 风控逻辑

- **止损很果断**："002604 今天又卖烂了，开盘砸了！日！"——对操作失误立即认错
- **集中持仓 vs 分散切换**：单股重仓时给足弹性，多股切换时控制风险
- **资金管理 = 大部分时候半仓**（但交割单显示实际上经常满仓）——理论与实操存在差距
- **2011.7-8 期间多次自省**："做的真 tmd 的烂"、"控制力太差"、"灵感做没了"——心态自省频繁
- **新股（002602/002603/002604/300077/300175/300244）** 是 2011 年的重要阵地——创业板开通后第一批新股的"打新—炒作"循环

## 经典案例

- **2010.10.11 联环药业 600513**：成本 20.45-20.701，市值 1,782,096（81,300 股）→ 5.89% 收益 → "今天特别说两句，主要是因为太狗屎了"
- **2010.10.13 大龙地产 600159 重仓**：200,000 股 5.609 元 = 1,121,793 元（单笔）→ 后多次卖出兑现
- **2011.7.25 濮耐股份 002225**：卖 11.28 万股 14.68 元 = 1,656,960 元（单笔兑现 165 万）
- **2011.7.29 龙力生物 002604 重仓**：连续多笔买入 26.3-27.1 元 → 后续 8.1 卖出 28.1-28.5 元（赚 1-2 元/股）
- **2011.8.3 以岭药业 002603 巨亏**：45.30 买入 → 45.81 卖出（小亏）→ 多次反复操作后亏损出局
- **2011.8.4 同日操作汉王科技 002362（10,000×3 共 65.46 万）+ 汇源通信 000586（60,000+ 股）**——满仓切换

## 金句

> 收集强势股→直关注→找到合适的时机介入→如果不成功割肉走人。就是如此反复，不断地学习，研究，实践，领悟。

> 关于技术，我只看分时+成交量+均线，其他基本不看，最高境界是只着分时+成交量。

> 别人多说也没用，这个过程中学费肯定是要交的，承受能力要强。能不能领悟出来看个人，大多数人会以失败告终。

> 来参加比赛，目的并不是争个你高我低，目的是在这种竞技环境与状态中突破自我！因为真正的对手只是自己。

> 2010.10.11 联环药业一战："今天特别说两句，主要是因为太狗屎了，太狗屎运了！"

> 002602,002603,002604,,,莫名其妙的就围着这3只新股转悠，简直神经病！——自嘲反思

> 控制力太差！——反复自省

## 适用场景

- ✅ 强势股接力 / 龙头战法
- ✅ 满仓单股 + 多股切换结合
- ✅ 2010-2011 期间新股炒作（0026xx/300xxx 系列）
- ✅ 中等规模资金（百万级）
- ❌ 弱势无主线行情（独股一箭坦言"基本没法做"）
- ❌ 心理素质不强的人（"大多数人以失败告终"）
- ❌ 不做期货（"风险可以控制在盘中或一个晚上"）

## 关联阅读

- P0《实战笔记_乔帮主交割单》——同为"集中持仓 + 龙头战法"
- P0《实战笔记_打板手法系统》——操作层
- P0《实战笔记_不足道也手记》——同为超短心态
- P1P2《实战笔记_Dfusmku_手记》——同期多股主题型 vs 独股一箭单股满仓型
- P1P2《实战笔记_短线之王_龙规实战篇》——同为"半年翻 N 倍"型选手
- C 盘 26 位游资心法中如"乔帮主/A股带头大哥"等

## 与其他游资的对比

| 维度 | 独股一箭 | Asking | 乔帮主 | dfusmku |
|------|----------|--------|--------|---------|
| 资金曲线 | 166万→214万（起步阶段） | 10万→几千万 | 稳步增长 | 21万→194万 |
| 风格 | 强势股 + 题材 | 龙头 + 守株待兔 | 龙头 | 主题多股 |
| 仓位 | 单股满仓 | 半仓试错 → 全仓 | 单股集中 | 多股分散 |
| 技术 | 分时+成交量+均线 | 形态 + 势 | 龙头战法 | 主题 |
| 持仓时间 | 1-3 天 | 1-2 天 | 1-3 天 | 数日-数周 |
| 融资 | 不使用 | 不使用 | 偶用 | 经常使用 |
| 心理 | 频繁自省（控制力差） | 临阵果敢 | 稳定 | 平稳 |

---

*整理日期：2026-06-25*
*来源：独股一箭手记.pdf*
`,oneLine:`**只看分时 + 成交量 + 均线**——技术极简主义，通过强势股接力实现复利增长。`,tags:[`强势股接力`,`龙头战法`,`超短`]},{id:`P1P2_瑞鹤仙精华帖`,title:`瑞鹤仙精华帖`,category:`顶级游资心法`,source:`P1P2`,filename:`实战笔记_瑞鹤仙精华帖.md`,content:`# 实战笔记 · 瑞鹤仙·精华帖配图目录版

> 题材分类：半路板 / 抄底 / 跌停板低吸 / 接力 / 追板 / 主升浪
> 游资/作者：瑞鹤仙
> 身份/体量：2014 年末至 2015 年牛市 1 元→1.79 元（净值）的雪球实盘博主
> 席位：山西证券、长安汽车等多个席位；与溧阳路在山西证券"一起救大盘"
> 关联资料：C 盘 26 位游资深度研读中瑞鹤仙专题；与赵老哥/溧阳路形成"游资联盟"
> 来源：D 盘《瑞鹤仙精华帖配图目录版》PDF（P1P2 新增：雪球实盘交割单+心法+问答）

---

## 一句话定位

> **做 T、抓转折、敢接力。** "复盘要仔细"——13:17 分出现 5000+10000 多手拉升，盘后看就是板上介入时点。"**期指是大腿，现货是胳膊，胳膊拧不过大腿**"。

## 核心观点

1. **期指是大腿**：现货价格是胳膊，胳膊拧不过大腿；期指走势对当日现货有指向意义。
2. **"只要资金够，强扭的瓜也甜"**：资金充足就能造热点。
3. **顺势 vs 造势**：4.14 山西证券救大盘是顺势（板块已启动），不是造势。
4. **暴跌是重新收集筹码**：4.22 南车案例——天量套牢的人在 2 天前割肉了，所以 2 天前割肉的量才会和套牢天量相差无几。
5. **5 分钟级别 ≠ 5 分钟**：分时图小勾只是 5/15 分钟级别底部，不能左右整下午的走势。
6. **复盘要仔细**：南车 13:01 大单 2 万多手，13:17 大单 5000+10000 多手拉升——这些是龙虎榜背后的"盘中故事"。
7. **同一板块开始炒作滞涨股/补涨股 → 该板块要开始退潮谢幕**。

## 战法体系：8 类操作手法（P1P2 增补汇总）

| 战法 | 案例 | 关键判断 |
|------|------|----------|
| **半路板**（买在拉升转折点） | 4.16 中国重工、3.30 保利地产/中国平安、3.13 昆仑万维 | 13:17 出现 5000+10000 多手大单 |
| **抄底** | 4.22 中国南车（赚了 460 多万） | "仓位太低不够塞牙缝" |
| **抄跌停板** | 4.21 中国中铁 | 跌停板买入，博反弹 |
| **追板** | 4.22 海通证券、4.14 山西证券 | "5000 万只是一个小仓位" |
| **接力** | 4.17 保利地产（周末降准概念） | 板块已启动后的接力 |
| **首阴** | 3.3 中铁二局 | 龙头股第一次阴线低吸 |
| **勇接带血筹码** | 2.25 掌趣科技 | 暴跌中买入 |
| **主升浪** | 2.4 汉得信息 | 趋势加速阶段 |
| **被砸反思** | 2.12 大智慧 | 心慈手软，没卖到好价格 |
| **大资金造势** | 成飞集成、长安汽车 | 资金充沛时的题材 |

## 关键战役：2015 年 4 月集中战役

### 1. **4.14 山西证券 追板·单骑救大盘**

- 13:53 大盘高位跳水，人心惶惶
- 山西证券"犹如一枚火箭垂直发射，单骑救主"
- 发动者：溧阳路；参与者：瑞鹤仙
- "和溧阳路一起拯救了大盘少赚点，也值了！"
- 第二天瑞鹤仙绝对没砸溧阳路的盘

> **为何选山西证券**？（瑞鹤仙自己分析）
> 1. 流通盘小：516 亿市值，实际流通盘 150 亿
> 2. 筹码锁定：前十大持股占比超 70% 且都是国企
> 3. 拉起来花了 4 亿，前 5 加上瑞仙 3 亿
> 4. 技术形态：刚刚突破前期头部
> 5. 板块联动：拉一只带动整个证券板块

### 2. **4.16 中国重工 半路板（重仓 3463.5 万）**

- 4.16 净买；4.17 卖出 3804.4 万
- 浦发银行 435.02 万买 / 446.78 万卖
- 中国联通 677 万买 / 694.32 万卖
- **单日差额 370 万**
- 4.17 重仓股还有 8 个

### 3. **4.17 保利地产 接力（周末降准）**

- 4.17 买入，板块已启动后介入
- 4.18 卖出
- 周末降准概念

### 4. **4.21 中国中铁 抄跌停板**

- 跌停板买入，博反弹
- 4.22 卖出

### 5. **4.22 中国南车 抄底 + 海通证券 追板（双线作战）**

- **南车**：4.22 买入，仓位太低"不够塞牙缝"；收盘前加仓
  - 第二天冲高没卖，忙别的股
  - 股指期货大幅杀跌时没低吸（只顾着杀海通）
  - **4.22 收盘盈利 460 多万**
- **海通证券**：4.22 追板，因为自己心慈手软没卖到好价格
  - 股指期货大幅杀跌时杀出
  - "受到雪球发帖子影响，老想着不砸盘"→ **教训**
  - "为了网络上的虚名损失了真金白银真是不值得"
  - "超短就是这样，严控风险，哪怕只赚个买菜钱，只要不亏，就能滚雪球"
  - **5000 万只是一个小仓位**

### 6. **3.30 保利地产 + 中国平安 买在拉升转折点**

- 两个标的同步操作
- 都在拉升转折点买入

## 关键战役：2015 年 2-3 月

### 7. **2.25 掌趣科技 勇接带血筹码**

- 暴跌中买入
- 体现"接恐慌盘"的勇气

### 8. **2.12 大智慧 被砸**

- 复盘反思：心慈手软，没卖到好价格
- 教训：超短严禁"网络虚名"干扰操作

### 9. **2.4 汉得信息 主升浪**

- 趋势加速阶段参与
- 主升浪战法

### 10. **3.3 中铁二局 首阴**

- 龙头股第一次阴线低吸

### 11. **3.13 昆仑万维 半路板**

- 买在拉升转折点

## 仓位与买卖

| 情况 | 操作 |
|------|------|
| 板块联动初起 | 集中资金追龙头 |
| 大盘跳水 | 跟随大盘权重股"救大盘"（如山西证券） |
| 重仓股 | 一次战役 8 只重仓股，金额从百万到千万 |
| 卖股 | 不被"网络虚名"束缚，该砸就砸 |
| "做 T" | 同一标的反复进出（4.22 南车就是仓位太低后收盘前加仓） |

## 风控逻辑

> 复盘要仔细——同一笔大单出现在 13:17 而非 13:18，看起来差异不大，但意义完全不同。

- **大资金不能造势时的应对**：4.14 山西证券"既然是顺势就能跟"
- **不抢龙头的方法**：做首阴、做接力、做半路板——避开最高板
- **超短的严控风险**："哪怕只赚个买菜钱，只要不亏，就能滚雪球"
- **不被外界影响**：不发帖子会被"网络虚名"影响判断
- **暴跌是收集筹码**：南车 4.22 案例
- **强势股判断**：分时支撑力度 + 整体形态

## 操盘软件配置（P1P2 增补细节）

> 通达信 L2 + 同花顺 L2 + 东方财富 L2（3 个同时用）

- **通达信 L2**：大主力（盘中监控用）
- **同花顺 L2**：盘后复盘（超级盘口功能）
- **东方财富 L2**：辅助（含国际期货）
- 每天交易前过一遍国际国内市场
- 技巧：系统→通信设置→选择服务器；卡的时候换服务器
- 9:30 开盘前几十秒测试哪个快

## 选股方法

- **板块联动**：观察整个板块的联动性
- **资金面**：龙虎榜追踪大资金方向
- **预判**："我曾预测南车 0319 横有多长竖有多长"
- **逆市启动**：4.14 山西证券在大盘最危险时启动
- **量价配合**：大单出现时间（13:17 vs 13:18）

## 心态与行为

- **不贪婪**：5000 万只是一个小仓位
- **不后悔**：错过机会也接受
- **不被网络影响**：发帖子反而干扰操作
- **善于总结**：2.12 大智慧被砸，4.22 海通心慈手软都及时反思
- **小亏就出局**："严控风险"

## 关于期指与现货的关系

> 现货是胳膊，期指是大腿，胳膊拧不过大腿。

- 3.30 期指尾盘大幅飙升溢价 50 多点
- 3.31 9:14 集合竞价大幅高开溢价 80 点
- 开盘价由平仓产生（开盘量能不足 + 增仓 34 手）
- A50 在 IH1505 上线后失去参考意义

## 经典案例

- **4.14 山西证券**：与溧阳路一起救大盘
- **4.22 中国南车**：抄底 460 多万（仓位太低）
- **4.22 海通证券**：追板严控风险
- **2.25 掌趣科技**：勇接带血筹码
- **3.3 中铁二局**：首阴
- **4.16 中国重工**：半路板 3463.5 万
- **2012 年熊市实盘比赛**：远甩第二名

## 金句

> 复盘要仔细，这是最基本的炒股态度，南车下午 13:01 分就出现大单 2 万多手……然后在 13:17 分出现第一笔大单 5000 多手，然后马上又出现 1 万多手拉升，都是在 13:17，不是 13:18。

> 期指是大腿，现货是胳膊，胳膊拧不过大腿。

> 当同一个板块开始炒作滞涨股，补涨股，那么那个板块就要开始退潮谢幕了。

> 既然出来打压又辟谣，资金会收敛，又不愿意踩踏，所以象征性的出部分仓位尤其是以基建为代表短期涨幅巨大的标的，大基建要休息一段时间了。

> 既然大盘仍然调整到了 4040 以下，那么救市有意义吗？有！最大的意义，是平滑波动，稳固信心。

> 周一大盘大幅低开估计在 1% 左右是可以预见的，但是是超短买入机会而不是割肉时刻。

> 多数人认为自己炒股没有做好是因为心态问题。实际上，技术水平是决定性因素。

> 严控风险，哪怕只赚个买菜钱，只要不亏，就能滚雪球。

> 当同一个板块开始炒作滞涨股，补涨股，那么那个板块就要开始退潮谢幕了。

## 适用场景

- ✅ 大盘跳水时跟随权重股"救大盘"（与溧阳路等大资金共振）
- ✅ 半路板（拉升转折点买入）
- ✅ 抄底（暴跌后收集筹码）
- ✅ 抄跌停板（博反弹）
- ✅ 追板（强势股首板）
- ✅ 接力（板块已启动后的介入）
- ✅ 首阴（龙头股第一次阴线低吸）
- ✅ 主升浪（趋势加速阶段）
- ❌ 心慈手软（4.22 海通教训）
- ❌ 被网络虚名影响（4.22 海通教训）
- ❌ 没有技术面/消息面支撑的"网络跟风"

## 关联阅读

- 龙头接力与 P0《孤独牛背婚礼演讲》"快速第一板"形成对照
- 抄底/半路板与 P0《乔帮主交割单》"5 日均线低吸"形成对照
- 操盘软件配置详见 P0《游资席位速查》
- 溧阳路 → P0《赵老哥》系列提到溧阳路是顶级游资
- 期指大腿论 → P0《丁一熊两次股灾》中"期指 + A 股"对照

## 与其他游资的呼应

- **溧阳路**：4.14 山西证券一起救大盘；瑞鹤仙明确说"和溧阳路买到一起去了"
- **赵老哥**：同期活跃游资，操作风格互补
- **乔帮主**：5 日均线低吸 vs 瑞鹤仙半路板 → 同一龙头股的不同介入点
- **Asking**：选股方法类似（强势股 + 板块联动）
- **乔帮主 123**："开保时捷被大众丰田超车"——同一时期的淘股吧生态
- **桃县/明王**：某些著名游资挂单数量一定，让同行知道
- **校长、佛山**：做首板资金（鲍斯股份案例中孤独牛背提到）

---

*笔记来源：D 盘《瑞鹤仙精华帖配图目录版》PDF*
*整理日期：2026-06-25*
`,oneLine:`**做 T、抓转折、敢接力。** "复盘要仔细"——13:17 分出现 5000+10000 多手拉升，盘后看就是板上介入时点。"**期指是大腿，现货是胳膊，胳膊拧不过大腿**"。`,tags:[`半路板`,`抄底`,`跌停板低吸`,`接力`,`追板`,`主升浪`]},{id:`P1P2_盛夏阿凯_短线交易体系`,title:`盛夏阿凯_短线交易体系`,category:`高手手记`,source:`P1P2`,filename:`实战笔记_盛夏阿凯_短线交易体系.md`,content:`# 实战笔记 · 盛夏阿凯短线核心交易体系

> 题材分类：短线交易体系 / 捉妖模式 / 期指先行
> 作者：盛夏阿凯（摩尔金融，2015-08-30 发布，¥298.00，10120 次浏览，186 人购买，1 万 6 千多字）
> 性质：本文是盛夏阿凯的"秘而不宣"内容集合，含 4 个完整实战案例
> 核心案例：乐视网、特力A、洛阳玻璃、巢东股份、深圳华强、中安消、保千里
> 来源：D 盘《盛夏阿凯-我的短线核心交易体系》PDF（摩尔金融 2015-08-30）

---

## 一句话定位

> **短线 = 选股 + 操作 + 心态 + 做T 的综合系统。** 在单边牛市中大干快上，在连续下跌中胆小如鼠，只做有把握的机会。短线不是比谁赚得多，而是比谁**回撤小**——复利是核心。

## 核心观点

1. **短线定义**：普通短线持股 3 天至 2 周（波段），超级短线持股 1-2 天（滚动或日内 T）
2. **穿越牛熊的复利**：短线是市值回撤最小的一种方法
3. **选股五维**：龙头 + 资金青睐 + 基本面 + 题材 + 技术面
4. **市场情绪分三态**：单边上升 / 震荡 / 连续下跌，操作方式截然不同
5. **榜样的力量**：妖股出现后，相似题材的个股容易被市场接力
6. **跟随大资金**：做短线必须快准狠，不参与调整
7. **期指先行**：IF（沪深 300）/ IC（中证 500）提前 2-3 分钟
8. **5min/15min K 线 + 顶背离**：短线离场的核心技术
9. **做T 两种类型**：技术要求做T + 资金管理做T
10. **妖股出现的 4 个条件**：重大题材 + 历史股性 + 题材可持续 + 榜样作用

## 选股五维法

| 维度 | 核心要求 | 操作要点 |
|------|----------|----------|
| 1. 龙头 | 同板块选龙一 | 龙一没机会选龙二，龙三龙四一般不碰 |
| 2. 资金青睐 | 大资金入场明显 | 走势凶猛的板块 = 重点关注 |
| 3. 基本面 | 大题材、大方向、高成长 | **市场认可才是基本面选股的终极目标** |
| 4. 题材 | 国家级战略 + 想象力 | 重大题材（互联网+、一带一路、新能源汽车） |
| 5. 技术面 | 5/15min K 线变化 | 买点卖点都要看技术分析 |

> 五大维度综合考虑："一只好的股票，往往能给你持股的信心，而不至于在市场出现稍微波动时，慌不择时地出掉"

## 市场情绪三态与操作方式

### 状态 1：单边上升（重个股、轻大盘）

- **特征**：资金敢于大胆做多，题材股被放大来炒
- **操作**：大干快上，见到牛股启动立即上车，不要犹豫
- **代表**：互联网+、一带一路、新能源汽车

### 状态 2：震荡行情（观望情绪浓）

- **特征**：多空分歧大，市场热点少
- **操作**：选择最新出现的市场热点，**以低吸为主，不宜追高**
- **过去的热点不碰**

### 状态 3：连续下跌/暴跌（重大盘、轻个股）

- **特征**：一有风吹草动就连续抛盘，股票如烫手山芋
- **操作 1**：选择市场热点，抱团取暖，择机低吸
- **操作 2**：5/15min K 线一有顶背离立即离场
- **操作 3**：干脆空仓观望，休身养性

> **总结**：单边上升行情：重个股、轻大盘；单边下跌行情：重大盘、轻个股。

## 榜样的力量

> **大牛股、妖股多有榜样作用**，当某一板块出现妖股时，很容易带动同一板块的其它个股也向妖股的方向发展。

| 案例 | 题材 | 触发方式 |
|------|------|----------|
| 巢东股份 → 深圳华强 | 网贷概念 + 复牌 | 巢东先连板，深圳华强几乎翻版 |
| 春兴精工 | 互联网金融 + 复牌 | 但遭遇股灾，走势不同 |
| 中安消 → 保千里 | 安防概念 | 中安消先 4 连板，保千里紧跟 |
| 特力A → 洛阳玻璃 | 国企改革 | 同一波接力 |

### 巢东股份案例（盛夏阿凯参与）

- 巢东股份 2 月份复牌
- 盛夏阿凯 3 月 9 日超短线买入
- 3 月 10 日几乎卖在了最高点
- 卖出后公布在雪球，**声明这只股的拉升行情已经结束了**
- 5 分钟 K 线图中对称波浪形态已经走完
- 123-abc-789 九浪中的 8 浪（首阴）已出现

## 跟随大资金

> **做短线讲究的是出手就要擒敌**，没有过多的时间在这只股票里守候。

- **大资金关照 = 安全性高**：主力资金在市场不好时会出来护盘
- **没主力护盘的股票**：市场不好时随市下跌
- **航空板块案例**：2015 股灾前半段护盘明显，不但没跌还有小涨
- **有时候你也会卖飞**：没关系，安全是第一位的
- **避免大回撤是最重要的**：每笔小钱积少成多，一旦大回撤容易弄坏心态

## 观察期指先行指标

> 股市未动，期指先行。

| 期货 | 跟踪指数 | 作用 |
|------|----------|------|
| IF | 沪深 300 股指期货 | **大盘股**的先行指标 |
| IC | 中证 500 股指期货 | **中小盘股**（中小板、创业板）的先行指标 |

- **提前 2-3 分钟**：股指期货比股市指数提前 2-3 分钟
- **突然拉升/突破跳水时**：提前几十秒
- **升水**：股指期货涨幅大幅领先 → 后市仍将持续上涨
- **贴水**：股指期货跌幅大幅领先 → 后市仍将持续下跌
- **工具配置**：至少需要两台电脑 / 两个显示器，一台看大盘和期指，一台选股和操作

## 技术分析寻找买卖点

> 5 分钟、15 分钟 K 线发挥着重要的作用

- **顶背离** = 离场信号
  - 上证指数 7 月 30 日下午 14 时顶背离
  - 指数还在走高，但 MACD 已经在不断走低，发生二次死叉
  - 形态顶背离：第二波拉升斜率低于第一波
- **底背离** = 抄底信号
- **"死叉是不会轻易出现的"**：单边上升趋势中，一旦出现意味着趋势破坏
- **缠论**：盛夏阿凯表示不太了解，不作评论

## 注意龙虎榜及席位

### 徐翔泽熙投资（最强大游资）

> A 股市场上力量最强大的游资当然还是徐翔的泽熙投资

**核心席位**：
- 国泰君安交易单元（010000、227002、390426）
- 国泰君安上海江苏路
- 国泰君安上海福山路
- 中信证券总部
- 国泰君安上海打浦路
- 国泰君安上海天山路
- 华泰证券上海国宾路
- 西藏证券上海东方路
- 民族证券宁波中山西路
- 国金证券上海中山南路
- 瑞银证券上海花园石桥路
- 申银万国上海海宁路
- 中信证券上海浦东大道
- 安信证券上海世纪大道
- 东方证券上海新川路
- 华鑫证券上海浦雪路

### 中信证券上海溧阳路孙哥

- 擅于做 T 运作波段拉升的妖股
- 市场号召力很强
- 一度成为市场跟风的对象
- 案例：梅雁吉祥（证金概念大妖股）、巢东股份、深圳华强

### 银河证券绍兴路（赵老哥）

- 打板族
- 当天在涨停板附近大单吃货封板
- 第二天高开之后大单卖出
- 资金量大，一路出货股价会连续一挫（砸盘）
- 2015 年 4 月中国一重上**连续运作八个涨停板**（经典之作）
- 最近跟溧阳路学习日内滚动操作，每盘必砸的事越来越少了

### 银河证券绍兴 vs 中信溧阳路的资金管理差异

| 维度 | 中信溧阳路 | 银河绍兴路 |
|------|-----------|-----------|
| 模式 | T + 波段 | 打板 + 一日游 |
| 砸盘风险 | 较小 | 较大 |
| 口碑 | 更好 | 砸盘王（改善中） |
| 启示 | 学做 T 是关键 | 不要养成打板习惯 |

## 做自己擅长的模式

- **小赵（赵老哥）**：以打板著称
- **独股一箭、瑞鹤仙、玉米**：都不是打板，但有自己独到的方法
- **盛夏阿凯本人**：技术短线 + 题材捉妖的混合模式

> **9 月份开始，盛夏阿凯从特力A、洛阳玻璃、暴风科技等个股上，渐渐发现了"题材捉妖"模式的威力，比纯粹的超短线效果更好。**

## 资金管理和交易心态

> 投资是一场终生的马拉松，欲速则不达。

- **自信但不自负**
- **没有资金压力**
- **不急于求成**
- **亏了也不会急于收复失地**的放松心态
- **知行合一**：能看的准，才能做的准
- **特别是在市场暴跌行情中，心态是重要的，越是急着翻本，越容易丧失纪律**

## 做T 技巧

### 技术要求做T

> 当你持有一只股票，第二天继续上升，但是盘中发现大盘或者个股出现了顶背离现象

- 黄色线 = 分时图当日平均价格
- 跌破黄色线 = 要走弱
- 向上突破黄色线 = 要走强
- **先卖再买 / 先买再卖** = 根据情况灵活
- 关键技术：低背离 / 站稳黄色线 / 黄金坑

### 资金管理做T

> 股票 A 的仓位比例已经达到了自己的设定水准，剩下的资金是留给买入其它股票的

- 第二天又发现 A 有连续拉升迹象
- 继续买入 A，先享受这波拉升
- 拉到高位时，把昨天持有的那部分 A 出掉
- 仓位重新降下来

### 散户 vs 游资做T差异

- **散户**：被动做T，先买后卖 / 先卖后买
- **游资**：主动做T，有预谋有计划
- **做T效果**：降低成本 + 保障资金安全 + 维护盘面 + 抬高别人持仓成本
- **典型案例**：绍兴路跟溧阳路学会做T 后，口碑改善，砸盘王帽子摘掉

## 妖股出现 4 条件

1. **新重大题材出现**：一带一路、互联网+、新能源汽车等
2. **历史股性妖**：特力A 股性强于洛阳玻璃，所以特力A 先走妖
3. **题材可持续**：充电桩（上海普天）、迪斯尼（锦江投资）都炒完几波
4. **榜样的作用**：洛阳玻璃接力特力A；世纪星源接力充电桩群妖

## 经典案例 1：乐视网（300104）三个交易日获利 50%+

### 7 月 9 日：早盘集合竞价买入
- **背景**：连续暴跌后创业板指开始逐渐强于上证指数
- 7.8 公告：乐视网及东方财富等创业板风向标携利好复牌
- 7.9 早盘：乐视以跌停价大幅低开
- 集合竞价期间：不断涌出大量买单，竞价慢慢走高
- IC 已经翻红，远强于中小创指数
- 操作：集合竞价最后几秒钟，**高价委托务必能够买入**

### 7 月 10 日：全天持股未动
- "今天就是大反转日。暴跌之后的强烈反弹将会上演"
- "神创板，仍然是反弹最猛的板块"
- "什么是市场情绪分析？这两天就是经典案例"
- "昨天上演千股涨停，这种架势多年少见"
- "即使做超短线的，今天也应该拿着不放"

### 7 月 13 日：上午成功做T
- 第一次卖出：连续 2 波拉升，第二波弱于第一波 → 出局
- 第二次买入：跳水后企稳，等待买盘 → 再次买入

### 7 月 14 日：早盘走高时离场
- 卖出时间同样有直播
- 之后，乐视网开始了连续的下跌

### 盈利
- **3 个交易日斩获超过 50% 收益**
- 雪球全程实时直播

## 经典案例 2：特力A 5 个交易日获利 62.5%

### 选股背景
- 9.13 晚间：中共中央、国务院印发《关于深化国有企业改革的指导意见》
- 当晚给出两个国企改革参考概念股：际华集团、洛阳玻璃
- 9.14 早盘：际华集团、洛阳玻璃高开高走，但大盘暴跌夭折

### 9.14 特力A 异常强势
- 不惧暴跌封住涨停
- 判断：原来这波国企改革行情，发动的是特力A
- 当晚观察龙虎榜：买一是光大宁波解放南路，买了 3500 多万

### 9.15 早盘开盘
- 大盘继续大幅低开
- 特力A 继续高开，且高开后立即拉升
- **立即割掉际华集团换入特力A**
- 当天该股很快封板
- 9.15 晚：买一仍是光大宁波解放南路，买了 5000 多万

### 9.16-9.18 走势
- 9.16：早盘开盘后迅速封板
- 9.17：继续封一字板
- 9.18：早盘高开之后大幅跳水
- 盛夏阿凯没有离场：认定特力A 是当前行情的市场大龙头
- 15 分钟 K 线内部波浪结构看，需要出现陡直型调整浪

### 9.21 晚上
- 光大解放南路出了一部分货
- 考虑安全先离场换股
- 9.22 早上集合竞价出货
- **5 个交易日获利 62.5%**

## 经典案例 3：洛阳玻璃接力特力A 盈利 35%

### 选股逻辑
- 榜样的作用
- 特力A 暴涨（国企改革 + 前期妖股）
- 洛阳玻璃有可能接力

### 9.24-9.29 操作
- 9.24 早盘：盘中直线拉升，一连向上打穿几条均线
- 当天封上涨停（两波直线拉升）
- 9.25：不惧市场调整，继续涨停
- 9.29：继续高开高走
- 10 点零几分拉升有机会封板，但**没有封**，上面的抛单很重
- 10:30 离场
- 盈利 35%

### 离场原因
- "今天拉的不够干脆，感觉里面的资金担心再拉会被停牌"
- 当晚龙虎榜：几个大佬都走了

### 9.30 一条长阴
- 因为大佬们都走了，没人再往上做
- 纷纷离场

## 经典案例 4：保千里接力中安消

### 中安消（600654，2015.5-6）
- 5.21、5.22 两个小十字星阴线短暂蓄势
- 5.25 拉出第一个涨停
- 一连 4 个涨停
- 中间经过一个小阴线
- 6.4 结束

### 保千里（600074，2015.6）
- 6.3 拉出第一个涨停
- 高速拉升行情中间经过一个小阴线
- 6.11 结束

### 关键洞察
- **首阴模式**：四只股票启动之后，中间都经过了一个小阴线
- **第一个小阴线通常是行情的中继**
- **出现第二个阴线时，才是拉升行情的结束**
- **首阴模式只有在市场情绪积极的时候才比较有效**

## 文峰股份（2015 年超级大牛股）

- 2015 年 2 月底至 4 月初短短一个多月
- **高速拉升了 5 倍多的涨幅**
- 盛夏阿凯早期挖掘（在老婆的华泰证券客户群公布）
- **卖飞了**："作为早期挖掘到这只大牛股的我，很遗憾还是在一次做T 中把它卖飞，错失后面很大的涨幅"
- 泽熙投资的杰作

### 哈投股份案例（2007）
- 2007 年 5.22 除息
- 除息当天开盘之后很快封了涨停板
- 5.23 放出巨量开始出货，行情结束
- "高位出利好，或者利好兑现，必须立即离场"

## 金句

> 短线的优缺点：在单边牛市中，短线不一定能做的过中长线，而且比中长线更累，天天都在交易，还要承担一定的印花税和手续费。但是在穿越牛熊的过程中，你才能发现它的魅力，它是市值回撤最小的一种方法。

> 当然，这里也不是强调短线就一定是最好的方法，没有好不好的方法，只有适合不适合，适合自己的才是最好的，这点自己要掂量清楚。

> 在单边牛市中，市场情绪乐观，资金敢于大胆做多，特别是主力资金敢于连续爆炒，这期间会出现很多大牛股、妖股。

> 一般的资金只是发现和跟随，宁波解放南路是发掘和引导，技术含量要高得多。

> 做短线讲究的是出手就要擒敌，没有过多的时间在这只股票里守候。

> 股市未动，期指先行。如果你经常留意股指期货的话，你会发现其实股市是跟着期指在走的。

> 投资是一场终生的马拉松，欲速则不达。

> 单边牛市大干快上，哪里热点就往哪里去；连续下跌胆小如鼠，只做有把握的机会。

> 9 月份开始，我从特力A、洛阳玻璃、暴风科技等个股上，渐渐发现了这种模式的威力，比纯粹的超短线效果更好。

> 死捂可耻，卖飞一样没什么好光荣的，虽然有时卖飞也很难避免。如果能在妖股上拿到一波最高速的拉升行情，天天数板，这才是最完美的操盘体验。

## 适用场景

- ✅ 短线 / 超短线 / 波段
- ✅ 单边上升：重个股、轻大盘
- ✅ 震荡：低吸最新热点，不追高
- ✅ 暴跌：空仓或抱团取暖
- ✅ 妖股接力（榜样的力量）
- ✅ 期指观察 + 5/15min K 线顶背离
- ❌ 弱势/下跌通道的不参与调整
- ❌ 在市场不好时打板（受不住诱惑）
- ❌ 频繁做T 没有规则

## 关联阅读

- **看集合竞价 / 集合竞价奥义 / 5 分钟筛选牛股**：早盘选股
- **打板手法系统 / JOKER 皇打板逻辑**：打板战法
- **抓妖股概率**：妖股统计
- **均线_牛股深度学习**：均线作为中长线持股工具
- **低吸追涨打板 / 强势股买入三大战法之"低吸"战法**：低吸技巧

## 与其他游资的呼应

- **Asking**：盛夏阿凯的"选股五维"与 Asking 的"等待+发现+跟随"互补
- **赵老哥**：本笔记详述了赵老哥（银河绍兴路）的砸盘到做T转型
- **溧阳路孙哥**：盛夏阿凯的"做T 师承"对象
- **养家**：市场情绪揣摩与养家"得散户心者"互补
- **郑瑞鑫擒拿妖股**：妖股研究 + 紫光举牌 + 黄金坑，与盛夏阿凯"榜样的力量"形成方法论呼应
- **骑在牛股上手记**：中长线持股与盛夏阿凯"短中长结合"互补

---

*笔记来源：D 盘《盛夏阿凯-我的短线核心交易体系》PDF（摩尔金融 2015-08-30）*
*整理日期：2026-06-25*
`,oneLine:`**短线 = 选股 + 操作 + 心态 + 做T 的综合系统。** 在单边牛市中大干快上，在连续下跌中胆小如鼠，只做有把握的机会。短线不是比谁赚得多，而是比谁**回撤小**——复利是核心。`,tags:[`短线交易体系`,`捉妖模式`,`期指先行`]},{id:`P1P2_短线之王_龙规实战篇`,title:`短线之王_龙规实战篇`,category:`高手手记`,source:`P1P2`,filename:`实战笔记_短线之王_龙规实战篇.md`,content:`# 实战笔记 · 短线之王·龙规实战篇（野山 2000 年版）

> 题材分类：龙规四字诀 / 见钱眼开 / 利润最大化 / 弱势空仓 / 强势调整
> 游资/作者：野山（2000 年著，南海出版公司）
> 风格特征：2000.2.14-8.31 半年 10 万→72.01 万（+620.1%），同期上证 +26.98%、深证 +17.64%
> 关联资料：P0《实战笔记_养家心法》、P1P2《实战笔记_养家_全集》、P1P2《实战笔记_穷查理宝典_智慧》
> 来源：D 盘《短线之王一个散户半年翻七倍的实战股谱_龙规实战篇_高清_》PDF（2018.06.15 增补）
> ⚠️ **内容有截断，详见原始文件**（23.8MB 大文件，仅取前 50% 内容）

---

## 一句话定位

> **半年 10 万→72.01 万（+620.1%）——"龙规"四字：见钱眼开 + 利润最大化 + 弱势空仓 + 强势调整，专做强势、弱势坚决休息、始终保持经常性空仓。**

## 核心观点（"龙规"四字诀）

### 一、见钱眼开

> 买涨停板股票，买的是上涨的趋势，在上涨的趋势中，获利比较容易，但真正赚钱并不容易。

- **关键问题**：赚了 3 个点还想赚一个涨停板，赚了一个涨停板还想连着几个涨停板，结果到手的利润跑了，反而被套住。
- **应对原则**：有了利润，如果继续上升的可能性和回调的可能性各半，就应该考虑获利出局了。**有利润就赚，这叫"见钱眼开"。**
- **不参与调整**：作为短线操作，龙规的原则是尽量不要参加调整。

### 二、利润最大化

> 利润最大化是"见钱眼开"的升华。

- **应用一：激烈行情大胆持有强势股**
  - 原文举例：网络股疯狂时，**上海梅林 600073、东方明珠 600832、深天地 0023、电器股份 600627**——涨停板初期持有，"不赚到你哭（受不了了），决不撒手"。
- **应用二：平衡市设置阶段性"止赚措施"**
  - 涨停板次日：后一波上升高度未突破前高 → 及时获利了结
  - 低开高走后上升无力 → 及时获利了结
  - 高开低走后反弹无力 → 及时获利了结
  - 涨停板后不能持续封死 → 轻微止损
- **应用三：弱势扎紧钱袋**
  - 一旦大盘进入弱势，坚决空仓，不论个别股票怎么搔首弄姿，决不心动。
  - 强势调整中的弱市常常会出现个股的暗流涌动，龙规的原则是——**一旦形成局部热点，就可以谨慎介入**。

### 三、弱势空仓

> 不论个别股票怎么搔首弄姿，决不心动。

- **2000 年 9 月份的调整**：冲天龙组及时空仓，做得非常好——"弱势坚决空仓"的实战案例。
- **钱袋密码锁**：一旦大盘真正形成长期弱市，钱袋一定要加上锁，加上密码，**不到百花盛开时，决不开仓**。

### 四、强势调整可参与

> 强势调整中的弱市常常会出现个股的暗流涌动。

- **前提条件**：必须在大牛市中出现的强势调整。
- **操作原则**：一旦形成局部热点，可以谨慎介入。
- **风险控制**：调整过后必须再次回到强势，否则立即空仓。

## 仓位管理 / 操作节奏

| 选手组 | 资金曲线 | 风格定位 | 仓位特征 |
|--------|----------|----------|----------|
| **冲天龙组** | 10 万→72.01 万（+620.1%） | 激进型 | 强势股满仓接力，弱势空仓 |
| **瘸子马组** | 接近翻番 | 稳健型 | 中等仓位，灵活调整 |

**6 个月关键节点**：
- 2000.2.14 起步 10 万
- 至 21.3 万（第 1 阶段）
- 至 30.2 万（第 2 阶段）
- 2000.8.31 收盘 72.01 万

## 选股方法

### "冲天龙"专咬庄家大腿肉

> 专做强势，弱势坚决休息，始终保持经常性空仓。

- **强势股定义**：涨停板初期 + 成交量放大 + 均线多头排列。
- **"每只股票只赚一点点（比如 3-5 个点）"**：积少成多，无数匹小黑马组装成一匹超级大黑马。
- **不追黑马顶部**：原文批评"市面上流行的所有股市操作指导书"，"他们都声称是从这些大黑马启动初期买进，然后又在顶部全部卖出"——但"你怎么就知道哪儿是底部，哪儿是顶部？"

### 网络股疯狂案例（2000 年）

| 股票 | 代码 | 介入逻辑 |
|------|------|----------|
| 上海梅林 | 600073 | 网络股龙头 |
| 东方明珠 | 600832 | 网络股龙头 |
| 深天地 | 0023 | 网络股龙头 |
| 电器股份 | 600627 | 网络股龙头 |

## 风控逻辑

### "龙规赢就赢在它买进的股票 9 成以上有继续上升 3-5 个点的把握"

> 每一只股票只赚一点点（比如 3-5 个点），但积少成多，无数匹小黑马组装成一匹超级大黑马。

### 过早卖出的真实案例（教材级反例）

| 股票 | 代码 | 卖出价 | 后市最高价 | 错失空间 |
|------|------|--------|------------|----------|
| 马钢股份 | 600808 | 3.14 元 | 6 元+ | 翻倍空间 |
| 友好集团 | 600778 | 12.73 元 | 19 元+ | +50% 空间 |
| 江苏索普 | 600746 | 22.35 元 | 35 元 | +57% 空间 |

**关键日期**：
- 马钢股份：3.14 元卖，4.24 已 6 元+
- 友好集团：12.73 元卖，7.3 已 19 元+
- 江苏索普：22.35 元卖，11.2 已 35 元

**教训**：原文以此证明"短线操作的局限性"——见好就收虽正确，但卖飞牛股也是常态。

### "可以大赚、可以中赚、可以小赚、可以不赚、可以小赔，决不大赔"

> 冲天龙"专咬庄家大腿肉"的高招——专做强势，弱势坚决休息，始终保持经常性空仓的操盘理念。

## 经典案例

### 案例 1：冲天龙组 10 万→72.01 万（2000.2.14-8.31）

- **总收益**：+620.1%
- **同期上证指数**：+26.98%（1591.44 → 2020.86）
- **同期深证成指**：+17.64%（4102.65 → 4826.30）
- **超额收益**：是上证指数涨幅的 **23 倍**
- **时间节点**：
  - 2000.2.14 起步 10 万
  - 涨到 21.3 万（第 1 阶段约 +113%）
  - 涨到 30.2 万（第 2 阶段约 +202%）
  - 2000.8.31 收盘 72.01 万

### 案例 2：瘸子马组（稳健型）"接近翻番"

- 与冲天龙组形成"激进 vs 稳健"对照
- 适合中等风险偏好投资者

### 案例 3：网络股 4 大龙头

- **600073 上海梅林、600832 东方明珠、0023 深天地、600627 电器股份**——2000 年网络股疯狂期典型品种
- 操作原则："涨停板初期持有，不赚到你哭（受不了了），决不撒手"

### 案例 4：马钢股份 600808 过早卖出

- 3.14 元卖，4.24 已 6 元+
- **错失翻倍空间**——短线操作的局限性

### 案例 5：友好集团 600778 过早卖出

- 12.73 元卖，7.3 已 19 元+
- **错失 +50% 空间**

### 案例 6：江苏索普 600746 过早卖出

- 22.35 元卖，11.2 已 35 元
- **错失 +57% 空间**

### 案例 7：散户擂台栏目（和讯网）

- 2000.2.14 野山应邀在和讯网开设《散户擂台》专栏
- 全国第一家散户与散户较量的栏目
- 冲天龙组 + 瘸子马组 双组实验

## 金句

> 半年翻 7 倍，"短线之王"的诀窍是什么？用 4 个字来回答："恪守龙规"。

> 规避风险是赚钱的关键。

> 赚钱很容易，风险难控制。龙规的原则：赚取尽可能大的利润，铁腕封杀下跌空间，把风险降到最低，争取接近零。

> 要"见钱眼开"。有利润就赚，这叫"见钱眼开"。

> 利润最大化是相对的，就是我们赚取利润的时候，尽可能在相对保险的情况下赚得最多，而不是要把最低价和最高价全部归你，那样想是注定要失败的。

> 在激烈行情，特别是激烈的个股行情中，大胆持有强势股。

> 在平衡市中根据当时情况设置阶段性的"止赚措施"。

> 在弱势中的扎紧钱袋政策——钱袋一定要加上锁，加上密码，不到百花盛开时，决不开仓。

> 专做强势，弱势坚决休息，始终保持经常性空仓。

> 可以大赚，可以中赚，可以小赚，可以不赚，可以小赔，决不大赔。

> 无数匹小黑马组装成一匹超级大黑马。

> 龙规赢就赢在它买进的股票 9 成以上有继续上升 3-5 个点的把握。

> 龙规是保险系数最大的赚钱之规。

> 龙规是赚钱之规。

## 专家推介

### 和讯财经网信息总监 吴洁

> 完整纪录这一操作过程的《短线之王》书的最大意义，不在于教你如何半年翻七倍，而在于教你如何在控制风险的前提下实现利润最大化。

### 飞虎证券网主编 葛成

> 龙规是保险系数最大的赚钱之规。如果政策允许野山先生发行个人股票的话，那我肯定会是野山先生的投资者。

### 海融证券网证券主编 张晶

> 像我们这样的非专业股民，不是没有赚钱机会（我也曾拿过 0881 大连国际），但更多的是赚了钱不会获利了结，赔了钱却心痛割肉。

> 看了"龙规"最大的收获就是，它教会了我如何保住自己的胜利果实。

### Tom.com 财经主编 林明军

> 野山的龙规理论无疑是把我的愿望变成了现实。

## 适用场景

- **2000 年互联网牛市**的实盘操作档案（最早的"龙规"理论体系）。
- **短线交易风控哲学**："见钱眼开 + 利润最大化"二元平衡。
- **弱势空仓 vs 强势调整可参与**的择时体系——比单纯"追涨杀跌"更精细。
- **小资金快速翻倍**的早期范本：10 万级资金通过短线复利 6 个月翻 7 倍。
- **"网络股疯狂"主题投资**的早期教科书（2000 年互联网泡沫）。
- **追高被套的"止损纪律"**——"可以小赔，决不大赔"。

## 关联阅读

### P0 已有笔记
- **《实战笔记_养家心法》**：养家"得散户心者得天下"——与龙规"专做强势"形成"题材 vs 趋势"对照。
- **《实战笔记_Asking理念总结》**：Asking"等待、发现、跟随"——与龙规"见钱眼开"形成"心态 vs 纪律"对照。
- **《实战笔记_集合竞价_奥义188元版》**：集合竞价理论——可与龙规"强势股涨停板初期持有"形成日内操作对照。
- **《实战笔记_打板手法系统》**：打板手法的系统化整理——龙规 2000 年的"涨停板初期持有"是打板手法的早期版本。

### P1P2 同批次笔记
- **《实战笔记_养家_全集》**：养家全集包含 6 大模块，与龙规的"风控 + 强势"形成完整体系对照。
- **《实战笔记_穷查理宝典_智慧》**：芒格"多元思维模型"——可与龙规"专做强势"的单一策略形成"多元 vs 专一"对照。
- **《实战笔记_荣辱二十年_股市人生》**：阚治东 1986 静安证券业务部——与龙规 2000 年散户擂台形成"机构 vs 散户"对照。
- **《实战笔记_均线_牛股深度学习》**：均线体系——可与龙规"强势股均线多头排列"形成技术指标对照。

### C 盘 26 位游资心法
- 参考 C 盘"短线风控"心法语录，与龙规的"弱势空仓"原则形成时间序列对照。

## 与其他游资呼应

| 维度 | 野山·龙规（2000） | 养家（2010+） | Asking（2003-2010） |
|------|-------------------|---------------|---------------------|
| 资金起点 | 10 万 | - | - |
| 资金曲线 | 10→72 万（半年） | 持续盈利 | 600645/000503 |
| 核心策略 | 见钱眼开+利润最大化+弱势空仓 | 题材+情绪 | 等待+发现+跟随 |
| 风控逻辑 | 决不大赔 | 控制回撤 | 选股不择时 |
| 仓位 | 强势满仓+弱势空仓 | 题材轮动 | 半仓起步+涨停加仓 |
| 时代背景 | 2000 互联网牛市 | 题材股时代 | 2003-2010 |

**呼应点**：野山 2000 年提出的"龙规"是 P0/P1P2 中**最早的成体系短线交易理论**——
- **比养家心法早 10 年**（养家活跃于 2010+）
- **比 Asking 早 3-7 年**（Asking 活跃于 2003-2010）
- **比令胡冲早 15 年**（令胡冲 2015）
- **比著名刺客早 14 年**（著名刺客 2014）

其"弱势空仓 + 强势调整可参与"的择时体系，比后来的"题材驱动"理论更**强调风控**；其"见钱眼开 + 利润最大化"的二元平衡，比后来的"打板"更**强调渐进式兑现**。

2000 年互联网牛市 + 2024 年 AI 题材行情，本质上都是"主题投资"的极端表现——龙规"专做强势"的策略在 24 年后依然有效。

---

*整理日期：2026-06-25*
*来源：短线之王一个散户半年翻七倍的实战股谱_龙规实战篇_高清_.pdf（23.8MB 大文件，仅取前 50% 内容）*
`,oneLine:`**半年 10 万→72.01 万（+620.1%）——"龙规"四字：见钱眼开 + 利润最大化 + 弱势空仓 + 强势调整，专做强势、弱势坚决休息、始终保持经常性空仓。**`,tags:[`龙规四字诀`,`见钱眼开`,`利润最大化`,`弱势空仓`,`强势调整`]},{id:`P1P2_穷查理宝典_智慧`,title:`穷查理宝典_智慧`,category:`经典思维`,source:`P1P2`,filename:`实战笔记_穷查理宝典_智慧.md`,content:`# 实战笔记 · 穷查理宝典（芒格智慧·投资心法）

> 题材分类：价值投资 / 多元思维模型 / 普世智慧 / 心理误判
> 作者：彼得·考夫曼（编）；查理·芒格（传主）
> 中文版序：李录（Louis Li，比亚迪大股东）
> 性质：著名投资智慧书（非交易直接相关）；P0 已有《滚雪球下》笔记，本笔记聚焦**芒格的智慧与方法论**
> 来源：D 盘《穷查理宝典》PDF

---

## 一句话定位

> **芒格的核心方法 = 多元思维模型 + 逆向思考 + 心理误判 + 普世智慧。** 他不会对一家公司的财务信息进行肤浅的独立评估，而是对"内部经营状况及其所处的、更大的整体生态系统"作出全面的分析。

## 核心观点（芒格方法论 8 大支柱）

1. **逆向思考**："我只想知道将来我会死在什么地方，这样我就永远不去那儿了"
2. **多元思维模型**：掌握全部或大部分候选待投资公司的内外部环境相关因素
3. **100 种模型 + lollapalooza 效应**：当几种力量共同作用于同一方向，得到的通常不仅仅是几种力量之和
4. **心理误判 = 潜意识自动结论**：人类作出错误判断的某些心理因素是最重要的思维模型
5. **"坐等投资法"**：喜欢一家企业时，下非常大的赌注，而且通常会长时间持有
6. **能力圈 = 必界定边界**：一种不能界定其边界的能力不能称为真正的能力
7. **泰德·威廉姆斯的 77 格击球区**：只有当球落在"最佳"格子时才挥棒
8. **乌龟能跑赢兔子**：吸取最棒前辈的已经被实践所证明的洞见

## 多元思维模型：芒格方法论的基石

> "你必须知道重要学科的重要理论，并经常使用它们——要全部都用上，而不是只用几种。"

> "大多数人都只使用学过的一个学科的思维模型，比如说经济学，试图用一种方法来解决所有问题。"

> "你知道谚语是怎么说的：'在手里拿着铁锤的人看来，世界就像一颗钉子。'这是处理问题的一种笨办法。"

**芒格多元思维模型的来源**：
- 历史学
- 心理学
- 生理学
- 数学
- 工程学
- 生物学
- 物理学
- 化学
- 统计学
- 经济学

**最核心的 5 个模型**：
1. 工程学的冗余备份模型
2. 数学的复利模型
3. 物理学和化学的临界点、倾覆力矩、自我催化模型
4. 生物学的现代达尔文综合模型
5. **心理学的认知误判模型**

## Lollapalooza 效应（芒格自造词）

> 芒格为那些相互强化并极大地放大彼此效应的因素而发明的词组

- 当 2、3 或 4 种力量共同作用于同一个方向
- 得到的通常不仅仅是几种力量之和
- **像物理学里面的临界质量** → 达到一定程度的质量就能引发核爆炸
- 没有达到那种质量，就什么也得不到

> "你必须拥有各种模型，你必须弄清楚各种模型的相互关系以及它们的效应"

## 芒格投资评估过程

> "最重要的观念是把股票当成企业的所有权，并根据它的竞争优势来判断该企业的持有价值。"

- 未来贴现现金流 > 现在购买的股票价格 = 投资价值
- **占据优势的时候才采取行动**
- 必须了解赔率
- 投资三个选项：可以投资 / 不能投资 / 太难理解

### 查理投资三选项

| 选项 | 处理方式 |
|------|----------|
| **可以投资** | 容易理解、有发展空间、能在任何市场环境下生存的主流行业 |
| **不能投资** | 大张旗鼓宣传的"交易"和公开招股 |
| **太难理解** | 制药业和高科技行业 |

> 查理用"重要学科的重要理论"的方法，去寻找别人尚未发现的、有时候躺在一眼就能看见的平地上的大金块

## 心理误判：芒格最看重的思维模型

> "一辈子研究人类灾难性的错误，对于由于人类心理倾向引起的灾难性错误尤其情有独钟"

> **早在 1990 年代末期，芒格和巴菲特已经提出金融衍生产品可能造成灾难性的影响**

> 2008 年和 2009 年的金融海啸及全球经济大萧条**不幸验证了芒格的远见**

> "金融衍生产品是金融式的大规模杀伤武器"

## 25 种人类误判心理（芒格讲稿第十一讲）

> 人类的认知永远存在着限制，所以你必须使用所有的工具

| 类别 | 表现 | 影响 |
|------|------|------|
| 奖励和惩罚 | 超级反应倾向 | 刺激过度 |
| 喜爱/讨厌 | 倾向影响客观 | 联想心理 |
| 憎恨/厌恶 | 强烈排他 | 误判 |
| 避免怀疑 | 倾向 | 仓促决策 |
| 避免不一致 | 倾向 | 路径依赖 |
| 好奇心 | 倾向 | 探索 |
| 康德式公平 | 倾向 | 道德判断 |
| 艳羡/妒忌 | 倾向 | 痛苦之源 |
| 回报递减 | 倾向 | 边际效用 |
| 联想心理 | 倾向 | 条件反射 |
| 单纯联想 | 倾向 | 失真 |
| 条件反射 | 倾向 | 自动化反应 |
| 剥夺超级反应 | 倾向 | 损失厌恶 |
| 사회性对比 | 倾向 | 自卑/自大 |
| 压力影响 | 倾向 | 失态 |
| 错误衡量易得性 | 倾向 | 高估近期 |
| 不用就忘 | 倾向 | 技能衰退 |
| 毒品酒精 | 倾向 | 成瘾 |
| 衰老 | 倾向 | 能力下降 |
| 权威 | 倾向 | 服从 |
| 托勒斯 | 倾向 | 心理疾病 |
| 重视理由 | 倾向 | 拖延 |
| 自视过高 | 倾向 | 过度自信 |
| 过度乐观 | 倾向 | 风险低估 |
| 损失厌恶 | 倾向 | 拒绝止损 |

## 芒格的成功原则

> "我只想知道将来我会死在什么地方，这样我就永远不去那儿了"

### 我们成功的关键
> "如果乌龟能够吸取它那些最棒前辈的已经被实践所证明的洞见，有时候它也能跑赢那些追求独创性的兔子"

- **我们赚钱，靠的是记住浅显的，而不是掌握深奥的**
- **从来不去试图成为非常聪明的人，而是持续地试图别变成蠢货**
- 久而久之，我们这种人便能获得非常大的优势

### 道德原则
> "我们并不自称是道德高尚的人，但至少有很多即便合法的事情，也是我们不屑去做的"

- 在你应该做的事情和就算你做了也不会受到法律制裁的事情之间应该有一条巨大的鸿沟
- **记住路易斯·文森狄的规则：说真话，你将无须记住你的谎言**

## 伯克希尔·哈撒韦模式

> "我们就像刺猬，只知道一个大道理：如果你能够用 3%的利率吸取浮存金，然后将其投资给某家能够带来 13%的收益的企业，那么这就是一桩很好的生意。"

### 伯克希尔的成功
- 伯克希尔收购的企业能够给我们的税前回报率是 13%
- 资本成本利率只有 3%（浮存金）
- **三分之一收购是失败的**，但我们的收购很成功
- 收购我们从来不试图为收购而收购——**我们等着那些不用多想也知道会成功的机会**

### 收购策略
- 20 年来，我们每年购买的企业只有一家或者两家
- 不跟上门推销的人打交道
- 三分之二的收购是失败的
- 收购是**等着**而不是"找着"

### 伯克希尔的未来不容乐观
1. **我们的规模太大了**——只能投资竞争更为激烈的领域
2. 从当前大气候看，未来 15-20 年普通股票市场不会像过去那么景气

> "伯克希尔将来会比现在大得多，强得多。至于这支股票未来会不会是一个好的投资，那是另外一个问题。"

### 沃伦和查理的"护城河"
- 巴菲特："我们想要护城河每年变宽"
- 芒格："你还能讲得比这更好吗？"
- **伟大企业的首要标准 = 护城河 + 保持宽度 + 不被跨越**

## 李录（Louis Li）序言：投资生涯的三大转折

### 1990 年代初：哥伦比亚大学时期
- 第一次接触巴菲特/芒格的价值投资体系
- 巴菲特演讲的启迪：股票本质上是公司的部分所有权
- 一两年后买了第一支股票
- **至 1996 年从哥大毕业，已经从股市投资上获取了相当可观的回报**

### 1998 年创立公司
- 出师不利——当年就损失了 19% 的账面价值
- 1998 下半年顶住压力作出最重要的三四个投资决定
- 后续 2 年带来数倍回报

### 2004 年遇到芒格
- 2003 年感恩节聚会长时间推心置腹的交谈
- 芒格：我愿意给你投资
- 彻底改组公司结构（早期巴菲特/芒格的合伙人公司结构）
- **新基金从 2004 Q4 至 2009 年底，每年复合回报率超过 36%**
- **1998 年 1 月原基金创建开始计算，每年复合回报率超过 29%**
- **12 年间，回报增长超过 20 倍**

### 关键洞察
> "1990 年代末期我处理互联网经济泡沫时，你无法想像我承受了多大的压力"

> "互联网泡沫"案例：连续几年坚守基本投资原则，避开泡沫，是"了不起的楷模"

## 芒格"痛苦生活"四味药（哈佛毕业演讲 1986）

> 卡森说他无法告诉毕业的同学如何才能得到幸福，但能够告诉他们如何保证自己过上痛苦的生活

### 芒格补充的 4 味药（基于卡森的 3 味）

**1. 要反复无常，不要虔诚地做你正在做的事**
> "只要养成这个习惯，你们就能够绰绰有余地抵消你们所有优点共同产生的效应"

**2. 尽可能从你们自身的经验获得知识，尽量别从其他人成功或失败的经验中广泛地吸取教训**
> "人类常见的灾难全都毫无创意"

**3. 当你们在人生的战场上遭遇第一、第二或者第三次严重的失败时，就请意志消沉，从此一蹶不振吧**

**4. 请忽略小时候人们告诉我的那个乡下人故事**
> "要是知道我会死在哪里就好啦，那我将永远不去那个地方"
> 大多数人嘲笑这个乡下人的无知，忽略他那朴素的智慧

### "反过来想"原则
> "反过来想，总是反过来想。"——雅各比

- 许多难题只有在逆向思考的时候才能得到最好的解决
- 爱因斯坦：修正了牛顿的定律，让其符合麦克斯韦的定律 → 发现相对论
- **达尔文的方式**：总是致力于寻求证据来否定他已有的理论

## 芒格的 2007 USC 法学院毕业演讲：远离"圈套"

> **如果你能保持冷静，当你身边的人们都变得疯狂，纷纷指责你……**

> **大地以及大地上的万物都将属于你，而更重要的是，你将是真正的男人，我的孩子！**

（来自吉卜林的诗《如果》，是芒格向来欣赏的诗歌）

## 避免欠债

> "你一旦走进负债的怪圈，就很难走出来。千万别欠信用卡的钱。你无法在支付 18%的利息的情况下取得进展。"

## 经典案例

### 比亚迪投资（2003 年-2008 年）
- 2003 年芒格第一次同李录谈到比亚迪
- 芒格虽然从没有见过王传福本人
- 也从未参观过比亚迪的工厂
- 甚至对中国的市场和文化也相对陌生
- **但他当时对比亚迪提出的问题和评论，今天看来仍然是投资比亚迪最实质的问题**

### 麦道夫骗局
- 麦道夫的骗局持续几十年才被发现
- **"做空需要随时关注市场的起落，不断交易"**
- 这是芒格反对做空的核心原因之一

### 好市多（Costco）
- 芒格称自己为"古稀老人"
- 担任好市多董事
- "你肯定无法相信好市多的仓储业务是多么高效和复杂"
- 芒格：吉姆·塞内加尔是 20 世纪最出色的五名零售商之一
- **"我们在好市多公司拥有属于我们自己的活着的、会呼吸的山姆·沃尔顿"**

## 芒格的成功特质

> 巴菲特："查理能够比任何活着的人更快、更准确地分析任何种类的交易。他能够在 60 秒之内找出令人信服的弱点。"

> "本杰明·格拉汉姆曾经教我只买便宜的股票，查理让我改变了这种想法。"

> "我 90% 的净资产是在伯克希尔的股票里。"

## 核心金句

> 复利这一伟大的发动机像奴仆一样正在为他的财富辛勤劳作着。

> 我只想知道将来我会死在什么地方，这样我就永远不去那儿了。

> 在手里拿着铁锤的人看来，世界就像一颗钉子。

> 我们赚钱，靠的是记住浅显的，而不是掌握深奥的。我们从来不去试图成为非常聪明的人，而是持续地试图别变成蠢货。

> 坐等投资法：你付给交易员的费用更少，听到的废话也更少，如果这种方法生效，税务系统每年会给你 1%—3%的额外回报。

> 我认为激情比头脑的能力更加重要。

> 3% 利率吸取浮存金，投资给 13% 收益的企业 = 很好的生意。

> 说真话，你将无须记住你的谎言。

> 反过来想，总是反过来想。

> 千万别欠信用卡的钱。你无法在支付 18%的利息的情况下取得进展。

## 经典语录（幽默段）

> 我宁愿将毒蛇丢进我的衬衣里，也不愿聘用一名薪酬顾问。

> 我不知道，我从来没试过。（被问是否会弹钢琴时）

> 如果你把葡萄干和大便搅在一起，你得到的仍然是大便。

> 我觉得很有趣竟然有这样一个问题。你知道吗，可以预测，2000 年将会到来。（关于千年虫）

> 在企业界，如果你聘请了分析师，在并购时进行了尽职调查，却不具备常识，那么你遇到的将会是地狱。

## 芒格对投资哲学的本质定义

> "在投资中，我向来认为，当你看到某样你真正喜欢的东西，你必须依照纪律去行动。"

- 泰德·威廉姆斯的 77 格击球区
- 把击打区划分为 77 个棒球那么大的格子
- 只有当球落在他的"最佳"格子时，他才会挥棒
- 即使他有可能因此而三振出局
- **因为挥棒去打那些"最差"格子会大大降低他的成功率**

## 适用场景

- ✅ 价值投资 / 长线持有
- ✅ 多元思维模型的应用
- ✅ 心理误判的自我审视
- ✅ 能力圈内的稳健决策
- ✅ 危机中的逆向思考
- ✅ 跨学科的学习与研究
- ❌ 短线 / 高频交易
- ❌ 衍生品投机
- ❌ 跨出能力圈的冒险
- ❌ 频繁交易（违反坐等投资法）

## 关联阅读

- **滚雪球下**：本批《实战笔记_滚雪球下》—— 巴菲特传记，与芒格互为镜像
- **滚雪球上**：本批《实战笔记_滚雪球_上》—— 巴菲特更详细的投资历程
- **江平投资准则**：P0《江平投资准则》—— 华尔街视角的对照
- **丁一熊两次股灾 / 炒房炒股 / 熊市策略**：P0《丁一熊系列》—— 中国市场的应用案例
- **裘国根成长股接力**：P0《裘国根》—— 中国版的芒格实践

## 与其他游资/人物的呼应

| 维度 | 芒格 | 巴菲特 | 裘国根 | 江平 |
|------|------|--------|--------|------|
| 持仓周期 | 永久持有 | 永久持有 | 中长线接力 | 长线灵活 |
| 标的选择 | 能力圈内 + 护城河 | 价值低估 | 价值低估 + 高安全边际 | 价值 + 独创性发现 |
| 决策方式 | 多元思维模型 | 内部记分卡 | 价值 + 流动性 | 死守不战 + 平衡 |
| 风控核心 | 心理学 + 逆向 | 复利 + 内部记分卡 | 安全边际 | 灵活应对 |
| 思想基础 | 普世智慧 | 滚雪球 | 中国市场实践 | 华尔街经验 |
| 关键金句 | 反过来想 | 滚很湿的雪和很长的坡 | 安全边际 | 死守不战 |

---

*笔记来源：D 盘《穷查理宝典》PDF（彼得·考夫曼编，查理·芒格著）*
*整理日期：2026-06-25*
`,oneLine:`**芒格的核心方法 = 多元思维模型 + 逆向思考 + 心理误判 + 普世智慧。** 他不会对一家公司的财务信息进行肤浅的独立评估，而是对"内部经营状况及其所处的、更大的整体生态系统"作出全面的分析。`,tags:[`价值投资`,`多元思维模型`,`普世智慧`,`心理误判`]},{id:`P1P2_荣辱二十年_股市人生`,title:`荣辱二十年_股市人生`,category:`经典思维`,source:`P1P2`,filename:`实战笔记_荣辱二十年_股市人生.md`,content:`# 实战笔记 · 荣辱二十年：阚治东的股市人生

> 题材分类：中国证券业拓荒史 / 申银万国 / 南方证券 / 创投
> 作者：阚治东
> 副标题：股市起落恰如人生
> 出版：中信出版社，2010.1，360 千字，定价 38.00 元
> 性质：**内容有截断，详见原始文件**（大文件，仅取前半部分精华）；回忆录
> 关键时间：1986-2007
> 来源：D 盘《荣辱二十年：我的股市人生》PDF

---

## ⚠️ 内容截断说明

> **本笔记基于文件前约 50% 内容整理。** 原文件共 31.1MB，PDF 解析涉及 8 章（从东渡日本到南方破产），后半部分（含更多反思、退出创投）未完整覆盖。**详见原始文件**。

## 一句话定位

> **股市起落恰如人生。** 阚治东是中国证券业的拓荒者之一，从静安证券业务部到申银万国，再到南方证券，经历了 1980s-2000s 中国资本市场的全部大事件——成功、挫折、免职、救火、破产。本书是**"人的梦想与磨砺，投资的得与失"**的完整回忆录。

## 核心观点（中国证券业 20 年）

1. **阚治东是"老证券"**：40 多岁就被称为"老证券"——中国证券行业太年轻了
2. **静安证券业务部 = 中国证券业发祥地**：12 平方米，前身是理发店
3. **第一波黑市交易**：1990 年夏天上海大规模黑市交易
4. **申银万国合并**（1996）：中国证券业第一宗合并案，"中国证券业的航空母舰下水"
5. **深沪之争**（1996）：1997 阚治东被免职 + 罚款 5000 万 + 申银万国停止自营业务一年
6. **南方证券救火**（2002-2003）：阚治东被任命为总裁，2004.1.2 被行政接管
7. **"中国真正懂创业投资的人只有 5 个"**：阚治东到深圳后才懂
8. **深圳创新投资 = 中国最大的"官办"创投**
9. **"兄弟们下了一步先手啊！中国的国企没干头"**——阚治东的离场感言
10. **"证券业不是花架子，更不是形象工程"**——阚治东上任第一天就讲的问题

## 阚治东人生时间线

| 年份 | 事件 | 关键 |
|------|------|------|
| 40 年前 | 中学毕业后去北大荒 | 黑龙江小屯子"双河"，生活 9 年 |
| 1977 | 返城回上海 | 成长为生产大队干部 |
| 1984 | 兼任工商银行上海信托投资公司宝山分公司经理 | 第一次接触证券 |
| 1987 | 全国青年联合会第五届研修生派往日本 | 进入中国证券市场拓荒者行列 |
| 1987.10.19 | 亲历"黑色星期一" | 日经指数下跌 23%，市值蒸发 100 多万亿日元 |
| 1988 | 回国，担任工行上海信托投资公司副总经理 | 主管证券和投资业务 |
| 1988 | 《1988 年股票年报》出版 | 中国第一份股票年报 |
| 1988 | 静安指数 | 国内第一个股票指数 |
| 1990 | 静安指数正式对外发布 | 引起境内外媒体高度关注 |
| 1990.12 | 上海证券交易所成立 | 阚治东参与筹备 |
| 1992 | 中国证监会成立 | 拉开全国大发展大幕 |
| 1996 | 申银、万国合并 | 中国证券业第一宗合并案 |
| 1997 | 阚治东被免职 | 沪深之争受查处 |
| 1999.7 | 阚治东去深圳 | 离开申银万国到深圳 |
| 2002 | 阚治东任南方证券总裁 | "救火队长" |
| 2003 | 在南方证券工作 3 个月即被举报 | 多种"流言飞语" |
| 2004.1.2 | 南方证券被行政接管 | 阚治东挂冠而去 |
| 2004 后 | 受到比 1997 年更严厉的审查 | 几乎身陷囹圄 |

## 第一章：东渡日本（1987）

### 北大荒岁月
- 中学毕业后去北大荒
- 黑龙江小屯子"双河"生活 9 年
- **"这批人是从北大荒熬出来的"**——不服输的精神

### 1987 研修日本蓝泽证券
- 1987 年全国青年联合会第五届研修生
- 派往日本专门研修证券知识
- 母亲是癌症晚期，"医生的诊断非常明确，余下的日子没几个月"
- **"我最终没有放弃东渡日本的机会"**

### 蓝泽证券印象
- 蓝泽证券越谷支店：1988.2 营业日 21 天，**人均手续费收入 676 万日元**
- 最高 1762 万日元，最少 16 万日元
- 新职员月薪 10 万日元，老职员月收入 500 万日元
- **蓝泽证券公司 1986 年人均年终奖为 200 万日元（折合人民币 10 万余元）**

### 1987.10.19 "黑色星期一"
- 日经指数从 26648.81 点跌至约 20500 点（下跌 23%）
- 东京证券交易所股票市值蒸发了 **100 多万亿日元**
- **日本人均金融资产消失近百万日元**
- "黑色星期一"之后日本不少记者整天徘徊在东京日本桥一带，希望碰上跳楼、撞汽车之类的爆炸性新闻
- 但"连个死耗子也没见到"

### 1988.4.7 日经指数创历史新高
- 日经指数创出 **26769.22 点**的历史新高
- **日本一度取代美国成为全球最大的股票市场**

### 阚治东的研修报告
- 撰写《漫步日本证券市场》专栏，共 10 多篇
- 包括《日本的金融中心》《东京证券交易所》《日本证券公司》《日本证券公司职员》《日本股票投资者》《日本证券情报》《日本证券国际化进程》《日本证券公司分配制度简介》《浅谈日本商业服务接待》

## 第二章：筚路蓝缕（1988-1990）

### 静安证券业务部（1986.9-1990.12）

> "静安证券业务部已不复存在，我听之深感惋惜。静安证券业务部完全有望成为近代文物，因为它至少可以告诉后人，中国的证券业是从那里起步的。"

- 静安证券业务部最初的业务就是那几只股票的交易
- 位于上海市南京西路，**面积只有 12 平方米**，之前在这里营业的是个理发店
- 1986 年 9 月 26 日是静安证券业务部第一批股票的挂牌交易日
- 1988 年公司全年净利润 5000 多万元，**两个证券业务部一年总收入只有 40 多万元**
- 1990 年，阚治东让人做了块"中国证券业的发祥地——静安证券业务部"的铜牌

### 静安证券业务部"第一"清单
- 第一批国内证券业务部
- 1986 年起，纽约证券交易所董事长约翰·凡尔霖拜访静安证券业务部
- **"世界上最大的证券交易所主席与世界上最小的证券交易所经理的合影"**
- 第一个国内股票指数（静安指数）
- 第一本股票年报（《1988 年股票年报》）
- 第一批上市公司
- 培训了国内第一批证券从业人员
- 编制了第一个国内证券业务会计核算办法
- 推出了国内第一台电脑处理证券交易

### 1989 年股票年报 & 静安指数正式发布
- 1990 年初《1989 年股票年报》和静安指数正式对外发布
- 新华社上海分社以《上海股票投资者现在有了可靠的"参谋"》为题发了通讯
- 香港《明报》：《上海静安指数，股民的晴雨表》
- 香港《文汇报》："静安指数使玩股票的上海人结束了瞎子摸象的状态"

### 静安指数基期
- 静安指数基期：**1986 年 9 月 26 日**（静安证券业务部第一批股票挂牌交易日）
- 基期指数值：**100 点**
- 上证指数基期：**1990 年 12 月 19 日**
- 1991 年 7 月 15 日正式发布

### 美国警察的吐槽
- 那个警员拿着地址，找了半天才找到业务部
- 看了之后说：**"美国人真怪，怎么拣这么个破地方参观？"**

### 旧上海证券业老前辈
- 阚治东引进的第一批人才：旧上海证券交易所的 7 位老经纪人
- 吴仕禁、林东耕、施之敏、魏少庭、懋德、王熊、穆壮武
- 林乐耕老先生**"租了 12 间写字间，装了 80 部电话，光号子雇人就 120 个，每天进账 10 根大条子"**

## 第三章：更大舞台

### 1990.12.19 上海证券交易所成立
- 上交所成立前 4 年间，**静安证券业务部是国内股票、国债等证券业务量最大的证券交易场所**
- 阚治东等曾希望一并移交静安指数编制的相关资料，让静安指数历史性地延续下去
- 上交所出于自身发展的考虑，没有继续采用静安指数
- 上证指数 1991.7.15 正式发布

### 上交所筹备资金
- 尉文渊："我向人民银行借了 500 万来筹建上交所"
- 后上交所收了会员费才还清了这笔钱
- "中央财政和上海地方财政在当时都顾不到上交所，因为谁也没想到这是个划时代的东西"
- **"交易所就像个野孩子，一开始冒出来自己闯，弄到后来才越弄越大"**

### 中南海讲课
- 阚治东受邀到中南海给中顾委一批老前辈讲股票
- 受邀给越南财政部、司法部官员讲证券市场建设的事

### 10 万人抢购新股

> 那是不多见的壮观场面，只见一排雪亮的灯光直冲而来，一辆辆的士在体育场大门前戛然停下，每辆车里冲下四五个人，直问："哪里排队？"问到后直奔而去。随后又是一排灯光直扑过来，"突、突、突"，每辆摩托上都挤了两三个人。再后面是响着急促铃声的自行车队，最后是黑压压的喘粗气、冒大汗的长跑队伍。不一会儿，近万人已进入体育场，安安静静地坐下。

## 第四章：南征北战

### 1992 年中国股票市场全国化
- 1992 年经国务院批准，全国 9 家特大型企业改制为股份制
- 排名**第一的是青岛啤酒**
- 同年中国证监会成立
- 拉开了全国大发展的大幕

### 群雄争霸
- 那几年券商自嘲股票承销业务是："政府部门往外扔一根肉骨头，让我们几条狗去抢"
- "你们还有去抢的份，我们只能看着流口水，没有参与的份"

### 第一张 B 股的发行
- 从第一张 B 股的发行开始，就有境外证券机构到中国股市淘金
- 在整个过程中，有的人淘到了金，有的人则失望而归

### 申银、万国合并（1996）

> 1996 年中国证券市场最有影响的大事之一就是申银、万国证券公司合并设立，海内外媒体都作了大量报道。这是**中国证券行业中第一宗合并案**，合并后的申银万国证券公司成为国内资本金最大、营业网点最多、业务规模最大的证券公司。

> 不少媒体都用"中国证券业的航空母舰下水"为标题报道此事。

- 合并后的申银万国证券公司：
  - 国内资本金最大
  - 营业网点最多
  - 业务规模最大
- **不少媒体用"中国证券业的航空母舰下水"为标题报道**

## 第五章：风雨覆巢

### 深沪之争
- 1996 年沪深之争：上海（传统金融经济中心城市）vs 深圳（新兴金融经济中心城市）
- 两地证券公司、银行等机构也卷入其中
- 引起一场风波
- **一批金融机构负责人受到了处分**

### 申银参战
- 上海证券交易所领导对沪深两地证券市场作详细介绍
- 赞同"竞争一定要有手段"的观点
- 具体的手段之一就是通过上海几家主要券商通过**重点运作好一些对市场有引导作用的股票，把上海股市往前推进**

### 事后调查
- "申银万国证券公司违反了中国证监会颁发的《证券经营机构自营业务管理办法》"
- 决定给予**"申银万国证券股份有限公司停止自营业务一年，罚款 5000 万元的处分"**
- 给予**"申银万国证券公司法人代表、总裁阚治东免职、记大过处分"**

### 阚治东的离场感言
> 近期，大家都非常关心我的去向，组织上已表示要把我的工作安排好，我自己也进行着种种选择。我今年 45 岁，身体尚可，自信找一份养家糊口的工作并不难。

## 第六章：南下深圳（1999.7）

### 南飘
- 1999 年 7 月阚治东整个人都移到了深圳
- 进入又一个"拓荒"的行业——创业投资
- **"我这样的做法颇有争议，认为'阚治东只投差一步企业'，干的不是真正的风险投资"**

### 初涉创投
- **"中国真正懂创业投资的人只有 5 个"**——刚到深圳时听到的说法
- "这 5 个人是谁，我到现在都不知道，但自己当时确实是不懂创业投资"

### 深圳创新投资
- 深圳创新投资公司成为少数具有全国性影响及全国性投资能力的本土创业投资机构之一
- 评为国内最好的创业投资机构
- 推动了深圳创业投资的发展

### 硕果累累
- 深圳创业投资公司创造了中国本土创业投资的神奇故事
- **"深圳创业投资公司由此被认为是中国最大的，也是最成功的'官办'创业投资机构"**
- 创新投资原始股东们获得了丰厚的投资回报

## 第七章：不可为而为之（南方证券）

### 知其不可
- 接到去南方证券的通知后，阚治东曾给北京一位老领导去了个电话
- 老领导当即回答："**不去！**"
- 听阚治东已答应深圳市政府，老领导生气地说："答应了，还说什么！"

### 全力扭亏
- 南方证券总裁室统一了思想：不纠缠历史性问题
- 调动一切可调动的积极性
- 突出业务重心
- 把扭转亏损持续经营问题作为各项工作的重中之重

### 笔墨官司
- 不到三个月就有人到市政府和监管部门告状
- 说我挪用客户保证金
- 扩大南方证券的自营规模
- 说我支持自营部门恶炒个股
- 说我加剧了南方证券资金紧张的问题
- 说我搞集权，权力欲膨胀
- **"在南方证券我真正能集中精力、用心治理公司的时间只有三个月"**

### 孤立无援
> 有人问我，在南方证券当总裁这一年多中感触最深的是什么？我觉得，那就是**孤立无援**。

- 尽管南方证券大部分干部员工支持我
- 但我本应该得到的支持却少得可怜

### 将相不和
- 到南方证券不久，碰上与董事长之间的矛盾
- 既有国有企业体制问题
- 也有俩人的个性问题

## 第八章：南方破产

### 挂冠而去

> 兄弟，你下了一步先手啊！中国的国企没干头，干好干坏最后都得走人。咳！我当年在深发展可是干得最火的时候，让我走人了。兄弟啊，你还不是一个样！**走吧，现在就看我做人的时候了。放心吧，审计，审你还不是审我？我是法人！有事逃不了干系。你在找到新工作之前，一切待遇照旧！**

### 南方倒闭
- 2004 年 1 月 2 日，中国证监会、深圳市人民政府**行政接管南方证券公司**
- 距阚治东离职仅一周
- 贺云董事长兼总裁
- 行政接管后，阚治东受到比 1997 年更严厉的审查，**几乎身陷囹圄**

### 最后的努力
- 阚治东对《致股东函》提出修改意见
- 提议对每家公司提出的援助额定到 1 到 2 亿（太高会把股东吓坏）
- 直接打电话给证管办主任
- 最终《致股东函》作了一定修改，但离阚治东的提议差得很远

## 经典语录

> 人的记忆力是有限的，不是所有经历过的人和事都能永存我们的记忆之中。有如泰戈尔诗中所表述的，"鸟儿已飞过，天空没有翅膀的痕迹"。

> 证券业不是花架子，更不是形象工程。

> 北大荒的岁月带给这批人一种不服输的精神。

> 老证券也就是证券业的前辈，在国内外，不到七老八十，谁敢担这个名分？国内的业内人士这样称呼我们，是因为中国的证券行业太年轻了。

> 推广、宣传新行业是好事，因为新行业很容易推销出去……

> 历史车轮滚滚，浪花淘尽英雄，作为个人，在时代的潮流中当然有得有失。

> 鸟儿已飞过，天空没有翅膀的痕迹，但有些人和事，即使你不用心去记，它们也仿佛镶嵌在你的脑海里，留下永久的印痕。

> 兄弟们下了一步先手啊！中国的国企没干头，干好干坏最后都得走人。

> 在南方证券我真正能集中精力、用心治理公司的时间只有三个月。

> 孤立无援。

> 中国真正懂创业投资的人只有 5 个。

> 中国证券业从无到有、从小到大、从弱到强的 20 年。

## 重要数据汇总

| 数据 | 数值 |
|------|------|
| 静安证券业务部面积 | 12 平方米 |
| 1988 年公司净利润 | 5000 多万元 |
| 1988 年证券业务部收入 | 40 多万元 |
| 静安指数基期 | 1986.9.26（100 点） |
| 上证指数基期 | 1990.12.19 |
| 上交所成立日 | 1990.12 |
| 蓝泽人均年终奖（1986） | 200 万日元（≈10 万人民币） |
| 日经最大跌幅（1987.10.19） | 23% |
| 东京市值蒸发（1987.10.19） | 100 多万亿日元 |
| 日经新高（1988.4.7） | 26769.22 点 |
| 阚治东被免职时年龄 | 45 岁 |
| 申银万国合并时间 | 1996 |
| 申银万国罚款金额 | 5000 万元 |
| 申银万国自营停业期 | 1 年 |
| 南方证券行政接管日 | 2004.1.2 |

## 关键人物

| 人物 | 角色 | 关键事件 |
|------|------|----------|
| 阚治东 | 申银万国总裁、南方证券总裁 | 1997 免职、2003 救火、2004 挂冠 |
| 黄贵显 | 静安证券业务部经理 | 1986 第一批证券从业 |
| 胡瑞荃 | 静安证券业务部副经理 | 股票年报编制 |
| 尉文渊 | 上交所第一任总经理 | 借 500 万筹建上交所 |
| 龚浩成 | 人民银行上海分行行长 | 申银证券剪彩 |
| 盖斯·基奥 | 可口可乐"影子 CEO" | 邻居，错过巴菲特投资 |
| 贺云 | 南方证券董事长 | 兼任总裁后行政接管 |
| 林乐耕 | 旧上海经纪人 | 租 12 间写字间，雇 120 个号子 |

## 适用场景

- ✅ 中国证券业历史研究
- ✅ 早期资本市场监管反思
- ✅ 国企体制下证券公司的运作
- ✅ 创投行业在中国的发展
- ✅ 个人与时代的关系
- ✅ 1990 年代金融中心城市地位之争
- ❌ 具体交易技巧
- ❌ 短线 / 高频策略
- ❌ 图表技术分析

## 关联阅读

- **滚雪球上 / 滚雪球下**：本批《实战笔记_滚雪球_上》《实战笔记_滚雪球_下_谷巴高清》—— 美国版的投资智慧
- **穷查理宝典**：本批《实战笔记_穷查理宝典_智慧》—— 芒格智慧
- **丁一熊两次股灾**：P0《丁一熊两次股灾》—— 中国市场股灾应对
- **江平投资准则**：P0《江平投资准则》—— 华尔街视角

## 与其他人物的呼应

| 维度 | 阚治东 | 巴菲特 | 芒格 | 裘国根 |
|------|--------|--------|------|--------|
| 角色 | 中国证券拓荒者 | 价值投资 | 多元思维 | 私募价投 |
| 时代 | 1980s-2000s | 20 世纪下半叶-21 世纪 | 20 世纪下半叶-21 世纪 | 1990s 至今 |
| 关键事件 | 申银万国合并、南方证券 | 太阳谷演讲预言 IT 泡沫 | 2008 危机远见 | 私募长期价投 |
| 思想核心 | 国企改革时代 | 内部记分卡 | 心理学 + 逆向 | 安全边际 |
| 关键数据 | 1996 罚款 5000 万 | 太阳谷预期 6% 收益 | 比亚迪投资 | 安全边际 |

---

*笔记来源：D 盘《荣辱二十年：我的股市人生》PDF（阚治东著，2010.1 中信出版社）*
*内容有截断，详见原始文件*
*整理日期：2026-06-25*
`,oneLine:`**股市起落恰如人生。** 阚治东是中国证券业的拓荒者之一，从静安证券业务部到申银万国，再到南方证券，经历了 1980s-2000s 中国资本市场的全部大事件——成功、挫折、免职、救火、破产。本书是**"人的梦想与磨砺，投资的得与失"**的`,tags:[`中国证券业拓荒史`,`申银万国`,`南方证券`,`创投`]},{id:`P1P2_著名刺客_手记`,title:`著名刺客_手记`,category:`高手手记`,source:`P1P2`,filename:`实战笔记_著名刺客_手记.md`,content:`# 实战笔记 · 著名刺客（题材驱动 + 打板）

> 题材分类：题材打板 / 龙头接力 / 龙虎榜分析
> 游资/作者：著名刺客（淘股吧 ID）
> 风格特征：2013-2017 长期活跃，强调"题材 > 技术"和"得散户者得人心"
> 关联资料：P0《实战笔记_乔帮主交割单》、P0《实战笔记_打板手法系统》
> 来源：D 盘《著名刺客手记》

---

## 一句话定位

> **题材打板第一派**——"做超短，必须关注题材，题材大于技术，这是暴利的源泉。" 得散户者得人心。

## 核心观点（5-8 条）

1. **题材 > 技术**：题材到位，压力位/阻力位/获利盘都可以放后面。
2. **题材分两类**：
   - **行业趋势性大题材**：伴随行业发展，能为行业龙头公司带来实实在在业绩（鸿博股份 002229、金证股份 600446、光线传媒 300251、奋达科技 002681）
   - **国家政策驱动型题材**：级别高、空间大（如 2014.8 中央深化改革会议的新型媒体集团）
3. **题材的"打动人心"**：这个公司可能会成为一个大公司（阿里、苹果），这就是题材炒作的核心。
4. **得散户者得人心，人心所向，所向披靡**——大众情人 = 群众基础好 = 接力空间大。
5. **300242 移动互联营销是放心，不是博傻**：与"纯粹炒作"区分。
6. **互联网金融出大牛股**：600599 熊猫烟花、000609、300178、002095、600119 电商等。
7. **关注金改 / 影视 / 手游 / 教育 / 网络彩票 / 智能穿戴 / 网络安全 / 去 IOE** 等主题轮动。
8. **特停是龙头的勋章**："经常买到特停的票，证明你选股基本合格了"。

## 仓位管理

| 时点 | 操作 | 备注 |
|------|------|------|
| 2013.12.30 | 杀入 300266（环保+高送转） | 满仓吃面 |
| 2014.1.7 | 半仓 002149 尾盘竞价 | 弱势转低吸 |
| 2014.1.9 | 竞价卖出 002149（半仓），全仓 000620 | 高位切换 |
| 2014.1.10 | 0620 重仓 | 龙虎榜不错 → 放心 |
| 2014.1.13 | 600105 必涨停计划 | 重仓 |
| 2014.8.19 | 持有 601999（出版传媒）+ 600633 + 002181 | 新型媒体集团三标的 |
| 2014.9.1 | 重新接回 601999 | 跌多了就买 |
| 2014.10 | 300175 朗源股份 7 元 | 农产品电商大题材 |
| 2014.10.22 | 600555 出现分歧 | 行情在犹豫中展开 |
| 2016.10.21 | 300287 飞利信 + 000935 四川双马 26.48 | 股权变更 |
| 2016.10.25 | 000935 四川双马 26.484 成本 | 浮盈 309,585（9.99%） |
| 2016.10.28 | 601500 通用股份 19.49 | 次新股 |
| 2016.10.31 | 000935 四川双马 28.50 加仓至 21.27 万 | "这轮行情核心是双马" |
| 2016.11.1 | 000935 四川双马 浮盈 133 万 | 21.57% 收益 |
| 2016.11.2 | 000935 四川双马 全部卖出 | 累计盈利 204 万 |
| 2016.11.7 | 000923 河北宣工 27.38 扫板 | "扫板是我的标签" |
| 2016.11.8 | 600288 大恒科技 17.00 成本 | 469,800 股 |
| 2016.11.9 | 002486 嘉麟杰 + 000935 河北宣工（被关） | - |
| 2016.11.10 | 002813 路畅科技 73.195 成本 | 76,868 股 |
| 2016.11.11 | 300483 沃施股份 64.61 成本 | 47,600 股（亏 -13.85 万） |

## 选股方法（题材驱动）

| 要素 | 要点 |
|------|------|
| **题材级别** | 重大政策题材 > 行业趋势题材 > 一般主题 |
| **群众基础** | "价格低反而是优势，目前已创新高，后市空间打开" |
| **赚钱效应** | 题材到位，资金会蜂拥而上，资金不是问题 |
| **连板基因** | 历史股性 + 人气所在 |
| **龙虎榜验证** | 一线游资介入信号（如 600599 熊猫烟花有 1 线游资介入） |
| **首阴战法** | 闽都 2000 的首阴战法引用 |

## 风控逻辑

- **题材面服从基本面 / 题材面**："看好题材，不看分时，技术面服从题材面"
- **高位分歧是好事**："600555 分歧很大。好事。行情总在犹豫不决中展开，在高度认同时戛然而止。"
- **小非减持是隐患**："3290 隐患在与小非减持，游资不敢封板"
- **买一过大要警惕**："3165 买一过大，其他游资接盘的意愿弱。我也不会重仓参与"
- **特停后警惕**：但继续锁仓（如四川双马 21.27 万股持续锁仓 6 天获利 133 万）
- **弱势行情低吸**："最近大盘太差，两连板的票基本没有，放弃这种模式。改为低吸模式"
- **接力缩量案例**：600157、000005 缩量后继续板——"看市场主流和资金认同"

## 经典案例

### 2014.8 中央深化改革 → 新型媒体集团
| 标的 | 逻辑 | 备注 |
|------|------|------|
| 600633（浙报传媒） | 浙江新媒体 | 大资金最好！融资助力！ |
| 002181（粤传媒） | 广东新媒体 | "有三必有五，第二板放巨量，量在价先！" |
| 600825（新华传媒） | 上海新媒体 | "概念正宗，想象空间巨大！兼具上海国企改革！" |
| 601999（出版传媒） | 东北文化创意 | 持股至 9.1 重新接回 |

> 这只 600825 我说开板就是送钱——开板后真的大涨。

### 2014.10 农产品电商
| 标的 | 逻辑 |
|------|------|
| **300175 朗源股份**（7 元） | 业绩超预期 + 农产品电商 + 马云菜鸟物流主攻方向 + 食品安全 |

> 凭什么服装化妆品、钢铁电商唯品会上海钢联能涨八倍十倍，食品电商就不能。民还以食为天呢。

### 2014.10 互联网金融
| 标的 | 逻辑 |
|------|------|
| **600599 熊猫烟花** | 短期翻倍就没游资关注了，长线到 50 块不是什么难事 |
| **000609** | 互联网金融核心标的 |
| **002095 生意宝** | 烂板后在天源证券带动下继续向上 |
| **600119** | 电商范畴 |
| **300178** | 互联网金融 |

> 600446 金证股份从 15 块涨到 40 块，创历史新高。
> 东方财富 13 年初 2 块涨到现在 15 块，一年多翻了 7 倍。

### 2016.10-11 股权变更 + 次新股战役
| 标的 | 成本 | 涨幅 | 备注 |
|------|------|------|------|
| **000935 四川双马** | 26.48 → 28.50 加仓 | +133% | "行情核心是双马" |
| **601500 通用股份** | 19.49 | -6.5 万 | 次新股 |
| **300545 联得装备** | 89.33 | +4.4 万 | 次新股 |
| **600288 大恒科技** | 17.00 | +71 万 | 复盘后大涨 |
| **000923 河北宣工** | 27.38 | "被关" | 扫板被关 |
| **002813 路畅科技** | 73.195 | +35 万 | 次新股 |
| **300483 沃施股份** | 64.61 | -13.85 万 | 拉高出货 |
| **600158 中体产业** | 18.273 | -5.3 万 | 体育 |

### 2016.11.2 四川双马龙虎榜分析
| 营业部 | 操作 | 备注 |
|--------|------|------|
| **中泰证券深圳欢乐海岸** | 锁仓 | "对与大盘共振的核心品种有独到认识，锁仓拿波段" |
| **华福泉州丰泽街** | 买 8761 万 / 卖 6821 万 | - |
| **银河福州** | 买 8069 万 / 卖 8657 万 | "获利丰厚，底仓基本卖完" |
| **申万深圳金田路** | 买 5861 万 / 卖 4727 万 | "上午锁仓，午前直接 3 个 9900 砸出来" |
| **华泰浙江分公司** | 买 4042 万 | - |
| **光大深圳金田路** | 买 4030 万 / 卖 2905 万 | - |
| **广发深圳新安二路** | 卖 8959 万 | 砸盘方 |
| **国盛杭州萧绍路** | 卖 4384 万 | 砸盘方 |

> 顺便说下下午封板的 9977 手不知道谁的，怂，太怂。

## 题材分类大赏（2013-2017 期间）

| 题材 | 代表股 | 阶段 |
|------|--------|------|
| **环保+高送转** | 300266 兴源过滤 | 2013.12 |
| **养老+可穿戴** | 300290 邦讯技术 | 2014.1 |
| **教育** | 西安饮食/国脉科技/浙江广厦/陕西金叶 | 2014.6 |
| **手游** | 300148（重组审核）、300226、002555、002174、002502、002354 | 2014.2-3 |
| **影视** | 002502（拟购 50 手）、002261、300251、002681 | 2014.2 |
| **互联网金融** | 600599、000609、300178、002095、600119、601216、600446、东方财富 | 2014.9-10 |
| **农产品电商** | 300175 朗源股份 | 2014.10 |
| **新型媒体集团** | 600633、002181、600825、601999 | 2014.8 |
| **氢能源** | 600220 | 2014.3 |
| **特拉斯+次新股** | 002709 | 2014.1 |
| **彩票** | 002229 鸿博股份、002235、002558、002158 | 2014.4-5 |
| **网络安全/去 IOE** | 002439 启明星辰、300352、东方通、300188 | 2014.2 |
| **手游/页游** | 300248、002555、002502、002174、002354、300226、300315 | 2014.3-4 |
| **三季报预增** | 000034、600053 | 2014.10 |
| **埃博拉** | 600063、600789 | 2014.10 |
| **股权变更** | 000935 四川双马 | 2016.10 |
| **党建概念** | 603918 金桥信息 | 2016.10 |
| **次新股** | 002813、300545、601500 | 2016.10-11 |

## 金句

> 做超短，必须关注题材，题材大于技术，这是暴利的源泉。

> A 股的炒作以无厘头著称，因此这种高度投机的题材炒作，必如骄阳般热烈，如寒冬般刺骨。

> 题材出来，都知道要新、奇、特。这其实是表象，核心是打动人心。

> 这个小公司可能会成为一个大公司，比如成长为阿里巴巴，成长为苹果。

> 行情总在犹豫不决中展开，在高度认同时戛然而止。

> 懂的总是在享受利润，不懂的人总是在指责。

> 大胆预测下，以我对胖妹风格的判断，今天胖妹买了 600711。

> 论扫板，没怵过谁。扫板会是我的标签么。

> 得散户者得人心，人心所向，所向披靡。

> 行情演化到后期，板块不跟，妖股继续北上。

> 经常买到特停的票，证明你选股基本合格了。

> 我本身在做的过程中更看重题材。前面也提过。资金都是迅捷的，嗜血的。有赚钱效应的题材肯定会蜂拥而上的，因此资金不是问题。题材到位，压力位阻力位获利盘等，可以放在后面。

## 适用场景

- ✅ A 股题材炒作（政策驱动 + 行业趋势）
- ✅ 大众情人（群众基础好 + 价格低 + 创新高）
- ✅ 龙虎榜分析与一线游资跟进
- ✅ 强势行情的板块龙头接力
- ❌ 弱势无主线（"放弃这种模式。改为低吸模式"）
- ❌ 题材不明确的小盘股
- ❌ 期货（"2010 年中国股指期货出来后股指期货可以做"——但仅此一次尝试）

## 关联阅读

- P0《实战笔记_乔帮主交割单》——同为龙头战法
- P0《实战笔记_打板手法系统》——技术层
- P0《实战笔记_赵老哥/淘股吧全集》——赵老哥 2014 期间的股权行情
- P0《实战笔记_5分钟筛选牛股》——选股层
- P0《实战笔记_集合竞价奥义》——买入时点
- P1P2《实战笔记_骑在牛股_手记》——同期打板选手
- P1P2《实战笔记_短线之王_龙规实战篇》——同为题材派
- C 盘 26 位游资心法中的"赵老哥/佛山无影脚/欢乐海"等

## 与其他游资的对比

| 维度 | 著名刺客 | 骑在牛股上 | Asking | 乔帮主 |
|------|----------|-----------|--------|--------|
| 核心理念 | 题材 > 技术 | 人气 + 打板 | 龙头 + 势 | 龙头 |
| 操作依据 | 题材判断 | 量价+人气 | 市场合力 | 龙头 |
| 仓位 | 重仓题材龙头 | 满仓 → 半仓 | 半仓试错 | 单股集中 |
| 持续时间 | 2013-2017（4 年+） | 2012-2014（2 年） | 2004 至今 | 长期 |
| 资金曲线 | 数百倍 | 17万→1000万 | 数百倍 | 数十倍 |
| 风格变化 | 长线→超短 | 长线→中线→短线→超短 | 期货→短线 | 短线 |

---

*整理日期：2026-06-25*
*来源：著名刺客手记.pdf*
`,oneLine:`**题材打板第一派**——"做超短，必须关注题材，题材大于技术，这是暴利的源泉。" 得散户者得人心。`,tags:[`题材打板`,`龙头接力`,`龙虎榜分析`]},{id:`P1P2_赵老哥_1.12操作`,title:`赵老哥_1.12操作`,category:`顶级游资心法`,source:`P1P2`,filename:`实战笔记_赵老哥_1.12操作.md`,content:`# 实战笔记 · 赵老哥 1.12 大神操作

> 题材分类：实盘复盘 / 龙虎榜 / 游资协同作战
> 游资：赵老哥（赵强）+ 杭州孙哥 + 中信溧阳路 + 宁波马信琪 + 游资龙头
> 关联资料：参见本批《游资席位_完整资料》；C 盘 \`赵老哥_1.12_交易记录_深度复盘.md\`
> 来源：D 盘《赵老哥 1.12 日大神操作》XLS

---

## 一句话定位

> **2017-01-12 赵老哥动用 4 大席位协同 3 只股（英维克/北斗星通/环能科技），单日+3日净入 6,670 万的完整龙虎榜复盘。**

## 核心观点

1. **多席位协同作战**：1 个交易日用 3 个不同券商席位（银河绍兴/华泰浙江分公司/申万陆家嘴），覆盖 3 只不同行业股
2. **英维克（机械行业）是主战场**：赵老哥（银河绍兴 1,853.41 万）+ 杭州孙哥（财富庆春路 1,627.03 万）联手封板
3. **大票接力**：北斗星通 74.53 元高价股（电子信息行业）单票 2,858.82 万
4. **小盘试水**：环能科技 21.61 元（环保工程）轻仓 201.41 万
5. **行业分散**：机械 / 电子信息 / 环保工程 三行业同时布局
6. **2017.01.12 时点**：正是 2017 年初的"春季躁动"行情开启期

## 赵老哥 1.12 当日+3日完整数据

### 简略统计

| 维度 | 买入统计 | 卖出统计 | 净入统计 |
|------|----------|----------|----------|
| **当日原因上榜** | 4,913.64 万 | 51.53 万 | **4,862.11 万** |
| 取平均值 | 1,637.88 万 | 17.18 万 | 1,620.70 万 |
| **三日原因上榜** | 1,853.41 万 | 45.12 万 | 1,808.29 万 |
| 取平均值 | 1,853.41 万 | 45.12 万 | 1,808.29 万 |
| **当日+3日总计** | **6,767.05 万** | 96.65 万 | **6,670.40 万** |
| 取平均值 | 1,691.76 万 | 24.16 万 | 1,667.60 万 |

### 4 大席位 + 3 只股票明细

| 席位 | 股票 | 代码 | 行业 | 买入(万) | 卖出(万) | 净入(万) | 价格 |
|------|------|------|------|----------|----------|----------|------|
| 中国银河绍兴 | 英维克 | 002837 | 机械行业 | 1,853.41 | 45.12 | **1,808.29** | 11.11 元 |
| 华泰浙江分公司 | 北斗星通 | 002151 | 电子信息 | 2,858.82 | 3.51 | **2,855.31** | 74.53 元 |
| 申万陆家嘴环路 | 环能科技 | 300425 | 环保工程 | 201.41 | 2.9 | **198.51** | 21.61 元 |
| 财富杭州庆春路（孙哥） | 英维克 | 002837 | 机械行业 | 1,627.03 | 67.51 | **1,559.52** | 11.11 元 |

## 选股方法

### 英维克（002837，机械行业）双雄联手
- **机械行业**整体异动
- 赵老哥 + 杭州孙哥 联合封板
- 单股净入合计 **3,367.81 万**（赵老哥 1,808.29 + 孙哥 1,559.52）
- 涨幅 -5.83%（单日收盘数据）
- 流通市值 5.6 亿，流通股本 5.6 亿
- 净流入占流通市值 6.0%

### 北斗星通（002151，电子信息）
- 卫星导航 / 北斗概念龙头
- 单票净入 **2,855.31 万**（赵老哥华泰浙江分公司）
- 价格 74.53 元，流通市值 10.2 亿
- 当日涨幅 4.29%
- 净流入占流通市值 2.8%

### 环能科技（300425，环保工程）
- 创业板 / 环保题材
- 轻仓试水，净入 **198.51 万**
- 价格 21.61 元，流通市值 1.0 亿
- 当日涨幅 -8.1%（弱势行情下的小幅试水）

## 协同作战图谱

### 1.12 当日主要席位 + 股票

| 席位类型 | 席位名称 | 股票 | 金额 |
|----------|----------|------|------|
| **赵老哥系** | 中国银河绍兴 | 英维克 | 1,853 万 |
| **赵老哥系** | 华泰浙江分公司 | 北斗星通 | 2,858 万 |
| **赵老哥系** | 申万上海陆家嘴 | 环能科技 | 201 万 |
| **孙哥系** | 财富杭州庆春路 | 英维克 | 1,627 万 |
| **溧阳路（孙煜）** | 中信上海溧阳路 | 长航凤凰(000520) | 4,638 万买 |
| **溧阳路（孙煜）** | 中信上海溧阳路 | 美锦能源(000723) | 1,157 万卖 |
| **宁波马信琪** | 光大宁波解放南路 | 美锦能源 | 681.91 万买 |
| **游资龙头** | 国泰君安上海福山路 | 天房发展(600322) | 1,946 万买 |

### 协同结论
- **英维克**：赵老哥 + 杭州孙哥 联手
- **长航凤凰**：溧阳路 4,638 万封板（孙煜主战场）
- **美锦能源**：孙煜 1,157 万出货 + 马信琪 681.91 万接货
- **天房发展**：游资龙头（国泰君安福山路） 1,946 万独立操作

## 仓位管理（1.12 当日结构）

| 游资 | 主仓位股票 | 仓位占比思路 |
|------|------------|--------------|
| **赵老哥** | 北斗星通 2,858 万 | 主力仓位（电子信息龙头） |
| **赵老哥** | 英维克 1,853 万 | 次主力（机械龙头联动） |
| **赵老哥** | 环能科技 201 万 | 试水仓位（环保小盘） |
| **孙哥（杭州）** | 英维克 1,627 万 | 单一标的集中 |
| **孙煜（溧阳路）** | 长航凤凰 4,638 万 | 单股重仓 |
| **孙煜** | 美锦能源 -1,157 万 | 减仓出货 |
| **马信琪** | 美锦能源 681 万 | 接货（接孙煜的货） |
| **游资龙头** | 天房发展 1,946 万 | 单一标的 |

## 选股逻辑（1.12 跨游资共识）

- **机械行业**（英维克）= 赵老哥+孙哥共同认可
- **电子信息**（北斗星通）= 赵老哥独家封板
- **港口水运**（长航凤凰）= 溧阳路独家
- **煤炭采选**（美锦能源）= 孙煜出货 + 马信琪接货
- **房地产**（天房发展）= 国泰君安福山路（游资龙头）独家
- **环保工程**（环能科技）= 赵老哥试水

## 风控逻辑

- **多席位分散**：赵老哥 3 席位分别在不同券商（银河/华泰/申万），避免单一席位过热
- **单股仓位控制**：单只股票最大仓位 = 2,858 万（北斗星通），符合赵老哥一贯的"不押单股"风格
- **试水仓**：环能科技仅 201 万，符合"小盘试水"原则
- **协同出货**：美锦能源 孙煜卖 → 马信琪买 = 集团军内部腾挪

## 经典案例

### 案例 1：英维克双雄联手
- **赵老哥（银河绍兴）**：1,853.41 万买，45.12 万卖
- **杭州孙哥（财富庆春路）**：1,627.03 万买，67.51 万卖
- **合计净入**：3,367.81 万
- **股票**：英维克(002837)，机械行业，价格 11.11 元
- **意义**：赵老哥与孙哥在机械行业的联手，验证了"龙头共振"模式

### 案例 2：北斗星通独食
- **赵老哥（华泰浙江分公司）**：2,858.82 万买，3.51 万卖
- **净入**：2,855.31 万
- **股票**：北斗星通(002151)，电子信息，价格 74.53 元
- **意义**：电子信息龙头大票接力，验证了"高价股也能接力"模式

### 案例 3：环能科技小盘试水
- **赵老哥（申万陆家嘴）**：201.41 万买，2.9 万卖
- **净入**：198.51 万
- **股票**：环能科技(300425)，环保工程，价格 21.61 元
- **意义**：弱势行情下的小仓位试水，验证了"轻仓测试"原则

### 案例 4：长航凤凰 溧阳路主升
- **孙煜（中信溧阳路）**：4,638.37 万买，123.57 万卖
- **净入**：4,514.80 万
- **股票**：长航凤凰(000520)，港口水运，价格 79.95 元
- **意义**：孙煜 50 亿资金的主战场，验证了"单股重仓"模式

### 案例 5：美锦能源腾挪
- **孙煜卖**：1,157.69 万（清仓）
- **马信琪买**：681.91 万
- **价格**：27.59 元
- **意义**：游资集团内部腾挪（孙煜出货 → 马信琪接货），典型"集团军"操作

## 金句

> **造席位比造股或造板块是最大的格局** —— 孙煜

> **不砸盘有担当的席位在牛市，市场会双倍奉献那种承担** —— 字典原话

> 一个师傅级的游资 出手必赚 —— 西藏证券辉河路

> 这类大鳄出现，基本上是市场短期人气回升的标志 —— 字典评甘忠廉 / 彪哥

## 适用场景

- ✅ 复盘龙虎榜 / 跟踪游资动向
- ✅ 识别"协同作战"信号
- ✅ 验证"多席位分散"模式
- ✅ 学习游资单股/多股仓位配置
- ❌ 直接照搬当日操作（时点已过）
- ❌ 单席位判断（必须看多席位）

## 关联阅读

- 席位字典：参见本批《游资席位_完整资料》（赵老哥 = 华泰浙江分公司）
- 龙头战法：参见本批《养家_全集》《Asking理念总结》
- 实盘案例：参见本批《令胡冲_50万至800万成长之路》
- 风格分类：参见本批《游资席位_完整资料》"扫板/接力型"专栏

## 与其他游资的呼应

- **孙煜（溧阳路）**：1.12 与赵老哥同时活跃，但各自操作不同股票（孙煜主长航凤凰，赵老哥主英维克+北斗星通）
- **马信琪（宁波解放南路）**：从孙煜手中接货美锦能源
- **杭州孙哥（财富庆春路）**：与赵老哥联手封英维克
- **养家（孙峰）**：1.12 未见上榜，但养家席位华鑫系在 2017 年同样活跃
- **乔帮主（招商蛇口）**：1.12 未见上榜
- **Asking（邱宝裕）**：2010 前后活跃，本日未上榜
- **孙煜造席位哲学**：赵老哥的多席位策略 = 同一个思路的不同体现

---

*笔记来源：D 盘《赵老哥 1.12 日大神操作》XLS*
*整理日期：2026-06-25*
`,oneLine:`**2017-01-12 赵老哥动用 4 大席位协同 3 只股（英维克/北斗星通/环能科技），单日+3日净入 6,670 万的完整龙虎榜复盘。**`,tags:[`实盘复盘`,`龙虎榜`,`游资协同作战`]},{id:`P1P2_赵老哥交易记录`,title:`赵老哥交易记录`,category:`顶级游资心法`,source:`P1P2`,filename:`实战笔记_赵老哥交易记录.md`,content:`# 实战笔记 · 赵老哥·交易记录（P1P2 增补版）

> 题材分类：涨停板 / 做 T / 突破板 / 底部票 / 龙头主升
> 游资/作者：赵老哥（赵强，80 后）
> 身份/体量：2010.03 起步 → 2010.11.06 869 万；2014.11 银河绍兴路席位
> 席位：**银河证券绍兴路**（主战场）、华泰浙江分公司、申万陆家嘴、财富杭州庆春路
> 关联资料：P0 实战笔记_乔帮主交割单（赵老哥 2010 同期交割记录整理）；本批《实战笔记_赵老哥_1.12操作》、《实战笔记_游资席位_完整资料》
> 来源：D 盘《赵老哥交易记录》PDF（P1P2 增补；与 P0 战法整理互补）

---

## 一句话定位

> **"超短票、底部票、突破板、大题材、连板票"五大战法，2010 年 5 个月从 200 万 → 869 万，2014.11 银河绍兴路席位行云流水操作次新股。** "二板定龙头，三连板之后逢低进，第五天是最好的卖点"。

## 核心观点

1. **核心铁律"三连板之后逢低进"**（超短里面"有三必有五"）：第四日不论高低开继续加仓，第五日鼎盛期清仓——赵老哥 0693 华泽钴镍五连折、536 中国软件四连板均如此操作。
2. **二板定龙头**：一板能看出来个毛；二板定龙头，资金面讲没有新题材老热点就继续。
3. **超短票 5 大战法**（老毕也疯狂总结）：①超短票（第一天打板买，第二天不管盈亏全卖，成功率 70%+）；②底部票（用资金做引导打第一个板）；③突破票（突破板必打，第二天做 T，第三天全高抛）；④大题材（从头吃到尾做 T）；⑤连板票（开板必打，胜率超 50%）。
4. **仓位管理核心：单股多笔分批操作**——同只股常出现 5-10 笔买卖，规避冲击成本同时做 T 摊薄成本。
5. **3 个判断题材主线的关键**："题材逻辑 + 板块宽度 + 市场表现"→ 中线大题材能炒 1-2 个月，先预热、再慢热、再加速。
6. **龙头战法口诀**："第一时间发现市场的精神领袖 / 第一时间上了她 / 一直持有 / 直到发现新的精神领袖 / 果断切换"——没爆量的都不能说是龙头。
7. **执行力 = 年轻成功的关键**："年纪轻轻（才比我大两岁）就能取得过亿成绩的一大原因"——知行合一。
8. **风控："错误的交易，第二个集合割，效果最好"**——忘掉它，马上进入新交易状态。

## 仓位管理与操作节奏

| 维度 | 赵老哥做法 | 典型数据 |
|------|-----------|----------|
| **单股笔数** | 一只股常 5-15 笔买卖分批操作 | 新疆天业 600075 在 5.21~5.25 共 11 笔（买卖交替） |
| **建仓速度** | 大单快速建仓 | 5.12 中国太保 9:50:21 113700 股一次性买入 |
| **卖出节奏** | 高位分笔减仓，每次 5000-30000 股 | 5.17 闽闽东清仓 11 笔，最低 1000 股最高 5000 股 |
| **T+0 做 T** | 当日分笔低买高卖 | 5.28 金智科技 002090 当日买卖 7 笔（T+0 模式） |
| **持股周期** | 1-3 天为主，最长 5-7 天 | 0693 持有 5 天（3.7-3.14 完整战役） |
| **首板打板** | 板上追入，常 9:30-10:30 时段 | 4.1 闽闽东 21.65 元封板追入，4.6 清仓 4 笔 |

## 选股方法

### 5 大战法细化

| 战法 | 触发条件 | 离场信号 | 案例 |
|------|----------|----------|------|
| **超短票** | 第一板打板 | 第二天冲高高抛（成功率 70%+） | 2010.4.1 闽闽东 000536 |
| **底部票** | 资金引导打出第一个底部板 | 拉升后放量清仓 | 2010.4.16 海虹控股 000503 |
| **突破板** | 突破前期头部/平台 | 第一天打板 → 第二天做 T → 第三天全抛 | 2010.4.14 航天通信 600677 |
| **大题材** | 中线题材 1-2 月 | 从头吃到尾做 T | 2010.4 军工/高铁板块 |
| **连板票** | 3 连板以上开板 | 开板必打 | 2014.11 兰石重装等次新股连板 |

### 一板买点判断（shglb 2013-05 总结）
1. **板块带动效应**：第一板有板块联动则强
2. **K 线位置低**：相对低位起板更优
3. **分时拉升流畅**：分时大单持续、坚决
4. **拉升时间窗**：10-11 点理性成分最高，最佳介入窗口
5. **题材确认**：盘中无法完全确认，但盘口资金行为可识别

## 风控逻辑

| 情形 | 处理方式 | 案例 |
|------|----------|------|
| **题材切换期** | "题材多势必切换快" → 严控仓位 | 2010.5.12 短线兑现后立刻换股 |
| **错误的交易** | 第二个集合直接割 | 5.14 闽闽东 第二日 19.0-19.3 元 11 笔清仓 |
| **被套个股** | "个别套住的票也能果断割肉出局" | 2010.3.22 青海明胶 000606 涨停被砸后连卖 5 笔 |
| **拉升后下压** | "拉升放量、下压缩量" → 不抛；二次拉升放量再抛 | 2010.4.1 江苏吴中 600200 |
| **龙头反抽** | 同一板块炒作滞涨/补涨股 → 板块要退场 | 2013.5 经验："高潮过后的消退期都会留一个活口" |
| **市场龙头切换** | 果断切换，不幻想 | "果断切换没爆量的都不能说是龙头" |

## 经典案例（带具体股票代码/日期/金额）

### 案例 1：3.7-3.14 0693 华泽钴镍五连折（2014）
- 3.7 净买、3.8 做 T、3.9 净买、3.12 净买、3.13 做 T 出货、3.14 清仓
- 第四日高开 0693 仍然加仓，第五日 3.13-3.14 鼎盛期清仓
- 铁一样执行力的代表："**第四天不论高低开依然不做卖出反而继续加仓**"

### 案例 2：5.20-5.21 中国软件 600536 四连板（2014）
- 5.20 未上榜、5.21 净买、5.22 无龙虎榜、5.23 净买
- 5.23 同日率先启动 977 浪潮信息给板块铺垫升温
- "**第四天低开仍加仓**"——人性弱点的反面教材

### 案例 3：2010.5.12 中国太保 601601 反复操作
- 9:50:21 一次性买入 113700 股，价格 24.649
- 9:59:11 加仓 1200 股
- 5.13 14:29-14:52 共 7 笔清仓，单价 25.5-25.78 元
- **典型大资金做 T 模式**

### 案例 4：2010.5.27 金智科技 002090（3 笔建仓 + 5 笔清仓）
- 5.27 建仓 50008 股 @14.80
- 5.28 加仓 3 笔（27100+2600+3000 股）
- 5.28 卖出 2 笔（20000+30000 股 @15.5+）
- 5.31 清仓 3 笔（10000+10000+12700 股 @15.1+）
- **3 天完成"建仓—加仓—做 T—清仓"完整链条**

### 案例 5：2010.6.21-6.23 海德股份 000567 短线暴利
- 6.21 买入 184500 股 @8.67 → 6.23 清仓
- 6.23 共 8 笔清仓，最高价 10.34 元，最低价 10.09 元
- 单股短线盈利 **+17%**

### 案例 6：2010.6.21-6.22 厦门港务 000905 失败案例
- 6.21 买入 178800 股 @8.04
- 6.22 第二天清仓 15 笔，价格 7.91-8.01 元
- **亏本出局**——"失败也不抱幻想"风控范本

### 案例 7：2010.6.23-6.24 西藏发展 000752 高位做 T
- 6.23 买入 152450 股 @11.099
- 6.24 共 14 笔清仓，价格 10.83-10.99 元
- **典型大资金分笔减仓**

### 案例 8：2010.6.24-6.25 同洲电子 002052 高位出货
- 6.24 买入 202600 股 @13.102
- 6.25 共 20 笔清仓，价格 12.84-13.02 元
- **单股 20 笔出货教科书**

### 案例 9：2010.4.16-4.21 海虹控股 000503 反复操作
- 4.16 买入 230600 股 @11.846
- 4.19 加仓 2700 + 4.19 卖出 230600 → 4.20 加仓 100000 → 4.21 卖出
- **4 天 5 笔买卖 = 完美的反复操作案例**

### 案例 10：2014.11.3-11.18 次新股/高送转联动
- 11.3-11.7：兰石重装 + 节能风电 + 东方电缆 + 中色股份 4 只联动
- 11.7-11.11：高送转预期 良信电器 002706 + 飞凯材料 300398
- 11.14-11.18：陆家嘴 603609 + 新股开板
- **整段操作"犹如看 DOTA2 职业大神的操作一样行云流水"**

## 金句（原 PDF 摘录）

> "**一句话概括，看龙虎榜是看最强游资的买卖思路，而不是通过看上榜席位来判断第二天的涨跌**。"
>
> "**超短里面有一条比较出名的有三必有五，即三连板的个股之后逢低进，后面大概率能有高点出来**。"
>
> "**这是超一流高手在做盘时铁一样执行力的表现，也是他年纪轻轻（才比我大两岁）就能取得过亿成绩的一大原因**。"
>
> "**选股，必须新题材龙头。但买卖点，要注意节奏。亏钱都是没有坚持自己的模式**。"
>
> "**只做龙头，只做主升，只做惯性。不做反抽，不做波动，屌丝才爱逆袭**。"
>
> "**大龙头都是多点共振的结果。题材派、龙头派、技术派都认同。筹码供不应求。越走越轻。加速**。"
>
> "**错误的交易，第二个集合割，效果最好。忘掉他，马上进入一个新的交易状态**。"
>
> "**市场差不怕，成交额少也不怕，就怕题材多。题材多势必切换快**。"

## 适用场景

| 适合 | 不适合 |
|------|--------|
| 有题材主线的中线 1-2 月行情 | 题材多、切换快的混乱市 |
| 板块有龙头 + 联动效应的爆发期 | 纯个股博弈、无板块效应的孤狼行情 |
| 次新股/高送转等高波动品种 | 蓝筹慢牛、价值投资 |
| 启动初期 1-3 板介入 | 末期高位接力（第 4 板以后胜率下降） |
| 资金量 50 万-5000 万可复制 | 10 万以下小账户（冲击成本吃不消） |

## 关联阅读

### P0 已有 25 份
- 实战笔记_乔帮主交割单（2010 同期交割单；与赵老哥手法对比）
- 实战笔记_Asking理念总结（"二板定龙头"同源）
- 实战笔记_养家心法（"有赚钱效应的情况下做热点，没赚钱效应的情况下做超跌"）
- 实战笔记_打板手法系统（涨停战法系统化）
- 实战笔记_低吸追涨打板（"如何在强势股里做差价"）
- 实战笔记_游资席位速查（银河绍兴路席位详解）
- 实战笔记_次新股筛选（赵老哥 11 月次新股组合）
- 实战笔记_抓妖股概率（"有三必有五"的概率基础）
- 实战笔记_云意电气涨停（单一题材炒作）
- 实战笔记_集合竞价_5分钟筛选牛股（开盘选股法）

### 本批 P1P2 配套
- **实战笔记_赵老哥_1.12操作**（2017-01-12 协同龙虎榜深度复盘）
- **实战笔记_游资席位_完整资料**（银河绍兴路 798 行席位库）
- **实战笔记_赵老哥淘股吧全集**（第五/六/七/九届职业炒手杯完整记录）
- **实战笔记_淘股吧大师列传**（赵老哥/孙哥/龙飞虎全景）
- **实战笔记_养家心法论股市**（养家访谈中"和赵老哥一起合作"的细节）

### C 盘 26 位游资深度研读
- 赵老哥专题（执行力的代表）
- 孙哥（赵老哥最常合作的协同席位）
- 炒股养家（"二板定龙头"思想来源）
- 落升（"龙头首阴"战法对比）

## 与其他游资呼应

| 维度 | 赵老哥 | 养家 | 乔帮主 | Asking | 龙飞虎 |
|------|--------|------|--------|--------|--------|
| **核心手法** | 涨停板做 T | 主流热点龙头低吸 | 龙头 5 日均线低吸 | 涨停板 5 要素 | 多席位协同 |
| **首板态度** | 必打 | "做新不做旧" | 5 日线低吸 | 必打 | 必打 |
| **二板态度** | "二板定龙头" | 确认主流后做 | 5 日线低吸 | 必打 | 必打 |
| **三板态度** | "三连板之后逢低进" | 高潮后撤退 | 5 日线低吸 | 持有 | 持有 |
| **代表作** | 0693/536/002294 | 601901 | 600209/300343 | 002181 | 002181 |
| **铁律** | "第五天清仓" | "忘记成本价" | "龙头低吸次日冲高出" | "市场决定方向" | "合力" |
| **风险偏好** | 极高（70% 仓位集中） | 中（动态） | 中（5 日线） | 高（5 要素共振） | 中高 |

## P1P2 增补说明

- **与本批《实战笔记_赵老哥_1.12操作》的关系**：本份笔记覆盖 **2010.03-2010.11（第五/六届职业炒手杯）+ 2014.11 银河绍兴路** 早期到中期操作；《实战笔记_赵老哥_1.12操作》聚焦 2017-01-12 单日 4 大席位协同 3 只股的龙虎榜深度复盘。
- **与本批《实战笔记_赵老哥淘股吧全集》的关系**：本份笔记聚焦 2010-2014 交割单细节；《实战笔记_赵老哥淘股吧全集》覆盖第五/六/七/九届职业炒手杯完整交割数据。
- **核心增量**：本份笔记首次系统化整理赵老哥 5 大战法（超短/底部/突破/大题材/连板）+ 8 大案例（0693 五连折/536 四连板/601601 反复操作/002090 做 T/000567 短线暴利/000905 失败案例/000752 高位做 T/002052 教科书出货）+ 9 大经典金句原文摘录。

---

*整理日期：2026-06-25*
*来源：赵老哥交易记录.pdf*
`,oneLine:`**"超短票、底部票、突破板、大题材、连板票"五大战法，2010 年 5 个月从 200 万 → 869 万，2014.11 银河绍兴路席位行云流水操作次新股。** "二板定龙头，三连板之后逢低进，第五天是最好的卖点"。`,tags:[`涨停板`,`做`,`T`,`突破板`,`底部票`,`龙头主升`]},{id:`P1P2_赵老哥淘股吧全集`,title:`赵老哥淘股吧全集`,category:`顶级游资心法`,source:`P1P2`,filename:`实战笔记_赵老哥淘股吧全集.md`,content:`# 实战笔记 · 赵老哥·淘股吧全集（P1P2 增补版）

> 题材分类：实盘记录 / 涨停板 / 短线 / 心态成长
> 游资/作者：赵老哥（赵强，87 年）
> 身份/体量：2010.03 起步 → 2010.12 突破 1000 万；连续参加 5/6/7/9 届职业炒手杯
> 席位：银河证券绍兴路（2010-2014 主战场）
> 关联资料：P0 实战笔记_乔帮主交割单（同期交割单参考）；本批《实战笔记_赵老哥交易记录》、《实战笔记_淘股吧大师列传》
> 来源：D 盘《赵老哥淘股吧全集》PDF（P1P2 增补；覆盖 5/6/7/9 届职业炒手杯 4 届比赛 + 心态实录）

---

## 一句话定位

> **"我很多板都喜欢开了以后买，砸开以后封回的板有时更可以看出里面资金的想法，洗洗获利盘比第二天闷杀的票好多了。"** —— 2010-2011 年赵老哥在 4 届职业炒手杯中的心态实录 + 实盘交割单 + 26 个涨停/跌停关键战役的完整复盘。

## 核心观点

1. **"砸开以后封回的板"才是好板**：开板后能封回 → 洗出获利盘，主力志在高远，比"第二天闷杀"的票好。
2. **"我毕竟是个特例"**：赵老哥自己警示，"一将功成万骨枯，不想因为我的事例带更多盲目的追随者"——明确反对盲目跟随。
3. **"我毕竟是个特例"背后的现实**：2010.10-2010.12 七届杯期间"最近做的臭/晦气/悲剧/一傻逼"反复出现，**7 周里 4 周自承状态差**——超一流选手也有低潮期。
4. **"这周做的很乱，下周开始还是尽量纯粹的做板"**（2011.04.09）——赵老哥自己的反思：模式越简单越好，要做减法。
5. **"糊涂状态比清醒做的好"**（2010.10.19）——逆向心态学：过度思考反而拖累执行力。
6. **"做板碰到停牌就是看天意了"**（2010.12.13）——持有 968 煤气化跌停板走，不后悔，认赌服输。
7. **"5 万/1 万/4 万/1 万" 频繁转出**（2010.04-2010.12 共 7 次）——赚的钱及时落袋，不让资金曲线过山车。
8. **"龙头 111 都搞成这样了 你还想 172 主力怎么办"**（2010.04.23）——主线龙头 600111 包钢稀土的复盘判断。

## 仓位管理与操作节奏

| 维度 | 赵老哥做法 | 典型数据 |
|------|-----------|----------|
| **单股笔数** | 一只股常 5-20 笔分笔操作 | 002190 成飞集成 4 笔清仓；002166 莱茵生物 7 笔买卖 |
| **大单建仓** | 早盘 9:32-10:00 时段快速建仓 | 2010.10.26 002190 成飞集成 9:32:00 一次性买 40000 股 |
| **T+0 模式** | 当日分笔做 T 摊薄成本 | 2010.10.18-19 002056 横店东磁 5 笔买卖 |
| **板块联动** | 多个题材同时建仓 | 2010.10.21 同步建仓 000630 铜陵有色 + 000758 中色股份 + 600331 宏达股份 |
| **跌停出局** | 排队被扫，认赌服输 | 2010.12.13 968 煤气化跌停出局，"不后悔" |
| **心态止损** | 5 千/1 万/4 万 多次转出 | 2010.04.15 转出 5000、2010.12.08 转出 1 万、2010.12.30 转出 4 万 |

## 选股方法

### 4 届职业炒手杯选股全景

| 届次 | 时间 | 选股主线 | 关键战役 |
|------|------|----------|----------|
| **第五届** | 2010.03-2010.06 | 中小盘成长 + 题材概念 | 中国铝业 601600、青海明胶 000606、闽闽东 000536、信立泰 002294 |
| **第六届** | 2010.07-2010.08 | 中报行情 + 资源股 | 美都控股 600175、远兴能源 000683、平煤股份 601666、西山煤电 000983 |
| **第七届** | 2010.10-2010.12 | 稀土永磁 + 黄金 + 煤炭 | 成飞集成 002190、西藏城投 600773、中色股份 000758、江西铜业 600362 |
| **第九届** | 2011.04-2011.05 | 复活节行情 + 创业板 | 968 煤气化 21.47 重手杀入（停牌打乱全盘计划） |

### 关键判断标准（赵老哥语录）
1. **题材逻辑**：稀土是国家战略；高铁是国家产业转型；黄金是抗通胀——必须是大题材，不是小热点
2. **板块宽度**：看前锋（紧固件/电池/电机）+ 压阵（南北车/整车厂）的"多点共振"
3. **市场表现**：先预热、再慢热、再加速 = 中线大题材 1-2 月
4. **5 要素共振**：题材派 + 龙头派 + 技术派都认同 = 大龙头
5. **没有新题材老热点就继续**（2010.04.23 包钢稀土判断）

## 风控逻辑

| 情形 | 处理方式 | 案例 |
|------|----------|------|
| **砸板后封回** | 反而加仓买入（"看出资金想法"） | 2011.04.09 22:17 反思"砸开以后封回的板更看出资金的想法" |
| **跌停停牌** | 排队被扫，认赌服输 | 2010.12.13 968 煤气化跌停出局 |
| **状态低迷** | "周末要反省" + 转出落袋 | 2010.10.15 "周末要反省下了" |
| **做错行情** | "当行情来了却做错" 离场观望 | 2010.12.21 "哎 当行情来了却做错" |
| **分心多事** | 主动停手 | 2010.08 "这周分心事太多 做的也很不理想" |
| **模式混乱** | "下周开始还是尽量纯粹的做板" | 2011.04.09 反思 |
| **次日闷杀风险** | 当天分批清仓 | 002324 普利特 9 笔清仓 |

## 经典案例（带具体股票代码/日期/金额）

### 案例 1：第五届 3.22 中国铝业 601600 失败（赵老哥早期最大败笔）
- 2010.03.19 老章主拉涨停，赵老哥跟进 → 03.22 周一清仓亏本大甩卖
- "**游资阵亡，赵老哥阵亡**"
- **教训**：跟板失败时认错要快

### 案例 2：第五届 4.1-4.2 闽闽东 000536 板后持有
- 4.1 板上追入 50000 股 @21.65
- 4.2 卖出 20000 股 @23.021
- 4.6 继续清仓 4 笔（10000+10000+6200+3800 股）
- 4.6 最高价 24.0 元，**总盈利 11%+**
- **"老哥基本是跑在最高点"**

### 案例 3：第五届 4.21-4.22 信立泰 002294 高价股操作
- 4.21 买入 21700 股 @81.26
- 4.22 卖出 5 笔，价格 83.3-85.77 元
- 4.22-4.23 持续做 T，价格区间 84.19-91.25
- 4.26 卖出 9000 股 @98.725
- **"一周净赚 17%+"**（典型大资金做 T 案例）

### 案例 4：第六届 7.16-7.19 平煤股份 601666 + 西山煤电 000983
- 7.16 买入西山煤电 30000+32000 股 @19.525-19.797
- 7.19 6 笔清仓西山煤电 62000 股
- 7.19 同日买入平煤股份 191730 股（4 笔加仓）
- 7.20 14 笔清仓平煤股份
- **"煤炭板块联动"教科书**

### 案例 5：第七届 10.13 首开股份 600376 短线
- 10.13 一次性买入 300700 股 @18.46（555 万）
- 10.14 共 4 笔清仓 300700 股（区间 18.4-18.64）
- **"大资金一日游"**

### 案例 6：第七届 10.26-10.28 成飞集成 002190 短线暴利
- 10.26 买入 40000 股 @41.73
- 10.27 卖出 3 笔（10000+18940+11060 股），价格 43.5-44.6 元
- **3 日 +7%** 短线操作

### 案例 7：第七届 10.27 西藏城投 600773 大资金出货
- 10.27 卖出 3 笔共 178800 股（68700+100000+10100 股），价格 21.49-21.87
- 10.26 重新建仓 178800 股 @20.59
- **"高抛低吸教科书"**

### 案例 8：第七届 10.27 超声电子 000823 一日游
- 10.27 一次性买入 203100 股 @14.77（299 万）
- 10.28 卖出 2 笔共 100600 股，价格 15.79-16.09
- **"2 日 +7%"**

### 案例 9：第七届 10.21 中航动控 000738 反复操作
- 10.21 买入 + 加仓 + 卖出 + 再买入
- 共 9 笔操作，**"高频做 T"代表**

### 案例 10：第七届 11.3-11.4 金路集团 000510 集中操作
- 11.3 共 5 笔建仓共 234626 股（11.45-11.55）
- 11.4 卖出 5 笔共 164626 股
- **"建仓+清仓一条龙"**

### 案例 11：第七届 12.10-12.16 中色股份 000758 + 煤气化 000968 战役
- 12.10 中色股份：13:28-14:07 共 3 笔建仓 276600 股（26.99-29.11）
- "**周五几乎启动点点火了 758**"
- 12.10 煤气化 968 重手杀入 24400 股 @21.47
- 12.13 968 **跌停走的但是我不后悔 做板碰到停牌就是看天意了 仓位过重 跌停必然排队被扫了**
- 12.16 美都控股 600175 + 潞安环能 601699 切火
- **"点了一周的火"**

### 案例 12：第七届 12.28-12.29 鑫科材料 600255 跌停出货
- 12.28 14:06 一次性买入 333300 股 @10.787（360 万）
- 12.29 9:32-10:46 共 8 笔清仓
- 12.30 五矿发展 600058：30.99+31.73+31.65 三笔出货
- **"次日不计成本出局"**

### 案例 13：第七届 12.27 冀中能源 000937 反向操作
- 12.27 买入 88500 股 @40.67
- 12.28 加仓 23042 股 @37.30（跌停加仓）
- 12.28-12.29 共 8 笔清仓
- **"跌停加仓代表对煤炭板块的执念"**

## 金句（原 PDF 摘录）

> "**我很多板都喜欢开了以后买，砸开以后封回的板有时更可以看出里面资金的想法，洗洗获利盘比第二天闷杀的票好多了**。"（2011-04-09 22:17）
>
> "**给别人激励么，我们这行一将功成万骨枯，不想因为我的事例带更多盲目的追随者，我毕竟是个特例**。"（2011-04-09 22:46）
>
> "**这周做的很乱，下周开始还是尽量纯粹的做板**。"（2011-04-09）
>
> "**研究赵老哥交割单总结出一条：老哥财神爷附体！**（看了三届所有的交割单，其中开板的股占了六成，盘中任它们如何开板折腾，收盘最后总能封在涨停价位！）"（2011-04-09 21:30 中国 ST 王评）
>
> "**968 跌停走的但是我不后悔 做板碰到停牌就是看天意了 仓位过重 跌停必然排队被扫了**。"（2010-12-13）
>
> "**968 很看好才重手杀入，今天的走势也证明了没看走眼，可惜这停牌打乱了全盘计划**。"（2010-12-10）
>
> "**哎 当行情来了却做错**。"（2010-12-21）
>
> "**感觉点火追涨太影响心态了 今天被 376 和 58 双重打击 红盘加仓了 58 操**。"（2010-12-23）
>
> "**最近实在是做的臭 / 做的晦气 / 做的悲剧 / 做的就是一傻逼 / 还是壮烈了**。"（第七届 7 周连续自承状态差）
>
> "**这周分心事太多 做的也很不理想**。"（2010-08）
>
> "**火哥 我全卖了 哭死**。"（2010-08-17）
>
> "**有梦为马**。"（赵老哥自称）

## 适用场景

| 适合 | 不适合 |
|------|--------|
| 研究赵老哥早期成长路径（2010 小资金 → 1000 万） | 寻找"必胜公式"——赵老哥自己说"我毕竟是个特例" |
| 学习大资金做 T 模式（单股 5-20 笔操作） | 一味复制 4 届比赛 + 心态低迷期的"做臭"状态 |
| 理解"砸开以后封回的板"是更好的板 | 误以为每周都能稳定盈利——赵老哥 7 周 4 周自承差 |
| 复盘涨停板/跌停板/开板后封回 | 复制赵老哥 968 煤气化跌停停牌遭遇 |

## 关联阅读

### P0 已有 25 份
- 实战笔记_乔帮主交割单（与赵老哥 2010 同期小资金成长对比）
- 实战笔记_Asking理念总结（"二板定龙头"同源）
- 实战笔记_养家心法（"养家对赵老哥的影响"）
- 实战笔记_打板手法系统（涨停战法系统化）
- 实战笔记_低吸追涨打板（强势股差价）
- 实战笔记_游资席位速查（银河绍兴路详解）
- 实战笔记_次新股筛选（赵老哥 2010 中小盘 + 题材）
- 实战笔记_抓妖股概率（"有三必有五"）
- 实战笔记_云意电气涨停（单一题材）
- 实战笔记_集合竞价_5分钟筛选牛股（开盘选股）

### 本批 P1P2 配套
- **实战笔记_赵老哥交易记录**（5 大战法 + 8 大案例）
- **实战笔记_赵老哥_1.12操作**（2017-01-12 龙虎榜）
- **实战笔记_淘股吧大师列传**（赵老哥/孙哥/龙飞虎全景）
- **实战笔记_养家心法论股市**（养家 vs 赵老哥手法对比）
- **实战笔记_游资席位_完整资料**（银河绍兴路 798 行）

### C 盘 26 位游资深度研读
- 赵老哥专题（5/6/7/9 届职业炒手杯完整记录）
- 职业炒手（赵老哥口中的"火哥"）
- 孙煜/孙哥（赵老哥 2010 多次"色狼"互怼的搭档）
- 炒股养家（"和赵老哥一起合作"）

## 与其他游资呼应

| 维度 | 赵老哥 2010 | 养家 | 乔帮主 | Asking | 龙飞虎 |
|------|------------|------|--------|--------|--------|
| **核心手法** | 涨停板 + 做 T | 主流热点龙头低吸 | 龙头 5 日均线低吸 | 涨停板 5 要素 | 多席位协同 |
| **典型资金** | 2010.03 200 万 → 2010.12 千万 | 2010 200 万 | 2012-2013 10 万 → 1300 万 | 2010 中小资金 | 2009-2010 100 万 |
| **态度** | "砸板后封回" = 好板 | 顺势而为 | 龙头低吸次日冲高出 | 5 要素共振 | 合力 |
| **风险** | 跌停停牌 | 错过龙头 | 龙头不板 | 5 要素不全 | 题材切换 |
| **失败率** | 7 周 4 周自承差 | 较高 | 较低 | 较高 | 中 |
| **金句风格** | "我毕竟是个特例" | "做减法" | "越简单越好" | "没爆量不是龙头" | "梦想在上，孤独在下" |

## P1P2 增补说明

- **与本批《实战笔记_赵老哥交易记录》的关系**：本份笔记聚焦 **2010.03-2011.04 第五/六/七/九届职业炒手杯** 的完整实盘 + 心态实录；《实战笔记_赵老哥交易记录》覆盖 2010-2014 关键战役 + 5 大战法。
- **核心增量**：本份笔记首次系统化整理赵老哥 4 届职业炒手杯的 **13 个关键战役**（3.22 中国铝业失败 / 4.1 闽闽东板后持有 / 4.21 信立泰做 T / 7.19 平煤股份 / 10.13 首开股份 / 10.26 成飞集成 / 10.27 西藏城投 / 10.27 超声电子 / 10.21 中航动控 / 11.3 金路集团 / 12.10 中色股份 + 968 / 12.28 鑫科材料 / 12.27 冀中能源）+ **21 条经典金句原文**（含 7 周连续自承状态差 / 968 跌停不后悔 / 我毕竟是个特例等心态实录）。
- **独特价值**：本份笔记是 P0 + P1P2 中 **唯一** 详细记录赵老哥 4 届比赛心态波动的笔记——"研究赵老哥交割单总结出一条：老哥财神爷附体"的反向解读是"一将功成万骨枯"。

---

*整理日期：2026-06-25*
*来源：赵老哥淘股吧全集.pdf*
`,oneLine:`**"我很多板都喜欢开了以后买，砸开以后封回的板有时更可以看出里面资金的想法，洗洗获利盘比第二天闷杀的票好多了。"** —— 2010-2011 年赵老哥在 4 届职业炒手杯中的心态实录 + 实盘交割单 + 26 个涨停/跌停关键战役的完整`,tags:[`实盘记录`,`涨停板`,`短线`,`心态成长`]},{id:`P1P2_郑瑞鑫_擒拿妖股`,title:`郑瑞鑫_擒拿妖股`,category:`高手手记`,source:`P1P2`,filename:`实战笔记_郑瑞鑫_擒拿妖股.md`,content:`# 实战笔记 · 郑瑞鑫擒拿妖股大法（银润投资·紫光举牌）

> 题材分类：妖股识别 / 洗盘识别 / 紫光举牌
> 作者：郑瑞鑫（摩尔金融作者，2015-09-01 发布，价格¥59.90，已500+人购买）
> 核心案例：银润投资（000526）—— 紫光集团举牌 + 学大教育收购
> 时间窗口：2015-08 复牌后 10 个一字板 → 8.21 倒手 → 8.27 接货 → 9.1 拉升
> 来源：D 盘《郑瑞鑫擒拿妖股大法》PDF（摩尔金融 2015-09-01）

---

## 一句话定位

> **妖股研究 = 吸筹 + 洗盘 + 倒手 + 接货 + 黄金坑 + 买卖点全链条深度跟踪。** 擒拿妖股的核心不是涨停板买入，而是"读懂主力在做什么"——地板吸筹、横盘震荡、尾盘跳水，全是主力在洗劫带血筹码。

## 核心观点

1. **擒拿妖股 = 长期跟踪 + 一周深研**：作者强调"长期跟踪我的粉丝朋友应该知道我对银润控股的分析及跟踪所花费的精力"
2. **洗盘大法五招连发**：置之死地 → 地板吸筹 → 割肉减少 → 横盘震荡大虐法 → 尾盘跳水法，五招是同一主力的连贯动作
3. **吸筹期认准举牌方底牌**：紫光集团买进均价 35.36 元/股 + 承诺 6 个月不减持 + 12 个月内可能继续增持 = 强支撑
4. **题材组合 = 收购 + 举牌**：学大教育 100%（23 亿）+ 清华控股入主 + 实际控制人变更为教育部，三层题材叠加
5. **黄金坑 = 长期盘整 + 突然放量 + 缩量回踩**：低位出现大胆买入，"轻轻松松半个月"
6. **市值 + 题材对比 = 估值锚定**：银润 36.3 亿市值 vs 三无全通 122 亿，"单凭学大教育便远胜三无全通"
7. **买股不凭感觉凭价格**：跌停开盘大胆介入，或低开 -7% 介入

## 擒拿妖股实战五步法

| 步骤 | 名称 | 关键判断 | 郑瑞鑫具体操作 |
|------|------|----------|----------------|
| 1 | 洗盘识别 | 盘口语言 + 量价 | 5 种洗盘手法识别 |
| 2 | 吸筹锁定 | 举牌公告 + 大宗交易 | 紫光集团 575 万股（35.36 元） |
| 3 | 倒手分析 | 龙虎榜买卖差 | 8.21 净卖出 12942 万 = 庄家倒手 |
| 4 | 接货判断 | 主力成本 | 8.27 武汉青年路单家独大 23332 万 |
| 5 | 黄金坑捕捉 | 缩量回踩 + 低位 | 9.1 涨停开盘，T+1 获利最高 30% |

## 洗盘大法 5 招式（盘口语言）

### 招式 1：置之死地
- 早盘利用大盘恐慌，集合竞价期间**透空**（大幅低开打压）
- 少量筹码四两拨千斤

### 招式 2：地板吸筹
- 跌停处大肆买入，但不拉升
- 接近地板价不断吸筹

### 招式 3：割肉减少
- 11:30 左右扫货
- 散户割肉人数减少时，主力反向买入

### 招式 4：横盘震荡大虐法
- 横盘震荡期间，**下跌都无量**
- 不懂盘口语言的人此时纷纷交出带血筹码

### 招式 5：尾盘跳水法
- 横盘震荡 + 尾盘跳水
- **下跌时都不带大量**（盘口语言：主力在吸筹）

> 关键洞察：5 招式连贯使用，盯盘的人会被洗出去，但量能特征（缩量下跌）是识破关键

## 银润投资题材三重奏

### 题材一：学大教育（核心想象空间）
- 2015 年 8 月定增 2.88 亿股（19.13 元/股）募资 55 亿元
- 23 亿收购学大教育 100%
- 17.6 亿设立国际教育学校投资服务公司
- 14.4 亿在线教育平台建设
- O2O 转型，传统教培 → 互联网+

### 题材二：实际控制人变更
- 深圳椰林湾转让 1500 万股（占总股本 15.59%）给西藏紫光卓远
- 紫光卓远为紫光集团全资子公司
- 实际控制人变更为**清华控股**，最终为**教育部**

### 题材三：紫光集团举牌
- 2015-08-31 公告：紫光集团下属公司买入 575 万股（占总股本 5.98%）
- 买进均价 35.36 元/股
- 12 个月内可能继续增持
- 6 个月内不减持
- 强支撑信号

## 经典案例：银润投资（000526）

### 阶段 1：连续 10 个一字板
- 8 月 10 日复牌后无视大盘，**连续 10 个一字板**
- 涨幅最高 135.8%

### 阶段 2：8.21 攀顶 + 倒手
- 8.21 攀至最高峰，**当日大盘大跌 4.27%**
- 主力"明知在大盘下降趋势，却空手接飞刀"——答案是主力在倒手
- 当日成交量 28.0643 万手（流通盘 96.20 万手）
- 净卖出资金 12942 万元（约 2.4 万手）
- 龙虎榜买卖差 12942 万

### 阶段 3：8.27 接货
- 兴业证券武汉青年路证券营业部**单家独大买入 23332 万**
- 但同家也卖出了 618 万
- 8-29 大中单买卖情况：
  - 买盘 36342 手（12899 万）
  - 卖盘 39382 手（4012 万）
  - 净流入 -3040 手

### 阶段 4：9.1 拉升
- 9.1 龙虎榜"买卖 7478.83 万元"
- 买二出现**溧阳路**（孙哥）
- "炒股不跟溧阳路即使神仙也枉然"

## 黄金坑买点

> 银润投资长期盘整，突然有一天放量上涨，尤其是放巨量上涨，然后缩量回踩，缩量回踩可以是一天，也可以是 2-3 天，如果这时候股价处于低位，那么大胆买入，因为这是一个黄金坑！轻轻松松半个月*！

## 买卖点（2015-09-01 当日分析）

| 维度 | 判断 | 具体数值 |
|------|------|----------|
| 大盘 | 15/30/60min MACD 全部出现量价背离 | 看涨 |
| 个股 | 极有可能低开，开在 MA5 之下 | 价格 37.24 = 低开 -2% |
| 介入点 1 | **跌停开盘** | 大胆介入 |
| 介入点 2 | **低开 -7%** | 非常合适 |
| 加仓法 | 作者与 Livemore 相似 | 不获利不加仓 |

## 选股/择时

- **题材组合 = 收购 + 举牌**：游资轮番操作
- **市值对比 = 估值锚定**：银润 36.3 亿 vs 三无全通 122 亿
- **复牌后一字板数量**：越多越好（银润 10 个）
- **举牌方承诺**：6 个月不减持 = 强支撑
- **溧阳路介入信号**：游资大资金进场

## 风控逻辑

- **5 招洗盘识别**：盘口量价是关键
- **不获利不加仓**：作者加仓法与 Livemore 相似
- **跌停价介入**：必须有强逻辑（举牌、收购、题材）
- **黄金坑模式**：盘整 + 放量 + 缩量回踩 + 低位
- **多周期 MACD 背离共振**：量价背离 = 短线看涨
- **不杜撰买点**：用龙虎榜 + 举牌公告 + 题材三重确认

## 溧阳路与妖股生态

> **炒股不跟溧阳路即使神仙也枉然**——这是孙哥的口碑定位

- 溧阳路以非常犀利的操盘大法出名
- **出货会一字断头**——风险高
- **拉升会拉得高到你自己都怕**——收益大
- 银润投资 9.1 溧阳路介入 = "后期有成妖的潜质"

## 金句

> 擒拿妖股大法 = 学习擒拿妖股方法 + 长期跟踪 + 耗时一周重点研析 + 内含实盘操作分析 + 个股买卖点分析 + 洗盘大法。

> 早盘利用大盘恐慌，在集合竞价期间进行透空，大肆打压股价，少量的筹码起到四两拨千斤的效果。

> 接着横盘震荡，请注意一个非常重要的细节，此时下跌都无量，说明此时盘面非常安全，但不懂盘口语言的人此时纷纷交出带血的筹码。

> 但如果你认真观察横盘阶段的分时图的话，你会发现下跌的时候都是不带大量的，盘口的语言已经告诉你，该股其实是主力在吸筹。

> 该股炒作热点非常多，收购+举牌的概念，必定引起游资轮番操作。

## 适用场景

- ✅ 复牌后连续一字板后开板的妖股（银润 10 个）
- ✅ 紫光集团这类有强支撑的举牌方
- ✅ 收购 + 实际控制人变更 + 行业想象空间三重题材
- ✅ 长期盘整后放量上涨 + 缩量回踩的"黄金坑"
- ✅ 跌停开盘 + 强逻辑（举牌、收购、题材）
- ❌ 没有龙虎榜数据的小盘股
- ❌ 没有题材支撑的纯题材股
- ❌ 没有主力护盘的弱势股

## 关联阅读

- **打板系统**：参见本批《打板手法系统》《JOKER 皇打板逻辑》
- **妖股识别**：参见本批《抓妖股概率》《5 分钟筛选牛股》
- **黄金坑 + 均线**：参见本批《均线_牛股深度学习》
- **溧阳路孙哥**：参见本批《盛夏阿凯_短线交易体系》（详述中信溧阳路）

## 与其他游资的呼应

- **溧阳路孙哥**：银润 9.1 介入的核心游资，"出货一字断头，拉升高到怕"
- **银河绍兴路赵老哥**：盛夏阿凯文中对比的"砸盘王"
- **盛夏阿凯**：本笔记的"擒拿妖股"与盛夏阿凯的"捉妖模式"形成方法论呼应
- **Asking**：妖股研究的耐心功夫与 Asking 的"等待"哲学一致
- **养家**：妖股情绪周期判断与养家"得散户心者得天下"互补

---

*笔记来源：D 盘《郑瑞鑫擒拿妖股大法》PDF（摩尔金融 2015-09-01）*
*整理日期：2026-06-25*
`,oneLine:`**妖股研究 = 吸筹 + 洗盘 + 倒手 + 接货 + 黄金坑 + 买卖点全链条深度跟踪。** 擒拿妖股的核心不是涨停板买入，而是"读懂主力在做什么"——地板吸筹、横盘震荡、尾盘跳水，全是主力在洗劫带血筹码。`,tags:[`妖股识别`,`洗盘识别`,`紫光举牌`,`妖股`]},{id:`P1P2_集合竞价_5分钟筛选牛股`,title:`集合竞价_5分钟筛选牛股`,category:`集合竞价`,source:`P1P2`,filename:`实战笔记_集合竞价_5分钟筛选牛股.md`,content:`# 实战笔记 · 集合竞价 5 分钟筛选牛股（补遗）

> 题材分类：集合竞价买入 / 强势股识别 / 早盘 5 分钟
> 作者：邢者（雪球 ID 与摩尔同名；公号"邢者股票池 xingzwgpc"）
> 性质：P0 已有《5 分钟筛选牛股》笔记，本笔记为 P1P2 批次同名文件（无优选课程网前缀）的独立整理版，侧重视觉化与盘中关键数据
> 来源：D 盘《集合竞价之干货：如何用 5 分钟黄金时间筛选到牛股》DOCX

---

## 一句话定位

> **9:20-9:24 这 5 分钟，是早盘黄金筛选时间。** 在这 5 分钟里快速来回切换 61/63 键（快速涨幅榜 + 短线精灵），从自选股中再筛 3-5 只加入重点观察。把握好这 5 分钟，筛选到好票，**就成功一半**。

## 核心观点

1. **9:15-9:20 是诱多诱空时段**：主力"闲的蛋疼"专门通过挂撤单吸引眼球，没有真实参考价值
2. **9:20-9:24 才是真信号**：不能撤单，**真实反映场内外资金博弈**
3. **早盘竞价买股的目标**：找到当天能涨停的强势股
4. **复盘 + 竞价 = 完整闭环**：复盘是必修课，竞价是弥补
5. **公告利好不适用**：管理层增持、收购兼并、年报预增——往往就是出货招数
6. **价格不能下跌翻绿**：逐步下坠型如果翻绿直接放弃

## 集合竞价时间分段

| 时段 | 规则 | 实战意义 |
|------|------|----------|
| 9:15-9:20 | 可挂单可撤单 | 主力的"诱多诱空"时间，**不要被表演迷惑** |
| 9:20-9:24 | 只能挂单不能撤单 | **核心观察窗口** |
| 9:24-9:25 | 撮合中 | 最终竞价价格形成 |
| 9:25-9:30 | 不能挂单不能撤单 | 等待开盘 |
| 9:30 | 正式开盘 | **从开盘到 9:35 是 5 分钟黄金筛选时间** |

## 强势股的两种竞价形态

### 形态 A：股价逐步推高型

| 条件 | 描述 |
|------|------|
| 1. 价格走势 | 集合竞价期间股价逐步加高，**最后 1 分钟**被大买单快速拉高 |
| 2. 量能 | 9.20 后成交量**逐渐缓慢放大**，红柱子连续排列，无空隙 |
| 3. 巨单 | 9.20 分前临时有巨单挂过涨停板 |
| 4. 趋势 | 上升通道 + 5 日均线多头排列 + **前 5 个交易日有过涨停记录** |

### 形态 B：股价逐步下坠型（仍有机会）

| 条件 | 描述 |
|------|------|
| 1. 高开下坠 | 9.20 前高开，9.20 后卖单逐渐增加 |
| 2. 价格下降 | 从 10-9% 缓慢下降到 5-4%，最后急落到 2-1% |
| 3. **不能下跌翻绿** | 翻绿直接放弃 |
| 4. 卖单量 | 最后 1 分钟卖单量要**缓慢增加**，突然加大就放弃 |
| 5. 开始买单 | 开始买单要**大**，**不能撤单** |
| 6. 开始价格 | 要高，最好是**涨停价** |

## 适用 / 不适用

- ✅ **适用**：复盘后已筛选的标的 + 题材股
- ❌ **不适用**：公告利好（管理层增持、收购兼并、年报预增）—— 这往往是出货的招数

## 邢者的实操方法

> 邢者的习惯就是：每晚复盘后筛选的股票池，会列入自选股，而次日的集合竞价期间，我会再筛选 3-5 只股票，快速加入自选股，做重点观察。在这 5 分钟里，我要快速地来回切换 61 键和 63 键，盯着快速涨幅榜和短线精灵，因为这 5 分钟是做超短的黄金时间段。

- **每晚复盘**：必修课，不复盘 = 上了战场不拿武器
- **次日集合竞价 5 分钟**：弥补复盘缺漏
- **61 键（快速涨幅榜）+ 63 键（短线精灵）** = 黄金筛选工具
- **筛选结果**：开盘前完成 3-5 只的二次精选

## 经典案例：太阳鸟（300123）

| 维度 | 详情 |
|------|------|
| 股票代码 | 300123 |
| 股票名称 | 太阳鸟 |
| 买入日期 | 2017-02-24 |
| 买入时间 | 09:30:16（开盘后 16 秒）|
| 买入价格 | 19.500 |
| 买入数量 | 20200.00 股 |
| 成交金额 | 393900.00 元 |
| 当日结果 | 6 分钟后涨停，**当日收益 11%** |

**买入逻辑**：
1. 邢者当晚复盘并没有发现它
2. 次日集合竞价发现异动，加入自选股
3. 开盘后迅速下单买入
4. 6 分钟后涨停

**题材逻辑（更深层）**：
- **四通股份**连板被关"小黑屋"（停牌核查）
- 市场需要再确立一个龙头
- 四通股份概念：填权 + 复牌补涨
- **金亚科技**（另一只复牌股）涨停，间接证明"复牌补涨"逻辑成立
- → 太阳鸟成为新的复牌补涨龙头

## 经典案例：太阳能（集合竞价涨停图形）

> 白色线段 = 集合竞价时间；红柱 = 买单（多），绿柱 = 卖单（少）

| 特征 | 具体表现 |
|------|----------|
| 红柱分布 | 较多，连续排列 |
| 绿柱分布 | 较少 |
| 红柱扩张 | 逐步扩大，空隙少 |
| 最后时刻 | 代表买单的红柱**突然变大** |
| 操作时机 | 9:25 结束到开盘这 5 分钟内筛选到自选股 |

## 选股方法

> 太阳鸟案例的逻辑：四通股份连板被关小黑屋 → 市场需要再确立一个龙头 → 复牌补涨概念 → 金亚科技的涨停间接证明逻辑成立。

- **复盘 + 竞价 = 完整闭环**
- **次新竞价 + 高送转跷跷板**：邢者多模式互补
- **公告利好排除**：管理层增持、收购兼并、年报预增等，**不适用本法**

## 风控逻辑

- **9:20 后才看真信号**：之前是主力的"诱多诱空"时间
- **价格翻绿直接放弃**：股价逐步下坠型
- **开始买单不能撤**：撤了就是诱多
- **公告利好不适用**：往往就是出货招数
- **5 分钟快筛 → 开盘后还要看分时**：竞价只是开始

## 金句

> 集合竞价真正有价值的时间段就是 9 点 20 分-24 分之间，因为按照规定，在 9 点 20 分之后的挂单是不能撤回的，这更能真实反映场内外资金的博弈。

> 9.20 分后成交量逐渐缓慢放大，红柱子连续排列，最好每个红柱子之间没有空隙。

> 做超短，每晚复盘是必修课，不复盘，次日去追热点，做题材，等于上了战场不拿武器，跟送死没有区别。

> 而次日的集合竞价选股，恰恰就会弥补这个缺失。

> 把握好这 5 分钟，筛选到好票，那就成功一半了。

> 9.20 分前高开，9.20 以后买单不减少，卖单逐渐增加，最后几分钟卖单超过买单，价格缓慢下降。

> 股价不能下跌，翻绿的话，直接放弃。

## 适用场景

- ✅ 早盘 9:20-9:24 的强势股筛选
- ✅ 复盘后 3-5 只目标股的快速补充
- ✅ 题材股/人气的竞价买入
- ✅ 启动日 K + 5 日均线上的标的
- ❌ 9:15-9:20 的虚假信号
- ❌ 公告利好股（往往是出货）
- ❌ 翻绿开盘的弱势股

## 关联阅读

- **集合竞价原理**：参见本批《看集合竞价》《集合竞价奥义》
- **卖股艺术**：参见本批《集合竞价_卖股勇气》（P1P2 独立整理版）
- **涨停判断**：参见本批《云意电气涨停》《抓妖股概率》
- **P0 已有的《5 分钟筛选牛股》**：可对照阅读

## 与其他游资的呼应

- **JOKER 皇**：本笔记是"5 分钟选股"，JOKER 皇的"188 元文章"是"竞价深读"
- **Asking**：选最强股 = 选股
- **养家**：复盘 + 竞价 + 情绪揣摩的结合

---

*笔记来源：D 盘《集合竞价之干货：如何用 5 分钟黄金时间筛选到牛股》DOCX（邢者）*
*整理日期：2026-06-25*
`,oneLine:`**9:20-9:24 这 5 分钟，是早盘黄金筛选时间。** 在这 5 分钟里快速来回切换 61/63 键（快速涨幅榜 + 短线精灵），从自选股中再筛 3-5 只加入重点观察。把握好这 5 分钟，筛选到好票，**就成功一半**。`,tags:[`集合竞价买入`,`强势股识别`,`早盘`,`5`,`分钟`]},{id:`P1P2_集合竞价_卖股勇气`,title:`集合竞价_卖股勇气`,category:`集合竞价`,source:`P1P2`,filename:`实战笔记_集合竞价_卖股勇气.md`,content:`# 实战笔记 · 集合竞价卖股：勇气和果断（补遗）

> 题材分类：集合竞价卖股 / 黑天鹅应对 / 虎口脱险
> 作者：邢者
> 性质：P0 已有《集合竞价卖股》笔记，本笔记为 P1P2 批次同名文件（无优选课程网前缀）的独立整理版，侧重盘中交割单与具体时间数据
> 来源：D 盘《集合竞价卖股：勇气和果断是最核心的要素》DOCX（邢者）

---

## 一句话定位

> **集合竞价卖股比买股简单，难在操作那一刹那是否具备勇气和果敢。** 买股是为了搭上强势车的车，卖股是为了躲避黑天鹅——学不会此招，关键时刻救不了命。

## 核心观点

1. **集合竞价卖股 = 虎口脱险**：躲避黑天鹅到来的救命招数
2. **3 种典型需要卖股的情况**：大盘极端行情 / 黑天鹅 / 强势股盘中跌停
3. **挂跌停价也无所谓**：最终成交价是开盘价，不是你委托的跌停价
4. **要果断预判 + 提前挂单**：9.25 之前输入比竞价还低的价格
5. **30% 翻红率是统计结果**：做 10 次对 7 次就是成功
6. **复牌股票开盘价 = 全天走向**：直接卖不用犹豫
7. **营业部通道速度决定能否成交**：黑天鹅时挂跌停价也难卖出

## 集合竞价卖股的 7 大信号

> 1、集合竞价期间，股价逐步下跌，最后 1 分钟，股价被大卖单快速打压。

| 条件 | 描述 |
|------|------|
| 1. 价格 | 最后 1 分钟，股价被大卖单快速打压 |
| 2. 量能 | 9.20 后成交量逐渐缓慢放大，绿柱子连续排列 |
| 3. 巨单 | 9.20 后有巨单挂过跌停板 |
| 4. 价格变化 | 9.24 最后几秒价格下降严重，跌幅从 2-1% → 4-3% |
| 5. 成交量 | 涨幅 10-9% → 6-3% → 最后 1 分钟涨幅 < 1% |
| 6. 终量 | 竞价的最终成交量**在万手以上** |

## 心理准备与操作纪律

> 选择竞价卖股，要有很强的心理素质，在开盘前 5 分钟时间里，你要果断预判这个价格应该是当日的最高价。

- **果断预判** = 这个价格是当日最高价
- **9.25 之前输入比竞价还低的价格**：确保成交
- **犹豫不决是大忌**："有的人总在卖点上犹豫不决"
- **挂跌停价也无所谓**：
  - 竞价规则：按价格优先、时间优先
  - 同一价格原则按申报先后顺序排列
  - 即使挂跌停价，**最终成交价是开盘价**

## 3 种典型需要卖股的情况

### 情况 1：大盘极端行情

> 2015 年股灾的时候，邢者当时也是结结实实的吃到了一个满仓跌停。

- **当晚分析研判**：大势已去
- **次日集合竞价全部卖出**：逃过股灾的一劫
- **"用此发，救我一条老命"**

### 情况 2：遭遇黑天鹅

> 但凡遇到这种情况，第一件事就是从被窝里爬起来。

- **打开炒股交易软件** → 夜市委托
- **跌停挂单**：跌停价在次日集合竞价时间报送给交易所
- **还要看营业部通道速度**：速度不行，挂跌停价也难卖出

### 情况 3：强势股的盘中跌停

> 比如今天四通股份的开盘，作为被关复牌的股票……

- **复牌股票的开盘价**：基本就能判断出全天走势方向
- **开盘 -3% 以上**：弱势信号
- **集合竞价卖股没错**：即使卖出后盘中反弹拉红，也不用后悔
- **盘中翻红率 < 30%**：做 10 次对 7 次就是成功

## 经典案例 1：四通股份（被关复牌）

- 集合竞价表现尤其重要
- 开盘在 -3% 以上 → 弱势信号
- 集合竞价卖股没有错误
- 即使卖出后盘中反弹拉红，也不用后悔

## 经典案例 2：廊坊发展（600149，2016-11-07）

### 委托单
- 委托日期：2016-11-07
- 委托时间：09:30:42
- 证券代码：600149
- 证券名称：廊坊发展
- 买卖标志：卖出
- 委托价格：38.380
- 状态说明：已成

### 走势背景
- 廊坊发展分时图：开盘 42.72（+9.99%），随后被砸至 35.51（-8.56%）
- 邢者 11 月 7 日复牌前**满仓持有**
- 集合竞价中就判断出**由强转弱的拐点到来**
- **连续涨停之路就要结束**
- 开盘瞬间填了一个比现价更低的价格 → 全部成交
- 如果晚 1 分钟，股价接回跌停，**几十万的利润灰飞烟灭**

## 经典案例 3：太阳鸟（300123）

### 委托单
- 委托日期：2017-02-27
- 委托时间：09:25:17
- 证券代码：300123
- 证券名称：太阳鸟
- 买卖标志：卖出
- 委托价格：21.600
- 委托数量：20200.00
- 状态说明：已成
- 成交价格：21.710
- 成交金额：438542.00

### 操作技巧
- 邢者 9:25 挂单
- 挂单价格 21.6，**比开盘价还低 1 毛**
- 委托价比开盘价低 → 开盘瞬间成交
- 开盘前几秒钟会有大单互杀，成交更容易

### 上一日买入
- 发生日期：2017-02-24
- 成交时间：09:30:16
- 证券代码：300123
- 证券名称：太阳鸟
- 买卖标志：买入
- 成交价格：19.500
- 成交数量：20200.00
- 成交金额：393900.00

### 盈亏计算
- 买入：19.500 × 20200 = 393900.00
- 卖出：21.710 × 20200 = 438542.00
- 盈利：44642.00，**约 11.3%**

## 选股/择时

- **9:20 后的真实信号**：集合竞价卖股的真信号
- **30% 翻红率**：统计概念，不必追求完美
- **强势股复牌的开盘价 = 全天走向**：用开盘价做判断

## 风控逻辑

> 集合竞价卖股难就难在，你操作的那一刹那，是否具备了勇气和果敢？

- **没有勇气和果敢 = 卖不到好价格**
- **挂跌停价也无所谓**：规则决定不会以跌停价成交
- **果断预判**：开盘前 5 分钟就要做决定
- **复牌股票开盘价 = 全天走向**：直接卖
- **黑天鹅 = 爬起来挂跌停**：不要等到开盘

## 金句

> 集合竞价买股是为了在强势股开盘前搭上车，而集合竞价卖股，邢者认为更多是为了躲避黑天鹅到来。

> 选择竞价卖股，要有很强的心理素质，在开盘前 5 分钟时间里，你要果断预判这个价格应该是当日的最高价。

> 有的人总在卖点上犹豫不决，其实，即使你挂跌停价也无所谓。

> 但凡遇到这种情况，第一件事就是从被窝里爬起来，打开炒股交易软件，夜市委托，跌停挂单。

> 集合竞价卖股不难，至少要比集合竞价买股简单很多。

> 竞价卖股难就难在，你操作的那一刹那，是否具备了勇气和果敢？

## 适用场景

- ✅ 大盘极端行情（次日竞价清仓）
- ✅ 黑天鹅利空（夜市委托跌停）
- ✅ 强势股复牌走弱
- ✅ 由强转弱拐点（开盘瞬间卖）
- ❌ 犹豫不决的卖点
- ❌ 期待反弹的"等等看"
- ❌ 不开夜市委托的散户

## 关联阅读

- **集合竞价原理**：参见本批《看集合竞价》《集合竞价奥义》
- **5 分钟筛选**：参见本批《集合竞价_5分钟筛选牛股》（P1P2 独立整理版）
- **P0 已有的《集合竞价卖股》**：可对照阅读

## 与其他游资的呼应

- **JOKER 皇**：本笔记是"卖股奥义"，JOKER 皇的"188 元文章"是"买股奥义"
- **Asking**：不涨停即出 = 集合竞价卖股的简化版
- **令胡冲**：放弃尾端 = 集合竞价卖股的纪律版
- **养家**：崩溃后清仓 = 大盘极端行情的集合竞价清仓

---

*笔记来源：D 盘《集合竞价卖股：勇气和果断是最核心的要素》DOCX（邢者）*
*整理日期：2026-06-25*
`,oneLine:`**集合竞价卖股比买股简单，难在操作那一刹那是否具备勇气和果敢。** 买股是为了搭上强势车的车，卖股是为了躲避黑天鹅——学不会此招，关键时刻救不了命。`,tags:[`集合竞价卖股`,`黑天鹅应对`,`虎口脱险`]},{id:`P1P2_集合竞价_奥义188元版`,title:`集合竞价_奥义188元版`,category:`集合竞价`,source:`P1P2`,filename:`实战笔记_集合竞价_奥义188元版.md`,content:`# 实战笔记 · 集合竞价奥义（188 元文章 · 实战细节补充版）

> 题材分类：集合竞价 / 早盘预判 / 翘板/复牌博弈
> 游资/作者：JOKER 皇（早期作品，原文 188.80 元/篇）
> 席位/身份：摩尔金融大 V；知乎/摩尔撰稿人
> 关联资料：参见本批《看集合竞价》《5分钟筛选牛股》《集合竞价卖股》《JOKER皇打板逻辑》
> 来源：用户上传《188元文章-集合竞价的奥义.pdf》

---

## 一句话定位

> **全天看早盘，早盘看竞价。** 一只股的集合竞价隐藏了太多秘密，甚至可以直接决定该股当天的走势、是否涨停——本文是 188 元文章实战细节的完整复原。

## 核心观点

1. **竞价反应的是预期**：集合竞价可以预判早盘甚至全天走势。
2. **9:20-9:25 才是真信号**：之前可撤单，**9:20 后不能撤单**，这段时间的买卖才真实。
3. **9:25 后委托无效**：25 分之后委托虽会上报，但**不会被交易所接受**。
4. **低开 = 恐慌 = 还会下挫**：情绪面的低开会延续，不及预期开盘即卖。
5. **隔夜委托的"先到优势"**：晚上挂涨停价排单，利用 9:15-9:20 可撤单的规则"先占位"。
6. **缩量涨停第二天大幅低开 → 开盘甩卖**：竞价已表面接下来走势。
7. **竞价超预期 = 强买入信号**：翘板/复牌/利好的第二天，竞价要"成交量大 + 挂单价高"。

## 集合竞价的几个时间节点

| 时段 | 规则 | 操作 |
|------|------|------|
| 9:15-9:20 | **可挂单、可撤单** | 主力的"诱多诱空"时间 |
| **9:20-9:25** | **只能挂单、不能撤单** | **核心观察窗口** |
| 9:25-9:30 | 不能挂单、不能撤单 | 等待开盘 |
| 9:30 | 正式开盘 | 集合竞价撮合完成 |

## 集合竞价的两种典型情况

| 类型 | 表现 | 含义 |
|------|------|------|
| **竞价涨停板** | 一开始涨停后回归正常 | 主力试盘，可能拉升 |
| **竞价低开** | 比预期大幅低开 | 主力出货或情绪恐慌，开盘即卖 |

## 关键操作：开盘后分时应对

> 如果更高级一点的，比如发现指数是有上拉趋势，个股可能会先上再下，那么可以等一下，观察盘口情况。

**新海股份（8 月 1 日）案例**：
- 正常应是低开 **-1 个点** → 实际早盘竞价 **-4 个点**（异常）
- 盘口特征：大单恐慌砸、小单买 → 股价小幅拉升只因卖盘未出尽
- **小拉升时全部砸出**（中线做 T：-6 接回，T 到 2 个点利润）

## 短线超预期案例（竞价 = 强买入信号）

| 股票 | 情况 | 表现 | 结果 |
|------|------|------|------|
| **特力 A**（000025） | 2015.10.13 全天封死跌停尾盘撬板 | 14 日早盘买盘直接拉红盘 | 买盘极强 |
| **兔宝宝** | 2015.10.19 复牌跌停撬板，22% 获利盘 | 第二天集合竞价大幅高开 | 无视抛盘 |
| **华源包装** | 2016.01.18-19 撬板后大幅波动 | 19 日竞价承接住获利盘、挂单价高 | 30 分钟开盘价即可买入 |
| **光华科技** | 02.26 缩量涨停 | 第二天本应高开但大幅低开 | 开盘甩卖（缩量涨停后的大跌） |

## 隔夜委托的具体玩法

> 晚上找出有消息或复牌股票，判断出预期有可能涨停的股，**挂涨停价去排**：

- **9:15 之前排单靠前** = 占位优势
- 如果 15 分钟后资金强顶加单 → 坐享主多资金护盘
- 如果封单不够或撤单 → 跟随撤单
- **核心：就算没有涨停反正可以撤单**

## 风控逻辑

- **竞价反映预期**：早盘低开 → 还会继续下挫
- **缩量涨停第二天大幅低开**：大盘下跌趋势下强势股补跌
- **盘中判断"是出货还是洗盘"**：
  - 出货：倾斜向下 45 度角
  - 洗盘：股价围绕均线做 **2% 幅度的锯齿型波动**
- **竞价超预期的关键**：
  - 成交量大（承接住昨天大量获利盘）
  - 挂单价高（如翘板后第二天低开 -3 是正常，超预期应高于此）

## 经典案例

- **新海股份**（8.1 高开低走）→ 竞价 -4% 异常 → 开盘即卖（中线 -6 接回做 T）
- **光华科技**（02.26）→ 缩量涨停 → 第二天大幅低开 → 开盘甩卖
- **华源包装**（01.18-19）→ 撬板后 19 日竞价超预期 → 30 分钟开盘价买入
- **特力 A**（000025，2015.10.13-14）→ 跌停撬板 → 第二天买盘强拉红盘
- **兔宝宝**（2015.10.19-20）→ 复牌跌停撬板 → 第二天大幅高开

## 金句

> 全天看早盘，早盘看竞价。

> 既然知道了这个前提，那么我们就可以从竞价预判早盘的走势，因为低开代表的情绪的恐慌，这种低开代表着还会继续下挫。

> 竞价已经表面了接下来的走势，所以开盘甩卖无疑。

> 这里可以看出，竞价的超预期通常都可以带来拉升至涨停板，这里观察竞价后开盘买入可以获得远超打板的利润。

> 隔夜委托：晚上找出有消息或者复牌股票，判断出预期有可能涨停的股，挂涨停价去排。

> 25 分之后你的委托虽然会上报，但不会被交易所接受。

## 适用场景

- ✅ 当日操作的预判（早盘就能定型）
- ✅ 撬板/复牌/利好的次日判断
- ✅ 缩量涨停的次日开盘判断
- ✅ 隔夜委托的排单机会
- ❌ 9:15-9:20 的诱多诱空（要识别主力的"表演"）
- ❌ 9:25 之后的委托（交易所不接）

## 关联阅读

- 早盘选股：本批《5 分钟筛选牛股》《怎样看集合竞价》
- 卖股：本批《集合竞价卖股》
- 排板：本批《JOKER 皇打板逻辑》（同人）
- 锯齿洗盘：本批《云意电气涨停》（出货 vs 洗盘的 2% 锯齿判断）
- C 盘《JOKER 皇心法_深度研读报告》

## 与其他游资呼应

- **JOKER 皇**（本作者）：本篇 188 元文章是其早期作品，与其 588 元的《涨停板打板逻辑手法全解析》形成"早盘预判 + 打板"的完整体系
- **炒股养家**："竞价反应的是预期"和养家"市场情绪揣摩"维度相通
- **Asking / 令胡冲**：竞价决定开盘与 Asking"开盘半小时的板"形成互补
- **佛山系（撬板）**：本批《抓妖股概率》中华泰荣超路擅长撬跌停板，**本批《集合竞价奥义》的翘板次日判断**就是为佛山系撬板接力所用

---

*笔记来源：用户上传《188元文章-集合竞价的奥义.pdf》*
*整理日期：2026-06-25*
`,oneLine:`**全天看早盘，早盘看竞价。** 一只股的集合竞价隐藏了太多秘密，甚至可以直接决定该股当天的走势、是否涨停——本文是 188 元文章实战细节的完整复原。`,tags:[`集合竞价`,`早盘预判`,`翘板`,`复牌博弈`]},{id:`P1P2_集合竞价_怎样看`,title:`集合竞价_怎样看`,category:`集合竞价`,source:`P1P2`,filename:`实战笔记_集合竞价_怎样看.md`,content:`# 实战笔记 · 怎样看集合竞价（庄家行为学 + 8 步选股法）

> 题材分类：集合竞价 / 庄家行为学 / 早盘挂单
> 游资/作者：MACD 股票论坛（散户操盘经验贴）
> 席位/身份：散户视角，但具备完整技术体系
> 关联资料：参见本批《集合竞价奥义》《5分钟筛选牛股》《集合竞价卖股》《打板手法系统》
> 来源：用户上传《怎样看集合竞价.docx》

---

## 一句话定位

> **庄家某日要运作那只股票就一定会控制集合竞价**——本文是从"庄家行为学 + 8 步选股法 + 撮合规则 + 撤单陷阱"四个维度系统拆解集合竞价的散户视角实战贴。

## 核心观点

1. **庄家操控从竞价开始**：开盘涨停让你买不到，跌停开盘让你卖不出，高开大量出货让你买在最高价，低开洗盘让你卖在最低价。
2. **竞价涨停的两种目的**：
   - **吸引眼球 → 派货**（卖一卖二均匀卖盘 → 大量开盘）
   - **试盘动作**（9:20 前撤掉涨停挂单）
3. **8 步选股法**（开盘前到开盘 10-15 分钟内）
4. **委托价格技巧**：10 元以下开盘价 +0.1；10 元以上开盘价 × 1.015
5. **优先规则**：**价格第一 > 时间第二 > 数量第三**
6. **9:15 前挂单主力优先**：主力挂单数量大 → 先成交主力
7. **撮合成交三原则**：最大成交量 / 全部成交 / 至少一方全部成交
8. **停牌复牌抢板技巧**：10:29:20 挂涨停价买入（10:29:30 系统才开）

## 集合竞价的关键时段规则

| 时段 | 挂单 | 撤单 | 操作要点 |
|------|------|------|----------|
| 9:15-9:20 | ✅ | ✅ | 主力"诱多诱空"时间 |
| **9:20-9:25** | ✅ | **❌** | **核心观察窗口** |
| 9:25-9:30 | ❌ | ❌ | 等待开盘 |
| 9:30 | — | — | 正式开盘撮合 |
| 10:29:30 | — | — | 停牌一小时复牌的系统打开时间 |

## 集合竞价的成交价格三原则

> ①可实现最大成交量的价格
> ②高于该价格的买入申报与低于该价格的卖出申报全部成交的价格
> ③与该价格相同的买方或卖方至少有一方全部成交的价格
>
> 两个以上价格符合上述条件 → **未成交量最小的申报价格为成交价格**；仍有两个以上 → **中间价为成交价格**

## 8 步选股法（具体操作）

| 步骤 | 时间 | 操作 |
|------|------|------|
| 1 | 开盘前 | 通过证券报等渠道选入自选股（如大证券报推荐） |
| 2 | 开盘价出来后 | 判断大盘当日走势 |
| 3 | 9:25 后 | 选首笔量大、量比大的个股，记代码 |
| 4 | 9:25-9:30 | 浏览日/周 K 线，复选技术面 |
| 5 | 9:30 开盘 | 盯成交量是否连续放大，卖一/二/三是否三四位数大单 |
| 6 | 9:30-9:40 | 大单上攻 → 立即打入比卖三更高的买入价 |
| 7 | 开盘 10 多分钟后 | 有回档时买入 |
| 8 | 开盘 10-15 分钟后 | 经验不足者更安全 |

## 委托价格技巧

> 一个股票符合自己的集合竞价条件时，如果你的单子能够在 9:25 以前委托成功，**一般可以打一个比较高的价格，因为它会以开盘价成交**。

| 价格区间 | 委托方式 |
|----------|----------|
| **10 元以下** | **开盘价 + 0.1 元** |
| **10 元以上** | **开盘价 × 1.015**（开盘价 + 开盘价 × 0.015） |

> 开盘价出来后马上委托。若犹豫几分钟，就不好说了。

## 挂单的三个变量

| 变量 | 影响 |
|------|------|
| **大盘趋势** | 大盘不好 + 高位 → 开盘后易出下影线 |
| **股价高低** | 价格低，很少有下影线；价格出人意料之高的，往往下探留下影线 |
| **股票质地** | 必炒的股票（机构/游资抢筹）→ 无下影线，可开盘后 +1.5% 挂单保证成交 |

## 风控逻辑

- **避开 9:15-9:20 庄家诱多**：9:20 偷偷撤单 → 散户接盘
- **跌停板诱空**：挂跌停后撤单恢复正常 → 恐吓散户交出筹码
- **委托价不宜过高**：开盘后下影线可能给回踩机会
- **必炒股开盘后挂高 1.5%**：宁可追高 1.5% 也要保证成交
- **挂涨停/跌停价的实际成交价不是所挂价**：是 9:25 撮合的**开盘价**

## 经典案例

| 案例 | 股票 | 日期 | 现象 | 启示 |
|------|------|------|------|------|
| **涨停大量出货** | **国投电力** | 2009.03.06 | 涨停开始到大量开盘 | 价格逐步走低 + 成交量逐步增大 → 高开下跌 |
| **涨停试盘** | **瑞泰科技** | 2009.03.05 | 涨停挂单后撤单 | 价格和成交量回到正常 → 拉升涨停 |
| **诱多后暴跌** | **神马实业** | 10.26 | 9:18 在 11.99 价位 1734 手 → 9:19 变 54 手/11.08 | 典型引诱散户，**当日跌 7.65%** |
| **复牌抢板** | — | — | 10:29:20 挂涨停价 | 10:29:30 系统打开 → 抢先买入复牌涨停股 |

## 金句

> 集合竞价是一天股价运行的开始。

> 庄家运作股票目的却不相同……很多情况下庄家利用集合竞价来实现令散户痛苦的目的。

> 9点25分才是集合竞价期间唯一一次真正的成交，所以会显示成交笔数。

> 价格第一优先，时间第二优先，还有一个数量第三优先。

> 集合竞价期间最好不要撤单，成功概率很小。

> 有些庄在9：15～9：20期间挂大单买入，引诱散户，到了9：20单子被他们偷偷撤了，这种股票很可能会跌，千万不要碰！

> 营业部在每个交易日的9时5分左右,会将营业部的转换系统打开, 9时15分准时传送至交易所电脑主机。

## 适用场景

- ✅ 早盘选股（开盘前 8 步法）
- ✅ 庄家行为识别（诱多/试盘/出货）
- ✅ 委托价精准设置（10 元分界）
- ✅ 停牌复牌抢板（10:29:20 挂单）
- ✅ 涨停跌停板的撮合规则利用
- ❌ 9:15-9:20 跟随庄家挂单（诱多诱空）
- ❌ 9:25 之后委托（交易所不接）
- ❌ 撤单操作（成功率低）

## 关联阅读

- 早盘预判：本批《集合竞价奥义》（JOKER 皇）
- 5 分钟筛选：本批《5 分钟筛选牛股》
- 卖股：本批《集合竞价卖股》
- 排板：本批《JOKER 皇打板逻辑》
- C 盘《散户操盘心法_深度研读报告》

## 与其他游资呼应

- **JOKER 皇**（本批《集合竞价奥义》）："9:20-9:25 才是真信号"完全一致
- **炒股养家**："市场情绪揣摩"在本贴体现为"庄家行为学"
- **Asking / 令胡冲**："开盘半小时的板"与本贴 8 步法中的 6-8 步相通
- **佛山系（诱多/撬板）**：本贴"国投电力 2009.03.06"和"神马实业 10.26"是佛山系惯用手法
- **孙哥/赵老哥**："必炒的股票"通常有这些游资的身影

---

*笔记来源：用户上传《怎样看集合竞价.docx》*
*整理日期：2026-06-25*
`,oneLine:`**庄家某日要运作那只股票就一定会控制集合竞价**——本文是从"庄家行为学 + 8 步选股法 + 撮合规则 + 撤单陷阱"四个维度系统拆解集合竞价的散户视角实战贴。`,tags:[`集合竞价`,`庄家行为学`,`早盘挂单`]},{id:`P1P2_骑在牛股_手记`,title:`骑在牛股_手记`,category:`高手手记`,source:`P1P2`,filename:`实战笔记_骑在牛股_手记.md`,content:`# 实战笔记 · 骑在牛股上（打板体系与资金曲线管理）

> 题材分类：打板战法 / 龙头接力 / 资金曲线
> 游资/作者：骑在牛股上（淘股吧 ID）
> 风格特征：2012-2014 年从 17 万起步 → 2014.11 资金 600 万 → 2014.12 资金 1000 万
> 关联资料：P0《实战笔记_乔帮主交割单》、P0《实战笔记_打板手法系统》
> 来源：D 盘《骑在牛股上手记》

---

## 一句话定位

> **放弃低吸，专注打板，没票就空仓，坚决执行。** —— 2 年多持续盈利，月复合收益率 18%，验证"老章/徐翔/asking 模式"可复制。

## 核心观点（5-8 条）

1. **放弃低吸，专注打板**——明确自己的方法论边界。
2. **没票就空仓，坚决执行**——空仓是超短的常态，不是失败。
3. **正确 vs 赚钱**：不要去想着赚多少钱，应该想交易是正确还是错误的。
4. **月复合 18% = 2 年 50 倍**："每个月只要赚 18%，2 年就是 50 多倍"——复利的力量。
5. **控制回撤 = 控制自己的心**："打江山需要进攻能力，守江山需要牛逼的心"。
6. **赚大钱的都在行情好要大干快上**，没机会就只看，有机会赚点生活费。
7. **分仓 = 抗特停黑天鹅**：满仓最大问题是特停后连续一字跌停（如重庆啤酒）。
8. **关注人气、关注赚钱效应**：龙头股和妖股的波动都是非常态高速运行。

## 仓位管理

| 时点 | 资产 | 仓位 | 备注 |
|------|------|------|------|
| 2013.10.6 | 1,665,263 | 满仓 | 600825 新华传媒 19.79 万股 8.383 |
| 2013.10.8 | 1,681,830 | 空仓 | 卖出新华传媒盈利 15,950.55 |
| 2013.10.9 | 1,658,400 → 1,802,124 | 重仓 | 600717 天津港 20.5 万股 8.17 |
| 2013.10.10 | 1,802,124 | 空仓 | 卖出天津港盈利 120,294.23 |
| 2013.10.11 | 1,660,798 | 重仓 | 600756 浪潮软件 9.32 万股 19.24（亏损出局 -137,597.87） |
| 2013.10.14 | 1,693,033 | 空仓 | 卖出浪潮软件 |
| 2013.10.15 | 1,687,317 | 重仓 | 601515 东风股份 7.38 万股 22.85 |
| 2013.10.17 | 1,686,993 | 空仓 | 卖出东风股份 |
| 2013.10.18 | 1,686,467 | 重仓 | 600536 中国软件 3.81 万股 44.04 |
| 2013.10.21 | 1,854,107 | 重仓 | 中国软件浮盈 167,113.88 |
| 2013.10.22 | 1,795,433 | 持有 | 中国软件浮盈 108,439.88 |
| 2014.9.3 | 5,340,030 | 满仓 | 000507 珠海港 31.26 万股 5.661 + 600317 营口港 41.49 万股 4.271 |
| 2014.9.4 | 5,511,594 | 满仓 | 600599 熊猫烟花 17.83 万股 21.171 + 002261 拓维信息 6.72 万股 |
| 2014.11 | 6,000,000+ | - | 资金上 600 万，实盘停止 |
| 2014.12 | 10,000,000+ | - | 资金上 1000 万 |

## 选股方法

| 要素 | 要点 |
|------|------|
| **人气股** | 群众基础好、价格低反而是优势 |
| **封单** | 显示多头主力的实力 |
| **板块领涨** | 同板块多个跟风涨停 = 市场认可该热点 |
| **历史股性** | 涨停过的票，人气所在 |
| **量能** | 多关注量能，多关注人气 |
| **不做跟风** | "近期 3 笔操作亏损的共性：都不是当天最强的那只" |

## 风控逻辑

- **只买领涨**："我只买领涨，跟风的状况百出"
- **打板的核心 = 人气所在**："就算今天收盘没封住，明天大概率再次冲击新高，无他，人气所在"
- **没封住也要看次日**："买连板票的好处就是你不用担心有人在前一天涨停板上埋伏你"
- **分仓抗特停**："满仓的最大问题是特停，然后出现类似重庆啤酒一样连续一字跌停"
- **回调时不参与看不懂的股票**："你会发现自己潜心研究的龙头战法在实战中很难应用"
- **二六三 / 同洲电子 / 新华传媒 / 浪潮软件 / 东风股份** 等交割单展示了"封不牢"和"亏损"两类常见陷阱

## 经典案例

### 2013.9-10 月打板连续操作

| 日期 | 股票 | 操作 | 数量 | 价格 | 结果 |
|------|------|------|------|------|------|
| 9.3 | 上海钢联 | 打板 | - | - | 启动期 |
| 9.4 | 新疆城建 | 打板 | - | - | - |
| 9.5 | 上港集团 | 网络延迟没买到 | - | - | 撤单后打板辉隆股份 |
| 9.6 | 永安林业 | 打板 | - | - | - |
| 9.9 | 海通证券 | 交易失误 | - | - | - |
| 9.10 | 上实发展 | 打板 | - | - | - |
| 9.10 | 秦岭水泥 | 打板 | - | - | - |
| 9.12 | 香溢融通 | 打板 | - | - | - |
| 9.16 | 华谊嘉信 | 打板 | - | - | "最近打的板经常封不牢" |
| 9.18 | 上港集团 | 集合竞价买入 | - | - | - |
| 9.23 | 二六三 | 打板 | - | - | "大幅度打开了" |
| 9.24 | - | 止损 | - | - | "今天止损了，空仓" |
| 9.25 | - | 空仓 | - | - | "辉隆股份犹豫了，没买" |
| 9.26 | 同洲电子 | 打板 | - | - | - |
| 9.27 | 同洲电子 | 集合竞价卖出 | - | - | "空仓！" |
| 9.30 | 新华传媒 | 打板 | 19.79 万 | 8.380 | 资产 1,665,263 |
| 10.8 | 新华传媒 | 卖 | 19.79 万 | 8.475 | 盈利 15,950.55 |
| 10.9 | 天津港 | 集合竞价买入 | 20.5 万 | 8.170 | 资产 1,802,124 |
| 10.10 | 天津港 | 卖 | 20.5 万 | 8.772 | 盈利 120,294.23 |
| 10.11 | 浪潮软件 | 打板 | 9.32 万 | 19.240 | "打开幅度大，亏得心服口服" → -137,597.87 |
| 10.15 | 东风股份 | 打板 | 7.38 万 | 22.847 | "最后一单坑爹" |
| 10.18 | 中国软件 | 打板 | 3.81 万 | 44.044 | 浮盈 167,113.88 |
| 10.22 | 中国软件 | 持有 | 3.81 万 | 46.89 | "短线思维和超短线思维的冲突" |
| 10.23 | 中国软件 | 继续持有 | 3.81 万 | - | "明天如果反包还好拿住" |

### 2014.9 千万之路
| 日期 | 股票 | 操作 | 成本价 |
|------|------|------|--------|
| 9.3 | 000507 珠海港 | 持有 | 5.661 |
| 9.3 | 600317 营口港 | 持有 | 4.271 |
| 9.3 | 002456 欧菲光 | 持有 8 股 | 25.744 |
| 9.4 | 600599 熊猫烟花 | 持有 17.83 万 | 21.171 |
| 9.4 | 002261 拓维信息 | 持有 6.72 万 | 20.5 |
| 9.10 | 601018 宁波港 | 集合竞价卖 | "为了开融资融券" |
| 9.11 | 002423 中原特钢 | 持有 20.81 万 | 14.230 |
| 9.11 | 601118 海南橡胶 | 持有 34.13 万 | 3.x |
| 9.12 | 601118 海南橡胶 | 止损 | "海南橡胶止损了" |
| 9.12 | 002423 中原特钢 | T 出 4.4 万 | 14.060 |

### 2014.12 千万时刻
| 日期 | 股票 | 操作 | 备注 |
|------|------|------|------|
| 11.29 | 600291 西水股份 | 持有 | "资金刚好上 600 万" |
| 11.29 | - | - | "实盘停止了" |
| 12.1 | 600291 西水股份 | 临近收盘卖出 | 成本 18.76 → 卖 17.81（亏损 -5.06%） |
| 12.1 | - | - | "我确实看好，我是最后临近收盘才卖出的" |

## 历史名票：长线 → 短线 → 超短的进化

> 历史上成功操作龙头股份，隆平高科，登海种业，精工科技，晋亿实业等名票，每只获利 30% 以上，晋亿实业几个交易日甚至获利 60%。

> **本人一开始做长线，然后做中线，接着做短线，都取得不错的收益，但是与理想相去甚远。超短线让我真正感受到炒股票的乐趣和资金增长带来的喜悦。**

## 金句

> 放弃低吸，专注打板，没票就空仓，坚决执行。

> 我只买领涨，跟风的状况百出。

> 我从不看指标，我只感受盘面的强弱作为买卖的依据，最多看看成交量，仅此而已。

> 在风险收益比低的点位入场，在风险收益比高的位置出局。

> 我经常会买的股票都是市场人气股，都是市场合力。

> 打板的核心就是人气所在，是领涨，就算今天收盘没封住，明天大概率再次冲击新高，无他，人气所在！

> 简单的一个涨停买入，次日冲高卖出或割肉止损，然后再涨停买入，这才是应有的节奏。

> 不要去想着赚多少钱，你应该想你的交易是正确的还是错误的。

> 打江山需要强有力的进攻能力，守江山则需要你有一颗牛逼的心。多数人都在不断的学习如何进攻，却鲜有人学习如何控制自己的心。

> 资金回撤较大主要是两种情况：①大盘环境非常不好，几乎什么板都开 ②大盘环境亢奋的时候，因为连续的盈利放松了警惕。

> 太多内心的活动容易造成主观偏见，而偏见一旦形成，就再也无法顺应市场。

> 行情总在犹豫不决中展开，在高度认同时戛然而止。

> 我对稳定获利的理解是不参与自己能力范围外的行情和股票，宁可错过不可做错。

> 真正的决定我们最后成就的，从来都不是市场是涨还是跌，而是是否具备正确的交易理念和交易纪律。

## 适用场景

- ✅ 打板战法 + 龙头战法
- ✅ 2-3 个月持续盈利经验后的资金增长期
- ✅ 心态能承受"封不牢"和"次日止损"
- ✅ 资金 50 万-1000 万的成长路径
- ❌ 弱势行情中跟风打板（"弱势环境下，跟风打板就是闷"）
- ❌ 短线持股习惯（"短线 80% 都是铩羽而归"）
- ❌ 满仓打板无分仓（特停黑天鹅）

## 关联阅读

- P0《实战笔记_乔帮主交割单》——同为打板
- P0《实战笔记_打板手法系统》——方法论
- P0《实战笔记_孤独牛背控制回撤》——"守江山=控制回撤"
- P0《实战笔记_5分钟筛选牛股》——选股层
- P1P2《实战笔记_著名刺客_手记》——同期打板
- P1P2《实战笔记_短线之王_龙规实战篇》——同为"半年翻 N 倍"
- C 盘 26 位游资心法中的"赵老哥"早期模式

## 与其他游资的对比

| 维度 | 骑在牛股上 | Asking | 乔帮主 | 著名刺客 |
|------|-----------|--------|--------|----------|
| 资金曲线 | 17万→1000万（2年） | 10万→几千万 | 稳定 | 数百倍 |
| 风格 | 打板龙头 | 龙头+守株待兔 | 龙头 | 题材打板 |
| 仓位 | 满仓 → 后期半仓 | 半仓试错 | 单股集中 | 单股重仓 |
| 特停态度 | 后期分仓抗特停 | 不特别强调 | - | 经常遇特停 |
| 历史 | 长线→中线→短线→超短 | 期货→短线→龙头 | 短线 | 长线→超短 |
| 周期 | 1-2 天 | 1-2 天 | 1-3 天 | 1-2 天 |

---

*整理日期：2026-06-25*
*来源：骑在牛股上手记.pdf*
`,oneLine:`**放弃低吸，专注打板，没票就空仓，坚决执行。** —— 2 年多持续盈利，月复合收益率 18%，验证"老章/徐翔/asking 模式"可复制。`,tags:[`打板战法`,`龙头接力`,`资金曲线`]},{id:`P1P2_龙飞虎淘股吧全集`,title:`龙飞虎淘股吧全集`,category:`顶级游资心法`,source:`P1P2`,filename:`实战笔记_龙飞虎淘股吧全集.md`,content:`# 实战笔记 · 龙飞虎·淘股吧全集

**题材分类**：龙头战法 / 心态成长 / 防守反击
**游资**：龙飞虎（真实 ID 揭示：龙飞虎 = 克拉美书，同一人，80 后，江苏席位）
**席位**：江苏系短线游资
**身份/体量**：2009.06.11 起步 100 万 → 2011.07 突破 800 万 → 2014-2015 股灾期公开反思
**关联资料**：龙飞虎在淘股吧发表的 5 年完整实盘帖（2009-2014），含第三届/第四届/第五届职业炒手杯全程实录
**来源**：\`/app/data/所有对话/主对话/用户上传/龙飞虎淘股吧全集.pdf\`（21.4MB，6447 行原文）

---

## 一句话定位

**"梦想在上，孤独在下"**——8 年抗 5 个月第一次翻番，10 个半月第三次翻番，2011.07 帖子被封后隐入市井，2014-2015 股灾期以"如能放下，何尝不是一种解脱"自我救赎。

## 核心观点（8 条）

1. **多战法并用**："封板也好，逢低也好，重组埋伏也罢，都是交易手段之一，没有厚薄之分。决定收益的是你的手法是否多样化"
2. **换手决定高度**："一字板个股，要么买不到，买到就死了。换手充分的牛股，跌下来反抽机会多多"
3. **题材如花**："一个游资题材板块就像一朵花，天时地利人和，能盛开；缺少一点什么，则早熟或夭折"
4. **控制回撤是立身之本**："衡量能否职业炒股很重要的一条就是能控制回撤幅度"，"不怕你跑得慢，就怕你老跑回头路"
5. **动态分仓**："我的持仓风格是滚动、分仓。收盘 3-6 成仓位，盘中动态最高 5 成"
6. **知行合一最难**："能想到、能看懂与能做成之间，真是咫尺天涯啊"
7. **本性难移**："人心就是贪婪和恐惧的，这是天性"，"我承认我更可能是那只贪心的猴子"（600132 重庆啤酒反思）
8. **二八法则**："80% 的效益应该是产生于 20% 的个股之中"

## 仓位管理

| 阶段 | 仓位策略 | 标准券使用 | 风险敞口 |
|------|----------|------------|----------|
| 牛市中继 | 收盘 3-6 成，盘中动态 5 成 | 204001 标准券做回购（"一年的生活费估计够还多了"） | 单股不超 30% |
| 题材主升 | 5-7 成集中龙头 | 满仓 1-2 只龙头 | 高频切换 |
| 调整期 | 3 成以下（含 204001） | 6700000 元标准券（2010.06.29 比赛结束数据） | 防守为主 |
| 主跌段 | 空仓或 1-2 成超跌抢反弹 | 短线 1-2 日 | 严格止损 |
| 股灾期 | 1-3 成分批建仓 | 避免杠杆 | 重心是"活下来" |

## 选股方法

1. **题材逻辑**：板块宽度（多只个股同涨）> 个股逻辑（单只业绩）
2. **龙头切换**：首板 → 二板 → 高位接力，关注换手率（>15% 健康）
3. **启动期介入**："1. 投机很多东西是靠意会的，言传会走样。2. 我不想靠忽悠跟风盘为自己谋私利。而是选择勇敢的去市场拼杀"
4. **资金性质判断**：通过换手、量比、龙虎榜识别主力意图
5. **重组埋伏**：ST 摘帽、借壳预期、资产注入（埋伏时间可达 1-3 个月）
6. **二波机会**："买入（601002.600851.600200.600010.000752.002233）不下 10 次大机会吧，第一波有时是犹抱琵琶，有的是点板不给机会，但 2 波时给了足够的机会从容上车"

## 风控逻辑

- **强势股补跌**："投机最可怕的是短线心态进去，长线心态守股"
- **主跌段防守**：4 月股指期货上市后回撤十几个点（"是我职业以来，最大的一次回撤"）
- **杠杆平仓**：2015 股灾中拒绝杠杆，"如能放下，何尝不是一种解脱"（2014.04.25）
- **大赚后停止**：2011.06 突破 700 万后"心静+懒散"，主动降低操作频率
- **控制回撤三件套**：滚动分仓 + 动态仓位 + 204001 标准券

## 经典案例（5 大战役）

### 案例 1：2009.06.11 起步百万（"梦想在上，孤独在下"）
- **起点**：1008497 元，目标超越同期上证 30 个百分点
- **首批持仓**：580026 江铜CWB1 + 600362 江西铜业 + 600516 方大炭素 + 601699 潞安环能 + 600530 交大昂立 + 600896 中海海盛
- **意义**：辞职 1 个月（2009.07 正式辞职）开始职业炒股生涯

### 案例 2：2009.09 物联网炒作（板块宽度实战）
- **龙头股**：600599 熊猫烟花 +50%（1754% 选股收益）、000997 新大陆、600623 双钱股份 +15%、600873 五洲明珠、000908 天一科技 +223%
- **方法**：板块宽度选股（多只物联网个股同涨验证主线）
- **首篇系统化总结**："换手决定高度"等龙头战法在此期间形成

### 案例 3：2010.06.29 空仓结束第三届比赛
- **成绩**：股 2482093 + 标准券 6700000
- **意义**：第二届比赛结束后空仓撤退，主动放弃部分收益
- **比赛心态**："过程更值得自己体会。结果是随缘的"

### 案例 4：2011.07.15 800 万第三次翻番
- **2 周年纪念（2011.06.10）**：持仓 600168 武汉控股 8.33 + 600259 广晟有色 69.09（245 万重仓）+ 标准券 330 万 + 002505 大康牧业 16.22
- **关键战役**：600539 狮头股份 11.60-14.25（+22%）、600131 岷江水电 9.37-9.53、002233 塔牌集团 10.69-16.40（+71%）、002132 恒星科技 12.20-12.65、600614 鼎立股份 8.94-15.11（+69%）、601058 赛轮股份 11.02 集中 15 万股
- **意义**：10 个半月完成第三次翻番（从 270 万到 800 万）
- **2011.07.22 帖子被股天乐封**："我准备送给孩子的这个最好的礼物也将夭折"

### 案例 5：2015.06.19 股灾抢反弹失败
- **操作**：3 成仓位，组合买 300027 + 300251 + 300104（创业板权重）
- **结果**：组合平均亏损 4%
- **2015.06.30**：8 成仓，配置 300027 + 300152 + 3104，强势股 + 超跌股组合
- **2015.07.02**："就短短十几天，世界换了颜色"
- **意义**：龙飞虎 2014-2015 公开反思期，从"进攻型游资"转向"防守型投资者"

## 金句（原文摘录 15 条）

1. "**梦想在上，孤独在下**"（2009.06.11 开篇）
2. "**封板也好，逢低也好，重组埋伏也罢，都是交易手段之一，没有厚薄之分。决定收益的是你的手法是否多样化**"
3. "**一个游资题材板块就像一朵花，如果天时地利人和，能盛开；如果缺少一点什么，则早熟或夭折**"
4. "**我的理解是——换手决定高度**"
5. "**很多一字板个股，要么买不到，买到就死了。而且这样的一字板，跌下来连反抽都难做，常常一路阴跌。而换手充分的牛股，跌下来反抽机会多多**"
6. "**做超短天天会犯错。能做而不做 才是大智慧**"
7. "**能想到、能看懂与能做成之间，真是咫尺天涯啊**"
8. "**我追求的是与自我的竞技，以及带来的愉悦感。过程更值得自己体会。结果是随缘的**"
9. "**我的持仓风格是滚动、分仓。我一般收盘持有 3-6成的仓位**"
10. "**衡量能否职业炒股很重要的一条就是能控制回撤幅度**"
11. "**不怕你跑得慢，就怕你老跑回头路**"
12. "**股市中，良好的个性、超越旁人的控制力是立身之本**"
13. "**80% 的效益应该是产生于 20% 的个股之中**"
14. "**人心就是贪婪和恐惧的，这是天性**"
15. "**我承认我更可能是那只贪心的猴子**"（600132 重庆啤酒反思）
16. "**1. 投机很多东西是靠意会的，言传会走样。乱说我最怕误导到别人。2. 我不想靠忽悠跟风盘为自己谋私利。而是选择勇敢的去市场拼杀**"
17. "**我天天把多下来的资金尾市做一下回购，一年的生活费估计够还多了**"
18. "**投机最可怕的是短线心态进去，长线心态守股**"
19. "**买入（601002.600851.600200.600010.000752.002233）不下 10 次大机会吧，第一波有时是犹抱琵琶，有的是点板不给机会，但 2 波时给了足够的机会从容上车**"
20. "**如能放下，何尝不是一种解脱**"（2014.04.25）
21. "**就短短十几天，世界换了颜色**"（2015.07.02）

## 适用场景

- **职业游资成长路径**：从百万起步到千万级（8 年 3 次翻番）的真实轨迹
- **心态修炼**：面对连续失误（"我更可能是那只贪心的猴子"）、论坛被封、股灾亏损
- **防守反击**：回撤十几个点后主动减仓，2014-2015 转防守
- **多战法并用**：封板/逢低/重组埋伏 + 7 套手法（追涨/低吸/打板/守株/做 T/反包/扫板）
- **题材宽度判断**：从一只股看整个板块，从板块宽度选龙头

## 关联阅读

**P0 同名/相关笔记**：
- 实战笔记_养家心法.md（心法体系基础）
- 实战笔记_赵老哥系列（赵老哥与龙飞虎同属 80 后游资）
- 实战笔记_Asking理念总结.md（理念层面）
- 实战笔记_游资席位速查.md（席位查询）

**P1P2 配套笔记（本批 8 份）**：
- 实战笔记_赵老哥交易记录.md（赵老哥 5 大战法 + 8 大案例）
- 实战笔记_赵老哥淘股吧全集.md（赵老哥 4 届职业炒手杯 + 21 金句）
- 实战笔记_养家心法论股市.md（P1P2 完整问答版）
- 实战笔记_瑞鹤仙精华帖.md（瑞鹤仙心态反思）
- 实战笔记_乔帮主交割单整理.md（P1P2 增补版）
- 实战笔记_孤独牛背婚礼演讲.md（P1P2 增补版）
- 实战笔记_淘股吧大师列传.md（多位游资传记）

**C 盘 26 位游资深度研读**：可重点对照"赵老哥"、"养家"、"Asking"、"职业炒手"等人的多战法体系。

## 与其他游资的呼应

- **与赵老哥**：同为 80 后游资，同在淘股吧成名，同参加职业炒手杯；龙飞虎更偏心态反思，赵老哥更偏交割单实战
- **与养家**：都强调"知行合一"，都重视心法体系；养家偏题材切换，龙飞虎偏多战法并用
- **与乔帮主**：都是交割单派，但乔帮主偏技术打板，龙飞虎偏题材+心态
- **与 Asking**：都是理念派，但 Asking 偏哲学反思，龙飞虎偏实操+回撤控制
- **与职业炒手**：龙飞虎参加 3 届职业炒手杯，职业炒手本人是龙飞虎的偶像/前辈

## 龙飞虎真实身份揭示

> **龙飞虎 = 克拉美书**（同一人）
>
> 在淘股吧发帖时使用"龙飞虎"主 ID，"克拉美书"为关联 ID。两人发文时间线、持仓记录、心态表述完全一致。2009.07 辞职做职业股民，2011.07 帖子被股天乐封禁，2014-2015 公开反思期。

## 关键时间线

| 日期 | 事件 | 资产/仓位 |
|------|------|-----------|
| 2009.06.11 | 起步发帖"梦想在上，孤独在下" | 1008497 元 |
| 2009.07 | 正式辞职做职业股民 | - |
| 2009.09 | 物联网炒作 | 600599/000997/600623/600873/000908 |
| 2009.10.22 | 资产 1837607（首次翻番） | 5 个月 |
| 2010.04 | 股指期货上市后回撤 | "最大一次回撤" |
| 2010.06.29 | 空仓结束第三届比赛 | 股 2482093 + 标准券 6700000 |
| 2010.07-10 | 圆舞曲系列操作 | 000810 / 002190 / 600259 |
| 2011.05.13 | "2011 年收益大概 40% 上下" | - |
| 2011.05.15 | 600132 重庆啤酒反思 | "我更可能是那只贪心的猴子" |
| 2011.06.10 | 2 周年纪念 1000 万目标 | 600168 + 600259 + 002505 + 330 万标准券 |
| 2011.06.15 | 完整"控制回撤"心法 | - |
| 2011.06.22 | 600539 狮头股份涨停 | "纯属运气" |
| 2011.07.15 | 800 万第三次翻番 | 10 个半月 |
| 2011.07.22 | 帖子被股天乐封 | "我准备送给孩子的这个最好的礼物也将夭折" |
| 2014.04.25 | "如能放下，何尝不是一种解脱" | - |
| 2015.06.19 | 股灾抢反弹 | 3 成仓，亏损 4% |
| 2015.07.02 | "就短短十几天，世界换了颜色" | 8 成仓 |

## P1P2 增补说明

- **本笔记为 P0 龙飞虎相关笔记的 P1P2 增补版**，重点补充：
  1. **2009.06.11 起步百万的真实起点**（P0 未覆盖）
  2. **2009.09 物联网炒作完整 5 只个股**（P0 仅提龙头）
  3. **2010.06.29 比赛结束的具体持仓**（P0 仅有定性描述）
  4. **2011.06-07 第三次翻番全程实录**（P0 缺失）
  5. **2014-2015 股灾反思期**（P0 完全未覆盖）
  6. **龙飞虎 = 克拉美书 的身份揭示**（P0 未明确）
  7. **21 条金句原文摘录**（P0 仅 3-5 条）
  8. **3 套战法 + 7 套手法的体系化总结**（P0 散落）

---

*整理日期：2026-06-25*
*来源：龙飞虎淘股吧全集.pdf*
`,oneLine:`游资**：龙飞虎（真实 ID 揭示：龙飞虎 = 克拉美书，同一人，80 后，江苏席位）`,tags:[]}],f=[`全部`,...Array.from(new Set(d.map(e=>e.category)))];function p(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function m(e){let t=p(e);return t=t.replace(/`([^`]+)`/g,(e,t)=>`<code>${t}</code>`),t=t.replace(/\*\*([^*]+)\*\*/g,(e,t)=>`<strong>${t}</strong>`),t=t.replace(/(^|[^*])\*([^*]+)\*/g,`$1<em>$2</em>`),t=t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,(e,t,n)=>`<a href="${n}" target="_blank" rel="noopener" ${n.endsWith(`.md`),``}>${t}</a>`),t}function h(e,t){if(!t)return e;let n=new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),`gi`);return e.replace(n,e=>`<span class="hl">${e}</span>`)}function g(e,t=``){let n=e.split(`
`),r=[],i=0;for(;i<n.length;){let e=n[i];if(/^---+$/.test(e.trim())){r.push(`<hr/>`),i++;continue}let a=e.match(/^(#{1,4})\s+(.+)$/);if(a){let e=a[1].length;r.push(`<h${e}>${h(m(a[2]),t)}</h${e}>`),i++;continue}if(e.startsWith(`>`)){let e=[];for(;i<n.length&&(n[i].startsWith(`>`)||n[i].trim()===``);)if(n[i].startsWith(`>`))e.push(n[i].replace(/^>\s?/,``)),i++;else if(n[i].trim()===``&&i+1<n.length&&n[i+1].startsWith(`>`))i++;else break;let a=e.map(e=>m(e)).join(`<br/>`);r.push(`<blockquote><p>${h(a,t)}</p></blockquote>`);continue}if(e.startsWith(`|`)&&e.trim().endsWith(`|`)){let e=[],a=i;for(;a<n.length&&n[a].startsWith(`|`)&&n[a].trim().endsWith(`|`);){let t=n[a].slice(1,-1).split(`|`).map(e=>e.trim());e.push(t),a++}if(e.length>=2&&/^[\s|:-]+$/.test(n[i+1]||``)){let n=e[0],o=e.slice(2);r.push(`<table>`),r.push(`<thead><tr>`+n.map(e=>`<th>${h(m(e),t)}</th>`).join(``)+`</tr></thead>`),o.length&&(r.push(`<tbody>`),o.forEach(e=>{r.push(`<tr>`+e.map(e=>`<td>${h(m(e),t)}</td>`).join(``)+`</tr>`)}),r.push(`</tbody>`)),r.push(`</table>`),i=a;continue}}if(/^[-*]\s+/.test(e)){let e=[];for(;i<n.length&&/^[-*]\s+/.test(n[i]);)e.push(n[i].replace(/^[-*]\s+/,``)),i++;r.push(`<ul>`+e.map(e=>`<li>${h(m(e),t)}</li>`).join(``)+`</ul>`);continue}if(/^\d+\.\s+/.test(e)){let e=[];for(;i<n.length&&/^\d+\.\s+/.test(n[i]);)e.push(n[i].replace(/^\d+\.\s+/,``)),i++;r.push(`<ol>`+e.map(e=>`<li>${h(m(e),t)}</li>`).join(``)+`</ol>`);continue}if(e.trim()===``){i++;continue}let o=[];for(;i<n.length&&n[i].trim()!==``&&!/^(#{1,4}\s|>|---|\||[-*]\s|\d+\.\s)/.test(n[i]);)o.push(n[i]),i++;o.length&&r.push(`<p>${h(m(o.join(` `)),t)}</p>`)}return r.join(`
`)}var _=e((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),v=e(((e,t)=>{t.exports=_()}))();function y(){let e=window.location.hash.replace(/^#\/?/,``);if(!e)return{};let[t,n]=e.split(`/`);return{cat:t,id:n}}function b(e,t){let n=t?`#/${e}/${t}`:`#/${e}`;window.location.hash!==n&&history.replaceState(null,``,n)}function x(){let e=y(),[t,n]=(0,l.useState)(e.cat||`全部`),[r,i]=(0,l.useState)(e.id||null),[a,o]=(0,l.useState)(``),[s,c]=(0,l.useState)(`list`),[u,p]=(0,l.useState)(null),m=(0,l.useRef)(null),h=(0,l.useMemo)(()=>{let e={};return d.forEach(t=>{e[t.category]=(e[t.category]||0)+1}),e},[]),_=(0,l.useMemo)(()=>{let e=d;if(t!==`全部`&&(e=e.filter(e=>e.category===t)),a.trim()){let t=a.toLowerCase();e=e.filter(e=>e.title.toLowerCase().includes(t)||e.oneLine.toLowerCase().includes(t)||e.content.toLowerCase().includes(t)||e.tags.some(e=>e.toLowerCase().includes(t)))}return e},[t,a]),x=(0,l.useMemo)(()=>r&&d.find(e=>e.id===r)||null,[r]);(0,l.useEffect)(()=>{b(t,r||void 0)},[t,r]),(0,l.useEffect)(()=>{x&&s===`detail`&&document.querySelector(`.detail`)?.scrollTo({top:0})},[x,s]),(0,l.useEffect)(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&e.key===`k`&&(e.preventDefault(),m.current?.focus()),e.key===`Escape`&&document.activeElement===m.current&&(o(``),m.current?.blur())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]),(0,l.useEffect)(()=>{let e=e=>{e.preventDefault(),p(e)};return window.addEventListener(`beforeinstallprompt`,e),()=>window.removeEventListener(`beforeinstallprompt`,e)},[]);let ee=async()=>{if(!u)return;u.prompt();let{outcome:e}=await u.userChoice;e===`accepted`&&p(null)},S=e=>{i(e),window.innerWidth<=900&&c(`detail`)},C=e=>{if(o(e),e){let t=d.find(t=>t.title.toLowerCase().includes(e.toLowerCase())||t.content.toLowerCase().includes(e.toLowerCase()));t&&t.id!==r&&i(t.id)}};return(0,v.jsxs)(`div`,{className:`app-shell`,children:[(0,v.jsxs)(`header`,{className:`header`,children:[(0,v.jsxs)(`div`,{className:`brand`,children:[(0,v.jsx)(`div`,{className:`brand-mark`,children:`游`}),(0,v.jsxs)(`div`,{children:[`游资心法`,(0,v.jsx)(`span`,{className:`brand-sub`,children:`· 实战笔记`})]})]}),(0,v.jsxs)(`div`,{className:`search-wrap`,children:[(0,v.jsx)(`span`,{className:`search-icon`,"aria-hidden":!0,children:(0,v.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,v.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,v.jsx)(`path`,{d:`m21 21-4.3-4.3`})]})}),(0,v.jsx)(`input`,{ref:m,className:`search-input`,type:`text`,placeholder:`搜索笔记标题、内容、标签… (⌘K)`,value:a,onChange:e=>C(e.target.value)})]}),(0,v.jsxs)(`div`,{className:`header-actions`,children:[(0,v.jsxs)(`span`,{style:{fontSize:12,color:`var(--text-mute)`},children:[_.length,` 份`]}),u&&(0,v.jsxs)(`button`,{className:`install-btn`,onClick:ee,title:`添加到主屏幕`,children:[(0,v.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,v.jsx)(`path`,{d:`M12 5v14M5 12l7 7 7-7`})}),`装到桌面`]})]})]}),(0,v.jsxs)(`div`,{className:`main`,children:[(0,v.jsxs)(`aside`,{className:`sidebar ${s===`list`?`mobile-show`:``}`,children:[(0,v.jsx)(`div`,{className:`sidebar-title`,children:`主题分类`}),f.map(e=>(0,v.jsxs)(`div`,{className:`cat-item ${t===e?`active`:``}`,onClick:()=>{n(e),window.innerWidth<=900&&c(`list`)},children:[(0,v.jsx)(`span`,{children:e}),(0,v.jsx)(`span`,{className:`cat-count`,children:e===`全部`?d.length:h[e]||0})]},e)),(0,v.jsx)(`div`,{style:{height:1,background:`var(--border)`,margin:`12px 8px`}}),(0,v.jsx)(`div`,{className:`sidebar-title`,children:`快速入口`}),(0,v.jsxs)(`div`,{className:`cat-item`,onClick:()=>S(`P0_养家心法`),children:[(0,v.jsx)(`span`,{children:`养家心法`}),(0,v.jsx)(`span`,{className:`cat-count`,children:`P0`})]}),(0,v.jsxs)(`div`,{className:`cat-item`,onClick:()=>S(`P0_Asking理念总结`),children:[(0,v.jsx)(`span`,{children:`Asking 理念`}),(0,v.jsx)(`span`,{className:`cat-count`,children:`P0`})]}),(0,v.jsxs)(`div`,{className:`cat-item`,onClick:()=>S(`P1P2_赵老哥_1.12操作`),children:[(0,v.jsx)(`span`,{children:`赵老哥 1.12`}),(0,v.jsx)(`span`,{className:`cat-count`,children:`P1P2`})]}),(0,v.jsxs)(`div`,{className:`cat-item`,onClick:()=>S(`P1P2_集合竞价_奥义188元版`),children:[(0,v.jsx)(`span`,{children:`集合竞价奥义`}),(0,v.jsx)(`span`,{className:`cat-count`,children:`P1P2`})]})]}),(0,v.jsxs)(`div`,{className:`list-panel ${s===`detail`?`mobile-hide`:``}`,children:[(0,v.jsxs)(`div`,{className:`list-header`,children:[(0,v.jsxs)(`span`,{children:[a?`搜索 "${a}"`:t,` · `,_.length,` 份`]}),(0,v.jsxs)(`span`,{style:{fontSize:11},children:[`共 `,d.length,` 份`]})]}),_.length===0?(0,v.jsx)(`div`,{style:{padding:40,textAlign:`center`,color:`var(--text-mute)`},children:`没有匹配的笔记`}):_.map(e=>(0,v.jsxs)(`div`,{className:`note-item ${r===e.id?`active`:``}`,onClick:()=>S(e.id),children:[(0,v.jsxs)(`div`,{className:`note-title`,children:[(0,v.jsx)(`span`,{style:{flex:1,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:e.title}),(0,v.jsx)(`span`,{className:`note-tag source-${e.source.toLowerCase()}`,children:e.source})]}),(0,v.jsx)(`div`,{className:`note-line`,children:e.oneLine})]},e.id))]}),(0,v.jsx)(`div`,{className:`detail ${s===`list`?`mobile-hide`:``}`,children:x?(0,v.jsxs)(`div`,{className:`detail-content`,children:[(0,v.jsx)(`button`,{className:`icon-btn`,onClick:()=>c(`list`),style:{display:`none`,marginBottom:8},id:`back-btn`,children:`← 返回列表`}),(0,v.jsx)(`h1`,{className:`detail-title`,children:x.title}),(0,v.jsxs)(`div`,{className:`detail-meta`,children:[(0,v.jsx)(`span`,{className:`meta-chip cat`,children:x.category}),(0,v.jsxs)(`span`,{className:`meta-chip`,children:[`来源 `,x.source]}),x.tags.map(e=>(0,v.jsxs)(`span`,{className:`meta-chip`,children:[`#`,e]},e))]}),(0,v.jsx)(`div`,{className:`detail-quote`,children:x.oneLine}),(0,v.jsx)(`div`,{className:`md`,dangerouslySetInnerHTML:{__html:g(x.content,a)}})]}):(0,v.jsxs)(`div`,{className:`detail-empty`,children:[(0,v.jsx)(`div`,{className:`detail-empty-icon`,children:`📖`}),(0,v.jsx)(`div`,{style:{fontSize:16},children:`选择一份笔记开始阅读`}),(0,v.jsxs)(`div`,{style:{fontSize:13,color:`var(--text-mute)`},children:[`共 `,d.length,` 份实战笔记等你翻`]})]})})]}),(0,v.jsxs)(`nav`,{className:`mobile-tab-bar`,children:[(0,v.jsxs)(`button`,{className:`mobile-tab ${s===`list`?`active`:``}`,onClick:()=>c(`list`),children:[(0,v.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,v.jsx)(`path`,{d:`M3 12h18M3 6h18M3 18h18`})}),`笔记`]}),(0,v.jsxs)(`button`,{className:`mobile-tab ${s===`detail`?`active`:``}`,onClick:()=>r&&c(`detail`),disabled:!r,children:[(0,v.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,v.jsx)(`path`,{d:`M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z`})}),`阅读`]})]})]})}(0,u.createRoot)(document.getElementById(`root`)).render((0,v.jsx)(l.StrictMode,{children:(0,v.jsx)(x,{})}));