let confirmed = [];
let deaths = [];
let recovered = [];
let dates = [];

async function fetchIndiaData() {
  let response = await fetch(
    "https://api.covid19api.com/total/dayone/country/india"
  );
  let data = await response.json();

  const length = data.length - 1;
  const range = 20;
  const interval = 10;

  for (let i = range; i >= 0; i--) {
    confirmed[range - i] = data[length - i * interval]["Confirmed"];
    deaths[range - i] = data[length - i * interval]["Deaths"];
    recovered[range - i] = data[length - i * interval]["Recovered"];
    let date = data[length - i * interval]["Date"];
    let newDate = moment.parseZone(date).format("DD-MMM-YY");
    dates[range - i] = newDate;
  }
}

drawGraph();

async function drawGraph() {
  await fetchIndiaData();
  let my_chart = document.getElementById("line-chart").getContext("2d");
  let covid_graph = new Chart(my_chart, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Total Confirmed Cases",
          data: confirmed,
          fill: true,
          borderColor: "#FFD700",
          backgroundColor: "rgba(255,215,0, 0.5)",
          minBarLength: 100,
        },
        {
          label: "Total Recovered",
          data: recovered,
          fill: true,
          borderColor: "#2E8B57",
          backgroundColor: "rgba(46,139,87, 0.5)",
          minBarLength: 100,
        },
        {
          label: "Total Deaths",
          data: deaths,
          fill: true,
          borderColor: "#FF0000",
          backgroundColor: "rgba(255,0,0,0.5)",
          minBarLength: 100,
        },
      ],
    },
    options: {
      // title: {
      //   display: true,
      //   text: "India",
      //   fontSize: 25,
      //   responsive: true,
      //   maintainAspectRatio: false,
      // },
    },
  });
}
