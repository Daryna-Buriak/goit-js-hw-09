const feedbackForm = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

function setFormData(item) {
  const defaultValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (defaultValue !== null) {
    formData = defaultValue;
  } else return;
}

setFormData();

function handleInput(event) {
  const inputSrc = event.target;
  const inputName = inputSrc.name;
  const inputValue = inputSrc.value;

  formData[inputName] = inputValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    return alert('Please fill all fields');
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
}

const savedItem = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedItem !== null) {
  feedbackForm.elements.email.value = savedItem.email;
  feedbackForm.elements.message.value = savedItem.message;
}

feedbackForm.addEventListener('submit', handleSubmit);
feedbackForm.addEventListener('input', handleInput);
