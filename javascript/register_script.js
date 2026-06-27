function togglePassword(id, icon){

    const input = document.getElementById(id);

    if(input.type === "password"){
        input.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }else{
        input.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}
document.getElementById("registerForm").addEventListener("submit",function(e){

    e.preventDefault();

    const first=document.getElementById("firstName").value.trim();
    const last=document.getElementById("lastName").value.trim();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value;
    const confirm=document.getElementById("confirmPassword").value;

    if(first==="" || last==="" || email===""){
        alert("Please fill all fields");
        return;
    }

    if(password.length<6){
        alert("Password must be at least 6 characters");
        return;
    }

    if(password!==confirm){
        alert("Passwords do not match");
        return;
    }

    alert("Registration Successful");
});