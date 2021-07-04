// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyASCRhYTscTvAQFzlJ8kUeJgmrvCYlQhP0",
  authDomain: "covid-19-register-90b7c.firebaseapp.com",
  databaseURL: "https://covid-19-register-90b7c-default-rtdb.firebaseio.com",
  projectId: "covid-19-register-90b7c",
  storageBucket: "covid-19-register-90b7c.appspot.com",
  messagingSenderId: "127111396290",
  appId: "1:127111396290:web:a0675cb578a0bad230745b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference Sign Up Info Collections
let signupInfo = firebase.database().ref("newsletter");

const signUpEmail = document.querySelector(".signup__email");
const signUpForm = document.querySelector(".signup");

signUpForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let newSignupInfo = signupInfo.push();

  newSignupInfo
    .set({
      email: signUpEmail.value,
    })
    .then(() => {
      swal({
        icon: "success",
        title: "Good job!",
        text: "You have successfully subscribed!",
      });
    })
    .catch(() => {
      swal({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    });

  document.querySelector(".signup form").reset();
});
