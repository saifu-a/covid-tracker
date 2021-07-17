var simplemaps_countrymap_mapdata = {
  main_settings: {
    //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",

    //State defaults
    state_description: "State description",
    state_color: "#e64e34",
    state_hover_color: "#3B729F",
    state_url: "https://simplemaps.com",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",

    //Location defaults
    location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",

    //Zoom settings
    zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "15px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
  },
  state_specific: {
    1: {
      name: "Andaman And Nicobar",
      code: "AN",
      description: " ",
    },
    2: {
      name: "Andhra Pradesh",
      code: "AP",
      description: " ",
    },
    3: {
      name: "Arunachal Pradesh",
      code: "AR",
      description: " ",
    },
    4: {
      name: "Assam",
      code: "AS",
      description: " ",
    },
    5: {
      name: "Bihar",
      code: "BR",
      description: " ",
    },
    6: {
      name: "Chandigarh",
      code: "CH",
      description: " ",
    },
    7: {
      name: "Chhattisgarh",
      code: "CT",
      description: " ",
    },
    8: {
      name: "Dadra And Nagar Haveli",
      code: "DN",
      description: " ",
    },
    9: {
      name: "Daman And Diu",
      code: "DN",
      description: " ",
    },
    10: {
      name: "Delhi",
      code: "DL",
      description: " ",
    },
    11: {
      name: "Goa",
      code: "GA",
      description: " ",
    },
    12: {
      name: "Gujarat",
      code: "GJ",
      description: " ",
    },
    13: {
      name: "Haryana",
      code: "HR",
      description: " ",
    },
    14: {
      name: "Himachal Pradesh",
      code: "HP",
      description: " ",
    },
    16: {
      name: "Jharkhand",
      code: "JH",
      description: " ",
    },
    17: {
      name: "Karnataka",
      code: "KA",
      description: " ",
    },
    18: {
      name: "Kerala",
      code: "KL",
      description: " ",
    },
    19: {
      name: "Lakshadweep",
      code: "LD",
      description: " ",
    },
    20: {
      name: "Madhya Pradesh",
      code: "MP",
      description: " ",
    },
    21: {
      name: "Maharashtra",
      code: "MH",
      description: " ",
    },
    22: {
      name: "Manipur",
      code: "MN",
      description: " ",
    },
    23: {
      name: "Meghalaya",
      code: "ML",
      description: " ",
    },
    24: {
      name: "Mizoram",
      code: "MZ",
      description: " ",
    },
    25: {
      name: "Nagaland",
      code: "NL",
      description: " ",
    },
    26: {
      name: "Orissa",
      code: "OR",
      description: " ",
    },
    27: {
      name: "Puducherry",
      code: "PY",
      description: " ",
    },
    28: {
      name: "Punjab",
      code: "PB",
      description: " ",
    },
    29: {
      name: "Rajasthan",
      code: "RJ",
      description: " ",
    },
    30: {
      name: "Sikkim",
      code: "SK",
      description: " ",
    },
    31: {
      name: "Tamil Nadu",
      code: "TN",
      description: " ",
    },
    32: {
      name: "Tripura",
      code: "TR",
      description: " ",
    },
    33: {
      name: "Uttar Pradesh",
      code: "UP",
      description: " ",
    },
    34: {
      name: "Uttarakhand",
      code: "UT",
      description: " ",
    },
    35: {
      name: "West Bengal",
      code: "WB",
      description: " ",
    },
    36: {
      name: "Jammu And Kashmir",
      code: "JK",
      description: " ",
    },
    37: {
      name: "Telangana",
      code: "TG",
      description: " ",
    },
    38: {
      name: "Ladakh",
      code: "LA",
      description: " ",
    },
  },
  labels: {},
  legend: {
    entries: [],
  },
  regions: {},
};

async function fetchStateData() {
  let response, data;

  try {
    response = await fetch("https://api.covid19india.org/v4/min/data.min.json");
    data = await response.json();
  } catch (err) {
    console.error("Couldn't fetch data from Covid19India API. Error: " + err);
  }

  displayStateData(data);
  simplemaps_countrymap.refresh();
}

function displayStateData(data) {
  let states = simplemaps_countrymap_mapdata["state_specific"];
  for (let state in states) {
    let stateCode = states[state]["code"];
    let stateData = data[stateCode]["total"];

    states[state]["description"] = `
      Confirmed: ${stateData["confirmed"].toLocaleString("en-IN")} <br>
      Deceased: ${stateData["deceased"].toLocaleString("en-IN")} <br>
      Recovered: ${stateData["recovered"].toLocaleString("en-IN")} <br>
      Vaccinated(1st Dose): ${stateData["vaccinated1"].toLocaleString(
        "en-IN"
      )} <br>
      Vaccinated(2nd Dose): ${stateData["vaccinated2"].toLocaleString(
        "en-IN"
      )}`;

    let deaths = stateData["deceased"];
    if (deaths < 100) states[state].color = "#1FAA59";
    else if (deaths < 1000) states[state].color = "#FF6263";
    else if (deaths < 10000) states[state].color = "#D82E2F";
    else if (deaths < 100000) states[state].color = "#D00000";
    else states[state].color = "#FF0000";
  }
}

fetchStateData();
