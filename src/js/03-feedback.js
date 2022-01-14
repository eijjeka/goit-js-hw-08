const form = document.querySelector('.feedback-form');
console.log(form)
const STORAGE_KEY = "feedback-form-state";

const formData = {};

form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value;
    console.log(formData)
});


