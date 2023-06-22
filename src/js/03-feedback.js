const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.message'),
  emailarea: document.querySelector('.email'),
};

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('submit...');
}
