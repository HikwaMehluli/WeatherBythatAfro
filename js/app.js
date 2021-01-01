(()=>{const e=document.querySelector(".top-banner form"),t=document.querySelector(".top-banner input"),n=document.querySelector(".top-banner .msg"),o=document.querySelector(".ajax-section .cities");e.addEventListener("submit",(a=>{a.preventDefault();let c=t.value;const r=o.querySelectorAll(".ajax-section .city"),s=Array.from(r);if(s.length>0){const o=s.filter((e=>{let t="";return c.includes(",")?c.split(",")[1].length>2?(c=c.split(",")[0],t=e.querySelector(".city-name span").textContent.toLowerCase()):t=e.querySelector(".city-name").dataset.name.toLowerCase():t=e.querySelector(".city-name span").textContent.toLowerCase(),t==c.toLowerCase()}));if(o.length>0)return n.textContent=`You already know the weather for ${o[0].querySelector(".city-name span").textContent} ...otherwise be more specific by providing the country code as well 😉`,e.reset(),void t.focus()}fetch(`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=b80b86ee25b9cce71b21df66eb547691&units=metric`).then((e=>e.json())).then((e=>{const{main:t,name:n,sys:a,weather:c}=e,r=`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${c[0].icon}.svg`,s=document.createElement("li");s.classList.add("city");const i=`\n        <h2 class="city-name" data-name="${n},${a.country}">\n          <span>${n}</span>\n          <sup>${a.country}</sup>\n        </h2>\n        <div class="city-temp">${Math.round(t.temp)}<sup>°C</sup></div>\n        <figure>\n          <img class="city-icon" src="${r}" alt="${c[0].description}">\n          <figcaption>${c[0].description}</figcaption>\n        </figure>\n      `;s.innerHTML=i,o.appendChild(s)})).catch((()=>{n.textContent="Please search for a valid city 😩"})),n.textContent="",e.reset(),t.focus()}))})();