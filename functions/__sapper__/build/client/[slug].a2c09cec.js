import{S as t,i as s,s as o,b as a,e,t as n,g as i,c as r,d as p,f as c,h as l,j as h,k as u,v as f,n as m}from"./chunk.21bde4f9.js";function d(t){var s,o,d,g,v,j,x=t.post.title,b=t.post.html;return document.title=s=t.post.title,{c(){o=a(),d=e("h1"),g=n(x),v=a(),j=e("div"),this.h()},l(t){o=i(t,"\n\n"),d=r(t,"H1",{},!1);var s=p(d);g=i(s,x),s.forEach(c),v=i(t,"\n\n"),j=r(t,"DIV",{class:!0},!1),p(j).forEach(c),this.h()},h(){l(j,"class","content svelte-gnxal1")},m(t,s){h(t,o,s),h(t,d,s),u(d,g),h(t,v,s),h(t,j,s),j.innerHTML=b},p(t,o){t.post&&s!==(s=o.post.title)&&(document.title=s),t.post&&x!==(x=o.post.title)&&f(g,x),t.post&&b!==(b=o.post.html)&&(j.innerHTML=b)},i:m,o:m,d(t){t&&(c(o),c(d),c(v),c(j))}}}async function g({params:t,query:s}){const o=await this.fetch(`blog/${t.slug}.json`),a=await o.json();if(200===o.status)return{post:a};this.error(o.status,a.message)}function v(t,s,o){let{post:a}=s;return t.$set=(t=>{"post"in t&&o("post",a=t.post)}),{post:a}}export default class extends t{constructor(t){super(),s(this,t,v,d,o,["post"])}}export{g as preload};
//# sourceMappingURL=[slug].a2c09cec.js.map
