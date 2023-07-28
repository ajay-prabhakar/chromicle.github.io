import{s as kt,n as Se}from"./scheduler.571a1093.js";import{S as Ht,i as Lt,g as i,s,H as Ee,h as a,B as o,c as r,j as je,F as Re,f as t,k as u,a as n}from"./index.74e0b81a.js";function Tt(mt){let p,Ae='<a aria-hidden="true" tabindex="-1" href="#what-does-aasaan-solve--"><span class="icon icon-link"></span></a>What does aasaan Solve ? 👀',K,_,Ie="<li>Making and uploading of documents etc. In online applications a piece of cake.</li> <li>This we are achieving by able to redirect to an app once the user clicks the upload button.</li> <li>From the app the users can take a photo of the desired documents and can upload it to the required component. by compressing it to the <strong>required</strong> size</li>",J,c,ze='<a aria-hidden="true" tabindex="-1" href="#technology-stack-"><span class="icon icon-link"></span></a>Technology Stack ⭐',V,k,De='<li><a href="https://flutter.dev/" rel="noopener" class="text-link" target="_blank">Flutter</a></li> <li><a href="https://firebase.google.com/" rel="noopener" class="text-link" target="_blank">Firebase</a></li> <li><a href="https://opencv.org/" rel="noopener" class="text-link" target="_blank">OpenCV</a></li> <li><a href="https://developers.google.com/vision" rel="noopener" class="text-link" target="_blank">Mobile vison</a></li> <li><a href="https://developers.google.com/identity/protocols/oauth2" rel="noopener" class="text-link" target="_blank">Google auth</a></li> <li><a href="https://reactjs.org/" rel="noopener" class="text-link" target="_blank">React</a></li>',X,d,qe='<a aria-hidden="true" tabindex="-1" href="#what-all-aasaan-can-do--"><span class="icon icon-link"></span></a>What all aasaan can do ? 💭',Y,H,We="Aasaan contains some of the features which will be helped to scan document and upload.",Q,L,Ge=`<strong>Scanning UI</strong> \\
User guidance to the best position for capturing the document with manual + automatic photo capture of document.`,Z,T,Oe=`<strong>Pre-Processing of images</strong> \\
By scanning the document it will automatically process the image and give you readable documents with multiple filters.`,$,M,Ue=`<strong>Perspective Correction</strong> \\
4 Point getPerspective Transform, it will automatically detect crop the image.`,ee,w,Be=`<strong>Text Recognition (OCR)</strong> \\
Text Recognition is done using Mobile vision API. so, when user want to scan the Aadhar card he can automatically get the code.`,te,C,Ne=`<strong>Online Cloud</strong> \\
We used firebase database for online cloud, if the user lost the documents also he can retrieve all of them with no time.`,le,y,Ke=`<strong>File compression</strong> \\
With the help of openCV 3.0 we added the compressor, user can compress the document with the given input.`,ne,P,Je=`<strong>Multiple Formats</strong> \\
The scanned image can be converted into multiple forms JPG, PDF, TiFF etc.`,ie,h,Ve='<a aria-hidden="true" tabindex="-1" href="#how-is-privacy-ensured"><span class="icon icon-link"></span></a>How is privacy ensured?',ae,F,Xe=`All files being stored in Firebase cloud, no one except with user authentication would be able to read them.
For further clarification, when ever the user upload or download the documents it will automatically check the authentication.`,se,f,Ye='<a aria-hidden="true" tabindex="-1" href="#how-to-build-and-run-locally"><span class="icon icon-link"></span></a>How to build and run locally?',re,E,Qe='Install <a href="https://flutter.dev/" rel="noopener" class="text-link" target="_blank">Flutter</a> and all required dev tools.',oe,j,Ze="Fetch this repository and navigate to the project directory.",ue,R,pe,bt='<code class="language-undefined">cd scanbot-sdk-example-flutter/</code>',ce,S,$e="Fetch and install the dependencies of this example project via Flutter CLI:",de,A,he,gt='<code class="language-undefined">flutter pub get</code>',fe,I,et="Connect a mobile device via USB and run the app.",ve,z,tt="<strong>Android:</strong>",me,D,be,xt='<code class="language-undefined">flutter run -d &lt;DEVICE_ID&gt;</code>',ge,q,lt="You can get the IDs of all connected devices via <code>flutter devices</code>.",xe,W,nt=`<strong>iOS:</strong>
Install Pods dependencies:`,_e,G,ke,_t=`<code class="language-undefined">cd ios/
pod install --repo-update</code>`,He,O,it=`Open the <strong>workspace</strong>(!) <code>ios/Runner.xcworkspace</code> in Xcode and adjust the <em>Signing / Developer Account</em> settings.
Then build and run the app in Xcode.`,Le,v,at='<a aria-hidden="true" tabindex="-1" href="#future-goals-"><span class="icon icon-link"></span></a>Future goals 🔜',Te,U,st="<li>We plan to implement the OCR in a much more efficient way.</li> <li>The 2fa is also going to be implemented just to improve the user login security.</li> <li>We also plan to make use of the Digilocker API to<ul><li>Fetch issued documents directly as a Digilocker copy (Requester API)</li> <li>Store scanned documents in Digilocker as files</li></ul></li>",Me,m,rt='<a aria-hidden="true" tabindex="-1" href="#screenshots"><span class="icon icon-link"></span></a>Screenshots',we,b,ot='<tr><td><img src="https://user-images.githubusercontent.com/48018942/97796401-87ad6980-1c37-11eb-999a-5bbbfbb80221.png" width="300"/></td> <td><img src="https://user-images.githubusercontent.com/48018942/97796402-87ad6980-1c37-11eb-98d7-5540c22eac6e.png" width="300"/></td> <td><img src="https://user-images.githubusercontent.com/48018942/97796399-854b0f80-1c37-11eb-8782-ee63188f9dff.png" width="300"/></td></tr> <tr><td><img src="https://user-images.githubusercontent.com/48018942/97796400-8714d300-1c37-11eb-9033-330e57ad67e2.png" width="300"/></td> <td><img src="https://user-images.githubusercontent.com/48018942/97796403-88460000-1c37-11eb-94d6-087c6bb3fbf2.png" width="300"/></td> <td><img src="https://user-images.githubusercontent.com/48018942/97796404-88de9680-1c37-11eb-9859-ef2911c128fc.png" width="300"/></td></tr>',Ce,g,ut='<a aria-hidden="true" tabindex="-1" href="#developers-️"><span class="icon icon-link"></span></a>Developers 💁‍♀️',ye,B,pt=`<a href="https://github.com/chromicle" rel="noopener" class="text-link" target="_blank">Ajay Prabhakar</a> \\
<a href="https://github.com/puneeth2001" rel="noopener" class="text-link" target="_blank">Puneeth chanda</a> \\
<a href="https://github.com/ashwinkey04" rel="noopener" class="text-link" target="_blank">Ashwin Ramakrishnan</a> \\
<a href="https://github.com/iammarco11" rel="noopener" class="text-link" target="_blank">Akshay Praveen Nair</a> \\
<a href="https://github.com/Blackcipher101" rel="noopener" class="text-link" target="_blank">Nehal Nevle</a> \\`,Pe,x,ct='<a aria-hidden="true" tabindex="-1" href="#links-"><span class="icon icon-link"></span></a>Links \\',Fe,N,dt=`Documentation: <a href="https://puneethchanda2001.gitbook.io/ieee-document-upload/" rel="noopener" class="text-link" target="_blank">https://puneethchanda2001.gitbook.io/ieee-document-upload/</a> \\
app:   <a href="https://drive.google.com/file/d/1LvnG73RmuWN0S-9zanKL9a3L5JLGKSCt/view?usp=sharing" rel="noopener" class="text-link" target="_blank">https://drive.google.com/file/d/1LvnG73RmuWN0S-9zanKL9a3L5JLGKSCt/view?usp=sharing</a> \\
Repo: <a href="https://github.com/Fireboltz/IEEE-Document-uploader" rel="noopener" class="text-link" target="_blank">https://github.com/Fireboltz/IEEE-Document-uploader</a> \\
Website: <a href="https://blissful-neumann-0ff4dd.netlify.app/" rel="noopener" class="text-link" target="_blank">https://blissful-neumann-0ff4dd.netlify.app/</a> \\`;return{c(){p=i("h2"),p.innerHTML=Ae,K=s(),_=i("ul"),_.innerHTML=Ie,J=s(),c=i("h2"),c.innerHTML=ze,V=s(),k=i("ul"),k.innerHTML=De,X=s(),d=i("h2"),d.innerHTML=qe,Y=s(),H=i("p"),H.textContent=We,Q=s(),L=i("p"),L.innerHTML=Ge,Z=s(),T=i("p"),T.innerHTML=Oe,$=s(),M=i("p"),M.innerHTML=Ue,ee=s(),w=i("p"),w.innerHTML=Be,te=s(),C=i("p"),C.innerHTML=Ne,le=s(),y=i("p"),y.innerHTML=Ke,ne=s(),P=i("p"),P.innerHTML=Je,ie=s(),h=i("h2"),h.innerHTML=Ve,ae=s(),F=i("p"),F.textContent=Xe,se=s(),f=i("h2"),f.innerHTML=Ye,re=s(),E=i("p"),E.innerHTML=Qe,oe=s(),j=i("p"),j.textContent=Ze,ue=s(),R=i("pre"),pe=new Ee(!1),ce=s(),S=i("p"),S.textContent=$e,de=s(),A=i("pre"),he=new Ee(!1),fe=s(),I=i("p"),I.textContent=et,ve=s(),z=i("p"),z.innerHTML=tt,me=s(),D=i("pre"),be=new Ee(!1),ge=s(),q=i("p"),q.innerHTML=lt,xe=s(),W=i("p"),W.innerHTML=nt,_e=s(),G=i("pre"),ke=new Ee(!1),He=s(),O=i("p"),O.innerHTML=it,Le=s(),v=i("h2"),v.innerHTML=at,Te=s(),U=i("ul"),U.innerHTML=st,Me=s(),m=i("h2"),m.innerHTML=rt,we=s(),b=i("table"),b.innerHTML=ot,Ce=s(),g=i("h2"),g.innerHTML=ut,ye=s(),B=i("p"),B.innerHTML=pt,Pe=s(),x=i("h2"),x.innerHTML=ct,Fe=s(),N=i("p"),N.innerHTML=dt,this.h()},l(e){p=a(e,"H2",{id:!0,"data-svelte-h":!0}),o(p)!=="svelte-qzoi7r"&&(p.innerHTML=Ae),K=r(e),_=a(e,"UL",{"data-svelte-h":!0}),o(_)!=="svelte-i4geui"&&(_.innerHTML=Ie),J=r(e),c=a(e,"H2",{id:!0,"data-svelte-h":!0}),o(c)!=="svelte-cp9f30"&&(c.innerHTML=ze),V=r(e),k=a(e,"UL",{"data-svelte-h":!0}),o(k)!=="svelte-hh82i4"&&(k.innerHTML=De),X=r(e),d=a(e,"H2",{id:!0,"data-svelte-h":!0}),o(d)!=="svelte-2u9y0w"&&(d.innerHTML=qe),Y=r(e),H=a(e,"P",{"data-svelte-h":!0}),o(H)!=="svelte-onmepu"&&(H.textContent=We),Q=r(e),L=a(e,"P",{"data-svelte-h":!0}),o(L)!=="svelte-1gl04v6"&&(L.innerHTML=Ge),Z=r(e),T=a(e,"P",{"data-svelte-h":!0}),o(T)!=="svelte-1gxlmyy"&&(T.innerHTML=Oe),$=r(e),M=a(e,"P",{"data-svelte-h":!0}),o(M)!=="svelte-f6ck3s"&&(M.innerHTML=Ue),ee=r(e),w=a(e,"P",{"data-svelte-h":!0}),o(w)!=="svelte-1gely7f"&&(w.innerHTML=Be),te=r(e),C=a(e,"P",{"data-svelte-h":!0}),o(C)!=="svelte-1bozlpd"&&(C.innerHTML=Ne),le=r(e),y=a(e,"P",{"data-svelte-h":!0}),o(y)!=="svelte-pc2zp3"&&(y.innerHTML=Ke),ne=r(e),P=a(e,"P",{"data-svelte-h":!0}),o(P)!=="svelte-iynjl9"&&(P.innerHTML=Je),ie=r(e),h=a(e,"H2",{id:!0,"data-svelte-h":!0}),o(h)!=="svelte-4oc2iv"&&(h.innerHTML=Ve),ae=r(e),F=a(e,"P",{"data-svelte-h":!0}),o(F)!=="svelte-1josj9y"&&(F.textContent=Xe),se=r(e),f=a(e,"H2",{id:!0,"data-svelte-h":!0}),o(f)!=="svelte-7kwzhs"&&(f.innerHTML=Ye),re=r(e),E=a(e,"P",{"data-svelte-h":!0}),o(E)!=="svelte-6x2oei"&&(E.innerHTML=Qe),oe=r(e),j=a(e,"P",{"data-svelte-h":!0}),o(j)!=="svelte-u59yhu"&&(j.textContent=Ze),ue=r(e),R=a(e,"PRE",{class:!0});var l=je(R);pe=Re(l,!1),l.forEach(t),ce=r(e),S=a(e,"P",{"data-svelte-h":!0}),o(S)!=="svelte-1gbxrdg"&&(S.textContent=$e),de=r(e),A=a(e,"PRE",{class:!0});var ht=je(A);he=Re(ht,!1),ht.forEach(t),fe=r(e),I=a(e,"P",{"data-svelte-h":!0}),o(I)!=="svelte-1bev6xx"&&(I.textContent=et),ve=r(e),z=a(e,"P",{"data-svelte-h":!0}),o(z)!=="svelte-1sc4xvg"&&(z.innerHTML=tt),me=r(e),D=a(e,"PRE",{class:!0});var ft=je(D);be=Re(ft,!1),ft.forEach(t),ge=r(e),q=a(e,"P",{"data-svelte-h":!0}),o(q)!=="svelte-1qxpwh4"&&(q.innerHTML=lt),xe=r(e),W=a(e,"P",{"data-svelte-h":!0}),o(W)!=="svelte-6svkyw"&&(W.innerHTML=nt),_e=r(e),G=a(e,"PRE",{class:!0});var vt=je(G);ke=Re(vt,!1),vt.forEach(t),He=r(e),O=a(e,"P",{"data-svelte-h":!0}),o(O)!=="svelte-s9v36j"&&(O.innerHTML=it),Le=r(e),v=a(e,"H2",{id:!0,"data-svelte-h":!0}),o(v)!=="svelte-z55rhy"&&(v.innerHTML=at),Te=r(e),U=a(e,"UL",{"data-svelte-h":!0}),o(U)!=="svelte-1qnxec"&&(U.innerHTML=st),Me=r(e),m=a(e,"H2",{id:!0,"data-svelte-h":!0}),o(m)!=="svelte-jguyhv"&&(m.innerHTML=rt),we=r(e),b=a(e,"TABLE",{border:!0,"data-svelte-h":!0}),o(b)!=="svelte-12jkmuw"&&(b.innerHTML=ot),Ce=r(e),g=a(e,"H2",{id:!0,"data-svelte-h":!0}),o(g)!=="svelte-t1jycz"&&(g.innerHTML=ut),ye=r(e),B=a(e,"P",{"data-svelte-h":!0}),o(B)!=="svelte-17j50vl"&&(B.innerHTML=pt),Pe=r(e),x=a(e,"H2",{id:!0,"data-svelte-h":!0}),o(x)!=="svelte-10mivpx"&&(x.innerHTML=ct),Fe=r(e),N=a(e,"P",{"data-svelte-h":!0}),o(N)!=="svelte-7hwy5q"&&(N.innerHTML=dt),this.h()},h(){u(p,"id","what-does-aasaan-solve--"),u(c,"id","technology-stack-"),u(d,"id","what-all-aasaan-can-do--"),u(h,"id","how-is-privacy-ensured"),u(f,"id","how-to-build-and-run-locally"),pe.a=null,u(R,"class","language-undefined"),he.a=null,u(A,"class","language-undefined"),be.a=null,u(D,"class","language-undefined"),ke.a=null,u(G,"class","language-undefined"),u(v,"id","future-goals-"),u(m,"id","screenshots"),u(b,"border","0"),u(g,"id","developers-️"),u(x,"id","links-")},m(e,l){n(e,p,l),n(e,K,l),n(e,_,l),n(e,J,l),n(e,c,l),n(e,V,l),n(e,k,l),n(e,X,l),n(e,d,l),n(e,Y,l),n(e,H,l),n(e,Q,l),n(e,L,l),n(e,Z,l),n(e,T,l),n(e,$,l),n(e,M,l),n(e,ee,l),n(e,w,l),n(e,te,l),n(e,C,l),n(e,le,l),n(e,y,l),n(e,ne,l),n(e,P,l),n(e,ie,l),n(e,h,l),n(e,ae,l),n(e,F,l),n(e,se,l),n(e,f,l),n(e,re,l),n(e,E,l),n(e,oe,l),n(e,j,l),n(e,ue,l),n(e,R,l),pe.m(bt,R),n(e,ce,l),n(e,S,l),n(e,de,l),n(e,A,l),he.m(gt,A),n(e,fe,l),n(e,I,l),n(e,ve,l),n(e,z,l),n(e,me,l),n(e,D,l),be.m(xt,D),n(e,ge,l),n(e,q,l),n(e,xe,l),n(e,W,l),n(e,_e,l),n(e,G,l),ke.m(_t,G),n(e,He,l),n(e,O,l),n(e,Le,l),n(e,v,l),n(e,Te,l),n(e,U,l),n(e,Me,l),n(e,m,l),n(e,we,l),n(e,b,l),n(e,Ce,l),n(e,g,l),n(e,ye,l),n(e,B,l),n(e,Pe,l),n(e,x,l),n(e,Fe,l),n(e,N,l)},p:Se,i:Se,o:Se,d(e){e&&(t(p),t(K),t(_),t(J),t(c),t(V),t(k),t(X),t(d),t(Y),t(H),t(Q),t(L),t(Z),t(T),t($),t(M),t(ee),t(w),t(te),t(C),t(le),t(y),t(ne),t(P),t(ie),t(h),t(ae),t(F),t(se),t(f),t(re),t(E),t(oe),t(j),t(ue),t(R),t(ce),t(S),t(de),t(A),t(fe),t(I),t(ve),t(z),t(me),t(D),t(ge),t(q),t(xe),t(W),t(_e),t(G),t(He),t(O),t(Le),t(v),t(Te),t(U),t(Me),t(m),t(we),t(b),t(Ce),t(g),t(ye),t(B),t(Pe),t(x),t(Fe),t(N))}}}const Ct={title:"aasaan",description:"aasaan is a flutter application which helps to scan the documents and upload to the own user database(firebase).",date:"2020-08-09",categories:["sveltekit","svelte"],published:!0,repo:"https://github.com/Fireboltz/aasaan"};class yt extends Ht{constructor(p){super(),Lt(this,p,null,Tt,kt,{})}}export{yt as default,Ct as metadata};
