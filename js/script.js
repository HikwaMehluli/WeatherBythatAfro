/*************************************************************************************
	SEARCH BY  CITY NAME (e.g. bulawayo) 
	OR A COMMA-SEPARATED CITY NAMES ALONG WITH THE COUNTRY CODE (e.g. bulawayo,zw)
*************************************************************************************/
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");





/**********************************************************
	API KEY
	Create your own API via openweathermap.org/API
	because the one used here map fail
**********************************************************/
const apiKey = "b80b86ee25b9cce71b21df66eb547691";

form.addEventListener("submit", e => {
	e.preventDefault();
	let inputVal = input.value;

	//check if there's already a city
	const listItems = list.querySelectorAll(".ajax-section .city");
	const listItemsArray = Array.from(listItems);

	if (listItemsArray.length > 0) {
		const filteredArray = listItemsArray.filter(el => {
			let content = "";
			//bulawayo,zw
			if (inputVal.includes(",")) {
				//bulawayo,zw -> invalid country code, so we keep only the first part of inputVal
				if (inputVal.split(",")[1].length > 2) {
					inputVal = inputVal.split(",")[0];
					content = el
						.querySelector(".city-name span")
						.textContent.toLowerCase();
				} else {
					content = el.querySelector(".city-name").dataset.name.toLowerCase();
				}
			} else {
				//bulawayo
				content = el.querySelector(".city-name span").textContent.toLowerCase();
			}
			return content == inputVal.toLowerCase();
		});

		if (filteredArray.length > 0) {
			msg.textContent = `You already know the weather for ${
        filteredArray[0].querySelector(".city-name span").textContent
      } ...otherwise be more specific by providing the country code as well 😉`;
			form.reset();
			input.focus();
			return;
		}
	}

	//ajax API goes here
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			const {
				main,
				name,
				sys,
				weather
			} = data;
			const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
			const li = document.createElement("li");
			li.classList.add("city");
			const markup = `
		<h2 class="city-name" data-name="${name},${sys.country}">
			<span>${name}</span>
			<sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
		<figure>
			<img class="city-icon" src="${icon}" alt="${weather[0]["description"]
		}">
		
		<figcaption>${weather[0]["description"]}</figcaption></figure>`;
			li.innerHTML = markup;
			list.appendChild(li);
		})

		.catch(() => {
			msg.textContent = "Search for a real fucken city 🥵";
		});

		msg.textContent = "";
		form.reset();
		input.focus();
});