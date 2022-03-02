function togglePass() {
  const inputPass = document.querySelector("#password");
  if (inputPass.getAttribute("type") === "password") {
    inputPass.setAttribute("type", "text");
  } else {
    inputPass.setAttribute("type", "password");
  }

  const toggleButton = document.querySelector("#toggle");
  if (toggleButton.getAttribute("class") === "fa-solid fa-eye-slash") {
    toggleButton.setAttribute("class", "fa-solid fa-eye");
  } else {
    toggleButton.setAttribute("class", "fa-solid fa-eye-slash");
  }
}

function toggleConfPass() {
  const inputConfPass = document.querySelector("#confPassword");
  if (inputConfPass.getAttribute("type") === "password") {
    inputConfPass.setAttribute("type", "text");
  } else {
    inputConfPass.setAttribute("type", "password");
  }

  const toggleButtonConf = document.querySelector("#toggleConf");
  if (toggleButtonConf.getAttribute("class") === "fa-solid fa-eye-slash") {
    toggleButtonConf.setAttribute("class", "fa-solid fa-eye");
  } else {
    toggleButtonConf.setAttribute("class", "fa-solid fa-eye-slash");
  }
}

function requiredCheck() {
  document.getElementById("terms").required = true;
}
