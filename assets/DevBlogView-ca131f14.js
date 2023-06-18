import{_ as l,p as m,m as g,o as n,c as a,a as o,t as f,b as u,F as v,r as h,d as p,P as y}from"./index-df47d585.js";const P={name:"PostPreview",props:{post:{type:Object,default:()=>({})}},computed:{postUrl:function(){return this.post&&this.post.url?this.post.url:""}},methods:{formatContent:function(t){return t&&m.sanitize(g(t))}}},w=["href"],$={class:"postPreview"},B=["src"],b={class:"opening"},k=["innerHTML"];function x(t,i,s,e,_,r){return n(),a("a",{href:r.postUrl},[o("div",$,[o("div",null,[o("img",{src:s.post.image},null,8,B)]),o("div",b,[o("h2",null,f(s.post.title),1),o("div",{innerHTML:r.formatContent(s.post.summary)},null,8,k)])])],8,w)}const D=l(P,[["render",x]]);const V={name:"Blog",components:{PostPreview:D},props:{posts:{type:Array,default:()=>[]}}},A={class:"blog"};function C(t,i,s,e,_,r){const c=u("PostPreview");return n(),a("div",A,[(n(!0),a(v,null,h(s.posts,d=>(n(),p(c,{key:d.uid,post:d},null,8,["post"]))),128))])}const H=l(V,[["render",C]]);const L={name:"DevBlogView",components:{Blog:H},data:function(){return{posts:[],loading:!1}},mounted:function(){this.getPosts()},methods:{getPosts:async function(){this.loading=!0;const s=(await y().get("cdn/stories/",{version:"published",cv:Date.now(),per_page:100,starts_with:"devblog/",sort_by:"created_at:desc"})).data.stories.map(e=>({title:e.name,summary:e.content.summary,image:e.content.image?e.content.image.filename:"",created_at:e.created_at,url:"/devblog/"+e.slug}));this.posts=s,this.loading=!1}}},T={className:"blog-container view"},F=o("h1",null,"Dev Blog",-1),M={key:0,class:"loader"};function N(t,i,s,e,_,r){const c=u("Blog");return n(),a("div",T,[F,t.loading?(n(),a("div",M)):(n(),p(c,{key:1,posts:t.posts},null,8,["posts"]))])}const j=l(L,[["render",N]]);export{j as default};
