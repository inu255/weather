if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const t=e=>n(e,c),l={module:{uri:c},exports:o,require:t};i[c]=Promise.all(s.map((e=>l[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-51ecf065.js",revision:null},{url:"assets/index-9d9ae4af.css",revision:null},{url:"index.html",revision:"769aa1eb63cf005e1101bb73a57d6cef"},{url:"registerSW.js",revision:"c5cccc7305f570eadae9693dacbc0adf"},{url:"favicon.ico",revision:"82bc8a9af28eb31f6179b843aea46f44"},{url:"apple-touch-icon-180x180.png",revision:"551cbccf93257c1942d5301b648d17e4"},{url:"manifest.webmanifest",revision:"4937e290782d40921a4f8d4120a161f4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
