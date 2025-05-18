console.log("JavaScript is linked successfully!");
document.getElementById("changeText").addEventListener("click", function() {
    document.getElementById("title").textContent = "Text Updated!";
});

document.getElementById("validateEmail").addEventListener("click", function() {
    let email = document.getElementById("emailInput").value;
    let regex = /^\S+@\S+\.\S+$/;
    
    if (regex.test(email)) {
        alert("Valid email!");
    } else {
        alert("Invalid email format!");
    }
});