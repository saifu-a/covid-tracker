// Redirect to CoWIN Site on click

document.querySelector(".vaccine-button").onclick = () => {
  location.href = "https://selfregistration.cowin.gov.in/";
};

// Select all Vaccine Content Elements

const vaccineContents = document.querySelectorAll(".vaccine-content");

// Fetch Vaccine Data

async function fetchVaccineData() {
  let response, data;

  try {
    response = await fetch("https://data.covid19india.org/data.json");
    data = await response.json();
  } catch (err) {
    console.error("Couldn't fetch data from Covid-19 India API. Error: " + err);
  }

  const length = data["tested"].length;
  const vaccineData = data["tested"][length - 1];

  let i = 0;
  for (let keys in vaccineData) {
    let keyValues = +vaccineData[keys];

    vaccineContents[i].innerHTML = `${keyValues.toLocaleString("en-IN")}`;
    i++;

    if (i === 10) break;
  }
}

fetchVaccineData();
