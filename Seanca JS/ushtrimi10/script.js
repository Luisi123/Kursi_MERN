function info(){
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    
    if (password.length < 8) {
        alert("Password too short! Must be at least 8 characters.");
        return false;
    } 
    else if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }
    else {
        alert("Form submitted successfully!");
        return true;
    }
}