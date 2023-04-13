"use strict";

// Form elements inputs

const userName = document.getElementById("firstname"),
  userLastName = document.getElementById("lastname"),
  userMail = document.getElementById("email"),
  userNumber = document.getElementById("phone"),
  address = document.getElementById("address"),
  city = document.getElementById("city"),
  postal = document.getElementById("postal");

// Form validation

function getValidationStyle(isInvalid) {
  return `1px solid ${isInvalid ? "red" : "green"}`;
}

function validate() {
  // Inputs values

  let user = userName.value;
  let userLastNameValue = userLastName.value;
  let userMailValue = userMail.value;
  let userNumberValue = userNumber.value;
  let letters = /^[A-Za-z]+$/;
  let addressValue = address.value;
  let cityValue = city.value;
  let postalValue = postal.value;

  if (!user) {
    userName.style.border = getValidationStyle(true);
    alert("Please write your first name");
  } else if (!user.match(letters)) {
    userName.style.border = getValidationStyle(true);
    alert("Please write only letters for your first name");
  } else {
    userName.style.border = getValidationStyle();
  }

  if (!userLastNameValue) {
    userLastName.style.border = getValidationStyle(true);
    alert("Please write your last name");
  } else if (!userLastNameValue.match(letters)) {
    userLastName.style.border = getValidationStyle(true);
    alert("Please write only letters for your last name");
  } else {
    userLastName.style.border = getValidationStyle();
  }

  if (!userMailValue.includes("@")) {
    userMail.style.border = getValidationStyle(true);
    alert("Please write the correct format of email");
  } else {
    userMail.style.border = getValidationStyle();
  }

  if (!userNumberValue) {
    userNumber.style.border = getValidationStyle(true);
    alert("Please write your phone number");
  } else if (userNumberValue.length < 9) {
    userNumber.style.border = getValidationStyle(true);
    alert("Please write minimum nine characters for phone number");
  } else if (userNumberValue.match(letters)) {
    userNumber.style.border = getValidationStyle(true);
    alert("Please write only numbers of your phone");
  } else {
    userNumber.style.border = getValidationStyle();
  }

  if (!addressValue) {
    address.style.border = getValidationStyle(true);
    alert("Please write your address");
  } else {
    address.style.border = getValidationStyle();
  }

  if (!cityValue) {
    city.style.border = getValidationStyle(true);
    alert("Please write your city");
  } else {
    city.style.border = getValidationStyle();
  }

  if (!postalValue) {
    postal.style.border = getValidationStyle(true);
    alert("Please write your city");
  } else {
    postal.style.border = getValidationStyle();
  }
}

document.getElementById("submit").addEventListener("click", function () {
  validate();
});

const form = document.getElementById("info-container");
form.addEventListener("submit", logFormData);

function logFormData(event) {
  const data = new FormData(event.target);
  const inputFields = [...data.entries()];

  inputFields.forEach((inputField) =>
    console.log(`${inputField[0]}: ${inputField[1]}`)
  );
}
