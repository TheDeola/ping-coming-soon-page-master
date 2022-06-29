const email = document.getElementById('email');
const btn = document.getElementById('submit');

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
})

const checkInput = () => {
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setError (email, 'Email cannot be empty')
    } else if (!isEmail(emailValue)) {
        setError (email, 'Please provide a valid email address')
    } else {
        setSuccess(email);
    }
}

const setError = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

const setSuccess =(input) => {
    const formControl = input.parentElement;
    formControl.className='form-control success'
}

function isEmail(email) {
 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}