!function(t){var e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){t.exports=function(t){var e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});class n{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){let n=this._events[t];n&&((n=n.filter(t=>t.fn!==e)).length?this._events[t]=n:delete this._events[t])}run(t,...e){let n=this._events[t];return console.assert(!!n,"No subscriber for event: "+t),n&&((n=n.filter(n=>{const{fn:s,options:o}=n;return o.delay?this.delay(t,s,e,o):s.apply(this,e),!n.options.once})).length?this._events[t]=n:delete this._events[t]),n?n.length:0}once(t,e,n={}){this.on(t,e,Object.assign({},n,{once:!0}))}delay(t,e,n,s){s._t&&clearTimeout(s._t),s._t=setTimeout(()=>{clearTimeout(s._t),e.apply(this,n)},s.delay)}}let s;e.App=n;const o=t||window;o.app&&o.app.start?s=o.app:(s=new n,o.app=s),e.default=s}).call(this,n(4))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(0);e.app=s.default;const o=n(6),r=n(8);e.Component=r.Component;const a=n(2);e.on=a.on,e.update=a.update,e.event=a.update;const i=n(9),l=n(3);var c=n(3);e.ROUTER_EVENT=c.ROUTER_EVENT,e.ROUTER_404_EVENT=c.ROUTER_404_EVENT,s.default.createElement=o.createElement,s.default.render=o.render,s.default.Fragment=o.Fragment,s.default.webComponent=i.default,s.default.start=((t,e,n,s,o)=>{const a=Object.assign(o||{},{render:!0,global_event:!0}),i=new r.Component(e,n,s);return o&&o.rendered&&(i.rendered=o.rendered),i.mount(t,a),i}),s.default.on(l.ROUTER_EVENT,t=>{}),s.default.on("#",t=>{}),s.default.route=l.default,s.default.on("route",t=>s.default.route&&s.default.route(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{s.default.route===l.default&&(window.onpopstate=(()=>l.default(location.hash)),l.default(location.hash))}),e.default=s.default,"object"==typeof window&&(window.Component=r.Component),s.default.on("debug",t=>0)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Reflect={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}},e.update=function(t,n={}){return(s,o,r)=>(t=t||o,e.Reflect.defineMetadata(`apprun-update:${t}`,{name:t,key:o,options:n},s),r)},e.on=function(t,n={}){return function(s,o){t=t||o,e.Reflect.defineMetadata(`apprun-update:${t}`,{name:t,key:o,options:n},s)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(0);e.ROUTER_EVENT="//",e.ROUTER_404_EVENT="///",e.default=function(t){if(t||(t="#"),t.startsWith("#")){const[n,...o]=t.split("/");s.default.run(n,...o)||s.default.run(e.ROUTER_404_EVENT,n,...o),s.default.run(e.ROUTER_EVENT,n,...o)}else if(t.startsWith("/")){const[n,o,...r]=t.split("/");s.default.run("/"+o,...r)||s.default.run(e.ROUTER_404_EVENT,"/"+o,...r),s.default.run(e.ROUTER_EVENT,"/"+o,...r)}else s.default.run(t)||s.default.run(e.ROUTER_404_EVENT,t),s.default.run(e.ROUTER_EVENT,t)}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(7),o="_props";function r(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}e.createElement=function(t,e,...n){const s=r(n);return"string"==typeof t?{tag:t,props:e,children:s}:void 0===t&&n?s:Object.getPrototypeOf(t).__isAppRunComponent?{tag:t,props:e,children:s}:t(e,s)};const a={};function i(t,e,n={}){null!=e&&(e=s.default(e,n),t&&(Array.isArray(e)?c(t,e):c(t,[e])))}function l(t,e){console.assert(!!t),function(t,e){const n=t.nodeName,s=`${e.tag||""}`;return n.toUpperCase()===s.toUpperCase()}(t,e)?(c(t,e.children),h(t,e.props)):t.parentNode.replaceChild(d(e),t)}function c(t,e){const n=Math.min(t.childNodes.length,e.length);for(let s=0;s<n;s++){const n=e[s],o=t.childNodes[s];if("string"==typeof n)o.textContent!==n&&(3===o.nodeType?o.textContent=n:t.replaceChild(u(n),o));else{const e=n.props&&n.props.key;if(e)if(o.key===e)l(t.childNodes[s],n);else{const r=a[e];r?(t.insertBefore(r,o),t.appendChild(o),l(t.childNodes[s],n)):t.insertBefore(d(n),o)}else l(t.childNodes[s],n)}}let s=t.childNodes.length;for(;s>n;)t.removeChild(t.lastChild),s--;if(e.length>n){const s=document.createDocumentFragment();for(let t=n;t<e.length;t++)s.appendChild(d(e[t]));t.appendChild(s)}}function u(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function d(t,e=!1){if(console.assert(null!=t),"string"==typeof t)return u(t);if(!t.tag||"function"==typeof t.tag)return u(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return h(n,t.props),t.children&&t.children.forEach(t=>n.appendChild(d(t,e))),n}function h(t,e){console.assert(!!t),e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach(t=>n[t]=null),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(t[o]||{},e||{}),t[o]=e;for(const n in e){const s=e[n];if("style"===n){t.style.cssText&&(t.style.cssText="");for(const e in s)t.style[e]!==s[e]&&(t.style[e]=s[e])}else if(n.startsWith("data-")){const e=n.substring(5).replace(/-(\w)/g,t=>t[1].toUpperCase());t.dataset[e]!==s&&(s||""===s?t.dataset[e]=s:delete t.dataset[e])}else"class"===n||n.startsWith("role")||n.indexOf("-")>0||t instanceof SVGElement?t.getAttribute(n)!==s&&(s?t.setAttribute(n,s):t.removeAttribute(n)):t[n]!==s&&(t[n]=s);"key"===n&&s&&(a[s]=t)}}e.updateElement=i,e.render=i,e.Fragment=function(t,...e){return r(e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(5);e.createElement=s.createElement,e.Fragment=s.Fragment,e.render=function(t,e,n){s.updateElement(t,e,n)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(0);e.default=function t(e,n,o=0){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(e=>t(e,n,o++));let r=e;return e&&"function"==typeof e.tag&&Object.getPrototypeOf(e.tag).__isAppRunComponent&&(r=function(t,e,n){const{tag:o,props:r,children:a}=t;let i=r&&r.id,l=`_${o.name}_${n}`;i?l=`_${o.name}_${i}`:i=`_${o.name}_${n}`,e.__componentCache||(e.__componentCache={});let c=e.__componentCache[l];c||(c=e.__componentCache[l]=new o(Object.assign({},r,{children:a})).mount(i)),c.mounted&&c.mounted(r,a);const u=c.state;let d="";return u instanceof Promise||!c.view||(d=c.view(u),c.rendered&&setTimeout(()=>c.rendered(u))),s.default.createElement("div",{id:i},d)}(e,n,o++)),r&&r.children&&(r.children=r.children.map(e=>t(e,n,o++))),r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(0),o=n(2),r={};s.default.on("get-components",t=>t.components=r);class a{constructor(t,e,n,o){this.state=t,this.view=e,this.update=n,this.options=o,this._app=new s.App,this._actions=[],this._history=[],this._history_idx=-1,this.start=((t=null,e={render:!0})=>this.mount(t,Object.assign({},e,{render:!0})))}renderState(t){if(!this.view)return;const e=this.view(t);if(s.default.run("debug",{component:this,state:t,vdom:e||"[vdom is null - no render]"}),"object"!=typeof document)return;const n="string"==typeof this.element?document.getElementById(this.element):this.element;if(n){const t="_c";if(this.unload){if(n._component!==this){this.tracking_id=(new Date).valueOf().toString(),n.setAttribute(t,this.tracking_id);const e=new MutationObserver(t=>{const{removedNodes:s,oldValue:o}=t[0];(o===this.tracking_id||Array.from(s).indexOf(n)>=0)&&(this.unload(),e.disconnect())});n.parentNode&&e.observe(n.parentNode,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]})}}else n.removeAttribute(t);n._component=this}s.default.render(n,e,this),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign({},this.options,e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history){const t=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},n=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1};this.on(e.history.prev||"history-prev",t),this.on(e.history.next||"history-next",n)}return this.add_actions(),void 0===this.state&&(this.state=this.model||{}),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),r[t]=r[t]||[],r[t].push(this),this}is_global_event(t){return t&&(t.startsWith("#")||t.startsWith("/"))}add_action(t,e,n={}){e&&"function"==typeof e&&this.on(t,(...o)=>{const r=e(this.state,...o);s.default.run("debug",{component:this,event:t,e:o,state:this.state,newState:r,options:n}),this.setState(r,n)},n)}add_actions(){const t=this.update||{};o.Reflect.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=o.Reflect.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}});const e={};Object.keys(t).forEach(n=>{const s=t[n];("function"==typeof s||Array.isArray(s))&&n.split(",").forEach(t=>e[t.trim()]=s)}),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){return this.global_event||this.is_global_event(t)?s.default.run(t,...e):this._app.run(t,...e)}on(t,e,n){return this._actions.push({name:t,fn:e}),this.global_event||this.is_global_event(t)?s.default.on(t,e,n):this._app.on(t,e,n)}unmount(){this._actions.forEach(t=>{const{name:e,fn:n}=t;this.global_event||this.is_global_event(e)?s.default.off(e,n):this._app.off(e,n)})}}a.__isAppRunComponent=!0,e.Component=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.customElement=((t,e={})=>(class extends HTMLElement{constructor(){super();const n=Object.assign({render:!0,shadow:!1},e);this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const s={};Array.from(this.attributes).forEach(t=>s[t.name]=t.value),this.children&&(s.children=Array.from(this.children),s.children.forEach(t=>t.parentElement.removeChild(t))),this._component=new t(s).mount(this._shadowRoot,n),this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component)}get state(){return this._component.state}})),e.default=((t,n,s)=>{customElements&&customElements.define(t,e.customElement(n,s))})}])},function(t,e,n){"use strict";n.r(e);var s=n(0),o=n.n(s);class r{}class a{constructor(t){window._leak=new r,t._leak=new r,this._leak=new r,t.addEventListener("input",e=>{console.log(t.value)})}destroy(){this._leak=null,window._leak=null,console.log("TestClass.destroy")}}o.a.on("//",t=>{const e=document.querySelectorAll(".navbar-nav li");for(let t=0;t<e.length;++t)e[t].classList.remove("active");const n=document.querySelector(`[href='${t}']`);n&&n.parentElement.classList.add("active")});o.a.render(document.getElementById("main"),o.a.createElement(()=>o.a.createElement("div",{class:"container"},o.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement("a",{class:"navbar-brand",href:"#"},"Project Name"),o.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{class:"navbar-toggler-icon"})),o.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{class:"navbar-nav mr-auto"},o.a.createElement("li",{class:"nav-item active"},o.a.createElement("a",{class:"nav-link",href:"#Home"},"Home",o.a.createElement("span",{class:"sr-only"},"(current)"))),o.a.createElement("li",{class:"nav-item"},o.a.createElement("a",{class:"nav-link",href:"#About"},"About")),o.a.createElement("li",{class:"nav-item"},o.a.createElement("a",{class:"nav-link",href:"#Contact"},"Contact"))))),o.a.createElement("div",{class:"container",id:"my-app"})),null));(new class extends s.Component{constructor(){super(...arguments),this.state="Home",this.view=(t=>o.a.createElement("div",null,o.a.createElement("h1",null,t),o.a.createElement("input",null))),this.update={"#,#Home":t=>t},this.rendered=(()=>{const t=document.querySelector("input");this.test=new a(t)}),this.unload=(()=>{this.test.destroy(),this.test=null})}}).mount("my-app"),(new class extends s.Component{constructor(){super(...arguments),this.state="About",this.view=(t=>o.a.createElement("div",null,o.a.createElement("h1",null,t))),this.update={"#About":t=>t}}}).mount("my-app"),(new class extends s.Component{constructor(){super(...arguments),this.state="Contact",this.view=(t=>o.a.createElement("div",null,o.a.createElement("h1",null,t))),this.update={"#Contact":t=>t}}}).mount("my-app")}]);
//# sourceMappingURL=app.js.map