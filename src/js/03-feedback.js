import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.message'),
  emailarea: document.querySelector('.email'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 1000));

const STORAGE_KEY = 'feedback-form-state';

populateAreas();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(evt) {
  feedback = JSON.stringify({
    message: refs.textarea.value,
    email: refs.emailarea.value,
  });
  localStorage.setItem(STORAGE_KEY, feedback);
}

function populateAreas() {
  const savedMsg = localStorage.getItem(STORAGE_KEY);
  if (savedMsg) {
    msg = JSON.parse(savedMsg);
    refs.emailarea.value = msg.email;
    refs.textarea.value = msg.message;
  }
}
