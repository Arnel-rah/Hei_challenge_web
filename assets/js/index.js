document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("errorMessage");
    let loginButton = document.querySelector("button[type='submit']");

    let userEmail = "sadiarnel145@gmail.com";
    let userPassword = "123456";

    if (email === userEmail && password === userPassword) {
        let dots = "";
        let count = 0;

        loginButton.disabled = true;
        let loadingInterval = setInterval(() => {
            count = (count + 1) % 4; 
            dots = ".".repeat(count);
            loginButton.innerText = `Wait${dots}`;
        }, 500);

        setTimeout(() => {
            clearInterval(loadingInterval); 
            window.location.href = "home.html";
        }, 2000);
    } else {
        errorMessage.style.display = "flex";
    }
});
