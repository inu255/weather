if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const t=e=>n(e,r),f={module:{uri:r},exports:o,require:t};i[r]=Promise.all(c.map((e=>f[e]||t(e)))).then((e=>(s(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-9d9ae4af.css",revision:null},{url:"assets/index-d4c14659.js",revision:null},{url:"index.html",revision:"d70f7481f585317cc027146c96452010"},{url:"registerSW.js",revision:"c5cccc7305f570eadae9693dacbc0adf"},{url:"favicon.ico",revision:"82bc8a9af28eb31f6179b843aea46f44"},{url:"apple-touch-icon-180x180.png",revision:"551cbccf93257c1942d5301b648d17e4"},{url:"icon-512x512.png",revision:"11791edf81c82b0729f3b4e53e13a7ae"},{url:"manifest.webmanifest",revision:"ff7b0dc24fcd8cffc94abb0d94de0e67"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
