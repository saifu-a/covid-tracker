// Display data in the cards

async function fetchData() {
  await fetch("https://api.covid19api.com/summary")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const confirmed_element = document.querySelector("#confirmed p");
      const new_confirmed_element = document.querySelector("#confirmed small");
      const confirmed = data.Countries[76].TotalConfirmed;
      const new_confirmed = data.Countries[76].NewConfirmed;

      confirmed_element.setAttribute("data-target", confirmed);
      confirmed_element.classList.add("counter");

      new_confirmed_element.setAttribute("data-target", new_confirmed);
      new_confirmed_element.classList.add("new-counter");

      const recovered_element = document.querySelector("#recovered p");
      const new_recovered_element = document.querySelector("#recovered small");
      const recovered = data.Countries[76].TotalRecovered;
      const new_recovered = data.Countries[76].NewRecovered;

      recovered_element.setAttribute("data-target", recovered);
      recovered_element.classList.add("counter");

      new_recovered_element.setAttribute("data-target", new_recovered);
      new_recovered_element.classList.add("new-counter");

      const deceased_element = document.querySelector("#deceased p");
      const new_deceased_element = document.querySelector("#deceased small");
      const deceased = data.Countries[76].TotalDeaths;
      const new_deceased = data.Countries[76].NewDeaths;

      deceased_element.setAttribute("data-target", deceased);
      deceased_element.classList.add("counter");

      new_deceased_element.setAttribute("data-target", new_deceased);
      new_deceased_element.classList.add("new-counter");

      counterAnimation();
      newCounterAnimation();
    });
}

fetchData();

// Counter Animation Logic

function counterAnimation() {
  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      const inc = target / speed;

      if (count < target) {
        counter.innerHTML = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = `${target.toLocaleString("en-IN")}`;
      }
    };

    updateCount();
  });
}

function newCounterAnimation() {
  const counters = document.querySelectorAll(".new-counter");
  const speed = 200;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      const inc = target / speed;

      if (count < target) {
        counter.innerHTML = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = `+${target.toLocaleString("en-IN")}`;
      }
    };

    updateCount();
  });
}
