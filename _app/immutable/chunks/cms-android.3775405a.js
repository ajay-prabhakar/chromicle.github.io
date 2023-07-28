import{s as gt,n as Ie}from"./scheduler.571a1093.js";import{S as Ct,i as wt,g as i,s as a,H as kt,h as s,B as p,c as r,j as Ae,F as Lt,f as l,k as u,a as n,z as L}from"./index.74e0b81a.js";function yt(Ht){let o,Ue='<img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="License: GPL v3"/>',Q,d,Ge='<img src="https://img.shields.io/badge/%E2%9D%A4-code%20of%20conduct-e04545.svg?style=flat" alt="Code of Conduct"/>',V,H,Oe="cms-mobile is a flutter application for the amFOSS CMS. Using the application, club members can login into the CMS and view club attendence, their profile and status updates.",X,f,De='<a aria-hidden="true" tabindex="-1" href="#getting-started"><span class="icon icon-link"></span></a>Getting Started',Z,T,Re="These instructions will get you a copy of the project up and be running on your local machine for development and testing purposes.",ee,h,ze='<a aria-hidden="true" tabindex="-1" href="#prerequisites"><span class="icon icon-link"></span></a>Prerequisites',te,M,Ne='<a href="https://developer.android.com/studio" rel="noopener" class="text-link" target="_blank">Android Studio</a>, with a recent version of the Android SDK.',le,v,Be='<a aria-hidden="true" tabindex="-1" href="#setting-up-your-development-environment"><span class="icon icon-link"></span></a>Setting up your development environment',ne,c,K,Ye="<p>Download and install Git.</p>",Ee,J,Ke='<p>Fork the <a href="https://gitlab.com/amfoss/cms-mobile" rel="noopener" class="text-link" target="_blank">cms-mobile project</a></p>',Fe,g,W,Je="Clone your fork of the project locally. At the command line:",qe,$,ie,Tt='<code class="language-undefined">$ git clone https://gitlab.com/YOUR-GITLAB-USERNAME/cms-mobile</code>',se,C,We="If you prefer not to use the command line, you can use Android Studio to create a new project from version control using",ae,w,re,Mt='<code class="language-undefined">https://gitlab.com/YOUR-GITLAB-USERNAME/cms-mobile</code>',pe,y,$e="Open the project in the folder of your clone from Android Studio and build the project. If there are any missing dependencies, install them first by clicking on the links provided by Android studio. Once the project is built successfully, run the project by clicking on the green arrow at the top of the screen.",ue,P,Qe="In order to run the project, you will need the Flutter SKD setup up. If this is your first Flutter project, below are a few useful resources:",oe,S,Ve='<li><a href="https://flutter.dev/docs/get-started/codelab" rel="noopener" class="text-link" target="_blank">Lab: Write your first Flutter app</a></li> <li><a href="https://flutter.dev/docs/cookbook" rel="noopener" class="text-link" target="_blank">Cookbook: Useful Flutter samples</a></li>',de,j,Xe=`For help getting started with Flutter, view the Flutter
<a href="https://flutter.dev/docs" rel="noopener" class="text-link" target="_blank">online documentation</a>, which offers tutorials,
samples, guidance on mobile development, and a full API reference.`,ce,m,Ze='<a aria-hidden="true" tabindex="-1" href="#screenshots"><span class="icon icon-link"></span></a>Screenshots',fe,b,et='<tr><td><img src="https://user-images.githubusercontent.com/20596763/85025069-87cf3000-b194-11ea-9d7d-0c9dffe9738b.png" width="300"/></td> <td><img src="https://user-images.githubusercontent.com/20596763/85025107-91589800-b194-11ea-802d-f4a6ce307f55.png" width="300"/></td> <td><img src="https://user-images.githubusercontent.com/20596763/85025124-987fa600-b194-11ea-971f-db32abb048c8.png" width="300"/></td></tr> <tr><td><img src="https://user-images.githubusercontent.com/20596763/85027884-0e394100-b198-11ea-8d13-038c06d13b16.png" width="300"/></td> <td><img src="https://user-images.githubusercontent.com/20596763/85027873-0b3e5080-b198-11ea-9901-3793dee23fdd.png" width="300"/></td> <td><img src="https://user-images.githubusercontent.com/20596763/85027853-07123300-b198-11ea-8714-eda3f80f3082.png" width="300"/></td></tr>',he,_,tt='<a aria-hidden="true" tabindex="-1" href="#dependencies"><span class="icon icon-link"></span></a>Dependencies:',ve,A,lt='<a href="https://pub.dev/packages/cupertino_icons" rel="noopener" class="text-link" target="_blank">cupertino_icons</a>: 0.1.2',me,E,nt='<a href="https://pub.dev/packages/graphql_flutter" rel="noopener" class="text-link" target="_blank">graphql_flutter</a>: 3.0.1-beta.1',be,F,it='<a href="https://pub.dev/packages/intl" rel="noopener" class="text-link" target="_blank">intl</a>: 0.16.1',_e,q,st='<a href="https://pub.dev/packages/moor_flutter" rel="noopener" class="text-link" target="_blank">moor_flutter</a>: 2.1.1',xe,I,at='<a href="https://pub.dev/packages/url_launcher" rel="noopener" class="text-link" target="_blank">url_launcher</a>: 5.4.2',ke,U,rt='<a href="https://pub.dev/packages/flutter_markdown" rel="noopener" class="text-link" target="_blank">flutter_markdown</a>: 0.3.4',Le,G,pt='<a href="https://pub.dev/packages/html2md" rel="noopener" class="text-link" target="_blank">html2md</a>: 0.5.1',He,O,ut='<a href="https://pub.dev/packages/date_range_picker" rel="noopener" class="text-link" target="_blank">date_range_picker</a>: 1.0.6',Te,D,ot='<a href="https://pub.dev/packages/fl_chart" rel="noopener" class="text-link" target="_blank">fl_chart</a>: 0.9.0',Me,R,dt='<a href="https://pub.dev/packages/flutter_icons" rel="noopener" class="text-link" target="_blank">flutter_icons</a>: 1.1.0',ge,z,ct='<a href="https://pub.dev/packages/toast" rel="noopener" class="text-link" target="_blank">toast</a>: 0.1.5',Ce,N,ft='<a href="https://pub.dev/packages/provider" rel="noopener" class="text-link" target="_blank">provider</a>: 4.0.5',we,x,ht='<a aria-hidden="true" tabindex="-1" href="#get-in-touch"><span class="icon icon-link"></span></a>Get in Touch',ye,B,vt=`To contact us, you can create an issue over <a href="https://gitlab.com/amfoss/cms-mobile/-/issues/" rel="noopener" class="text-link" target="_blank">here</a>.
You can also participate in technical discussions and ask your doubts on the <a href="https://webchat.freenode.net/" rel="noopener" class="text-link" target="_blank">IRC Freenode</a>. Just join in and participate in the discussions at the #amfoss channel.`,Pe,k,mt='<a aria-hidden="true" tabindex="-1" href="#license"><span class="icon icon-link"></span></a>License',Se,Y,bt='This project is licensed under the <a href="https://gitlab.com/amfoss/cms-mobile/blob/master/LICENSE" rel="noopener" class="text-link" target="_blank">GNU General Public License v3.0</a>.';return{c(){o=i("a"),o.innerHTML=Ue,Q=a(),d=i("a"),d.innerHTML=Ge,V=a(),H=i("p"),H.textContent=Oe,X=a(),f=i("h2"),f.innerHTML=De,Z=a(),T=i("p"),T.textContent=Re,ee=a(),h=i("h3"),h.innerHTML=ze,te=a(),M=i("p"),M.innerHTML=Ne,le=a(),v=i("h3"),v.innerHTML=Be,ne=a(),c=i("ul"),K=i("li"),K.innerHTML=Ye,Ee=a(),J=i("li"),J.innerHTML=Ke,Fe=a(),g=i("li"),W=i("p"),W.textContent=Je,qe=a(),$=i("pre"),ie=new kt(!1),se=a(),C=i("p"),C.textContent=We,ae=a(),w=i("pre"),re=new kt(!1),pe=a(),y=i("p"),y.textContent=$e,ue=a(),P=i("p"),P.textContent=Qe,oe=a(),S=i("ul"),S.innerHTML=Ve,de=a(),j=i("p"),j.innerHTML=Xe,ce=a(),m=i("h2"),m.innerHTML=Ze,fe=a(),b=i("table"),b.innerHTML=et,he=a(),_=i("h2"),_.innerHTML=tt,ve=a(),A=i("p"),A.innerHTML=lt,me=a(),E=i("p"),E.innerHTML=nt,be=a(),F=i("p"),F.innerHTML=it,_e=a(),q=i("p"),q.innerHTML=st,xe=a(),I=i("p"),I.innerHTML=at,ke=a(),U=i("p"),U.innerHTML=rt,Le=a(),G=i("p"),G.innerHTML=pt,He=a(),O=i("p"),O.innerHTML=ut,Te=a(),D=i("p"),D.innerHTML=ot,Me=a(),R=i("p"),R.innerHTML=dt,ge=a(),z=i("p"),z.innerHTML=ct,Ce=a(),N=i("p"),N.innerHTML=ft,we=a(),x=i("h2"),x.innerHTML=ht,ye=a(),B=i("p"),B.innerHTML=vt,Pe=a(),k=i("h2"),k.innerHTML=mt,Se=a(),Y=i("p"),Y.innerHTML=bt,this.h()},l(e){o=s(e,"A",{href:!0,rel:!0,class:!0,target:!0,"data-svelte-h":!0}),p(o)!=="svelte-13io4iq"&&(o.innerHTML=Ue),Q=r(e),d=s(e,"A",{href:!0,rel:!0,class:!0,target:!0,"data-svelte-h":!0}),p(d)!=="svelte-1j5rmux"&&(d.innerHTML=Ge),V=r(e),H=s(e,"P",{"data-svelte-h":!0}),p(H)!=="svelte-1bkx8wr"&&(H.textContent=Oe),X=r(e),f=s(e,"H2",{id:!0,"data-svelte-h":!0}),p(f)!=="svelte-1rri8sv"&&(f.innerHTML=De),Z=r(e),T=s(e,"P",{"data-svelte-h":!0}),p(T)!=="svelte-knf9rk"&&(T.textContent=Re),ee=r(e),h=s(e,"H3",{id:!0,"data-svelte-h":!0}),p(h)!=="svelte-2jey6f"&&(h.innerHTML=ze),te=r(e),M=s(e,"P",{"data-svelte-h":!0}),p(M)!=="svelte-mr32z"&&(M.innerHTML=Ne),le=r(e),v=s(e,"H3",{id:!0,"data-svelte-h":!0}),p(v)!=="svelte-1pj7sv4"&&(v.innerHTML=Be),ne=r(e),c=s(e,"UL",{});var t=Ae(c);K=s(t,"LI",{"data-svelte-h":!0}),p(K)!=="svelte-5jtj07"&&(K.innerHTML=Ye),Ee=r(t),J=s(t,"LI",{"data-svelte-h":!0}),p(J)!=="svelte-196agdk"&&(J.innerHTML=Ke),Fe=r(t),g=s(t,"LI",{});var je=Ae(g);W=s(je,"P",{"data-svelte-h":!0}),p(W)!=="svelte-1bitjo6"&&(W.textContent=Je),qe=r(je),$=s(je,"PRE",{class:!0});var _t=Ae($);ie=Lt(_t,!1),_t.forEach(l),je.forEach(l),t.forEach(l),se=r(e),C=s(e,"P",{"data-svelte-h":!0}),p(C)!=="svelte-giqs44"&&(C.textContent=We),ae=r(e),w=s(e,"PRE",{class:!0});var xt=Ae(w);re=Lt(xt,!1),xt.forEach(l),pe=r(e),y=s(e,"P",{"data-svelte-h":!0}),p(y)!=="svelte-1t38by6"&&(y.textContent=$e),ue=r(e),P=s(e,"P",{"data-svelte-h":!0}),p(P)!=="svelte-16mtwfz"&&(P.textContent=Qe),oe=r(e),S=s(e,"UL",{"data-svelte-h":!0}),p(S)!=="svelte-11vc5fs"&&(S.innerHTML=Ve),de=r(e),j=s(e,"P",{"data-svelte-h":!0}),p(j)!=="svelte-d7qk1v"&&(j.innerHTML=Xe),ce=r(e),m=s(e,"H2",{id:!0,"data-svelte-h":!0}),p(m)!=="svelte-jguyhv"&&(m.innerHTML=Ze),fe=r(e),b=s(e,"TABLE",{border:!0,"data-svelte-h":!0}),p(b)!=="svelte-1kl6nlu"&&(b.innerHTML=et),he=r(e),_=s(e,"H2",{id:!0,"data-svelte-h":!0}),p(_)!=="svelte-10gs6f3"&&(_.innerHTML=tt),ve=r(e),A=s(e,"P",{"data-svelte-h":!0}),p(A)!=="svelte-2mdczs"&&(A.innerHTML=lt),me=r(e),E=s(e,"P",{"data-svelte-h":!0}),p(E)!=="svelte-1y9hu9n"&&(E.innerHTML=nt),be=r(e),F=s(e,"P",{"data-svelte-h":!0}),p(F)!=="svelte-f2u7xp"&&(F.innerHTML=it),_e=r(e),q=s(e,"P",{"data-svelte-h":!0}),p(q)!=="svelte-12g7o4j"&&(q.innerHTML=st),xe=r(e),I=s(e,"P",{"data-svelte-h":!0}),p(I)!=="svelte-103b2d0"&&(I.innerHTML=at),ke=r(e),U=s(e,"P",{"data-svelte-h":!0}),p(U)!=="svelte-wsooqc"&&(U.innerHTML=rt),Le=r(e),G=s(e,"P",{"data-svelte-h":!0}),p(G)!=="svelte-3q0045"&&(G.innerHTML=pt),He=r(e),O=s(e,"P",{"data-svelte-h":!0}),p(O)!=="svelte-x72i"&&(O.innerHTML=ut),Te=r(e),D=s(e,"P",{"data-svelte-h":!0}),p(D)!=="svelte-uw28bm"&&(D.innerHTML=ot),Me=r(e),R=s(e,"P",{"data-svelte-h":!0}),p(R)!=="svelte-1ex1fm7"&&(R.innerHTML=dt),ge=r(e),z=s(e,"P",{"data-svelte-h":!0}),p(z)!=="svelte-1usf64z"&&(z.innerHTML=ct),Ce=r(e),N=s(e,"P",{"data-svelte-h":!0}),p(N)!=="svelte-1ysxupi"&&(N.innerHTML=ft),we=r(e),x=s(e,"H2",{id:!0,"data-svelte-h":!0}),p(x)!=="svelte-dperro"&&(x.innerHTML=ht),ye=r(e),B=s(e,"P",{"data-svelte-h":!0}),p(B)!=="svelte-71qnz4"&&(B.innerHTML=vt),Pe=r(e),k=s(e,"H2",{id:!0,"data-svelte-h":!0}),p(k)!=="svelte-1hplghx"&&(k.innerHTML=mt),Se=r(e),Y=s(e,"P",{"data-svelte-h":!0}),p(Y)!=="svelte-8splf0"&&(Y.innerHTML=bt),this.h()},h(){u(o,"href","https://www.gnu.org/licenses/gpl-3.0"),u(o,"rel","noopener"),u(o,"class","text-link"),u(o,"target","_blank"),u(d,"href","https://gitlab.com/amfoss/cms-mobile/-/blob/master/CODE_OF_CONDUCT.md"),u(d,"rel","noopener"),u(d,"class","text-link"),u(d,"target","_blank"),u(f,"id","getting-started"),u(h,"id","prerequisites"),u(v,"id","setting-up-your-development-environment"),ie.a=null,u($,"class","language-undefined"),re.a=null,u(w,"class","language-undefined"),u(m,"id","screenshots"),u(b,"border","0"),u(_,"id","dependencies"),u(x,"id","get-in-touch"),u(k,"id","license")},m(e,t){n(e,o,t),n(e,Q,t),n(e,d,t),n(e,V,t),n(e,H,t),n(e,X,t),n(e,f,t),n(e,Z,t),n(e,T,t),n(e,ee,t),n(e,h,t),n(e,te,t),n(e,M,t),n(e,le,t),n(e,v,t),n(e,ne,t),n(e,c,t),L(c,K),L(c,Ee),L(c,J),L(c,Fe),L(c,g),L(g,W),L(g,qe),L(g,$),ie.m(Tt,$),n(e,se,t),n(e,C,t),n(e,ae,t),n(e,w,t),re.m(Mt,w),n(e,pe,t),n(e,y,t),n(e,ue,t),n(e,P,t),n(e,oe,t),n(e,S,t),n(e,de,t),n(e,j,t),n(e,ce,t),n(e,m,t),n(e,fe,t),n(e,b,t),n(e,he,t),n(e,_,t),n(e,ve,t),n(e,A,t),n(e,me,t),n(e,E,t),n(e,be,t),n(e,F,t),n(e,_e,t),n(e,q,t),n(e,xe,t),n(e,I,t),n(e,ke,t),n(e,U,t),n(e,Le,t),n(e,G,t),n(e,He,t),n(e,O,t),n(e,Te,t),n(e,D,t),n(e,Me,t),n(e,R,t),n(e,ge,t),n(e,z,t),n(e,Ce,t),n(e,N,t),n(e,we,t),n(e,x,t),n(e,ye,t),n(e,B,t),n(e,Pe,t),n(e,k,t),n(e,Se,t),n(e,Y,t)},p:Ie,i:Ie,o:Ie,d(e){e&&(l(o),l(Q),l(d),l(V),l(H),l(X),l(f),l(Z),l(T),l(ee),l(h),l(te),l(M),l(le),l(v),l(ne),l(c),l(se),l(C),l(ae),l(w),l(pe),l(y),l(ue),l(P),l(oe),l(S),l(de),l(j),l(ce),l(m),l(fe),l(b),l(he),l(_),l(ve),l(A),l(me),l(E),l(be),l(F),l(_e),l(q),l(xe),l(I),l(ke),l(U),l(Le),l(G),l(He),l(O),l(Te),l(D),l(Me),l(R),l(ge),l(z),l(Ce),l(N),l(we),l(x),l(ye),l(B),l(Pe),l(k),l(Se),l(Y))}}}const jt={title:"CMS Mobile",description:"cms-mobile is a flutter application for the amFOSS CMS. Using the application, club members can login into the CMS and view club attendence, their profile and status updates.",date:"2020-02-10",categories:["sveltekit","svelte"],published:!0,repo:"https://github.com/amfoss/cms-mobile"};class At extends Ct{constructor(o){super(),wt(this,o,null,yt,gt,{})}}export{At as default,jt as metadata};
