"use strict";(self.webpackChunkmember_angular=self.webpackChunkmember_angular||[]).push([[9958],{9958:(D,d,a)=>{a.r(d),a.d(d,{ion_ripple_effect:()=>u});var b=a(5861),n=a(7205),_=a(5729);const u=class{constructor(t){(0,n.r)(this,t),this.type="bounded"}addRipple(t,v){var i=this;return(0,b.Z)(function*(){return new Promise(k=>{(0,n.f)(()=>{const s=i.el.getBoundingClientRect(),o=s.width,r=s.height,A=Math.sqrt(o*o+r*r),p=Math.max(r,o),E=i.unbounded?p:A+g,l=Math.floor(p*w),I=E/l;let m=t-s.left,f=v-s.top;i.unbounded&&(m=.5*o,f=.5*r);const C=m-.5*l,O=f-.5*l,R=.5*o-m,P=.5*r-f;(0,n.c)(()=>{const c=document.createElement("div");c.classList.add("ripple-effect");const e=c.style;e.top=O+"px",e.left=C+"px",e.width=e.height=l+"px",e.setProperty("--final-scale",`${I}`),e.setProperty("--translate-end",`${R}px, ${P}px`),(i.el.shadowRoot||i.el).appendChild(c),setTimeout(()=>{k(()=>{y(c)})},325)})})})})()}get unbounded(){return"unbounded"===this.type}render(){const t=(0,_.b)(this);return(0,n.h)(n.H,{role:"presentation",class:{[t]:!0,unbounded:this.unbounded}})}get el(){return(0,n.i)(this)}},y=t=>{t.classList.add("fade-out"),setTimeout(()=>{t.remove()},200)},g=10,w=.5;u.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);