!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=document.querySelector(".top-banner form"),o=document.querySelector(".top-banner input"),r=document.querySelector(".top-banner .msg"),c=document.querySelector(".ajax-section .cities");n.addEventListener("submit",e=>{e.preventDefault();let t=o.value;const a=c.querySelectorAll(".ajax-section .city"),i=Array.from(a);if(i.length>0){const e=i.filter(e=>{let n="";return t.includes(",")?t.split(",")[1].length>2?(t=t.split(",")[0],n=e.querySelector(".city-name span").textContent.toLowerCase()):n=e.querySelector(".city-name").dataset.name.toLowerCase():n=e.querySelector(".city-name span").textContent.toLowerCase(),n==t.toLowerCase()});if(e.length>0)return r.textContent="You already know the weather for ".concat(e[0].querySelector(".city-name span").textContent," ...otherwise be more specific by providing the country code as well 😉"),n.reset(),void o.focus()}const s="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("b80b86ee25b9cce71b21df66eb547691","&units=metric");fetch(s).then(e=>e.json()).then(e=>{const{main:t,name:n,sys:o,weather:r}=e,a="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/".concat(r[0].icon,".svg"),i=document.createElement("li");i.classList.add("city");const s='\n        <h2 class="city-name" data-name="'.concat(n,",").concat(o.country,'">\n          <span>').concat(n,"</span>\n          <sup>").concat(o.country,'</sup>\n        </h2>\n        <div class="city-temp">').concat(Math.round(t.temp),'<sup>°C</sup></div>\n        <figure>\n          <img class="city-icon" src="').concat(a,'" alt="').concat(r[0].description,'">\n          <figcaption>').concat(r[0].description,"</figcaption>\n        </figure>\n      ");i.innerHTML=s,c.appendChild(i)}).catch(()=>{r.textContent="Please search for a valid city 😩"}),r.textContent="",n.reset(),o.focus()})}]);