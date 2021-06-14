const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputTarget);
inputEl.addEventListener('blur', onInputBlur);

function onInputTarget(event) {
   event.currentTarget.value.trim() === "" ? nameEl.textContent = 'незнакомец' : nameEl.textContent = event.currentTarget.value;
};
