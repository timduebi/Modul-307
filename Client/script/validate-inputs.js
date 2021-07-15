const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
let password = document.getElementById('password');
const name = document.getElementById( 'name');
const lastname = document.getElementById( 'lastname');

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  if (!re.test(input.value.trim())){
    showError(input, 'Email ist nicht korrekt')
  } else {
    showSuccess(input);
  }
}

function checkNames(input,errMsg) {
  const re = /^[a-zA-Z]+$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Name darf keine Zahl beinhalten');
  }
}

function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} wird benötigt`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input,
        `${getFieldName(input)} muss mehr als mindestens ${min} zeichen haben`
    );
  } else if (input.value.length > max) {
    showError(input,
        `${getFieldName(input)} muss weniger als ${max} Zeichen haben`
    );
  } else {
    showSuccess(input);
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function validateForm(){
  if(!checkRequired([username, email, password, name, lastname])){
    checkNames(name);
    checkLength(username, 3, 20);
    checkLength(password, 6, 25);
    checkLength(lastname, 3, 25);
    checkEmail(email);
  }
}


form.addEventListener('submit', function(e) {
  //https://www.w3schools.com/jsref/event_preventdefault.asp
  e.preventDefault();
  //First validate form
  validateForm();
});
