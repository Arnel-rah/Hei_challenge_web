

const validCredentials = {
    email: "hei.arnel@gmail.com",
    password: "123456"
};
  const authForm = document.getElementById("authForm");
  const errorDisplay = document.querySelector(".error-display");
  const submitButton = document.querySelector("button");
  authForm.addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    submitButton.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Loading...`;
    submitButton.disabled = true; 
  
    setTimeout(() => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      if (email === validCredentials.email && password === validCredentials.password) {
        window.location.href = "home.html";
      } else {
        errorDisplay.style.display = "flex";
        submitButton.innerHTML = "Login Now";
        submitButton.disabled = false;
      }
    }, 1000);
  });
  
  document.getElementById("email").addEventListener("input", () => {
    errorDisplay.style.display = "none";
  });
  
  document.getElementById("password").addEventListener("input", () => {
    errorDisplay.style.display = "none";
  });