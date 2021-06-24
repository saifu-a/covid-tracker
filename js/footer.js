const signUpEmail = document.querySelector(".signup__email");
const signUpForm = document.querySelector(".signup");

signUpForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  console.log(signUpEmail.value);
});
