// Dark and Light Mode Toggle Logic

let boxElements = document.querySelectorAll(".box");
let boxHeaderElements = document.querySelectorAll(".box .header");
let colorSwitch = document.querySelector("#input-color-switch");
let helplineTable = document.getElementsByClassName("helpline-table-body");
let testCentres = document.getElementsByClassName("testing-centres");
let svgElements = document.querySelectorAll(".svg");
let navbarHeaderElement = document.querySelector(".navbar header");
let vaccineCardElements = document.querySelectorAll(".vaccine-card");

colorSwitch.addEventListener("click", checkMode);

function checkMode() {
  if (colorSwitch.checked) {
    darkModeOn();
  } else {
    darkModeOff();
  }
}

function darkModeOn() {
  for (let boxElement of boxElements) {
    boxElement.setAttribute("style", "border: 1px solid #4c4c4c");
  }

  for (let boxHeaderElement of boxHeaderElements) {
    boxHeaderElement.setAttribute(
      "style",
      "background-image: linear-gradient(to right, rgb(165, 0, 37), rgb(178, 27, 0));"
    );
  }

  for (let helplinetable of helplineTable) {
    helplinetable.setAttribute("style", "color: #04009A");
  }

  for (let test_Centres of testCentres) {
    test_Centres.setAttribute("style", "color: #171717");
  }

  for (let svgElement of svgElements) {
    svgElement.style.fill = "#ddd";
  }

  for (let vaccineCardElement of vaccineCardElements) {
    vaccineCardElement.style.color = "rgb(211, 207, 201)";
    vaccineCardElement.style.backgroundColor = "rgb(42, 70, 82)";
    vaccineCardElement.style.backgroundImage =
      "linear-gradient(315deg, rgb(42, 70, 82) 0%, rgb(44, 48, 50) 74%)";
  }

  navbarHeaderElement.style.boxShadow = "none";

  document.body.classList.add("dark-mode");
}

function darkModeOff() {
  for (let boxElement of boxElements) {
    boxElement.setAttribute("style", "border: 1px solid #ccc");
  }

  for (let boxHeaderElement of boxHeaderElements) {
    boxHeaderElement.setAttribute(
      "style",
      "background: linear-gradient(to right, #ff416c, #ff4b2b);"
    );
  }

  for (let helplinetable of helplineTable) {
    helplinetable.setAttribute("style", "color: #171717");
  }

  for (let test_Centres of testCentres) {
    test_Centres.setAttribute("style", "color: #171717");
  }

  for (let svgElement of svgElements) {
    svgElement.style.fill = "#222";
  }

  for (let vaccineCardElement of vaccineCardElements) {
    vaccineCardElement.style.color = "rgb(34, 34, 34)";
    vaccineCardElement.style.backgroundColor = "rgb(174, 202, 214)";
    vaccineCardElement.style.backgroundImage =
      "linear-gradient(315deg, #aecad6 0%, #b8d3fe 74%)";
  }

  navbarHeaderElement.style.boxShadow = "0 0 20px lightgray";

  document.body.classList.remove("dark-mode");
}
