if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,a)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts("fallback--A972FOQcXusl1OgiPEPB.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/-A972FOQcXusl1OgiPEPB/_buildManifest.js",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_next/static/-A972FOQcXusl1OgiPEPB/_ssgManifest.js",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_next/static/chunks/834-557076469c7319cc1cf8.js",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_next/static/chunks/984-a572b358f1116ab96087.js",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_next/static/chunks/main-fa923186bddb2ff5b72a.js",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_next/static/chunks/pages/404-033032245f6622b179f9.js",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_next/static/chunks/pages/500-1e7fd9902f2ccae8b227.js",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_next/static/chunks/pages/_app-50fff0d562481573b3ef.js",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_next/static/chunks/pages/_error-9d014bdedb748ff555b4.js",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_next/static/chunks/pages/_offline-d0c4b3bcd0e77ee73d00.js",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_next/static/chunks/pages/guides-7920c5d07caf4c8b6d15.js",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_next/static/chunks/pages/index-84498905ba83f977100b.js",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_next/static/chunks/pages/posts/%5Bid%5D-d828bdb80a1a4a547ea9.js",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_next/static/chunks/pages/search-16a0ab9581b860a89154.js",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_next/static/chunks/pages/specs-ffe4ef50bc693f2ef2c6.js",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_next/static/chunks/webpack-18f5c930321213f5010f.js",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_next/static/css/48ff6fd7d51ef248067c.css",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_next/static/css/9893eecbcb97180d3098.css",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/_offline",revision:"-A972FOQcXusl1OgiPEPB"},{url:"/android-icon-144x144.png",revision:"4ea4fea909f7f2e612ee3347619cabca"},{url:"/android-icon-192x192.png",revision:"0fb14cfaf5c3889478963acbeb1b281a"},{url:"/android-icon-36x36.png",revision:"d7a9a86af16a1d8690ed2ff6ec56dc21"},{url:"/android-icon-48x48.png",revision:"14d47730ef54c9a47069ff20100fa9a4"},{url:"/android-icon-72x72.png",revision:"95291b911fa1e61fa3db82bdac1645da"},{url:"/android-icon-96x96.png",revision:"9683f28c2704c1675789b0d2024a8725"},{url:"/apple-icon-114x114.png",revision:"60470da3687d0eacfa795edf247df892"},{url:"/apple-icon-120x120.png",revision:"cc179b78bc2e0f8e5881b6959649e793"},{url:"/apple-icon-144x144.png",revision:"4ea4fea909f7f2e612ee3347619cabca"},{url:"/apple-icon-152x152.png",revision:"28838fd87fcdb5b151ff3a13936e5ede"},{url:"/apple-icon-180x180.png",revision:"0133742fde2c1beb6d770469abcd23ca"},{url:"/apple-icon-57x57.png",revision:"5ece6a2ddaee9d68dcbd962016a320b8"},{url:"/apple-icon-60x60.png",revision:"6c8c12b3a093af531ed8a1cdf141e898"},{url:"/apple-icon-72x72.png",revision:"95291b911fa1e61fa3db82bdac1645da"},{url:"/apple-icon-76x76.png",revision:"5f480bdd7d2194248a916ed3ff9ec48c"},{url:"/apple-icon-precomposed.png",revision:"65873e2c6c219795fe271d80d5b4ab79"},{url:"/apple-icon.png",revision:"65873e2c6c219795fe271d80d5b4ab79"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon-16x16.png",revision:"fb78f7d2d85a3ed52b02b33ec56a2144"},{url:"/favicon-32x32.png",revision:"a52b18dd0d19c949776eb0731fa363ac"},{url:"/favicon-96x96.png",revision:"049deb3fa03946ba5f9d0e7ca52a0551"},{url:"/favicon.ico",revision:"07b5f20a4e9f3a5c0fb54a47649ab042"},{url:"/images/CSSSHOW.svg",revision:"6a7b9bfbec29836a894548945c723f6b"},{url:"/images/profile.jpg",revision:"7087d3aca859f33bbe0e415f9e8ae4ae"},{url:"/images/profile.png",revision:"4eadc406682a6a42459722fb0e536404"},{url:"/images/profile.svg",revision:"6a7b9bfbec29836a894548945c723f6b"},{url:"/locales/en/common.json",revision:"9e0b8a7498ff5273c6240229b0ab71c9"},{url:"/locales/zh/common.json",revision:"c806c46f81dec52fed0341a01675c4c3"},{url:"/manifest.json",revision:"b5969ddbc0d6de5294b1bf1b219fea7f"},{url:"/ms-icon-144x144.png",revision:"5aa10d65c5ba9bd10b7787ca341976cc"},{url:"/ms-icon-150x150.png",revision:"fb836afdd19b1fbad57c1a92929b48e6"},{url:"/ms-icon-310x310.png",revision:"24c54e14284446fa8363b554ccc7b630"},{url:"/ms-icon-70x70.png",revision:"5e14e045b52fa5797a62451617e353b1"},{url:"/rss.xml",revision:"105817d8e8d97cc285507c19772c8e23"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
