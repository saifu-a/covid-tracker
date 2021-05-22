// Country Data

const categories = [
  "TotalConfirmed",
  "TotalDeaths",
  "TotalRecovered",
  "NewConfirmed",
  "NewDeaths",
  "NewRecovered",
];

async function fetchIndiaData() {
  let response = await fetch("https://api.covid19api.com/summary");
  let data = await response.json();
  indiaData = data["Countries"][76];

  for (let category of categories) {
    console.log(category, indiaData[category]);
  }
}

fetchIndiaData();
