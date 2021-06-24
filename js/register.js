

// Reference User Info Collections
let userInfo = firebase.database().ref("registration");

document.querySelector(".register-form").addEventListener("submit", submitForm);

function submitForm(evt) {
  evt.preventDefault();

  // Get Input Values
  let name = document.querySelector(".name").value;
  let phoneNo = document.querySelector(".phone-no").value;
  let email = document.querySelector(".email").value;
  let website = document.querySelector(".website").value;
  let location = document.querySelector(".location").value;

  console.log(name, phoneNo, email, website, location);

  saveContactInfo(name, phoneNo, email, website, location);

  document.querySelector(".register-form").reset();
}

// Save Information to Firebase
function saveContactInfo(name, phoneNo, email, website, location) {
  let newUserInfo = userInfo.push();

  newUserInfo.set({
    name: name,
    phoneNo: phoneNo,
    email: email,
    website: website,
    location: location,
  });
}
