
import throttle from "lodash.throttle";
const formInput = document.querySelector('.feedback-form ');

const inputInfo = {email: '', message: ''};

formInput.addEventListener('input', throttle(function (evt) {
  const {name , value} = evt.target
    inputInfo[name] = value;
    console.log(inputInfo);
    
    localStorage.setItem('feedback-form-state', JSON.stringify(inputInfo));

}, 500));

const getFormInfo = localStorage.getItem('feedback-form-state');
if (getFormInfo) {
    const formLocalInfo = JSON.parse(getFormInfo);
    formInput.email.value = formLocalInfo.email;
    formInput.message.value = formLocalInfo.message;
};

formInput.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log(getFormInfo);
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
})

