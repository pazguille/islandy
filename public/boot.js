import{d as c,g as l,h as s}from"./chunk-MLL2PHCY.js";var{h:a,hydrate:u}=(s(),c(l));window.yieldToMain=function(t){return new Promise(n=>{setTimeout(()=>{t&&t(),n()},0)})};function o(e){import("/island-"+e.getAttribute("name").toLowerCase()+".js").then(n=>{yieldToMain(()=>{let r=JSON.parse(e.getAttribute("props"));u(a(n.default,{...r}),e)})})}[].slice.call(document.querySelectorAll("p-island[whenidle]")).forEach(e=>{let t=e;requestIdleCallback(()=>{o(t)})});var i=new IntersectionObserver(async e=>{e.forEach(function(t){t.isIntersecting&&(o(t.target),i.unobserve(t.target))})});[].slice.call(document.querySelectorAll("p-island[whenvisible]")).forEach(e=>i.observe(e));
