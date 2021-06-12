// Display data in the cards

async function fetchData() {
  await fetch("https://api.covid19api.com/summary")
    .then((response) => {
      // console.log("Inside first then");
      return response.json();
    })
    .then((data) => {
      // console.log("Inside second then");
      c = "+";
      // console.log(data.Countries[76].NewConfirmed);
      const confirmed = data.Countries[76].TotalConfirmed;
      const new_confirmed = data.Countries[76].NewConfirmed;

      document.getElementById(
        "confirmed"
      ).innerHTML = `<p>${confirmed.toLocaleString(
        "en-IN"
      )}<br><br><small style="font-weight: bold;color:blue;">${c}${new_confirmed.toLocaleString(
        "en-IN"
      )}</small></p>`;

      const recovered = data.Countries[76].TotalRecovered;
      const new_recovered = data.Countries[76].NewRecovered;

      document.getElementById(
        "recovered"
      ).innerHTML = `<p>${recovered.toLocaleString(
        "en-IN"
      )}<br><br><small style="font-weight: bold;color:green;">${c}${new_recovered.toLocaleString(
        "en-IN"
      )}</small></p>`;

      const deceased = data.Countries[76].TotalDeaths;
      const new_deceased = data.Countries[76].NewDeaths;

      document.getElementById(
        "deceased"
      ).innerHTML = `<p>${deceased.toLocaleString(
        "en-IN"
      )}<br><br><small style="font-weight: bold;color:red;">${c}${new_deceased.toLocaleString(
        "en-IN"
      )}</small></p>`;
    });
}

fetchData();
