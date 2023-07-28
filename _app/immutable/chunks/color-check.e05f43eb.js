import{s as kn,n as Lt}from"./scheduler.571a1093.js";import{S as dn,i as hn,g as s,s as o,H as v,h as l,B as c,c as p,j as _,F as g,f as n,k as i,a}from"./index.74e0b81a.js";function fn(en){let u,Tt="A Dart package exposing a Color class which can be used to create, convert, and compare colors.",O,r,Mt='<a aria-hidden="true" tabindex="-1" href="#️-installation"><span class="icon icon-link"></span></a>⚙️ Installation',V,w,Pt="<li>Add this to your package’s <code>pubspec.yaml</code> file:</li>",Y,x,$,an=`<code class="language-yaml"><span class="token key atrule">dependencies</span><span class="token punctuation">:</span>
  <span class="token key atrule">colorcheck</span><span class="token punctuation">:</span> any</code>`,J,C,Et="<li>Get the package using your IDE’s GUI or via command line with</li>",K,y,N,sn='<code class="language-bash">$ pub get</code>',Q,b,Rt="<li>Import the <code>colorcheck.dart</code> file in your app</li>",W,H,X,ln=`<code class="language-dart"><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:colorcheck/colorcheck.dart'</span></span><span class="token punctuation">;</span></code>`,Z,k,It='<a aria-hidden="true" tabindex="-1" href="#-screenshots"><span class="icon icon-link"></span></a>📱 Screenshots',tt,L,Dt="Here I am showing the how you can compare colors with the logs",nt,T,Bt='<thead><tr><th>GIF</th> <th>Logs</th></tr></thead> <tbody><tr><td><img src="https://user-images.githubusercontent.com/48018942/84833703-847d5c80-b04d-11ea-9ffb-b47a74a602b1.gif" heigth="550" width="330"/></td> <td><img src="https://user-images.githubusercontent.com/48018942/84833700-834c2f80-b04d-11ea-8a61-84d0c76b0ef8.gif" heigth="800" width="700"/></td></tr></tbody>',et,d,St='<a aria-hidden="true" tabindex="-1" href="#-usage"><span class="icon icon-link"></span></a>🛠 Usage',at,M,jt="Color objects can be check or compare using any of a few available constructors.",st,h,Ft='<a aria-hidden="true" tabindex="-1" href="#how-it-works"><span class="icon icon-link"></span></a>How it works',lt,P,zt="Baiscally, you have to give one color as input to get suggesions and you have to choose any button to change the colors as shown in GIF the new colord which appear on UI will be printed in logs so, you can pick from that",ot,E,At="initialy give some color input in <code>initState</code>",pt,R,ct,on=`<code class="language-dart">  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token class-name">ColorCheck</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"#FDD148"</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span></code>`,it,I,qt=`After choose any <strong>button</strong> to change color in on pressed of button use below code
The input 3 in <code>colorCheck</code> function is the strenght(How much color variance you want), you can choose it from the scale of <strong>1-10</strong>`,ut,D,rt,pn=`<code class="language-dart">onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token function">changeColor</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span></code>`,kt,B,Gt="so, from now whenever you pressed that button you will get the suggesions for similar colors. now apply the color to whatever widget you want, for example  I am choosing <code>BoxDecoration</code> so here I am applying <code>getCurrentColor()</code> to color field",dt,S,ht,cn=`<code class="language-dart"><span class="token class-name">BoxDecoration</span><span class="token punctuation">(</span>
          color<span class="token punctuation">:</span> <span class="token function">getCurrentColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          borderRadius<span class="token punctuation">:</span> <span class="token class-name">BorderRadius</span><span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span></code>`,ft,j,Ut="you can apply to multipule widget also",mt,f,Ot='<a aria-hidden="true" tabindex="-1" href="#random-color"><span class="icon icon-link"></span></a>Random color',vt,F,Vt="You can get the color if you didn’t like any colors so you can choose one from it",_t,m,Yt='<a aria-hidden="true" tabindex="-1" href="#usage"><span class="icon icon-link"></span></a>Usage',gt,z,$t="Here you don’t need to initialize anything, stright away choose any button to change the color. in onPressed add the below method",wt,A,xt,un=`<code class="language-dart"> onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
              <span class="token function">getRandomColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">,</span></code>`,Ct,q,Jt="From here you can get the random colors, you have to apply them to widgets",yt,G,bt,rn=`<code class="language-dart"><span class="token class-name">BoxDecoration</span><span class="token punctuation">(</span>
          color<span class="token punctuation">:</span> <span class="token function">getRandomColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          borderRadius<span class="token punctuation">:</span> <span class="token class-name">BorderRadius</span><span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span></code>`,Ht,U,Kt=`Developed with ♥ by Ajay Prabhakar \\
Thanks for Viewing and using, Happy coding :) \\
Feel free to contact me.`;return{c(){u=s("p"),u.textContent=Tt,O=o(),r=s("h2"),r.innerHTML=Mt,V=o(),w=s("ol"),w.innerHTML=Pt,Y=o(),x=s("pre"),$=new v(!1),J=o(),C=s("ol"),C.innerHTML=Et,K=o(),y=s("pre"),N=new v(!1),Q=o(),b=s("ol"),b.innerHTML=Rt,W=o(),H=s("pre"),X=new v(!1),Z=o(),k=s("h2"),k.innerHTML=It,tt=o(),L=s("p"),L.textContent=Dt,nt=o(),T=s("table"),T.innerHTML=Bt,et=o(),d=s("h2"),d.innerHTML=St,at=o(),M=s("p"),M.textContent=jt,st=o(),h=s("h4"),h.innerHTML=Ft,lt=o(),P=s("p"),P.textContent=zt,ot=o(),E=s("p"),E.innerHTML=At,pt=o(),R=s("pre"),ct=new v(!1),it=o(),I=s("p"),I.innerHTML=qt,ut=o(),D=s("pre"),rt=new v(!1),kt=o(),B=s("p"),B.innerHTML=Gt,dt=o(),S=s("pre"),ht=new v(!1),ft=o(),j=s("p"),j.textContent=Ut,mt=o(),f=s("h3"),f.innerHTML=Ot,vt=o(),F=s("p"),F.textContent=Vt,_t=o(),m=s("h3"),m.innerHTML=Yt,gt=o(),z=s("p"),z.textContent=$t,wt=o(),A=s("pre"),xt=new v(!1),Ct=o(),q=s("p"),q.textContent=Jt,yt=o(),G=s("pre"),bt=new v(!1),Ht=o(),U=s("p"),U.textContent=Kt,this.h()},l(t){u=l(t,"P",{"data-svelte-h":!0}),c(u)!=="svelte-fle6gw"&&(u.textContent=Tt),O=p(t),r=l(t,"H2",{id:!0,"data-svelte-h":!0}),c(r)!=="svelte-5fto1w"&&(r.innerHTML=Mt),V=p(t),w=l(t,"OL",{"data-svelte-h":!0}),c(w)!=="svelte-1krfn1y"&&(w.innerHTML=Pt),Y=p(t),x=l(t,"PRE",{class:!0});var e=_(x);$=g(e,!1),e.forEach(n),J=p(t),C=l(t,"OL",{"data-svelte-h":!0}),c(C)!=="svelte-1euf8xo"&&(C.innerHTML=Et),K=p(t),y=l(t,"PRE",{class:!0});var Nt=_(y);N=g(Nt,!1),Nt.forEach(n),Q=p(t),b=l(t,"OL",{"data-svelte-h":!0}),c(b)!=="svelte-1wp9xdr"&&(b.innerHTML=Rt),W=p(t),H=l(t,"PRE",{class:!0});var Qt=_(H);X=g(Qt,!1),Qt.forEach(n),Z=p(t),k=l(t,"H2",{id:!0,"data-svelte-h":!0}),c(k)!=="svelte-1n4am2t"&&(k.innerHTML=It),tt=p(t),L=l(t,"P",{"data-svelte-h":!0}),c(L)!=="svelte-wf1oez"&&(L.textContent=Dt),nt=p(t),T=l(t,"TABLE",{"data-svelte-h":!0}),c(T)!=="svelte-18fcu8p"&&(T.innerHTML=Bt),et=p(t),d=l(t,"H2",{id:!0,"data-svelte-h":!0}),c(d)!=="svelte-1e1q50a"&&(d.innerHTML=St),at=p(t),M=l(t,"P",{"data-svelte-h":!0}),c(M)!=="svelte-1pk0qu0"&&(M.textContent=jt),st=p(t),h=l(t,"H4",{id:!0,"data-svelte-h":!0}),c(h)!=="svelte-1fvnso5"&&(h.innerHTML=Ft),lt=p(t),P=l(t,"P",{"data-svelte-h":!0}),c(P)!=="svelte-1jzy4mp"&&(P.textContent=zt),ot=p(t),E=l(t,"P",{"data-svelte-h":!0}),c(E)!=="svelte-suigsg"&&(E.innerHTML=At),pt=p(t),R=l(t,"PRE",{class:!0});var Wt=_(R);ct=g(Wt,!1),Wt.forEach(n),it=p(t),I=l(t,"P",{"data-svelte-h":!0}),c(I)!=="svelte-16w8m21"&&(I.innerHTML=qt),ut=p(t),D=l(t,"PRE",{class:!0});var Xt=_(D);rt=g(Xt,!1),Xt.forEach(n),kt=p(t),B=l(t,"P",{"data-svelte-h":!0}),c(B)!=="svelte-1wqilno"&&(B.innerHTML=Gt),dt=p(t),S=l(t,"PRE",{class:!0});var Zt=_(S);ht=g(Zt,!1),Zt.forEach(n),ft=p(t),j=l(t,"P",{"data-svelte-h":!0}),c(j)!=="svelte-4xyajg"&&(j.textContent=Ut),mt=p(t),f=l(t,"H3",{id:!0,"data-svelte-h":!0}),c(f)!=="svelte-1kyw6b6"&&(f.innerHTML=Ot),vt=p(t),F=l(t,"P",{"data-svelte-h":!0}),c(F)!=="svelte-1maftz3"&&(F.textContent=Vt),_t=p(t),m=l(t,"H3",{id:!0,"data-svelte-h":!0}),c(m)!=="svelte-8cgm3z"&&(m.innerHTML=Yt),gt=p(t),z=l(t,"P",{"data-svelte-h":!0}),c(z)!=="svelte-2yx0op"&&(z.textContent=$t),wt=p(t),A=l(t,"PRE",{class:!0});var tn=_(A);xt=g(tn,!1),tn.forEach(n),Ct=p(t),q=l(t,"P",{"data-svelte-h":!0}),c(q)!=="svelte-1mxbp7r"&&(q.textContent=Jt),yt=p(t),G=l(t,"PRE",{class:!0});var nn=_(G);bt=g(nn,!1),nn.forEach(n),Ht=p(t),U=l(t,"P",{"data-svelte-h":!0}),c(U)!=="svelte-u0f08j"&&(U.textContent=Kt),this.h()},h(){i(r,"id","️-installation"),$.a=null,i(x,"class","language-yaml"),N.a=null,i(y,"class","language-bash"),X.a=null,i(H,"class","language-dart"),i(k,"id","-screenshots"),i(d,"id","-usage"),i(h,"id","how-it-works"),ct.a=null,i(R,"class","language-dart"),rt.a=null,i(D,"class","language-dart"),ht.a=null,i(S,"class","language-dart"),i(f,"id","random-color"),i(m,"id","usage"),xt.a=null,i(A,"class","language-dart"),bt.a=null,i(G,"class","language-dart")},m(t,e){a(t,u,e),a(t,O,e),a(t,r,e),a(t,V,e),a(t,w,e),a(t,Y,e),a(t,x,e),$.m(an,x),a(t,J,e),a(t,C,e),a(t,K,e),a(t,y,e),N.m(sn,y),a(t,Q,e),a(t,b,e),a(t,W,e),a(t,H,e),X.m(ln,H),a(t,Z,e),a(t,k,e),a(t,tt,e),a(t,L,e),a(t,nt,e),a(t,T,e),a(t,et,e),a(t,d,e),a(t,at,e),a(t,M,e),a(t,st,e),a(t,h,e),a(t,lt,e),a(t,P,e),a(t,ot,e),a(t,E,e),a(t,pt,e),a(t,R,e),ct.m(on,R),a(t,it,e),a(t,I,e),a(t,ut,e),a(t,D,e),rt.m(pn,D),a(t,kt,e),a(t,B,e),a(t,dt,e),a(t,S,e),ht.m(cn,S),a(t,ft,e),a(t,j,e),a(t,mt,e),a(t,f,e),a(t,vt,e),a(t,F,e),a(t,_t,e),a(t,m,e),a(t,gt,e),a(t,z,e),a(t,wt,e),a(t,A,e),xt.m(un,A),a(t,Ct,e),a(t,q,e),a(t,yt,e),a(t,G,e),bt.m(rn,G),a(t,Ht,e),a(t,U,e)},p:Lt,i:Lt,o:Lt,d(t){t&&(n(u),n(O),n(r),n(V),n(w),n(Y),n(x),n(J),n(C),n(K),n(y),n(Q),n(b),n(W),n(H),n(Z),n(k),n(tt),n(L),n(nt),n(T),n(et),n(d),n(at),n(M),n(st),n(h),n(lt),n(P),n(ot),n(E),n(pt),n(R),n(it),n(I),n(ut),n(D),n(kt),n(B),n(dt),n(S),n(ft),n(j),n(mt),n(f),n(vt),n(F),n(_t),n(m),n(gt),n(z),n(wt),n(A),n(Ct),n(q),n(yt),n(G),n(Ht),n(U))}}}const _n={title:"Color check Package",description:"Color check is a Dart package exposing a Color class which can be used to create, convert, and compare colors.",date:"2019-12-3",categories:["sveltekit","svelte"],published:!0,repo:"https://github.com/Chromicle/color_check",url:"https://pub.dev/packages/colorcheck"};class gn extends dn{constructor(u){super(),hn(this,u,null,fn,kn,{})}}export{gn as default,_n as metadata};
