import{i as n,S as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(a){const r="https://pixabay.com",s="/api/",o=new URLSearchParams({key:"44649525-fae4a92093e5fa87b7d67167e",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${s}?${o}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function p(a){return a.map(({webformatURL:r,largeImageURL:s,tags:o,likes:e,views:t,comments:l,downloads:c})=>`<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img class="gallery-img" src="${r}" alt="${o}" />
  </a>
  <ul class="list-img">
    <li class="item-img">
      <span class="label">Likes</span>
      <span class="value">${e}</span>
    </li>
    <li class="item-img">
      <span class="label">Views</span>
      <span class="value">${t}</span>
    </li>
    <li class="item-img">
      <span class="label">Comments</span>
      <span class="value">${l}</span>
    </li>
    <li class="item-img">
      <span class="label">Downloads</span>
      <span class="value">${c}</span>
    </li>
  </ul>
</li>`).join("")}const i={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};i.form.addEventListener("submit",f);function f(a){a.preventDefault(),i.gallery.innerHTML="";const r=a.target.elements["search-input"].value.trim().toLowerCase();if(!r){n.info({message:"Please enter a search query",position:"topRight",timeout:2e3,progressBar:!1});return}d(),m(r).then(s=>{if(!s.hits.length)n.error({message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:432,theme:"dark",backgroundColor:"red",position:"topRight",timeout:2e3,progressBar:!1});else{const o=p(s.hits);i.gallery.innerHTML=o,new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}}).catch(s=>{console.log(s)}).finally(()=>{g()}),a.target.reset()}function d(){i.loader.classList.remove("hidden")}function g(){i.loader.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
