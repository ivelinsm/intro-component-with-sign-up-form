const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

//Show error outline
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small');
    small.innerText = message;
    small.style.visibility = "visible";
}

//Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.style.visibility = "hidden";
}

//Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} cannot be empty`)
        }
        else {
            showSuccess(input);
        }
    });
}

//Get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Check length
function checkLength(input, minLen) {
    if (input.value.trim().length < minLen) {
        showError(input, `${getFieldName(input)} should be at least ${minLen} characters`)
    }
}

//Check Email
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(input.value).toLowerCase())){
        showError(input, `Email is not valid`)
    }

  }

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([firstName, lastName, email, password]);
    checkLength(firstName, 4)
    checkLength(lastName, 4)
    checkLength(password, 6)
    checkEmail(email);
})