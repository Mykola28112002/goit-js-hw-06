const sumbitForm = document.querySelector('form.login-form');
const emailFiend = document.querySelector('input[type="email"]');
const passwordFiend = document.querySelector('input[type="password"]');


    
let user = {
    email: "",
    password: "",
}

sumbitForm.addEventListener('submit', onFormSumbit);

function onFormSumbit(event) {
    event.preventDefault();
    const {elements: { email, password }} = event.currentTarget;
    
    if (emailFiend.value === "" || passwordFiend.value === "") {
        alert("All fields must be filled");
    }
    else {
        user.email = email.value;
        user.password = password.value;
    }
    console.log(user)
    event.currentTarget.reset()
}
