const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

inputEl.addEventListener('input', (e) => {
  const inputValue = e.target.value.trim();
  if (inputValue) {
    outputEl.textContent = inputValue;
  } else {
    outputEl.textContent = 'Anonymous';
  }
});
