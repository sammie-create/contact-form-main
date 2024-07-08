// "use strict";
const form = document.querySelector("#form");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const genEnquiry = document.querySelector("#general_enquiry");
const supportRequest = document.querySelector("#support_request");
const message = document.querySelector("#message");
const consent = document.querySelector("#consent");
// const button = document.querySelector("button");

// alert("What is your name?");

form.addEventListener("submit", e => {
  e.preventDefault();
  console.log("works");

  validateInputs();
});

const setError = (element, messages) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-display");

  errorDisplay.innerText = messages;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-display");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (firstNameValue === "") {
    setError(firstName, "This field is required");
  } else {
    setSuccess(firstName);
  }
  if (lastNameValue === "") {
    setError(lastName, "This field is required");
  } else {
    setSuccess(lastName);
  }
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Please enter a valid email address");
  } else {
    setSuccess(email);
  }

  if (messageValue === "") {
    setError(message, "This field is required");
  } else {
    setSuccess(message);
  }
};
