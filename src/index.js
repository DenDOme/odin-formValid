import './main.css';

const getForm = document.getElementById('form');

getForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const errors = [];
  const inputOne = e.target[0].value;
  const inputTwo = e.target[1].value;
  const inputThr = e.target[2].value;
  const inputfor = e.target[3].value;
  const inputFiv = e.target[4].value;

  console.log(inputOne, inputTwo, inputThr, inputfor, inputFiv);

  if (!inputOne || !inputTwo || !inputThr || !inputfor || !inputFiv) {
    const error = 'all field must be filled';
    errors.push(error);
  }
  if (inputfor <= 8 || inputfor <= 8) {
    const error = 'password less than 8';
    errors.push(error);
  }
  if (!ValidateZip(inputThr)) {
    errors.push('wrong zipCode');
  }
  if (inputfor !== inputFiv) {
    errors.push('password dont match');
  }
  if (!ValidateEmail(inputOne)) {
    errors.push('not valid email');
  }
  loadErrors(errors);
});
function ValidateEmail(input) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {
    return true;
  }
  return false;
}
function ValidateZip(input) {
  const zipCodePattern = /^\d{5}(-\d{4})?$/;

  if (zipCodePattern.test(input)) {
    return true;
  }
  return false;
}
function loadErrors(array) {
  const getDisp = document.getElementById('error');
  cleanDisp();
  array.forEach((element) => {
    const createElement = document.createElement('span');
    createElement.textContent = element;
    getDisp.appendChild(createElement);
  });
}
function cleanDisp() {
  const getDisp = document.getElementById('error');
  while (getDisp.firstChild) {
    getDisp.removeChild(getDisp.lastChild);
  }
}
