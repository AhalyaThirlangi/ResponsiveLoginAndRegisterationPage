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
document.getElementById("loginForm").addEventListener("submit",function(e){

    e.preventDefault();

    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value.trim();

    if(email==="" || password===""){
        alert("Please fill all fields");
        return;
    }

    alert("Login Successful");
});