(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1234:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5675),a=n(1664),i=n(5893);function o(){return(0,i.jsx)("nav",{className:"navbar navbar-expand-lg sticky-top ",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(a.default,{passHref:!0,href:"/",className:"navbar-brand",children:(0,i.jsx)("div",{id:"leftlogo",children:(0,i.jsx)(r.default,{unoptimized:!0,src:"/assets/navbar-logo-new.svg",alt:"Navbar Logo",className:"d-inline-block align-top",loading:"lazy",width:"100",height:"100"})})}),(0,i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,i.jsx)("span",{id:"navbar-toggler-icon",children:"\u2261"})}),(0,i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:(0,i.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,i.jsx)("li",{className:"link-background",children:(0,i.jsx)(a.default,{passHref:!0,href:"/create",className:"nav-link left",children:(0,i.jsx)("a",{className:"nav-link left",children:"Create NFT"})})}),(0,i.jsx)("li",{className:"link-background",children:(0,i.jsx)(a.default,{passHref:!0,href:"/viewassets",className:"nav-link left",children:(0,i.jsx)("a",{className:"nav-link left",children:"View your assets"})})}),(0,i.jsx)("li",{className:"link-background",children:(0,i.jsx)(a.default,{passHref:!0,href:"/creator-dashboard",children:(0,i.jsx)("a",{className:"nav-link left",children:"Dashboard"})})}),(0,i.jsx)("li",{className:"link-background",children:(0,i.jsx)(a.default,{passHref:!0,href:"/about",className:"nav-link left",children:(0,i.jsx)("a",{className:"nav-link left",children:" About Us"})})})]})})]})})}},9917:function(e,t,n){"use strict";var r=n(3038),a=n(319);t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,c=void 0!==a&&a,u=e.priority,d=void 0!==u&&u,h=e.loading,m=e.lazyBoundary,b=void 0===m?"200px":m,v=e.className,y=e.quality,w=e.width,j=e.height,A=e.objectFit,S=e.objectPosition,N=e.onLoadingComplete,z=e.loader,E=void 0===z?O:z,_=e.placeholder,P=void 0===_?"empty":_,L=e.blurDataURL,R=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),I=n?"responsive":"intrinsic";"layout"in R&&(R.layout&&(I=R.layout),delete R.layout);var D="";if(function(e){return"object"===typeof e&&(g(e)||function(e){return void 0!==e.src}(e))}(t)){var M=g(t)?t.default:t;if(!M.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(M)));if(L=L||M.blurDataURL,D=M.src,(!I||"fill"!==I)&&(j=j||M.height,w=w||M.width,!M.height||!M.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(M)))}t="string"===typeof t?t:D;var C=k(w),H=k(j),q=k(y),B=!d&&("lazy"===h||"undefined"===typeof h);(t.startsWith("data:")||t.startsWith("blob:"))&&(c=!0,B=!1);p.has(t)&&(B=!1);0;var U,W,T,F=l.useIntersection({rootMargin:b,disabled:!B}),K=r(F,2),Z=K[0],J=K[1],G=!B||J,V={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:A,objectPosition:S},X="blur"===P?{filter:"blur(20px)",backgroundSize:A||"cover",backgroundImage:'url("'.concat(L,'")'),backgroundPosition:S||"0% 0%"}:{};if("fill"===I)U={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof C&&"undefined"!==typeof H){var Y=H/C,Q=isNaN(Y)?"100%":"".concat(100*Y,"%");"responsive"===I?(U={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},W={display:"block",boxSizing:"border-box",paddingTop:Q}):"intrinsic"===I?(U={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},W={boxSizing:"border-box",display:"block",maxWidth:"100%"},T='<svg width="'.concat(C,'" height="').concat(H,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===I&&(U={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:C,height:H})}else 0;var $={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};G&&($=x({src:t,unoptimized:c,layout:I,width:C,quality:q,sizes:n,loader:E}));var ee=t;return i.default.createElement("div",{style:U},W?i.default.createElement("div",{style:W},T?i.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(s.toBase64(T))}):null):null,i.default.createElement("img",Object.assign({},R,$,{decoding:"async","data-nimg":I,className:v,ref:function(e){Z(e),function(e,t,n,r,a){if(!e)return;var i=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),p.add(t),a){var n=e.naturalWidth,i=e.naturalHeight;a({naturalWidth:n,naturalHeight:i})}}))};e.complete?i():e.onload=i}(e,ee,0,P,N)},style:f({},V,X)})),i.default.createElement("noscript",null,i.default.createElement("img",Object.assign({},R,x({src:t,unoptimized:c,layout:I,width:C,quality:q,sizes:n,loader:E}),{decoding:"async","data-nimg":I,style:V,className:v,loading:h||"lazy"}))),d?i.default.createElement(o.default,null,i.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imagesrcset:$.srcSet,imagesizes:$.sizes})):null)};var i=d(n(7294)),o=d(n(639)),s=n(8997),c=n(5809),l=n(7426);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}var p=new Set;var h=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,a=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(a||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,a=e.quality,i=new URL("".concat(t).concat(A(n))),o=i.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),a&&o.set("q",a.toString());return i.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,a=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(a||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(A(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(A(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function g(e){return void 0!==e.default}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"cloudinary"}||c.imageConfigDefault,b=m.deviceSizes,v=m.imageSizes,y=m.loader,w=m.path,j=(m.domains,[].concat(a(b),a(v)));function x(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,o=e.quality,s=e.sizes,c=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,o=[];r=i.exec(n);r)o.push(parseInt(r[2]));if(o.length){var s=.01*Math.min.apply(Math,o);return{widths:j.filter((function(e){return e>=b[0]*s})),kind:"w"}}return{widths:j,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:b,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return j.find((function(t){return t>=e}))||j[j.length-1]})))),kind:"x"}}(i,r,s),u=l.widths,d=l.kind,f=u.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:u.map((function(e,n){return"".concat(c({src:t,quality:o,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:c({src:t,quality:o,width:u[f]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function O(e){var t=h.get(y);if(t)return t(f({root:w},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(c.VALID_LOADERS.join(", "),". Received: ").concat(y))}function A(e){return"/"===e[0]?e.slice(1):e}b.sort((function(e,t){return e-t})),j.sort((function(e,t){return e-t}))},2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},o=n(1063),s=n(4651),c=n(7426);var l={};function u(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,a=s.useRouter(),d=i.default.useMemo((function(){var t=o.resolveHref(a,e.href,!0),n=r(t,2),i=n[0],s=n[1];return{href:i,as:e.as?o.resolveHref(a,e.as):s||i}}),[a,e.href,e.as]),f=d.href,p=d.as,h=e.children,g=e.replace,m=e.shallow,b=e.scroll,v=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var y=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,w=c.useIntersection({rootMargin:"200px"}),j=r(w,2),x=j[0],k=j[1],O=i.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);i.default.useEffect((function(){var e=k&&n&&o.isLocalURL(f),t="undefined"!==typeof v?v:a&&a.locale,r=l[f+"%"+p+(t?"%"+t:"")];e&&!r&&u(a,f,p,{locale:t})}),[p,f,k,v,n,a]);var A={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](n,r,{shallow:i,locale:c,scroll:s}))}(e,a,f,p,g,m,b,v)},onMouseEnter:function(e){o.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,f,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof v?v:a&&a.locale,N=a&&a.isLocaleDomain&&o.getDomainLocale(p,S,a&&a.locales,a&&a.domainLocales);A.href=N||o.addBasePath(o.addLocale(p,S,a&&a.defaultLocale))}return i.default.cloneElement(t,A)};t.default=d},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,c=a.useRef(),l=a.useState(!1),u=r(l,2),d=u[0],f=u[1],p=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),s.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return a.useEffect((function(){if(!o&&!d){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),[p,d]};var a=n(7294),i=n(3447),o="undefined"!==typeof IntersectionObserver;var s=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},7672:function(e,t,n){"use strict";n.r(t);var r=n(4942),a=(n(3146),n(9008)),i=n(1234),o=n(5893);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.default,{children:[(0,o.jsx)("meta",{name:"description",content:"Blockchain based NFT application"}),(0,o.jsx)("link",{rel:"icon",href:"/assets/favicon.png"}),(0,o.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",crossOrigin:"anonymous"}),(0,o.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Raleway:wght@100;300&display=swap",rel:"stylesheet",crossOrigin:"anonymous"}),(0,o.jsx)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",integrity:"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS",crossOrigin:"anonymous"}),(0,o.jsx)("script",{src:"https://code.jquery.com/jquery-3.3.1.js",integrity:"sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=",async:!0}),(0,o.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js",integrity:"sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut",async:!0}),(0,o.jsx)("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js",integrity:"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k",async:!0})]}),(0,o.jsx)(i.Z,{}),(0,o.jsx)(t,c({},n))]})}},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7672)}])},3146:function(){},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},9008:function(e,t,n){e.exports=n(639)},5675:function(e,t,n){e.exports=n(9917)},1664:function(e,t,n){e.exports=n(2167)},4942:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var n=e.O();_N_E=n}]);
//# sourceMappingURL=_app-f9d932654e34d58e947e.js.map