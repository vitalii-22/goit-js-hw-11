import{S as d,i as u}from"./assets/vendor-653c11df.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const p=document.querySelector(".feedback-form"),m=document.querySelector(".gallery"),a=document.querySelector(".wrap-loader");let c="",h=new d(".gallery a",{captionsData:"alt",captionDelay:250});p.addEventListener("submit",s=>{s.preventDefault(),c=s.currentTarget.elements.search.value.trim(),a.classList.remove("hiden"),s.currentTarget.elements.search.value="",f()});function f(){const s=new URLSearchParams({key:"42046594-dc9dc59be7e95573d854c379a",q:`${c}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:9});return fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{t.hits.length===0&&u.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",position:"topRight"}),m.innerHTML=g(t.hits),h.refresh()}).catch(t=>{console.log(t)}).finally(()=>{a.classList.add("hiden")})}function g(s){return s.map(({webformatURL:t,largeImageURL:l,tags:o,likes:e,views:r,comments:i,downloads:n})=>`<li class="gallery-item">
           <a class="gallery-link" href="${l}">
          <img
            class="gallery-image"
            src="${t}"
            alt="${o}"
          />

            <ul class = "description-list">

              <li class = "description-item">
               <h3 class = "description-title">Likes</h3>
               <p class = "description-text">${e}</p>
              </li>

              <li class = "description-item">
               <h3 class = "description-title">Views</h3>
               <p class = "description-text">${r}</p>
              </li>
          
              <li class = "description-item">
               <h3 class = "description-title">Comments</h3>
               <p class = "description-text">${i}</p>
              </li>

              <li class = "description-item">
               <h3 class = "description-title">Downloads</h3>
               <p class = "description-text">${n}</p>
               </li>
          
             </ul>
           </a>

      </li>
      `).join("")}
//# sourceMappingURL=commonHelpers.js.map
