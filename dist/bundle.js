!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VMTWidget=t():e.VMTWidget=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.constants={CONTAINER_ID:"venue-mapping-tool",API_POINT:"http://localhost:3000",IFRAME_NAME:"__VMT_TOOL__",messages:{missedParams:"VENUE MAPPING TOOL: missed one of the required arguments!",noContainer:function(e){return"VENUE MAPPING TOOL: There is no element with "+e+" id!"}},styles:{DEFAULT_IFRAME_HEIGHT:500,iframe:"width: 100%; height: 100%;",fullScreen:"position: fixed; padding: 0; margin: 0; width: 100vw;\n            height: 100vh; outline: none; border: none; top: 0;left: 0",spinner:"\n                .vmt-loading {\n        position: absolute;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        top: 0;\n        z-index: 99999;\n        background: rgba(255,255,255,0);\n    }\n    .vmt-spinner {\n        height:auto;\n        width:auto;\n        position: absolute;\n        top:50%;\n        left:50%;\n        /*margin: -30px 0 0 -30px;*/\n    }\n    .bounceball {\n        height: 105px;\n        width: 105px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -75px 0 0 -60px;\n        -webkit-animation: rotation 1s infinite linear;\n        -moz-animation: rotation 1s infinite linear;\n        -o-animation: rotation 1s infinite linear;\n        animation: rotation 1s infinite linear;\n        border:6px solid rgba(115,194,69,.2);\n        border-radius:100%;\n    }\n\n    .bounceball:before {\n        content:\"\";\n        display:inline-block;\n        position:absolute;\n        left:-6px;\n        top:-6px;\n        height:100%;\n        width:100%;\n        border-top:6px solid rgba(115,194,69,.8);\n        border-left:6px solid transparent;\n        border-bottom:6px solid transparent;\n        border-right:6px solid transparent;\n        border-radius:100%;\n    }\n\n    @-webkit-keyframes rotation {\n        from {-webkit-transform: rotate(0deg);}\n        to {-webkit-transform: rotate(359deg);}\n    }\n    @-moz-keyframes rotation {\n        from {-moz-transform: rotate(0deg);}\n        to {-moz-transform: rotate(359deg);}\n    }\n    @-o-keyframes rotation {\n        from {-o-transform: rotate(0deg);}\n        to {-o-transform: rotate(359deg);}\n    }\n    @keyframes rotation {\n        from {transform: rotate(0deg);}\n        to {transform: rotate(359deg);}\n    }\n    .picture {\n        display: inline-block;\n        vertical-align: middle;\n        background-size: contain;\n        width: 100px;\n        height: 75px;\n        background-repeat:no-repeat;\n        background-image:  url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMzc1LjAwMDAwMHB0IiBoZWlnaHQ9IjE1Ny4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDM3NS4wMDAwMDAgMTU3LjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgoKPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMTU3LjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iIzczQzI0NSIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTMyMDIgMTM2OSBjLTU3IC0yOSAtOTIgLTgyIC05OSAtMTUxIC03IC03MiA5IC0xMTggNTcgLTE2MiAxMDkgLTk4CjI3MiAtNTUgMzE5IDgzIDYgMTkgMTEgNDMgMTEgNTUgMCA3MSAtNTUgMTU3IC0xMTcgMTgyIC00OCAyMSAtMTIxIDE3IC0xNzEKLTd6IG0xNTkgLTUyIGM0MCAtMjcgNjkgLTc5IDY5IC0xMjUgMCAtMzQgLTI2IC0xMDIgLTM5IC0xMDIgLTMgMCAtMTggMjAgLTMyCjQzIGwtMjYgNDMgMjQgMTcgYzI4IDIyIDMyIDc3IDYgOTggLTkgOCAtNDYgMTYgLTgyIDIwIC01OSA1IC02MyA2IC00MSAxNiA0MAoxOCA4NCAxNSAxMjEgLTEweiBtLTE1MSAtMTE5IGwtMSAtMTEzIC0xOSAyMyBjLTI3IDMyIC00MCA4NiAtMzAgMTIxIDggMjcgMzgKODEgNDYgODEgMiAwIDQgLTUxIDQgLTExMnogbTExOCA0NSBjMyAtMjEgLTEgLTIzIC0zNyAtMjMgLTM3IDAgLTQxIDIgLTQxIDI2CjAgMjMgMyAyNSAzOCAyMiAzMCAtMiAzOCAtNyA0MCAtMjV6IG0tMjUgLTExMiBjMTcgLTMyIDM1IC01MSA1MCAtNTQgMTkgLTMKMTcgLTYgLTE2IC0yMSAtMjggLTEyIC00MiAtMTQgLTUxIC03IC03IDYgLTE2IDggLTE5IDQgLTQgLTMgLTEzIC0xIC0yMCA1IC04CjcgLTE3IDkgLTIwIDUgLTQgLTMgLTcgLTEgLTcgNSAwIDcgNyAxMiAxNSAxMiAxMSAwIDE1IDEyIDE1IDUwIDAgNjUgMTcgNjUKNTMgMXoiLz4KPHBhdGggZD0iTTUwNSAxMzA4IGMtOCAtMjkgLTM2IC0xMjcgLTYxIC0yMTggLTI1IC05MSAtOTIgLTMyOCAtMTQ4IC01MjgKbC0xMDMgLTM2MiAxMDIgMCAxMDMgMCAzNCAxMzggMzQgMTM3IDE2NSAzIDE2NSAyIDM0IC0xNDAgMzQgLTE0MSAxMDEgMyBjNTkKMiA5OSA3IDk5IDEzIC0xIDYgLTY5IDI2NSAtMTUwIDU3NyBsLTE0OSA1NjggLTEyMiAwIC0xMjIgMCAtMTYgLTUyeiBtMTk1Ci0zOTQgYzMzIC0xNDIgNjAgLTI2NSA2MCAtMjcxIDAgLTEwIC0zMiAtMTMgLTEyNSAtMTMgLTkzIDAgLTEyNSAzIC0xMjUgMTMKLTEgMTUgMTI0IDUzNiAxMjcgNTMzIDIgLTEgMzAgLTExOSA2MyAtMjYyeiIvPgo8cGF0aCBkPSJNMTEzMCA3ODAgbDAgLTU4MCA5MCAwIDkwIDAgMCA1ODAgMCA1ODAgLTkwIDAgLTkwIDAgMCAtNTgweiIvPgo8cGF0aCBkPSJNMTQ5MCAxMjA1IGwwIC0xMjUgLTYwIDAgLTYwIDAgMCAtNzAgMCAtNzAgNTkgMCA2MCAwIDMgLTMyMiBjMwotMjc3IDUgLTMyNyAxOSAtMzUzIDMzIC01OSA1NCAtNzAgMTQ1IC03NCA0NyAtMSAxMDAgMCAxMTkgMyBsMzUgNyAwIDY5IDAgNzAKLTU0IDAgYy05MCAwIC04NyAtMTIgLTg0IDMxMyBsMyAyODIgNjggMyA2NyAzIDAgNjkgMCA3MCAtNzAgMCAtNzAgMCAwIDEyNSAwCjEyNSAtOTAgMCAtOTAgMCAwIC0xMjV6Ii8+CjxwYXRoIGQ9Ik0yMTk1IDEwODYgYy0zMSAtMTMgLTEwNSAtODggLTEwNSAtMTA2IDAgLTYgLTQgLTEwIC0xMCAtMTAgLTUgMAotMTAgMjUgLTEwIDU1IGwwIDU1IC04NSAwIC04NSAwIDAgLTQ0MCAwIC00NDAgODUgMCA4NSAwIDAgMjc4IGMwIDE2OSA0IDI5MgoxMSAzMTYgNiAyMiAyOSA1OCA1MSA4MCAzOSA0MSA0MCA0MSAxMTQgNDEgbDc0IDAgMCA5MyAwIDkyIC00NyAwIGMtMjcgLTEKLTYxIC03IC03OCAtMTR6Ii8+CjxwYXRoIGQ9Ik0yNDAzIDcxOCBjNCAtMzc4IDcgLTQwNCA1MCAtNDY5IDY2IC0xMDAgMjY2IC05NyAzNTYgNyBsMzAgMzMgMwotNDIgMyAtNDIgODMgLTMgODIgLTMgMCA0NDEgMCA0NDEgLTg3IC0zIC04OCAtMyAtNSAtMzI1IGMtNCAtMjg2IC03IC0zMjkKLTIzIC0zNTcgLTMxIC01OCAtOTkgLTg0IC0xNjIgLTYzIC02NCAyMSAtNjUgMjkgLTY1IDQxMCBsMCAzNDAgLTkxIDAgLTkxIDAKNSAtMzYyeiIvPgo8L2c+Cjwvc3ZnPgo=');\n    }"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=M(n(2)),r=n(0);function M(e){return e&&e.__esModule?e:{default:e}}var g=new(M(n(3)).default),a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,null,[{key:"launch",value:function(e){var t=this,n=new i.default({containerId:e.containerId||r.constants.CONTAINER_ID,memberId:e.memberId,eventId:e&&e.eventId,venueId:e.venueId,apiPoint:e.apiPoint||r.constants.API_POINT,mode:e&&e.mode,styles:e.styles,token:e.token});g.launch(),g.method("vmtReady",function(){n.hideSpinner()}),g.method("closeWidget",function(){g.removeMethod("toggleFullScreen"),g.removeMethod("closeWidget"),n.close(g.destroyServer),t.onCloseFn()}),g.method("toggleFullScreen",function(){n.toggleFullScreen()})}},{key:"method",value:function(e,t){g.method(e,t)}},{key:"onClose",value:function(e){this.onCloseFn=e}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0);var M=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=document.getElementById(t.containerId);this.isValidParams(t,n)&&this.initIframe(o({root:n},t))}return i(e,[{key:"close",value:function(e){var t=this.root.getElementsByTagName("iframe")[0];this.root.removeChild(t),e()}},{key:"toggleFullScreen",value:function(){var e=document.querySelector('iframe[name="'+r.constants.IFRAME_NAME+'"]');this.initialStyles?(e.style.cssText=this.initialStyles,this.initialStyles=null):""===this.initialStyles?(e.removeAttribute("style"),this.initialStyles=null):(this.initialStyles=e.style.cssText,e.style.cssText=r.constants.styles.fullScreen)}},{key:"isValidParams",value:function(e,t){if(!e.memberId||!e.apiPoint||null===t){var n=null===t?r.constants.messages.noContainer(e.containerId):r.constants.messages.missedParams;return console.error(n),!1}return!0}},{key:"initIframe",value:function(e){var t=e.root;this.root=t,this.options=e;var n=document.createElement("iframe");n.name=r.constants.IFRAME_NAME,n.style.cssText=e.styles||r.constants.styles.iframe,n.frameBorder=0,n.src=this.getIframeUrl(e),this.showSpinner(),t.appendChild(n),n.focus()}},{key:"getIframeUrl",value:function(e){var t=e.apiPoint,n=e.memberId,o=e.eventId,i=e.token,r=e.venueId,M=e.mode;return t+"?member="+n+(o?"&event="+o:"")+"&token="+i+"&venue="+r+(M?"&mode="+M:"")}},{key:"showSpinner",value:function(){var e=document.createElement("style");e.type="text/css",e.setAttribute("id","vmt-widget-spinner-styles"),e.innerHTML=r.constants.styles.spinner,document.getElementsByTagName("head")[0].appendChild(e);var t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div");t.appendChild(n),t.appendChild(o),this.root.appendChild(t),this.root.appendChild(i),i.classList.add("vmt-loading"),t.classList.add("vmt-spinner"),n.classList.add("bounceball"),o.classList.add("picture")}},{key:"hideSpinner",value:function(){var e=document.getElementById("vmt-widget-spinner-styles");document.getElementsByTagName("head")[0].removeChild(e);var t=document.getElementById(this.options.containerId),n=t.getElementsByClassName("vmt-spinner")[0],o=t.getElementsByClassName("vmt-loading")[0];this.root.removeChild(o),this.root.removeChild(n)}}]),e}();t.default=M},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){this.method=function(e,t){o[e]=t},this.removeMethod=function(e){delete o[e]},this.launch=function(){window.addEventListener("message",i)},this.destroyServer=function(){window.removeEventListener("message",i)}};var o={};function i(e){var t=void 0;if(e.originalEvent&&(e=e.originalEvent),e.data&&"string"==typeof e.data&&""!==e.data){try{t=JSON.parse(e.data)}catch(e){}if(t&&"2.0"===t.jsonrpc&&!t.error&&!t.result){if("function"!=typeof o[t.method])return i(e.source,-32601,"Method not found: "+t.method,t.id);if(t.method&&!Array.isArray(t.params))return i(e.source,-32700,"Invalid request",t.id);try{var n=o[t.method].apply(this,t.params);Promise.resolve(n).then(function(n){if(!e.source)return!1;t.id&&e.source.postMessage(JSON.stringify({jsonrpc:"2.0",result:n,id:t.id}),"*")})}catch(n){throw i(e.source,-32e3,n.message,t.id),n}}}function i(e,t,n,o){var i=JSON.stringify({jsonrpc:"2.0",code:t,error:n,id:o||null});e&&e.postMessage(i,"*")}}}])});