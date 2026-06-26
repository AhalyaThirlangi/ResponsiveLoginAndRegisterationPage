const toggleBtn = document.getElementById("toggleBtn");
const password = document.getElementById("password");

toggleBtn.addEventListener("click", () => {
    if(password.type === "password"){
        password.type = "text";
    } else {
        password.type = "password";
    }
});

document.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    let valid = true;

    if(email === ""){
        emailError.textContent = "Email is required";
        valid = false;
    }

    if(pass.length < 6){
        passwordError.textContent =
        "Password must be at least 6 characters";
        valid = false;
    }

    if(valid){
        alert("Login Successful!");
    }
});