let confirmed = [];
let deaths = [];
let recovered = [];
let dates = [];

async function fetchIndiaData() {
  let response = await fetch(
    "https://api.covid19api.com/total/dayone/country/india"
  );
  let data = await response.json();

  let length = data.length - 1;

  for (let i = 10; i >= 0; i--) {
    confirmed[10 - i] = data[length - i]["Confirmed"];
    deaths[10 - i] = data[length - i]["Deaths"];
    recovered[10 - i] = data[length - i]["Recovered"];
    dates[10 - i] = data[length - i]["Date"];
  }
  console.log(confirmed);
  console.log(deaths);
  console.log(recovered);
  console.log(dates);
}

fetchIndiaData();

let my_chart = document.getElementById("line-chart").getContext("2d");
let covid_graph = new Chart(my_chart, {
  type: "line",
  data: {
    labels: dates,
    datasets: [
      {
        label: "Total Confirmed Cases",
        data: confirmed,
        fill: false,
        borderColor: "#FFD700",
        minBarLength: 100,
      },
      {
        label: "Total Recovered",
        data: recovered, //[300, 600, 800, 800],
        fill: false,
        borderColor: "#2E8B57",
        minBarLength: 100,
      },
      {
        label: "Total Deaths",
        data: deaths, //[700, 800, 900, 1000],
        fill: false,
        borderColor: "#FF0000",
        minBarLength: 100,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Graphical Representation",
      fontSize: 25,
      responsive: true,
      maintainAspectRatio: false,
    },
  },
});
