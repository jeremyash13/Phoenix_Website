import{s as j,d as _,n as f}from"./scheduler.ec44ca74.js";import{S as P,i as R,d as C,v as D,j as h,o as F,s as x,H as O,k as v,l as $,p as q,g as c,c as y,z,F as A,m as B,a as i,A as N}from"./index.239858a2.js";const g="C:/Users/jerem/Documents/webdev/phoenix-ssg-website/src/posts/second-post.md";function k(p){let t,r,l,s,d="Hello Friends!",a,n,u,E=`<code class="language-ts"><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`;const S={c:function(){t=h("h3"),r=F(w),l=x(),s=h("p"),s.textContent=d,a=x(),n=h("pre"),u=new O(!1),this.h()},l:function(e){t=v(e,"H3",{});var o=$(t);r=q(o,w),o.forEach(c),l=y(e),s=v(e,"P",{"data-svelte-h":!0}),z(s)!=="svelte-1b12nrg"&&(s.textContent=d),a=y(e),n=v(e,"PRE",{class:!0});var b=$(n);u=A(b,!1),b.forEach(c),this.h()},h:function(){_(t,g,5,0,271),_(s,g,6,0,288),u.a=null,B(n,"class","language-ts"),_(n,g,7,0,310)},m:function(e,o){i(e,t,o),N(t,r),i(e,l,o),i(e,s,o),i(e,a,o),i(e,n,o),u.m(E,n)},p:f,i:f,o:f,d:function(e){e&&(c(t),c(l),c(s),c(a),c(n))}};return C("SvelteRegisterBlock",{block:S,id:k.name,type:"component",source:"",ctx:p}),S}const H={title:"Second Post",description:"Second post description.",date:"2023-4-25",categories:["sveltekit","svelte"],published:!0},{title:w,description:T,date:U,categories:G,published:I}=H;function J(p,t,r){let{$$slots:l={},$$scope:s}=t;D("Second_post",l,[]);const d=[];return Object.keys(t).forEach(a=>{!~d.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Second_post> was created with unknown prop '${a}'`)}),p.$capture_state=()=>({metadata:H,title:w,description:T,date:U,categories:G,published:I}),[]}class M extends P{constructor(t){super(t),R(this,t,J,k,j,{}),C("SvelteRegisterComponent",{component:this,tagName:"Second_post",options:t,id:k.name})}}export{M as default,H as metadata};
