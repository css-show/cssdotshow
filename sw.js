if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts("fallback-RWV282b7Bj_soNRdFe-Mg.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/MP_verify_XqOph8IqDaHuzDFa.txt",revision:"a3b71d1bd40e8ecee948c76f47fed60f"},{url:"/_next/static/RWV282b7Bj_soNRdFe-Mg/_buildManifest.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/RWV282b7Bj_soNRdFe-Mg/_ssgManifest.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/chunks/247-0074681f1d1c6ddf840e.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/chunks/390-a2949c39dc0c2924f4de.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/chunks/707-3d1caa7e91cc900875aa.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/chunks/a1a65adf-6972eac40a4f2ee58b03.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/chunks/main-fb5c0ed12ac69b54f74b.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/chunks/pages/404-9b4b21ad7c6e0799c06b.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/chunks/pages/500-1e7fd9902f2ccae8b227.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/chunks/pages/_app-9567007c9d5038e754e3.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/chunks/pages/_error-3d6e91188d031042f76a.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/chunks/pages/_offline-0ee631def2f62f893013.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/chunks/pages/guides-59945f58b3b06c38e89c.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/chunks/pages/index-86101ce96b1590c12b11.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/chunks/pages/posts/%5Bid%5D-7bbc57d0fbdc1704df32.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/chunks/pages/search-e1a303b3fd2880b3e173.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/chunks/pages/specs-7784e763183c774777f2.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/chunks/webpack-613fd858cdb9cf2af3be.js",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/css/5adacb2d2ac5dfc8c340.css",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_next/static/css/9893eecbcb97180d3098.css",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/_offline",revision:"RWV282b7Bj_soNRdFe-Mg"},{url:"/android-icon-144x144.png",revision:"ef9e9fb87fd38808da18df81fbdb7d96"},{url:"/android-icon-192x192.png",revision:"a85eb91e526266bf52a959f646ce20a1"},{url:"/android-icon-36x36.png",revision:"39b425c2786f33499fd2248f2a1945e1"},{url:"/android-icon-48x48.png",revision:"80233d919de07568247b19ed6ccc4686"},{url:"/android-icon-72x72.png",revision:"26b6f9f0dcad9e92a27838f7147dc416"},{url:"/android-icon-96x96.png",revision:"eae6176cb3ecc8b396e45693dcd31756"},{url:"/apple-icon-114x114.png",revision:"fc4499773466fc9b3daa22b397e3e3aa"},{url:"/apple-icon-120x120.png",revision:"a5468c43c9897c8fe79efda5e906b852"},{url:"/apple-icon-144x144.png",revision:"ef9e9fb87fd38808da18df81fbdb7d96"},{url:"/apple-icon-152x152.png",revision:"cfe090ce4710a8fc793e535020e5c7fd"},{url:"/apple-icon-180x180.png",revision:"4dba3ba463471e0062392420014ccb11"},{url:"/apple-icon-57x57.png",revision:"458455d93287564c6d691839580d29c9"},{url:"/apple-icon-60x60.png",revision:"10c49bdc91ed548b7217aed15c3bd163"},{url:"/apple-icon-72x72.png",revision:"26b6f9f0dcad9e92a27838f7147dc416"},{url:"/apple-icon-76x76.png",revision:"9a41f467d1d26350fac925714bb4aba7"},{url:"/apple-icon-precomposed.png",revision:"d19f131c3040ab3cd3532eae888e2263"},{url:"/apple-icon.png",revision:"d19f131c3040ab3cd3532eae888e2263"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon-16x16.png",revision:"fb78f7d2d85a3ed52b02b33ec56a2144"},{url:"/favicon-32x32.png",revision:"a52b18dd0d19c949776eb0731fa363ac"},{url:"/favicon-96x96.png",revision:"049deb3fa03946ba5f9d0e7ca52a0551"},{url:"/favicon.ico",revision:"07b5f20a4e9f3a5c0fb54a47649ab042"},{url:"/images/CSSSHOW.svg",revision:"6a7b9bfbec29836a894548945c723f6b"},{url:"/images/ho1.jpg",revision:"5e9e31a3696d142c6176c973073c9f3e"},{url:"/images/ho2.jpg",revision:"8300769a282d00becfb5e12be15f9af5"},{url:"/images/ho3.jpg",revision:"28d0c930681f51148e4a6a3deb1ac4af"},{url:"/images/ho4.jpg",revision:"23403e442fb78c82b53d701eb46ad722"},{url:"/images/ho5.jpg",revision:"871ef05b39ca0c23996efcc152f975cf"},{url:"/images/ho6.jpg",revision:"a3191fcaef00ba16a11d79e355c9c400"},{url:"/images/ho7.jpg",revision:"0385f78caba702aa78260a31cf392517"},{url:"/images/profile.jpg",revision:"7087d3aca859f33bbe0e415f9e8ae4ae"},{url:"/images/profile.png",revision:"4eadc406682a6a42459722fb0e536404"},{url:"/images/profile.svg",revision:"6a7b9bfbec29836a894548945c723f6b"},{url:"/locales/en/common.json",revision:"9e0b8a7498ff5273c6240229b0ab71c9"},{url:"/locales/zh/common.json",revision:"c806c46f81dec52fed0341a01675c4c3"},{url:"/manifest.json",revision:"b5969ddbc0d6de5294b1bf1b219fea7f"},{url:"/ms-icon-144x144.png",revision:"ef9e9fb87fd38808da18df81fbdb7d96"},{url:"/ms-icon-150x150.png",revision:"4842b52545bee5d5accdf2c9caeaa080"},{url:"/ms-icon-310x310.png",revision:"d0433f9249a29e99b76f83250e84e010"},{url:"/ms-icon-70x70.png",revision:"167b1b424d9d2284300f48790037503f"},{url:"/rss.xml",revision:"8af2fde56a6a1b44a8798b100d15ffc2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
