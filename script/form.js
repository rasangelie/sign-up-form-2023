const form = document.getElementById('form');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const password = document.getElementById('pass');
const confirmPass = document.getElementById('confirmPass');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();

    form.reset();
}); 


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const displayError = inputControl.querySelector('.error');

    displayError.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')

}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const displayError = inputControl.querySelector('.error');

    displayError.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
}


const isValid = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstNameVal = firstName.value.trim();
    const lastNameVal = lastName.value.trim();
    const emailVal = email.value.trim();
    const phoneNumberVal = phoneNumber.value.trim();
    const passwordVal = password.value.trim();
    const confirmPassVal = confirmPass.value.trim();


    //add validation for firstname

    if (firstNameVal === '') {
        setError(firstName, 'Enter first name');
    } else {
        setSuccess(firstName);
    }

    //lastname
    if (lastNameVal === '') {
        setError(lastName, 'Enter last name');
    } else {
        setSuccess(lastName);
    }

    //email

    if (emailVal === '') {
        setError(email, 'Email is required');
    } else if (!isValid(emailVal)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    //phoneNumber
    if (phoneNumberVal === '') {
        setError(phoneNumber, 'Phone number is required');
    } else if (phoneNumberVal.length < 11) {
        setError(phoneNumber, 'Provide the 11 digits of your phone number')
    } else {
        setSuccess(phoneNumber);
    }

    //password
    if (passwordVal === '') {
        setError(password, 'Password is required')
    } else if (passwordVal.length < 8) {
        setError(password, 'Password must be at least 8 characters.')
    } else {
        setSuccess(password);
    }

    //confirm

    if (confirmPassVal === '') {
        setError(confirmPass, 'Please confirm your password')
    } else if (confirmPassVal !== passwordVal) {
        setError(confirmPass, "Password doesn't match")
    } else {
        setSuccess(confirmPass);
    }

};

