if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,n,a)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return i;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts("fallback-9PwvbXGYkOLBwi0cYoA63.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/9PwvbXGYkOLBwi0cYoA63/_buildManifest.js",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_next/static/9PwvbXGYkOLBwi0cYoA63/_ssgManifest.js",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_next/static/chunks/707-3d1caa7e91cc900875aa.js",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_next/static/chunks/834-6e6a243e60a1831b38a1.js",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_next/static/chunks/main-da1bc8f8d312ca485cee.js",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_next/static/chunks/pages/404-c8a07386c7ca6fc2140c.js",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_next/static/chunks/pages/500-1e7fd9902f2ccae8b227.js",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_next/static/chunks/pages/_app-0829e4e8edd59bae7ca9.js",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_next/static/chunks/pages/_error-9d014bdedb748ff555b4.js",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_next/static/chunks/pages/_offline-5d1132ee651966a44336.js",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_next/static/chunks/pages/guides-28abf007dfac11446032.js",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_next/static/chunks/pages/index-36ef4ce167b5de0d3541.js",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_next/static/chunks/pages/posts/%5Bid%5D-84fb98c13178b6e9e17b.js",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_next/static/chunks/pages/search-cf86ae82216088807903.js",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_next/static/chunks/pages/specs-7f179a7436e548107bc6.js",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_next/static/chunks/webpack-fb76148cfcfb42ca18eb.js",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_next/static/css/9893eecbcb97180d3098.css",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_next/static/css/b3adc614b3aa9f28b55b.css",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/_offline",revision:"9PwvbXGYkOLBwi0cYoA63"},{url:"/android-icon-144x144.png",revision:"ef9e9fb87fd38808da18df81fbdb7d96"},{url:"/android-icon-192x192.png",revision:"a85eb91e526266bf52a959f646ce20a1"},{url:"/android-icon-36x36.png",revision:"39b425c2786f33499fd2248f2a1945e1"},{url:"/android-icon-48x48.png",revision:"80233d919de07568247b19ed6ccc4686"},{url:"/android-icon-72x72.png",revision:"26b6f9f0dcad9e92a27838f7147dc416"},{url:"/android-icon-96x96.png",revision:"eae6176cb3ecc8b396e45693dcd31756"},{url:"/apple-icon-114x114.png",revision:"fc4499773466fc9b3daa22b397e3e3aa"},{url:"/apple-icon-120x120.png",revision:"a5468c43c9897c8fe79efda5e906b852"},{url:"/apple-icon-144x144.png",revision:"ef9e9fb87fd38808da18df81fbdb7d96"},{url:"/apple-icon-152x152.png",revision:"cfe090ce4710a8fc793e535020e5c7fd"},{url:"/apple-icon-180x180.png",revision:"4dba3ba463471e0062392420014ccb11"},{url:"/apple-icon-57x57.png",revision:"458455d93287564c6d691839580d29c9"},{url:"/apple-icon-60x60.png",revision:"10c49bdc91ed548b7217aed15c3bd163"},{url:"/apple-icon-72x72.png",revision:"26b6f9f0dcad9e92a27838f7147dc416"},{url:"/apple-icon-76x76.png",revision:"9a41f467d1d26350fac925714bb4aba7"},{url:"/apple-icon-precomposed.png",revision:"d19f131c3040ab3cd3532eae888e2263"},{url:"/apple-icon.png",revision:"d19f131c3040ab3cd3532eae888e2263"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon-16x16.png",revision:"fb78f7d2d85a3ed52b02b33ec56a2144"},{url:"/favicon-32x32.png",revision:"a52b18dd0d19c949776eb0731fa363ac"},{url:"/favicon-96x96.png",revision:"049deb3fa03946ba5f9d0e7ca52a0551"},{url:"/favicon.ico",revision:"07b5f20a4e9f3a5c0fb54a47649ab042"},{url:"/images/CSSSHOW.svg",revision:"6a7b9bfbec29836a894548945c723f6b"},{url:"/images/ho1.jpg",revision:"5e9e31a3696d142c6176c973073c9f3e"},{url:"/images/ho2.jpg",revision:"8300769a282d00becfb5e12be15f9af5"},{url:"/images/ho3.jpg",revision:"28d0c930681f51148e4a6a3deb1ac4af"},{url:"/images/ho4.jpg",revision:"23403e442fb78c82b53d701eb46ad722"},{url:"/images/ho5.jpg",revision:"871ef05b39ca0c23996efcc152f975cf"},{url:"/images/ho6.jpg",revision:"a3191fcaef00ba16a11d79e355c9c400"},{url:"/images/ho7.jpg",revision:"0385f78caba702aa78260a31cf392517"},{url:"/images/profile.jpg",revision:"7087d3aca859f33bbe0e415f9e8ae4ae"},{url:"/images/profile.png",revision:"4eadc406682a6a42459722fb0e536404"},{url:"/images/profile.svg",revision:"6a7b9bfbec29836a894548945c723f6b"},{url:"/locales/en/common.json",revision:"9e0b8a7498ff5273c6240229b0ab71c9"},{url:"/locales/zh/common.json",revision:"c806c46f81dec52fed0341a01675c4c3"},{url:"/manifest.json",revision:"b5969ddbc0d6de5294b1bf1b219fea7f"},{url:"/ms-icon-144x144.png",revision:"ef9e9fb87fd38808da18df81fbdb7d96"},{url:"/ms-icon-150x150.png",revision:"4842b52545bee5d5accdf2c9caeaa080"},{url:"/ms-icon-310x310.png",revision:"d0433f9249a29e99b76f83250e84e010"},{url:"/ms-icon-70x70.png",revision:"167b1b424d9d2284300f48790037503f"},{url:"/rss.xml",revision:"38f899dd6892923575ea76f48d89c2dd"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
