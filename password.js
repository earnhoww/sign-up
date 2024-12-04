const password = document.getElementById("password");
const password2 = document.getElementById("confirm-password");
const form = document.getElementById("main-form");
const phoneNum = document.getElementById("phone");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");

form.addEventListener("submit", e => {
    e.preventDefault();
    checkInputs(e);
})

function checkInputs(e) {
    let pass1Value = password.value.trim();
    let pass2Value = password2.value.trim();
    let phone = phoneNum.value.trim();
    let fnameValue = fname.value.trim();
    let lnameValue = lname.value.trim();
    let emailValue = email.value.trim();

    if (fnameValue === '' || fnameValue == null){
        setError(fname, "Enter a valid first name");
    } else {
        setSuccess(fname);
    }

    if (lnameValue === '' || lnameValue == null){
        setError(fname, "Enter a valid last name");
    } else {
        setSuccess(lname);
    }

    if (emailValue === '' || emailValue == null){
        setError(email, "Email cannot be empty");
    } else if (!emailValue.includes("@")) {
        setError(email, "Enter a valid email address");
    } else {
        setSuccess(email)
    }
    
    if (pass1Value === '' || pass1Value == null){
        setError(password, "Password cannot be empty");
    } else if (pass1Value.length < 5) {
        setError(password, "Password cannot be less than 5 characters");
    } else {
        setSuccess(password);
    }

    if (pass1Value !== pass2Value) {
        setError(password2, "Passwords do not match")
    } else {
        setSuccess(password2);
    }

    if (!isNumeric(phone)){
        setError(phoneNum, "Must only be numbers")
    } else{
        setSuccess(phoneNum);
    }

    alert("Great success");
    form.submit();
}

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

function setError(element, message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');  
    errorDisplay.innerText = message;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

function setSuccess(element){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');  
    errorDisplay.innerText = '';
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}