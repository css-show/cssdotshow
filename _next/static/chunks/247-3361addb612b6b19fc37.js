(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),o=n(6860),i=n(379),a=n(8206);e.exports=function(e){return r(e)||o(e)||i(e)||a()}},9917:function(e,t,n){"use strict";var r=n(3038),o=n(319),i=n(5318);t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,i=void 0!==o&&o,d=e.priority,p=void 0!==d&&d,v=e.loading,m=e.className,g=e.quality,y=e.width,b=e.height,w=e.objectFit,S=e.objectPosition,M=e.loader,_=void 0===M?k:M,O=e.placeholder,j=void 0===O?"empty":O,E=e.blurDataURL,z=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader","placeholder","blurDataURL"]),C=n?"responsive":"intrinsic";"layout"in z&&(z.layout&&(C=z.layout),delete z.layout);var I="";if(function(e){return"object"===typeof e&&(h(e)||function(e){return void 0!==e.src}(e))}(t)){var D=h(t)?t.default:t;if(!D.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(D)));if(E=E||D.blurDataURL,I=D.src,(!C||"fill"!==C)&&(b=b||D.height,y=y||D.width,!D.height||!D.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(D)))}t="string"===typeof t?t:I;var P=A(y),R=A(b),L=A(g);0;var q=!p&&("lazy"===v||"undefined"===typeof v);t&&t.startsWith("data:")&&(i=!0,q=!1);var H,N,U,W=(0,f.useIntersection)({rootMargin:"200px",disabled:!q}),B=r(W,2),T=B[0],F=B[1],K=!q||F,V=(0,c.default)({position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:w,objectPosition:S},"blur"===j?{filter:"blur(20px)",backgroundSize:"cover",backgroundImage:'url("'.concat(E,'")')}:void 0);if("undefined"!==typeof P&&"undefined"!==typeof R&&"fill"!==C){var J=R/P,Q=isNaN(J)?"100%":"".concat(100*J,"%");"responsive"===C?(H={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},N={display:"block",boxSizing:"border-box",paddingTop:Q}):"intrinsic"===C?(H={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},N={boxSizing:"border-box",display:"block",maxWidth:"100%"},U='<svg width="'.concat(P,'" height="').concat(R,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===C&&(H={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:P,height:R})}else"undefined"===typeof P&&"undefined"===typeof R&&"fill"===C&&(H={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var $={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};K&&($=x({src:t,unoptimized:i,layout:C,width:P,quality:L,sizes:n,loader:_}));return s.default.createElement("div",{style:H},N?s.default.createElement("div",{style:N},U?s.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,l.toBase64)(U))}):null):null,!K&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},z,x({src:t,unoptimized:i,layout:C,width:P,quality:L,sizes:n,loader:_}),{src:t,decoding:"async",sizes:n,style:V,className:m}))),s.default.createElement("img",Object.assign({},z,$,{decoding:"async",className:m,ref:function(e){T(e),function(e,t){if("blur"===t&&e){var n=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"}))};e.complete?n():e.onload=n}}(e,j)},style:V})),p?s.default.createElement(u.default,null,s.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imagesrcset:$.srcSet,imagesizes:$.sizes})):null)};var a=i(n(7316)),c=i(n(7154)),s=i(n(7294)),u=i(n(2775)),l=n(8814),d=n(5655),f=n(7426);var p=new Map([["imgix",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,i=["auto=format","fit=max","w="+r],a="";o&&i.push("q="+o);i.length&&(a="?"+i.join("&"));return"".concat(t).concat(S(n)).concat(a)}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(S(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(S(n),"?imwidth=").concat(r)}],["default",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}]]);function h(e){return void 0!==e.default}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://cdn.jsdelivr.net/gh/zhanghecool/cssdotshow@gh-pages/",loader:"imgix"}||d.imageConfigDefault,m=v.deviceSizes,g=v.imageSizes,y=v.loader,b=v.path,w=(v.domains,[].concat(o(m),o(g)));function x(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,a=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,a=[];r=i.exec(n);r)a.push(parseInt(r[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:w.filter((function(e){return e>=m[0]*c})),kind:"w"}}return{widths:w,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:m,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return w.find((function(t){return t>=e}))||w[w.length-1]})))),kind:"x"}}(i,r,c),l=u.widths,d=u.kind,f=l.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:l.map((function(e,n){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:s({src:t,quality:a,width:l[f]})}}function A(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t=p.get(y);if(t)return t((0,c.default)({root:b},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(y))}function S(e){return"/"===e[0]?e.slice(1):e}m.sort((function(e,t){return e-t})),w.sort((function(e,t){return e-t}))},2167:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var i=o(n(7294)),a=n(9414),c=n(4651),s=n(7426),u={};function l(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,o=(0,c.useRouter)(),d=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):c||i}}),[o,e.href,e.as]),f=d.href,p=d.as,h=e.children,v=e.replace,m=e.shallow,g=e.scroll,y=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=(t=i.Children.only(h))&&"object"===typeof t&&t.ref,w=(0,s.useIntersection)({rootMargin:"200px"}),x=r(w,2),A=x[0],k=x[1],S=i.default.useCallback((function(e){A(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,A]);(0,i.useEffect)((function(){var e=k&&n&&(0,a.isLocalURL)(f),t="undefined"!==typeof y?y:o&&o.locale,r=u[f+"%"+p+(t?"%"+t:"")];e&&!r&&l(o,f,p,{locale:t})}),[p,f,k,y,n,o]);var M={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:c}))}(e,o,f,p,v,m,g,y)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,f,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof y?y:o&&o.locale,O=o&&o.isLocaleDomain&&(0,a.getDomainLocale)(p,_,o&&o.locales,o&&o.domainLocales);M.href=O||(0,a.addBasePath)((0,a.addLocale)(p,_,o&&o.defaultLocale))}return i.default.cloneElement(t,M)};t.default=d},7426:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),d=l[0],f=l[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,o.useEffect)((function(){if(!a&&!d){var e=(0,i.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[d]),[p,d]};var o=n(7294),i=n(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(3398);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},2775:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(i=n(3244))&&i.__esModule?i:{default:i},s=n(3398),u=n(1165),l=n(6393);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var s=0,u=h.length;s<u;s++){var l=h[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var d=o.props[l],f=r[l]||new Set;"name"===l&&a||!f.has(d)?(f.add(d),r[l]=f):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,a.default.cloneElement(e,c)}return a.default.cloneElement(e,{key:i})}))}var m=function(e){var t=e.children,n=(0,a.useContext)(s.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)};t.default=m},3244:function(e,t,n){"use strict";var r=n(319),o=n(4575),i=n(3913),a=(n(1506),n(2205)),c=n(8585),s=n(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),d=function(e){a(n,e);var t=u(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},8814:function(e,t){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},5655:function(e,t){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1}},9008:function(e,t,n){e.exports=n(2775)},5675:function(e,t,n){e.exports=n(9917)},1664:function(e,t,n){e.exports=n(2167)}}]);