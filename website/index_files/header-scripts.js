window.CUA=window.CUA||{},window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(S.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&b[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+T.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?c(o,t):(o=(e+" "+N.join(r+" ")+r).split(" "),s(o,t,n))}function u(){m.input=function(n){for(var r=0,o=n.length;o>r;r++)A[n[r]]=n[r]in E;return A.list&&(A.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),A}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var r,o,i,a=0,c=e.length;c>a;a++)E.setAttribute("type",o=e[a]),r="text"!==E.type,r&&(E.value=w,E.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&E.style.WebkitAppearance!==n?(v.appendChild(E),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(E,null).WebkitAppearance&&0!==E.offsetHeight,v.removeChild(E)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?E.checkValidity&&E.checkValidity()===!1:E.value!=w)),M[e[a]]=!!r;return M}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,p="2.7.1",m={},h=!0,v=t.documentElement,g="modernizr",y=t.createElement(g),b=y.style,E=t.createElement("input"),w=":)",x={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",T=C.split(" "),N=C.toLowerCase().split(" "),j={svg:"http://www.w3.org/2000/svg"},k={},M={},A={},L=[],P=L.slice,$=function(e,n,r,o){var i,a,c,s,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:g+(r+1),l.appendChild(c);return i=["&#173;",'<style id="s',g,'">',e,"</style>"].join(""),l.id=g,(u?l:d).innerHTML+=i,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",s=v.style.overflow,v.style.overflow="hidden",v.appendChild(d)),a=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),v.style.overflow=s),!!a},B=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return $("@media "+t+" { #"+g+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},F=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),O={}.hasOwnProperty;f=i(O,"undefined")||i(O.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return O.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=P.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(P.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(P.call(arguments)))};return r}),k.flexbox=function(){return l("flexWrap")},k.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},k.canvastext=function(){return!!m.canvas&&!!i(t.createElement("canvas").getContext("2d").fillText,"function")},k.webgl=function(){return!!e.WebGLRenderingContext},k.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:$(["@media (",S.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},k.geolocation=function(){return"geolocation"in navigator},k.postmessage=function(){return!!e.postMessage},k.websqldatabase=function(){return!!e.openDatabase},k.indexedDB=function(){return!!l("indexedDB",e)},k.hashchange=function(){return F("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},k.history=function(){return!!e.history&&!!history.pushState},k.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},k.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},k.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},k.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},k.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},k.backgroundsize=function(){return l("backgroundSize")},k.borderimage=function(){return l("borderImage")},k.borderradius=function(){return l("borderRadius")},k.boxshadow=function(){return l("boxShadow")},k.textshadow=function(){return""===t.createElement("div").style.textShadow},k.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},k.cssanimations=function(){return l("animationName")},k.csscolumns=function(){return l("columnCount")},k.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+S.join(n+e)).slice(0,-e.length)),a(b.backgroundImage,"gradient")},k.cssreflections=function(){return l("boxReflect")},k.csstransforms=function(){return!!l("transform")},k.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in v.style&&$("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},k.csstransitions=function(){return l("transition")},k.fontface=function(){var e;return $('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},k.generatedcontent=function(){var e;return $(["#",g,"{font:0/0 a}#",g,':after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},k.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},k.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},k.localstorage=function(){try{return localStorage.setItem(g,g),localStorage.removeItem(g),!0}catch(e){return!1}},k.sessionstorage=function(){try{return sessionStorage.setItem(g,g),sessionStorage.removeItem(g),!0}catch(e){return!1}},k.webworkers=function(){return!!e.Worker},k.applicationcache=function(){return!!e.applicationCache},k.svg=function(){return!!t.createElementNS&&!!t.createElementNS(j.svg,"svg").createSVGRect},k.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==j.svg},k.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(x.call(t.createElementNS(j.svg,"animate")))},k.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(x.call(t.createElementNS(j.svg,"clipPath")))};for(var z in k)f(k,z)&&(d=z.toLowerCase(),m[d]=k[z](),L.push((m[d]?"":"no-")+d));return m.input||u(),m.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&m.addTest(r,e[r]);else{if(e=e.toLowerCase(),m[e]!==n)return m;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(v.className+=" supports-"+(t?"":"no-")+e),m[e]=t}return m},r(""),y=E=null,m._version=p,m._prefixes=S,m._domPrefixes=N,m._cssomPrefixes=T,m.mq=B,m.hasEvent=F,m.testProp=function(e){return c([e])},m.testAllProps=l,m.testStyles=$,m.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},v.className=v.className.replace(/(^|\s)supports-no-js(\s|$)/,"$1$2")+(h?" supports-js supports-"+L.join(" supports-"):""),m}(this,this.document),function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=S.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=x[e[E]];return t||(t={},w++,e[E]=w,x[w]=t),t}function i(e,n,r){if(n||(n=t),h)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():b.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||y.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),h)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),s=c.length;s>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return S.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(S,t.frag)}function s(e){e||(e=t);var r=o(e);return S.shivCSS&&!m&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),h||c(e,r),e}function l(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,i=RegExp("^(?:"+r().join("|")+")$","i"),a=[];o--;)t=n[o],i.test(t.nodeName)&&a.push(t.applyElement(u(t)));return a}function u(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(T+":"+e.nodeName);r--;)t=n[r],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function d(e){for(var t,n=e.split("{"),o=n.length,i=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+T+"\\:$2";o--;)t=n[o]=n[o].split("}"),t[t.length-1]=t[t.length-1].replace(i,a),n[o]=t.join("}");return n.join("{")}function f(e){for(var t=e.length;t--;)e[t].removeNode()}function p(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,i,a=o(e),c=e.namespaces,s=e.parentWindow;return!N||e.printShived?e:("undefined"==typeof c[T]&&c.add(T),s.attachEvent("onbeforeprint",function(){t();for(var o,a,c,s=e.styleSheets,u=[],f=s.length,p=Array(f);f--;)p[f]=s[f];for(;c=p.pop();)if(!c.disabled&&C.test(c.media)){try{o=c.imports,a=o.length}catch(m){a=0}for(f=0;a>f;f++)p.push(o[f]);try{u.push(c.cssText)}catch(m){}}u=d(u.reverse().join("")),i=l(e),r=n(e,u)}),s.attachEvent("onafterprint",function(){f(i),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var m,h,v="3.7.0",g=e.html5||{},y=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,b=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,E="_html5shiv",w=0,x={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",m="hidden"in e,h=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){m=!0,h=!0}}();var S={elements:g.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:v,shivCSS:g.shivCSS!==!1,supportsUnknownElements:h,shivMethods:g.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:a};e.html5=S,s(t);var C=/^$|\b(?:all|print)\b/,T="html5shiv",N=!h&&function(){var n=t.documentElement;return"undefined"!=typeof t.namespaces&&"undefined"!=typeof t.parentWindow&&"undefined"!=typeof n.applyElement&&"undefined"!=typeof n.removeNode&&"undefined"!=typeof e.attachEvent}();S.type+=" print",S.shivPrint=p,p(t)}(this,document),function(e,t,n){function r(e){return"[object Function]"==v.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=g.shift();y=1,e?e.t?m(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function s(e,n,r,o,i,s,l){function u(t){if(!p&&a(d.readyState)&&(b.r=p=1,!y&&c(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&m(function(){w.removeChild(d)},50);for(var r in N[n])N[n].hasOwnProperty(r)&&N[n][r].onload()}}var l=l||f.errorTimeout,d=t.createElement(e),p=0,v=0,b={t:r,s:n,e:i,a:s,x:l};1===N[n]&&(v=1,N[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,v)},g.splice(o,0,b),"img"!=e&&(v||2===N[n]?(w.insertBefore(d,E?null:h),m(u,l)):N[n].push(d))}function l(e,t,n,r,i){return y=0,t=t||"j",o(e)?s("c"==t?S:x,e,t,this.i++,n,r,i):(g.splice(this.i++,0,e),1==g.length&&c()),this}function u(){var e=f;return e.loader={load:l,i:0},e}var d,f,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],v={}.toString,g=[],y=0,b="MozAppearance"in p.style,E=b&&!!t.createRange().compareNode,w=E?p:h.parentNode,p=e.opera&&"[object Opera]"==v.call(e.opera),p=!!t.attachEvent&&!p,x=b?"object":p?"script":"img",S=p?"script":x,C=Array.isArray||function(e){return"[object Array]"==v.call(e)},T=[],N={},j={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,r,e=e.split("!"),o=T.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=j[r.shift()])&&(i=t(i,r));for(n=0;o>n;n++)i=T[n](i);return i}function a(e,o,i,a,c){var s=t(e),l=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,o,i,a,c):(N[s.url]?s.noexec=!0:N[s.url]=1,i.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(r(o)||r(l))&&i.load(function(){u(),o&&o(s.origUrl,c,a),l&&l(s.origUrl,c,a),N[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),a(e,d,t,0,l);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!n&&!--c&&(r(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[s])),a(e[s],d,t,s,l))}else!n&&p()}var c,s,l=!!e.test,u=e.load||e.both,d=e.callback||i,f=d,p=e.complete||i;n(l?e.yep:e.nope,!!u),u&&n(u)}var s,l,d=this.yepnope.loader;if(o(e))a(e,0,d,0);else if(C(e))for(s=0;s<e.length;s++)l=e[s],o(l)?a(l,0,d,0):C(l)?f(l):Object(l)===l&&c(l,d);else Object(e)===e&&c(e,d)},f.addPrefix=function(e,t){j[e]=t},f.addFilter=function(e){T.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,s,l){var u,d,p=t.createElement("script"),o=o||f.errorTimeout;p.src=e;for(d in r)p.setAttribute(d,r[d]);n=l?c:n||i,p.onreadystatechange=p.onload=function(){!u&&a(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m(function(){u||(u=1,n(1))},o),s?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,o,a,s){var l,o=t.createElement("link"),n=s?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in r)o.setAttribute(l,r[l]);a||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("pointerevents",function(){var e,t=document.createElement("x"),n=document.documentElement,r=window.getComputedStyle;return"pointerEvents"in t.style?(t.style.pointerEvents="auto",t.style.pointerEvents="x",n.appendChild(t),e=r&&"auto"===r(t,"").pointerEvents,n.removeChild(t),!!e):!1}),/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),n=document.getElementsByTagName("script")[0],r=null;t.type="text/css",t.id="matchmediajs-test",n.parentNode.insertBefore(t,n),r="getComputedStyle"in window&&window.getComputedStyle(t)||t.currentStyle,e={matchMedium:function(e){var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=n:t.textContent=n,"1px"===r.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
function(){if(!window.matchMedia("all").addListener){var e=window.matchMedia;window.matchMedia=function(t){var n,r=e(t),o=[],i=r.matches,a=function(){var n=e(t),a=n.matches&&!i,c=!n.matches&&i;if(a||c)for(var s=0,l=o.length;l>s;s++)o[s].call(r,n);i=n.matches};return r.addListener=function(e){o.push(e),n||(n=setInterval(a,1e3))},r.removeListener=function(e){for(var t=0,r=o.length;r>t;t++)o[t]===e&&o.splice(t,1);!o.length&&n&&clearInterval(n)},r}}}(),/*! Fixedfixed: a CSS position:fixed qualifier. (c)2012 @scottjehl, Filament Group, Inc. Dual license: MIT and/or GPLv2 */
function(e,t){function n(){var i="scrollTop"in e.document.body?e.document.body.scrollTop:a.scrollTop;i!==t&&i>0&&e.document.body&&(e.document.body.insertBefore(o,e.document.body.firstChild),o.getBoundingClientRect&&0===o.getBoundingClientRect().top||(a.className=a.className.replace(r,"")),e.document.body.removeChild(o),e.removeEventListener?e.removeEventListener("scroll",n,!1):e.detachEvent("onscroll",n))}var r="supports-fixed",o=e.document.createElement("div"),i=e.navigator.userAgent,a=e.document.documentElement;o.style.position="fixed",o.style.top=0,i.match(/Android 2\.[1256]/)&&i.indexOf("AppleWebKit")>-1&&i.match(/Opera Mobi\/([0-9]+)/)&&RegExp.$1<7458&&e.operamini&&"[object OperaMini]"==={}.toString.call(e.operamini)&&i.match(/Fennec\/([0-9]+)/)&&RegExp.$1<6||(a.className+=" "+r,e.addEventListener?e.addEventListener("scroll",n,!1):e.attachEvent("onscroll",n)),e.FixedFixed=n}(this),function(){var e=function(){for(var e,t=3,n=document.createElement("div"),r=n.getElementsByTagName("i");n.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->",r[0];);return t>4?t:e}(),t=document.documentElement;e&&(t.className+=" is-ie"),8>e&&(t.className+=" lt-ie8"),9>e&&(t.className+=" lt-ie9"),10>e&&(t.className+=" lt-ie10"),/MSIE 10/i.test(navigator.userAgent)&&(t.className+=" is-ie is-ie10"),/rv:11.0/i.test(navigator.userAgent)&&(t.className+=" is-ie is-ie11")}(),function(e){var t=[],n=!1;e.ready=function(e){"function"==typeof e&&(n?e():t.push(e))},e.triggerReady=function(){for(n=!0;t.length;)t.shift().call()}}(CUA);
