if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),l={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-b994f779"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/index-BLcDJrtm.css",revision:null},{url:"assets/js/index-BhC6Rx2J.js",revision:null},{url:"assets/js/vendor-oZ7AtRlp.js",revision:null},{url:"index.html",revision:"3776c96c6d318d955122da1e9f3b881b"},{url:"registerSW.js",revision:"68494f0a2decd232bc80bd1995f308bb"},{url:"manifest.webmanifest",revision:"852446f930f2e95725e8cd96874a0181"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/.*\.(?:mp4|webm|ogg)$/i,new e.CacheFirst({cacheName:"video-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/.*\.(?:webp|jpg|jpeg|svg|gif)$/i,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET")}));
