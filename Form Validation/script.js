const submitBtn = document.querySelector("#submitBtn");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passError = document.querySelector("#passError");
const confirmError = document.querySelector("#confirmError");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (nameValidation() && emailValidation() && passValidation() && confirmPass()) {
        alert("Form is submitted succesfully :");
    }

});

function nameValidation() {
    let name = document.querySelector("#name").value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is Required";
        nameError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }

    else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write your full name";
        nameError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    nameError.innerHTML = "";
    nameError.previousElementSibling.classList.add("fa-check");
    return true;
};


function emailValidation() {
    let email = document.querySelector("#email").value;

    if (email.length == 0) {
        emailError.innerHTML = "email is Required";
        emailError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }

    else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = "Enter valid email";
        emailError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add("fa-check");
    return true;
};


function passValidation() {
    let pass = document.querySelector("#password").value;

    if (pass.length == 0) {
        passError.innerHTML = "Password is Required";
        passError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }

    else if (!pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)) {
        passError.innerHTML = "Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    passError.innerHTML = "";
    passError.previousElementSibling.classList.add('fa-check');
    return true;
};

function confirmPass() {
    let pass = document.querySelector("#password").value;
    let confirmPass = document.querySelector("#confirm").value;

    if (confirmPass.length == 0) {
        confirmError.innerHTML = "Confirm your password";
        confirmError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }

    else if (confirmPass !== pass) {
        confirmError.innerHTML = "Incorrect password !";
        confirmError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    confirmError.innerHTML = "";
    confirmError.previousElementSibling.classList.add('fa-check');
    return true;

}