const input = document.getElementById('validation-input');
const neededlenght = input.getAttribute('data-length');


function onBlurInput(event) {
   if(event.currentTarget.value.length == neededlenght){
      event.currentTarget.classList.remove('invalid');
      event.currentTarget.classList.add('valid');
   } else {
      event.currentTarget.classList.remove('valid');
      event.currentTarget.classList.add('invalid');
   }
}

input.addEventListener('blur', onBlurInput);