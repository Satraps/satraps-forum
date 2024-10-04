import"./balanceUtils.79e1e7ec.js";import{u as G,a3 as B,au as K,av as q,a9 as U,aw as X,a0 as Y}from"./entry.24fbbeed.js";var j;const g=typeof window<"u",Z=e=>typeof e=="function",k=e=>typeof e=="string",ee=()=>{};g&&((j=window?.navigator)==null?void 0:j.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function W(e){return typeof e=="function"?e():G(e)}function re(e,r){function t(...a){e(()=>r.apply(this,a),{fn:r,thisArg:this,args:a})}return t}const x=e=>e();function te(e=x){const r=B(!0);function t(){r.value=!1}function a(){r.value=!0}return{isActive:r,pause:t,resume:a,eventFilter:(...i)=>{r.value&&e(...i)}}}function ae(e){return e}function ne(e){return K()?(q(e),!0):!1}var N=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,le=(e,r)=>{var t={};for(var a in e)oe.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&N)for(var a of N(e))r.indexOf(a)<0&&ie.call(e,a)&&(t[a]=e[a]);return t};function se(e,r,t={}){const a=t,{eventFilter:o=x}=a,i=le(a,["eventFilter"]);return U(e,re(o,r),i)}var ue=Object.defineProperty,pe=Object.defineProperties,fe=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,A=(e,r,t)=>r in e?ue(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ce=(e,r)=>{for(var t in r||(r={}))J.call(r,t)&&A(e,t,r[t]);if(S)for(var t of S(r))L.call(r,t)&&A(e,t,r[t]);return e},de=(e,r)=>pe(e,fe(r)),ve=(e,r)=>{var t={};for(var a in e)J.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&S)for(var a of S(e))r.indexOf(a)<0&&L.call(e,a)&&(t[a]=e[a]);return t};function we(e,r,t={}){const a=t,{eventFilter:o}=a,i=ve(a,["eventFilter"]),{eventFilter:c,pause:w,resume:O,isActive:u}=te(o);return{stop:se(e,r,de(ce({},i),{eventFilter:c})),pause:w,resume:O,isActive:u}}function Oe(e){var r;const t=W(e);return(r=t?.$el)!=null?r:t}const m=g?window:void 0;g&&window.document;g&&window.navigator;g&&window.location;function ge(...e){let r,t,a,o;if(k(e[0])||Array.isArray(e[0])?([t,a,o]=e,r=m):[r,t,a,o]=e,!r)return ee;Array.isArray(t)||(t=[t]),Array.isArray(a)||(a=[a]);const i=[],c=()=>{i.forEach(l=>l()),i.length=0},w=(l,p,d)=>(l.addEventListener(p,d,o),()=>l.removeEventListener(p,d,o)),O=U(()=>Oe(r),l=>{c(),l&&i.push(...t.flatMap(p=>a.map(d=>w(l,p,d))))},{immediate:!0,flush:"post"}),u=()=>{O(),c()};return ne(u),u}const P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I="__vueuse_ssr_handlers__";P[I]=P[I]||{};const _e=P[I];function ye(e,r){return _e[e]||r}function Se(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var me=Object.defineProperty,F=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,D=(e,r,t)=>r in e?me(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,C=(e,r)=>{for(var t in r||(r={}))be.call(r,t)&&D(e,t,r[t]);if(F)for(var t of F(r))he.call(r,t)&&D(e,t,r[t]);return e};const Pe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Ie(e,r,t,a={}){var o;const{flush:i="pre",deep:c=!0,listenToStorageChanges:w=!0,writeDefaults:O=!0,mergeDefaults:u=!1,shallow:l,window:p=m,eventFilter:d,onError:b=n=>{console.error(n)}}=a,v=(l?X:B)(r);if(!t)try{t=ye("getDefaultStorage",()=>{var n;return(n=m)==null?void 0:n.localStorage})()}catch(n){b(n)}if(!t)return v;const f=W(r),E=Se(f),_=(o=a.serializer)!=null?o:Pe[E],{pause:R,resume:V}=we(v,()=>z(v.value),{flush:i,deep:c,eventFilter:d});return p&&w&&ge(p,"storage",$),$(),v;function z(n){try{n==null?t.removeItem(e):t.setItem(e,_.write(n))}catch(s){b(s)}}function H(n){R();try{const s=n?n.newValue:t.getItem(e);if(s==null)return O&&f!==null&&t.setItem(e,_.write(f)),f;if(!n&&u){const y=_.read(s);return Z(u)?u(y,f):E==="object"&&!Array.isArray(y)?C(C({},f),y):y}else return typeof s!="string"?s:_.read(s)}catch(s){b(s)}finally{V()}}function $(n){if(!(n&&n.storageArea!==t)){if(n&&n.key===null){v.value=f;return}n&&n.key!==e||(v.value=H(n))}}}function h(e,r,t={}){const{window:a=m}=t;return Ie(e,r,a?.localStorage,t)}var M;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(M||(M={}));var Ee=Object.defineProperty,Q=Object.getOwnPropertySymbols,$e=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,T=(e,r,t)=>r in e?Ee(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Ne=(e,r)=>{for(var t in r||(r={}))$e.call(r,t)&&T(e,t,r[t]);if(Q)for(var t of Q(r))je.call(r,t)&&T(e,t,r[t]);return e};const Ae={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Ne({linear:ae},Ae);const Ce=Y({id:"site",state:()=>({arweaveBalance:0,colorMode:"dark",fileUploadEnabled:!0,slippage:"0.5",swapDeadline:"20"}),getters:{getArweaveBalance(e){return e.arweaveBalance},getColorMode(e){const r=h("colorMode",null);return r.value&&(e.colorMode=r.value),e.colorMode},getFileUploadEnabled(e){return e.fileUploadEnabled},getSlippage(e){const r=h("swapSlippage","0.5");return r.value&&(e.slippage=r.value),e.slippage},getSwapDeadline(e){const r=h("swapDeadline","20");return r.value&&(e.swapDeadline=r.value),e.swapDeadline}},actions:{setArweaveBalance(e){this.arweaveBalance=e},setColorMode(e){this.colorMode=e,localStorage.setItem("colorMode",e)},setFileUploadEnabled(e){this.fileUploadEnabled=e},setSlippage(e){this.slippage=e,localStorage.setItem("swapSlippage",e)},setSwapDeadline(e){this.swapDeadline=e,localStorage.setItem("swapDeadline",e)}}});export{Ce as u};
