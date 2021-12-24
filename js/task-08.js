const form = document.querySelector('.login-form');
let message = '';

form.addEventListener('submit',onInputSubmit);

function onInputSubmit(event){
   event.preventDefault();
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (!password || !mail ){
        message = alert('All fields must be completed');
    }   else { 
        const formData ={
            mail,
            password,
        };
        console.log(formData);
        form.reset();
    }
};

