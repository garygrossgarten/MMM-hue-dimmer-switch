let e=0,t=!1;const n="undefined"!=typeof window?window:{},o=n.document||{head:{}},s={t:0,o:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,o)=>e.addEventListener(t,n,o),rel:(e,t,n,o)=>e.removeEventListener(t,n,o)},r=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),c=new WeakMap,i=e=>c.get(e),a=(e,t)=>c.set(t.s=e,t),l=e=>console.error(e),m=new Map,u=new Map,p=[],d=[],h=[],f=(e,n)=>o=>{e.push(o),t||(t=!0,n&&4&s.t?$(y):s.raf(y))},w=(e,t)=>{let n=0,o=0;for(;n<e.length&&(o=performance.now())<t;)try{e[n++](o)}catch(s){l(s)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},y=()=>{e++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){l(t)}e.length=0})(p);const n=2==(6&s.t)?performance.now()+10*Math.ceil(e*(1/22)):1/0;w(d,n),w(h,n),d.length>0&&(h.push(...d),d.length=0),(t=p.length+d.length+h.length>0)?s.raf(y):e=0},$=e=>Promise.resolve().then(e),_=f(d,!0),b=()=>n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_hue_motion_sensor("./p-73bc5e11.js").then(()=>{s.i=n.__stencil_cssshim}),g=()=>{s.i=n.__stencil_cssshim;const e=Array.from(o.querySelectorAll("script")).find(e=>new RegExp("/hue-motion-sensor(\\.esm)?\\.js($|\\?|#)").test(e.src)||"hue-motion-sensor"===e.getAttribute("data-stencil-namespace")),t=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,n.location.href)).href,j(t.resourcesUrl,e),window.customElements?Promise.resolve(t):__sc_import_hue_motion_sensor("./p-3b66a627.js").then(()=>t))},j=(e,t)=>{const s=(()=>`__sc_import_${"hue-motion-sensor".replace(/\s|-/g,"_")}`)();try{n[s]=new Function("w",`return import(w);//${Math.random()}`)}catch(r){const c=new Map;n[s]=r=>{const i=new URL(r,e).href;let a=c.get(i);if(!a){const e=o.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${i}'; window.${s}.m = m;`],{type:"application/javascript"})),a=new Promise(t=>{e.onload=()=>{t(n[s].m),e.remove()}}),c.set(i,a),o.head.appendChild(e)}return a}}},v=new WeakMap,M=e=>"sc-"+e,S=(e,t)=>{t&&!e.l&&t["s-p"].push(new Promise(t=>e.l=t))},U=(e,t,n,o)=>{if(t.t|=16,4&t.t)return void(t.t|=512);const s=t.s,r=()=>L(e,t,n,s,o);return S(t,t.u),C(void 0,()=>_(r))},L=(e,t,n,s,r)=>{const c=e["s-rc"];r&&((e,t)=>{((e,t)=>{let n=M(t.p),s=u.get(n);if(e=11===e.nodeType?e:o,s)if("string"==typeof s){let t,r=v.get(e=e.head||e);r||v.set(e,r=new Set),r.has(n)||((t=o.createElement("style")).innerHTML=s,e.insertBefore(t,e.querySelector("link")),r&&r.add(n))}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s])})(e.getRootNode(),t)})(e,n),t.t&=-17,t.t|=2,c&&(c.forEach(e=>e()),e["s-rc"]=void 0);{const o=e["s-p"],s=()=>P(e,t,n);0===o.length?s():(Promise.all(o).then(s),t.t|=4,o.length=0)}},P=(e,t,n)=>{const o=t.s,s=t.u;64&t.t||(t.t|=64,e.classList.add("hydrated"),k(o,"componentDidLoad"),t.h(e),s||R()),t.l&&(t.l(),t.l=void 0),512&t.t&&$(()=>U(e,t,n,!1)),t.t&=-517},R=()=>{o.documentElement.classList.add("hydrated"),s.t|=2},k=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(o){l(o)}},C=(e,t)=>e&&e.then?e.then(t):t(),O=(e,t,n)=>{if(t.$){const o=Object.entries(t.$),r=e.prototype;if(o.forEach(([e,[o]])=>{(31&o||2&n&&32&o)&&Object.defineProperty(r,e,{get(){return((e,t)=>i(e)._.get(t))(this,e)},set(n){((e,t,n,o)=>{const s=i(this),r=s.g,c=s._.get(t),a=s.t,l=s.s;(n=((e,t)=>null==e||(e=>"object"==(e=typeof e)||"function"===e)(e)?e:2&t?parseFloat(e):1&t?String(e):e)(n,o.$[t][0]))===c||8&a&&void 0!==c||(s._.set(t,n),l&&2==(18&a)&&U(r,s,o,!1))})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const t=new Map;r.attributeChangedCallback=function(e,n,o){s.jmp(()=>{const n=t.get(e);this[n]=(null!==o||"boolean"!=typeof this[n])&&o})},e.observedAttributes=o.filter(([e,t])=>15&t[0]).map(([e,n])=>{const o=n[1]||e;return t.set(o,e),o})}}return e},E=(e,t={})=>{const a=[],p=t.exclude||[],d=o.head,h=n.customElements,f=d.querySelector("meta[charset]"),w=o.createElement("style"),y=[];let _,b=!0;Object.assign(s,t),s.o=new URL(t.resourcesUrl||"./",o.baseURI).href,t.syncQueue&&(s.t|=4),e.forEach(e=>e[1].forEach(t=>{const n={t:t[0],p:t[1],$:t[2],j:t[3]};n.$=t[2];const o=n.p,d=class extends HTMLElement{constructor(e){super(e),(e=>{const t={t:0,g:e,_:new Map};t.v=new Promise(e=>t.h=e),e["s-p"]=[],e["s-rc"]=[],c.set(e,t)})(e=this)}connectedCallback(){_&&(clearTimeout(_),_=null),b?y.push(this):s.jmp(()=>((e,t)=>{if(0==(1&s.t)){const n=()=>{},o=i(e);if(!(1&o.t)){o.t|=1;{let t=e;for(;t=t.parentNode||t.host;)if(t["s-p"]){S(o,o.u=t);break}}t.$&&Object.entries(t.$).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),$(()=>(async(e,t,n,o,s)=>{if(0==(32&t.t)){t.t|=32;{if((s=(e=>{const t=e.p.replace(/-/g,"_"),n=e.M,o=m.get(n);return o?o[t]:__sc_import_hue_motion_sensor(`./${n}.entry.js`).then(e=>(m.set(n,e),e[t]),l)})(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(O(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(a){l(a)}t.t&=-9,e()}const e=M(n.p);if(!u.has(e)&&s.style){const t=()=>{};((e,t,n)=>{let o=u.get(e);r&&n?(o=o||new CSSStyleSheet).replace(t):o=t,u.set(e,o)})(e,s.style,!!(1&n.t)),t()}}const c=t.u,i=()=>U(e,t,n,!0);c&&c["s-rc"]?c["s-rc"].push(i):i()})(e,o,t))}n()}})(this,n))}disconnectedCallback(){s.jmp(()=>(()=>{0==(1&s.t)&&k(i(this).s,"componentDidUnload")})())}forceUpdate(){((e,t)=>{{const n=i(e);n.g.isConnected&&2==(18&n.t)&&U(e,n,t,!1)}})(this,n)}componentOnReady(){return i(this).v}};n.M=e[0],p.includes(o)||h.get(o)||(a.push(o),h.define(o,O(d,n,1)))})),w.innerHTML=a+"{visibility:hidden}.hydrated{visibility:inherit}",w.setAttribute("data-styles",""),d.insertBefore(w,f?f.nextSibling:d.firstChild),b=!1,y.length>0?y.forEach(e=>e.connectedCallback()):s.jmp(()=>_=setTimeout(R,30,"timeout"))},x=(e,t,n)=>{const o=F(e);return{emit:e=>{const s=new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e});return o.dispatchEvent(s),s}}},F=e=>i(e).g;export{b as a,E as b,x as c,g as p,a as r};