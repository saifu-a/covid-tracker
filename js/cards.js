async function fetchData() {
    await fetch("https://api.covid19api.com/summary")
      .then((response) => {
        console.log("Inside first then");
        return response.json();
      })
      .then((data) => {
        console.log("Inside second then");
        c='+';
        console.log(data.Countries[76].NewConfirmed);
        const confirmed = data.Countries[76].TotalConfirmed;
        const new_confirmed = data.Countries[76].NewConfirmed;
        document.getElementById( "confirmed").innerHTML += `<p>${confirmed}<br><small>${c}${new_confirmed}</small></p>`; 
        const recovered = data.Countries[76].TotalRecovered;
        const new_recovered = data.Countries[76].NewRecovered;
        document.getElementById("recovered").innerHTML += `<p>${recovered}<br><small>${c}${new_recovered}</small></p>`; 
        const deceased = data.Countries[76].TotalDeaths;
        const new_deceased = data.Countries[76].NewDeaths;
        document.getElementById( "deceased").innerHTML += `<p>${deceased}<br><small>${c}${new_deceased}</small></p>`; 
      });
  }
  fetchData();
  