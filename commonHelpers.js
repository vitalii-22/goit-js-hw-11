import{i as m,S as f}from"./assets/vendor-653c11df.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g=document.querySelector(".feedback-form"),y=document.querySelector(".gallery"),n=document.querySelector(".wrap-loader");let a="";g.addEventListener("submit",s=>{s.preventDefault(),a=s.currentTarget.elements.search.value.trim(),n.classList.remove("hiden"),s.currentTarget.elements.search.value="",L()});function L(){const s=new URLSearchParams({key:"42046594-dc9dc59be7e95573d854c379a",q:`${a}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:9});return fetch(`https://pixabay.com/api/?${s})`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{t.hits.length===0&&m.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",position:"topRight"});function o(e){return t.hits.map(({webformatURL:r,largeImageURL:i,tags:c,likes:u,views:d,comments:p,downloads:h})=>`<li class="gallery-item">
           <a class="gallery-link" href="${i}">
          <img
            class="gallery-image"
            src="${r}"
            alt="${c}"
          />

            <ul class = "description-list">

              <li class = "description-item">
               <h3 class = "description-title">Likes</h3>
               <p class = "description-text">${u}</p>
              </li>

              <li class = "description-item">
               <h3 class = "description-title">Views</h3>
               <p class = "description-text">${d}</p>
              </li>
          
              <li class = "description-item">
               <h3 class = "description-title">Comments</h3>
               <p class = "description-text">${p}</p>
              </li>

              <li class = "description-item">
               <h3 class = "description-title">Downloads</h3>
               <p class = "description-text">${h}</p>
               </li>
          
             </ul>
           </a>

      </li>
      `).join("")}console.log(s.toString()),y.innerHTML=o(),console.log(t.hits),console.log(t),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>{console.log(t)}).finally(()=>{n.classList.add("hiden")})}
//# sourceMappingURL=commonHelpers.js.map
