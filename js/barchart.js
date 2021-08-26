let stateList2 = [
  { name: "Andaman and Nicobar Islands", code: "AN" },
  { name: "Andhra Pradesh", code: "AP" },
  { name: "Arunachal Pradesh", code: "AR" },
  { name: "Assam", code: "AS" },
  { name: "Bihar", code: "BR" },
  { name: "Chandigarh", code: "CH" },
  { name: "Chhattisgarh", code: "CT" },
  { name: "Delhi", code: "DL" },
  { name: "Dadra and Nagar Haveli", code: "DN" },
  { name: "Goa", code: "GA" },
  { name: "Gujarat", code: "GJ" },
  { name: "Himachal Pradesh", code: "HP" },
  { name: "Haryana", code: "HR" },
  { name: "Jharkhand", code: "JH" },
  { name: "Jammu and Kashmir", code: "JK" },
  { name: "Karnataka", code: "KA" },
  { name: "Kerala", code: "KL" },
  { name: "Ladakh", code: "LA" },
  { name: "Lakshadweep", code: "LD" },
  { name: "Maharashtra", code: "MH" },
  { name: "Meghalaya", code: "ML" },
  { name: "Manipur", code: "MN" },
  { name: "Madhya Pradesh", code: "MP" },
  { name: "Mizoram", code: "MZ" },
  { name: "Nagaland", code: "NL" },
  { name: "Odisha", code: "OR" },
  { name: "Punjab", code: "PB" },
  { name: "Puducherry", code: "PY" },
  { name: "Rajasthan", code: "RJ" },
  { name: "Sikkim", code: "SK" },
  { name: "Telangana", code: "TG" },
  { name: "Tamil Nadu", code: "TN" },
  { name: "Tripura", code: "TR" },
  { name: "Uttar Pradesh", code: "UP" },
  { name: "Uttarakhand ", code: "UT" },
  { name: "West Bengal", code: "WB" },
];

let dataSet = [],
  labelSet = [];

let url = "https://data.covid19india.org/v4/min/data.min.json";
async function fetchDataForChart() {
  let response, data;

  try {
    response = await fetch(url);
    data = await response.json();
  } catch (err) {
    console.error("Couldn't fetch data from Covid19India API. Error: " + err);
  }

  stateList2.forEach((state) => {
    state.confirmed = data[state.code]["total"]["confirmed"];
    state.deceased = data[state.code]["total"]["deceased"];
    state.recovered = data[state.code]["total"]["recovered"];
    state.vaccinated = data[state.code]["total"]["vaccinated1"];

    state.recoveryRate = (
      (state["recovered"] / state["confirmed"]) *
      100
    ).toFixed(2);
    state.deathRate = ((state["deceased"] / state["confirmed"]) * 100).toFixed(
      2
    );
  });

  getTopValues(stateList2, "confirmed");
  drawConfirmedBarChart(dataSet, labelSet);

  getTopValues(stateList2, "deceased");
  drawDeceasedBarChart(dataSet, labelSet);

  getTopValues(stateList2, "recovered");
  drawRecoveredBarChart(dataSet, labelSet);

  getTopValues(stateList2, "vaccinated");
  drawVaccinatedBarChart(dataSet, labelSet);

  getTopRatioValues(stateList2, "recoveryRate");
  drawRecoveryRateChart(dataSet, labelSet);

  getTopRatioValues(stateList2, "deathRate");
  drawDeathRateChart(dataSet, labelSet);
}

fetchDataForChart();

function getTopValues(stateList, category) {
  (dataSet = []), (labelSet = []);

  let topValues = stateList
    .sort((a, b) => {
      return b[category] - a[category];
    })
    .slice(0, 5);

  for (let state of topValues) {
    dataSet.push(state[category]);
    labelSet.push(state.name);
  }
}

function getTopRatioValues(stateList, category) {
  (dataSet = []), (labelSet = []);

  let topValues = stateList
    .sort((a, b) => {
      return b[category] - a[category];
    })
    .slice(0, 10);

  for (let state of topValues) {
    dataSet.push(state[category]);
    labelSet.push(state.name);
  }
}

