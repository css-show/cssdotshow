(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{9917:function(e,t,n){"use strict";var i=n(3848),o=n(3115);t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,s=void 0!==o&&o,u=e.priority,d=void 0!==u&&u,g=e.loading,h=e.lazyBoundary,v=void 0===h?"200px":h,b=e.className,y=e.quality,w=e.width,x=e.height,S=e.objectFit,E=e.objectPosition,j=e.onLoadingComplete,O=e.loader,L=void 0===O?z:O,_=e.placeholder,I=void 0===_?"empty":_,R=e.blurDataURL,M=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),P=n?"responsive":"intrinsic";"layout"in M&&(M.layout&&(P=M.layout),delete M.layout);var C="";if(function(e){return"object"===typeof e&&(m(e)||function(e){return void 0!==e.src}(e))}(t)){var D=m(t)?t.default:t;if(!D.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(D)));if(R=R||D.blurDataURL,C=D.src,(!P||"fill"!==P)&&(x=x||D.height,w=w||D.width,!D.height||!D.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(D)))}t="string"===typeof t?t:C;var q=k(w),N=k(x),U=k(y),B=!d&&("lazy"===g||"undefined"===typeof g);t.startsWith("data:")&&(s=!0,B=!1);p.has(t)&&(B=!1);0;var W,H,T,K=l.useIntersection({rootMargin:v,disabled:!B}),F=i(K,2),V=F[0],J=F[1],G=!B||J,Q={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:S,objectPosition:E},X="blur"===I?{filter:"blur(20px)",backgroundSize:S||"cover",backgroundImage:'url("'.concat(R,'")'),backgroundPosition:E||"0% 0%"}:{};if("fill"===P)W={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof q&&"undefined"!==typeof N){var Y=N/q,Z=isNaN(Y)?"100%":"".concat(100*Y,"%");"responsive"===P?(W={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},H={display:"block",boxSizing:"border-box",paddingTop:Z}):"intrinsic"===P?(W={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},H={boxSizing:"border-box",display:"block",maxWidth:"100%"},T='<svg width="'.concat(q,'" height="').concat(N,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===P&&(W={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:q,height:N})}else 0;var $={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};G&&($=A({src:t,unoptimized:s,layout:P,width:q,quality:U,sizes:n,loader:L}));var ee=t;return r.default.createElement("div",{style:W},H?r.default.createElement("div",{style:H},T?r.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(T))}):null):null,!G&&r.default.createElement("noscript",null,r.default.createElement("img",Object.assign({},M,A({src:t,unoptimized:s,layout:P,width:q,quality:U,sizes:n,loader:L}),{decoding:"async","data-nimg":!0,style:Q,className:b}))),r.default.createElement("img",Object.assign({},M,$,{decoding:"async","data-nimg":!0,className:b,ref:function(e){V(e),function(e,t,n,i){if(!e)return;var o=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===n&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),p.add(t),i){var o=e.naturalWidth,r=e.naturalHeight;i({naturalWidth:o,naturalHeight:r})}}))};e.complete?o():e.onload=o}(e,ee,I,j)},style:f({},Q,X)})),d?r.default.createElement(a.default,null,r.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imagesrcset:$.srcSet,imagesizes:$.sizes})):null)};var r=d(n(7294)),a=d(n(639)),c=n(8997),s=n(5809),l=n(7426);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){u(e,t,n[t])}))}return e}var p=new Set;var g=new Map([["default",function(e){var t=e.root,n=e.src,i=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(o||75)}],["imgix",function(e){var t=e.root,n=e.src,i=e.width,o=e.quality,r=new URL("".concat(t).concat(S(n))),a=r.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),o&&a.set("q",o.toString());return r.href}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,o=e.quality,r=["f_auto","c_limit","w_"+i,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(r).concat(S(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(S(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function m(e){return void 0!==e.default}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://cdn.jsdelivr.net/gh/zhanghecool/cssdotshow@gh-pages/",loader:"imgix"}||s.imageConfigDefault,v=h.deviceSizes,b=h.imageSizes,y=h.loader,w=h.path,x=(h.domains,[].concat(o(v),o(b)));function A(e){var t=e.src,n=e.unoptimized,i=e.layout,r=e.width,a=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var i,r=/(^|\s)(1?\d?\d)vw/g,a=[];i=r.exec(n);i)a.push(parseInt(i[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:x.filter((function(e){return e>=v[0]*c})),kind:"w"}}return{widths:x,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:v,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return x.find((function(t){return t>=e}))||x[x.length-1]})))),kind:"x"}}(r,i,c),u=l.widths,d=l.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:s({src:t,quality:a,width:u[f]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t=g.get(y);if(t)return t(f({root:w},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(y))}function S(e){return"/"===e[0]?e.slice(1):e}v.sort((function(e,t){return e-t})),x.sort((function(e,t){return e-t}))},2167:function(e,t,n){"use strict";var i=n(3848);t.default=void 0;var o,r=(o=n(7294))&&o.__esModule?o:{default:o},a=n(1063),c=n(4651),s=n(7426);var l={};function u(e,t,n,i){if(e&&a.isLocalURL(t)){e.prefetch(t,n,i).catch((function(e){0}));var o=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),d=r.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=i(t,2),r=n[0],c=n[1];return{href:r,as:e.as?a.resolveHref(o,e.as):c||r}}),[o,e.href,e.as]),f=d.href,p=d.as,g=e.children,m=e.replace,h=e.shallow,v=e.scroll,b=e.locale;"string"===typeof g&&(g=r.default.createElement("a",null,g));var y=(t=r.default.Children.only(g))&&"object"===typeof t&&t.ref,w=s.useIntersection({rootMargin:"200px"}),x=i(w,2),A=x[0],k=x[1],z=r.default.useCallback((function(e){A(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,A]);r.default.useEffect((function(){var e=k&&n&&a.isLocalURL(f),t="undefined"!==typeof b?b:o&&o.locale,i=l[f+"%"+p+(t?"%"+t:"")];e&&!i&&u(o,f,p,{locale:t})}),[p,f,k,b,n,o]);var S={ref:z,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,i,o,r,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==c&&i.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,i,{shallow:r,locale:s,scroll:c}))}(e,o,f,p,m,h,v,b)},onMouseEnter:function(e){a.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,f,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:o&&o.locale,j=o&&o.isLocaleDomain&&a.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);S.href=j||a.addBasePath(a.addLocale(p,E,o&&o.defaultLocale))}return r.default.cloneElement(t,S)};t.default=d},7426:function(e,t,n){"use strict";var i=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=o.useRef(),l=o.useState(!1),u=i(l,2),d=u[0],f=u[1],p=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:i}),n}(n),o=i.id,r=i.observer,a=i.elements;return a.set(e,t),r.observe(e),function(){a.delete(e),r.unobserve(e),0===a.size&&(r.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return o.useEffect((function(){if(!a&&!d){var e=r.requestIdleCallback((function(){return f(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[d]),[p,d]};var o=n(7294),r=n(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},9008:function(e,t,n){e.exports=n(639)},5675:function(e,t,n){e.exports=n(9917)},1664:function(e,t,n){e.exports=n(2167)}}]);