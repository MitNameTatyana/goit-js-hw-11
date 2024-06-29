import{S as u,i as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function m(t){const s="https://pixabay.com",a="/api/",o=new URLSearchParams({key:"44649525-fae4a92093e5fa87b7d67167e",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${a}?${o}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function f(t){return t.map(({webformatURL:s,largeImageURL:a,tags:o,likes:e,views:r,comments:i,downloads:c})=>`<li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img class="gallery-img" src="${s}" alt="${o}" />
  </a>
  <ul class="list-img">
    <li class="item-img">
      <span class="label">Likes</span>
      <span class="value">${e}</span>
    </li>
    <li class="item-img">
      <span class="label">Views</span>
      <span class="value">${r}</span>
    </li>
    <li class="item-img">
      <span class="label">Comments</span>
      <span class="value">${i}</span>
    </li>
    <li class="item-img">
      <span class="label">Downloads</span>
      <span class="value">${c}</span>
    </li>
  </ul>
</li>`).join("")}const n={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};n.form.addEventListener("submit",p);function p(t){t.preventDefault(),n.gallery.innerHTML="";const s=t.target.elements["search-input"].value.trim().toLowerCase();if(!s){g("Please enter a search query");return}d(),m(s).then(a=>{if(!a.hits.length)y("Sorry, there are no images matching your search query. Please try again!");else{const o=f(a.hits);n.gallery.innerHTML=o,new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}}).catch(a=>{l.error({title:"Error",message:a,maxWidth:432,theme:"dark",backgroundColor:"red",position:"center",progressBar:!1})}).finally(()=>{h()}),t.target.reset()}function d(){n.loader.classList.remove("hidden")}function h(){n.loader.classList.add("hidden")}function g(t){l.info({message:t,position:"topRight",timeout:2e3,progressBar:!1})}function y(t){l.error({message:t,maxWidth:432,theme:"dark",backgroundColor:"red",position:"topRight",timeout:2e3,progressBar:!1})}
//# sourceMappingURL=commonHelpers.js.map
