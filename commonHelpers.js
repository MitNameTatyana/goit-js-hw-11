import{S as u,i as n}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function m(r){const s="https://pixabay.com",a="/api/",o=new URLSearchParams({key:"44649525-fae4a92093e5fa87b7d67167e",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${a}?${o}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function f(r){return r.map(({webformatURL:s,largeImageURL:a,tags:o,likes:e,views:t,comments:i,downloads:c})=>`<li class="gallery-item">
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
      <span class="value">${t}</span>
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
</li>`).join("")}const l={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};l.form.addEventListener("submit",p);function p(r){r.preventDefault(),l.gallery.innerHTML="";const s=r.target.elements["search-input"].value.trim().toLowerCase();if(!s){g("Please enter a search query");return}d(),m(s).then(a=>{if(!a.hits.length)y("Sorry, there are no images matching your search query. Please try again!");else{const o=f(a.hits);l.gallery.innerHTML=o,new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}}).catch(a=>{console.log(a)}).finally(()=>{h()}),r.target.reset()}function d(){l.loader.classList.remove("hidden")}function h(){l.loader.classList.add("hidden")}function g(r){n.info({message:r,position:"topRight",timeout:2e3,progressBar:!1})}function y(r){n.error({message:r,maxWidth:432,theme:"dark",backgroundColor:"red",position:"topRight",timeout:2e3,progressBar:!1})}
//# sourceMappingURL=commonHelpers.js.map
