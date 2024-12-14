let signup = document.getElementById("signup");
let userInputName = document.getElementById("name")
let userInputEmail = document.getElementById("email")
let userInputPassword = document.getElementById("password")
let userInputConfirmpassword = document.getElementById("confirmpassword")

let nameError = document.getElementById("nameError")
let emailError = document.getElementById("emailError")
let passwordError = document.getElementById("pswdError")
let ConfirmpasswordError = document.getElementById("RepasswordError")



signup.addEventListener("submit", (e) => {
    e.preventDefault();
    let regName = /^[a-zA-Z]{3,}$/
    let regEmail = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-z]{2,}$/
    let regPassword = /^(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*\d){2,})(?=(.*[@#$%&*!]){2,})[a-zA-Z0-9@#$%^&*!]{8,15}$/


    let name = userInputName.value;
    let email = userInputEmail.value;
    let password = userInputPassword.value;
    let confirmPassword = userInputConfirmpassword.value;

    let isvaildate = true

    if (!regName.test(name)) {
        nameError.textContent = "please enter atleast 3 chars long name which consists only smaills and caps"
        nameError.style.color="red"
        isvaildate = false
    } else {
        nameError.textContent = " "
    }
    if (!regEmail.test(email)) {
        emailError.textContent = "please enter valid email"
        emailError.style.color="red"
        isvaildate = false
    } else {
        emailError.textContent = " "
    }
    if (!regPassword.test(password)) {
        passwordError.textContent = "please enter atleast 8 chars long name & 2 smaills,2caps,2symbols,2numbers"
        passwordError.style.color="red"
        isvaildate = false
    } else {
        passwordError.textContent = " "
    }
    if (confirmPassword !== password) {
        ConfirmpasswordError.textContent = "Passwords do not match!"
        ConfirmpasswordError.style.color="red"
        isvaildate = false
    } else {
        ConfirmpasswordError.textContent = " "
    }



    if (isvaildate) {

        let deatils = { Name: name, Email: email, pswd: password }
        alert("signup successful....")
        localStorage.setItem("details", JSON.stringify(deatils))
        window.location.href = "../login/login.html"
    }
})



