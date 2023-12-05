import{s as Ml,d as e,f as xt,n as Pn,r as Fl}from"../chunks/scheduler.ec44ca74.js";import{S as Gl,i as Hl,d as ms,v as Rl,j as s,o as p,s as i,k as n,l as r,p as m,g as a,c,m as o,a as mt,A as t,B as ps,u as Tl,C as Ll,z as d,w as Ul,x as Wl,f as Yl,t as $l,y as Jl}from"../chunks/index.239858a2.js";const Pe="C:/Users/jerem/Documents/webdev/phoenix-ssg-website/src/lib/components/Carousel.svelte";function Sn(g){let v,h,b,E,x,w,y,D,L,Q,u,O,Se,j,M,k,Oe,Ct,P,z;const De={c:function(){v=s("div"),h=s("div"),b=s("span"),E=p("Chrome"),w=i(),y=s("span"),D=p("Firefox"),Q=i(),u=s("div"),O=s("img"),M=i(),k=s("img"),this.h()},l:function(G){v=n(G,"DIV",{id:!0});var A=r(v);h=n(A,"DIV",{id:!0});var N=r(h);b=n(N,"SPAN",{class:!0});var Me=r(b);E=m(Me,"Chrome"),Me.forEach(a),w=c(N),y=n(N,"SPAN",{class:!0});var Ae=r(y);D=m(Ae,"Firefox"),Ae.forEach(a),N.forEach(a),Q=c(A),u=n(A,"DIV",{id:!0});var H=r(u);O=n(H,"IMG",{id:!0,src:!0,alt:!0,class:!0}),M=c(H),k=n(H,"IMG",{id:!0,src:!0,alt:!0,class:!0}),H.forEach(a),A.forEach(a),this.h()},h:function(){o(b,"class",x="carousel-label "+(g[0]?"invisible":"")),e(b,Pe,31,2,719),o(y,"class",L="carousel-label "+(g[1]?"invisible":"")),e(y,Pe,32,2,804),o(h,"id","carousel-label-wrapper"),e(h,Pe,30,1,682),o(O,"id","browser-permissions-img-chrome"),xt(O.src,Se="./images/browser-extension-permissions-chrome.jpg")||o(O,"src",Se),o(O,"alt","chrome browser extension permissions"),o(O,"class",j=g[0]?"invisible":""),e(O,Pe,42,2,1118),o(k,"id","browser-permissions-img-firefox"),xt(k.src,Oe="./images/browser-extension-permissions-firefox.jpg")||o(k,"src",Oe),o(k,"alt","firefox browser extension permissions"),o(k,"class",Ct=g[1]?"invisible":""),e(k,Pe,48,2,1328),o(u,"id","browser-permissions-img-wrapper"),e(u,Pe,35,1,960),o(v,"id","browser-permissions-img-row"),e(v,Pe,29,0,641)},m:function(G,A){mt(G,v,A),t(v,h),t(h,b),t(b,E),t(h,w),t(h,y),t(y,D),t(v,Q),t(v,u),t(u,O),t(u,M),t(u,k),P||(z=[ps(u,"mouseover",g[3],!1,!1,!1,!1),ps(u,"focus",g[3],!1,!1,!1,!1),ps(u,"mouseout",g[2],!1,!1,!1,!1),ps(u,"blur",g[2],!1,!1,!1,!1)],P=!0)},p:function(G,[A]){A&1&&x!==(x="carousel-label "+(G[0]?"invisible":""))&&o(b,"class",x),A&2&&L!==(L="carousel-label "+(G[1]?"invisible":""))&&o(y,"class",L),A&1&&j!==(j=G[0]?"invisible":"")&&o(O,"class",j),A&2&&Ct!==(Ct=G[1]?"invisible":"")&&o(k,"class",Ct)},i:Pn,o:Pn,d:function(G){G&&a(v),P=!1,Fl(z)}};return ms("SvelteRegisterBlock",{block:De,id:Sn.name,type:"component",source:"",ctx:g}),De}function Ql(g,v,h){let{$$slots:b={},$$scope:E}=v;Rl("Carousel",b,[]);let x=!1,w=!0,y=setInterval(()=>{h(0,x=!x),h(1,w=!w)},6e3);function D(u){u.target.tagName==="IMG"&&(y=setInterval(()=>{h(0,x=!x),h(1,w=!w)},6e3))}function L(u){u.target.tagName==="IMG"&&clearInterval(y)}const Q=[];return Object.keys(v).forEach(u=>{!~Q.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<Carousel> was created with unknown prop '${u}'`)}),g.$capture_state=()=>({chromeIsInvisible:x,firefoxIsInvisible:w,interval:y,startTimer:D,pauseTimer:L}),g.$inject_state=u=>{"chromeIsInvisible"in u&&h(0,x=u.chromeIsInvisible),"firefoxIsInvisible"in u&&h(1,w=u.firefoxIsInvisible),"interval"in u&&(y=u.interval)},v&&"$$inject"in v&&g.$inject_state(v.$$inject),[x,w,D,L]}class zl extends Gl{constructor(v){super(v),Hl(this,v,Ql,Sn,Ml,{}),ms("SvelteRegisterComponent",{component:this,tagName:"Carousel",options:v,id:Sn.name})}}const l="C:/Users/jerem/Documents/webdev/phoenix-ssg-website/src/routes/success/+page.svelte";function Dn(g){let v,h,b,E,x,w="Success!",y,D,L="Thank you for your purchase!",Q,u,O="You will receive an email shortly containing your product key.",Se,j,M,k,Oe="Here are your next steps to get up and running:",Ct,P,z,De,B,G="Phoenix",A,N,Me="here.",Ae,H,xs,bt,An="Phoenix",Cs,bs,Ft,Vn="Enter the product key received in your email.",_s,U,gs,_t,jn="Phoenix",ws,K,Bn="browser extension",ks,Is,gt,Nn,He,X,Z,wt,qn="Open the links below in their respective browsers to download the browser extension",Es,tt,F,kt,et,Tt,On,ys,Lt,Mn="Firefox",Ps,It,st,Ut,Gn,Ss,Wt,Hn="Chrome",Ds,Et,nt,Yt,Rn,As,$t,zn="Opera",Vs,T,yt,lt,Jt,Fn,js,Qt,Tn="Brave",Bs,Pt,ot,Kt,Ln,Ns,Xt,Un="Edge",qs,St,at,Zt,Wn,Os,te,Yn="Vivaldi",Re,rt,ee,it,Dt,R,se,$n="STEP 1",Ms,ne,Jn="Install Browser Extensions",Gs,le,Hs,oe,Qn="every browser you own.",Rs,At,zs,ae,Kn="all use the Google Chrome Webstore",Fs,Ts,V,re,Xn="STEP 2",Ls,ie,Zn="Double Check Extension Permissions",Us,I,ze,Ws,Vt,tl="Chromium browsers:",Ys,Fe,$s,ce,el="Allow in incognito",Js,de,sl="on",Qs,ue,nl="site access",Ks,ve,ll="on all sites.",Xs,Te,Zs,f,jt,ol="Mozilla Firefox:",tn,Le,en,he,al="Details",sn,fe,rl="Run in Private Windows",nn,pe,il="Allow.",ln,Ue,on,me,cl="Permissions",an,xe,dl="site data",rn,Ce,ul="all websites",cn,be,vl="youtube.com",dn,_e,hl="on",un,ge,We,Bt,ct,Nt,fl="FAQ",vn,S,dt,qt,pl="Can I use my product/license key on more than one computer?",hn,we,ml=`Yes, you can use your key on up to 5 devices simultaneously. Activating the key on a 6th\r
					device will automatically deactivate one of the 5 previously used devices.`,fn,ut,Ot,xl="Is my purchase valid for both Windows and MacOS?",pn,ke,Cl=`Currently only Windows is supported, but support for MacOS is coming soon. Yes, you will\r
					be able to use your key on either Windows or MacOS devices.`,mn,vt,Mt,bl="Is my payment secure?",xn,Ie,_l="Yes, we use Stripe as our payment processor, one of the biggest names in the game.",Cn,ht,Gt,gl="I never received an email or product key, what do I do?",bn,Ee,_n,W,wl="support@phoenixblocker.com",gn,ft,Ht,kl="Phoenix isn’t what I expected, can I get a refund?",wn,ye,kn,Y,Il="feedback@phoenixblocker.com",Ye;ge=new zl({$$inline:!0});const El={c:function(){v=i(),h=s("section"),b=s("div"),E=s("div"),x=s("h1"),x.textContent=w,y=i(),D=s("span"),D.textContent=L,Q=i(),u=s("span"),u.textContent=O,Se=i(),j=s("div"),M=s("div"),k=s("span"),k.textContent=Oe,Ct=i(),P=s("ol"),z=s("li"),De=p("Download the "),B=s("span"),B.textContent=G,A=p(` client\r
						`),N=s("a"),N.textContent=Me,Ae=i(),H=s("li"),xs=p("Install and run "),bt=s("span"),bt.textContent=An,Cs=p("."),bs=i(),Ft=s("li"),Ft.textContent=Vn,_s=i(),U=s("li"),gs=p("Install the "),_t=s("span"),_t.textContent=jn,ws=i(),K=s("a"),K.textContent=Bn,ks=p(`\r
						for each browser you own.`),Is=i(),gt=s("img"),He=i(),X=s("section"),Z=s("div"),wt=s("span"),wt.textContent=qn,Es=i(),tt=s("div"),F=s("div"),kt=s("a"),et=s("div"),Tt=s("img"),ys=i(),Lt=s("span"),Lt.textContent=Mn,Ps=i(),It=s("a"),st=s("div"),Ut=s("img"),Ss=i(),Wt=s("span"),Wt.textContent=Hn,Ds=i(),Et=s("a"),nt=s("div"),Yt=s("img"),As=i(),$t=s("span"),$t.textContent=zn,Vs=i(),T=s("div"),yt=s("a"),lt=s("div"),Jt=s("img"),js=i(),Qt=s("span"),Qt.textContent=Tn,Bs=i(),Pt=s("a"),ot=s("div"),Kt=s("img"),Ns=i(),Xt=s("span"),Xt.textContent=Un,qs=i(),St=s("a"),at=s("div"),Zt=s("img"),Os=i(),te=s("span"),te.textContent=Yn,Re=i(),rt=s("section"),ee=s("div"),it=s("div"),Dt=s("div"),R=s("div"),se=s("span"),se.textContent=$n,Ms=i(),ne=s("h4"),ne.textContent=Jn,Gs=i(),le=s("p"),Hs=p("Follow the links above to install the Phoenix browser extension on "),oe=s("b"),oe.textContent=Qn,Rs=i(),At=s("p"),zs=p(`Chrome, Edge, Opera, Brave, and Vivaldi\r
						`),ae=s("b"),ae.textContent=Kn,Fs=p(" to install browser extensions."),Ts=i(),V=s("div"),re=s("span"),re.textContent=Xn,Ls=i(),ie=s("h4"),ie.textContent=Zn,Us=i(),I=s("p"),ze=s("br"),Ws=i(),Vt=s("span"),Vt.textContent=tl,Ys=p(`\r
						(Chrome, Edge, Brave, Vivaldi, Opera)\r
						`),Fe=s("br"),$s=p(`\r
						Ensure that the permission `),ce=s("b"),ce.textContent=el,Js=p(` is set to\r
						`),de=s("b"),de.textContent=sl,Qs=p(" and the permission for "),ue=s("b"),ue.textContent=nl,Ks=p(` is set to\r
						`),ve=s("b"),ve.textContent=ll,Xs=i(),Te=s("br"),Zs=i(),f=s("p"),jt=s("span"),jt.textContent=ol,tn=i(),Le=s("br"),en=p(`\r
						Under the `),he=s("b"),he.textContent=al,sn=p(` tab, ensure that the permission\r
						`),fe=s("b"),fe.textContent=rl,nn=p(" is set to "),pe=s("b"),pe.textContent=il,ln=i(),Ue=s("br"),on=p(`\r
						Under the `),me=s("b"),me.textContent=cl,an=p(` tab, the permissions to access\r
						`),xe=s("b"),xe.textContent=dl,rn=p(" for "),Ce=s("b"),Ce.textContent=ul,cn=p(` and\r
						`),be=s("b"),be.textContent=vl,dn=p(" is set to "),_e=s("b"),_e.textContent=hl,un=i(),Tl(ge.$$.fragment),We=i(),Bt=s("section"),ct=s("div"),Nt=s("h2"),Nt.textContent=fl,vn=i(),S=s("div"),dt=s("div"),qt=s("h5"),qt.textContent=pl,hn=i(),we=s("p"),we.textContent=ml,fn=i(),ut=s("div"),Ot=s("h5"),Ot.textContent=xl,pn=i(),ke=s("p"),ke.textContent=Cl,mn=i(),vt=s("div"),Mt=s("h5"),Mt.textContent=bl,xn=i(),Ie=s("p"),Ie.textContent=_l,Cn=i(),ht=s("div"),Gt=s("h5"),Gt.textContent=gl,bn=i(),Ee=s("p"),_n=p(`First, double check your spam folder. In rare cases it can take up to an hour to receive\r
					your email confirmation. If you still haven’t received your key within an hour, send an\r
					email to\r
					`),W=s("a"),W.textContent=wl,gn=i(),ft=s("div"),Ht=s("h5"),Ht.textContent=kl,wn=i(),ye=s("p"),kn=p(`All sales are final. However, Phoenix is constantly improving and any feedback on how it\r
					can be further improved is very much appreciated. Let us know your thoughts. Send an email\r
					to\r
					`),Y=s("a"),Y.textContent=Il,this.h()},l:function(C){Ll("svelte-1h7hrpw",document.head).forEach(a),v=c(C),h=n(C,"SECTION",{id:!0,class:!0});var yl=r(h);b=n(yl,"DIV",{class:!0});var $e=r(b);E=n($e,"DIV",{id:!0});var je=r(E);x=n(je,"H1",{class:!0,"data-svelte-h":!0}),d(x)!=="svelte-1355kmz"&&(x.textContent=w),y=c(je),D=n(je,"SPAN",{class:!0,"data-svelte-h":!0}),d(D)!=="svelte-13c76lz"&&(D.textContent=L),Q=c(je),u=n(je,"SPAN",{"data-svelte-h":!0}),d(u)!=="svelte-dql0fr"&&(u.textContent=O),je.forEach(a),Se=c($e),j=n($e,"DIV",{id:!0});var Je=r(j);M=n(Je,"DIV",{id:!0});var Qe=r(M);k=n(Qe,"SPAN",{class:!0,"data-svelte-h":!0}),d(k)!=="svelte-le60li"&&(k.textContent=Oe),Ct=c(Qe),P=n(Qe,"OL",{});var Rt=r(P);z=n(Rt,"LI",{});var Ge=r(z);De=m(Ge,"Download the "),B=n(Ge,"SPAN",{class:!0,"data-svelte-h":!0}),d(B)!=="svelte-m9ft0m"&&(B.textContent=G),A=m(Ge,` client\r
						`),N=n(Ge,"A",{class:!0,href:!0,"data-svelte-h":!0}),d(N)!=="svelte-8imq3"&&(N.textContent=Me),Ge.forEach(a),Ae=c(Rt),H=n(Rt,"LI",{});var Ke=r(H);xs=m(Ke,"Install and run "),bt=n(Ke,"SPAN",{class:!0,"data-svelte-h":!0}),d(bt)!=="svelte-m9ft0m"&&(bt.textContent=An),Cs=m(Ke,"."),Ke.forEach(a),bs=c(Rt),Ft=n(Rt,"LI",{"data-svelte-h":!0}),d(Ft)!=="svelte-1rgi9ry"&&(Ft.textContent=Vn),_s=c(Rt),U=n(Rt,"LI",{});var Be=r(U);gs=m(Be,"Install the "),_t=n(Be,"SPAN",{class:!0,"data-svelte-h":!0}),d(_t)!=="svelte-m9ft0m"&&(_t.textContent=jn),ws=c(Be),K=n(Be,"A",{class:!0,href:!0,"data-svelte-h":!0}),d(K)!=="svelte-14stg1q"&&(K.textContent=Bn),ks=m(Be,`\r
						for each browser you own.`),Be.forEach(a),Rt.forEach(a),Qe.forEach(a),Is=c(Je),gt=n(Je,"IMG",{class:!0,src:!0,alt:!0}),Je.forEach(a),$e.forEach(a),yl.forEach(a),He=c(C),X=n(C,"SECTION",{id:!0,class:!0});var Pl=r(X);Z=n(Pl,"DIV",{class:!0});var Xe=r(Z);wt=n(Xe,"SPAN",{class:!0,"data-svelte-h":!0}),d(wt)!=="svelte-gy0bg4"&&(wt.textContent=qn),Es=c(Xe),tt=n(Xe,"DIV",{id:!0});var Ze=r(tt);F=n(Ze,"DIV",{class:!0});var Ne=r(F);kt=n(Ne,"A",{href:!0,onclick:!0});var Sl=r(kt);et=n(Sl,"DIV",{class:!0});var ts=r(et);Tt=n(ts,"IMG",{src:!0,alt:!0}),ys=c(ts),Lt=n(ts,"SPAN",{"data-svelte-h":!0}),d(Lt)!=="svelte-1flrc5t"&&(Lt.textContent=Mn),ts.forEach(a),Sl.forEach(a),Ps=c(Ne),It=n(Ne,"A",{href:!0,onclick:!0});var Dl=r(It);st=n(Dl,"DIV",{class:!0});var es=r(st);Ut=n(es,"IMG",{src:!0,alt:!0}),Ss=c(es),Wt=n(es,"SPAN",{"data-svelte-h":!0}),d(Wt)!=="svelte-1q6vuu8"&&(Wt.textContent=Hn),es.forEach(a),Dl.forEach(a),Ds=c(Ne),Et=n(Ne,"A",{href:!0,onclick:!0});var Al=r(Et);nt=n(Al,"DIV",{class:!0});var ss=r(nt);Yt=n(ss,"IMG",{src:!0,alt:!0}),As=c(ss),$t=n(ss,"SPAN",{"data-svelte-h":!0}),d($t)!=="svelte-vm5ep7"&&($t.textContent=zn),ss.forEach(a),Al.forEach(a),Ne.forEach(a),Vs=c(Ze),T=n(Ze,"DIV",{class:!0});var qe=r(T);yt=n(qe,"A",{href:!0,onclick:!0});var Vl=r(yt);lt=n(Vl,"DIV",{class:!0});var ns=r(lt);Jt=n(ns,"IMG",{src:!0,alt:!0}),js=c(ns),Qt=n(ns,"SPAN",{"data-svelte-h":!0}),d(Qt)!=="svelte-mut4nw"&&(Qt.textContent=Tn),ns.forEach(a),Vl.forEach(a),Bs=c(qe),Pt=n(qe,"A",{href:!0,onclick:!0});var jl=r(Pt);ot=n(jl,"DIV",{class:!0});var ls=r(ot);Kt=n(ls,"IMG",{src:!0,alt:!0}),Ns=c(ls),Xt=n(ls,"SPAN",{"data-svelte-h":!0}),d(Xt)!=="svelte-6sz5hj"&&(Xt.textContent=Un),ls.forEach(a),jl.forEach(a),qs=c(qe),St=n(qe,"A",{href:!0,onclick:!0});var Bl=r(St);at=n(Bl,"DIV",{class:!0});var os=r(at);Zt=n(os,"IMG",{src:!0,alt:!0}),Os=c(os),te=n(os,"SPAN",{"data-svelte-h":!0}),d(te)!=="svelte-hwd8mf"&&(te.textContent=Yn),os.forEach(a),Bl.forEach(a),qe.forEach(a),Ze.forEach(a),Xe.forEach(a),Pl.forEach(a),Re=c(C),rt=n(C,"SECTION",{id:!0,class:!0});var Nl=r(rt);ee=n(Nl,"DIV",{class:!0});var ql=r(ee);it=n(ql,"DIV",{id:!0});var as=r(it);Dt=n(as,"DIV",{});var rs=r(Dt);R=n(rs,"DIV",{class:!0});var zt=r(R);se=n(zt,"SPAN",{"data-svelte-h":!0}),d(se)!=="svelte-1vqt0fz"&&(se.textContent=$n),Ms=c(zt),ne=n(zt,"H4",{"data-svelte-h":!0}),d(ne)!=="svelte-hch6md"&&(ne.textContent=Jn),Gs=c(zt),le=n(zt,"P",{});var In=r(le);Hs=m(In,"Follow the links above to install the Phoenix browser extension on "),oe=n(In,"B",{"data-svelte-h":!0}),d(oe)!=="svelte-1i6udf"&&(oe.textContent=Qn),In.forEach(a),Rs=c(zt),At=n(zt,"P",{});var is=r(At);zs=m(is,`Chrome, Edge, Opera, Brave, and Vivaldi\r
						`),ae=n(is,"B",{"data-svelte-h":!0}),d(ae)!=="svelte-1jt7hut"&&(ae.textContent=Kn),Fs=m(is," to install browser extensions."),is.forEach(a),zt.forEach(a),Ts=c(rs),V=n(rs,"DIV",{class:!0});var $=r(V);re=n($,"SPAN",{"data-svelte-h":!0}),d(re)!=="svelte-nwr0li"&&(re.textContent=Xn),Ls=c($),ie=n($,"H4",{"data-svelte-h":!0}),d(ie)!=="svelte-r6w18q"&&(ie.textContent=Zn),Us=c($),I=n($,"P",{});var q=r(I);ze=n(q,"BR",{}),Ws=c(q),Vt=n(q,"SPAN",{class:!0,"data-svelte-h":!0}),d(Vt)!=="svelte-n84hgw"&&(Vt.textContent=tl),Ys=m(q,`\r
						(Chrome, Edge, Brave, Vivaldi, Opera)\r
						`),Fe=n(q,"BR",{}),$s=m(q,`\r
						Ensure that the permission `),ce=n(q,"B",{"data-svelte-h":!0}),d(ce)!=="svelte-1fe5pzq"&&(ce.textContent=el),Js=m(q,` is set to\r
						`),de=n(q,"B",{"data-svelte-h":!0}),d(de)!=="svelte-1gfsr8f"&&(de.textContent=sl),Qs=m(q," and the permission for "),ue=n(q,"B",{"data-svelte-h":!0}),d(ue)!=="svelte-2k0fjj"&&(ue.textContent=nl),Ks=m(q,` is set to\r
						`),ve=n(q,"B",{"data-svelte-h":!0}),d(ve)!=="svelte-6b1fro"&&(ve.textContent=ll),q.forEach(a),Xs=c($),Te=n($,"BR",{}),Zs=c($),f=n($,"P",{});var _=r(f);jt=n(_,"SPAN",{class:!0,"data-svelte-h":!0}),d(jt)!=="svelte-efclra"&&(jt.textContent=ol),tn=c(_),Le=n(_,"BR",{}),en=m(_,`\r
						Under the `),he=n(_,"B",{"data-svelte-h":!0}),d(he)!=="svelte-11b322u"&&(he.textContent=al),sn=m(_,` tab, ensure that the permission\r
						`),fe=n(_,"B",{"data-svelte-h":!0}),d(fe)!=="svelte-oddqha"&&(fe.textContent=rl),nn=m(_," is set to "),pe=n(_,"B",{"data-svelte-h":!0}),d(pe)!=="svelte-1k58iin"&&(pe.textContent=il),ln=c(_),Ue=n(_,"BR",{}),on=m(_,`\r
						Under the `),me=n(_,"B",{"data-svelte-h":!0}),d(me)!=="svelte-70w0d0"&&(me.textContent=cl),an=m(_,` tab, the permissions to access\r
						`),xe=n(_,"B",{"data-svelte-h":!0}),d(xe)!=="svelte-9cofpt"&&(xe.textContent=dl),rn=m(_," for "),Ce=n(_,"B",{"data-svelte-h":!0}),d(Ce)!=="svelte-hd6qd5"&&(Ce.textContent=ul),cn=m(_,` and\r
						`),be=n(_,"B",{"data-svelte-h":!0}),d(be)!=="svelte-106g6qm"&&(be.textContent=vl),dn=m(_," is set to "),_e=n(_,"B",{"data-svelte-h":!0}),d(_e)!=="svelte-1gfsr8f"&&(_e.textContent=hl),_.forEach(a),$.forEach(a),rs.forEach(a),un=c(as),Ul(ge.$$.fragment,as),as.forEach(a),ql.forEach(a),Nl.forEach(a),We=c(C),Bt=n(C,"SECTION",{class:!0});var Ol=r(Bt);ct=n(Ol,"DIV",{class:!0});var cs=r(ct);Nt=n(cs,"H2",{class:!0,"data-svelte-h":!0}),d(Nt)!=="svelte-1joy36d"&&(Nt.textContent=fl),vn=c(cs),S=n(cs,"DIV",{id:!0,class:!0});var J=r(S);dt=n(J,"DIV",{class:!0});var ds=r(dt);qt=n(ds,"H5",{class:!0,"data-svelte-h":!0}),d(qt)!=="svelte-q1okzm"&&(qt.textContent=pl),hn=c(ds),we=n(ds,"P",{"data-svelte-h":!0}),d(we)!=="svelte-mdwkxm"&&(we.textContent=ml),ds.forEach(a),fn=c(J),ut=n(J,"DIV",{class:!0});var us=r(ut);Ot=n(us,"H5",{class:!0,"data-svelte-h":!0}),d(Ot)!=="svelte-1cdz6sa"&&(Ot.textContent=xl),pn=c(us),ke=n(us,"P",{"data-svelte-h":!0}),d(ke)!=="svelte-29nmji"&&(ke.textContent=Cl),us.forEach(a),mn=c(J),vt=n(J,"DIV",{class:!0});var vs=r(vt);Mt=n(vs,"H5",{class:!0,"data-svelte-h":!0}),d(Mt)!=="svelte-3hw6ul"&&(Mt.textContent=bl),xn=c(vs),Ie=n(vs,"P",{"data-svelte-h":!0}),d(Ie)!=="svelte-ylsw7w"&&(Ie.textContent=_l),vs.forEach(a),Cn=c(J),ht=n(J,"DIV",{class:!0});var hs=r(ht);Gt=n(hs,"H5",{class:!0,"data-svelte-h":!0}),d(Gt)!=="svelte-jy2yrx"&&(Gt.textContent=gl),bn=c(hs),Ee=n(hs,"P",{});var En=r(Ee);_n=m(En,`First, double check your spam folder. In rare cases it can take up to an hour to receive\r
					your email confirmation. If you still haven’t received your key within an hour, send an\r
					email to\r
					`),W=n(En,"A",{class:!0,target:!0,href:!0,"data-svelte-h":!0}),d(W)!=="svelte-lb8xlc"&&(W.textContent=wl),En.forEach(a),hs.forEach(a),gn=c(J),ft=n(J,"DIV",{class:!0});var fs=r(ft);Ht=n(fs,"H5",{class:!0,"data-svelte-h":!0}),d(Ht)!=="svelte-1irbgpd"&&(Ht.textContent=kl),wn=c(fs),ye=n(fs,"P",{});var yn=r(ye);kn=m(yn,`All sales are final. However, Phoenix is constantly improving and any feedback on how it\r
					can be further improved is very much appreciated. Let us know your thoughts. Send an email\r
					to\r
					`),Y=n(yn,"A",{class:!0,target:!0,href:!0,"data-svelte-h":!0}),d(Y)!=="svelte-157wmui"&&(Y.textContent=Il),yn.forEach(a),fs.forEach(a),J.forEach(a),cs.forEach(a),Ol.forEach(a),this.h()},h:function(){document.title="Phoenix | Success!",o(x,"class",""),e(x,l,15,3,366),o(D,"class","section-subtext"),e(D,l,16,3,397),e(u,l,17,3,467),o(E,"id","success-cancel-page-header"),e(E,l,14,2,324),o(k,"class","list-header"),e(k,l,21,4,645),o(B,"class","phoenix-accent"),e(B,l,24,19,767),o(N,"class","link-underlined"),o(N,"href","ms-windows-store://pdp?hl=en-us&gl=us&productid=9N5D4DRVSJWJ&mode=mini&pos=3832%2C711%2C2576%2C1456&referrer=storeforweb"),e(N,l,25,6,825),e(z,l,23,5,742),o(bt,"class","phoenix-accent"),e(bt,l,32,22,1069),e(H,l,31,5,1041),e(Ft,l,34,5,1132),o(_t,"class","phoenix-accent"),e(_t,l,36,18,1217),o(K,"class","link-underlined"),o(K,"href","#browser-extension-links"),e(K,l,37,6,1268),e(U,l,35,5,1193),e(P,l,22,4,731),o(M,"id","activation-instructions"),e(M,l,20,3,605),o(gt,"class","activation-img"),xt(gt.src,Nn="./images/activation.jpg")||o(gt,"src",Nn),o(gt,"alt","phoenix activation"),e(gt,l,42,3,1420),o(j,"id","success-page-instructions-wrapper"),e(j,l,19,2,556),o(b,"class","section-wrapper flex-col"),e(b,l,13,1,282),o(h,"id",""),o(h,"class","section-a"),e(h,l,12,0,246),o(wt,"class","section-subheading"),e(wt,l,49,2,1641),xt(Tt.src,On="./images/firefox-logo.svg")||o(Tt,"src",On),o(Tt,"alt",""),e(Tt,l,59,6,2105),e(Lt,l,60,6,2159),o(et,"class","browser-link-wrapper"),e(et,l,58,5,2063),o(kt,"href","#"),o(kt,"onclick","window.open('https://addons.mozilla.org/en-US/firefox/addon/phoenix-blocker', '_blank', 'location=no,height=275,width=962,scrollbars=yes,status=no'); return false;"),e(kt,l,54,4,1852),xt(Ut.src,Gn="./images/chrome-logo.svg")||o(Ut,"src",Gn),o(Ut,"alt",""),e(Ut,l,68,6,2489),e(Wt,l,69,6,2542),o(st,"class","browser-link-wrapper"),e(st,l,67,5,2447),o(It,"href","#"),o(It,"onclick","window.open('https://chrome.google.com/webstore/detail/phoenix-blocker/hpjjnppmoneeehooommkicnbelklahlg', '_blank', 'location=no,height=275,width=962,scrollbars=yes,status=no'); return false;"),e(It,l,63,4,2208),xt(Yt.src,Rn="./images/opera-logo.svg")||o(Yt,"src",Rn),o(Yt,"alt",""),e(Yt,l,77,6,2871),e($t,l,78,6,2923),o(nt,"class","browser-link-wrapper"),e(nt,l,76,5,2829),o(Et,"href","#"),o(Et,"onclick","window.open('https://chrome.google.com/webstore/detail/phoenix-blocker/hpjjnppmoneeehooommkicnbelklahlg', '_blank', 'location=no,height=275,width=962,scrollbars=yes,status=no'); return false;"),e(Et,l,72,4,2590),o(F,"class","browser-link-group"),e(F,l,53,3,1814),xt(Jt.src,Fn="./images/brave-logo.svg")||o(Jt,"src",Fn),o(Jt,"alt",""),e(Jt,l,89,6,3301),e(Qt,l,90,6,3353),o(lt,"class","browser-link-wrapper"),e(lt,l,88,5,3259),o(yt,"href","#"),o(yt,"onclick","window.open('https://chrome.google.com/webstore/detail/phoenix-blocker/hpjjnppmoneeehooommkicnbelklahlg', '_blank', 'location=no,height=275,width=962,scrollbars=yes,status=no'); return false;"),e(yt,l,84,4,3020),xt(Kt.src,Ln="./images/edge-logo.svg")||o(Kt,"src",Ln),o(Kt,"alt",""),e(Kt,l,98,6,3681),e(Xt,l,99,6,3732),o(ot,"class","browser-link-wrapper"),e(ot,l,97,5,3639),o(Pt,"href","#"),o(Pt,"onclick","window.open('https://chrome.google.com/webstore/detail/phoenix-blocker/hpjjnppmoneeehooommkicnbelklahlg', '_blank', 'location=no,height=275,width=962,scrollbars=yes,status=no'); return false;"),e(Pt,l,93,4,3400),xt(Zt.src,Wn="./images/vivaldi-logo.svg")||o(Zt,"src",Wn),o(Zt,"alt",""),e(Zt,l,107,6,4059),e(te,l,108,6,4113),o(at,"class","browser-link-wrapper"),e(at,l,106,5,4017),o(St,"href","#"),o(St,"onclick","window.open('https://chrome.google.com/webstore/detail/phoenix-blocker/hpjjnppmoneeehooommkicnbelklahlg', '_blank', 'location=no,height=275,width=962,scrollbars=yes,status=no'); return false;"),e(St,l,102,4,3778),o(T,"class","browser-link-group"),e(T,l,83,3,2982),o(tt,"id","browser-links-wrapper"),e(tt,l,52,2,1777),o(Z,"class","section-wrapper flex-col"),e(Z,l,48,1,1599),o(X,"id","browser-extension-links"),o(X,"class","section-b"),e(X,l,47,0,1540),e(se,l,121,5,4400),e(ne,l,122,5,4426),e(oe,l,124,73,4546),e(le,l,123,5,4468),e(ae,l,130,6,4668),e(At,l,128,5,4610),o(R,"class","content-wrapper"),e(R,l,120,4,4364),e(re,l,134,5,4813),e(ie,l,135,5,4839),e(ze,l,137,6,4900),o(Vt,"class","phoenix-accent"),e(Vt,l,138,6,4914),e(Fe,l,140,6,5022),e(ce,l,141,33,5063),e(de,l,142,6,5106),e(ue,l,142,39,5139),e(ve,l,143,6,5175),e(I,l,136,5,4889),e(Te,l,145,5,5213),o(jt,"class","phoenix-accent"),e(jt,l,147,6,5237),e(Le,l,147,59,5290),e(he,l,148,16,5314),e(fe,l,149,6,5368),e(pe,l,149,46,5408),e(Ue,l,150,6,5429),e(me,l,151,16,5453),e(xe,l,152,6,5510),e(Ce,l,152,27,5531),e(be,l,153,6,5562),e(_e,l,153,35,5591),e(f,l,146,5,5226),o(V,"class","content-wrapper-desktop"),e(V,l,133,4,4769),e(Dt,l,119,3,4353),o(it,"id","browser-extension-permissions-wrapper"),e(it,l,118,2,4300),o(ee,"class","section-wrapper"),e(ee,l,117,1,4267),o(rt,"id","browser-extension-permissions"),o(rt,"class","section-a"),e(rt,l,116,0,4202),o(Nt,"class","section-heading"),e(Nt,l,165,2,5760),o(qt,"class","faq-item-header"),e(qt,l,168,4,5862),e(we,l,169,4,5960),o(dt,"class","faq-item"),e(dt,l,167,3,5834),o(Ot,"class","faq-item-header"),e(Ot,l,175,4,6193),e(ke,l,176,4,6280),o(ut,"class","faq-item"),e(ut,l,174,3,6165),o(Mt,"class","faq-item-header"),e(Mt,l,182,4,6498),e(Ie,l,183,4,6558),o(vt,"class","faq-item"),e(vt,l,181,3,6470),o(Gt,"class","faq-item-header"),e(Gt,l,186,4,6691),o(W,"class","link-underlined"),o(W,"target","_blank"),o(W,"href","mailto:support@phoenixblocker.com"),e(W,l,191,5,6999),e(Ee,l,187,4,6785),o(ht,"class","faq-item"),e(ht,l,185,3,6663),o(Ht,"class","faq-item-header"),e(Ht,l,197,4,7182),o(Y,"class","link-underlined"),o(Y,"target","_blank"),o(Y,"href","mailto:feedback@phoenixblocker.com"),e(Y,l,202,5,7482),e(ye,l,198,4,7271),o(ft,"class","faq-item"),e(ft,l,196,3,7154),o(S,"id","faq-items"),o(S,"class",""),e(S,l,166,2,5800),o(ct,"class","section-wrapper flex-col"),e(ct,l,164,1,5718),o(Bt,"class","section-b"),e(Bt,l,163,0,5688)},m:function(C,pt){mt(C,v,pt),mt(C,h,pt),t(h,b),t(b,E),t(E,x),t(E,y),t(E,D),t(E,Q),t(E,u),t(b,Se),t(b,j),t(j,M),t(M,k),t(M,Ct),t(M,P),t(P,z),t(z,De),t(z,B),t(z,A),t(z,N),t(P,Ae),t(P,H),t(H,xs),t(H,bt),t(H,Cs),t(P,bs),t(P,Ft),t(P,_s),t(P,U),t(U,gs),t(U,_t),t(U,ws),t(U,K),t(U,ks),t(j,Is),t(j,gt),mt(C,He,pt),mt(C,X,pt),t(X,Z),t(Z,wt),t(Z,Es),t(Z,tt),t(tt,F),t(F,kt),t(kt,et),t(et,Tt),t(et,ys),t(et,Lt),t(F,Ps),t(F,It),t(It,st),t(st,Ut),t(st,Ss),t(st,Wt),t(F,Ds),t(F,Et),t(Et,nt),t(nt,Yt),t(nt,As),t(nt,$t),t(tt,Vs),t(tt,T),t(T,yt),t(yt,lt),t(lt,Jt),t(lt,js),t(lt,Qt),t(T,Bs),t(T,Pt),t(Pt,ot),t(ot,Kt),t(ot,Ns),t(ot,Xt),t(T,qs),t(T,St),t(St,at),t(at,Zt),t(at,Os),t(at,te),mt(C,Re,pt),mt(C,rt,pt),t(rt,ee),t(ee,it),t(it,Dt),t(Dt,R),t(R,se),t(R,Ms),t(R,ne),t(R,Gs),t(R,le),t(le,Hs),t(le,oe),t(R,Rs),t(R,At),t(At,zs),t(At,ae),t(At,Fs),t(Dt,Ts),t(Dt,V),t(V,re),t(V,Ls),t(V,ie),t(V,Us),t(V,I),t(I,ze),t(I,Ws),t(I,Vt),t(I,Ys),t(I,Fe),t(I,$s),t(I,ce),t(I,Js),t(I,de),t(I,Qs),t(I,ue),t(I,Ks),t(I,ve),t(V,Xs),t(V,Te),t(V,Zs),t(V,f),t(f,jt),t(f,tn),t(f,Le),t(f,en),t(f,he),t(f,sn),t(f,fe),t(f,nn),t(f,pe),t(f,ln),t(f,Ue),t(f,on),t(f,me),t(f,an),t(f,xe),t(f,rn),t(f,Ce),t(f,cn),t(f,be),t(f,dn),t(f,_e),t(it,un),Wl(ge,it,null),mt(C,We,pt),mt(C,Bt,pt),t(Bt,ct),t(ct,Nt),t(ct,vn),t(ct,S),t(S,dt),t(dt,qt),t(dt,hn),t(dt,we),t(S,fn),t(S,ut),t(ut,Ot),t(ut,pn),t(ut,ke),t(S,mn),t(S,vt),t(vt,Mt),t(vt,xn),t(vt,Ie),t(S,Cn),t(S,ht),t(ht,Gt),t(ht,bn),t(ht,Ee),t(Ee,_n),t(Ee,W),t(S,gn),t(S,ft),t(ft,Ht),t(ft,wn),t(ft,ye),t(ye,kn),t(ye,Y),Ye=!0},p:Pn,i:function(C){Ye||(Yl(ge.$$.fragment,C),Ye=!0)},o:function(C){$l(ge.$$.fragment,C),Ye=!1},d:function(C){C&&(a(v),a(h),a(He),a(X),a(Re),a(rt),a(We),a(Bt)),Jl(ge)}};return ms("SvelteRegisterBlock",{block:El,id:Dn.name,type:"component",source:"",ctx:g}),El}function Kl(g,v,h){let{$$slots:b={},$$scope:E}=v;Rl("Page",b,[]);const x=[];return Object.keys(v).forEach(w=>{!~x.indexOf(w)&&w.slice(0,2)!=="$$"&&w!=="slot"&&console.warn(`<Page> was created with unknown prop '${w}'`)}),g.$capture_state=()=>({Carousel:zl}),[]}class to extends Gl{constructor(v){super(v),Hl(this,v,Kl,Dn,Ml,{}),ms("SvelteRegisterComponent",{component:this,tagName:"Page",options:v,id:Dn.name})}}export{to as component};
