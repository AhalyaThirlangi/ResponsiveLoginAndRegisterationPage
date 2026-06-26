document.getElementById("registerForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let username =
    document.getElementById("username").value;

    let email =
    document.getElementById("email").value;

    let password =
    document.getElementById("password").value;

    let confirmPassword =
    document.getElementById("confirmPassword").value;

    let errorMsg =
    document.getElementById("errorMsg");

    errorMsg.textContent = "";

    if(username === "" || email === ""){
        errorMsg.textContent =
        "All fields are required";
        return;
    }

    if(password.length < 6){
        errorMsg.textContent =
        "Password must be at least 6 characters";
        return;
    }

    if(password !== confirmPassword){
        errorMsg.textContent =
        "Passwords do not match";
        return;
    }

    alert("Registration Successful!");
});