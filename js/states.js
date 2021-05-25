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
const input = document.getElementById('search-input');

function createStateList(){
    const num_states = stateList.length;

    let i = 0, ul_list_id;

    stateList.forEach( (state, index) => {
        if( index % Math.ceil(num_states/num_of_ul_lists) == 0)
        {
            ul_list_id = `list-${i}`;
            state_list_element.innerHTML += `<ul id='${ul_list_id}'></ul>`;
            i++;
        }

        document.getElementById(`${ul_list_id}`).innerHTML += 
            `<li onclick="fetchData('${state.name}')" id="${state.name}">
            ${state.name}</li> `;
    })
}
let num_of_ul_lists=2;
createStateList();

chang_state_btn.addEventListener("click", function(){
    input.value = "";
    resetStateList();
    search_state_element.classList.toggle("hide");
    search_state_element.classList.add("fadeIn");
});

close_list_btn.addEventListener("click", function(){
    search_state_element.classList.toggle("hide");
});

state_list_element.addEventListener("click", function(){
    search_state_element.classList.toggle("hide");
});

input.addEventListener("input", function(){
    let value = input.value.toUpperCase();

    stateList.forEach( state => {
        if( state.name.toUpperCase().startsWith(value))
        {
            document.getElementById(state.name).classList.remove("hide");
        }
        else
        {
            document.getElementById(state.name).classList.add("hide");
        }
    })
})

function resetStateList(){
    stateList.forEach( state => {
        document.getElementById(state.name).classList.remove("hide");
    })
}

const state_name_element = document.querySelector(".state .name");
const total_cases_element = document.querySelector(".total-cases .value");
const new_cases_element = document.querySelector(".total-cases .new-value");
const recovered_element = document.querySelector(".recovered .value");
const new_recovered_element = document.querySelector(".recovered .new-value");
const deaths_element = document.querySelector(".deaths .value");
const new_deaths_element = document.querySelector(".deaths .new-value");
const vaccinated_element = document.querySelector(".vaccinated .value");
const new_vaccinated_element = document.querySelector(".vaccinated .new-value");
const tested_element = document.querySelector(".tested .value");
const new_tested_element = document.querySelector(".tested .new-value");


let total_cases, recovered_cases , death_cases, new_confirmed_cases , new_recovered_cases, new_death_cases, state_name, vaccinated, tested, new_vaccinated, new_tested,j=0;
async function fetchData(state1) {
    await fetch("https://api.covid19india.org/v4/min/data.min.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        stateList.forEach((state) =>{
            let properties = Object.keys(data);
            if(state1== state.name)
            { 
                for ( let j=0; j< properties.length; j++)
                {
                     if(state.code == properties[j])
                    {
                        state_name = state1;
                        total_cases = data[properties[j]].total.confirmed;
                        recovered_cases = data[properties[j]].total.recovered;
                        death_cases = data[properties[j]].total.deceased;
                        new_confirmed_cases = data[properties[j]].delta.confirmed;
                        new_recovered_cases = data[properties[j]].delta.recovered;
                        new_death_cases = data[properties[j]].delta.deceased;
                        vaccinated = data[properties[j]].total.vaccinated;
                        tested = data[properties[j]].total.tested;
                        new_vaccinated = data[properties[j]].delta7.vaccinated;
                        new_tested = data[properties[j]].delta7.tested;
                    }
                }
            }
        });
        updateUI();
      });
    }
    let l = stateList.length;
    let user_state = stateList[l-1].name;
    fetchData(user_state);

    function updateUI() 
    {
        updateStats();
      }

    function updateStats()
     {
        state_name_element.innerHTML = state_name;
        total_cases_element.innerHTML = total_cases;
        new_cases_element.innerHTML = `+${new_confirmed_cases}`;
        recovered_element.innerHTML = recovered_cases;
        new_recovered_element.innerHTML = `+${new_recovered_cases}`;
        deaths_element.innerHTML = death_cases;
        new_deaths_element.innerHTML = `+${new_death_cases}`;
        vaccinated_element.innerHTML = vaccinated;
        new_vaccinated_element.innerHTML= `+${new_vaccinated}`;
        tested_element.innerHTML = tested;
        new_tested_element.innerHTML = `+${new_tested}`;
     }