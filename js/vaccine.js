// Fetch Vaccine Data

async function fetchVaccineData() {
  let response, data;

  try {
    response = await fetch("https://api.covid19india.org/data.json");
    data = await response.json();
  } catch (err) {
    console.error("Couldn't fetch data from Covid-19 India API. Error: " + err);
  }

  const length = data["tested"].length;
  const vaccineData = data["tested"][length - 1];
  console.log(vaccineData);
}

fetchVaccineData();
