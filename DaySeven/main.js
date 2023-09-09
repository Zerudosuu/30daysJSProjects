// let nameError = document.querySelector("#nameError");
// let phoneError = document.querySelector("#phoneError");
// let emailError = document.querySelector("#emailError");
// let messageError = document.querySelector("#messageError");
// let submitError = document.querySelector("#submitError");

document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.querySelector(".submitBtn");
  const span = document.querySelectorAll("span");

  function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission
    let name = document.querySelector("#contactName").value;
    let phone = document.querySelector("#phone").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    if (name === null || name === "") {
      span.forEach((e) => {
        if (e.id === "nameError") {
          e.innerHTML = "Please enter a name";
        }
      });
    }
    if (phone === null || phone === "") {
      span.forEach((e) => {
        if (e.id === "phoneError") {
          e.innerHTML = "Please enter a phone number";
        } else {
          e.innerHTML = "";
        }
      });
    }
    if (email === null || email === "") {
      span.forEach((e) => {
        if (e.id === "emailError") {
          e.innerHTML = "Please enter an email address";
        }
      });
    }
    if (message === null || message === "") {
      span.forEach((e) => {
        if (e.id === "messageError") {
          e.innerHTML = "Please enter a message";
        }
      });
    }
  }

  submitBtn.addEventListener("click", validateForm);
});
