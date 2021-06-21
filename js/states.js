// Array of States with Code
let stateList = [
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

const search_state_element = document.querySelector(".search-state");
const state_list_element = document.querySelector(".state-list");
const chang_state_btn = document.querySelector(".change-state");
const close_list_btn = document.querySelector(".close-btn");
const input = document.getElementById("search-input");

function createStateList() {
  const num_states = stateList.length;

  let i = 0,
    ul_list_id;

  stateList.forEach((state, index) => {
    if (index % Math.ceil(num_states / num_of_ul_lists) == 0) {
      ul_list_id = `list-${i}`;
      state_list_element.innerHTML += `<ul id='${ul_list_id}'></ul>`;
      i++;
    }

    document.getElementById(
      `${ul_list_id}`
    ).innerHTML += `<li onclick="fetchData('${state.code}')" id="${state.name}">${state.name}</li>`;
  });
}

let num_of_ul_lists = 2;
createStateList();

chang_state_btn.addEventListener("click", function () {
  input.value = "";
  resetStateList();
  search_state_element.classList.toggle("hide");
  search_state_element.classList.add("fadeIn");
});

close_list_btn.addEventListener("click", function () {
  search_state_element.classList.toggle("hide");
});

state_list_element.addEventListener("click", function () {
  search_state_element.classList.toggle("hide");
});

input.addEventListener("input", function () {
  let value = input.value.toUpperCase();

  stateList.forEach((state) => {
    if (state.name.toUpperCase().startsWith(value)) {
      document.getElementById(state.name).classList.remove("hide");
    } else {
      document.getElementById(state.name).classList.add("hide");
    }
  });
});

function resetStateList() {
  stateList.forEach((state) => {
    document.getElementById(state.name).classList.remove("hide");
  });
}

// SELECT ALL ELEMENTS
const state_name_element = document.querySelector(".state .name");

const total_cases_element = document.querySelector(".total-cases .value");
const new_cases_element = document.querySelector(".total-cases .new-value");

const recovered_element = document.querySelector(".recovered .value");
const new_recovered_element = document.querySelector(".recovered .new-value");

const deaths_element = document.querySelector(".deaths .value");
const new_deaths_element = document.querySelector(".deaths .new-value");

const vaccinated1_element = document.querySelector(".vaccinated1 .value");
const new_vaccinated1_element = document.querySelector(
  ".vaccinated1 .new-value"
);

const ctx = document.getElementById("chart").getContext("2d");
const ctxGrowth = document.getElementById("growth-chart").getContext("2d");

// APP VARIABLES
let app_data = [],
  cases_list = [],
  recovered_list = [],
  deaths_list = [],
  vaccinated1_list = [],
  vaccinated2_list = [],
  tested_list = [],
  dates_list = [],
  formattedDates_list = [],
  growthRate = [];

// GET USERS STATE CODE
let stateCode = geoplugin_regionCode();
let userState;
stateList.forEach((state) => {
  if (state.code == stateCode) {
    userState = state.name;
  }
});

async function fetchData(stateCode) {
  (app_data = []),
    (cases_list = []),
    (recovered_list = []),
    (deaths_list = []),
    (vaccinated1_list = []),
    (vaccinated2_list = []),
    (tested_list = []),
    (dates_list = []),
    (formattedDates_list = []),
    (growthRate = []);

  stateList.forEach((state) => {
    if (state.code == stateCode) {
      userState = state.name;
    }
  });

  let response, data;

  try {
    response = await fetch(
      "https://api.covid19india.org/v4/min/timeseries.min.json"
    );
    data = await response.json();
  } catch (err) {
    console.error("Couldn't fetch data from Covid19India API. Error: " + err);
  }

  let stateData = data[stateCode];

  for (let date in stateData["dates"]) {
    dates_list.push(date);
    formattedDates_list.push(moment(date).format("Do MMM YY"));
    cases_list.push(stateData["dates"][date]["total"]["confirmed"] || 0);
    recovered_list.push(stateData["dates"][date]["total"]["recovered"] || 0);
    deaths_list.push(stateData["dates"][date]["total"]["deceased"] || 0);
    vaccinated1_list.push(
      stateData["dates"][date]["total"]["vaccinated1"] || 0
    );
  }

  getGrowthRate(cases_list);

  updateUI();
}

fetchData(stateCode);

// UPDATE UI FUNCTION
function updateUI() {
  updateStats();
  axesLinearChart();
  axesLinearGrowthChart();
}

function updateStats() {
  const total_cases = cases_list[cases_list.length - 1];
  const new_confirmed_cases = total_cases - cases_list[cases_list.length - 2];

  const total_recovered = recovered_list[recovered_list.length - 1];
  const new_recovered_cases =
    total_recovered - recovered_list[recovered_list.length - 2];

  const total_deaths = deaths_list[deaths_list.length - 1];
  const new_deaths_cases = total_deaths - deaths_list[deaths_list.length - 2];

  const total_vaccinated1 = vaccinated1_list[vaccinated1_list.length - 1];
  const new_vaccinated1_cases =
    total_vaccinated1 - vaccinated1_list[vaccinated1_list.length - 2];

  state_name_element.innerHTML = userState;
  total_cases_element.innerHTML = total_cases.toLocaleString("en-IN");
  new_cases_element.innerHTML = `+${new_confirmed_cases.toLocaleString(
    "en-IN"
  )}`;

  recovered_element.innerHTML = total_recovered.toLocaleString("en-IN");
  new_recovered_element.innerHTML = `+${new_recovered_cases.toLocaleString(
    "en-IN"
  )}`;

  deaths_element.innerHTML = total_deaths.toLocaleString("en-IN");
  new_deaths_element.innerHTML = `+${new_deaths_cases.toLocaleString("en-IN")}`;

  vaccinated1_element.innerHTML = total_vaccinated1.toLocaleString("en-IN");
  new_vaccinated1_element.innerHTML = `+${new_vaccinated1_cases.toLocaleString(
    "en-IN"
  )}`;
}

// CALCULATE GROWTH RATE

function getGrowthRate(list) {
  growthRate = [];
  for (let i = 1; i < list.length; i++) {
    let dailyGrowth = (list[i] - list[i - 1]) / list[i - 1];

    let percentGrowth = (dailyGrowth * 100).toFixed(4);

    growthRate.push(percentGrowth);
  }
}

// UPDATE CHART
let my_chart;
function axesLinearChart() {
  if (my_chart) {
    my_chart.destroy();
  }

  let last60 = formattedDates_list.length - 61;

  my_chart = new Chart(ctx, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Confirmed",
          data: cases_list.slice(last60),
          fill: true,
          borderColor: "rgb(255, 215, 0)",
          backgroundColor: "rgba(255, 215, 0, 0.5)",
          minBarLength: 100,
        },
        {
          label: "Recovered",
          data: recovered_list.slice(last60),
          fill: true,
          borderColor: "rgb(46, 139, 87)",
          backgroundColor: "rgba(46, 139, 87, 0.5)",
          minBarLength: 100,
        },
        {
          label: "Deaths",
          data: deaths_list.slice(last60),
          fill: true,
          borderColor: "rgb(255, 0, 0)",
          backgroundColor: "rgba(255, 0, 0, 0.5)",
          minBarLength: 100,
        },
        {
          label: "Vaccinated",
          data: vaccinated1_list.slice(last60),
          fill: true,
          borderColor: "rgb(10, 129, 171)",
          backgroundColor: "rgba(10, 129, 171, 0.5)",
          minBarLength: 100,
        },
      ],
      labels: formattedDates_list.slice(last60),
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              fontSize: 14,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontSize: 14,
            },
          },
        ],
      },
      legend: {
        display: true,
        labels: {
          fontSize: 14,
        },
      },
    },
  });
}

// Growth Data Chart

let my_growth_chart;
function axesLinearGrowthChart() {
  if (my_growth_chart) {
    my_growth_chart.destroy();
  }

  let last100 = formattedDates_list.length - 101;

  my_chart = new Chart(ctxGrowth, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Daily Growth Rate",
          data: growthRate.slice(last100),
          fill: true,
          borderColor: "rgb(255, 0, 0)",
          backgroundColor: "rgba(255, 0, 0, 0.5)",
        },
      ],
      labels: formattedDates_list.slice(last100),
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              fontColor: "black",
              fontSize: 14,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontColor: "black",
              fontSize: 14,
            },
          },
        ],
      },
      legend: {
        display: true,
        labels: {
          fontColor: "black",
          fontSize: 14,
        },
      },
    },
  });
}
