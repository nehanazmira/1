const usernameField = document.querySelector("[name=username]");

usernameField.addEventListener("keyup", (event) => {
    if(!usernameField.validity.valid){
        console.error("username invalid");
        document.getElementById("invalid-username").style.display = "block";
    } else {
         console.info("username valid");
        document.getElementById("invalid-username").style.display = "none";
    }
});

const nameField = document.querySelector("[name=name]");

nameField.addEventListener("keyup", (event) => {
    if(!nameField.validity.valid){
        console.error("name invalid");
        document.getElementById("invalid-name").style.display = "block";
    } else {
         console.info("name valid");
        document.getElementById("invalid-name").style.display = "none";
    }
});

const emailField = document.querySelector("[name=email]");

emailField.addEventListener("keyup", (event) => {
    if(!emailField.validity.valid){
        console.error("email invalid");
        document.getElementById("invalid-email").style.display = "block";
    } else {
         console.info("email valid");
        document.getElementById("invalid-email").style.display = "none";
    }
});

const phoneField = document.querySelector("[name=phone]");

phoneField.addEventListener("keyup", (event) => {
    if(!phoneField.validity.valid){
        console.error("phone invalid");
        document.getElementById("invalid-phone").style.display = "block";
    } else {
         console.info("phone valid");
        document.getElementById("invalid-phone").style.display = "none";
    }
});

const passwordField = document.querySelector("[name=password]");

passwordField.addEventListener("keyup", (event) => {
    if(!passwordField.validity.valid){
        console.error("password invalid");
        document.getElementById("invalid-password").style.display = "block";
    } else {
         console.info("password valid");
        document.getElementById("invalid-password").style.display = "none";
    }
});