// Confirmed Bar chart
function drawConfirmedBarChart(dataSet, labelSet) {
  const ctx = document.getElementById("confirmed-chart").getContext("2d");

  new Chart(ctx, {
    type: "horizontalBar",
    data: {
      labels: labelSet,
      datasets: [
        {
          label: "Confirmed Cases",
          backgroundColor: [
            "#ee4035",
            "#f37736",
            "#fdf498",
            "#7bc043",
            "#0392cf",
          ],
          data: dataSet,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      legend: { display: false },
      title: {
        display: true,
        text: "Top 5 States with Confirmed Cases",
        fontSize: 20,
        responsive: true,
        maintainAspectRatio: false,
      },
    },
  });
}

// Deceased Bar chart
function drawDeceasedBarChart(dataSet, labelSet) {
  const ctx = document.getElementById("deceased-chart").getContext("2d");

  new Chart(ctx, {
    type: "horizontalBar",
    data: {
      labels: labelSet,
      datasets: [
        {
          label: "Deceased Cases",
          backgroundColor: [
            // "#96ceb4",
            // "#ffeead",
            // "#ff6f69",
            // "#ffcc5c",
            // "#88d8b0",
            "#ea0000",
            "#00b159",
            "#00aedb",
            "#f37735",
            "#ffc425",
          ],
          data: dataSet,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      legend: { display: false },
      title: {
        display: true,
        text: "Top 5 States with Deceased Cases",
        fontSize: 20,
        responsive: true,
        maintainAspectRatio: false,
      },
    },
  });
}

// Recovered Bar chart
function drawRecoveredBarChart(dataSet, labelSet) {
  const ctx = document.getElementById("recovered-chart").getContext("2d");

  new Chart(ctx, {
    type: "horizontalBar",
    data: {
      labels: labelSet,
      datasets: [
        {
          label: "Recovered Cases",
          backgroundColor: [
            "#96ceb4",
            "#ffeead",
            "#ff6f69",
            "#ffcc5c",
            "#88d8b0",
          ],
          data: dataSet,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      legend: { display: false },
      title: {
        display: true,
        text: "Top 5 States with Recovered Cases",
        fontSize: 20,
        responsive: true,
        maintainAspectRatio: false,
      },
    },
  });
}

// Vaccinated Bar chart
function drawVaccinatedBarChart(dataSet, labelSet) {
  const ctx = document.getElementById("vaccinated-chart").getContext("2d");

  new Chart(ctx, {
    type: "horizontalBar",
    data: {
      labels: labelSet,
      datasets: [
        {
          label: "Vaccinated Cases",
          backgroundColor: [
            "#c45850",
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
          ],
          data: dataSet,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      legend: { display: false },
      title: {
        display: true,
        text: "Top 5 States with Vaccinated Cases",
        fontSize: 20,
        responsive: true,
        maintainAspectRatio: false,
      },
    },
  });
}

function drawRecoveryRateChart(dataSet, labelSet) {
  const ctx = document.getElementById("recovery-rate-chart").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labelSet,
      datasets: [
        {
          label: "Recovery Rate (%)",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
            "#96ceb4",
            "#ffeead",
            "#ff6f69",
            "#ffcc5c",
            "#88d8b0",
          ],
          data: dataSet,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      legend: { display: false },
      title: {
        display: true,
        text: "States with highest Recovery Rate",
        fontSize: 20,
        responsive: true,
        maintainAspectRatio: false,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              callback: function (label, index, labels) {
                if (/\s/.test(label)) {
                  return label.split(" ");
                } else {
                  return label;
                }
              },
            },
          },
        ],
      },
    },
  });
}

function drawDeathRateChart(dataSet, labelSet) {
  const ctx = document.getElementById("death-rate-chart").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labelSet,
      datasets: [
        {
          label: "Death Rate (%)",
          backgroundColor: [
            "#96ceb4",
            "#ffeead",
            "#ff6f69",
            "#ffcc5c",
            "#88d8b0",
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
          ],
          data: dataSet,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      legend: { display: false },
      title: {
        display: true,
        text: "States with highest Death Rate",
        fontSize: 20,
        responsive: true,
        maintainAspectRatio: false,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              callback: function (label, index, labels) {
                if (/\s/.test(label)) {
                  return label.split(" ");
                } else {
                  return label;
                }
              },
            },
          },
        ],
      },
    },
  });
}
