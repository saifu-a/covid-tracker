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
      ).innerHTML += `<p>${confirmed}<br><br><small style="font-weight: bold;color:blue;">${c}${new_confirmed}</small></p>`;

      const recovered = data.Countries[76].TotalRecovered;
      const new_recovered = data.Countries[76].NewRecovered;

      document.getElementById(
        "recovered"
      ).innerHTML += `<p>${recovered}<br><br><small style="font-weight: bold;color:green;">${c}${new_recovered}</small></p>`;

      const deceased = data.Countries[76].TotalDeaths;
      const new_deceased = data.Countries[76].NewDeaths;

      document.getElementById(
        "deceased"
      ).innerHTML += `<p>${deceased}<br><br><small style="font-weight: bold;color:red;">${c}${new_deceased}</small></p>`;
    });
}

fetchData();

// Bar chart
new Chart(document.getElementById("bar-chart"), {
  type: "bar",
  data: {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [2478, 5267, 734, 784, 433],
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Predicted world population (millions) in 2050",
    },
  },
});
