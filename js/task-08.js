const sumbitForm = document.querySelector('.login-form');
const emailFiend = document.querySelector('input[type="email"]');
const passwordFiend = document.querySelector('input[type="password"]');

sumbitForm.addEventListener('sumbit', onFormSumbit);
    
let user = {
    email: "",
    password: "",
}
function onFormSumbit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTurget);
    
    if (emailFiend.value === '' || passwordFiend.value === '') {
        return console.log("All fields must be filled");
    }
    else {
        user.email = emailFiend.value;
        user.password = passwordFiend.value;
    }

    event.currentTurget.reset()

    console.log(user)
}

