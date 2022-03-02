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
