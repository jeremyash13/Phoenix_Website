import{_ as Se}from"../chunks/preload-helper.a4192956.js";import{H as Ie}from"../chunks/control.f5b05b5f.js";import{s as Oe,d as m}from"../chunks/scheduler.9cb9ad55.js";import{S as Re,i as Ce,d as ge,D as ke,h as Te,v as He,j as u,s as K,o as W,u as Pe,C as Ve,k as d,g as i,c as Q,l as P,p as X,w as qe,m as t,A as r,a as de,x as Ae,q as pe,t as $e,b as Ne,f as Me,E as Ue,y as je,r as Be}from"../chunks/index.55452aca.js";import{f as he}from"../chunks/utils.ce1577a1.js";const Le=(e,n)=>{const s=e[n];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((v,w)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(w.bind(null,new Error("Unknown variable dynamic import: "+n)))})};function ze(e,n){if(isNaN(e)||e<400||e>599)throw new Error(`HTTP error status codes must be between 400 and 599 — ${e} is invalid`);return new Ie(e,n)}new TextEncoder;const Ge=async({params:e})=>{try{const n=await Le(Object.assign({"../../../../posts/dopamines-role-in-motivation-and-pleasure.md":()=>Se(()=>import("../chunks/dopamines-role-in-motivation-and-pleasure.9a59e672.js").then(s=>s._),["..\\chunks\\dopamines-role-in-motivation-and-pleasure.9a59e672.js","..\\chunks\\scheduler.9cb9ad55.js","..\\chunks\\index.55452aca.js"],import.meta.url)}),`../../../../posts/${e.slug}.md`);return{content:n.default,meta:n.metadata,slug:e.slug}}catch{throw ze(404,`Could not find ${e.slug}`)}},Ye=Object.freeze(Object.defineProperty({__proto__:null,load:Ge},Symbol.toStringTag,{value:"Module"})),p="C:/Users/jerem/Documents/webdev/phoenix-ssg-website/src/routes/blog/posts/[slug]/+page.svelte";function De(e,n,s){const v=e.slice();return v[1]=n[s],v}function _e(e){let n,s,v=e[1]+"",w,_;const T={c:function(){n=u("a"),s=W("#"),w=W(v),_=K(),this.h()},l:function(y){n=d(y,"A",{class:!0,href:!0});var f=P(n);s=X(f,"#"),w=X(f,v),_=Q(f),f.forEach(i),this.h()},h:function(){t(n,"class","blog-category-tag"),t(n,"href","#"),m(n,p,37,5,1447)},m:function(y,f){de(y,n,f),r(n,s),r(n,w),r(n,_)},p:function(y,f){f&1&&v!==(v=y[1]+"")&&pe(w,v)},d:function(y){y&&i(n)}};return ge("SvelteRegisterBlock",{block:T,id:_e.name,type:"each",source:"(37:4) {#each data.meta.categories as category}",ctx:e}),T}function fe(e){let n,s,v,w,_,T,c,y,f,Y,A,Z,R,C,H,V,$,x,M,ee,j,te,ne,D,q,k,S,U,G=e[0].meta.title+"",oe,ie,N,ce,F=he(e[0].meta.date)+"",ae,se,I,le,O,h,b;document.title=n=e[0].meta.title;let B=ke(e[0].meta.categories),g=[];for(let E=0;E<B.length;E+=1)g[E]=_e(De(e,B,E));var L=e[0].content;function ve(E,o){return{$$inline:!0}}L&&(h=Te(L,ve()));const we={c:function(){s=u("meta"),w=u("meta"),_=u("meta"),c=u("meta"),f=u("meta"),A=u("meta"),R=u("meta"),C=u("meta"),H=u("meta"),V=u("meta"),$=u("meta"),M=u("meta"),j=u("meta"),ne=K(),D=u("div"),q=u("div"),k=u("article"),S=u("hgroup"),U=u("h2"),oe=W(G),ie=K(),N=u("span"),ce=W("Published on "),ae=W(F),se=K(),I=u("div");for(let o=0;o<g.length;o+=1)g[o].c();le=K(),O=u("div"),h&&Pe(h.$$.fragment),this.h()},l:function(o){const a=Ve("svelte-m2bpdu",document.head);s=d(a,"META",{name:!0,content:!0}),w=d(a,"META",{property:!0,content:!0}),_=d(a,"META",{property:!0,content:!0}),c=d(a,"META",{property:!0,content:!0}),f=d(a,"META",{property:!0,content:!0}),A=d(a,"META",{property:!0,content:!0}),R=d(a,"META",{property:!0,content:!0}),C=d(a,"META",{name:!0,content:!0}),H=d(a,"META",{property:!0,content:!0}),V=d(a,"META",{property:!0,content:!0}),$=d(a,"META",{name:!0,content:!0}),M=d(a,"META",{name:!0,content:!0}),j=d(a,"META",{name:!0,content:!0}),a.forEach(i),ne=Q(o),D=d(o,"DIV",{id:!0});var l=P(D);q=d(l,"DIV",{id:!0});var J=P(q);k=d(J,"ARTICLE",{class:!0});var z=P(k);S=d(z,"HGROUP",{});var re=P(S);U=d(re,"H2",{});var be=P(U);oe=X(be,G),be.forEach(i),ie=Q(re),N=d(re,"SPAN",{});var me=P(N);ce=X(me,"Published on "),ae=X(me,F),me.forEach(i),re.forEach(i),se=Q(z),I=d(z,"DIV",{class:!0});var Ee=P(I);for(let ue=0;ue<g.length;ue+=1)g[ue].l(Ee);Ee.forEach(i),le=Q(z),O=d(z,"DIV",{class:!0});var ye=P(O);h&&qe(h.$$.fragment,ye),ye.forEach(i),z.forEach(i),J.forEach(i),l.forEach(i),this.h()},h:function(){t(s,"name","description"),t(s,"content",v=e[0].meta.description),m(s,p,7,1,149),t(w,"property","og:type"),t(w,"content","article"),m(w,p,9,1,213),t(_,"property","og:title"),t(_,"content",T=e[0].meta.title),m(_,p,10,1,261),t(c,"property","og:description"),t(c,"content",y=e[0].meta.description),m(c,p,11,1,318),t(f,"property","og:image"),t(f,"content",Y=`https://www.phoenixblocker.com${e[0].meta.image}`),m(f,p,12,1,387),t(A,"property","og:url"),t(A,"content",Z=`https://www.phoenixblocker.com/blog/posts/${e[0].slug}`),m(A,p,13,1,479),t(R,"property","og:site_name"),t(R,"content","phoenixblocker.com"),m(R,p,14,1,575),t(C,"name","twitter:card"),t(C,"content","summary_large_image"),m(C,p,16,1,641),t(H,"property","twitter:domain"),t(H,"content","phoenixblocker.com"),m(H,p,17,1,702),t(V,"property","twitter:url"),t(V,"content","https://www.phoenixblocker.com/blog/posts/dopamines-role-in-motivation-and-pleasure"),m(V,p,18,1,768),t($,"name","twitter:title"),t($,"content",x=e[0].meta.title),m($,p,22,1,904),t(M,"name","twitter:description"),t(M,"content",ee=e[0].meta.description),m(M,p,23,1,962),t(j,"name","twitter:image"),t(j,"content",te=`https://www.phoenixblocker.com${e[0].meta.image}`),m(j,p,24,1,1032),m(U,p,31,4,1247),m(N,p,32,4,1279),m(S,p,30,3,1233),t(I,"class","blog-category-tags-wrapper"),m(I,p,35,3,1354),t(O,"class","prose"),m(O,p,45,3,1658),t(k,"class",""),m(k,p,29,2,1210),t(q,"id","blog-post-wrapper"),m(q,p,28,1,1178),t(D,"id","blog-post-page-wrapper"),m(D,p,27,0,1142)},m:function(o,a){r(document.head,s),r(document.head,w),r(document.head,_),r(document.head,c),r(document.head,f),r(document.head,A),r(document.head,R),r(document.head,C),r(document.head,H),r(document.head,V),r(document.head,$),r(document.head,M),r(document.head,j),de(o,ne,a),de(o,D,a),r(D,q),r(q,k),r(k,S),r(S,U),r(U,oe),r(S,ie),r(S,N),r(N,ce),r(N,ae),r(k,se),r(k,I);for(let l=0;l<g.length;l+=1)g[l]&&g[l].m(I,null);r(k,le),r(k,O),h&&Ae(h,O,null),b=!0},p:function(o,[a]){if((!b||a&1)&&n!==(n=o[0].meta.title)&&(document.title=n),(!b||a&1&&v!==(v=o[0].meta.description))&&t(s,"content",v),(!b||a&1&&T!==(T=o[0].meta.title))&&t(_,"content",T),(!b||a&1&&y!==(y=o[0].meta.description))&&t(c,"content",y),(!b||a&1&&Y!==(Y=`https://www.phoenixblocker.com${o[0].meta.image}`))&&t(f,"content",Y),(!b||a&1&&Z!==(Z=`https://www.phoenixblocker.com/blog/posts/${o[0].slug}`))&&t(A,"content",Z),(!b||a&1&&x!==(x=o[0].meta.title))&&t($,"content",x),(!b||a&1&&ee!==(ee=o[0].meta.description))&&t(M,"content",ee),(!b||a&1&&te!==(te=`https://www.phoenixblocker.com${o[0].meta.image}`))&&t(j,"content",te),(!b||a&1)&&G!==(G=o[0].meta.title+"")&&pe(oe,G),(!b||a&1)&&F!==(F=he(o[0].meta.date)+"")&&pe(ae,F),a&1){B=ke(o[0].meta.categories);let l;for(l=0;l<B.length;l+=1){const J=De(o,B,l);g[l]?g[l].p(J,a):(g[l]=_e(J),g[l].c(),g[l].m(I,null))}for(;l<g.length;l+=1)g[l].d(1);g.length=B.length}if(a&1&&L!==(L=o[0].content)){if(h){Be();const l=h;$e(l.$$.fragment,1,0,()=>{je(l,1)}),Ne()}L?(h=Te(L,ve()),Pe(h.$$.fragment),Me(h.$$.fragment,1),Ae(h,O,null)):h=null}},i:function(o){b||(h&&Me(h.$$.fragment,o),b=!0)},o:function(o){h&&$e(h.$$.fragment,o),b=!1},d:function(o){o&&(i(ne),i(D)),i(s),i(w),i(_),i(c),i(f),i(A),i(R),i(C),i(H),i(V),i($),i(M),i(j),Ue(g,o),h&&je(h)}};return ge("SvelteRegisterBlock",{block:we,id:fe.name,type:"component",source:"",ctx:e}),we}function Fe(e,n,s){let{$$slots:v={},$$scope:w}=n;He("Page",v,[]);let{data:_}=n;e.$$.on_mount.push(function(){_===void 0&&!("data"in n||e.$$.bound[e.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const T=["data"];return Object.keys(n).forEach(c=>{!~T.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<Page> was created with unknown prop '${c}'`)}),e.$$set=c=>{"data"in c&&s(0,_=c.data)},e.$capture_state=()=>({formatDate:he,data:_}),e.$inject_state=c=>{"data"in c&&s(0,_=c.data)},n&&"$$inject"in n&&e.$inject_state(n.$$inject),[_]}class Ze extends Re{constructor(n){super(n),Ce(this,n,Fe,fe,Oe,{data:0}),ge("SvelteRegisterComponent",{component:this,tagName:"Page",options:n,id:fe.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(n){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Ze as component,Ye as universal};
