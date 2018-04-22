!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=109)}({109:function(t,e,n){t.exports=n(110)},110:function(t,e,n){function o(){this.node=document.createElement("span"),this.node.classList.add("_phantom-limb_finger"),this.place()}function i(t,e,n){var o=document.createEvent("MouseEvent");return o.initMouseEvent(t,!0,!0,e.view,e.detail,n.x||e.screenX,n.y||e.screenY,n.x||e.clientX,n.y||e.clientY,e.ctrlKey,e.shiftKey,e.altKey,e.metaKey,e.button,n.target||e.relatedTarget),o.synthetic=!0,o._finger=n,o}function r(t,e){var n=[],o=[];if(E.forEach(function(o){if(o.target){var r="on"+t;if(r in o.target&&(console.warn("Converting `"+r+"` property to event listener.",o.target),o.target.addEventListener(t,o.target[r],!1),delete o.target[r]),o.target.hasAttribute(r)){console.warn("Converting `"+r+"` attribute to event listener.",o.target);var a=new Function("event",o.target.getAttribute(r));o.target.addEventListener(t,a,!1),o.target.removeAttribute(r)}var c=i(t,e,o);n.push(c)}}),n.length>1){var r=n[0].pageX-n[1].pageX,a=n[0].pageY-n[1].pageY,c=Math.sqrt(Math.pow(r,2)+Math.pow(a,2)),s=Math.atan2(r,a)*(180/Math.PI),u="gesturechange";"touchstart"===t&&(u="gesturestart",b=c,w=s),"touchend"===t&&(u="gestureend"),n.forEach(function(t){var e=i(u,t,t._finger);o.push(e)}),n.concat(o).forEach(function(t){t.scale=c/b,t.rotation=w-s})}n.forEach(function(t){t.touches=n.filter(function(t){return~t.type.indexOf("touch")&&"touchend"!==t.type}),t.changedTouches=n.filter(function(e){return~e.type.indexOf("touch")&&e._finger.target===t._finger.target}),t.targetTouches=t.changedTouches.filter(function(t){return~t.type.indexOf("touch")&&"touchend"!==t.type})}),n.concat(o).forEach(function(t,e){t.identifier=e,t._finger.target.dispatchEvent(t)})}function a(t){t.synthetic||(y=!0,t.preventDefault(),t.stopPropagation(),r("touchstart",t))}function c(t){var e=t.clientX-E[0].x||0,n=t.clientY-E[0].y||0;if(E[0].move(t.clientX,t.clientY),t.altKey){x||N||(x=innerWidth/2,N=innerHeight/2),t.shiftKey&&(x+=e,N+=n);var o=x+(x-t.clientX),i=N+(N-t.clientY);E[1].move(o,i)}else E[1].move(NaN,NaN),x=NaN,N=NaN}function s(t){t.synthetic||(t.preventDefault(),t.stopPropagation(),c(t),y&&r("touchmove",t))}function u(t){t.synthetic||(y=!1,t.preventDefault(),t.stopPropagation(),r("touchend",t),E.forEach(function(e){e.target&&(e.target.dispatchEvent(i("mouseover",t,e)),e.target.dispatchEvent(i("mousemove",t,e)),e.target.dispatchEvent(i("mousedown",t,e)),e.target.dispatchEvent(i("mouseup",t,e)),e.target.dispatchEvent(i("click",t,e)))}))}function d(t){t.synthetic||(t.preventDefault(),t.stopPropagation())}function l(){0===E.length&&E.push(new o,new o),document.addEventListener("mousedown",a,!0),document.addEventListener("mousemove",s,!0),document.addEventListener("mouseup",u,!0),document.addEventListener("click",d,!0),document.documentElement.classList.add("_phantom-limb")}function p(){document.removeEventListener("mousedown",a,!0),document.removeEventListener("mousemove",s,!0),document.removeEventListener("mouseup",u,!0),document.removeEventListener("click",d,!0),document.documentElement.classList.remove("_phantom-limb")}function h(t){27===t.keyCode&&(document.documentElement.classList.contains("_phantom-limb")?p():l())}var m,f;if(!function(){return"ontouchstart"in window||"onmsgesturechange"in window}()){var v={style:!0,startOnLoad:!0};for(var g in window.phantomLimbConfig)v[g]=window.phantomLimbConfig[g];var y=!1;o.prototype={node:null,x:NaN,y:NaN,target:null,place:function(){document.body.appendChild(this.node)},hide:function(){this.node.style.display="none"},show:function(){this.node.style.display=""},move:function(t,e){isNaN(t)||isNaN(e)?(this.hide(),this.target=null):(this.show(),this.node.style.left=t+"px",this.node.style.top=e+"px",this.x=t,this.y=e,y||(this.target=document.elementFromPoint(t,e)))}};var E=[],b=NaN,w=NaN,x=NaN,N=NaN,L=["._phantom-limb,","._phantom-limb a {","cursor: none !important;","}","._phantom-limb_finger {","background: rgba(128, 128, 128, 0.5);","border: 2px solid rgb(128, 128, 128);","border-radius: 50%;","display: none;","height: 44px;","margin: -22px 0 0 -22px;","pointer-events: none;","position: fixed;","width: 44px;","z-index: 999999}","._phantom-limb ._phantom-limb_finger {","display: block;","}"].join("\n");if(v.style){var _=document.createElement("style");_.id="_phantom-limb_default-style",_.innerHTML=L,document.querySelector("head").appendChild(_)}var M={start:l,stop:p};m=M,void 0!==(f="function"==typeof m?m.call(e,n,e,t):m)&&(t.exports=f),t.exports=M,window.phantomLimb=M,document.addEventListener("keyup",h,!1),v.startOnLoad&&addEventListener("DOMContentLoaded",l,!1)}}});
//# sourceMappingURL=vendor.0a3274f492df6bf00712.bundle.map