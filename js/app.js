(()=>{const t=document.querySelector(".top-banner form"),e=document.querySelector(".top-banner input"),n=document.querySelector(".top-banner .msg"),o=document.querySelector(".ajax-section .cities");t.addEventListener("submit",(a=>{a.preventDefault();let c=e.value;const r=o.querySelectorAll(".ajax-section .city"),s=Array.from(r);if(s.length>0){const o=s.filter((t=>{let e="";return c.includes(",")?c.split(",")[1].length>2?(c=c.split(",")[0],e=t.querySelector(".city-name span").textContent.toLowerCase()):e=t.querySelector(".city-name").dataset.name.toLowerCase():e=t.querySelector(".city-name span").textContent.toLowerCase(),e==c.toLowerCase()}));if(o.length>0)return n.textContent=`You already know the weather for ${o[0].querySelector(".city-name span").textContent} ...otherwise be more specific by providing the country code as well 😉`,t.reset(),void e.focus()}fetch(`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=b80b86ee25b9cce71b21df66eb547691&units=metric`).then((t=>t.json())).then((t=>{const{main:e,name:n,sys:a,weather:c}=t,r=`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${c[0].icon}.svg`,s=document.createElement("li");s.classList.add("city");const i=`\n\t\t<h2 class="city-name" data-name="${n},${a.country}">\n\t\t\t<span>${n}</span>\n\t\t\t<sup>${a.country}</sup>\n        </h2>\n        <div class="city-temp">${Math.round(e.temp)}<sup>°C</sup></div>\n\t\t<figure>\n\t\t\t<img class="city-icon" src="${r}" alt="${c[0].description}">\n\t\t\n\t\t<figcaption>${c[0].description}</figcaption></figure>`;s.innerHTML=i,o.appendChild(s)})).catch((()=>{n.textContent="Search for a real fucken city 🥵"})),n.textContent="",t.reset(),e.focus()}))})();