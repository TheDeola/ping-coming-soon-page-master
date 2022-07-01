const form = document.getElementById('form');
const email = document.getElementById('email')
const btn = document.getElementById('submit')


btn.addEventListener('click', (e) =>{
    e.preventDefault();
    // document.body.style.backgroundColor = 'red'
    checkInput()
})

function checkInput() {
    const emailValue = email.value.trim()

    if (emailValue === '' || !isEmail(emailValue)) {
        setError(email, 'error')
    }

    else {
        setSuccess(email)
    }

}

const setError = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    input.classList.add('error')
    formControl.className = 'form-control error'
    message = small.innerText
//     const small = formControl.querySelector('small');
//     small.innerText = message;
//     formControl.className = 'form-control error';
}

const setSuccess =(input) => {
    const formControl = input.parentElement;
    input.classList.add('success')

    formControl.className='form-control success'
}

function isEmail(email) {
 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}