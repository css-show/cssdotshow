if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,n,a)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=a(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts("fallback-DiRNpzYpUkXdl_mTqWPUK.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/DiRNpzYpUkXdl_mTqWPUK/_buildManifest.js",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_next/static/DiRNpzYpUkXdl_mTqWPUK/_ssgManifest.js",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_next/static/chunks/834-557076469c7319cc1cf8.js",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_next/static/chunks/984-a572b358f1116ab96087.js",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_next/static/chunks/main-fa923186bddb2ff5b72a.js",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_next/static/chunks/pages/404-c1723dde8c5dd6509dd6.js",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_next/static/chunks/pages/500-1e7fd9902f2ccae8b227.js",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_next/static/chunks/pages/_app-50fff0d562481573b3ef.js",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_next/static/chunks/pages/_error-9d014bdedb748ff555b4.js",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_next/static/chunks/pages/_offline-b15b8278a782ed007f68.js",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_next/static/chunks/pages/guides-ab2931b0027d7b66438e.js",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_next/static/chunks/pages/index-6f70525591310781bf2c.js",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_next/static/chunks/pages/posts/%5Bid%5D-811393a8d117e985802a.js",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_next/static/chunks/pages/search-837e6aae3241db29aa83.js",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_next/static/chunks/pages/specs-b4b248de03c2ed08bee1.js",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_next/static/chunks/webpack-18f5c930321213f5010f.js",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_next/static/css/48ff6fd7d51ef248067c.css",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_next/static/css/9893eecbcb97180d3098.css",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/_offline",revision:"DiRNpzYpUkXdl_mTqWPUK"},{url:"/android-icon-144x144.png",revision:"256c6943171b84f7df11d867c1ce3383"},{url:"/android-icon-192x192.png",revision:"9b498e23a9374ef6cef925b9c6868827"},{url:"/android-icon-36x36.png",revision:"223ce7e0a0030ad68f52084abe1ed127"},{url:"/android-icon-48x48.png",revision:"afbeff9fe4844cbbefff3fca949de140"},{url:"/android-icon-72x72.png",revision:"b6bbfe886822d805e22f66236e941e23"},{url:"/android-icon-96x96.png",revision:"9a1b10a4aae6422ddeb394d18a563716"},{url:"/apple-icon-114x114.png",revision:"8912fbf6ebd677f7ba93278b07711882"},{url:"/apple-icon-120x120.png",revision:"071f4311137036e48f0e81cfb21585ae"},{url:"/apple-icon-144x144.png",revision:"256c6943171b84f7df11d867c1ce3383"},{url:"/apple-icon-152x152.png",revision:"f80d65c1134ab44dd876871a3b6d61f2"},{url:"/apple-icon-180x180.png",revision:"9e0831467c238bfe3601752400f28097"},{url:"/apple-icon-57x57.png",revision:"7207294bcbf06d9e2495342d8c0ef4c3"},{url:"/apple-icon-60x60.png",revision:"41f95397f8340e6a603311f24c4f5ab7"},{url:"/apple-icon-72x72.png",revision:"206c25b039ebfcdfd7b51ba6b75f557b"},{url:"/apple-icon-76x76.png",revision:"1d4c10a20808151d1ab8c8c2b341356a"},{url:"/apple-icon-precomposed.png",revision:"b40104c502a1b9e702ee893e3ca2213b"},{url:"/apple-icon.png",revision:"b40104c502a1b9e702ee893e3ca2213b"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon-16x16.png",revision:"fb78f7d2d85a3ed52b02b33ec56a2144"},{url:"/favicon-32x32.png",revision:"a52b18dd0d19c949776eb0731fa363ac"},{url:"/favicon-96x96.png",revision:"049deb3fa03946ba5f9d0e7ca52a0551"},{url:"/favicon.ico",revision:"07b5f20a4e9f3a5c0fb54a47649ab042"},{url:"/images/CSSSHOW.svg",revision:"6a7b9bfbec29836a894548945c723f6b"},{url:"/images/ho1.jpg",revision:"5e9e31a3696d142c6176c973073c9f3e"},{url:"/images/ho2.jpg",revision:"8300769a282d00becfb5e12be15f9af5"},{url:"/images/ho3.jpg",revision:"28d0c930681f51148e4a6a3deb1ac4af"},{url:"/images/ho4.jpg",revision:"23403e442fb78c82b53d701eb46ad722"},{url:"/images/ho5.jpg",revision:"871ef05b39ca0c23996efcc152f975cf"},{url:"/images/ho6.jpg",revision:"a3191fcaef00ba16a11d79e355c9c400"},{url:"/images/ho7.jpg",revision:"0385f78caba702aa78260a31cf392517"},{url:"/images/profile.jpg",revision:"7087d3aca859f33bbe0e415f9e8ae4ae"},{url:"/images/profile.png",revision:"4eadc406682a6a42459722fb0e536404"},{url:"/images/profile.svg",revision:"6a7b9bfbec29836a894548945c723f6b"},{url:"/locales/en/common.json",revision:"9e0b8a7498ff5273c6240229b0ab71c9"},{url:"/locales/zh/common.json",revision:"c806c46f81dec52fed0341a01675c4c3"},{url:"/manifest.json",revision:"b5969ddbc0d6de5294b1bf1b219fea7f"},{url:"/ms-icon-144x144.png",revision:"5aa10d65c5ba9bd10b7787ca341976cc"},{url:"/ms-icon-150x150.png",revision:"fb836afdd19b1fbad57c1a92929b48e6"},{url:"/ms-icon-310x310.png",revision:"24c54e14284446fa8363b554ccc7b630"},{url:"/ms-icon-70x70.png",revision:"5e14e045b52fa5797a62451617e353b1"},{url:"/rss.xml",revision:"105817d8e8d97cc285507c19772c8e23"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
