import{s as O,n as B,c as V,d as _e,i as pe,t as ve,e as me,u as we,g as ke,f as be,o as ye,b as oe}from"../chunks/scheduler.6ebf42d0.js";import{S as U,i as q,x as Y,y as J,j as b,f as h,k as n,a as H,z as f,g as y,r as P,s as M,m as K,h as E,u as W,c as I,n as X,A as z,v as G,d as S,t as D,w as Q,B as Ee,C as x,e as le,p as Te,b as Le,D as Ce,E as Ae}from"../chunks/index.68cd4d08.js";import{n as fe,p as he,g as $e}from"../chunks/stores.2d12008d.js";import{j as ge,w as ze}from"../chunks/singletons.26c10a64.js";const de=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,Me=!0,Ze=Object.freeze(Object.defineProperty({__proto__:null,prerender:Me},Symbol.toStringTag,{value:"Module"}));function ue(r,e){const t=e.querySelectorAll("h1 > a, h2 > a, h3 > a"),{hash:a}=new URL(r);t.forEach(s=>{a.length&&a===new URL(s.href).hash?s.classList.add("is-target"):s.classList.remove("is-target")})}function Ie(r){let e,t,a;return{c(){e=Y("svg"),t=Y("path"),a=Y("polyline"),this.h()},l(s){e=J(s,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var i=b(e);t=J(i,"path",{d:!0}),b(t).forEach(h),a=J(i,"polyline",{points:!0}),b(a).forEach(h),i.forEach(h),this.h()},h(){n(t,"d","M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"),n(a,"points","9 22 9 12 15 12 15 22"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width",r[0]),n(e,"height",r[1]),n(e,"viewBox","0 0 24 24"),n(e,"fill","none"),n(e,"stroke",r[2]),n(e,"stroke-width","2"),n(e,"stroke-linecap","round"),n(e,"stroke-linejoin","round"),n(e,"class","feather feather-home")},m(s,i){H(s,e,i),f(e,t),f(e,a)},p(s,[i]){i&1&&n(e,"width",s[0]),i&2&&n(e,"height",s[1]),i&4&&n(e,"stroke",s[2])},i:B,o:B,d(s){s&&h(e)}}}function Se(r,e,t){let{size:a="1em"}=e,{width:s=a}=e,{height:i=a}=e,{color:o="currentColor"}=e;return r.$$set=l=>{"size"in l&&t(3,a=l.size),"width"in l&&t(0,s=l.width),"height"in l&&t(1,i=l.height),"color"in l&&t(2,o=l.color)},[s,i,o,a]}class je extends U{constructor(e){super(),q(this,e,Se,Ie,O,{size:3,width:0,height:1,color:2})}}function De(r){let e,t,a,s,i,o,l,d,p,u,v,_,C,A,w,j,m,c,g,L,R,F,$;return a=new je({props:{size:"1.5em",color:"var(--color-primary-400)"}}),{c(){e=y("nav"),t=y("a"),P(a.$$.fragment),i=M(),o=y("div"),l=M(),d=y("ul"),p=y("li"),u=y("a"),v=K("Work"),C=M(),A=y("li"),w=y("a"),j=K("Blog"),c=M(),g=y("li"),L=y("a"),R=K("About"),this.h()},l(k){e=E(k,"NAV",{role:!0,class:!0});var T=b(e);t=E(T,"A",{href:!0,title:!0,class:!0,"aria-current":!0,"sveltekit:prefetch":!0});var ee=b(t);W(a.$$.fragment,ee),ee.forEach(h),i=I(T),o=E(T,"DIV",{class:!0,"aria-hidden":!0}),b(o).forEach(h),l=I(T),d=E(T,"UL",{class:!0});var N=b(d);p=E(N,"LI",{class:!0});var te=b(p);u=E(te,"A",{href:!0,class:!0,"aria-current":!0,"sveltekit:prefetch":!0});var ae=b(u);v=X(ae,"Work"),ae.forEach(h),te.forEach(h),C=I(N),A=E(N,"LI",{class:!0});var se=b(A);w=E(se,"A",{href:!0,class:!0,"aria-current":!0,"sveltekit:prefetch":!0,target:!0,rel:!0});var ne=b(w);j=X(ne,"Blog"),ne.forEach(h),se.forEach(h),c=I(N),g=E(N,"LI",{class:!0});var re=b(g);L=E(re,"A",{href:!0,class:!0,"aria-current":!0,"sveltekit:prefetch":!0});var ie=b(L);R=X(ie,"About"),ie.forEach(h),re.forEach(h),N.forEach(h),T.forEach(h),this.h()},h(){n(t,"href","/"),n(t,"title","home"),n(t,"class","logo svelte-5sxkp8"),n(t,"aria-current",s=r[0].isCurrent?"page":void 0),n(t,"sveltekit:prefetch",""),n(o,"class","divider svelte-5sxkp8"),n(o,"aria-hidden","true"),n(u,"href","/work"),n(u,"class","nav-link svelte-5sxkp8"),n(u,"aria-current",_=r[1].isCurrent?"page":void 0),n(u,"sveltekit:prefetch",""),z(u,"navigating-to",r[1].navigatingTo),n(p,"class","svelte-5sxkp8"),n(w,"href","https://medium.com/@chromicle"),n(w,"class","nav-link svelte-5sxkp8"),n(w,"aria-current",m=r[2].isCurrent?"page":void 0),n(w,"sveltekit:prefetch",""),n(w,"target","_blank"),n(w,"rel","noopener noreferrer"),z(w,"navigating-to",r[2].navigatingTo),n(A,"class","svelte-5sxkp8"),n(L,"href","/about"),n(L,"class","nav-link svelte-5sxkp8"),n(L,"aria-current",F=r[3].isCurrent?"page":void 0),n(L,"sveltekit:prefetch",""),z(L,"navigating-to",r[3].navigatingTo),n(g,"class","svelte-5sxkp8"),n(d,"class","svelte-5sxkp8"),n(e,"role","navigation"),n(e,"class","svelte-5sxkp8")},m(k,T){H(k,e,T),f(e,t),G(a,t,null),f(e,i),f(e,o),f(e,l),f(e,d),f(d,p),f(p,u),f(u,v),f(d,C),f(d,A),f(A,w),f(w,j),f(d,c),f(d,g),f(g,L),f(L,R),$=!0},p(k,[T]){(!$||T&1&&s!==(s=k[0].isCurrent?"page":void 0))&&n(t,"aria-current",s),(!$||T&2&&_!==(_=k[1].isCurrent?"page":void 0))&&n(u,"aria-current",_),(!$||T&2)&&z(u,"navigating-to",k[1].navigatingTo),(!$||T&4&&m!==(m=k[2].isCurrent?"page":void 0))&&n(w,"aria-current",m),(!$||T&4)&&z(w,"navigating-to",k[2].navigatingTo),(!$||T&8&&F!==(F=k[3].isCurrent?"page":void 0))&&n(L,"aria-current",F),(!$||T&8)&&z(L,"navigating-to",k[3].navigatingTo)},i(k){$||(S(a.$$.fragment,k),$=!0)},o(k){D(a.$$.fragment,k),$=!1},d(k){k&&h(e),Q(a)}}}function Re(r,e,t){let a,s,i,o;const l=_=>ge([fe,he],([C,A])=>({isCurrent:!C&&_.test(A.url.pathname),navigatingTo:C&&_.test(C.to.pathname)})),d=l(/^\/$/);V(r,d,_=>t(0,a=_));const p=l(/^\/work/);V(r,p,_=>t(1,s=_));const u=l(/^\/blog/);V(r,u,_=>t(2,i=_));const v=l(/^\/about/);return V(r,v,_=>t(3,o=_)),[a,s,i,o,d,p,u,v]}class Ne extends U{constructor(e){super(),q(this,e,Re,De,O,{})}}const{document:Z}=de;function Ve(r){let e,t="",a,s,i=`window.dataLayer = window.dataLayer || []

    function gtag() {
      dataLayer.push(arguments)
    }

    gtag('js', new Date())
    gtag('config', 'MEASUREMENT_ID')`;return{c(){e=y("script"),e.innerHTML=t,s=y("script"),s.textContent=i,this.h()},l(o){const l=Ee("svelte-tbizde",Z.head);e=E(l,"SCRIPT",{src:!0,"data-svelte-h":!0}),x(e)!=="svelte-god9u7"&&(e.innerHTML=t),s=E(l,"SCRIPT",{"data-svelte-h":!0}),x(s)!=="svelte-utc6kp"&&(s.textContent=i),l.forEach(h),this.h()},h(){e.async=!0,_e(e.src,a="https://www.googletagmanager.com/gtag/js?id=MEASUREMENT_ID")||n(e,"src",a)},m(o,l){f(Z.head,e),f(Z.head,s)},p:B,i:B,o:B,d(o){h(e),h(s)}}}function He(r,e,t){let a;return V(r,he,s=>t(0,a=s)),r.$$.update=()=>{r.$$.dirty&1&&typeof gtag<"u"&&gtag("config","G-F0EMDHQYE3",{page_title:document.title,page_path:a.url.pathname})},[a]}class Be extends U{constructor(e){super(),q(this,e,He,Ve,O,{})}}function Oe(r){const e=r-1;return e*e*e+1}function Ue(r,{delay:e=0,duration:t=400,easing:a=pe}={}){const s=+getComputedStyle(r).opacity;return{delay:e,duration:t,easing:a,css:i=>`opacity: ${i*s}`}}function ce(r){let e,t,a,s;return{c(){e=y("div"),this.h()},l(i){e=E(i,"DIV",{class:!0,style:!0,"aria-hidden":!0}),b(e).forEach(h),this.h()},h(){n(e,"class","loading-track svelte-mr1a9s"),n(e,"style",t=`width: ${100*r[1]}%`),n(e,"aria-hidden","true"),z(e,"finished",r[1]===1)},m(i,o){H(i,e,o),s=!0},p(i,o){(!s||o&2&&t!==(t=`width: ${100*i[1]}%`))&&n(e,"style",t),(!s||o&2)&&z(e,"finished",i[1]===1)},i(i){s||(a&&a.end(1),s=!0)},o(i){i&&(a=Ce(e,Ue,{duration:500,easing:Oe})),s=!1},d(i){i&&h(e),i&&a&&a.end()}}}function qe(r){let e,t=r[0]&&ce(r);return{c(){t&&t.c(),e=le()},l(a){t&&t.l(a),e=le()},m(a,s){t&&t.m(a,s),H(a,e,s)},p(a,[s]){a[0]?t?(t.p(a,s),s&1&&S(t,1)):(t=ce(a),t.c(),S(t,1),t.m(e.parentNode,e)):t&&(Te(),D(t,1,1,()=>{t=null}),Le())},i(a){S(t)},o(a){D(t)},d(a){a&&h(e),t&&t.d(a)}}}function Fe(r,e,t){let a;const s=ze(0);V(r,s,v=>t(1,a=v));let i,o=!1,l;const d=ge(fe,(v,_)=>{clearTimeout(i),v?i=setTimeout(()=>_(!0),200):_(!1)});async function p(){t(0,o=!0),clearTimeout(l),s.set(0),await ve(),await new Promise(requestAnimationFrame),s.set(.7)}function u(){s.set(1),clearTimeout(l),l=setTimeout(()=>t(0,o=!1),500)}return d.subscribe(v=>{v?p():u()}),[o,a,s]}class Pe extends U{constructor(e){super(),q(this,e,Fe,qe,O,{})}}const{window:We}=de;function Ge(r){let e,t,a,s,i,o,l,d,p,u,v,_=`<p>Created by <a href="#" style="color: var(--color-primary-400)">Ajay</a>
      with
      <a href="https://kit.svelte.dev/" style="color: var(--color-primary-400);">Svelte ❤️</a></p>`,C,A,w;e=new Pe({}),s=new Be({}),l=new Ne({});const j=r[2].default,m=me(j,r,r[1],null);return{c(){P(e.$$.fragment),t=M(),a=y("div"),P(s.$$.fragment),i=M(),o=y("div"),P(l.$$.fragment),d=M(),p=y("main"),m&&m.c(),u=M(),v=y("footer"),v.innerHTML=_,this.h()},l(c){W(e.$$.fragment,c),t=I(c),a=E(c,"DIV",{class:!0});var g=b(a);W(s.$$.fragment,g),i=I(g),o=E(g,"DIV",{class:!0});var L=b(o);W(l.$$.fragment,L),L.forEach(h),d=I(g),p=E(g,"MAIN",{class:!0});var R=b(p);m&&m.l(R),R.forEach(h),u=I(g),v=E(g,"FOOTER",{class:!0,"data-svelte-h":!0}),x(v)!=="svelte-2dozjx"&&(v.innerHTML=_),g.forEach(h),this.h()},h(){n(o,"class","navbar svelte-1fg17z2"),n(p,"class","svelte-1fg17z2"),n(v,"class","footer svelte-1fg17z2"),n(a,"class","container svelte-1fg17z2")},m(c,g){G(e,c,g),H(c,t,g),H(c,a,g),G(s,a,null),f(a,i),f(a,o),G(l,o,null),r[4](o),f(a,d),f(a,p),m&&m.m(p,null),f(a,u),f(a,v),r[5](a),C=!0,A||(w=Ae(We,"hashchange",r[3]),A=!0)},p(c,[g]){m&&m.p&&(!C||g&2)&&we(m,j,c,c[1],C?be(j,c[1],g,null):ke(c[1]),null)},i(c){C||(S(e.$$.fragment,c),S(s.$$.fragment,c),S(l.$$.fragment,c),S(m,c),C=!0)},o(c){D(e.$$.fragment,c),D(s.$$.fragment,c),D(l.$$.fragment,c),D(m,c),C=!1},d(c){c&&(h(t),h(a)),Q(e,c),Q(s),Q(l),r[4](null),m&&m.d(c),r[5](null),A=!1,w()}}}function Qe(r,e,t){let{$$slots:a={},$$scope:s}=e;const{page:i}=$e();let o;ye(()=>{i.subscribe(()=>{o&&ue(window.location.href,o)}),navigator.serviceWorker.getRegistration().then(u=>u==null?void 0:u.unregister())});const l=()=>ue(window.location.href,o);function d(u){oe[u?"unshift":"push"](()=>{o=u,t(0,o)})}function p(u){oe[u?"unshift":"push"](()=>{o=u,t(0,o)})}return r.$$set=u=>{"$$scope"in u&&t(1,s=u.$$scope)},[o,s,a,l,d,p]}class xe extends U{constructor(e){super(),q(this,e,Qe,Ge,O,{})}}export{xe as component,Ze as universal};