import{_ as t,a as n,b as s,c as o,i as r,s as a,d as e,S as c,e as f,t as u,h as i,j as h,l,k as p,m as g,o as v,p as m,A as d,g as b,n as j,I as E}from"./chunk.7db77ccd.js";function k(t,n,s){var o=Object.create(t);return o.post=n[s],o}function x(t){var n,s,o,r,a=t.post.title;return{c:function(){n=f("li"),s=f("a"),o=u(a),this.h()},l:function(t){n=i(t,"LI",{},!1);var r=h(n);s=i(r,"A",{rel:!0,href:!0},!1);var e=h(s);o=l(e,a),e.forEach(p),r.forEach(p),this.h()},h:function(){g(s,"rel","prefetch"),g(s,"href",r="blog/"+t.post.slug)},m:function(t,r){v(t,n,r),m(n,s),m(s,o)},p:function(t,n){t.posts&&a!==(a=n.post.title)&&d(o,a),t.posts&&r!==(r="blog/"+n.post.slug)&&g(s,"href",r)},d:function(t){t&&p(n)}}}function A(t){for(var n,s,o,r,a,e=t.posts,c=[],d=0;d<e.length;d+=1)c[d]=x(k(t,e,d));return{c:function(){n=b(),s=f("h1"),o=u("Recent posts"),r=b(),a=f("ul");for(var t=0;t<c.length;t+=1)c[t].c();this.h()},l:function(t){n=l(t,"\n\n"),s=i(t,"H1",{},!1);var e=h(s);o=l(e,"Recent posts"),e.forEach(p),r=l(t,"\n\n"),a=i(t,"UL",{class:!0},!1);for(var f=h(a),u=0;u<c.length;u+=1)c[u].l(f);f.forEach(p),this.h()},h:function(){document.title="Blog",g(a,"class","svelte-1frg2tf")},m:function(t,e){v(t,n,e),v(t,s,e),m(s,o),v(t,r,e),v(t,a,e);for(var f=0;f<c.length;f+=1)c[f].m(a,null)},p:function(t,n){if(t.posts){e=n.posts;for(var s=0;s<e.length;s+=1){var o=k(n,e,s);c[s]?c[s].p(t,o):(c[s]=x(o),c[s].c(),c[s].m(a,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=e.length}},i:j,o:j,d:function(t){t&&(p(n),p(s),p(r),p(a)),E(c,t)}}}function I(t){t.params,t.query;return this.fetch("blog.json").then(function(t){return t.json()}).then(function(t){return{posts:t}})}function L(t,n,s){var o=n.posts;return t.$set=function(t){"posts"in t&&s("posts",o=t.posts)},{posts:o}}export default(function(f){function u(t){var c;return n(this,u),c=s(this,o(u).call(this)),r(e(c),t,L,A,a,["posts"]),c}return t(u,c),u}());export{I as preload};
//# sourceMappingURL=index.06d29ed7.js.map