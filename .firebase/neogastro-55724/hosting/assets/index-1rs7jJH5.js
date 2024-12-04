function uy(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function cy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vp={exports:{}},ml={},yp={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vs=Symbol.for("react.element"),dy=Symbol.for("react.portal"),hy=Symbol.for("react.fragment"),fy=Symbol.for("react.strict_mode"),py=Symbol.for("react.profiler"),my=Symbol.for("react.provider"),gy=Symbol.for("react.context"),_y=Symbol.for("react.forward_ref"),vy=Symbol.for("react.suspense"),yy=Symbol.for("react.memo"),wy=Symbol.for("react.lazy"),Vd=Symbol.iterator;function Ey(t){return t===null||typeof t!="object"?null:(t=Vd&&t[Vd]||t["@@iterator"],typeof t=="function"?t:null)}var wp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ep=Object.assign,Cp={};function Qr(t,e,n){this.props=t,this.context=e,this.refs=Cp,this.updater=n||wp}Qr.prototype.isReactComponent={};Qr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Sp(){}Sp.prototype=Qr.prototype;function ec(t,e,n){this.props=t,this.context=e,this.refs=Cp,this.updater=n||wp}var tc=ec.prototype=new Sp;tc.constructor=ec;Ep(tc,Qr.prototype);tc.isPureReactComponent=!0;var Hd=Array.isArray,Ip=Object.prototype.hasOwnProperty,nc={current:null},Tp={key:!0,ref:!0,__self:!0,__source:!0};function kp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ip.call(e,r)&&!Tp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:vs,type:t,key:s,ref:o,props:i,_owner:nc.current}}function Cy(t,e){return{$$typeof:vs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rc(t){return typeof t=="object"&&t!==null&&t.$$typeof===vs}function Sy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $d=/\/+/g;function Xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Sy(""+t.key):e.toString(36)}function ro(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vs:case dy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Xl(o,0):r,Hd(i)?(n="",t!=null&&(n=t.replace($d,"$&/")+"/"),ro(i,e,n,"",function(u){return u})):i!=null&&(rc(i)&&(i=Cy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($d,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Hd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Xl(s,l);o+=ro(s,e,n,a,i)}else if(a=Ey(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Xl(s,l++),o+=ro(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fs(t,e,n){if(t==null)return t;var r=[],i=0;return ro(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Iy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xe={current:null},io={transition:null},Ty={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:io,ReactCurrentOwner:nc};function Rp(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:Fs,forEach:function(t,e,n){Fs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fs(t,function(){e++}),e},toArray:function(t){return Fs(t,function(e){return e})||[]},only:function(t){if(!rc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=Qr;j.Fragment=hy;j.Profiler=py;j.PureComponent=ec;j.StrictMode=fy;j.Suspense=vy;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ty;j.act=Rp;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ep({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=nc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Ip.call(e,a)&&!Tp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:vs,type:t.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(t){return t={$$typeof:gy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:my,_context:t},t.Consumer=t};j.createElement=kp;j.createFactory=function(t){var e=kp.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:_y,render:t}};j.isValidElement=rc;j.lazy=function(t){return{$$typeof:wy,_payload:{_status:-1,_result:t},_init:Iy}};j.memo=function(t,e){return{$$typeof:yy,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=io.transition;io.transition={};try{t()}finally{io.transition=e}};j.unstable_act=Rp;j.useCallback=function(t,e){return xe.current.useCallback(t,e)};j.useContext=function(t){return xe.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return xe.current.useDeferredValue(t)};j.useEffect=function(t,e){return xe.current.useEffect(t,e)};j.useId=function(){return xe.current.useId()};j.useImperativeHandle=function(t,e,n){return xe.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return xe.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return xe.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return xe.current.useMemo(t,e)};j.useReducer=function(t,e,n){return xe.current.useReducer(t,e,n)};j.useRef=function(t){return xe.current.useRef(t)};j.useState=function(t){return xe.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return xe.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return xe.current.useTransition()};j.version="18.3.1";yp.exports=j;var I=yp.exports;const ky=cy(I),Ry=uy({__proto__:null,default:ky},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Py=I,Ny=Symbol.for("react.element"),xy=Symbol.for("react.fragment"),Ay=Object.prototype.hasOwnProperty,Oy=Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dy={key:!0,ref:!0,__self:!0,__source:!0};function Pp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ay.call(e,r)&&!Dy.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ny,type:t,key:s,ref:o,props:i,_owner:Oy.current}}ml.Fragment=xy;ml.jsx=Pp;ml.jsxs=Pp;vp.exports=ml;var S=vp.exports,Np={exports:{}},He={},xp={exports:{}},Ap={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,D){var L=R.length;R.push(D);e:for(;0<L;){var re=L-1>>>1,de=R[re];if(0<i(de,D))R[re]=D,R[L]=de,L=re;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var D=R[0],L=R.pop();if(L!==D){R[0]=L;e:for(var re=0,de=R.length,Ms=de>>>1;re<Ms;){var Nn=2*(re+1)-1,Jl=R[Nn],xn=Nn+1,bs=R[xn];if(0>i(Jl,L))xn<de&&0>i(bs,Jl)?(R[re]=bs,R[xn]=L,re=xn):(R[re]=Jl,R[Nn]=L,re=Nn);else if(xn<de&&0>i(bs,L))R[re]=bs,R[xn]=L,re=xn;else break e}}return D}function i(R,D){var L=R.sortIndex-D.sortIndex;return L!==0?L:R.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,g=!1,_=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=R)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function y(R){if(v=!1,m(R),!_)if(n(a)!==null)_=!0,Ql(T);else{var D=n(u);D!==null&&Yl(y,D.startTime-R)}}function T(R,D){_=!1,v&&(v=!1,p(x),x=-1),g=!0;var L=h;try{for(m(D),c=n(a);c!==null&&(!(c.expirationTime>D)||R&&!Ze());){var re=c.callback;if(typeof re=="function"){c.callback=null,h=c.priorityLevel;var de=re(c.expirationTime<=D);D=t.unstable_now(),typeof de=="function"?c.callback=de:c===n(a)&&r(a),m(D)}else r(a);c=n(a)}if(c!==null)var Ms=!0;else{var Nn=n(u);Nn!==null&&Yl(y,Nn.startTime-D),Ms=!1}return Ms}finally{c=null,h=L,g=!1}}var P=!1,N=null,x=-1,K=5,F=-1;function Ze(){return!(t.unstable_now()-F<K)}function oi(){if(N!==null){var R=t.unstable_now();F=R;var D=!0;try{D=N(!0,R)}finally{D?li():(P=!1,N=null)}}else P=!1}var li;if(typeof f=="function")li=function(){f(oi)};else if(typeof MessageChannel<"u"){var Bd=new MessageChannel,ay=Bd.port2;Bd.port1.onmessage=oi,li=function(){ay.postMessage(null)}}else li=function(){w(oi,0)};function Ql(R){N=R,P||(P=!0,li())}function Yl(R,D){x=w(function(){R(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Ql(T))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var L=h;h=D;try{return R()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,D){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var L=h;h=R;try{return D()}finally{h=L}},t.unstable_scheduleCallback=function(R,D,L){var re=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?re+L:re):L=re,R){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=L+de,R={id:d++,callback:D,priorityLevel:R,startTime:L,expirationTime:de,sortIndex:-1},L>re?(R.sortIndex=L,e(u,R),n(a)===null&&R===n(u)&&(v?(p(x),x=-1):v=!0,Yl(y,L-re))):(R.sortIndex=de,e(a,R),_||g||(_=!0,Ql(T))),R},t.unstable_shouldYield=Ze,t.unstable_wrapCallback=function(R){var D=h;return function(){var L=h;h=D;try{return R.apply(this,arguments)}finally{h=L}}}})(Ap);xp.exports=Ap;var Ly=xp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My=I,Ve=Ly;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Op=new Set,Wi={};function tr(t,e){Mr(t,e),Mr(t+"Capture",e)}function Mr(t,e){for(Wi[t]=e,t=0;t<e.length;t++)Op.add(e[t])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,by=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gd={},Kd={};function Fy(t){return ja.call(Kd,t)?!0:ja.call(Gd,t)?!1:by.test(t)?Kd[t]=!0:(Gd[t]=!0,!1)}function Uy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jy(t,e,n,r){if(e===null||typeof e>"u"||Uy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ae(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ye[t]=new Ae(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ye[e]=new Ae(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ye[t]=new Ae(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ye[t]=new Ae(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ye[t]=new Ae(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ye[t]=new Ae(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ye[t]=new Ae(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ye[t]=new Ae(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ye[t]=new Ae(t,5,!1,t.toLowerCase(),null,!1,!1)});var ic=/[\-:]([a-z])/g;function sc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ic,sc);ye[e]=new Ae(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ic,sc);ye[e]=new Ae(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ic,sc);ye[e]=new Ae(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ye[t]=new Ae(t,1,!1,t.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ye[t]=new Ae(t,1,!1,t.toLowerCase(),null,!0,!0)});function oc(t,e,n,r){var i=ye.hasOwnProperty(e)?ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jy(e,n,i,r)&&(n=null),r||i===null?Fy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wt=My.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Us=Symbol.for("react.element"),ur=Symbol.for("react.portal"),cr=Symbol.for("react.fragment"),lc=Symbol.for("react.strict_mode"),za=Symbol.for("react.profiler"),Dp=Symbol.for("react.provider"),Lp=Symbol.for("react.context"),ac=Symbol.for("react.forward_ref"),Wa=Symbol.for("react.suspense"),Ba=Symbol.for("react.suspense_list"),uc=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),Mp=Symbol.for("react.offscreen"),qd=Symbol.iterator;function ai(t){return t===null||typeof t!="object"?null:(t=qd&&t[qd]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,Zl;function wi(t){if(Zl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zl=e&&e[1]||""}return`
`+Zl+t}var ea=!1;function ta(t,e){if(!t||ea)return"";ea=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ea=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wi(t):""}function zy(t){switch(t.tag){case 5:return wi(t.type);case 16:return wi("Lazy");case 13:return wi("Suspense");case 19:return wi("SuspenseList");case 0:case 2:case 15:return t=ta(t.type,!1),t;case 11:return t=ta(t.type.render,!1),t;case 1:return t=ta(t.type,!0),t;default:return""}}function Va(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case cr:return"Fragment";case ur:return"Portal";case za:return"Profiler";case lc:return"StrictMode";case Wa:return"Suspense";case Ba:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Lp:return(t.displayName||"Context")+".Consumer";case Dp:return(t._context.displayName||"Context")+".Provider";case ac:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case uc:return e=t.displayName||null,e!==null?e:Va(t.type)||"Memo";case qt:e=t._payload,t=t._init;try{return Va(t(e))}catch{}}return null}function Wy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Va(e);case 8:return e===lc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function By(t){var e=bp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function js(t){t._valueTracker||(t._valueTracker=By(t))}function Fp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=bp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Eo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ha(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Up(t,e){e=e.checked,e!=null&&oc(t,"checked",e,!1)}function $a(t,e){Up(t,e);var n=yn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ga(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ga(t,e.type,yn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ga(t,e,n){(e!=="number"||Eo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ei=Array.isArray;function Sr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ka(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(Ei(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yn(n)}}function jp(t,e){var n=yn(e.value),r=yn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zs,Wp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zs=zs||document.createElement("div"),zs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vy=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(t){Vy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ki[e]=ki[t]})});function Bp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ki.hasOwnProperty(t)&&ki[t]?(""+e).trim():e+"px"}function Vp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Bp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Hy=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qa(t,e){if(e){if(Hy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Ya(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ja=null;function cc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xa=null,Ir=null,Tr=null;function Zd(t){if(t=Es(t)){if(typeof Xa!="function")throw Error(E(280));var e=t.stateNode;e&&(e=wl(e),Xa(t.stateNode,t.type,e))}}function Hp(t){Ir?Tr?Tr.push(t):Tr=[t]:Ir=t}function $p(){if(Ir){var t=Ir,e=Tr;if(Tr=Ir=null,Zd(t),e)for(t=0;t<e.length;t++)Zd(e[t])}}function Gp(t,e){return t(e)}function Kp(){}var na=!1;function qp(t,e,n){if(na)return t(e,n);na=!0;try{return Gp(t,e,n)}finally{na=!1,(Ir!==null||Tr!==null)&&(Kp(),$p())}}function Vi(t,e){var n=t.stateNode;if(n===null)return null;var r=wl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var Za=!1;if(Lt)try{var ui={};Object.defineProperty(ui,"passive",{get:function(){Za=!0}}),window.addEventListener("test",ui,ui),window.removeEventListener("test",ui,ui)}catch{Za=!1}function $y(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Ri=!1,Co=null,So=!1,eu=null,Gy={onError:function(t){Ri=!0,Co=t}};function Ky(t,e,n,r,i,s,o,l,a){Ri=!1,Co=null,$y.apply(Gy,arguments)}function qy(t,e,n,r,i,s,o,l,a){if(Ky.apply(this,arguments),Ri){if(Ri){var u=Co;Ri=!1,Co=null}else throw Error(E(198));So||(So=!0,eu=u)}}function nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function eh(t){if(nr(t)!==t)throw Error(E(188))}function Qy(t){var e=t.alternate;if(!e){if(e=nr(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return eh(i),t;if(s===r)return eh(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Yp(t){return t=Qy(t),t!==null?Jp(t):null}function Jp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jp(t);if(e!==null)return e;t=t.sibling}return null}var Xp=Ve.unstable_scheduleCallback,th=Ve.unstable_cancelCallback,Yy=Ve.unstable_shouldYield,Jy=Ve.unstable_requestPaint,ie=Ve.unstable_now,Xy=Ve.unstable_getCurrentPriorityLevel,dc=Ve.unstable_ImmediatePriority,Zp=Ve.unstable_UserBlockingPriority,Io=Ve.unstable_NormalPriority,Zy=Ve.unstable_LowPriority,em=Ve.unstable_IdlePriority,gl=null,vt=null;function e0(t){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(gl,t,void 0,(t.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:r0,t0=Math.log,n0=Math.LN2;function r0(t){return t>>>=0,t===0?32:31-(t0(t)/n0|0)|0}var Ws=64,Bs=4194304;function Ci(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function To(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ci(l):(s&=o,s!==0&&(r=Ci(s)))}else o=n&~i,o!==0?r=Ci(o):s!==0&&(r=Ci(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-lt(e),i=1<<n,r|=t[n],e&=~i;return r}function i0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-lt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=i0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function tu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tm(){var t=Ws;return Ws<<=1,!(Ws&4194240)&&(Ws=64),t}function ra(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ys(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-lt(e),t[e]=n}function o0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-lt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function hc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-lt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var B=0;function nm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var rm,fc,im,sm,om,nu=!1,Vs=[],on=null,ln=null,an=null,Hi=new Map,$i=new Map,Yt=[],l0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nh(t,e){switch(t){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":Hi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$i.delete(e.pointerId)}}function ci(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Es(e),e!==null&&fc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function a0(t,e,n,r,i){switch(e){case"focusin":return on=ci(on,t,e,n,r,i),!0;case"dragenter":return ln=ci(ln,t,e,n,r,i),!0;case"mouseover":return an=ci(an,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Hi.set(s,ci(Hi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$i.set(s,ci($i.get(s)||null,t,e,n,r,i)),!0}return!1}function lm(t){var e=Mn(t.target);if(e!==null){var n=nr(e);if(n!==null){if(e=n.tag,e===13){if(e=Qp(n),e!==null){t.blockedOn=e,om(t.priority,function(){im(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function so(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ru(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ja=r,n.target.dispatchEvent(r),Ja=null}else return e=Es(n),e!==null&&fc(e),t.blockedOn=n,!1;e.shift()}return!0}function rh(t,e,n){so(t)&&n.delete(e)}function u0(){nu=!1,on!==null&&so(on)&&(on=null),ln!==null&&so(ln)&&(ln=null),an!==null&&so(an)&&(an=null),Hi.forEach(rh),$i.forEach(rh)}function di(t,e){t.blockedOn===e&&(t.blockedOn=null,nu||(nu=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,u0)))}function Gi(t){function e(i){return di(i,t)}if(0<Vs.length){di(Vs[0],t);for(var n=1;n<Vs.length;n++){var r=Vs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(on!==null&&di(on,t),ln!==null&&di(ln,t),an!==null&&di(an,t),Hi.forEach(e),$i.forEach(e),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)lm(n),n.blockedOn===null&&Yt.shift()}var kr=Wt.ReactCurrentBatchConfig,ko=!0;function c0(t,e,n,r){var i=B,s=kr.transition;kr.transition=null;try{B=1,pc(t,e,n,r)}finally{B=i,kr.transition=s}}function d0(t,e,n,r){var i=B,s=kr.transition;kr.transition=null;try{B=4,pc(t,e,n,r)}finally{B=i,kr.transition=s}}function pc(t,e,n,r){if(ko){var i=ru(t,e,n,r);if(i===null)fa(t,e,r,Ro,n),nh(t,r);else if(a0(i,t,e,n,r))r.stopPropagation();else if(nh(t,r),e&4&&-1<l0.indexOf(t)){for(;i!==null;){var s=Es(i);if(s!==null&&rm(s),s=ru(t,e,n,r),s===null&&fa(t,e,r,Ro,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fa(t,e,r,null,n)}}var Ro=null;function ru(t,e,n,r){if(Ro=null,t=cc(r),t=Mn(t),t!==null)if(e=nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ro=t,null}function am(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xy()){case dc:return 1;case Zp:return 4;case Io:case Zy:return 16;case em:return 536870912;default:return 16}default:return 16}}var nn=null,mc=null,oo=null;function um(){if(oo)return oo;var t,e=mc,n=e.length,r,i="value"in nn?nn.value:nn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return oo=i.slice(t,1<r?1-r:void 0)}function lo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Hs(){return!0}function ih(){return!1}function $e(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hs:ih,this.isPropagationStopped=ih,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hs)},persist:function(){},isPersistent:Hs}),e}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gc=$e(Yr),ws=ee({},Yr,{view:0,detail:0}),h0=$e(ws),ia,sa,hi,_l=ee({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_c,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hi&&(hi&&t.type==="mousemove"?(ia=t.screenX-hi.screenX,sa=t.screenY-hi.screenY):sa=ia=0,hi=t),ia)},movementY:function(t){return"movementY"in t?t.movementY:sa}}),sh=$e(_l),f0=ee({},_l,{dataTransfer:0}),p0=$e(f0),m0=ee({},ws,{relatedTarget:0}),oa=$e(m0),g0=ee({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),_0=$e(g0),v0=ee({},Yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),y0=$e(v0),w0=ee({},Yr,{data:0}),oh=$e(w0),E0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=S0[t])?!!e[t]:!1}function _c(){return I0}var T0=ee({},ws,{key:function(t){if(t.key){var e=E0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=lo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?C0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_c,charCode:function(t){return t.type==="keypress"?lo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k0=$e(T0),R0=ee({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lh=$e(R0),P0=ee({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_c}),N0=$e(P0),x0=ee({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),A0=$e(x0),O0=ee({},_l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),D0=$e(O0),L0=[9,13,27,32],vc=Lt&&"CompositionEvent"in window,Pi=null;Lt&&"documentMode"in document&&(Pi=document.documentMode);var M0=Lt&&"TextEvent"in window&&!Pi,cm=Lt&&(!vc||Pi&&8<Pi&&11>=Pi),ah=" ",uh=!1;function dm(t,e){switch(t){case"keyup":return L0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var dr=!1;function b0(t,e){switch(t){case"compositionend":return hm(e);case"keypress":return e.which!==32?null:(uh=!0,ah);case"textInput":return t=e.data,t===ah&&uh?null:t;default:return null}}function F0(t,e){if(dr)return t==="compositionend"||!vc&&dm(t,e)?(t=um(),oo=mc=nn=null,dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cm&&e.locale!=="ko"?null:e.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ch(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!U0[t.type]:e==="textarea"}function fm(t,e,n,r){Hp(r),e=Po(e,"onChange"),0<e.length&&(n=new gc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ni=null,Ki=null;function j0(t){Im(t,0)}function vl(t){var e=pr(t);if(Fp(e))return t}function z0(t,e){if(t==="change")return e}var pm=!1;if(Lt){var la;if(Lt){var aa="oninput"in document;if(!aa){var dh=document.createElement("div");dh.setAttribute("oninput","return;"),aa=typeof dh.oninput=="function"}la=aa}else la=!1;pm=la&&(!document.documentMode||9<document.documentMode)}function hh(){Ni&&(Ni.detachEvent("onpropertychange",mm),Ki=Ni=null)}function mm(t){if(t.propertyName==="value"&&vl(Ki)){var e=[];fm(e,Ki,t,cc(t)),qp(j0,e)}}function W0(t,e,n){t==="focusin"?(hh(),Ni=e,Ki=n,Ni.attachEvent("onpropertychange",mm)):t==="focusout"&&hh()}function B0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vl(Ki)}function V0(t,e){if(t==="click")return vl(e)}function H0(t,e){if(t==="input"||t==="change")return vl(e)}function $0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ct=typeof Object.is=="function"?Object.is:$0;function qi(t,e){if(ct(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ja.call(e,i)||!ct(t[i],e[i]))return!1}return!0}function fh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ph(t,e){var n=fh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fh(n)}}function gm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _m(){for(var t=window,e=Eo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Eo(t.document)}return e}function yc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function G0(t){var e=_m(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gm(n.ownerDocument.documentElement,n)){if(r!==null&&yc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ph(n,s);var o=ph(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var K0=Lt&&"documentMode"in document&&11>=document.documentMode,hr=null,iu=null,xi=null,su=!1;function mh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;su||hr==null||hr!==Eo(r)||(r=hr,"selectionStart"in r&&yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xi&&qi(xi,r)||(xi=r,r=Po(iu,"onSelect"),0<r.length&&(e=new gc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=hr)))}function $s(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fr={animationend:$s("Animation","AnimationEnd"),animationiteration:$s("Animation","AnimationIteration"),animationstart:$s("Animation","AnimationStart"),transitionend:$s("Transition","TransitionEnd")},ua={},vm={};Lt&&(vm=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function yl(t){if(ua[t])return ua[t];if(!fr[t])return t;var e=fr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vm)return ua[t]=e[n];return t}var ym=yl("animationend"),wm=yl("animationiteration"),Em=yl("animationstart"),Cm=yl("transitionend"),Sm=new Map,gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(t,e){Sm.set(t,e),tr(e,[t])}for(var ca=0;ca<gh.length;ca++){var da=gh[ca],q0=da.toLowerCase(),Q0=da[0].toUpperCase()+da.slice(1);In(q0,"on"+Q0)}In(ym,"onAnimationEnd");In(wm,"onAnimationIteration");In(Em,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(Cm,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Si));function _h(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qy(r,e,void 0,t),t.currentTarget=null}function Im(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;_h(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;_h(i,l,u),s=a}}}if(So)throw t=eu,So=!1,eu=null,t}function q(t,e){var n=e[cu];n===void 0&&(n=e[cu]=new Set);var r=t+"__bubble";n.has(r)||(Tm(e,t,2,!1),n.add(r))}function ha(t,e,n){var r=0;e&&(r|=4),Tm(n,t,r,e)}var Gs="_reactListening"+Math.random().toString(36).slice(2);function Qi(t){if(!t[Gs]){t[Gs]=!0,Op.forEach(function(n){n!=="selectionchange"&&(Y0.has(n)||ha(n,!1,t),ha(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gs]||(e[Gs]=!0,ha("selectionchange",!1,e))}}function Tm(t,e,n,r){switch(am(e)){case 1:var i=c0;break;case 4:i=d0;break;default:i=pc}n=i.bind(null,e,n,t),i=void 0,!Za||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Mn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}qp(function(){var u=s,d=cc(n),c=[];e:{var h=Sm.get(t);if(h!==void 0){var g=gc,_=t;switch(t){case"keypress":if(lo(n)===0)break e;case"keydown":case"keyup":g=k0;break;case"focusin":_="focus",g=oa;break;case"focusout":_="blur",g=oa;break;case"beforeblur":case"afterblur":g=oa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=p0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=N0;break;case ym:case wm:case Em:g=_0;break;case Cm:g=A0;break;case"scroll":g=h0;break;case"wheel":g=D0;break;case"copy":case"cut":case"paste":g=y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=lh}var v=(e&4)!==0,w=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Vi(f,p),y!=null&&v.push(Yi(f,y,m)))),w)break;f=f.return}0<v.length&&(h=new g(h,_,null,n,d),c.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Ja&&(_=n.relatedTarget||n.fromElement)&&(Mn(_)||_[Mt]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Mn(_):null,_!==null&&(w=nr(_),_!==w||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=sh,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=lh,y="onPointerLeave",p="onPointerEnter",f="pointer"),w=g==null?h:pr(g),m=_==null?h:pr(_),h=new v(y,f+"leave",g,n,d),h.target=w,h.relatedTarget=m,y=null,Mn(d)===u&&(v=new v(p,f+"enter",_,n,d),v.target=m,v.relatedTarget=w,y=v),w=y,g&&_)t:{for(v=g,p=_,f=0,m=v;m;m=or(m))f++;for(m=0,y=p;y;y=or(y))m++;for(;0<f-m;)v=or(v),f--;for(;0<m-f;)p=or(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=or(v),p=or(p)}v=null}else v=null;g!==null&&vh(c,h,g,v,!1),_!==null&&w!==null&&vh(c,w,_,v,!0)}}e:{if(h=u?pr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var T=z0;else if(ch(h))if(pm)T=H0;else{T=B0;var P=W0}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=V0);if(T&&(T=T(t,u))){fm(c,T,n,d);break e}P&&P(t,h,u),t==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Ga(h,"number",h.value)}switch(P=u?pr(u):window,t){case"focusin":(ch(P)||P.contentEditable==="true")&&(hr=P,iu=u,xi=null);break;case"focusout":xi=iu=hr=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,mh(c,n,d);break;case"selectionchange":if(K0)break;case"keydown":case"keyup":mh(c,n,d)}var N;if(vc)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else dr?dm(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(cm&&n.locale!=="ko"&&(dr||x!=="onCompositionStart"?x==="onCompositionEnd"&&dr&&(N=um()):(nn=d,mc="value"in nn?nn.value:nn.textContent,dr=!0)),P=Po(u,x),0<P.length&&(x=new oh(x,t,null,n,d),c.push({event:x,listeners:P}),N?x.data=N:(N=hm(n),N!==null&&(x.data=N)))),(N=M0?b0(t,n):F0(t,n))&&(u=Po(u,"onBeforeInput"),0<u.length&&(d=new oh("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=N))}Im(c,e)})}function Yi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Po(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Vi(t,n),s!=null&&r.unshift(Yi(t,s,i)),s=Vi(t,e),s!=null&&r.push(Yi(t,s,i))),t=t.return}return r}function or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Vi(n,s),a!=null&&o.unshift(Yi(n,a,l))):i||(a=Vi(n,s),a!=null&&o.push(Yi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var J0=/\r\n?/g,X0=/\u0000|\uFFFD/g;function yh(t){return(typeof t=="string"?t:""+t).replace(J0,`
`).replace(X0,"")}function Ks(t,e,n){if(e=yh(e),yh(t)!==e&&n)throw Error(E(425))}function No(){}var ou=null,lu=null;function au(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uu=typeof setTimeout=="function"?setTimeout:void 0,Z0=typeof clearTimeout=="function"?clearTimeout:void 0,wh=typeof Promise=="function"?Promise:void 0,ew=typeof queueMicrotask=="function"?queueMicrotask:typeof wh<"u"?function(t){return wh.resolve(null).then(t).catch(tw)}:uu;function tw(t){setTimeout(function(){throw t})}function pa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Gi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gi(e)}function un(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Eh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),gt="__reactFiber$"+Jr,Ji="__reactProps$"+Jr,Mt="__reactContainer$"+Jr,cu="__reactEvents$"+Jr,nw="__reactListeners$"+Jr,rw="__reactHandles$"+Jr;function Mn(t){var e=t[gt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mt]||n[gt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Eh(t);t!==null;){if(n=t[gt])return n;t=Eh(t)}return e}t=n,n=t.parentNode}return null}function Es(t){return t=t[gt]||t[Mt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function pr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function wl(t){return t[Ji]||null}var du=[],mr=-1;function Tn(t){return{current:t}}function Y(t){0>mr||(t.current=du[mr],du[mr]=null,mr--)}function G(t,e){mr++,du[mr]=t.current,t.current=e}var wn={},Ie=Tn(wn),Me=Tn(!1),Hn=wn;function br(t,e){var n=t.type.contextTypes;if(!n)return wn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function be(t){return t=t.childContextTypes,t!=null}function xo(){Y(Me),Y(Ie)}function Ch(t,e,n){if(Ie.current!==wn)throw Error(E(168));G(Ie,e),G(Me,n)}function km(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,Wy(t)||"Unknown",i));return ee({},n,r)}function Ao(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wn,Hn=Ie.current,G(Ie,t),G(Me,Me.current),!0}function Sh(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=km(t,e,Hn),r.__reactInternalMemoizedMergedChildContext=t,Y(Me),Y(Ie),G(Ie,t)):Y(Me),G(Me,n)}var It=null,El=!1,ma=!1;function Rm(t){It===null?It=[t]:It.push(t)}function iw(t){El=!0,Rm(t)}function kn(){if(!ma&&It!==null){ma=!0;var t=0,e=B;try{var n=It;for(B=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}It=null,El=!1}catch(i){throw It!==null&&(It=It.slice(t+1)),Xp(dc,kn),i}finally{B=e,ma=!1}}return null}var gr=[],_r=0,Oo=null,Do=0,Ke=[],qe=0,$n=null,Tt=1,kt="";function An(t,e){gr[_r++]=Do,gr[_r++]=Oo,Oo=t,Do=e}function Pm(t,e,n){Ke[qe++]=Tt,Ke[qe++]=kt,Ke[qe++]=$n,$n=t;var r=Tt;t=kt;var i=32-lt(r)-1;r&=~(1<<i),n+=1;var s=32-lt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tt=1<<32-lt(e)+i|n<<i|r,kt=s+t}else Tt=1<<s|n<<i|r,kt=t}function wc(t){t.return!==null&&(An(t,1),Pm(t,1,0))}function Ec(t){for(;t===Oo;)Oo=gr[--_r],gr[_r]=null,Do=gr[--_r],gr[_r]=null;for(;t===$n;)$n=Ke[--qe],Ke[qe]=null,kt=Ke[--qe],Ke[qe]=null,Tt=Ke[--qe],Ke[qe]=null}var Be=null,We=null,J=!1,rt=null;function Nm(t,e){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ih(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Be=t,We=un(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Be=t,We=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$n!==null?{id:Tt,overflow:kt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Be=t,We=null,!0):!1;default:return!1}}function hu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fu(t){if(J){var e=We;if(e){var n=e;if(!Ih(t,e)){if(hu(t))throw Error(E(418));e=un(n.nextSibling);var r=Be;e&&Ih(t,e)?Nm(r,n):(t.flags=t.flags&-4097|2,J=!1,Be=t)}}else{if(hu(t))throw Error(E(418));t.flags=t.flags&-4097|2,J=!1,Be=t}}}function Th(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Be=t}function qs(t){if(t!==Be)return!1;if(!J)return Th(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!au(t.type,t.memoizedProps)),e&&(e=We)){if(hu(t))throw xm(),Error(E(418));for(;e;)Nm(t,e),e=un(e.nextSibling)}if(Th(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){We=un(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}We=null}}else We=Be?un(t.stateNode.nextSibling):null;return!0}function xm(){for(var t=We;t;)t=un(t.nextSibling)}function Fr(){We=Be=null,J=!1}function Cc(t){rt===null?rt=[t]:rt.push(t)}var sw=Wt.ReactCurrentBatchConfig;function fi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Qs(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function kh(t){var e=t._init;return e(t._payload)}function Am(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=fn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,y){return f===null||f.tag!==6?(f=Ca(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,y){var T=m.type;return T===cr?d(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===qt&&kh(T)===f.type)?(y=i(f,m.props),y.ref=fi(p,f,m),y.return=p,y):(y=mo(m.type,m.key,m.props,null,p.mode,y),y.ref=fi(p,f,m),y.return=p,y)}function u(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Sa(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,y,T){return f===null||f.tag!==7?(f=Wn(m,p.mode,y,T),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ca(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Us:return m=mo(f.type,f.key,f.props,null,p.mode,m),m.ref=fi(p,null,f),m.return=p,m;case ur:return f=Sa(f,p.mode,m),f.return=p,f;case qt:var y=f._init;return c(p,y(f._payload),m)}if(Ei(f)||ai(f))return f=Wn(f,p.mode,m,null),f.return=p,f;Qs(p,f)}return null}function h(p,f,m,y){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:l(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Us:return m.key===T?a(p,f,m,y):null;case ur:return m.key===T?u(p,f,m,y):null;case qt:return T=m._init,h(p,f,T(m._payload),y)}if(Ei(m)||ai(m))return T!==null?null:d(p,f,m,y,null);Qs(p,m)}return null}function g(p,f,m,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,l(f,p,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Us:return p=p.get(y.key===null?m:y.key)||null,a(f,p,y,T);case ur:return p=p.get(y.key===null?m:y.key)||null,u(f,p,y,T);case qt:var P=y._init;return g(p,f,m,P(y._payload),T)}if(Ei(y)||ai(y))return p=p.get(m)||null,d(f,p,y,T,null);Qs(f,y)}return null}function _(p,f,m,y){for(var T=null,P=null,N=f,x=f=0,K=null;N!==null&&x<m.length;x++){N.index>x?(K=N,N=null):K=N.sibling;var F=h(p,N,m[x],y);if(F===null){N===null&&(N=K);break}t&&N&&F.alternate===null&&e(p,N),f=s(F,f,x),P===null?T=F:P.sibling=F,P=F,N=K}if(x===m.length)return n(p,N),J&&An(p,x),T;if(N===null){for(;x<m.length;x++)N=c(p,m[x],y),N!==null&&(f=s(N,f,x),P===null?T=N:P.sibling=N,P=N);return J&&An(p,x),T}for(N=r(p,N);x<m.length;x++)K=g(N,p,x,m[x],y),K!==null&&(t&&K.alternate!==null&&N.delete(K.key===null?x:K.key),f=s(K,f,x),P===null?T=K:P.sibling=K,P=K);return t&&N.forEach(function(Ze){return e(p,Ze)}),J&&An(p,x),T}function v(p,f,m,y){var T=ai(m);if(typeof T!="function")throw Error(E(150));if(m=T.call(m),m==null)throw Error(E(151));for(var P=T=null,N=f,x=f=0,K=null,F=m.next();N!==null&&!F.done;x++,F=m.next()){N.index>x?(K=N,N=null):K=N.sibling;var Ze=h(p,N,F.value,y);if(Ze===null){N===null&&(N=K);break}t&&N&&Ze.alternate===null&&e(p,N),f=s(Ze,f,x),P===null?T=Ze:P.sibling=Ze,P=Ze,N=K}if(F.done)return n(p,N),J&&An(p,x),T;if(N===null){for(;!F.done;x++,F=m.next())F=c(p,F.value,y),F!==null&&(f=s(F,f,x),P===null?T=F:P.sibling=F,P=F);return J&&An(p,x),T}for(N=r(p,N);!F.done;x++,F=m.next())F=g(N,p,x,F.value,y),F!==null&&(t&&F.alternate!==null&&N.delete(F.key===null?x:F.key),f=s(F,f,x),P===null?T=F:P.sibling=F,P=F);return t&&N.forEach(function(oi){return e(p,oi)}),J&&An(p,x),T}function w(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===cr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Us:e:{for(var T=m.key,P=f;P!==null;){if(P.key===T){if(T=m.type,T===cr){if(P.tag===7){n(p,P.sibling),f=i(P,m.props.children),f.return=p,p=f;break e}}else if(P.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===qt&&kh(T)===P.type){n(p,P.sibling),f=i(P,m.props),f.ref=fi(p,P,m),f.return=p,p=f;break e}n(p,P);break}else e(p,P);P=P.sibling}m.type===cr?(f=Wn(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=mo(m.type,m.key,m.props,null,p.mode,y),y.ref=fi(p,f,m),y.return=p,p=y)}return o(p);case ur:e:{for(P=m.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Sa(m,p.mode,y),f.return=p,p=f}return o(p);case qt:return P=m._init,w(p,f,P(m._payload),y)}if(Ei(m))return _(p,f,m,y);if(ai(m))return v(p,f,m,y);Qs(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Ca(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return w}var Ur=Am(!0),Om=Am(!1),Lo=Tn(null),Mo=null,vr=null,Sc=null;function Ic(){Sc=vr=Mo=null}function Tc(t){var e=Lo.current;Y(Lo),t._currentValue=e}function pu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Rr(t,e){Mo=t,Sc=vr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(De=!0),t.firstContext=null)}function Je(t){var e=t._currentValue;if(Sc!==t)if(t={context:t,memoizedValue:e,next:null},vr===null){if(Mo===null)throw Error(E(308));vr=t,Mo.dependencies={lanes:0,firstContext:t}}else vr=vr.next=t;return e}var bn=null;function kc(t){bn===null?bn=[t]:bn.push(t)}function Dm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,kc(e)):(n.next=i.next,i.next=n),e.interleaved=n,bt(t,r)}function bt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qt=!1;function Rc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function At(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,bt(t,n)}return i=r.interleaved,i===null?(e.next=e,kc(r)):(e.next=i.next,i.next=e),r.interleaved=e,bt(t,n)}function ao(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hc(t,n)}}function Rh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bo(t,e,n,r){var i=t.updateQueue;Qt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(h=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){c=_.call(g,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(g,c,h):_,h==null)break e;c=ee({},c,h);break e;case 2:Qt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,a=c):d=d.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Kn|=o,t.lanes=o,t.memoizedState=c}}function Ph(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Cs={},yt=Tn(Cs),Xi=Tn(Cs),Zi=Tn(Cs);function Fn(t){if(t===Cs)throw Error(E(174));return t}function Pc(t,e){switch(G(Zi,e),G(Xi,t),G(yt,Cs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qa(e,t)}Y(yt),G(yt,e)}function jr(){Y(yt),Y(Xi),Y(Zi)}function Mm(t){Fn(Zi.current);var e=Fn(yt.current),n=qa(e,t.type);e!==n&&(G(Xi,t),G(yt,n))}function Nc(t){Xi.current===t&&(Y(yt),Y(Xi))}var X=Tn(0);function Fo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ga=[];function xc(){for(var t=0;t<ga.length;t++)ga[t]._workInProgressVersionPrimary=null;ga.length=0}var uo=Wt.ReactCurrentDispatcher,_a=Wt.ReactCurrentBatchConfig,Gn=0,Z=null,oe=null,fe=null,Uo=!1,Ai=!1,es=0,ow=0;function we(){throw Error(E(321))}function Ac(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ct(t[n],e[n]))return!1;return!0}function Oc(t,e,n,r,i,s){if(Gn=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,uo.current=t===null||t.memoizedState===null?cw:dw,t=n(r,i),Ai){s=0;do{if(Ai=!1,es=0,25<=s)throw Error(E(301));s+=1,fe=oe=null,e.updateQueue=null,uo.current=hw,t=n(r,i)}while(Ai)}if(uo.current=jo,e=oe!==null&&oe.next!==null,Gn=0,fe=oe=Z=null,Uo=!1,e)throw Error(E(300));return t}function Dc(){var t=es!==0;return es=0,t}function mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?Z.memoizedState=fe=t:fe=fe.next=t,fe}function Xe(){if(oe===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=oe.next;var e=fe===null?Z.memoizedState:fe.next;if(e!==null)fe=e,oe=t;else{if(t===null)throw Error(E(310));oe=t,t={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},fe===null?Z.memoizedState=fe=t:fe=fe.next=t}return fe}function ts(t,e){return typeof e=="function"?e(t):e}function va(t){var e=Xe(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((Gn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,Z.lanes|=d,Kn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ct(r,e.memoizedState)||(De=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,Kn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ya(t){var e=Xe(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ct(s,e.memoizedState)||(De=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function bm(){}function Fm(t,e){var n=Z,r=Xe(),i=e(),s=!ct(r.memoizedState,i);if(s&&(r.memoizedState=i,De=!0),r=r.queue,Lc(zm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,ns(9,jm.bind(null,n,r,i,e),void 0,null),ge===null)throw Error(E(349));Gn&30||Um(n,e,i)}return i}function Um(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function jm(t,e,n,r){e.value=n,e.getSnapshot=r,Wm(e)&&Bm(t)}function zm(t,e,n){return n(function(){Wm(e)&&Bm(t)})}function Wm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ct(t,n)}catch{return!0}}function Bm(t){var e=bt(t,1);e!==null&&at(e,t,1,-1)}function Nh(t){var e=mt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:t},e.queue=t,t=t.dispatch=uw.bind(null,Z,t),[e.memoizedState,t]}function ns(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Vm(){return Xe().memoizedState}function co(t,e,n,r){var i=mt();Z.flags|=t,i.memoizedState=ns(1|e,n,void 0,r===void 0?null:r)}function Cl(t,e,n,r){var i=Xe();r=r===void 0?null:r;var s=void 0;if(oe!==null){var o=oe.memoizedState;if(s=o.destroy,r!==null&&Ac(r,o.deps)){i.memoizedState=ns(e,n,s,r);return}}Z.flags|=t,i.memoizedState=ns(1|e,n,s,r)}function xh(t,e){return co(8390656,8,t,e)}function Lc(t,e){return Cl(2048,8,t,e)}function Hm(t,e){return Cl(4,2,t,e)}function $m(t,e){return Cl(4,4,t,e)}function Gm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Km(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4,4,Gm.bind(null,e,t),n)}function Mc(){}function qm(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ac(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Qm(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ac(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ym(t,e,n){return Gn&21?(ct(n,e)||(n=tm(),Z.lanes|=n,Kn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,De=!0),t.memoizedState=n)}function lw(t,e){var n=B;B=n!==0&&4>n?n:4,t(!0);var r=_a.transition;_a.transition={};try{t(!1),e()}finally{B=n,_a.transition=r}}function Jm(){return Xe().memoizedState}function aw(t,e,n){var r=hn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xm(t))Zm(e,n);else if(n=Dm(t,e,n,r),n!==null){var i=Pe();at(n,t,r,i),eg(n,e,r)}}function uw(t,e,n){var r=hn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xm(t))Zm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ct(l,o)){var a=e.interleaved;a===null?(i.next=i,kc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Dm(t,e,i,r),n!==null&&(i=Pe(),at(n,t,r,i),eg(n,e,r))}}function Xm(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function Zm(t,e){Ai=Uo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function eg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hc(t,n)}}var jo={readContext:Je,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},cw={readContext:Je,useCallback:function(t,e){return mt().memoizedState=[t,e===void 0?null:e],t},useContext:Je,useEffect:xh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,co(4194308,4,Gm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return co(4194308,4,t,e)},useInsertionEffect:function(t,e){return co(4,2,t,e)},useMemo:function(t,e){var n=mt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=mt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=aw.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=mt();return t={current:t},e.memoizedState=t},useState:Nh,useDebugValue:Mc,useDeferredValue:function(t){return mt().memoizedState=t},useTransition:function(){var t=Nh(!1),e=t[0];return t=lw.bind(null,t[1]),mt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=mt();if(J){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),ge===null)throw Error(E(349));Gn&30||Um(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,xh(zm.bind(null,r,s,t),[t]),r.flags|=2048,ns(9,jm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=mt(),e=ge.identifierPrefix;if(J){var n=kt,r=Tt;n=(r&~(1<<32-lt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=es++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ow++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dw={readContext:Je,useCallback:qm,useContext:Je,useEffect:Lc,useImperativeHandle:Km,useInsertionEffect:Hm,useLayoutEffect:$m,useMemo:Qm,useReducer:va,useRef:Vm,useState:function(){return va(ts)},useDebugValue:Mc,useDeferredValue:function(t){var e=Xe();return Ym(e,oe.memoizedState,t)},useTransition:function(){var t=va(ts)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:bm,useSyncExternalStore:Fm,useId:Jm,unstable_isNewReconciler:!1},hw={readContext:Je,useCallback:qm,useContext:Je,useEffect:Lc,useImperativeHandle:Km,useInsertionEffect:Hm,useLayoutEffect:$m,useMemo:Qm,useReducer:ya,useRef:Vm,useState:function(){return ya(ts)},useDebugValue:Mc,useDeferredValue:function(t){var e=Xe();return oe===null?e.memoizedState=t:Ym(e,oe.memoizedState,t)},useTransition:function(){var t=ya(ts)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:bm,useSyncExternalStore:Fm,useId:Jm,unstable_isNewReconciler:!1};function tt(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function mu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sl={isMounted:function(t){return(t=t._reactInternals)?nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pe(),i=hn(t),s=At(r,i);s.payload=e,n!=null&&(s.callback=n),e=cn(t,s,i),e!==null&&(at(e,t,i,r),ao(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pe(),i=hn(t),s=At(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cn(t,s,i),e!==null&&(at(e,t,i,r),ao(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pe(),r=hn(t),i=At(n,r);i.tag=2,e!=null&&(i.callback=e),e=cn(t,i,r),e!==null&&(at(e,t,r,n),ao(e,t,r))}};function Ah(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!qi(n,r)||!qi(i,s):!0}function tg(t,e,n){var r=!1,i=wn,s=e.contextType;return typeof s=="object"&&s!==null?s=Je(s):(i=be(e)?Hn:Ie.current,r=e.contextTypes,s=(r=r!=null)?br(t,i):wn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Oh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Sl.enqueueReplaceState(e,e.state,null)}function gu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Rc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Je(s):(s=be(e)?Hn:Ie.current,i.context=br(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Sl.enqueueReplaceState(i,i.state,null),bo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zr(t,e){try{var n="",r=e;do n+=zy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function wa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _u(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fw=typeof WeakMap=="function"?WeakMap:Map;function ng(t,e,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Wo||(Wo=!0,Ru=r),_u(t,e)},n}function rg(t,e,n){n=At(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_u(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_u(t,e),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Dh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Rw.bind(null,t,e,n),e.then(t,t))}function Lh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=At(-1,1),e.tag=2,cn(n,e,1))),n.lanes|=1),t)}var pw=Wt.ReactCurrentOwner,De=!1;function ke(t,e,n,r){e.child=t===null?Om(e,null,n,r):Ur(e,t.child,n,r)}function bh(t,e,n,r,i){n=n.render;var s=e.ref;return Rr(e,i),r=Oc(t,e,n,r,s,i),n=Dc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ft(t,e,i)):(J&&n&&wc(e),e.flags|=1,ke(t,e,r,i),e.child)}function Fh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Vc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ig(t,e,s,r,i)):(t=mo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qi,n(o,r)&&t.ref===e.ref)return Ft(t,e,i)}return e.flags|=1,t=fn(s,r),t.ref=e.ref,t.return=e,e.child=t}function ig(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(qi(s,r)&&t.ref===e.ref)if(De=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(De=!0);else return e.lanes=t.lanes,Ft(t,e,i)}return vu(t,e,n,r,i)}function sg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(wr,ze),ze|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,G(wr,ze),ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,G(wr,ze),ze|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,G(wr,ze),ze|=r;return ke(t,e,i,n),e.child}function og(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vu(t,e,n,r,i){var s=be(n)?Hn:Ie.current;return s=br(e,s),Rr(e,i),n=Oc(t,e,n,r,s,i),r=Dc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ft(t,e,i)):(J&&r&&wc(e),e.flags|=1,ke(t,e,n,i),e.child)}function Uh(t,e,n,r,i){if(be(n)){var s=!0;Ao(e)}else s=!1;if(Rr(e,i),e.stateNode===null)ho(t,e),tg(e,n,r),gu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=be(n)?Hn:Ie.current,u=br(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Oh(e,o,r,u),Qt=!1;var h=e.memoizedState;o.state=h,bo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Me.current||Qt?(typeof d=="function"&&(mu(e,n,d,r),a=e.memoizedState),(l=Qt||Ah(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Lm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:tt(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Je(a):(a=be(n)?Hn:Ie.current,a=br(e,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&Oh(e,o,r,a),Qt=!1,h=e.memoizedState,o.state=h,bo(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||Me.current||Qt?(typeof g=="function"&&(mu(e,n,g,r),_=e.memoizedState),(u=Qt||Ah(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return yu(t,e,n,r,s,i)}function yu(t,e,n,r,i,s){og(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Sh(e,n,!1),Ft(t,e,s);r=e.stateNode,pw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ur(e,t.child,null,s),e.child=Ur(e,null,l,s)):ke(t,e,l,s),e.memoizedState=r.state,i&&Sh(e,n,!0),e.child}function lg(t){var e=t.stateNode;e.pendingContext?Ch(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ch(t,e.context,!1),Pc(t,e.containerInfo)}function jh(t,e,n,r,i){return Fr(),Cc(i),e.flags|=256,ke(t,e,n,r),e.child}var wu={dehydrated:null,treeContext:null,retryLane:0};function Eu(t){return{baseLanes:t,cachePool:null,transitions:null}}function ag(t,e,n){var r=e.pendingProps,i=X.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),G(X,i&1),t===null)return fu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kl(o,r,0,null),t=Wn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Eu(n),e.memoizedState=wu,t):bc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return mw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=fn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=fn(l,s):(s=Wn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Eu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wu,r}return s=t.child,t=s.sibling,r=fn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function bc(t,e){return e=kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ys(t,e,n,r){return r!==null&&Cc(r),Ur(e,t.child,null,n),t=bc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=wa(Error(E(422))),Ys(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=kl({mode:"visible",children:r.children},i,0,null),s=Wn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ur(e,t.child,null,o),e.child.memoizedState=Eu(o),e.memoizedState=wu,s);if(!(e.mode&1))return Ys(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=wa(s,r,void 0),Ys(t,e,o,r)}if(l=(o&t.childLanes)!==0,De||l){if(r=ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bt(t,i),at(r,t,i,-1))}return Bc(),r=wa(Error(E(421))),Ys(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Pw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,We=un(i.nextSibling),Be=e,J=!0,rt=null,t!==null&&(Ke[qe++]=Tt,Ke[qe++]=kt,Ke[qe++]=$n,Tt=t.id,kt=t.overflow,$n=e),e=bc(e,r.children),e.flags|=4096,e)}function zh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),pu(t.return,e,n)}function Ea(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ug(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ke(t,e,r.children,n),r=X.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zh(t,n,e);else if(t.tag===19)zh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(G(X,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Fo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ea(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Fo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ea(e,!0,n,null,s);break;case"together":Ea(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ho(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ft(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=fn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gw(t,e,n){switch(e.tag){case 3:lg(e),Fr();break;case 5:Mm(e);break;case 1:be(e.type)&&Ao(e);break;case 4:Pc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;G(Lo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(G(X,X.current&1),e.flags|=128,null):n&e.child.childLanes?ag(t,e,n):(G(X,X.current&1),t=Ft(t,e,n),t!==null?t.sibling:null);G(X,X.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ug(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(X,X.current),r)break;return null;case 22:case 23:return e.lanes=0,sg(t,e,n)}return Ft(t,e,n)}var cg,Cu,dg,hg;cg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cu=function(){};dg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Fn(yt.current);var s=null;switch(n){case"input":i=Ha(t,i),r=Ha(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=Ka(t,i),r=Ka(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=No)}Qa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};hg=function(t,e,n,r){n!==r&&(e.flags|=4)};function pi(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ee(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function _w(t,e,n){var r=e.pendingProps;switch(Ec(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(e),null;case 1:return be(e.type)&&xo(),Ee(e),null;case 3:return r=e.stateNode,jr(),Y(Me),Y(Ie),xc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(qs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rt!==null&&(xu(rt),rt=null))),Cu(t,e),Ee(e),null;case 5:Nc(e);var i=Fn(Zi.current);if(n=e.type,t!==null&&e.stateNode!=null)dg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Ee(e),null}if(t=Fn(yt.current),qs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[gt]=e,r[Ji]=s,t=(e.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<Si.length;i++)q(Si[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Qd(r,s),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},q("invalid",r);break;case"textarea":Jd(r,s),q("invalid",r)}Qa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ks(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ks(r.textContent,l,t),i=["children",""+l]):Wi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":js(r),Yd(r,s,!0);break;case"textarea":js(r),Xd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=No)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[gt]=e,t[Ji]=r,cg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ya(n,r),n){case"dialog":q("cancel",t),q("close",t),i=r;break;case"iframe":case"object":case"embed":q("load",t),i=r;break;case"video":case"audio":for(i=0;i<Si.length;i++)q(Si[i],t);i=r;break;case"source":q("error",t),i=r;break;case"img":case"image":case"link":q("error",t),q("load",t),i=r;break;case"details":q("toggle",t),i=r;break;case"input":Qd(t,r),i=Ha(t,r),q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),q("invalid",t);break;case"textarea":Jd(t,r),i=Ka(t,r),q("invalid",t);break;default:i=r}Qa(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Vp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Wp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Bi(t,a):typeof a=="number"&&Bi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&q("scroll",t):a!=null&&oc(t,s,a,o))}switch(n){case"input":js(t),Yd(t,r,!1);break;case"textarea":js(t),Xd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Sr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Sr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=No)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ee(e),null;case 6:if(t&&e.stateNode!=null)hg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=Fn(Zi.current),Fn(yt.current),qs(e)){if(r=e.stateNode,n=e.memoizedProps,r[gt]=e,(s=r.nodeValue!==n)&&(t=Be,t!==null))switch(t.tag){case 3:Ks(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ks(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=e,e.stateNode=r}return Ee(e),null;case 13:if(Y(X),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&We!==null&&e.mode&1&&!(e.flags&128))xm(),Fr(),e.flags|=98560,s=!1;else if(s=qs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[gt]=e}else Fr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ee(e),s=!1}else rt!==null&&(xu(rt),rt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||X.current&1?ue===0&&(ue=3):Bc())),e.updateQueue!==null&&(e.flags|=4),Ee(e),null);case 4:return jr(),Cu(t,e),t===null&&Qi(e.stateNode.containerInfo),Ee(e),null;case 10:return Tc(e.type._context),Ee(e),null;case 17:return be(e.type)&&xo(),Ee(e),null;case 19:if(Y(X),s=e.memoizedState,s===null)return Ee(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)pi(s,!1);else{if(ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fo(t),o!==null){for(e.flags|=128,pi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return G(X,X.current&1|2),e.child}t=t.sibling}s.tail!==null&&ie()>Wr&&(e.flags|=128,r=!0,pi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Fo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),pi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return Ee(e),null}else 2*ie()-s.renderingStartTime>Wr&&n!==1073741824&&(e.flags|=128,r=!0,pi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ie(),e.sibling=null,n=X.current,G(X,r?n&1|2:n&1),e):(Ee(e),null);case 22:case 23:return Wc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ze&1073741824&&(Ee(e),e.subtreeFlags&6&&(e.flags|=8192)):Ee(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function vw(t,e){switch(Ec(e),e.tag){case 1:return be(e.type)&&xo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return jr(),Y(Me),Y(Ie),xc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Nc(e),null;case 13:if(Y(X),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Fr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(X),null;case 4:return jr(),null;case 10:return Tc(e.type._context),null;case 22:case 23:return Wc(),null;case 24:return null;default:return null}}var Js=!1,Ce=!1,yw=typeof WeakSet=="function"?WeakSet:Set,k=null;function yr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(t,e,r)}else n.current=null}function Su(t,e,n){try{n()}catch(r){te(t,e,r)}}var Wh=!1;function ww(t,e){if(ou=ko,t=_m(),yc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(lu={focusedElem:t,selectionRange:n},ko=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,w=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:tt(e.type,v),w);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){te(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return _=Wh,Wh=!1,_}function Oi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Su(e,n,s)}i=i.next}while(i!==r)}}function Il(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Iu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function fg(t){var e=t.alternate;e!==null&&(t.alternate=null,fg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gt],delete e[Ji],delete e[cu],delete e[nw],delete e[rw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pg(t){return t.tag===5||t.tag===3||t.tag===4}function Bh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=No));else if(r!==4&&(t=t.child,t!==null))for(Tu(t,e,n),t=t.sibling;t!==null;)Tu(t,e,n),t=t.sibling}function ku(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ku(t,e,n),t=t.sibling;t!==null;)ku(t,e,n),t=t.sibling}var _e=null,nt=!1;function $t(t,e,n){for(n=n.child;n!==null;)mg(t,e,n),n=n.sibling}function mg(t,e,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(gl,n)}catch{}switch(n.tag){case 5:Ce||yr(n,e);case 6:var r=_e,i=nt;_e=null,$t(t,e,n),_e=r,nt=i,_e!==null&&(nt?(t=_e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(nt?(t=_e,n=n.stateNode,t.nodeType===8?pa(t.parentNode,n):t.nodeType===1&&pa(t,n),Gi(t)):pa(_e,n.stateNode));break;case 4:r=_e,i=nt,_e=n.stateNode.containerInfo,nt=!0,$t(t,e,n),_e=r,nt=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Su(n,e,o),i=i.next}while(i!==r)}$t(t,e,n);break;case 1:if(!Ce&&(yr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,e,l)}$t(t,e,n);break;case 21:$t(t,e,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,$t(t,e,n),Ce=r):$t(t,e,n);break;default:$t(t,e,n)}}function Vh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yw),e.forEach(function(r){var i=Nw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,nt=!1;break e;case 3:_e=l.stateNode.containerInfo,nt=!0;break e;case 4:_e=l.stateNode.containerInfo,nt=!0;break e}l=l.return}if(_e===null)throw Error(E(160));mg(s,o,i),_e=null,nt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gg(e,t),e=e.sibling}function gg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(et(e,t),ht(t),r&4){try{Oi(3,t,t.return),Il(3,t)}catch(v){te(t,t.return,v)}try{Oi(5,t,t.return)}catch(v){te(t,t.return,v)}}break;case 1:et(e,t),ht(t),r&512&&n!==null&&yr(n,n.return);break;case 5:if(et(e,t),ht(t),r&512&&n!==null&&yr(n,n.return),t.flags&32){var i=t.stateNode;try{Bi(i,"")}catch(v){te(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Up(i,s),Ya(l,o);var u=Ya(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Vp(i,c):d==="dangerouslySetInnerHTML"?Wp(i,c):d==="children"?Bi(i,c):oc(i,d,c,u)}switch(l){case"input":$a(i,s);break;case"textarea":jp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Sr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Sr(i,!!s.multiple,s.defaultValue,!0):Sr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ji]=s}catch(v){te(t,t.return,v)}}break;case 6:if(et(e,t),ht(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){te(t,t.return,v)}}break;case 3:if(et(e,t),ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gi(e.containerInfo)}catch(v){te(t,t.return,v)}break;case 4:et(e,t),ht(t);break;case 13:et(e,t),ht(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(jc=ie())),r&4&&Vh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ce=(u=Ce)||d,et(e,t),Ce=u):et(e,t),ht(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(k=t,d=t.child;d!==null;){for(c=k=d;k!==null;){switch(h=k,g=h.child,h.tag){case 0:case 11:case 14:case 15:Oi(4,h,h.return);break;case 1:yr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){te(r,n,v)}}break;case 5:yr(h,h.return);break;case 22:if(h.memoizedState!==null){$h(c);continue}}g!==null?(g.return=h,k=g):$h(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Bp("display",o))}catch(v){te(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){te(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:et(e,t),ht(t),r&4&&Vh(t);break;case 21:break;default:et(e,t),ht(t)}}function ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(pg(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bi(i,""),r.flags&=-33);var s=Bh(t);ku(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Bh(t);Tu(t,l,o);break;default:throw Error(E(161))}}catch(a){te(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ew(t,e,n){k=t,_g(t)}function _g(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Js;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ce;l=Js;var u=Ce;if(Js=o,(Ce=a)&&!u)for(k=i;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?Gh(i):a!==null?(a.return=o,k=a):Gh(i);for(;s!==null;)k=s,_g(s),s=s.sibling;k=i,Js=l,Ce=u}Hh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):Hh(t)}}function Hh(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ce||Il(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ph(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ph(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Gi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ce||e.flags&512&&Iu(e)}catch(h){te(e,e.return,h)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function $h(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function Gh(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Il(4,e)}catch(a){te(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){te(e,i,a)}}var s=e.return;try{Iu(e)}catch(a){te(e,s,a)}break;case 5:var o=e.return;try{Iu(e)}catch(a){te(e,o,a)}}}catch(a){te(e,e.return,a)}if(e===t){k=null;break}var l=e.sibling;if(l!==null){l.return=e.return,k=l;break}k=e.return}}var Cw=Math.ceil,zo=Wt.ReactCurrentDispatcher,Fc=Wt.ReactCurrentOwner,Ye=Wt.ReactCurrentBatchConfig,z=0,ge=null,se=null,ve=0,ze=0,wr=Tn(0),ue=0,rs=null,Kn=0,Tl=0,Uc=0,Di=null,Oe=null,jc=0,Wr=1/0,St=null,Wo=!1,Ru=null,dn=null,Xs=!1,rn=null,Bo=0,Li=0,Pu=null,fo=-1,po=0;function Pe(){return z&6?ie():fo!==-1?fo:fo=ie()}function hn(t){return t.mode&1?z&2&&ve!==0?ve&-ve:sw.transition!==null?(po===0&&(po=tm()),po):(t=B,t!==0||(t=window.event,t=t===void 0?16:am(t.type)),t):1}function at(t,e,n,r){if(50<Li)throw Li=0,Pu=null,Error(E(185));ys(t,n,r),(!(z&2)||t!==ge)&&(t===ge&&(!(z&2)&&(Tl|=n),ue===4&&Jt(t,ve)),Fe(t,r),n===1&&z===0&&!(e.mode&1)&&(Wr=ie()+500,El&&kn()))}function Fe(t,e){var n=t.callbackNode;s0(t,e);var r=To(t,t===ge?ve:0);if(r===0)n!==null&&th(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&th(n),e===1)t.tag===0?iw(Kh.bind(null,t)):Rm(Kh.bind(null,t)),ew(function(){!(z&6)&&kn()}),n=null;else{switch(nm(r)){case 1:n=dc;break;case 4:n=Zp;break;case 16:n=Io;break;case 536870912:n=em;break;default:n=Io}n=Tg(n,vg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function vg(t,e){if(fo=-1,po=0,z&6)throw Error(E(327));var n=t.callbackNode;if(Pr()&&t.callbackNode!==n)return null;var r=To(t,t===ge?ve:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Vo(t,r);else{e=r;var i=z;z|=2;var s=wg();(ge!==t||ve!==e)&&(St=null,Wr=ie()+500,zn(t,e));do try{Tw();break}catch(l){yg(t,l)}while(!0);Ic(),zo.current=s,z=i,se!==null?e=0:(ge=null,ve=0,e=ue)}if(e!==0){if(e===2&&(i=tu(t),i!==0&&(r=i,e=Nu(t,i))),e===1)throw n=rs,zn(t,0),Jt(t,r),Fe(t,ie()),n;if(e===6)Jt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Sw(i)&&(e=Vo(t,r),e===2&&(s=tu(t),s!==0&&(r=s,e=Nu(t,s))),e===1))throw n=rs,zn(t,0),Jt(t,r),Fe(t,ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:On(t,Oe,St);break;case 3:if(Jt(t,r),(r&130023424)===r&&(e=jc+500-ie(),10<e)){if(To(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=uu(On.bind(null,t,Oe,St),e);break}On(t,Oe,St);break;case 4:if(Jt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-lt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cw(r/1960))-r,10<r){t.timeoutHandle=uu(On.bind(null,t,Oe,St),r);break}On(t,Oe,St);break;case 5:On(t,Oe,St);break;default:throw Error(E(329))}}}return Fe(t,ie()),t.callbackNode===n?vg.bind(null,t):null}function Nu(t,e){var n=Di;return t.current.memoizedState.isDehydrated&&(zn(t,e).flags|=256),t=Vo(t,e),t!==2&&(e=Oe,Oe=n,e!==null&&xu(e)),t}function xu(t){Oe===null?Oe=t:Oe.push.apply(Oe,t)}function Sw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ct(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jt(t,e){for(e&=~Uc,e&=~Tl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-lt(e),r=1<<n;t[n]=-1,e&=~r}}function Kh(t){if(z&6)throw Error(E(327));Pr();var e=To(t,0);if(!(e&1))return Fe(t,ie()),null;var n=Vo(t,e);if(t.tag!==0&&n===2){var r=tu(t);r!==0&&(e=r,n=Nu(t,r))}if(n===1)throw n=rs,zn(t,0),Jt(t,e),Fe(t,ie()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,On(t,Oe,St),Fe(t,ie()),null}function zc(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(Wr=ie()+500,El&&kn())}}function qn(t){rn!==null&&rn.tag===0&&!(z&6)&&Pr();var e=z;z|=1;var n=Ye.transition,r=B;try{if(Ye.transition=null,B=1,t)return t()}finally{B=r,Ye.transition=n,z=e,!(z&6)&&kn()}}function Wc(){ze=wr.current,Y(wr)}function zn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Z0(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Ec(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xo();break;case 3:jr(),Y(Me),Y(Ie),xc();break;case 5:Nc(r);break;case 4:jr();break;case 13:Y(X);break;case 19:Y(X);break;case 10:Tc(r.type._context);break;case 22:case 23:Wc()}n=n.return}if(ge=t,se=t=fn(t.current,null),ve=ze=e,ue=0,rs=null,Uc=Tl=Kn=0,Oe=Di=null,bn!==null){for(e=0;e<bn.length;e++)if(n=bn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}bn=null}return t}function yg(t,e){do{var n=se;try{if(Ic(),uo.current=jo,Uo){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Uo=!1}if(Gn=0,fe=oe=Z=null,Ai=!1,es=0,Fc.current=null,n===null||n.return===null){ue=1,rs=e,se=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ve,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Lh(o);if(g!==null){g.flags&=-257,Mh(g,o,l,s,e),g.mode&1&&Dh(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if(!(e&1)){Dh(s,u,e),Bc();break e}a=Error(E(426))}}else if(J&&l.mode&1){var w=Lh(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Mh(w,o,l,s,e),Cc(zr(a,l));break e}}s=a=zr(a,l),ue!==4&&(ue=2),Di===null?Di=[s]:Di.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=ng(s,a,e);Rh(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(dn===null||!dn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=rg(s,l,e);Rh(s,y);break e}}s=s.return}while(s!==null)}Cg(n)}catch(T){e=T,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function wg(){var t=zo.current;return zo.current=jo,t===null?jo:t}function Bc(){(ue===0||ue===3||ue===2)&&(ue=4),ge===null||!(Kn&268435455)&&!(Tl&268435455)||Jt(ge,ve)}function Vo(t,e){var n=z;z|=2;var r=wg();(ge!==t||ve!==e)&&(St=null,zn(t,e));do try{Iw();break}catch(i){yg(t,i)}while(!0);if(Ic(),z=n,zo.current=r,se!==null)throw Error(E(261));return ge=null,ve=0,ue}function Iw(){for(;se!==null;)Eg(se)}function Tw(){for(;se!==null&&!Yy();)Eg(se)}function Eg(t){var e=Ig(t.alternate,t,ze);t.memoizedProps=t.pendingProps,e===null?Cg(t):se=e,Fc.current=null}function Cg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vw(n,e),n!==null){n.flags&=32767,se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ue=6,se=null;return}}else if(n=_w(n,e,ze),n!==null){se=n;return}if(e=e.sibling,e!==null){se=e;return}se=e=t}while(e!==null);ue===0&&(ue=5)}function On(t,e,n){var r=B,i=Ye.transition;try{Ye.transition=null,B=1,kw(t,e,n,r)}finally{Ye.transition=i,B=r}return null}function kw(t,e,n,r){do Pr();while(rn!==null);if(z&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(o0(t,s),t===ge&&(se=ge=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xs||(Xs=!0,Tg(Io,function(){return Pr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ye.transition,Ye.transition=null;var o=B;B=1;var l=z;z|=4,Fc.current=null,ww(t,n),gg(n,t),G0(lu),ko=!!ou,lu=ou=null,t.current=n,Ew(n),Jy(),z=l,B=o,Ye.transition=s}else t.current=n;if(Xs&&(Xs=!1,rn=t,Bo=i),s=t.pendingLanes,s===0&&(dn=null),e0(n.stateNode),Fe(t,ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wo)throw Wo=!1,t=Ru,Ru=null,t;return Bo&1&&t.tag!==0&&Pr(),s=t.pendingLanes,s&1?t===Pu?Li++:(Li=0,Pu=t):Li=0,kn(),null}function Pr(){if(rn!==null){var t=nm(Bo),e=Ye.transition,n=B;try{if(Ye.transition=null,B=16>t?16:t,rn===null)var r=!1;else{if(t=rn,rn=null,Bo=0,z&6)throw Error(E(331));var i=z;for(z|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(k=u;k!==null;){var d=k;switch(d.tag){case 0:case 11:case 15:Oi(8,d,s)}var c=d.child;if(c!==null)c.return=d,k=c;else for(;k!==null;){d=k;var h=d.sibling,g=d.return;if(fg(d),d===u){k=null;break}if(h!==null){h.return=g,k=h;break}k=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,k=m;else e:for(o=f;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Il(9,l)}}catch(T){te(l,l.return,T)}if(l===o){k=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,k=y;break e}k=l.return}}if(z=i,kn(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(gl,t)}catch{}r=!0}return r}finally{B=n,Ye.transition=e}}return!1}function qh(t,e,n){e=zr(n,e),e=ng(t,e,1),t=cn(t,e,1),e=Pe(),t!==null&&(ys(t,1,e),Fe(t,e))}function te(t,e,n){if(t.tag===3)qh(t,t,n);else for(;e!==null;){if(e.tag===3){qh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){t=zr(n,t),t=rg(e,t,1),e=cn(e,t,1),t=Pe(),e!==null&&(ys(e,1,t),Fe(e,t));break}}e=e.return}}function Rw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pe(),t.pingedLanes|=t.suspendedLanes&n,ge===t&&(ve&n)===n&&(ue===4||ue===3&&(ve&130023424)===ve&&500>ie()-jc?zn(t,0):Uc|=n),Fe(t,e)}function Sg(t,e){e===0&&(t.mode&1?(e=Bs,Bs<<=1,!(Bs&130023424)&&(Bs=4194304)):e=1);var n=Pe();t=bt(t,e),t!==null&&(ys(t,e,n),Fe(t,n))}function Pw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Sg(t,n)}function Nw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),Sg(t,n)}var Ig;Ig=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Me.current)De=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return De=!1,gw(t,e,n);De=!!(t.flags&131072)}else De=!1,J&&e.flags&1048576&&Pm(e,Do,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ho(t,e),t=e.pendingProps;var i=br(e,Ie.current);Rr(e,n),i=Oc(null,e,r,t,i,n);var s=Dc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,be(r)?(s=!0,Ao(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rc(e),i.updater=Sl,e.stateNode=i,i._reactInternals=e,gu(e,r,t,n),e=yu(null,e,r,!0,s,n)):(e.tag=0,J&&s&&wc(e),ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ho(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Aw(r),t=tt(r,t),i){case 0:e=vu(null,e,r,t,n);break e;case 1:e=Uh(null,e,r,t,n);break e;case 11:e=bh(null,e,r,t,n);break e;case 14:e=Fh(null,e,r,tt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),vu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Uh(t,e,r,i,n);case 3:e:{if(lg(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Lm(t,e),bo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=zr(Error(E(423)),e),e=jh(t,e,r,n,i);break e}else if(r!==i){i=zr(Error(E(424)),e),e=jh(t,e,r,n,i);break e}else for(We=un(e.stateNode.containerInfo.firstChild),Be=e,J=!0,rt=null,n=Om(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fr(),r===i){e=Ft(t,e,n);break e}ke(t,e,r,n)}e=e.child}return e;case 5:return Mm(e),t===null&&fu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,au(r,i)?o=null:s!==null&&au(r,s)&&(e.flags|=32),og(t,e),ke(t,e,o,n),e.child;case 6:return t===null&&fu(e),null;case 13:return ag(t,e,n);case 4:return Pc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ur(e,null,r,n):ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),bh(t,e,r,i,n);case 7:return ke(t,e,e.pendingProps,n),e.child;case 8:return ke(t,e,e.pendingProps.children,n),e.child;case 12:return ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,G(Lo,r._currentValue),r._currentValue=o,s!==null)if(ct(s.value,o)){if(s.children===i.children&&!Me.current){e=Ft(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=At(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),pu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),pu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Rr(e,n),i=Je(i),r=r(i),e.flags|=1,ke(t,e,r,n),e.child;case 14:return r=e.type,i=tt(r,e.pendingProps),i=tt(r.type,i),Fh(t,e,r,i,n);case 15:return ig(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),ho(t,e),e.tag=1,be(r)?(t=!0,Ao(e)):t=!1,Rr(e,n),tg(e,r,i),gu(e,r,i,n),yu(null,e,r,!0,t,n);case 19:return ug(t,e,n);case 22:return sg(t,e,n)}throw Error(E(156,e.tag))};function Tg(t,e){return Xp(t,e)}function xw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(t,e,n,r){return new xw(t,e,n,r)}function Vc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Aw(t){if(typeof t=="function")return Vc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ac)return 11;if(t===uc)return 14}return 2}function fn(t,e){var n=t.alternate;return n===null?(n=Qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function mo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case cr:return Wn(n.children,i,s,e);case lc:o=8,i|=8;break;case za:return t=Qe(12,n,e,i|2),t.elementType=za,t.lanes=s,t;case Wa:return t=Qe(13,n,e,i),t.elementType=Wa,t.lanes=s,t;case Ba:return t=Qe(19,n,e,i),t.elementType=Ba,t.lanes=s,t;case Mp:return kl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dp:o=10;break e;case Lp:o=9;break e;case ac:o=11;break e;case uc:o=14;break e;case qt:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=Qe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wn(t,e,n,r){return t=Qe(7,t,r,e),t.lanes=n,t}function kl(t,e,n,r){return t=Qe(22,t,r,e),t.elementType=Mp,t.lanes=n,t.stateNode={isHidden:!1},t}function Ca(t,e,n){return t=Qe(6,t,null,e),t.lanes=n,t}function Sa(t,e,n){return e=Qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ow(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ra(0),this.expirationTimes=ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hc(t,e,n,r,i,s,o,l,a){return t=new Ow(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rc(s),t}function Dw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ur,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function kg(t){if(!t)return wn;t=t._reactInternals;e:{if(nr(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(be(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(be(n))return km(t,n,e)}return e}function Rg(t,e,n,r,i,s,o,l,a){return t=Hc(n,r,!0,t,i,s,o,l,a),t.context=kg(null),n=t.current,r=Pe(),i=hn(n),s=At(r,i),s.callback=e??null,cn(n,s,i),t.current.lanes=i,ys(t,i,r),Fe(t,r),t}function Rl(t,e,n,r){var i=e.current,s=Pe(),o=hn(i);return n=kg(n),e.context===null?e.context=n:e.pendingContext=n,e=At(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cn(i,e,o),t!==null&&(at(t,i,o,s),ao(t,i,o)),o}function Ho(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $c(t,e){Qh(t,e),(t=t.alternate)&&Qh(t,e)}function Lw(){return null}var Pg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gc(t){this._internalRoot=t}Pl.prototype.render=Gc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));Rl(t,e,null,null)};Pl.prototype.unmount=Gc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qn(function(){Rl(null,t,null,null)}),e[Mt]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=sm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yt.length&&e!==0&&e<Yt[n].priority;n++);Yt.splice(n,0,t),n===0&&lm(t)}};function Kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yh(){}function Mw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ho(o);s.call(u)}}var o=Rg(e,r,t,0,null,!1,!1,"",Yh);return t._reactRootContainer=o,t[Mt]=o.current,Qi(t.nodeType===8?t.parentNode:t),qn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ho(a);l.call(u)}}var a=Hc(t,0,!1,null,null,!1,!1,"",Yh);return t._reactRootContainer=a,t[Mt]=a.current,Qi(t.nodeType===8?t.parentNode:t),qn(function(){Rl(e,a,n,r)}),a}function xl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Ho(o);l.call(a)}}Rl(e,o,t,i)}else o=Mw(n,e,t,i,r);return Ho(o)}rm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ci(e.pendingLanes);n!==0&&(hc(e,n|1),Fe(e,ie()),!(z&6)&&(Wr=ie()+500,kn()))}break;case 13:qn(function(){var r=bt(t,1);if(r!==null){var i=Pe();at(r,t,1,i)}}),$c(t,1)}};fc=function(t){if(t.tag===13){var e=bt(t,134217728);if(e!==null){var n=Pe();at(e,t,134217728,n)}$c(t,134217728)}};im=function(t){if(t.tag===13){var e=hn(t),n=bt(t,e);if(n!==null){var r=Pe();at(n,t,e,r)}$c(t,e)}};sm=function(){return B};om=function(t,e){var n=B;try{return B=t,e()}finally{B=n}};Xa=function(t,e,n){switch(e){case"input":if($a(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wl(r);if(!i)throw Error(E(90));Fp(r),$a(r,i)}}}break;case"textarea":jp(t,n);break;case"select":e=n.value,e!=null&&Sr(t,!!n.multiple,e,!1)}};Gp=zc;Kp=qn;var bw={usingClientEntryPoint:!1,Events:[Es,pr,wl,Hp,$p,zc]},mi={findFiberByHostInstance:Mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fw={bundleType:mi.bundleType,version:mi.version,rendererPackageName:mi.rendererPackageName,rendererConfig:mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yp(t),t===null?null:t.stateNode},findFiberByHostInstance:mi.findFiberByHostInstance||Lw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zs.isDisabled&&Zs.supportsFiber)try{gl=Zs.inject(Fw),vt=Zs}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bw;He.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kc(e))throw Error(E(200));return Dw(t,e,null,n)};He.createRoot=function(t,e){if(!Kc(t))throw Error(E(299));var n=!1,r="",i=Pg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Hc(t,1,!1,null,null,n,!1,r,i),t[Mt]=e.current,Qi(t.nodeType===8?t.parentNode:t),new Gc(e)};He.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Yp(e),t=t===null?null:t.stateNode,t};He.flushSync=function(t){return qn(t)};He.hydrate=function(t,e,n){if(!Nl(e))throw Error(E(200));return xl(null,t,e,!0,n)};He.hydrateRoot=function(t,e,n){if(!Kc(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Pg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Rg(e,null,t,1,n??null,i,!1,s,o),t[Mt]=e.current,Qi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Pl(e)};He.render=function(t,e,n){if(!Nl(e))throw Error(E(200));return xl(null,t,e,!1,n)};He.unmountComponentAtNode=function(t){if(!Nl(t))throw Error(E(40));return t._reactRootContainer?(qn(function(){xl(null,null,t,!1,function(){t._reactRootContainer=null,t[Mt]=null})}),!0):!1};He.unstable_batchedUpdates=zc;He.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nl(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return xl(t,e,n,!1,r)};He.version="18.3.1-next-f1338f8080-20240426";function Ng(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ng)}catch(t){console.error(t)}}Ng(),Np.exports=He;var Uw=Np.exports,xg,Jh=Uw;xg=Jh.createRoot,Jh.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},is.apply(this,arguments)}var sn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(sn||(sn={}));const Xh="popstate";function jw(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Au("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Og(i)}return Ww(e,n,null,t)}function ce(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ag(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function zw(){return Math.random().toString(36).substr(2,8)}function Zh(t,e){return{usr:t.state,key:t.key,idx:e}}function Au(t,e,n,r){return n===void 0&&(n=null),is({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Xr(e):e,{state:n,key:e&&e.key||r||zw()})}function Og(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Xr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Ww(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=sn.Pop,a=null,u=d();u==null&&(u=0,o.replaceState(is({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){l=sn.Pop;let w=d(),p=w==null?null:w-u;u=w,a&&a({action:l,location:v.location,delta:p})}function h(w,p){l=sn.Push;let f=Au(v.location,w,p);u=d()+1;let m=Zh(f,u),y=v.createHref(f);try{o.pushState(m,"",y)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(y)}s&&a&&a({action:l,location:v.location,delta:1})}function g(w,p){l=sn.Replace;let f=Au(v.location,w,p);u=d();let m=Zh(f,u),y=v.createHref(f);o.replaceState(m,"",y),s&&a&&a({action:l,location:v.location,delta:0})}function _(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:Og(w);return f=f.replace(/ $/,"%20"),ce(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return l},get location(){return t(i,o)},listen(w){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Xh,c),a=w,()=>{i.removeEventListener(Xh,c),a=null}},createHref(w){return e(i,w)},createURL:_,encodeLocation(w){let p=_(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(w){return o.go(w)}};return v}var ef;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ef||(ef={}));function Bw(t,e,n){return n===void 0&&(n="/"),Vw(t,e,n,!1)}function Vw(t,e,n,r){let i=typeof e=="string"?Xr(e):e,s=Mg(i.pathname||"/",n);if(s==null)return null;let o=Dg(t);Hw(o);let l=null;for(let a=0;l==null&&a<o.length;++a){let u=tE(s);l=Zw(o[a],u,r)}return l}function Dg(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(ce(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Bn([r,a.relativePath]),d=n.concat(a);s.children&&s.children.length>0&&(ce(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Dg(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Jw(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Lg(s.path))i(s,o,a)}),e}function Lg(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Lg(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function Hw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Xw(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $w=/^:[\w-]+$/,Gw=3,Kw=2,qw=1,Qw=10,Yw=-2,tf=t=>t==="*";function Jw(t,e){let n=t.split("/"),r=n.length;return n.some(tf)&&(r+=Yw),e&&(r+=Kw),n.filter(i=>!tf(i)).reduce((i,s)=>i+($w.test(s)?Gw:s===""?qw:Qw),r)}function Xw(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Zw(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let a=r[l],u=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",c=nf({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),h=a.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=nf({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},d)),!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:Bn([s,c.pathname]),pathnameBase:lE(Bn([s,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(s=Bn([s,c.pathnameBase]))}return o}function nf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=eE(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:g}=d;if(h==="*"){let v=l[c]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const _=l[c];return g&&!_?u[h]=void 0:u[h]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function eE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ag(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function tE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ag(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Mg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function nE(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Xr(t):t;return{pathname:n?n.startsWith("/")?n:rE(n,e):e,search:aE(r),hash:uE(i)}}function rE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ia(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function iE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function sE(t,e){let n=iE(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function oE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Xr(t):(i=is({},t),ce(!i.pathname||!i.pathname.includes("?"),Ia("?","pathname","search",i)),ce(!i.pathname||!i.pathname.includes("#"),Ia("#","pathname","hash",i)),ce(!i.search||!i.search.includes("#"),Ia("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}l=c>=0?e[c]:"/"}let a=nE(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const Bn=t=>t.join("/").replace(/\/\/+/g,"/"),lE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),aE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,uE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function cE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const bg=["post","put","patch","delete"];new Set(bg);const dE=["get",...bg];new Set(dE);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ss(){return ss=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ss.apply(this,arguments)}const qc=I.createContext(null),hE=I.createContext(null),Al=I.createContext(null),Ol=I.createContext(null),rr=I.createContext({outlet:null,matches:[],isDataRoute:!1}),Fg=I.createContext(null);function Dl(){return I.useContext(Ol)!=null}function Ug(){return Dl()||ce(!1),I.useContext(Ol).location}function jg(t){I.useContext(Al).static||I.useLayoutEffect(t)}function Ss(){let{isDataRoute:t}=I.useContext(rr);return t?kE():fE()}function fE(){Dl()||ce(!1);let t=I.useContext(qc),{basename:e,future:n,navigator:r}=I.useContext(Al),{matches:i}=I.useContext(rr),{pathname:s}=Ug(),o=JSON.stringify(sE(i,n.v7_relativeSplatPath)),l=I.useRef(!1);return jg(()=>{l.current=!0}),I.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=oE(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Bn([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}function pE(){let{matches:t}=I.useContext(rr),e=t[t.length-1];return e?e.params:{}}function mE(t,e){return gE(t,e)}function gE(t,e,n,r){Dl()||ce(!1);let{navigator:i}=I.useContext(Al),{matches:s}=I.useContext(rr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=Ug(),d;if(e){var c;let w=typeof e=="string"?Xr(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||ce(!1),d=w}else d=u;let h=d.pathname||"/",g=h;if(a!=="/"){let w=a.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(w.length).join("/")}let _=Bw(t,{pathname:g}),v=EE(_&&_.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:Bn([a,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Bn([a,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&v?I.createElement(Ol.Provider,{value:{location:ss({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:sn.Pop}},v):v}function _E(){let t=TE(),e=cE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,null)}const vE=I.createElement(_E,null);class yE extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?I.createElement(rr.Provider,{value:this.props.routeContext},I.createElement(Fg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wE(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(qc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(rr.Provider,{value:e},r)}function EE(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id])!==void 0);d>=0||ce(!1),o=o.slice(0,Math.min(o.length,d+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:g}=n,_=c.route.loader&&h[c.route.id]===void 0&&(!g||g[c.route.id]===void 0);if(c.route.lazy||_){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,h)=>{let g,_=!1,v=null,w=null;n&&(g=l&&c.route.id?l[c.route.id]:void 0,v=c.route.errorElement||vE,a&&(u<0&&h===0?(_=!0,w=null):u===h&&(_=!0,w=c.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,h+1)),f=()=>{let m;return g?m=v:_?m=w:c.route.Component?m=I.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=d,I.createElement(wE,{match:c,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?I.createElement(yE,{location:n.location,revalidation:n.revalidation,component:v,error:g,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var zg=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(zg||{}),$o=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}($o||{});function CE(t){let e=I.useContext(qc);return e||ce(!1),e}function SE(t){let e=I.useContext(hE);return e||ce(!1),e}function IE(t){let e=I.useContext(rr);return e||ce(!1),e}function Wg(t){let e=IE(),n=e.matches[e.matches.length-1];return n.route.id||ce(!1),n.route.id}function TE(){var t;let e=I.useContext(Fg),n=SE($o.UseRouteError),r=Wg($o.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function kE(){let{router:t}=CE(zg.UseNavigateStable),e=Wg($o.UseNavigateStable),n=I.useRef(!1);return jg(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ss({fromRouteId:e},s)))},[t,e])}function ar(t){ce(!1)}function RE(t){let{basename:e="/",children:n=null,location:r,navigationType:i=sn.Pop,navigator:s,static:o=!1,future:l}=t;Dl()&&ce(!1);let a=e.replace(/^\/*/,"/"),u=I.useMemo(()=>({basename:a,navigator:s,static:o,future:ss({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=Xr(r));let{pathname:d="/",search:c="",hash:h="",state:g=null,key:_="default"}=r,v=I.useMemo(()=>{let w=Mg(d,a);return w==null?null:{location:{pathname:w,search:c,hash:h,state:g,key:_},navigationType:i}},[a,d,c,h,g,_,i]);return v==null?null:I.createElement(Al.Provider,{value:u},I.createElement(Ol.Provider,{children:n,value:v}))}function PE(t){let{children:e,location:n}=t;return mE(Ou(e),n)}new Promise(()=>{});function Ou(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,Ou(r.props.children,s));return}r.type!==ar&&ce(!1),!r.props.index||!r.props.children||ce(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ou(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const NE="6";try{window.__reactRouterVersion=NE}catch{}const xE="startTransition",rf=Ry[xE];function AE(t){let{basename:e,children:n,future:r,window:i}=t,s=I.useRef();s.current==null&&(s.current=jw({window:i,v5Compat:!0}));let o=s.current,[l,a]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=I.useCallback(c=>{u&&rf?rf(()=>a(c)):a(c)},[a,u]);return I.useLayoutEffect(()=>o.listen(d),[o,d]),I.createElement(RE,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var sf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(sf||(sf={}));var of;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(of||(of={}));var lf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw Zr(e)},Zr=function(t){return new Error("Firebase Database ("+Bg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},OE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new DE;const h=s<<2|l>>4;if(r.push(h),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class DE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hg=function(t){const e=Vg(t);return Qc.encodeByteArray(e,!0)},Go=function(t){return Hg(t).replace(/\./g,"")},Ko=function(t){try{return Qc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t){return $g(void 0,t)}function $g(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ME(n)||(t[n]=$g(t[n],e[n]));return t}function ME(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=()=>bE().__FIREBASE_DEFAULTS__,UE=()=>{if(typeof process>"u"||typeof lf>"u")return;const t=lf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ko(t[1]);return e&&JSON.parse(e)},Yc=()=>{try{return FE()||UE()||jE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gg=t=>{var e,n;return(n=(e=Yc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zE=t=>{const e=Gg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kg=()=>{var t;return(t=Yc())===null||t===void 0?void 0:t.config},qg=t=>{var e;return(e=Yc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Go(JSON.stringify(n)),Go(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function BE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HE(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Yg(){return Bg.NODE_ADMIN===!0}function $E(){try{return typeof indexedDB=="object"}catch{return!1}}function GE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KE,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Rn(i,l,r)}}function qE(t,e){return t.replace(QE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const QE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){return JSON.parse(t)}function le(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=os(Ko(s[0])||""),n=os(Ko(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},YE=function(t){const e=Jg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},JE=function(t){const e=Jg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Br(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Du(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Qo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(af(s)&&af(o)){if(!Qo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function af(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ii(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ti(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function ZE(t,e){const n=new eC(t,e);return n.subscribe.bind(n)}class eC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ta),i.error===void 0&&(i.error=Ta),i.complete===void 0&&(i.complete=Ta);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ta(){}function Xc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ml=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t){return t&&t._delegate?t._delegate:t}class Qn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ll;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sC(e))try{this.getOrInitializeService({instanceIdentifier:Dn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dn){return this.instances.has(e)}getOptions(e=Dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dn){return this.component?this.component.multipleInstances?e:Dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iC(t){return t===Dn?void 0:t}function sC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const lC={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},aC=V.INFO,uC={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},cC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=uC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zc{constructor(e){this.name=e,this._logLevel=aC,this._logHandler=cC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const dC=(t,e)=>e.some(n=>t instanceof n);let uf,cf;function hC(){return uf||(uf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fC(){return cf||(cf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xg=new WeakMap,Lu=new WeakMap,Zg=new WeakMap,ka=new WeakMap,ed=new WeakMap;function pC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xg.set(n,t)}).catch(()=>{}),ed.set(e,t),e}function mC(t){if(Lu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lu.set(t,e)}let Mu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gC(t){Mu=t(Mu)}function _C(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ra(this),e,...n);return Zg.set(r,e.sort?e.sort():[e]),pn(r)}:fC().includes(t)?function(...e){return t.apply(Ra(this),e),pn(Xg.get(this))}:function(...e){return pn(t.apply(Ra(this),e))}}function vC(t){return typeof t=="function"?_C(t):(t instanceof IDBTransaction&&mC(t),dC(t,hC())?new Proxy(t,Mu):t)}function pn(t){if(t instanceof IDBRequest)return pC(t);if(ka.has(t))return ka.get(t);const e=vC(t);return e!==t&&(ka.set(t,e),ed.set(e,t)),e}const Ra=t=>ed.get(t);function yC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=pn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(pn(o.result),a.oldVersion,a.newVersion,pn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const wC=["get","getKey","getAll","getAllKeys","count"],EC=["put","add","delete","clear"],Pa=new Map;function df(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pa.get(e))return Pa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=EC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wC.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Pa.set(e,s),s}gC(t=>({...t,get:(e,n,r)=>df(e,n)||t.get(e,n,r),has:(e,n)=>!!df(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bu="@firebase/app",hf="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new Zc("@firebase/app"),IC="@firebase/app-compat",TC="@firebase/analytics-compat",kC="@firebase/analytics",RC="@firebase/app-check-compat",PC="@firebase/app-check",NC="@firebase/auth",xC="@firebase/auth-compat",AC="@firebase/database",OC="@firebase/data-connect",DC="@firebase/database-compat",LC="@firebase/functions",MC="@firebase/functions-compat",bC="@firebase/installations",FC="@firebase/installations-compat",UC="@firebase/messaging",jC="@firebase/messaging-compat",zC="@firebase/performance",WC="@firebase/performance-compat",BC="@firebase/remote-config",VC="@firebase/remote-config-compat",HC="@firebase/storage",$C="@firebase/storage-compat",GC="@firebase/firestore",KC="@firebase/vertexai",qC="@firebase/firestore-compat",QC="firebase",YC="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="[DEFAULT]",JC={[bu]:"fire-core",[IC]:"fire-core-compat",[kC]:"fire-analytics",[TC]:"fire-analytics-compat",[PC]:"fire-app-check",[RC]:"fire-app-check-compat",[NC]:"fire-auth",[xC]:"fire-auth-compat",[AC]:"fire-rtdb",[OC]:"fire-data-connect",[DC]:"fire-rtdb-compat",[LC]:"fire-fn",[MC]:"fire-fn-compat",[bC]:"fire-iid",[FC]:"fire-iid-compat",[UC]:"fire-fcm",[jC]:"fire-fcm-compat",[zC]:"fire-perf",[WC]:"fire-perf-compat",[BC]:"fire-rc",[VC]:"fire-rc-compat",[HC]:"fire-gcs",[$C]:"fire-gcs-compat",[GC]:"fire-fst",[qC]:"fire-fst-compat",[KC]:"fire-vertex","fire-js":"fire-js",[QC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=new Map,XC=new Map,Uu=new Map;function ff(t,e){try{t.container.addComponent(e)}catch(n){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vr(t){const e=t.name;if(Uu.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;Uu.set(e,t);for(const n of Yo.values())ff(n,t);for(const n of XC.values())ff(n,t);return!0}function td(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _t(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mn=new Is("app","Firebase",ZC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=YC;function e_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(n||(n=Kg()),!n)throw mn.create("no-options");const s=Yo.get(i);if(s){if(Qo(n,s.options)&&Qo(r,s.config))return s;throw mn.create("duplicate-app",{appName:i})}const o=new oC(i);for(const a of Uu.values())o.addComponent(a);const l=new eS(n,r,o);return Yo.set(i,l),l}function t_(t=Fu){const e=Yo.get(t);if(!e&&t===Fu&&Kg())return e_();if(!e)throw mn.create("no-app",{appName:t});return e}function gn(t,e,n){var r;let i=(r=JC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(l.join(" "));return}Vr(new Qn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS="firebase-heartbeat-database",nS=1,ls="firebase-heartbeat-store";let Na=null;function n_(){return Na||(Na=yC(tS,nS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ls)}catch(n){console.warn(n)}}}}).catch(t=>{throw mn.create("idb-open",{originalErrorMessage:t.message})})),Na}async function rS(t){try{const n=(await n_()).transaction(ls),r=await n.objectStore(ls).get(r_(t));return await n.done,r}catch(e){if(e instanceof Rn)Ut.warn(e.message);else{const n=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(n.message)}}}async function pf(t,e){try{const r=(await n_()).transaction(ls,"readwrite");await r.objectStore(ls).put(e,r_(t)),await r.done}catch(n){if(n instanceof Rn)Ut.warn(n.message);else{const r=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ut.warn(r.message)}}}function r_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=1024,sS=30*24*60*60*1e3;class oS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=mf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=sS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ut.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mf(),{heartbeatsToSend:r,unsentEntries:i}=lS(this._heartbeatsCache.heartbeats),s=Go(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ut.warn(n),""}}}function mf(){return new Date().toISOString().substring(0,10)}function lS(t,e=iS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),gf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $E()?GE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gf(t){return Go(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(t){Vr(new Qn("platform-logger",e=>new CC(e),"PRIVATE")),Vr(new Qn("heartbeat",e=>new oS(e),"PRIVATE")),gn(bu,hf,t),gn(bu,hf,"esm2017"),gn("fire-js","")}uS("");function nd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function i_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cS=i_,s_=new Is("auth","Firebase",i_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new Zc("@firebase/auth");function dS(t,...e){Jo.logLevel<=V.WARN&&Jo.warn(`Auth (${ti}): ${t}`,...e)}function go(t,...e){Jo.logLevel<=V.ERROR&&Jo.error(`Auth (${ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,...e){throw rd(t,...e)}function wt(t,...e){return rd(t,...e)}function o_(t,e,n){const r=Object.assign(Object.assign({},cS()),{[e]:n});return new Is("auth","Firebase",r).create(e,{appName:t.name})}function Ot(t){return o_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return s_.create(t,...e)}function O(t,e,...n){if(!t)throw rd(e,...n)}function Rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw go(e),new Error(e)}function jt(t,e){t||Rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hS(){return _f()==="http:"||_f()==="https:"}function _f(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hS()||VE()||"connection"in navigator)?navigator.onLine:!0}function pS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n){this.shortDelay=e,this.longDelay=n,jt(n>e,"Short delay should be less than long delay!"),this.isMobile=Jc()||Qg()}get(){return fS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(t,e){jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=new Ts(3e4,6e4);function Pn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vt(t,e,n,r,i={}){return a_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ei(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return BE()||(u.referrerPolicy="no-referrer"),l_.fetch()(u_(t,t.config.apiHost,n,l),u)})}async function a_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mS),e);try{const i=new vS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw eo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw eo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw eo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw eo(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw o_(t,d,u);dt(t,d)}}catch(i){if(i instanceof Rn)throw i;dt(t,"network-request-failed",{message:String(i)})}}async function ks(t,e,n,r,i={}){const s=await Vt(t,e,n,r,i);return"mfaPendingCredential"in s&&dt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function u_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?id(t.config,i):`${t.config.apiScheme}://${i}`}function _S(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wt(this.auth,"network-request-failed")),gS.get())})}}function eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wt(t,e,r);return i.customData._tokenResponse=n,i}function vf(t){return t!==void 0&&t.enterprise!==void 0}class yS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _S(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wS(t,e){return Vt(t,"GET","/v2/recaptchaConfig",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(t,e){return Vt(t,"POST","/v1/accounts:delete",e)}async function c_(t,e){return Vt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CS(t,e=!1){const n=Te(t),r=await n.getIdToken(e),i=sd(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Mi(xa(i.auth_time)),issuedAtTime:Mi(xa(i.iat)),expirationTime:Mi(xa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xa(t){return Number(t)*1e3}function sd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ko(n);return i?JSON.parse(i):(go("Failed to decode base64 JWT payload"),null)}catch(i){return go("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yf(t){const e=sd(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&SS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function SS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Hr(t,c_(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?d_(s.providerUserInfo):[],l=kS(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new zu(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function TS(t){const e=Te(t);await Xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function d_(t){return t.map(e=>{var{providerId:n}=e,r=nd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(t,e){const n=await a_(t,{},async()=>{const r=ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=u_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",l_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function PS(t,e){return Vt(t,"POST","/v2/accounts:revokeToken",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=yf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await RS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Nr;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nr,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=nd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hr(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CS(this,e)}reload(){return TS(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_t(this.auth.app))return Promise.reject(Ot(this.auth));const e=await this.getIdToken();return await Hr(this,ES(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,w=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:y,isAnonymous:T,providerData:P,stsTokenManager:N}=n;O(m&&N,e,"internal-error");const x=Nr.fromJSON(this.name,N);O(typeof m=="string",e,"internal-error"),Gt(c,e.name),Gt(h,e.name),O(typeof y=="boolean",e,"internal-error"),O(typeof T=="boolean",e,"internal-error"),Gt(g,e.name),Gt(_,e.name),Gt(v,e.name),Gt(w,e.name),Gt(p,e.name),Gt(f,e.name);const K=new Pt({uid:m,auth:e,email:h,emailVerified:y,displayName:c,isAnonymous:T,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:x,createdAt:p,lastLoginAt:f});return P&&Array.isArray(P)&&(K.providerData=P.map(F=>Object.assign({},F))),w&&(K._redirectEventId=w),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new Nr;i.updateFromServerResponse(n);const s=new Pt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xo(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];O(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?d_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Nr;l.updateFromIdToken(r);const a=new Pt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new zu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=new Map;function Nt(t){jt(t instanceof Function,"Expected a class definition");let e=wf.get(t);return e?(jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}h_.type="NONE";const Ef=h_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t,e,n){return`firebase:${t}:${e}:${n}`}class xr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_o(this.userKey,i.apiKey,s),this.fullPersistenceKey=_o("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xr(Nt(Ef),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Nt(Ef);const o=_o(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Pt._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new xr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new xr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(g_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(f_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(v_(e))return"Blackberry";if(y_(e))return"Webos";if(p_(e))return"Safari";if((e.includes("chrome/")||m_(e))&&!e.includes("edge/"))return"Chrome";if(__(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function f_(t=Ne()){return/firefox\//i.test(t)}function p_(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function m_(t=Ne()){return/crios\//i.test(t)}function g_(t=Ne()){return/iemobile/i.test(t)}function __(t=Ne()){return/android/i.test(t)}function v_(t=Ne()){return/blackberry/i.test(t)}function y_(t=Ne()){return/webos/i.test(t)}function od(t=Ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NS(t=Ne()){var e;return od(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xS(){return HE()&&document.documentMode===10}function w_(t=Ne()){return od(t)||__(t)||y_(t)||v_(t)||/windows phone/i.test(t)||g_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(t,e=[]){let n;switch(t){case"Browser":n=Cf(Ne());break;case"Worker":n=`${Cf(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ti}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(t,e={}){return Vt(t,"GET","/v2/passwordPolicy",Pn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=6;class LS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:DS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sf(this),this.idTokenSubscription=new Sf(this),this.beforeStateQueue=new AS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=s_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await c_(this,{idToken:e}),r=await Pt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(_t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_t(this.app))return Promise.reject(Ot(this));const n=e?Te(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _t(this.app)?Promise.reject(Ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _t(this.app)?Promise.reject(Ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OS(this),n=new LS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await PS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await xr.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=E_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ir(t){return Te(t)}class Sf{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZE(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bS(t){bl=t}function C_(t){return bl.loadJS(t)}function FS(){return bl.recaptchaEnterpriseScript}function US(){return bl.gapiScript}function jS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class zS{constructor(){this.enterprise=new WS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class WS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const BS="recaptcha-enterprise",S_="NO_RECAPTCHA";class VS{constructor(e){this.type=BS,this.auth=ir(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{wS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new yS(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;vf(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(S_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zS().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&vf(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=FS();a.length!==0&&(a+=l),C_(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function If(t,e,n,r=!1,i=!1){const s=new VS(t);let o;if(i)o=S_;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const a=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const a=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Wu(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await If(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await If(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t,e){const n=td(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Qo(s,e??{}))return i;dt(i,"already-initialized")}return n.initialize({options:e})}function $S(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GS(t,e,n){const r=ir(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=I_(e),{host:o,port:l}=KS(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),qS()}function I_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KS(t){const e=I_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Tf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Tf(o)}}}function Tf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,n){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}async function QS(t,e){return Vt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(t,e){return ks(t,"POST","/v1/accounts:signInWithPassword",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JS(t,e){return ks(t,"POST","/v1/accounts:signInWithEmailLink",Pn(t,e))}async function XS(t,e){return ks(t,"POST","/v1/accounts:signInWithEmailLink",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends ld{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new as(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new as(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wu(e,n,"signInWithPassword",YS);case"emailLink":return JS(e,{email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wu(e,r,"signUpPassword",QS);case"emailLink":return XS(e,{idToken:n,email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(t,e){return ks(t,"POST","/v1/accounts:signInWithIdp",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="http://localhost";class Yn extends ld{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=nd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ar(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ar(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ar(e,n)}buildRequest(){const e={requestUri:ZS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ei(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tI(t){const e=Ii(Ti(t)).link,n=e?Ii(Ti(e)).deep_link_id:null,r=Ii(Ti(t)).deep_link_id;return(r?Ii(Ti(r)).link:null)||r||n||e||t}class ad{constructor(e){var n,r,i,s,o,l;const a=Ii(Ti(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,c=eI((i=a.mode)!==null&&i!==void 0?i:null);O(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=tI(e);try{return new ad(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.providerId=ni.PROVIDER_ID}static credential(e,n){return as._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ad.parseLink(n);return O(r,"argument-error"),as._fromEmailAndCode(e,r.code,r.tenantId)}}ni.PROVIDER_ID="password";ni.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ni.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends T_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Rs{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Rs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Rs{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Rs{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(t,e){return ks(t,"POST","/v1/accounts:signUp",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pt._fromIdTokenResponse(e,r,i),o=kf(r);return new Jn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=kf(r);return new Jn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function kf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo extends Rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Zo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Zo(e,n,r,i)}}function k_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Zo._fromErrorAndOperation(t,s,e,r):s})}async function rI(t,e,n=!1){const r=await Hr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(t,e,n=!1){const{auth:r}=t;if(_t(r.app))return Promise.reject(Ot(r));const i="reauthenticate";try{const s=await Hr(t,k_(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=sd(s.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(t.uid===l,r,"user-mismatch"),Jn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&dt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(t,e,n=!1){if(_t(t.app))return Promise.reject(Ot(t));const r="signIn",i=await k_(t,r,e),s=await Jn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function sI(t,e){return R_(ir(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_(t){const e=ir(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oI(t,e,n){if(_t(t.app))return Promise.reject(Ot(t));const r=ir(t),o=await Wu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nI).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&P_(t),a}),l=await Jn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function lI(t,e,n){return _t(t.app)?Promise.reject(Ot(t)):sI(Te(t),ni.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&P_(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(t,e){return Vt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Te(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Hr(r,aI(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:a})=>a==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function cI(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function dI(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function hI(t){return Te(t).signOut()}const el="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(el,"1"),this.storage.removeItem(el),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=1e3,pI=10;class x_ extends N_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=w_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);xS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},fI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}x_.type="LOCAL";const mI=x_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_ extends N_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}A_.type="SESSION";const O_=A_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Fl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await gI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=ud("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return window}function vI(t){Et().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(){return typeof Et().WorkerGlobalScope<"u"&&typeof Et().importScripts=="function"}async function yI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function EI(){return D_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="firebaseLocalStorageDb",CI=1,tl="firebaseLocalStorage",M_="fbase_key";class Ps{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ul(t,e){return t.transaction([tl],e?"readwrite":"readonly").objectStore(tl)}function SI(){const t=indexedDB.deleteDatabase(L_);return new Ps(t).toPromise()}function Bu(){const t=indexedDB.open(L_,CI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(tl,{keyPath:M_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(tl)?e(r):(r.close(),await SI(),e(await Bu()))})})}async function Rf(t,e,n){const r=Ul(t,!0).put({[M_]:e,value:n});return new Ps(r).toPromise()}async function II(t,e){const n=Ul(t,!1).get(e),r=await new Ps(n).toPromise();return r===void 0?null:r.value}function Pf(t,e){const n=Ul(t,!0).delete(e);return new Ps(n).toPromise()}const TI=800,kI=3;class b_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return D_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fl._getInstance(EI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yI(),!this.activeServiceWorker)return;this.sender=new _I(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bu();return await Rf(e,el,"1"),await Pf(e,el),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>II(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ul(i,!1).getAll();return new Ps(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}b_.type="LOCAL";const RI=b_;new Ts(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t,e){return e?Nt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd extends ld{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ar(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ar(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function NI(t){return R_(t.auth,new cd(t),t.bypassAuthState)}function xI(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),iI(n,new cd(t),t.bypassAuthState)}async function AI(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),rI(n,new cd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NI;case"linkViaPopup":case"linkViaRedirect":return AI;case"reauthViaPopup":case"reauthViaRedirect":return xI;default:dt(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=new Ts(2e3,1e4);class Er extends F_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=ud();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OI.get())};e()}}Er.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI="pendingRedirect",vo=new Map;class LI extends F_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await MI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MI(t,e){const n=UI(e),r=FI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function bI(t,e){vo.set(t._key(),e)}function FI(t){return Nt(t._redirectPersistence)}function UI(t){return _o(DI,t.config.apiKey,t.name)}async function jI(t,e,n=!1){if(_t(t.app))return Promise.reject(Ot(t));const r=ir(t),i=PI(r,e),o=await new LI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=10*60*1e3;class WI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!U_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nf(e))}saveEventToCache(e){this.cachedEventUids.add(Nf(e)),this.lastProcessedEventTime=Date.now()}}function Nf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function U_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return U_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VI(t,e={}){return Vt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$I=/^https?/;async function GI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VI(t);for(const n of e)try{if(KI(n))return}catch{}dt(t,"unauthorized-domain")}function KI(t){const e=ju(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$I.test(n))return!1;if(HI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=new Ts(3e4,6e4);function xf(){const t=Et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function QI(t){return new Promise((e,n)=>{var r,i,s;function o(){xf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xf(),n(wt(t,"network-request-failed"))},timeout:qI.get()})}if(!((i=(r=Et().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Et().gapi)===null||s===void 0)&&s.load)o();else{const l=jS("iframefcb");return Et()[l]=()=>{gapi.load?o():n(wt(t,"network-request-failed"))},C_(`${US()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw yo=null,e})}let yo=null;function YI(t){return yo=yo||QI(t),yo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=new Ts(5e3,15e3),XI="__/auth/iframe",ZI="emulator/auth/iframe",eT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nT(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?id(e,ZI):`https://${t.config.authDomain}/${XI}`,r={apiKey:e.apiKey,appName:t.name,v:ti},i=tT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ei(r).slice(1)}`}async function rT(t){const e=await YI(t),n=Et().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:nT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wt(t,"network-request-failed"),l=Et().setTimeout(()=>{s(o)},JI.get());function a(){Et().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sT=500,oT=600,lT="_blank",aT="http://localhost";class Af{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uT(t,e,n,r=sT,i=oT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},iT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ne().toLowerCase();n&&(l=m_(u)?lT:n),f_(u)&&(e=e||aT,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(NS(u)&&l!=="_self")return cT(e||"",l),new Af(null);const c=window.open(e||"",l,d);O(c,t,"popup-blocked");try{c.focus()}catch{}return new Af(c)}function cT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="__/auth/handler",hT="emulator/auth/handler",fT=encodeURIComponent("fac");async function Of(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ti,eventId:i};if(e instanceof T_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Du(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof Rs){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${fT}=${encodeURIComponent(a)}`:"";return`${pT(t)}?${ei(l).slice(1)}${u}`}function pT({config:t}){return t.emulator?id(t,hT):`https://${t.authDomain}/${dT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="webStorageSupport";class mT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=O_,this._completeRedirectFn=jI,this._overrideRedirectResult=bI}async _openPopup(e,n,r,i){var s;jt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Of(e,n,r,ju(),i);return uT(e,o,ud())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Of(e,n,r,ju(),i);return vI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await rT(e),r=new WI(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Aa,{type:Aa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Aa];o!==void 0&&n(!!o),dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return w_()||p_()||od()}}const gT=mT;var Df="@firebase/auth",Lf="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yT(t){Vr(new Qn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:E_(t)},u=new MS(r,i,s,a);return $S(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vr(new Qn("auth-internal",e=>{const n=ir(e.getProvider("auth").getImmediate());return(r=>new _T(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(Df,Lf,vT(t)),gn(Df,Lf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=5*60,ET=qg("authIdTokenMaxAge")||wT;let Mf=null;const CT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ET)return;const i=n==null?void 0:n.token;Mf!==i&&(Mf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ST(t=t_()){const e=td(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HS(t,{popupRedirectResolver:gT,persistence:[RI,mI,O_]}),r=qg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=CT(s.toString());dI(n,o,()=>o(n.currentUser)),cI(n,l=>o(l))}}const i=Gg("auth");return i&&GS(n,`http://${i}`),n}function IT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}bS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",IT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yT("Browser");var TT="firebase",kT="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn(TT,kT,"app");var bf={};const Ff="@firebase/database",Uf="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let j_="";function RT(t){j_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),le(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:os(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new PT(e)}}catch{}return new NT},Un=z_("localStorage"),xT=z_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Zc("@firebase/database"),AT=function(){let t=1;return function(){return t++}}(),W_=function(t){const e=nC(t),n=new XE;n.update(e);const r=n.digest();return Qc.encodeByteArray(r)},Ns=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ns.apply(null,r):typeof r=="object"?e+=le(r):e+=r,e+=" "}return e};let bi=null,jf=!0;const OT=function(t,e){C(!e,"Can't turn on custom loggers persistently."),Or.logLevel=V.VERBOSE,bi=Or.log.bind(Or)},Se=function(...t){if(jf===!0&&(jf=!1,bi===null&&xT.get("logging_enabled")===!0&&OT()),bi){const e=Ns.apply(null,t);bi(e)}},xs=function(t){return function(...e){Se(t,...e)}},Vu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ns(...t);Or.error(e)},zt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ns(...t)}`;throw Or.error(e),new Error(e)},Ue=function(...t){const e="FIREBASE WARNING: "+Ns(...t);Or.warn(e)},DT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},B_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},LT=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},$r="[MIN_NAME]",Xn="[MAX_NAME]",ri=function(t,e){if(t===e)return 0;if(t===$r||e===Xn)return-1;if(e===$r||t===Xn)return 1;{const n=zf(t),r=zf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},MT=function(t,e){return t===e?0:t<e?-1:1},gi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+le(e))},dd=function(t){if(typeof t!="object"||t===null)return le(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=le(e[r]),n+=":",n+=dd(t[e[r]]);return n+="}",n},V_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const H_=function(t){C(!B_(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},bT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},FT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function UT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const jT=new RegExp("^-?(0*)\\d{1,10}$"),zT=-2147483648,WT=2147483647,zf=function(t){if(jT.test(t)){const e=Number(t);if(e>=zT&&e<=WT)return e}return null},ii=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ue("Exception was thrown by user callback.",n),e},Math.floor(0))}},BT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ue(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ue(e)}}class wo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="5",$_="v",G_="s",K_="r",q_="f",Q_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Y_="ls",J_="p",Hu="ac",X_="websocket",Z_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Un.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Un.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $T(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function tv(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===X_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Z_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$T(t)&&(n.ns=t.namespace);const i=[];return je(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(){this.counters_={}}incrementCounter(e,n=1){Bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return LE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa={},Da={};function fd(t){const e=t.toString();return Oa[e]||(Oa[e]=new GT),Oa[e]}function KT(t,e){const n=t.toString();return Da[n]||(Da[n]=e()),Da[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ii(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="start",QT="close",YT="pLPCommand",JT="pRTLPCB",nv="id",rv="pw",iv="ser",XT="cb",ZT="seg",ek="ts",tk="d",nk="dframe",sv=1870,ov=30,rk=sv-ov,ik=25e3,sk=3e4;class Cr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xs(e),this.stats_=fd(n),this.urlFn=a=>(this.appCheckToken&&(a[Hu]=this.appCheckToken),tv(n,Z_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new qT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sk)),LT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new pd((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Wf)this.id=l,this.password=a;else if(o===QT)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Wf]="t",r[iv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[XT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[$_]=hd,this.transportSessionId&&(r[G_]=this.transportSessionId),this.lastSessionId&&(r[Y_]=this.lastSessionId),this.applicationId&&(r[J_]=this.applicationId),this.appCheckToken&&(r[Hu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Q_.test(location.hostname)&&(r[K_]=q_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cr.forceAllow_=!0}static forceDisallow(){Cr.forceDisallow_=!0}static isAvailable(){return Cr.forceAllow_?!0:!Cr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bT()&&!FT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Hg(n),i=V_(r,rk);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[nk]="t",r[nv]=e,r[rv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=le(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class pd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=AT(),window[YT+this.uniqueCallbackIdentifier]=e,window[JT+this.uniqueCallbackIdentifier]=n,this.myIFrame=pd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Se("frame writing exception"),l.stack&&Se(l.stack),Se(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[nv]=this.myID,e[rv]=this.myPW,e[iv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ov+r.length<=sv;){const o=this.pendingSegs.shift();r=r+"&"+ZT+i+"="+o.seg+"&"+ek+i+"="+o.ts+"&"+tk+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(ik)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=16384,lk=45e3;let nl=null;typeof MozWebSocket<"u"?nl=MozWebSocket:typeof WebSocket<"u"&&(nl=WebSocket);class it{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xs(this.connId),this.stats_=fd(n),this.connURL=it.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[$_]=hd,typeof location<"u"&&location.hostname&&Q_.test(location.hostname)&&(o[K_]=q_),n&&(o[G_]=n),r&&(o[Y_]=r),i&&(o[Hu]=i),s&&(o[J_]=s),tv(e,X_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Un.set("previous_websocket_failure",!0);try{let r;Yg(),this.mySock=new nl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){it.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&nl!==null&&!it.forceDisallow_}static previouslyFailed(){return Un.isInMemoryStorage||Un.get("previous_websocket_failure")===!0}markConnectionHealthy(){Un.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=os(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=V_(n,ok);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}it.responsesRequiredToBeHealthy=2;it.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{static get ALL_TRANSPORTS(){return[Cr,it]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=it&&it.isAvailable();let r=n&&!it.previouslyFailed();if(e.webSocketOnly&&(n||Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[it];else{const i=this.transports_=[];for(const s of us.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);us.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}us.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=6e4,uk=5e3,ck=10*1024,dk=100*1024,La="t",Bf="d",hk="s",Vf="r",fk="e",Hf="o",$f="a",Gf="n",Kf="p",pk="h";class mk{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xs("c:"+this.id+":"),this.transportManager_=new us(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Fi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ck?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(La in e){const n=e[La];n===$f?this.upgradeIfSecondaryHealthy_():n===Vf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Hf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=gi("t",e),r=gi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Kf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$f,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Gf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=gi("t",e),r=gi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=gi(La,e);if(Bf in e){const r=e[Bf];if(n===pk){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Gf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===hk?this.onConnectionShutdown_(r):n===Vf?this.onReset_(r):n===fk?Vu("Server Error: "+r):n===Hf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),hd!==r&&Ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Fi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ak))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Kf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Un.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends av{static getInstance(){return new rl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Jc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=32,Qf=768;class H{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function W(){return new H("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function En(t){return t.pieces_.length-t.pieceNum_}function $(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new H(t.pieces_,e)}function uv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function gk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function cv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function dv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new H(e,0)}function ae(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof H)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new H(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Re(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return Re($(t),$(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function md(t,e){if(En(t)!==En(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function st(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(En(t)>En(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class _k{constructor(e,n){this.errorPrefix_=n,this.parts_=cv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ml(this.parts_[r]);hv(this)}}function vk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ml(e),hv(t)}function yk(t){const e=t.parts_.pop();t.byteLength_-=Ml(e),t.parts_.length>0&&(t.byteLength_-=1)}function hv(t){if(t.byteLength_>Qf)throw new Error(t.errorPrefix_+"has a key path longer than "+Qf+" bytes ("+t.byteLength_+").");if(t.parts_.length>qf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qf+") or object contains a cycle "+Ln(t))}function Ln(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd extends av{static getInstance(){return new gd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=1e3,wk=60*5*1e3,Yf=30*1e3,Ek=1.3,Ck=3e4,Sk="server_kill",Jf=3;class Dt extends lv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Dt.nextPersistentConnectionId_++,this.log_=xs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_i,this.maxReconnectDelay_=wk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Yg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&rl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(le(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ll,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Dt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Bt(e,"w")){const r=Br(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||JE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=YE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+le(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Vu("Unrecognized action received from server: "+le(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ck&&(this.reconnectDelay_=_i),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ek)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Dt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new mk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Ue(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Sk)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Ue(c),a())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Du(this.interruptReasons_)&&(this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>dd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new H(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Jf&&(this.reconnectDelay_=Yf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Jf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+j_.replace(/\./g,"-")]=1,Jc()?e["framework.cordova"]=1:Qg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=rl.getInstance().currentlyOnline();return Du(this.interruptReasons_)&&e}}Dt.nextPersistentConnectionId_=0;Dt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new b(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new b($r,e),i=new b($r,n);return this.compare(r,i)!==0}minPost(){return b.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to;class fv extends jl{static get __EMPTY_NODE(){return to}static set __EMPTY_NODE(e){to=e}compare(e,n){return ri(e.name,n.name)}isDefinedOn(e){throw Zr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return b.MIN}maxPost(){return new b(Xn,to)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new b(e,to)}toString(){return".key"}}const Dr=new fv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class pe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pe.RED,this.left=i??Le.EMPTY_NODE,this.right=s??Le.EMPTY_NODE}copy(e,n,r,i,s){return new pe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}pe.RED=!0;pe.BLACK=!1;class Ik{copy(e,n,r,i,s){return this}insert(e,n,r){return new pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,pe.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,pe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new no(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new no(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new no(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new no(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new Ik;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t,e){return ri(t.name,e.name)}function _d(t,e){return ri(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $u;function kk(t){$u=t}const pv=function(t){return typeof t=="number"?"number:"+H_(t):"string:"+t},mv=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Bt(e,".sv"),"Priority must be a string or number.")}else C(t===$u||t.isEmpty(),"priority of unexpected type.");C(t===$u||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xf;class he{static set __childrenNodeConstructor(e){Xf=e}static get __childrenNodeConstructor(){return Xf}constructor(e,n=he.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),mv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new he(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:M(e)===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:he.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||En(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,he.__childrenNodeConstructor.EMPTY_NODE.updateChild($(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=H_(this.value_):e+=this.value_,this.lazyHash_=W_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===he.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof he.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=he.VALUE_TYPE_ORDER.indexOf(n),s=he.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}he.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gv,_v;function Rk(t){gv=t}function Pk(t){_v=t}class Nk extends jl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ri(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return b.MIN}maxPost(){return new b(Xn,new he("[PRIORITY-POST]",_v))}makePost(e,n){const r=gv(e);return new b(n,new he("[PRIORITY-POST]",r))}toString(){return".priority"}}const ne=new Nk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=Math.log(2);class Ak{constructor(e){const n=s=>parseInt(Math.log(s)/xk,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const il=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new pe(h,c.node,pe.BLACK,null,null);{const g=parseInt(d/2,10)+a,_=i(a,g),v=i(g+1,u);return c=t[g],h=n?n(c):c,new pe(h,c.node,pe.BLACK,_,v)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,v){const w=c-_,p=c;c-=_;const f=i(w+1,p),m=t[w],y=n?n(m):m;g(new pe(y,m.node,v,null,f))},g=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),w=Math.pow(2,a.count-(_+1));v?h(w,pe.BLACK):(h(w,pe.BLACK),h(w,pe.RED))}return d},o=new Ak(t.length),l=s(o);return new Le(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ma;const lr={};class xt{static get Default(){return C(lr&&ne,"ChildrenNode.ts has not been loaded"),Ma=Ma||new xt({".priority":lr},{".priority":ne}),Ma}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Br(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return Bt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==Dr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(b.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=il(r,e.getCompare()):l=lr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new xt(d,u)}addToIndexes(e,n){const r=qo(this.indexes_,(i,s)=>{const o=Br(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===lr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(b.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),il(l,o.getCompare())}else return lr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new b(e.name,l))),a.insert(e,e.node)}});return new xt(r,this.indexSet_)}removeFromIndexes(e,n){const r=qo(this.indexes_,i=>{if(i===lr)return i;{const s=n.get(e.name);return s?i.remove(new b(e.name,s)):i}});return new xt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vi;class A{static get EMPTY_NODE(){return vi||(vi=new A(new Le(_d),null,xt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&mv(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vi}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?vi:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild($(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new b(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?vi:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{C(M(e)!==".priority"||En(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild($(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ne,(o,l)=>{n[o]=l.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pv(this.getPriority().val())+":"),this.forEachChild(ne,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":W_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new b(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new b(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new b(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===As?-1:0}withIndex(e){if(e===Dr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Dr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ne),i=n.getIterator(ne);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Dr?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ok extends A{constructor(){super(new Le(_d),A.EMPTY_NODE,xt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const As=new Ok;Object.defineProperties(b,{MIN:{value:new b($r,A.EMPTY_NODE)},MAX:{value:new b(Xn,As)}});fv.__EMPTY_NODE=A.EMPTY_NODE;he.__childrenNodeConstructor=A;kk(As);Pk(As);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=!0;function me(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new he(n,me(e))}if(!(t instanceof Array)&&Dk){const n=[];let r=!1;if(je(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=me(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new b(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=il(n,Tk,o=>o.name,_d);if(r){const o=il(n,ne.getCompare());return new A(s,me(e),new xt({".priority":o},{".priority":ne}))}else return new A(s,me(e),xt.Default)}else{let n=A.EMPTY_NODE;return je(t,(r,i)=>{if(Bt(t,r)&&r.substring(0,1)!=="."){const s=me(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(me(e))}}Rk(me);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk extends jl{constructor(e){super(),this.indexPath_=e,C(!U(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ri(e.name,n.name):s}makePost(e,n){const r=me(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new b(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,As);return new b(Xn,e)}toString(){return cv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk extends jl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ri(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return b.MIN}maxPost(){return b.MAX}makePost(e,n){const r=me(e);return new b(n,r)}toString(){return".value"}}const bk=new Mk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(t){return{type:"value",snapshotNode:t}}function Gr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function cs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ds(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Fk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(cs(n,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Gr(n,r)):o.trackChildChange(ds(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ne,(i,s)=>{n.hasChild(i)||r.trackChildChange(cs(i,s))}),n.isLeafNode()||n.forEachChild(ne,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ds(i,s,o))}else r.trackChildChange(Gr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.indexedFilter_=new vd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=hs.getStartPost_(e),this.endPost_=hs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new b(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(ne,(o,l)=>{s.matches(new b(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new hs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new b(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const a=new b(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(ds(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(cs(n,c));const v=l.updateImmediateChild(n,A.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Gr(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(cs(u.name,u.node)),s.trackChildChange(Gr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$r}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ne}copy(){const e=new yd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jk(t){return t.loadsAllData()?new vd(t.getIndex()):t.hasLimit()?new Uk(t):new hs(t)}function Zf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ne?n="$priority":t.index_===bk?n="$value":t.index_===Dr?n="$key":(C(t.index_ instanceof Lk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=le(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=le(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+le(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=le(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+le(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ep(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ne&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends lv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=xs("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=sl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Zf(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Br(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=sl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Zf(e._queryParams),r=e._path.toString(),i=new Ll;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ei(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=os(l.responseText)}catch{Ue("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ue("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(){return{value:null,children:new Map}}function yv(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,ol());const i=t.children.get(r);e=$(e),yv(i,e,n)}}function Gu(t,e,n){t.value!==null?n(e,t.value):Wk(t,(r,i)=>{const s=new H(e.toString()+"/"+r);Gu(i,s,n)})}function Wk(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&je(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=10*1e3,Vk=30*1e3,Hk=5*60*1e3;class $k{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Bk(e);const r=tp+(Vk-tp)*Math.random();Fi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;je(e,(i,s)=>{s>0&&Bt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Fi(this.reportStats_.bind(this),Math.floor(Math.random()*2*Hk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ot||(ot={}));function wv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ed(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ot.ACK_USER_WRITE,this.source=wv()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new H(e));return new ll(W(),n,this.revert)}}else return C(M(this.path)===e,"operationForChild called for unrelated child."),new ll($(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){this.source=e,this.path=n,this.type=ot.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new fs(this.source,W()):new fs(this.source,$(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ot.OVERWRITE}operationForChild(e){return U(this.path)?new Zn(this.source,W(),this.snap.getImmediateChild(e)):new Zn(this.source,$(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ot.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new H(e));return n.isEmpty()?null:n.value?new Zn(this.source,W(),n.value):new ps(this.source,W(),n)}else return C(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ps(this.source,$(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Kk(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Fk(o.childName,o.snapshotNode))}),yi(t,i,"child_removed",e,r,n),yi(t,i,"child_added",e,r,n),yi(t,i,"child_moved",s,r,n),yi(t,i,"child_changed",e,r,n),yi(t,i,"value",e,r,n),i}function yi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>Qk(t,l,a)),o.forEach(l=>{const a=qk(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function qk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Qk(t,e,n){if(e.childName==null||n.childName==null)throw Zr("Should only compare child_ events.");const r=new b(e.childName,e.snapshotNode),i=new b(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t,e){return{eventCache:t,serverCache:e}}function Ui(t,e,n,r){return zl(new Cn(e,n,r),t.serverCache)}function Ev(t,e,n,r){return zl(t.eventCache,new Cn(e,n,r))}function al(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function er(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba;const Yk=()=>(ba||(ba=new Le(MT)),ba);class Q{static fromObject(e){let n=new Q(null);return je(e,(r,i)=>{n=n.set(new H(r),i)}),n}constructor(e,n=Yk()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:W(),value:this.value};if(U(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue($(e),n);return s!=null?{path:ae(new H(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree($(e)):new Q(null)}}set(e,n){if(U(e))return new Q(n,this.children);{const r=M(e),s=(this.children.get(r)||new Q(null)).set($(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove($(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get($(e)):null}}setTree(e,n){if(U(e))return n;{const r=M(e),s=(this.children.get(r)||new Q(null)).setTree($(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ae(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,W(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_($(e),ae(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,W(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_($(e),ae(n,i),r):new Q(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ae(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.writeTree_=e}static empty(){return new ut(new Q(null))}}function ji(t,e,n){if(U(e))return new ut(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Re(i,e);return s=s.updateChild(o,n),new ut(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new ut(s)}}}function np(t,e,n){let r=t;return je(n,(i,s)=>{r=ji(r,ae(e,i),s)}),r}function rp(t,e){if(U(e))return ut.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new ut(n)}}function Ku(t,e){return sr(t,e)!=null}function sr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Re(n.path,e)):null}function ip(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ne,(r,i)=>{e.push(new b(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new b(r,i.value))}),e}function _n(t,e){if(U(e))return t;{const n=sr(t,e);return n!=null?new ut(new Q(n)):new ut(t.writeTree_.subtree(e))}}function qu(t){return t.writeTree_.isEmpty()}function Kr(t,e){return Cv(W(),t.writeTree_,e)}function Cv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Cv(ae(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ae(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t,e){return kv(e,t)}function Jk(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ji(t.visibleWrites,e,n)),t.lastWriteId=r}function Xk(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Zk(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&e1(l,r.path)?i=!1:st(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return t1(t),!0;if(r.snap)t.visibleWrites=rp(t.visibleWrites,r.path);else{const l=r.children;je(l,a=>{t.visibleWrites=rp(t.visibleWrites,ae(r.path,a))})}return!0}else return!1}function e1(t,e){if(t.snap)return st(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&st(ae(t.path,n),e))return!0;return!1}function t1(t){t.visibleWrites=Sv(t.allWrites,n1,W()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function n1(t){return t.visible}function Sv(t,e,n){let r=ut.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)st(n,o)?(l=Re(n,o),r=ji(r,l,s.snap)):st(o,n)&&(l=Re(o,n),r=ji(r,W(),s.snap.getChild(l)));else if(s.children){if(st(n,o))l=Re(n,o),r=np(r,l,s.children);else if(st(o,n))if(l=Re(o,n),U(l))r=np(r,W(),s.children);else{const a=Br(s.children,M(l));if(a){const u=a.getChild($(l));r=ji(r,W(),u)}}}else throw Zr("WriteRecord should have .snap or .children")}}return r}function Iv(t,e,n,r,i){if(!r&&!i){const s=sr(t.visibleWrites,e);if(s!=null)return s;{const o=_n(t.visibleWrites,e);if(qu(o))return n;if(n==null&&!Ku(o,W()))return null;{const l=n||A.EMPTY_NODE;return Kr(o,l)}}}else{const s=_n(t.visibleWrites,e);if(!i&&qu(s))return n;if(!i&&n==null&&!Ku(s,W()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(st(u.path,e)||st(e,u.path))},l=Sv(t.allWrites,o,e),a=n||A.EMPTY_NODE;return Kr(l,a)}}}function r1(t,e,n){let r=A.EMPTY_NODE;const i=sr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ne,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=_n(t.visibleWrites,e);return n.forEachChild(ne,(o,l)=>{const a=Kr(_n(s,new H(o)),l);r=r.updateImmediateChild(o,a)}),ip(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=_n(t.visibleWrites,e);return ip(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function i1(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ae(e,n);if(Ku(t.visibleWrites,s))return null;{const o=_n(t.visibleWrites,s);return qu(o)?i.getChild(n):Kr(o,i.getChild(n))}}function s1(t,e,n,r){const i=ae(e,n),s=sr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=_n(t.visibleWrites,i);return Kr(o,r.getNode().getImmediateChild(n))}else return null}function o1(t,e){return sr(t.visibleWrites,e)}function l1(t,e,n,r,i,s,o){let l;const a=_n(t.visibleWrites,e),u=sr(a,W());if(u!=null)l=u;else if(n!=null)l=Kr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function a1(){return{visibleWrites:ut.empty(),allWrites:[],lastWriteId:-1}}function ul(t,e,n,r){return Iv(t.writeTree,t.treePath,e,n,r)}function Cd(t,e){return r1(t.writeTree,t.treePath,e)}function sp(t,e,n,r){return i1(t.writeTree,t.treePath,e,n,r)}function cl(t,e){return o1(t.writeTree,ae(t.treePath,e))}function u1(t,e,n,r,i,s){return l1(t.writeTree,t.treePath,e,n,r,i,s)}function Sd(t,e,n){return s1(t.writeTree,t.treePath,e,n)}function Tv(t,e){return kv(ae(t.treePath,e),t.writeTree)}function kv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ds(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,cs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Gr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ds(r,e.snapshotNode,i.oldSnap));else throw Zr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Rv=new d1;class Id{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Cn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:er(this.viewCache_),s=u1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(t){return{filter:t}}function f1(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function p1(t,e,n,r,i){const s=new c1;let o,l;if(n.type===ot.OVERWRITE){const u=n;u.source.fromUser?o=Qu(t,e,u.path,u.snap,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=dl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ot.MERGE){const u=n;u.source.fromUser?o=g1(t,e,u.path,u.children,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Yu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ot.ACK_USER_WRITE){const u=n;u.revert?o=y1(t,e,u.path,r,i,s):o=_1(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ot.LISTEN_COMPLETE)o=v1(t,e,n.path,r,s);else throw Zr("Unknown operation type: "+n.type);const a=s.getChanges();return m1(e,o,a),{viewCache:o,changes:a}}function m1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=al(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(vv(al(e)))}}function Pv(t,e,n,r,i,s){const o=e.eventCache;if(cl(r,n)!=null)return e;{let l,a;if(U(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=er(e),d=u instanceof A?u:A.EMPTY_NODE,c=Cd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=ul(r,er(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=M(n);if(u===".priority"){C(En(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=sp(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=$(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=sp(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=Sd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Ui(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function dl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),g,null)}else{const g=M(n);if(!a.isCompleteForPath(n)&&En(n)>1)return e;const _=$(n),w=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=d.updatePriority(a.getNode(),w):u=d.updateChild(a.getNode(),g,w,_,Rv,null)}const c=Ev(e,u,a.isFullyInitialized()||U(n),d.filtersNodes()),h=new Id(i,c,s);return Pv(t,c,n,i,h,l)}function Qu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new Id(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ui(e,u,!0,t.filter.filtersNodes());else{const c=M(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ui(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=$(n),g=l.getNode().getImmediateChild(c);let _;if(U(h))_=r;else{const v=d.getCompleteChild(c);v!=null?uv(h)===".priority"&&v.getChild(dv(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=A.EMPTY_NODE}if(g.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=Ui(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function op(t,e){return t.eventCache.isCompleteForChild(e)}function g1(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=ae(n,a);op(e,M(d))&&(l=Qu(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=ae(n,a);op(e,M(d))||(l=Qu(t,l,d,u,i,s,o))}),l}function lp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Yu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new Q(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),_=lp(t,g,h);a=dl(t,a,new H(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const _=e.serverCache.getNode().getImmediateChild(c),v=lp(t,_,h);a=dl(t,a,new H(c),v,i,s,o,l)}}),a}function _1(t,e,n,r,i,s,o){if(cl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return dl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new Q(null);return a.getNode().forEachChild(Dr,(d,c)=>{u=u.set(new H(d),c)}),Yu(t,e,n,u,i,s,l,o)}else return e}else{let u=new Q(null);return r.foreach((d,c)=>{const h=ae(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),Yu(t,e,n,u,i,s,l,o)}}function v1(t,e,n,r,i){const s=e.serverCache,o=Ev(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return Pv(t,o,n,r,Rv,i)}function y1(t,e,n,r,i,s){let o;if(cl(r,n)!=null)return e;{const l=new Id(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||M(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ul(r,er(e));else{const c=e.serverCache.getNode();C(c instanceof A,"serverChildren would be complete if leaf node"),d=Cd(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=M(n);let c=Sd(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,$(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,A.EMPTY_NODE,$(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ul(r,er(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||cl(r,W())!=null,Ui(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new vd(r.getIndex()),s=jk(r);this.processor_=h1(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),d=new Cn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Cn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=zl(c,d),this.eventGenerator_=new Gk(this.query_)}get query(){return this.query_}}function E1(t){return t.viewCache_.serverCache.getNode()}function C1(t){return al(t.viewCache_)}function S1(t,e){const n=er(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function ap(t){return t.eventRegistrations_.length===0}function I1(t,e){t.eventRegistrations_.push(e)}function up(t,e,n){const r=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function cp(t,e,n,r){e.type===ot.MERGE&&e.source.queryId!==null&&(C(er(t.viewCache_),"We should always have a full cache before handling merges"),C(al(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=p1(t.processor_,i,e,n,r);return f1(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Nv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function T1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ne,(s,o)=>{r.push(Gr(s,o))}),n.isFullyInitialized()&&r.push(vv(n.getNode())),Nv(t,r,n.getNode(),e)}function Nv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Kk(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hl;class xv{constructor(){this.views=new Map}}function k1(t){C(!hl,"__referenceConstructor has already been defined"),hl=t}function R1(){return C(hl,"Reference.ts has not been loaded"),hl}function P1(t){return t.views.size===0}function Td(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),cp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(cp(o,e,n,r));return s}}function Av(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=ul(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=Cd(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=zl(new Cn(l,a,!1),new Cn(r,i,!1));return new w1(e,u)}return o}function N1(t,e,n,r,i,s){const o=Av(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),I1(o,n),T1(o,n)}function x1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Sn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(up(u,n,r)),ap(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(up(a,n,r)),ap(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Sn(t)&&s.push(new(R1())(e._repo,e._path)),{removed:s,events:o}}function Ov(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vn(t,e){let n=null;for(const r of t.views.values())n=n||S1(r,e);return n}function Dv(t,e){if(e._queryParams.loadsAllData())return Bl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Lv(t,e){return Dv(t,e)!=null}function Sn(t){return Bl(t)!=null}function Bl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fl;function A1(t){C(!fl,"__referenceConstructor has already been defined"),fl=t}function O1(){return C(fl,"Reference.ts has not been loaded"),fl}let D1=1;class dp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=a1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Mv(t,e,n,r,i){return Jk(t.pendingWriteTree_,e,n,r,i),i?Ds(t,new Zn(wv(),e,n)):[]}function jn(t,e,n=!1){const r=Xk(t.pendingWriteTree_,e);if(Zk(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(W(),!0):je(r.children,o=>{s=s.set(new H(o),!0)}),Ds(t,new ll(r.path,s,n))}else return[]}function Os(t,e,n){return Ds(t,new Zn(wd(),e,n))}function L1(t,e,n){const r=Q.fromObject(n);return Ds(t,new ps(wd(),e,r))}function M1(t,e){return Ds(t,new fs(wd(),e))}function b1(t,e,n){const r=Rd(t,n);if(r){const i=Pd(r),s=i.path,o=i.queryId,l=Re(s,e),a=new fs(Ed(o),l);return Nd(t,s,a)}else return[]}function pl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Lv(o,e))){const a=x1(o,e,n,r);P1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>Sn(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=j1(h);for(let _=0;_<g.length;++_){const v=g[_],w=v.query,p=jv(t,v);t.listenProvider_.startListening(zi(w),ms(t,w),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(zi(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(Vl(h));t.listenProvider_.stopListening(zi(h),g)}))}z1(t,u)}return l}function bv(t,e,n,r){const i=Rd(t,r);if(i!=null){const s=Pd(i),o=s.path,l=s.queryId,a=Re(o,e),u=new Zn(Ed(l),a,n);return Nd(t,o,u)}else return[]}function F1(t,e,n,r){const i=Rd(t,r);if(i){const s=Pd(i),o=s.path,l=s.queryId,a=Re(o,e),u=Q.fromObject(n),d=new ps(Ed(l),a,u);return Nd(t,o,d)}else return[]}function Ju(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=Re(h,i);s=s||vn(g,_),o=o||Sn(g)});let l=t.syncPointTree_.get(i);l?(o=o||Sn(l),s=s||vn(l,W())):(l=new xv,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=vn(_,W());v&&(s=s.updateImmediateChild(g,v))}));const u=Lv(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Vl(e);C(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=W1();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=Wl(t.pendingWriteTree_,i);let c=N1(l,e,n,d,s,a);if(!u&&!o&&!r){const h=Dv(l,e);c=c.concat(B1(t,e,h))}return c}function kd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Re(o,e),u=vn(l,a);if(u)return u});return Iv(i,e,s,n,!0)}function U1(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Re(u,n);r=r||vn(d,c)});let i=t.syncPointTree_.get(n);i?r=r||vn(i,W()):(i=new xv,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Cn(r,!0,!1):null,l=Wl(t.pendingWriteTree_,e._path),a=Av(i,e,l,s?o.getNode():A.EMPTY_NODE,s);return C1(a)}function Ds(t,e){return Fv(e,t.syncPointTree_,null,Wl(t.pendingWriteTree_,W()))}function Fv(t,e,n,r){if(U(t.path))return Uv(t,e,n,r);{const i=e.get(W());n==null&&i!=null&&(n=vn(i,W()));let s=[];const o=M(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=Tv(r,o);s=s.concat(Fv(l,a,u,d))}return i&&(s=s.concat(Td(i,t,r,n))),s}}function Uv(t,e,n,r){const i=e.get(W());n==null&&i!=null&&(n=vn(i,W()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Tv(r,o),d=t.operationForChild(o);d&&(s=s.concat(Uv(d,l,a,u)))}),i&&(s=s.concat(Td(i,t,r,n))),s}function jv(t,e){const n=e.query,r=ms(t,n);return{hashFn:()=>(E1(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?b1(t,n._path,r):M1(t,n._path);{const s=UT(i,n);return pl(t,n,null,s)}}}}function ms(t,e){const n=Vl(e);return t.queryToTagMap.get(n)}function Vl(t){return t._path.toString()+"$"+t._queryIdentifier}function Rd(t,e){return t.tagToQueryMap.get(e)}function Pd(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new H(t.substr(0,e))}}function Nd(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=Wl(t.pendingWriteTree_,e);return Td(r,n,i,null)}function j1(t){return t.fold((e,n,r)=>{if(n&&Sn(n))return[Bl(n)];{let i=[];return n&&(i=Ov(n)),je(r,(s,o)=>{i=i.concat(o)}),i}})}function zi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(O1())(t._repo,t._path):t}function z1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Vl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function W1(){return D1++}function B1(t,e,n){const r=e._path,i=ms(t,e),s=jv(t,n),o=t.listenProvider_.startListening(zi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)C(!Sn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!U(u)&&d&&Sn(d))return[Bl(d).query];{let h=[];return d&&(h=h.concat(Ov(d).map(g=>g.query))),je(c,(g,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(zi(d),ms(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new xd(n)}node(){return this.node_}}class Ad{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new Ad(this.syncTree_,n)}node(){return kd(this.syncTree_,this.path_)}}const V1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},hp=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return H1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $1(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},H1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},$1=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},G1=function(t,e,n,r){return Od(e,new Ad(n,t),r)},zv=function(t,e,n){return Od(t,new xd(e),n)};function Od(t,e,n){const r=t.getPriority().val(),i=hp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=hp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new he(l,me(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new he(i))),o.forEachChild(ne,(l,a)=>{const u=Od(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ld(t,e){let n=e instanceof H?e:new H(e),r=t,i=M(n);for(;i!==null;){const s=Br(r.node.children,i)||{children:{},childCount:0};r=new Dd(i,r,s),n=$(n),i=M(n)}return r}function si(t){return t.node.value}function Wv(t,e){t.node.value=e,Xu(t)}function Bv(t){return t.node.childCount>0}function K1(t){return si(t)===void 0&&!Bv(t)}function Hl(t,e){je(t.node.children,(n,r)=>{e(new Dd(n,t,r))})}function Vv(t,e,n,r){n&&!r&&e(t),Hl(t,i=>{Vv(i,e,!0,r)}),n&&r&&e(t)}function q1(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ls(t){return new H(t.parent===null?t.name:Ls(t.parent)+"/"+t.name)}function Xu(t){t.parent!==null&&Q1(t.parent,t.name,t)}function Q1(t,e,n){const r=K1(n),i=Bt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Xu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Xu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=/[\[\].#$\/\u0000-\u001F\u007F]/,J1=/[\[\].#$\u0000-\u001F\u007F]/,Fa=10*1024*1024,Hv=function(t){return typeof t=="string"&&t.length!==0&&!Y1.test(t)},$v=function(t){return typeof t=="string"&&t.length!==0&&!J1.test(t)},X1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$v(t)},Gv=function(t,e,n,r){r&&e===void 0||Md(Xc(t,"value"),e,n)},Md=function(t,e,n){const r=n instanceof H?new _k(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ln(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ln(r)+" with contents = "+e.toString());if(B_(e))throw new Error(t+"contains "+e.toString()+" "+Ln(r));if(typeof e=="string"&&e.length>Fa/3&&Ml(e)>Fa)throw new Error(t+"contains a string greater than "+Fa+" utf8 bytes "+Ln(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(je(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Hv(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ln(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vk(r,o),Md(t,l,r),yk(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ln(r)+" in addition to actual children.")}},Kv=function(t,e,n,r){if(!$v(n))throw new Error(Xc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Z1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Kv(t,e,n)},qv=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},eR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Hv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!X1(n))throw new Error(Xc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!md(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Qv(t,e,n){bd(t,n),Yv(t,r=>md(r,e))}function Ct(t,e,n){bd(t,n),Yv(t,r=>st(r,e)||st(e,r))}function Yv(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(nR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function nR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();bi&&Se("event: "+n.toString()),ii(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR="repo_interrupt",iR=25;class sR{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new tR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ol(),this.transactionQueueTree_=new Dd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function oR(t,e,n){if(t.stats_=fd(t.repoInfo_),t.forceRestClient_||BT())t.server_=new sl(t.repoInfo_,(r,i,s,o)=>{fp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>pp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{le(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Dt(t.repoInfo_,e,(r,i,s,o)=>{fp(t,r,i,s,o)},r=>{pp(t,r)},r=>{lR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=KT(t.repoInfo_,()=>new $k(t.stats_,t.server_)),t.infoData_=new zk,t.infoSyncTree_=new dp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Os(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ud(t,"connected",!1),t.serverSyncTree_=new dp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Ct(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Jv(t){const n=t.infoData_.getNode(new H(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Fd(t){return V1({timestamp:Jv(t)})}function fp(t,e,n,r,i){t.dataUpdateCount++;const s=new H(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=qo(n,u=>me(u));o=F1(t.serverSyncTree_,s,a,i)}else{const a=me(n);o=bv(t.serverSyncTree_,s,a,i)}else if(r){const a=qo(n,u=>me(u));o=L1(t.serverSyncTree_,s,a)}else{const a=me(n);o=Os(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Gl(t,s)),Ct(t.eventQueue_,l,o)}function pp(t,e){Ud(t,"connected",e),e===!1&&cR(t)}function lR(t,e){je(e,(n,r)=>{Ud(t,n,r)})}function Ud(t,e,n){const r=new H("/.info/"+e),i=me(n);t.infoData_.updateSnapshot(r,i);const s=Os(t.infoSyncTree_,r,i);Ct(t.eventQueue_,r,s)}function Xv(t){return t.nextWriteId_++}function aR(t,e,n){const r=U1(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=me(i).withIndex(e._queryParams.getIndex());Ju(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Os(t.serverSyncTree_,e._path,s);else{const l=ms(t.serverSyncTree_,e);o=bv(t.serverSyncTree_,e._path,s,l)}return Ct(t.eventQueue_,e._path,o),pl(t.serverSyncTree_,e,n,null,!0),s},i=>($l(t,"get for query "+le(e)+" failed: "+i),Promise.reject(new Error(i))))}function uR(t,e,n,r,i){$l(t,"set",{path:e.toString(),value:n,priority:r});const s=Fd(t),o=me(n,r),l=kd(t.serverSyncTree_,e),a=zv(o,l,s),u=Xv(t),d=Mv(t.serverSyncTree_,e,a,u,!0);bd(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||Ue("set at "+e+" failed: "+h);const v=jn(t.serverSyncTree_,u,!_);Ct(t.eventQueue_,e,v),pR(t,i,h,g)});const c=ry(t,e);Gl(t,c),Ct(t.eventQueue_,c,[])}function cR(t){$l(t,"onDisconnectEvents");const e=Fd(t),n=ol();Gu(t.onDisconnect_,W(),(i,s)=>{const o=G1(i,s,t.serverSyncTree_,e);yv(n,i,o)});let r=[];Gu(n,W(),(i,s)=>{r=r.concat(Os(t.serverSyncTree_,i,s));const o=ry(t,i);Gl(t,o)}),t.onDisconnect_=ol(),Ct(t.eventQueue_,W(),r)}function dR(t,e,n){let r;M(e._path)===".info"?r=Ju(t.infoSyncTree_,e,n):r=Ju(t.serverSyncTree_,e,n),Qv(t.eventQueue_,e._path,r)}function hR(t,e,n){let r;M(e._path)===".info"?r=pl(t.infoSyncTree_,e,n):r=pl(t.serverSyncTree_,e,n),Qv(t.eventQueue_,e._path,r)}function fR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(rR)}function $l(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function pR(t,e,n,r){e&&ii(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Zv(t,e,n){return kd(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function jd(t,e=t.transactionQueueTree_){if(e||Kl(t,e),si(e)){const n=ty(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&mR(t,Ls(e),n)}else Bv(e)&&Hl(e,n=>{jd(t,n)})}function mR(t,e,n){const r=n.map(u=>u.currentWriteId),i=Zv(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];C(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Re(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{$l(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(jn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Kl(t,Ld(t.transactionQueueTree_,e)),jd(t,t.transactionQueueTree_),Ct(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)ii(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Ue("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Gl(t,e)}},o)}function Gl(t,e){const n=ey(t,e),r=Ls(n),i=ty(t,n);return gR(t,i,r),r}function gR(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Re(n,a.path);let d=!1,c;if(C(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(jn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=iR)d=!0,c="maxretry",i=i.concat(jn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=Zv(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){Md("transaction failed: Data returned ",g,a.path);let _=me(g);typeof g=="object"&&g!=null&&Bt(g,".priority")||(_=_.updatePriority(h.getPriority()));const w=a.currentWriteId,p=Fd(t),f=zv(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=Xv(t),o.splice(o.indexOf(w),1),i=i.concat(Mv(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(jn(t.serverSyncTree_,w,!0))}else d=!0,c="nodata",i=i.concat(jn(t.serverSyncTree_,a.currentWriteId,!0))}Ct(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Kl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ii(r[l]);jd(t,t.transactionQueueTree_)}function ey(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&si(r)===void 0;)r=Ld(r,n),e=$(e),n=M(e);return r}function ty(t,e){const n=[];return ny(t,e,n),n.sort((r,i)=>r.order-i.order),n}function ny(t,e,n){const r=si(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Hl(e,i=>{ny(t,i,n)})}function Kl(t,e){const n=si(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Wv(e,n.length>0?n:void 0)}Hl(e,r=>{Kl(t,r)})}function ry(t,e){const n=Ls(ey(t,e)),r=Ld(t.transactionQueueTree_,e);return q1(r,i=>{Ua(t,i)}),Ua(t,r),Vv(r,i=>{Ua(t,i)}),n}function Ua(t,e){const n=si(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(jn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Wv(e,void 0):n.length=s+1,Ct(t.eventQueue_,Ls(e),i);for(let o=0;o<r.length;o++)ii(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function vR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ue(`Invalid query segment '${n}' in query '${t}'`)}return e}const mp=function(t,e){const n=yR(t),r=n.namespace;n.domain==="firebase.com"&&zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||DT();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ev(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new H(n.pathString)}},yR=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=_R(t.substring(d,c)));const h=vR(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",wR=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=gp.charAt(n%64),n=Math.floor(n/64);C(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=gp.charAt(e[i]);return C(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+le(this.snapshot.exportVal())}}class CR{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:uv(this._path)}get ref(){return new Ht(this._repo,this._path)}get _queryIdentifier(){const e=ep(this._queryParams),n=dd(e);return n==="{}"?"default":n}get _queryObject(){return ep(this._queryParams)}isEqual(e){if(e=Te(e),!(e instanceof zd))return!1;const n=this._repo===e._repo,r=md(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+gk(this._path)}}class Ht extends zd{constructor(e,n){super(e,n,new yd,!1)}get parent(){const e=dv(this._path);return e===null?null:new Ht(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new H(e),r=_s(this.ref,e);return new gs(this._node.getChild(n),r,ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new gs(i,_s(this.ref,r),ne)))}hasChild(e){const n=new H(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Lr(t,e){return t=Te(t),t._checkNotDeleted("ref"),e!==void 0?_s(t._root,e):t._root}function _s(t,e){return t=Te(t),M(t._path)===null?Z1("child","path",e):Kv("child","path",e),new Ht(t._repo,ae(t._path,e))}function SR(t,e){t=Te(t),qv("push",t._path),Gv("push",e,t._path,!0);const n=Jv(t._repo),r=wR(n),i=_s(t,r),s=_s(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function sy(t,e){t=Te(t),qv("set",t._path),Gv("set",e,t._path,!1);const n=new Ll;return uR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Wd(t){t=Te(t);const e=new iy(()=>{}),n=new ql(e);return aR(t._repo,t,n).then(r=>new gs(r,new Ht(t._repo,t._path),t._queryParams.getIndex()))}class ql{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new ER("value",this,new gs(e.snapshotNode,new Ht(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new CR(this,e,n):null}matches(e){return e instanceof ql?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function IR(t,e,n,r,i){const s=new iy(n,void 0),o=new ql(s);return dR(t._repo,t,o),()=>hR(t._repo,t,o)}function TR(t,e,n,r){return IR(t,"value",e)}k1(Ht);A1(Ht);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR="FIREBASE_DATABASE_EMULATOR_HOST",Zu={};let RR=!1;function PR(t,e,n,r){t.repoInfo_=new ev(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function NR(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=mp(s,i),l=o.repoInfo,a;typeof process<"u"&&bf&&(a=bf[kR]),a?(s=`http://${a}?ns=${l.namespace}`,o=mp(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new HT(t.name,t.options,e);eR("Invalid Firebase Database URL",o),U(o.path)||zt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=AR(l,t,u,new VT(t.name,n));return new OR(d,t)}function xR(t,e){const n=Zu[e];(!n||n[t.key]!==t)&&zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),fR(t),delete n[t.key]}function AR(t,e,n,r){let i=Zu[e.name];i||(i={},Zu[e.name]=i);let s=i[t.toURLString()];return s&&zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new sR(t,RR,n,r),i[t.toURLString()]=s,s}class OR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(oR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ht(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zt("Cannot call "+e+" on a deleted database.")}}function Vn(t=t_(),e){const n=td(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=zE("database");r&&DR(n,...r)}return n}function DR(t,e,n,r={}){t=Te(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&zt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new wo(wo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:WE(r.mockUserToken,t.app.options.projectId);s=new wo(o)}PR(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t){RT(ti),Vr(new Qn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return NR(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),gn(Ff,Uf,t),gn(Ff,Uf,"esm2017")}Dt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Dt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};LR();const MR={apiKey:"AIzaSyCB26zi8RmgycCQi_4hq2TRPZXDluOqtZ4",authDomain:"neogastro-55724.firebaseapp.com",databaseURL:"https://neogastro-55724-default-rtdb.firebaseio.com",projectId:"neogastro-55724",storageBucket:"neogastro-55724.firebasestorage.app",messagingSenderId:"730580708829",appId:"1:730580708829:web:9d79845552526f48539a34",measurementId:"G-625B8GJ9Q5"},oy=e_(MR);Vn(oy);const qr=ST(oy),_p=()=>{const[t,e]=I.useState(""),[n,r]=I.useState(""),[i,s]=I.useState(""),[o,l]=I.useState(!1),a=Ss(),u=async d=>{d.preventDefault(),l(!0),s("");try{const h=(await lI(qr,t,n)).user;sessionStorage.setItem("user",JSON.stringify({email:h.email,uid:h.uid})),a("/dashboard")}catch(c){s("Error al iniciar sesión: "+c.message)}finally{l(!1)}};return S.jsx("div",{style:ft.page,children:S.jsxs("div",{style:ft.container,children:[S.jsx("h2",{style:ft.title,children:"Iniciar Sesión"}),S.jsxs("form",{onSubmit:u,style:ft.form,children:[S.jsx("input",{type:"email",placeholder:"Correo Electrónico",value:t,onChange:d=>e(d.target.value),required:!0,style:ft.input}),S.jsx("input",{type:"password",placeholder:"Contraseña",value:n,onChange:d=>r(d.target.value),required:!0,style:ft.input}),S.jsxs("p",{style:ft.text,children:["¿No tienes cuenta?"," ",S.jsx("a",{href:"/registro",style:ft.link,children:"Regístrate aquí"})]}),S.jsx("button",{type:"submit",disabled:o,style:ft.button,children:o?"Cargando...":"Ingresar"}),i&&S.jsx("p",{style:ft.error,children:i})]})]})})},ft={page:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#f3f4f6",fontFamily:"'Roboto', sans-serif"},container:{width:"100%",maxWidth:"400px",padding:"30px",borderRadius:"10px",backgroundColor:"#ffffff",boxShadow:"0 10px 20px rgba(0, 0, 0, 0.1)",textAlign:"center"},title:{fontSize:"24px",marginBottom:"20px",color:"#333333"},form:{display:"flex",flexDirection:"column"},input:{margin:"10px 0",padding:"15px",fontSize:"16px",borderRadius:"8px",border:"1px solid #e0e0e0",backgroundColor:"#f9f9f9",color:"#333333",outline:"none",transition:"border-color 0.3s"},inputFocus:{borderColor:"#3498db"},button:{padding:"15px",backgroundColor:"#3498db",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"16px",fontWeight:"bold",marginTop:"20px",transition:"background-color 0.3s"},buttonHover:{backgroundColor:"#2980b9"},text:{marginTop:"10px",color:"#555555"},link:{color:"#3498db",textDecoration:"none",fontWeight:"bold"},error:{marginTop:"10px",color:"red",fontSize:"14px"}},bR=()=>{const[t,e]=I.useState(""),[n,r]=I.useState(""),[i,s]=I.useState(""),[o,l]=I.useState(""),[a,u]=I.useState(!1),d=Ss(),c=async g=>{g.preventDefault(),u(!0),l("");try{const v=(await oI(qr,t,n)).user;await uI(v,{displayName:i});const w=Vn(),p=Lr(w,"usuarios/"+v.uid);await sy(p,{nombre:i,email:t}),sessionStorage.setItem("user",JSON.stringify({email:v.email,uid:v.uid,displayName:i})),d("/dashboard")}catch(_){l("Error al registrar el usuario: "+_.message)}finally{u(!1)}},h=()=>{d("/")};return S.jsx("div",{style:pt.page,children:S.jsxs("div",{style:pt.container,children:[S.jsx("button",{onClick:h,style:pt.button,children:"Regresar"}),S.jsx("h2",{style:pt.title,children:"Registrar Usuario"}),S.jsxs("form",{onSubmit:c,style:pt.form,children:[S.jsx("input",{type:"text",placeholder:"Nombre de Usuario",value:i,onChange:g=>s(g.target.value),required:!0,style:pt.input}),S.jsx("input",{type:"email",placeholder:"Correo Electrónico",value:t,onChange:g=>e(g.target.value),required:!0,style:pt.input}),S.jsx("input",{type:"password",placeholder:"Contraseña",value:n,onChange:g=>r(g.target.value),required:!0,style:pt.input}),S.jsx("button",{type:"submit",disabled:a,style:pt.button,children:a?"Registrando...":"Registrar"}),o&&S.jsx("p",{style:pt.error,children:o})]})]})})},pt={page:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#f3f4f6",fontFamily:"'Roboto', sans-serif"},container:{width:"100%",maxWidth:"600px",padding:"40px",borderRadius:"10px",backgroundColor:"#ffffff",boxShadow:"0 10px 20px rgba(0, 0, 0, 0.1)",textAlign:"center"},title:{fontSize:"28px",marginBottom:"20px",color:"#333333"},form:{display:"flex",flexDirection:"column"},input:{margin:"15px 0",padding:"15px",fontSize:"16px",borderRadius:"8px",border:"1px solid #e0e0e0",backgroundColor:"#f9f9f9",color:"#333333",outline:"none",transition:"border-color 0.3s"},inputFocus:{borderColor:"#3498db"},button:{padding:"15px",backgroundColor:"#3498db",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"16px",fontWeight:"bold",marginTop:"20px",transition:"background-color 0.3s"},buttonHover:{backgroundColor:"#2980b9"},error:{marginTop:"10px",color:"red",fontSize:"14px"}},FR="/assets/user-DMGG3Soj.png",ly=()=>{const[t,e]=I.useState([]),[n,r]=I.useState(!0),i=Ss(),s=qr.currentUser;I.useEffect(()=>{if(!s){i("/login");return}const a=Vn(),u=Lr(a,"usuarios");Wd(u).then(d=>{if(d.exists()){const c=d.val(),h=Object.keys(c).filter(g=>g!==s.uid).map(g=>({uid:g,...c[g]}));e(h)}r(!1)})},[s,i]);const o=a=>{i(`/chat/${a}`)},l=async()=>{try{await hI(qr),i("/login")}catch(a){console.error("Error al cerrar sesión:",a)}};return S.jsxs("div",{style:Kt.sidebar,children:[S.jsx("h2",{style:Kt.title,children:"Contactos"}),S.jsx("div",{children:n?S.jsx("p",{style:Kt.loadingText,children:"Cargando..."}):S.jsx("ul",{style:Kt.userList,children:t.map(a=>S.jsx("li",{style:Kt.userItem,children:S.jsxs("button",{onClick:()=>o(a.uid),style:Kt.chatButton,children:[S.jsx("img",{src:FR,alt:"Icono de usuario",style:Kt.icon}),S.jsx("span",{children:a.nombre})]})},a.uid))})}),S.jsx("button",{onClick:l,style:Kt.logoutButton,children:"Cerrar sesión"})]})},Kt={sidebar:{width:"250px",backgroundColor:"#2c3e50",color:"#ecf0f1",padding:"20px",position:"fixed",height:"100%",boxShadow:"2px 0px 5px rgba(0, 0, 0, 0.1)",display:"flex",flexDirection:"column",justifyContent:"space-between"},title:{fontSize:"1.5rem",marginBottom:"20px",textAlign:"center"},loadingText:{textAlign:"center",color:"#bdc3c7"},userList:{listStyleType:"none",padding:0,overflowY:"auto",flexGrow:1},userItem:{marginBottom:"10px"},chatButton:{display:"flex",alignItems:"center",padding:"10px",backgroundColor:"#34495e",color:"#ecf0f1",border:"none",borderRadius:"5px",cursor:"pointer",fontSize:"16px",gap:"10px",width:"100%",textAlign:"left"},logoutButton:{padding:"10px 20px",marginBottom:"40px",backgroundColor:"#e74c3c",color:"#ecf0f1",border:"none",borderRadius:"5px",cursor:"pointer",display:"flex",alignItems:"center",gap:"10px",fontSize:"16px",marginTop:"50px"},icon:{width:"30px",height:"30px",borderRadius:"50%"}},UR=()=>{const[t,e]=I.useState([]),[n,r]=I.useState(!0),i=Ss(),s=qr.currentUser;I.useEffect(()=>{if(!s){i("/login");return}const l=Vn(),a=Lr(l,"usuarios");Wd(a).then(u=>{if(u.exists()){const d=u.val(),c=Object.keys(d).filter(h=>h!==s.uid).map(h=>({uid:h,...d[h]}));e(c)}r(!1)})},[s,i]);const o={container:{display:"flex",fontFamily:"'Roboto', sans-serif",backgroundColor:"#f5f6fa",height:"100vh",margin:0},mainContent:{marginLeft:"250px",padding:"40px",width:"100%",backgroundColor:"#fff",borderRadius:"10px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},header:{fontSize:"2.5rem",fontWeight:"700",marginBottom:"10px",color:"#2c3e50"},subHeader:{fontSize:"1.2rem",marginBottom:"30px",color:"#34495e"},card:{width:"100%",maxWidth:"800px",padding:"20px",backgroundColor:"#ecf0f1",borderRadius:"10px",boxShadow:"0px 2px 6px rgba(0, 0, 0, 0.1)",marginBottom:"20px",textAlign:"left"},cardHeader:{fontSize:"1.5rem",fontWeight:"600",marginBottom:"10px",color:"#2c3e50"},cardContent:{fontSize:"1rem",color:"#7f8c8d"},footer:{marginTop:"20px",fontSize:"0.9rem",color:"#95a5a6",textAlign:"center"}};return S.jsxs("div",{style:o.container,children:[S.jsx(ly,{}),S.jsxs("div",{style:o.mainContent,children:[S.jsx("h1",{style:o.header,children:"WEB APP REACT"}),S.jsx("p",{style:o.subHeader,children:"Aplicación de Chat con Firebase"}),S.jsxs("div",{style:o.card,children:[S.jsx("h2",{style:o.cardHeader,children:"Información del Proyecto"}),S.jsxs("p",{style:o.cardContent,children:["Esta aplicación fue desarrollada por ",S.jsx("strong",{children:"Irvin Sánchez Ayala"}),", estudiante del grupo ",S.jsx("strong",{children:"DGS 10-1"}),", bajo la guía del profesor ",S.jsx("strong",{children:"Juan Ángel Sotero Flores"}),"."]})]}),S.jsxs("div",{style:o.card,children:[S.jsx("h2",{style:o.cardHeader,children:"Funcionalidades Clave"}),S.jsxs("ul",{style:o.cardContent,children:[S.jsx("li",{children:"Chat en tiempo real utilizando Firebase."}),S.jsx("li",{children:"Interfaz moderna y responsiva."}),S.jsx("li",{children:"Gestión de usuarios autenticados."}),S.jsx("li",{children:"Integración segura con Firebase Authentication."})]})]})]})]})},jR=()=>{const{contactId:t}=pE(),[e,n]=I.useState(""),[r,i]=I.useState([]),[s,o]=I.useState(!0),[l,a]=I.useState(""),u=qr.currentUser,d=Ss();I.useEffect(()=>{u.uid===t&&d("/dashboard")},[t,u.uid,d]),I.useEffect(()=>{const v=Vn(),w=Lr(v,`usuarios/${t}`);Wd(w).then(p=>{p.exists()?a(p.val().nombre):console.log("El contacto no existe.")}).catch(p=>{console.error("Error al obtener el nombre del contacto:",p)})},[t]);const c=[u.uid,t].sort().join("-");I.useEffect(()=>{const v=Vn(),w=Lr(v,`chats/${c}`);TR(w,p=>{if(p.exists()){const f=p.val(),m=Object.keys(f).map(y=>({id:y,...f[y]}));i(m)}else i([]);o(!1)})},[t,u.uid]);const h=async()=>{if(e.trim()&&!s){o(!0);const v=Vn(),w=SR(Lr(v,`chats/${c}`)),p={mensaje:e,timestamp:Date.now(),sender:u.uid};try{await sy(w,p)}catch(f){console.error("Error al enviar el mensaje:",f)}finally{n(""),o(!1)}}},g=()=>{d("/dashboard")},_=v=>new Date(v).toLocaleString();return S.jsxs("div",{style:Ge.container,children:[S.jsx(ly,{}),S.jsxs("div",{style:Ge.chatContent,children:[S.jsxs("h2",{children:["Chat con ",l||"Cargando..."]}),S.jsx("button",{onClick:g,style:Ge.backButton,children:"Regresar al Dashboard"}),S.jsx("div",{style:Ge.messagesContainer,children:s?S.jsx("p",{children:"Cargando mensajes..."}):S.jsxs("div",{children:[S.jsx("ul",{style:Ge.messageList,children:r.length>0?r.map(v=>S.jsx("li",{style:{...Ge.messageItem,backgroundColor:v.sender===u.uid?"#4CAF50":"#E3F2FD",marginLeft:v.sender===u.uid?"500px":"0px"},children:S.jsxs("div",{style:Ge.messageContent,children:[S.jsx("p",{style:Ge.messageText,children:v.mensaje}),S.jsx("div",{style:Ge.timestamp,children:_(v.timestamp)})]})},v.id)):S.jsx("p",{children:"No hay mensajes aún."})}),S.jsxs("div",{style:Ge.inputContainer,children:[S.jsx("input",{type:"text",value:e,onChange:v=>n(v.target.value),placeholder:"Escribe un mensaje",style:Ge.input}),S.jsx("button",{onClick:h,disabled:s||!e.trim(),style:Ge.sendButton,children:"Enviar"})]})]})})]})]})},Ge={container:{display:"flex",backgroundColor:"#f4f7fc"},chatContent:{marginLeft:"250px",padding:"20px",width:"100%",textAlign:"center",backgroundColor:"#fff",borderRadius:"10px",boxShadow:"0px 4px 6px rgba(0,0,0,0.1)"},backButton:{padding:"8px 16px",backgroundColor:"#3498db",color:"white",border:"none",cursor:"pointer",marginBottom:"10px",borderRadius:"5px"},messagesContainer:{marginLeft:"70px",display:"flex",flexDirection:"column",justifyContent:"flex-end",height:"400px",overflowY:"scroll",marginBottom:"20px"},messageList:{listStyleType:"none",padding:0},messageItem:{padding:"12px 18px",borderRadius:"15px",marginBottom:"10px",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)",maxWidth:"30%",wordWrap:"break-word"},messageContent:{maxWidth:"100%"},messageText:{margin:"0",fontSize:"14px",lineHeight:"1.5"},timestamp:{fontSize:"10px",color:"#777",marginTop:"5px"},inputContainer:{display:"flex",marginTop:"10px"},input:{marginLeft:"20px",width:"80%",padding:"10px",borderRadius:"5px",border:"1px solid #ccc",marginRight:"10px"},sendButton:{padding:"10px 20px",backgroundColor:"#3498db",color:"white",border:"none",cursor:"pointer",borderRadius:"5px"}},zR=()=>(sessionStorage.getItem("user"),S.jsx(AE,{children:S.jsxs(PE,{children:[S.jsx(ar,{path:"/login",element:S.jsx(_p,{})}),S.jsx(ar,{path:"/",element:S.jsx(_p,{})}),S.jsx(ar,{path:"/registro",element:S.jsx(bR,{})}),S.jsx(ar,{path:"/dashboard",element:S.jsx(UR,{})}),S.jsx(ar,{path:"/chat/:contactId",element:S.jsx(jR,{})})]})}));xg(document.getElementById("root")).render(S.jsx(I.StrictMode,{children:S.jsx(zR,{})}));
